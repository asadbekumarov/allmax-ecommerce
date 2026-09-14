"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { formatPrice } from "@/lib/utils";
import { ShoppingBag, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: ProductType }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isLiked, setIsLiked] = useState(false);

  const { addToCart } = useCartStore();

  const isOutOfStock = (product.stock?.[selectedSize] ?? 1) <= 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isOutOfStock) {
      toast.error("Tanlangan o'lcham omborda qolmagan!");
      return;
    }
    addToCart({
      ...product,
      quantity: 1,
      selectedSize,
      selectedColor,
    });
    toast.success(`${product.name} savatchaga qo'shildi!`);
  };

  const isNew = Number(product.id) <= 3;
  const isBestseller = Number(product.id) === 1 || Number(product.id) === 5;

  return (
    <div className="group flex flex-col justify-between bg-[#141414] border border-[#222222] rounded-xl overflow-hidden hover:border-[#22c55e]/60 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]">
      {/* IMAGE CONTAINER (Aavira aspect-ratio) */}
      <div className="relative aspect-[3/4] w-full bg-[#181818] overflow-hidden">
        <Link href={`/products/${product.id}`} className="block w-full h-full">
          <Image
            src={product.images[selectedColor] || Object.values(product.images)[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover p-2 group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* TOP LEFT BADGE (Aavira style: NEW or BESTSELLER) */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
          {isNew && (
            <span className="bg-[#22c55e] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
              NEW
            </span>
          )}
          {isBestseller && (
            <span className="bg-amber-500 text-black text-[9px] font-black uppercase px-2 py-0.5 rounded shadow-sm">
              BESTSELLER
            </span>
          )}
        </div>

        {/* TOP RIGHT WISHLIST HEART */}
        <button
          type="button"
          onClick={() => {
            setIsLiked(!isLiked);
            toast.info(isLiked ? "Sevimlilardan o'chirildi" : "Sevimlilarga qo'shildi!");
          }}
          className={`absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-[#141414]/80 backdrop-blur-xs flex items-center justify-center transition-all ${
            isLiked
              ? "text-[#22c55e] scale-110"
              : "text-zinc-400 hover:text-white"
          }`}
          title="Sevimlilarga qo'shish"
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-[#22c55e]" : ""}`} />
        </button>

        {/* QUICK FIX POLKA LABEL OVERLAY */}
        <div className="absolute bottom-2 left-2 z-10">
          <span className="bg-black/80 backdrop-blur-xs text-[#22c55e] text-[10px] font-black uppercase px-2 py-0.5 rounded border border-[#22c55e]/30">
            FIX {formatPrice(product.price)}
          </span>
        </div>
      </div>

      {/* DETAIL CONTENT */}
      <div className="p-3.5 flex flex-col gap-2.5">
        <div>
          <Link href={`/products/${product.id}`}>
            <h3 className="font-bold text-sm text-white leading-snug line-clamp-1 group-hover:text-[#22c55e] transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
            {product.shortDescription}
          </p>
        </div>

        {/* SIZES QUICK PICK */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
          {product.sizes.map((size) => {
            const outOfStock = (product.stock?.[size] ?? 1) <= 0;
            const isSelected = selectedSize === size;
            return (
              <button
                key={size}
                type="button"
                disabled={outOfStock}
                onClick={() => setSelectedSize(size)}
                className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase transition-all ${
                  outOfStock
                    ? "opacity-30 text-zinc-600 line-through cursor-not-allowed"
                    : isSelected
                    ? "bg-[#22c55e] text-black"
                    : "bg-[#1f1f1f] text-zinc-300 hover:text-white"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>

        {/* PRICE & ADD BUTTON */}
        <div className="flex items-center justify-between pt-1 border-t border-[#222222]">
          <div>
            <span className="font-black text-sm text-white tracking-tight">
              {formatPrice(product.price)}
            </span>
            <span className="text-[10px] text-zinc-400 ml-1">so&apos;m</span>
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`p-2 rounded-lg text-xs font-bold transition-all ${
              isOutOfStock
                ? "bg-[#222222] text-zinc-600 cursor-not-allowed"
                : "bg-[#22c55e] hover:bg-[#16a34a] text-black shadow-[0_0_10px_rgba(34,197,94,0.4)] cursor-pointer active:scale-95"
            }`}
            title="Savatchaga qo'shish"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

"use client";

import useCartStore from "@/stores/cartStore";
import { ProductType } from "@/types";
import { Minus, Plus, ShoppingBag, ShoppingCart } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const ProductInteraction = ({
  product,
  selectedSize,
  selectedColor,
}: {
  product: ProductType;
  selectedSize: string;
  selectedColor: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCartStore();

  const currentStock = product.stock?.[selectedSize] ?? 1;
  const isCurrentOutOfStock = currentStock <= 0;

  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    if (type === "increment") {
      if (quantity < currentStock) {
        setQuantity((prev) => prev + 1);
      } else {
        toast.info(`Omborda faqat ${currentStock} dona qolgan!`);
      }
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  const handleAddToCart = () => {
    if (isCurrentOutOfStock) {
      toast.error("Tanlangan o'lcham omborda qolmagan!");
      return;
    }
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedSize,
    });
    toast.success("Mahsulot savatga qo'shildi!");
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* SIZE */}
      <div className="flex flex-col gap-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
            O&apos;lcham (Size):
          </span>
          {isCurrentOutOfStock ? (
            <span className="text-[#e30613] font-bold">Omborda tugagan (0 dona)</span>
          ) : (
            <span className="text-emerald-400 font-medium">
              Omborda {currentStock} dona mavjud
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {product.sizes.map((size) => {
            const stockCount = product.stock?.[size] ?? 1;
            const isOutOfStock = stockCount <= 0;
            const isSelected = selectedSize === size;
            return (
              <button
                type="button"
                key={size}
                disabled={isOutOfStock}
                onClick={() => !isOutOfStock && handleTypeChange("size", size)}
                title={
                  isOutOfStock
                    ? `${size.toUpperCase()} - Omborda tugagan`
                    : `${size.toUpperCase()} - ${stockCount} dona qoldi`
                }
                className={`relative p-[1px] rounded-lg transition-all ${
                  isOutOfStock
                    ? "border border-[#262626] bg-[#121212] text-zinc-600 cursor-not-allowed opacity-50"
                    : isSelected
                    ? "border-2 border-[#e30613] shadow-[0_0_12px_rgba(227,6,19,0.5)] cursor-pointer scale-105"
                    : "border border-[#262626] hover:border-zinc-500 bg-[#161616] cursor-pointer"
                }`}
              >
                <div
                  className={`w-9 h-9 text-center flex items-center justify-center text-xs font-bold rounded-md ${
                    isOutOfStock
                      ? "line-through text-zinc-600"
                      : isSelected
                      ? "bg-[#e30613] text-white"
                      : "bg-[#181818] text-white hover:bg-[#202020]"
                  }`}
                >
                  {size.toUpperCase()}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* COLOR */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
          Mavjud Ranglar:
        </span>
        <div className="flex items-center gap-2">
          {product.colors.map((color) => {
            const isSelected = selectedColor === color;
            return (
              <button
                type="button"
                className={`cursor-pointer p-[2px] rounded-full transition-all ${
                  isSelected
                    ? "ring-2 ring-[#e30613] scale-110"
                    : "border border-zinc-700 opacity-70 hover:opacity-100"
                }`}
                key={color}
                onClick={() => handleTypeChange("color", color)}
              >
                <div
                  className="w-5 h-5 rounded-full border border-black/40"
                  style={{ backgroundColor: color }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* QUANTITY */}
      <div className="flex flex-col gap-2 text-sm">
        <span className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">
          Miqdor:
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            disabled={isCurrentOutOfStock || quantity <= 1}
            className="cursor-pointer bg-[#181818] border border-[#262626] p-2 rounded-lg text-white hover:border-[#e30613] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            onClick={() => handleQuantityChange("decrement")}
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="font-extrabold px-3 min-w-[24px] text-center text-white text-base">
            {isCurrentOutOfStock ? 0 : quantity}
          </span>
          <button
            type="button"
            disabled={isCurrentOutOfStock || quantity >= currentStock}
            className="cursor-pointer bg-[#181818] border border-[#262626] p-2 rounded-lg text-white hover:border-[#e30613] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            onClick={() => handleQuantityChange("increment")}
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col gap-2.5 mt-3">
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={isCurrentOutOfStock}
          className={`w-full py-3.5 px-4 rounded-xl shadow-[0_0_18px_rgba(227,6,19,0.45)] hover:shadow-[0_0_28px_rgba(227,6,19,0.75)] flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider transition-all ${
            isCurrentOutOfStock
              ? "bg-[#262626] text-zinc-500 cursor-not-allowed"
              : "bg-[#e30613] hover:bg-[#bd0410] text-white cursor-pointer active:scale-98"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {isCurrentOutOfStock ? "Omborda tugagan" : "Savatga qo'shish"}
        </button>

        <button
          type="button"
          disabled={isCurrentOutOfStock}
          onClick={handleAddToCart}
          className={`w-full bg-[#141414] border border-[#262626] hover:border-[#e30613] py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold tracking-wider transition-all ${
            isCurrentOutOfStock
              ? "text-zinc-600 cursor-not-allowed"
              : "text-zinc-200 hover:text-[#e30613] cursor-pointer"
          }`}
        >
          <ShoppingBag className="w-4 h-4 text-[#e30613]" />
          Hozir xarid qilish
        </button>
      </div>
    </div>
  );
};

export default ProductInteraction;

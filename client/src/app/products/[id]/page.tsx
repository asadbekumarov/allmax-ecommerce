import ProductInteraction from "@/components/ProductInteraction";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Sparkles, ShieldCheck, Truck, CreditCard } from "lucide-react";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = products.find((p) => String(p.id) === id) || products[0];
  return {
    title: `${product.name} | ALLMAX Fix Price`,
    description: product.shortDescription,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { id } = await params;
  const { size, color } = await searchParams;

  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    notFound();
  }

  // Find first size that has stock if possible, otherwise default to first size
  const defaultSize =
    product.sizes.find((s) => (product.stock?.[s] ?? 0) > 0) || product.sizes[0];

  const selectedSize = size || defaultSize;
  const selectedColor = color || (product.colors[0] as string);

  return (
    <div className="flex flex-col gap-8 lg:flex-row md:gap-12 mt-6 mb-16 max-w-6xl mx-auto">
      {/* IMAGE */}
      <div className="w-full lg:w-5/12 relative aspect-[2/3] bg-[#141414] border border-[#262626] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
        <Image
          src={product.images[selectedColor] || product.images[product.colors[0]]}
          alt={product.name}
          fill
          priority
          className="object-contain p-6 hover:scale-105 transition-transform duration-500"
        />
        {/* TOP LEFT BADGE */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-[#e30613] text-white text-xs font-black tracking-wider uppercase px-3 py-1 rounded-md shadow-[0_0_15px_rgba(227,6,19,0.7)] flex items-center gap-1.5 border border-white/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FIX POLKA: {formatPrice(product.price)} SO&apos;M</span>
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className="w-full lg:w-7/12 flex flex-col gap-4 bg-[#141414] border border-[#262626] p-6 sm:p-8 rounded-2xl shadow-lg">
        <div>
          <span className="text-[11px] font-black uppercase tracking-widest text-[#e30613] flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> ALLMAX Fix Price Erkaklar Modasi
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1.5 tracking-tight">
            {product.name}
          </h1>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed">{product.description}</p>

        {/* PRICE */}
        <div className="flex items-baseline gap-3 my-1 py-3 px-4 bg-[#1a1a1a] rounded-xl border border-[#262626]">
          <h2 className="text-3xl font-black text-[#e30613] tracking-tight">
            {formatPrice(product.price)}{" "}
            <span className="text-sm font-normal text-zinc-400">so&apos;m</span>
          </h2>
          <span className="text-xs text-zinc-400 font-medium">
            (Kafolatlangan yagona narx)
          </span>
        </div>

        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />

        {/* TRUST BADGES */}
        <div className="border-t border-[#262626] pt-6 mt-4 flex flex-col gap-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-300">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1a1a1a] border border-[#262626]">
              <ShieldCheck className="w-4 h-4 text-[#e30613] shrink-0" />
              <span>100% Sifat kafolati</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1a1a1a] border border-[#262626]">
              <Truck className="w-4 h-4 text-[#e30613] shrink-0" />
              <span>Tezkor yetkazish (1-2 kun)</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#1a1a1a] border border-[#262626]">
              <CreditCard className="w-4 h-4 text-[#e30613] shrink-0" />
              <span>Click / Payme / Naqd</span>
            </div>
          </div>
          <p className="text-zinc-500 text-xs mt-1">
            ALLMAX Fix Price do&apos;konida barcha kiyimlar qat&apos;iy yagona narx polkalari bo&apos;yicha taqdim etiladi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

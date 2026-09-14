import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const CATEGORIES = [
  {
    name: "POLO & FUTBOLKA",
    slug: "t-shirts",
    image: "/products/1g.png",
  },
  {
    name: "KURTKA & TOLOVKA",
    slug: "jackets",
    image: "/products/2g.png",
  },
  {
    name: "HUDI & SVITER",
    slug: "jackets",
    image: "/products/3gr.png",
  },
  {
    name: "SHIM & JINSI",
    slug: "pants",
    image: "/products/8b.png",
  },
  {
    name: "KROSSOVKALAR",
    slug: "shoes",
    image: "/products/6g.png",
  },
];

export default function ShopByCategory() {
  return (
    <section className="my-14 w-full">
      {/* ORNAMENTAL TITLE */}
      <div className="flex items-center justify-center gap-3 mb-8 text-center">
        <span className="text-[#22c55e] text-lg font-serif select-none">—»»</span>
        <h2 className="text-xl sm:text-2xl font-serif tracking-widest uppercase font-bold text-white">
          SHOP BY CATEGORY
        </h2>
        <span className="text-[#22c55e] text-lg font-serif select-none">««—</span>
      </div>

      {/* CIRCULAR CATEGORIES ROW */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-4 scrollbar-none px-2">
        {CATEGORIES.map((cat, idx) => (
          <Link
            key={idx}
            href={`/products?category=${cat.slug}`}
            className="flex flex-col items-center group shrink-0"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-[#181818] border-2 border-[#262626] group-hover:border-[#22c55e] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 p-2">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="mt-3 text-[11px] sm:text-xs font-black tracking-wider uppercase text-zinc-300 group-hover:text-[#22c55e] transition-colors text-center max-w-[110px]">
              {cat.name}
            </span>
          </Link>
        ))}

        {/* SALE CIRCLE (As shown on Aavira right side) */}
        <Link
          href="/products"
          className="flex flex-col items-center group shrink-0"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden bg-gradient-to-br from-[#22c55e] to-[#15803d] border-2 border-[#22c55e] shadow-[0_0_25px_rgba(34,197,94,0.5)] flex flex-col items-center justify-center text-black p-2 group-hover:scale-105 transition-all duration-300">
            <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-0.5">
              <Sparkles className="w-2.5 h-2.5" /> SALE
            </span>
            <span className="text-[9px] font-bold uppercase mt-0.5">UP TO</span>
            <span className="text-xl sm:text-2xl font-black leading-none my-0.5">
              50%
            </span>
            <span className="text-[9px] font-black uppercase">OFF</span>
          </div>
          <span className="mt-3 text-[11px] sm:text-xs font-black tracking-wider uppercase text-[#22c55e] group-hover:underline text-center">
            FIX SALE
          </span>
        </Link>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const OCCASIONS = [
  {
    title: "Kundalik Uslub",
    subtitle: "Everyday Comfort",
    description: "100% paxtali tabiiy pololar va yengil futbolkalar.",
    image: "/products/1g.png",
    link: "/products?category=t-shirts",
  },
  {
    title: "Bayramona & Klassika",
    subtitle: "Festive Vibes",
    description: "Issiq tolovkalar va zamonaviy demi-sezon kurtkalar.",
    image: "/products/2g.png",
    link: "/products?category=jackets",
  },
  {
    title: "Ish & Shahar Hayoti",
    subtitle: "Smart Casual",
    description: "Pishiq klassik jinsi shimlar va sportiv krossovkalar.",
    image: "/products/8b.png",
    link: "/products?category=pants",
  },
];

export default function ShopByOccasion() {
  return (
    <section className="my-14 w-full">
      {/* ORNAMENTAL TITLE */}
      <div className="flex items-center justify-center gap-3 mb-8 text-center">
        <span className="text-[#22c55e] text-lg font-serif select-none">—»»</span>
        <h2 className="text-xl sm:text-2xl font-serif tracking-widest uppercase font-bold text-white">
          SHOP BY OCCASION
        </h2>
        <span className="text-[#22c55e] text-lg font-serif select-none">««—</span>
      </div>

      {/* 3 CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {OCCASIONS.map((item, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-[#262626] hover:border-[#22c55e]/60 transition-all duration-300 flex flex-col justify-between p-6 shadow-md"
          >
            <div className="space-y-2 z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#22c55e]">
                {item.subtitle}
              </span>
              <h3 className="text-xl font-black text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-400 max-w-[200px]">
                {item.description}
              </p>
            </div>

            {/* PRODUCT IMAGE PREVIEW */}
            <div className="relative w-full h-44 my-4 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* SHOP NOW BUTTON */}
            <div className="z-10 pt-2 border-t border-[#222222]">
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white group-hover:text-[#22c55e] transition-colors"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 text-[#22c55e] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

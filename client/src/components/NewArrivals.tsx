"use client";

import React, { useRef } from "react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewArrivals() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="new-arrivals" className="my-14 w-full relative">
      {/* ORNAMENTAL TITLE */}
      <div className="flex items-center justify-center gap-3 mb-8 text-center">
        <span className="text-[#22c55e] text-lg font-serif select-none">—»»</span>
        <h2 className="text-xl sm:text-2xl font-serif tracking-widest uppercase font-bold text-white">
          NEW ARRIVALS
        </h2>
        <span className="text-[#22c55e] text-lg font-serif select-none">««—</span>
      </div>

      {/* ARROW BUTTONS */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181818] border border-[#2a2a2a] text-white hover:border-[#22c55e] hover:text-[#22c55e] shadow-lg flex items-center justify-center transition-all cursor-pointer"
        aria-label="Oldingi"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#181818] border border-[#2a2a2a] text-white hover:border-[#22c55e] hover:text-[#22c55e] shadow-lg flex items-center justify-center transition-all cursor-pointer"
        aria-label="Keyingi"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* PRODUCTS ROW / GRID */}
      <div
        ref={containerRef}
        className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-none px-1"
      >
        {products.map((product) => (
          <div key={product.id} className="w-[240px] sm:w-[260px] shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

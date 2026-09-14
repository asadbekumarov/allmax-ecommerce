"use client";

import React, { useState } from "react";
import { products, FIX_PRICE_OPTIONS } from "@/data/products";
import ProductCard from "./ProductCard";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BestsellersRow() {
  const [selectedShelf, setSelectedShelf] = useState<string>("all");

  const filtered =
    selectedShelf === "all"
      ? products
      : products.filter((p) => p.price === Number(selectedShelf));

  return (
    <section id="fix-polkas" className="my-14 w-full">
      {/* ORNAMENTAL TITLE */}
      <div className="flex items-center justify-center gap-3 mb-4 text-center">
        <span className="text-[#22c55e] text-lg font-serif select-none">—»»</span>
        <h2 className="text-xl sm:text-2xl font-serif tracking-widest uppercase font-bold text-white">
          ALLMAX FIX POLKALAR
        </h2>
        <span className="text-[#22c55e] text-lg font-serif select-none">««—</span>
      </div>

      <p className="text-center text-xs text-zinc-400 max-w-md mx-auto mb-6">
        Hamyonbop yagona narxlar tizimi — o&apos;zingizga ma&apos;qul narx polkasini tanlang
      </p>

      {/* FIX POLKA PILLS */}
      <div className="flex items-center justify-center flex-wrap gap-2.5 mb-8">
        {FIX_PRICE_OPTIONS.map((item) => {
          const isSelected = selectedShelf === item.value;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setSelectedShelf(item.value)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer border ${
                isSelected
                  ? "bg-[#22c55e] text-black border-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.45)] scale-105"
                  : "bg-[#141414] text-zinc-300 border-[#262626] hover:border-[#22c55e]/50 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-[#181818] border border-[#262626] hover:border-[#22c55e] text-white hover:text-[#22c55e] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-sm"
        >
          <span>Barcha tovarlarni ko&apos;rish</span>
          <ArrowRight className="w-4 h-4 text-[#22c55e]" />
        </Link>
      </div>
    </section>
  );
}

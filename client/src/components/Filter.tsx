"use client";

import { FIX_PRICE_OPTIONS } from "@/data/products";
import { Sparkles } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPrice = searchParams.get("price") || "all";
  const currentSort = searchParams.get("sort") || "newest";

  const handlePriceChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set("price", value);
    } else {
      params.delete("price");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="bg-[#121212] border border-[#262626] rounded-xl p-4 my-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
      {/* FIX PRICE PILLS */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <div className="flex items-center gap-1.5 text-xs font-black text-white uppercase tracking-wider mr-2">
          <Sparkles className="w-3.5 h-3.5 text-[#e30613]" />
          <span>Fix Polka:</span>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          {FIX_PRICE_OPTIONS.map((item) => {
            const isSelected = currentPrice === item.value;
            return (
              <button
                key={item.value}
                type="button"
                onClick={() => handlePriceChange(item.value)}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-bold tracking-tight transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#e30613] text-white border-[#e30613] shadow-[0_0_12px_rgba(227,6,19,0.55)] scale-105"
                    : "bg-[#181818] text-zinc-300 border-[#262626] hover:border-[#e30613]/40 hover:bg-[#202020] hover:text-white"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* SORT DROPDOWN */}
      <div className="flex items-center gap-2 text-xs text-zinc-400 self-end md:self-auto">
        <span className="font-bold tracking-wider uppercase text-[10px]">Saralash:</span>
        <select
          name="sort"
          id="sort"
          value={currentSort}
          className="bg-[#181818] text-white border border-[#262626] shadow-sm px-3 py-1.5 rounded-lg font-medium outline-hidden focus:border-[#e30613] focus:ring-1 focus:ring-[#e30613] transition-all cursor-pointer"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="newest" className="bg-[#141414] text-white">Yangi qo&apos;shilganlar</option>
          <option value="oldest" className="bg-[#141414] text-white">Eski qo&apos;shilganlar</option>
          <option value="asc" className="bg-[#141414] text-white">Narx: Arzondan qimmatga</option>
          <option value="desc" className="bg-[#141414] text-white">Narx: Qimmatdan arzonga</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

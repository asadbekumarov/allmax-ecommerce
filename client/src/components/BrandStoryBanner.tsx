import React from "react";
import Link from "next/link";
import { MapPin, Clock, Phone, Sparkles } from "lucide-react";

export default function BrandStoryBanner() {
  return (
    <section className="my-14 w-full rounded-2xl overflow-hidden relative bg-gradient-to-r from-[#141414] via-[#121212] to-[#0a0a0a] border border-[#262626] p-8 sm:p-12 lg:p-16 text-center shadow-xl">
      {/* BACKGROUND ACCENT GLOW */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#22c55e]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#22c55e]/10 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-4 relative z-10">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22c55e] flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3" /> BIZNING FALSAFA / OUR STORY
        </span>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif italic font-normal text-white leading-tight">
          Crafted with love, <br className="hidden sm:inline" />
          <span className="text-[#22c55e] font-serif not-italic font-bold">
            inspired by real value.
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl mx-auto font-normal">
          ALLMAX — O&apos;zbekiston erkaklariga sifatli, zamonaviy va chidamli kiyimlarni yagona hamyonbop narx polkalari (Fix Price) orqali taqdim etuvchi do&apos;konlar tarmog&apos;i. Ortiqcha ustama va qimmat narxlarsiz haqiqiy erkaklar kiyimlari.
        </p>

        {/* REAL STORE LOCATION BADGES */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>Metro Mirzo Ulug&apos;bek, Bunyodkor Korzinka, pastki qavat</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-zinc-300">
            <Clock className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>24/7 Kecha-yu kunduz ochiq</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] text-zinc-300">
            <Phone className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>+998(78) 555-31-31</span>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/products"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-black font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all"
          >
            KOLLEKSIYAGA O&apos;TISH
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shirt, Scissors, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden bg-[#111111] border border-[#222222] my-6 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* LEFT CONTENT (7 cols) */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 z-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#22c55e] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> YANGI MAVSUM 2026
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              New Season,
            </h1>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif italic font-normal text-[#22c55e] tracking-normal leading-tight">
              New Expressions
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-normal leading-relaxed">
            ALLMAX Fix Price erkaklar kiyimlari kolleksiyasi — qat&apos;iy <strong>49 000</strong>, <strong>99 000</strong>, <strong>149 000</strong> va <strong>199 000</strong> so&apos;mlik hamyonbop yagona polkalar tizimi. Ortiqcha savdolashishlarsiz yuqori sifat.
          </p>

          {/* TWO BUTTONS */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/#new-arrivals"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.45)] hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] transition-all flex items-center gap-2"
            >
              <span>KOLLEKSIYANI KO&apos;RISH</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#fix-polkas"
              className="border-2 border-white/80 hover:border-[#22c55e] text-white hover:text-[#22c55e] font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded-lg transition-all"
            >
              FIX POLKALAR
            </Link>
          </div>

          {/* 3 BULLETS (Aavira style) */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#262626] text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <Shirt className="w-4 h-4 text-[#22c55e] shrink-0" />
              <div>
                <p className="font-bold text-white text-[11px] sm:text-xs">Premium Paxta</p>
                <p className="text-[10px] text-zinc-500 hidden sm:block">100% tabiiy mato</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Scissors className="w-4 h-4 text-[#22c55e] shrink-0" />
              <div>
                <p className="font-bold text-white text-[11px] sm:text-xs">Mukammal Tikuv</p>
                <p className="text-[10px] text-zinc-500 hidden sm:block">Erkaklar bichimi</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#22c55e] shrink-0" />
              <div>
                <p className="font-bold text-white text-[11px] sm:text-xs">24/7 Do&apos;kon</p>
                <p className="text-[10px] text-zinc-500 hidden sm:block">Bunyodkor Korzinka</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE (5 cols) */}
        <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-full min-h-[420px] w-full bg-[#181818] overflow-hidden">
          <Image
            src="/featured.png"
            alt="ALLMAX Erkaklar Modasi"
            fill
            priority
            className="object-cover object-top brightness-90 hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#111111] via-transparent to-transparent opacity-80" />
        </div>
      </div>
    </section>
  );
}

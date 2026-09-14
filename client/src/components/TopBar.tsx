import React from "react";
import { Truck, RotateCcw, Send, Clock, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#0d0d0d] border-b border-[#222222] text-[11px] text-zinc-400 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* LEFT ANNOUNCEMENTS */}
        <div className="flex items-center flex-wrap justify-center gap-3 md:gap-4">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <Truck className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>99 000 so&apos;mdan yuqori xaridlarga bepul yetkazish</span>
          </span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:flex items-center gap-1.5 text-zinc-300">
            <RotateCcw className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>14 kunlik almashtirish kafolati</span>
          </span>
          <span className="hidden md:inline text-zinc-600">|</span>
          <span className="hidden md:inline text-zinc-400">
            To&apos;lov: Click / Payme / Naqd
          </span>
        </div>

        {/* RIGHT CONTACT & TELEGRAM */}
        <div className="flex items-center gap-4 text-zinc-300">
          <span className="flex items-center gap-1 text-[#22c55e] font-bold">
            <Clock className="w-3 h-3" />
            <span>24/7 Ochiq</span>
          </span>
          <span className="text-zinc-600">|</span>
          <a
            href="tel:+998785553131"
            className="flex items-center gap-1 hover:text-[#22c55e] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#22c55e]" />
            <span>+998(78) 555-31-31</span>
          </a>
          <span className="text-zinc-600">|</span>
          <a
            href="https://t.me/allmaxuz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#22c55e] hover:underline font-semibold"
          >
            <Send className="w-3 h-3" />
            <span>@allmaxuz</span>
          </a>
        </div>
      </div>
    </div>
  );
}

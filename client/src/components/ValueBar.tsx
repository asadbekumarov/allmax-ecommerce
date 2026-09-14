import React from "react";
import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";

export default function ValueBar() {
  return (
    <section className="my-10 w-full bg-[#121212] border border-[#222222] rounded-2xl p-6 sm:p-8 shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#262626]">
        {/* ITEM 1 */}
        <div className="flex items-center gap-4 px-3 first:pl-0">
          <div className="w-12 h-12 rounded-xl bg-[#1c1c1c] border border-[#262626] flex items-center justify-center text-[#22c55e] shrink-0 shadow-sm">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Bepul Yetkazish</h3>
            <p className="text-xs text-zinc-400 mt-0.5">99 000 so&apos;mdan yuqori xaridlarga</p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="flex items-center gap-4 px-3 pt-4 sm:pt-0">
          <div className="w-12 h-12 rounded-xl bg-[#1c1c1c] border border-[#262626] flex items-center justify-center text-[#22c55e] shrink-0 shadow-sm">
            <RotateCcw className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Qulay Almashtirish</h3>
            <p className="text-xs text-zinc-400 mt-0.5">14 kunlik sinov va qaytarish kafolati</p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="flex items-center gap-4 px-3 pt-4 sm:pt-0">
          <div className="w-12 h-12 rounded-xl bg-[#1c1c1c] border border-[#262626] flex items-center justify-center text-[#22c55e] shrink-0 shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Xavfsiz To&apos;lov</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Click, Payme yoki qabulda naqd</p>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="flex items-center gap-4 px-3 pt-4 sm:pt-0">
          <div className="w-12 h-12 rounded-xl bg-[#1c1c1c] border border-[#262626] flex items-center justify-center text-[#22c55e] shrink-0 shadow-sm">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">24/7 Qo&apos;llab-quvvatlash</h3>
            <p className="text-xs text-zinc-400 mt-0.5">+998(78) 555-31-31 qo&apos;ng&apos;iroq markazi</p>
          </div>
        </div>
      </div>
    </section>
  );
}

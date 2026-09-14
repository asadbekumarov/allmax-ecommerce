import Link from "next/link";
import { Send, Instagram, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 w-full bg-[#0d0d0d] border-t border-[#222222] text-zinc-400 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-[#222222]">
          {/* COL 1: SHOP */}
          <div className="flex flex-col gap-2.5 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-2">
              SHOP
            </h4>
            <Link href="/#new-arrivals" className="hover:text-[#22c55e] transition-colors">
              Yangi Kelganlar
            </Link>
            <Link href="/products?category=t-shirts" className="hover:text-[#22c55e] transition-colors">
              Polo & Futbolkalar
            </Link>
            <Link href="/products?category=jackets" className="hover:text-[#22c55e] transition-colors">
              Kurtka & Tolovkalar
            </Link>
            <Link href="/products?category=pants" className="hover:text-[#22c55e] transition-colors">
              Shim & Jinsilar
            </Link>
            <Link href="/#fix-polkas" className="hover:text-[#22c55e] transition-colors">
              Fix Polka (49k-199k)
            </Link>
            <Link href="/products" className="text-[#22c55e] font-bold hover:underline">
              Aksiya & Sale
            </Link>
          </div>

          {/* COL 2: HELP */}
          <div className="flex flex-col gap-2.5 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-2">
              HELP
            </h4>
            <Link href="/cart" className="hover:text-[#22c55e] transition-colors">
              Savatcha
            </Link>
            <Link href="/" className="hover:text-[#22c55e] transition-colors">
              Yetkazib Berish
            </Link>
            <Link href="/" className="hover:text-[#22c55e] transition-colors">
              Qaytarish va Almashtirish
            </Link>
            <Link href="/" className="hover:text-[#22c55e] transition-colors">
              O&apos;lchamlar Jadvali
            </Link>
            <Link href="/admin" className="hover:text-[#22c55e] transition-colors">
              Admin Panel
            </Link>
          </div>

          {/* COL 3: ABOUT */}
          <div className="flex flex-col gap-2.5 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-2">
              ABOUT
            </h4>
            <Link href="/#our-story" className="hover:text-[#22c55e] transition-colors">
              Bizning Hikoya
            </Link>
            <span className="text-zinc-500">Fix Price Konsepsiyasi</span>
            <span className="text-zinc-500">Do&apos;konlarimiz</span>
            <span className="text-zinc-500">Karyera & Jamoa</span>
          </div>

          {/* COL 4: POLICIES */}
          <div className="flex flex-col gap-2.5 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-2">
              POLICIES
            </h4>
            <span className="text-zinc-500">Foydalanish Qoidalari</span>
            <span className="text-zinc-500">Maxfiylik Siyosati</span>
            <span className="text-zinc-500">Kafolat va Qaytarish</span>
            <span className="text-zinc-500">To&apos;lov Xavfsizligi</span>
          </div>

          {/* COL 5: FOLLOW US & STORE INFO */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-1">
              FOLLOW US
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/allmax_fixprice"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-white hover:text-[#22c55e] hover:border-[#22c55e] transition-all"
                title="Instagram 209K"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/allmaxuz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-white hover:text-[#22c55e] hover:border-[#22c55e] transition-all"
                title="Telegram Kanal"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-1.5 pt-2 text-[11px] text-zinc-300">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#22c55e] shrink-0 mt-0.5" />
                <span>Chilonzor 6-63, Metro Mirzo Ulug&apos;bek, Bunyodkor Korzinka</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span>24/7 Kecha-yu kunduz ochiq</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <a href="tel:+998785553131" className="hover:text-[#22c55e]">
                  +998(78) 555-31-31
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: PAYMENT LOGOS & COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 ALLMAX Fix Price. Barcha huquqlar himoyalangan.
          </div>

          {/* PAYMENT BADGES */}
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-[#1c1c1c] border border-[#2a2a2a] text-[10px] font-bold text-sky-400">
              Click
            </span>
            <span className="px-2 py-0.5 rounded bg-[#1c1c1c] border border-[#2a2a2a] text-[10px] font-bold text-teal-400">
              Payme
            </span>
            <span className="px-2 py-0.5 rounded bg-[#1c1c1c] border border-[#2a2a2a] text-[10px] font-bold text-zinc-300">
              Uzcard
            </span>
            <span className="px-2 py-0.5 rounded bg-[#1c1c1c] border border-[#2a2a2a] text-[10px] font-bold text-amber-400">
              Humo
            </span>
            <span className="px-2 py-0.5 rounded bg-[#1c1c1c] border border-[#2a2a2a] text-[10px] font-bold text-zinc-400">
              Naqd
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { Search, User, Heart, ShoppingBag, X } from "lucide-react";
import useCartStore from "@/stores/cartStore";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { cart, hasHydrated } = useCartStore();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const cartCount = hasHydrated
    ? cart.reduce((sum, item) => sum + item.quantity, 0)
    : 0;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <header className="w-full bg-[#0a0a0a] border-b border-[#222222] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* LEFT: ALLMAX OFFICIAL LOGO */}
        <Link href="/" className="flex flex-col group shrink-0">
          <div className="flex items-baseline tracking-tighter">
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-zinc-200 transition-colors">
              ALLMAX
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-black tracking-widest uppercase -mt-1">
            <span className="text-zinc-400">HAMYONBOP NARXLAR</span>
            <span className="text-[#22c55e] font-black bg-[#22c55e]/10 px-1 rounded">
              FIX PRICE
            </span>
          </div>
        </Link>

        {/* CENTER: NAVIGATION LINKS (Aavira style) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold uppercase tracking-wider text-zinc-300">
          <Link
            href="/#new-arrivals"
            className="hover:text-[#22c55e] transition-colors py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#22c55e] after:transition-all"
          >
            Yangi Kelganlar
          </Link>
          <Link
            href="/products?category=t-shirts"
            className="hover:text-[#22c55e] transition-colors py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#22c55e] after:transition-all"
          >
            Polo & Futbolka
          </Link>
          <Link
            href="/products?category=jackets"
            className="hover:text-[#22c55e] transition-colors py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#22c55e] after:transition-all"
          >
            Kurtka & Hudi
          </Link>
          <Link
            href="/products?category=pants"
            className="hover:text-[#22c55e] transition-colors py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#22c55e] after:transition-all"
          >
            Shim & Jinsi
          </Link>
          <Link
            href="/#fix-polkas"
            className="hover:text-[#22c55e] transition-colors py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#22c55e] after:transition-all"
          >
            Fix Polka
          </Link>
          <Link
            href="/products"
            className="hover:text-[#22c55e] transition-colors py-1 relative hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#22c55e] after:transition-all"
          >
            Barcha Kiyimlar
          </Link>
          <Link
            href="/#sale"
            className="text-[#22c55e] font-black hover:text-[#16a34a] transition-colors py-1 relative"
          >
            Aksiya / Sale
          </Link>
        </nav>

        {/* RIGHT: ICONS (Search, User, Wishlist, Cart) */}
        <div className="flex items-center gap-4 sm:gap-5 text-zinc-300">
          {/* SEARCH BUTTON */}
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="hover:text-[#22c55e] transition-colors p-1"
            title="Qidiruv"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* USER ACCOUNT */}
          <Link
            href="/login"
            className="hover:text-[#22c55e] transition-colors p-1"
            title="Mening profilim"
          >
            <User className="w-5 h-5" />
          </Link>

          {/* WISHLIST HEART */}
          <Link
            href="/#new-arrivals"
            className="hover:text-[#22c55e] transition-colors p-1 relative hidden sm:block"
            title="Sevimlilar"
          >
            <Heart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-[#1c1c1c] border border-[#2a2a2a] text-[#22c55e] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
              0
            </span>
          </Link>

          {/* CART WITH GREEN BADGE */}
          <Link
            href="/cart"
            className="hover:text-[#22c55e] transition-colors p-1 relative"
            title="Savatcha"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#22c55e] text-black rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* SEARCH BAR POPUP IF OPEN */}
      {searchOpen && (
        <div className="bg-[#141414] border-t border-[#222222] py-3 px-4 animate-in slide-in-from-top duration-200">
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-2xl mx-auto flex items-center gap-2"
          >
            <Search className="w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Qidirilayotgan kiyim nomi (polo, kurtka, hudi, shim)..."
              className="flex-1 bg-transparent border-0 outline-hidden text-sm text-white placeholder:text-zinc-500"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}

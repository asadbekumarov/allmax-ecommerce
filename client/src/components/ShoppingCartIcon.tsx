"use client";

import useCartStore from "@/stores/cartStore";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  const { cart, hasHydrated } = useCartStore();

  if (!hasHydrated) return null;
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="relative text-zinc-300 hover:text-[#e30613] transition-colors p-1"
      title="Savatcha"
    >
      <ShoppingBag className="w-5 h-5" />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-[#e30613] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-black shadow-[0_0_8px_rgba(227,6,19,0.8)] animate-in zoom-in">
          {count}
        </span>
      )}
    </Link>
  );
};

export default ShoppingCartIcon;

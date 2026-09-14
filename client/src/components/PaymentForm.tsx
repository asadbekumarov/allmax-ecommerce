"use client";

import useCartStore from "@/stores/cartStore";
import { ShippingFormInputs } from "@/types";
import { formatPrice } from "@/lib/utils";
import { CheckCircle2, CreditCard, ShieldCheck, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

interface PaymentFormProps {
  shippingForm?: ShippingFormInputs;
  totalAmount: number;
}

const PaymentForm = ({ shippingForm, totalAmount }: PaymentFormProps) => {
  const router = useRouter();
  const { clearCart } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<"click" | "payme" | "cash">("click");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      clearCart();
      toast.success("Buyurtmangiz muvaffaqiyatli qabul qilindi!");
    }, 1200);
  };

  if (isCompleted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-[#141414] rounded-2xl border border-[#262626] text-center gap-4 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-[#e30613] text-white flex items-center justify-center shadow-[0_0_20px_rgba(227,6,19,0.7)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-extrabold text-white">Buyurtma Qabul Qilindi!</h2>
          <p className="text-sm text-zinc-400 mt-1">
            Rahmat, {shippingForm?.name || "Hurmatli xaridor"}! Buyurtmangiz ALLMAX menejerlariga yetkazildi.
          </p>
          <div className="mt-4 p-4 bg-[#1c1c1c] rounded-xl border border-[#262626] text-xs text-left text-zinc-300 flex flex-col gap-1.5">
            <p><strong>Yetkazish hududi:</strong> {shippingForm?.region || "Toshkent shahri"}</p>
            <p><strong>Manzil:</strong> {shippingForm?.address || "Ko'rsatilgan manzil"}</p>
            <p><strong>Telefon:</strong> {shippingForm?.phone || "-"}</p>
            <p><strong>To&apos;lov usuli:</strong> <span className="text-[#e30613] font-bold uppercase">{paymentMethod}</span></p>
            <p><strong>Jami to&apos;lov:</strong> <span className="text-white font-extrabold">{formatPrice(totalAmount)} so&apos;m</span></p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => router.push("/")}
          className="mt-2 bg-[#e30613] hover:bg-[#bd0410] text-white px-6 py-2.5 rounded-xl text-xs font-bold cursor-pointer shadow-[0_0_15px_rgba(227,6,19,0.5)] transition-all"
        >
          Bosh sahifaga qaytish
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleCheckout} className="flex flex-col gap-5">
      <div className="flex items-center gap-2 pb-2 border-b border-[#262626] text-white font-bold text-sm">
        <CreditCard className="w-4 h-4 text-[#e30613]" />
        <span>To&apos;lov usulini tanlang</span>
      </div>

      <div className="flex flex-col gap-3">
        {/* CLICK */}
        <label
          className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
            paymentMethod === "click"
              ? "border-[#e30613] bg-[#e30613]/10 shadow-[0_0_15px_rgba(227,6,19,0.2)] ring-1 ring-[#e30613]"
              : "border-[#262626] bg-[#1c1c1c] hover:border-zinc-600"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="click"
              checked={paymentMethod === "click"}
              onChange={() => setPaymentMethod("click")}
              className="accent-[#e30613]"
            />
            <div>
              <p className="font-bold text-sm text-white">Click Evolution</p>
              <p className="text-xs text-zinc-400">Click ilovasi yoki veb-interfeys orqali to&apos;lov</p>
            </div>
          </div>
          <span className="font-black text-sky-400 text-base tracking-wider">CLICK</span>
        </label>

        {/* PAYME */}
        <label
          className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
            paymentMethod === "payme"
              ? "border-[#e30613] bg-[#e30613]/10 shadow-[0_0_15px_rgba(227,6,19,0.2)] ring-1 ring-[#e30613]"
              : "border-[#262626] bg-[#1c1c1c] hover:border-zinc-600"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="payme"
              checked={paymentMethod === "payme"}
              onChange={() => setPaymentMethod("payme")}
              className="accent-[#e30613]"
            />
            <div>
              <p className="font-bold text-sm text-white">Payme</p>
              <p className="text-xs text-zinc-400">Payme hamyoni yoki kartasi orqali to&apos;lov</p>
            </div>
          </div>
          <span className="font-black text-teal-400 text-base tracking-wider">payme</span>
        </label>

        {/* CASH / NAQD */}
        <label
          className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
            paymentMethod === "cash"
              ? "border-[#e30613] bg-[#e30613]/10 shadow-[0_0_15px_rgba(227,6,19,0.2)] ring-1 ring-[#e30613]"
              : "border-[#262626] bg-[#1c1c1c] hover:border-zinc-600"
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
              className="accent-[#e30613]"
            />
            <div>
              <p className="font-bold text-sm text-white">Qabul qilinganda to&apos;lash</p>
              <p className="text-xs text-zinc-400">Kuryer mahsulotni topshirganda naqd yoki karta orqali</p>
            </div>
          </div>
          <span className="font-bold text-zinc-300 text-xs bg-[#262626] px-2 py-1 rounded">Naqd pul</span>
        </label>
      </div>

      <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2 bg-[#1c1c1c] p-3 rounded-lg border border-[#262626]">
        <ShieldCheck className="w-4 h-4 text-[#e30613] shrink-0" />
        <span>Xaridlar xavfsiz himoyalangan. Tovar yoqmasa, 14 kun ichida almashtirish imkoniyati mavjud.</span>
      </div>

      <button
        type="submit"
        disabled={isProcessing}
        className="w-full mt-2 bg-[#e30613] hover:bg-[#bd0410] transition-all duration-300 text-white p-3.5 rounded-xl cursor-pointer font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(227,6,19,0.5)] hover:shadow-[0_0_30px_rgba(227,6,19,0.8)] disabled:opacity-50"
      >
        <ShoppingBag className="w-4 h-4" />
        {isProcessing
          ? "Buyurtma rasmiylashtirilmoqda..."
          : `Buyurtmani tasdiqlash (${formatPrice(totalAmount)} so'm)`}
      </button>
    </form>
  );
};

export default PaymentForm;

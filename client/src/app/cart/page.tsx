"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import useCartStore from "@/stores/cartStore";
import { ShippingFormInputs } from "@/types";
import { formatPrice } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Check, ShoppingBag, Trash2, Sparkles, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Savatcha",
  },
  {
    id: 2,
    title: "Yetkazib berish",
  },
  {
    id: 3,
    title: "To'lov usuli",
  },
];

const CartPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>();
  const [selectedRegion, setSelectedRegion] = useState<string>("Toshkent shahri");

  const activeStep = parseInt(searchParams.get("step") || "1");

  const { cart, removeFromCart } = useCartStore();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Dynamic shipping calculation: Tashkent = 25,000 UZS, Regions = 40,000 UZS
  const currentRegion = shippingForm?.region || selectedRegion;
  const isTashkent = currentRegion.includes("Toshkent");
  const shippingFee = cart.length === 0 ? 0 : isTashkent ? 25000 : 40000;

  const total = subtotal + shippingFee;

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-4 mb-16 max-w-6xl mx-auto">
      {/* TITLE */}
      <div className="text-center">
        <span className="text-xs font-black uppercase text-[#e30613] tracking-widest flex items-center justify-center gap-1 mb-1">
          <Sparkles className="w-3 h-3" /> ALLMAX Fix Price Butik
        </span>
        <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight">
          Xarid Savatchasi
        </h1>
        <p className="text-xs md:text-sm text-zinc-400 mt-1">
          Tanlangan erkaklar kiyimlari va buyurtmani rasmiylashtirish
        </p>
      </div>

      {/* STEPS */}
      <div className="flex items-center gap-4 md:gap-12 w-full justify-center">
        {steps.map((step) => {
          const isCurrent = step.id === activeStep;
          const isPassed = step.id < activeStep;

          return (
            <div
              className={`flex items-center gap-2 pb-3 border-b-2 transition-all ${
                isCurrent
                  ? "border-[#e30613] font-bold text-white"
                  : isPassed
                  ? "border-[#e30613]/50 text-[#e30613]"
                  : "border-[#262626] text-zinc-500"
              }`}
              key={step.id}
            >
              <div
                className={`w-7 h-7 rounded-full text-xs font-black flex items-center justify-center transition-all ${
                  isCurrent
                    ? "bg-[#e30613] text-white shadow-[0_0_12px_rgba(227,6,19,0.8)]"
                    : isPassed
                    ? "bg-[#e30613]/20 border border-[#e30613] text-[#e30613]"
                    : "bg-[#1c1c1c] border border-[#262626] text-zinc-500"
                }`}
              >
                {isPassed ? <Check className="w-3.5 h-3.5" /> : step.id}
              </div>
              <p className="text-xs md:text-sm tracking-tight">{step.title}</p>
            </div>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      {cart.length === 0 && activeStep === 1 ? (
        <div className="flex flex-col items-center justify-center p-12 bg-[#141414] rounded-2xl border border-[#262626] w-full max-w-lg text-center gap-4 my-8 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-[#1c1c1c] border border-[#262626] flex items-center justify-center text-zinc-500">
            <ShoppingBag className="w-8 h-8 text-[#e30613]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">Savatchangiz bo&apos;sh</h2>
            <p className="text-xs text-zinc-400 mt-1">
              ALLMAX Fix Price do&apos;konidan o&apos;zingizga ma&apos;qul kiyimlarni tanlang!
            </p>
          </div>
          <Link
            href="/products"
            className="mt-2 bg-[#e30613] hover:bg-[#bd0410] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-[0_0_15px_rgba(227,6,19,0.5)]"
          >
            Katalogni ko&apos;rish
          </Link>
        </div>
      ) : (
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* LEFT: STEP CONTENT */}
          <div className="w-full lg:w-7/12 bg-[#141414] shadow-md border border-[#262626] p-6 md:p-8 rounded-2xl flex flex-col gap-6">
            {activeStep === 1 ? (
              <div className="flex flex-col divide-y divide-[#262626]">
                {cart.map((item) => (
                  <div
                    className="flex items-center justify-between py-4 first:pt-0 last:pb-0 gap-4"
                    key={item.id + item.selectedSize + item.selectedColor}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-24 h-24 bg-[#1c1c1c] rounded-xl overflow-hidden shrink-0 border border-[#262626]">
                        <Image
                          src={
                            item.images[item.selectedColor] ||
                            Object.values(item.images)[0] ||
                            "/featured.png"
                          }
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-bold text-white line-clamp-1">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-zinc-400">
                          <span>
                            O&apos;lcham: <strong className="text-white">{item.selectedSize.toUpperCase()}</strong>
                          </span>
                          <span>•</span>
                          <span>
                            Rang: <strong className="text-white">{item.selectedColor}</strong>
                          </span>
                          <span>•</span>
                          <span>
                            Soni: <strong className="text-white">{item.quantity} dona</strong>
                          </span>
                        </div>
                        <p className="font-black text-sm text-[#e30613] mt-1">
                          {formatPrice(item.price * item.quantity)} so&apos;m
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item)}
                      title="O'chirish"
                      className="w-8 h-8 rounded-full bg-[#1c1c1c] hover:bg-[#bd0410]/20 border border-[#262626] hover:border-[#e30613] text-zinc-400 hover:text-[#e30613] flex items-center justify-center cursor-pointer transition-all shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : activeStep === 2 ? (
              <ShippingForm
                setShippingForm={(data) => {
                  setShippingForm(data);
                  setSelectedRegion(data.region);
                }}
                onRegionChange={(region) => setSelectedRegion(region)}
                defaultValues={shippingForm}
              />
            ) : activeStep === 3 ? (
              <PaymentForm shippingForm={shippingForm} totalAmount={total} />
            ) : null}

            {/* BACK BUTTON IF IN STEP 2 OR 3 */}
            {activeStep > 1 && (
              <button
                type="button"
                onClick={() =>
                  router.push(`/cart?step=${activeStep - 1}`, { scroll: false })
                }
                className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-white transition-all cursor-pointer w-max pt-2"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#e30613]" />
                Oldingi bosqichga qaytish
              </button>
            )}
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div className="w-full lg:w-5/12 bg-[#141414] border border-[#262626] p-6 md:p-8 rounded-2xl flex flex-col gap-6 sticky top-24 shadow-md">
            <h2 className="font-bold text-white text-base flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#e30613]" /> Xarid Tafsilotlari
            </h2>

            <div className="flex flex-col gap-3.5 text-sm">
              <div className="flex justify-between text-zinc-400">
                <span>Mahsulotlar qiymati:</span>
                <span className="font-bold text-white">
                  {formatPrice(subtotal)} so&apos;m
                </span>
              </div>

              {/* DYNAMIC SHIPPING INFO */}
              <div className="flex flex-col gap-1 border-t border-b border-[#262626] py-3">
                <div className="flex justify-between text-zinc-400">
                  <span>Yetkazib berish ({currentRegion}):</span>
                  <span className="font-bold text-white">
                    {formatPrice(shippingFee)} so&apos;m
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500">
                  {isTashkent
                    ? "Toshkent shahri bo'yicha standart tarif (25 000 so'm)"
                    : "Viloyatlar bo'yicha tezkor pochta/kuryer (40 000 so'm)"}
                </p>
              </div>

              <div className="flex justify-between items-baseline pt-2">
                <span className="font-bold text-base text-white">Jami to&apos;lov:</span>
                <span className="font-black text-2xl text-[#e30613] tracking-tight">
                  {formatPrice(total)} <span className="text-xs font-normal text-zinc-400">so&apos;m</span>
                </span>
              </div>
            </div>

            {activeStep === 1 && (
              <button
                type="button"
                onClick={() => router.push("/cart?step=2", { scroll: false })}
                className="w-full bg-[#e30613] hover:bg-[#bd0410] transition-all duration-300 text-white py-3.5 px-4 rounded-xl cursor-pointer font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(227,6,19,0.5)] hover:shadow-[0_0_30px_rgba(227,6,19,0.8)]"
              >
                Buyurtmani rasmiylashtirish
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <div className="text-[11px] text-zinc-500 text-center leading-relaxed">
              🔒 Barcha ma&apos;lumotlar xavfsiz kanallar orqali uzatiladi. ALLMAX Fix Price kafolati.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

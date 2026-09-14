"use client";

import { ShippingFormInputs, shippingFormSchema, UZBEKISTAN_REGIONS } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface ShippingFormProps {
  setShippingForm: (data: ShippingFormInputs) => void;
  onRegionChange?: (region: string) => void;
  defaultValues?: Partial<ShippingFormInputs>;
}

const ShippingForm = ({
  setShippingForm,
  onRegionChange,
  defaultValues,
}: ShippingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
    defaultValues: {
      region: defaultValues?.region || "Toshkent shahri",
      name: defaultValues?.name || "",
      email: defaultValues?.email || "",
      phone: defaultValues?.phone || "",
      address: defaultValues?.address || "",
      notes: defaultValues?.notes || "",
    },
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <div className="flex items-center gap-2 pb-2 border-b border-[#262626] text-white font-bold text-sm">
        <MapPin className="w-4 h-4 text-[#e30613]" />
        <span>Yetkazib berish ma&apos;lumotlari</span>
      </div>

      {/* VILOYAT / HUDUD */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="region" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
          Viloyat / Hudud *
        </label>
        <select
          id="region"
          className="border border-[#262626] rounded-lg p-2.5 outline-hidden text-sm bg-[#1c1c1c] text-white focus:border-[#e30613] focus:ring-1 focus:ring-[#e30613] transition-all cursor-pointer"
          {...register("region", {
            onChange: (e) => onRegionChange?.(e.target.value),
          })}
        >
          {UZBEKISTAN_REGIONS.map((region) => (
            <option key={region} value={region} className="bg-[#141414] text-white">
              {region} {region === "Toshkent shahri" ? "(25 000 so'm)" : "(40 000 so'm)"}
            </option>
          ))}
        </select>
        {errors.region && (
          <p className="text-xs text-[#e30613]">{errors.region.message}</p>
        )}
      </div>

      {/* ISM VA FAMILIYA */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
          Ism va Familiya *
        </label>
        <input
          className="border border-[#262626] rounded-lg p-2.5 outline-hidden text-sm bg-[#1c1c1c] text-white focus:border-[#e30613] focus:ring-1 focus:ring-[#e30613] transition-all placeholder:text-zinc-600"
          type="text"
          id="name"
          placeholder="Alisher Usmonov"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-xs text-[#e30613]">{errors.name.message}</p>
        )}
      </div>

      {/* TELEFON RAQAM */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
          Telefon raqami *
        </label>
        <input
          className="border border-[#262626] rounded-lg p-2.5 outline-hidden text-sm bg-[#1c1c1c] text-white focus:border-[#e30613] focus:ring-1 focus:ring-[#e30613] transition-all placeholder:text-zinc-600"
          type="tel"
          id="phone"
          placeholder="+998 90 123 45 67"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-xs text-[#e30613]">{errors.phone.message}</p>
        )}
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
          Elektron pochta (Email) *
        </label>
        <input
          className="border border-[#262626] rounded-lg p-2.5 outline-hidden text-sm bg-[#1c1c1c] text-white focus:border-[#e30613] focus:ring-1 focus:ring-[#e30613] transition-all placeholder:text-zinc-600"
          type="email"
          id="email"
          placeholder="misol@gmail.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-[#e30613]">{errors.email.message}</p>
        )}
      </div>

      {/* ANIQ MANZIL */}
      <div className="flex flex-col gap-1">
        <label htmlFor="address" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
          Yetkazish manzili (Tuman, ko&apos;cha, uy / xonadon) *
        </label>
        <input
          className="border border-[#262626] rounded-lg p-2.5 outline-hidden text-sm bg-[#1c1c1c] text-white focus:border-[#e30613] focus:ring-1 focus:ring-[#e30613] transition-all placeholder:text-zinc-600"
          type="text"
          id="address"
          placeholder="Chilonzor tumani, 9-mavze, 12-uy, 34-xonadon"
          {...register("address")}
        />
        {errors.address && (
          <p className="text-xs text-[#e30613]">{errors.address.message}</p>
        )}
      </div>

      {/* QO'SHIMCHA ESLATMA */}
      <div className="flex flex-col gap-1">
        <label htmlFor="notes" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
          Kuryer uchun eslatma (ixtiyoriy)
        </label>
        <input
          className="border border-[#262626] rounded-lg p-2.5 outline-hidden text-sm bg-[#1c1c1c] text-white focus:border-[#e30613] focus:ring-1 focus:ring-[#e30613] transition-all placeholder:text-zinc-600"
          type="text"
          id="notes"
          placeholder="Domofon kodi yoki mo'ljal"
          {...register("notes")}
        />
      </div>

      <button
        type="submit"
        className="w-full mt-3 bg-[#e30613] hover:bg-[#bd0410] transition-all duration-300 text-white p-3 rounded-xl cursor-pointer font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(227,6,19,0.5)] hover:shadow-[0_0_25px_rgba(227,6,19,0.8)]"
      >
        To&apos;lov bosqichiga o&apos;tish
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
};

export default ShippingForm;

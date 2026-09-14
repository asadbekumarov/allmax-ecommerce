"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { toast } from "react-toastify";

export default function NewsletterBar() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      toast.success("ALLMAX oilasiga xush kelibsiz! Tez orada yangiliklarni yuboramiz.");
      setEmail("");
    }
  };

  return (
    <section className="my-14 w-full bg-[#121212] border border-[#222222] rounded-2xl p-8 lg:p-10 shadow-lg">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* LEFT TEXT */}
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#1c1c1c] border border-[#2a2a2a] flex items-center justify-center text-[#22c55e] shrink-0 shadow-sm">
            <Mail className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              Join the ALLMAX Family
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-lg">
              209 000 a&apos;zoga ega hamjamiyatimizga qo&apos;shiling. Yangi polkalar, aksiyalar va chegirmalar haqida birinchilardan bo&apos;lib xabar oling.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-auto">
          {submitted ? (
            <div className="flex items-center gap-2 text-[#22c55e] font-bold text-sm bg-[#22c55e]/10 px-4 py-3 rounded-xl border border-[#22c55e]/30">
              <CheckCircle2 className="w-5 h-5" />
              <span>Rahmat! Siz muvaffaqiyatli a&apos;zo bo&apos;ldingiz.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-2 max-w-md w-full"
            >
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Telefon yoki emailingizni kiriting..."
                className="w-full bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-500 outline-hidden focus:border-[#22c55e] focus:ring-1 focus:ring-[#22c55e] transition-all"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-black font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all shrink-0 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>SUBSCRIBE</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

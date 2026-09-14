"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  TrendingUp,
  ShoppingBag,
  PackageCheck,
  PackagePlus,
  ArrowRight,
  AlertTriangle,
  Layers,
  Sparkles,
  DollarSign,
  ShieldAlert,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { INITIAL_ORDERS } from "@/lib/ordersData";

const monthlySalesData = [
  { month: "Apr", tushum: 24.5, buyurtmalar: 180 },
  { month: "May", tushum: 32.8, buyurtmalar: 240 },
  { month: "Iyun", tushum: 41.2, buyurtmalar: 310 },
  { month: "Iyul", tushum: 38.6, buyurtmalar: 290 },
  { month: "Avg", tushum: 49.4, buyurtmalar: 370 },
  { month: "Sen", tushum: 58.4, buyurtmalar: 428 },
];

const paymentDistribution = [
  { name: "Click", value: 48, color: "#e30613" },
  { name: "Payme", value: 36, color: "#99000a" },
  { name: "Naqd pul", value: 16, color: "#3a3a3a" },
];

const lowStockItems = [
  {
    name: "ALLMAX Classic Polo Futbolka",
    size: "L",
    remaining: 0,
    color: "green",
    shelf: "99 000 so'm",
  },
  {
    name: "ALLMAX Classic Polo Futbolka",
    size: "XXL",
    remaining: 0,
    color: "gray",
    shelf: "99 000 so'm",
  },
  {
    name: "ALLMAX Qishki Issiq Tolovka",
    size: "M",
    remaining: 0,
    color: "green",
    shelf: "149 000 so'm",
  },
  {
    name: "ALLMAX Sportiv Hudi Pullover",
    size: "L",
    remaining: 0,
    color: "black",
    shelf: "149 000 so'm",
  },
  {
    name: "ALLMAX Qishki Issiq Tolovka",
    size: "S",
    remaining: 2,
    color: "gray",
    shelf: "149 000 so'm",
  },
];

export default function AdminDashboard() {
  const [period, setPeriod] = useState("month");

  return (
    <div className="space-y-6 py-2 max-w-7xl mx-auto">
      {/* Top Welcome Banner & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#141414] via-[#111111] to-[#0a0a0a] border border-[#262626] shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-3 py-1 rounded-md text-[11px] font-black bg-[#e30613] text-white tracking-widest uppercase shadow-[0_0_12px_rgba(227,6,19,0.7)] flex items-center gap-1 border border-white/20">
              <Sparkles className="w-3 h-3" /> Fix Price Standarti
            </span>
            <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
              Boshqaruv Tizimi
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
            ALLMAX Boshqaruv Paneli
          </h1>
          <p className="text-sm text-zinc-400 mt-1">
            Premium erkaklar modasi — sotuvlar hajmi, polkalar tahlili va buyurtmalar statistikasi.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="outline"
            asChild
            className="h-10 text-xs font-bold border-[#262626] bg-[#141414] hover:bg-[#1f1f1f] text-zinc-200 hover:text-white"
          >
            <Link href="/admin/orders">
              <ShoppingBag className="w-4 h-4 mr-1.5 text-[#e30613]" /> Buyurtmalar
            </Link>
          </Button>
          <Button
            asChild
            className="h-10 text-xs font-extrabold uppercase tracking-wider bg-[#e30613] hover:bg-[#bd0410] text-white shadow-[0_0_15px_rgba(227,6,19,0.5)] hover:shadow-[0_0_25px_rgba(227,6,19,0.8)]"
          >
            <Link href="/admin/products/new">
              <PackagePlus className="w-4 h-4 mr-1.5" /> + Yangi tovar
            </Link>
          </Button>
        </div>
      </div>

      {/* 4 Primary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Revenue */}
        <Card className="shadow-md border-[#262626] bg-[#141414] hover:border-[#e30613]/50 transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-bold tracking-wider uppercase text-zinc-400">
              Jami Sotuvlar (Tushum)
            </CardTitle>
            <div className="w-9 h-9 rounded-xl bg-[#e30613]/10 border border-[#e30613]/30 flex items-center justify-center text-[#e30613] shadow-[0_0_10px_rgba(227,6,19,0.3)]">
              <DollarSign className="w-5 h-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight text-white">
              58 420 000 <span className="text-xs font-normal text-zinc-400">so&apos;m</span>
            </div>
            <p className="text-xs text-[#e30613] font-bold flex items-center gap-1 mt-1.5">
              <TrendingUp className="w-3.5 h-3.5" /> +18.4% o&apos;tgan oyga nisbatan
            </p>
          </CardContent>
        </Card>

        {/* Card 2: Total Orders */}
        <Card className="shadow-md border-[#262626] bg-[#141414] hover:border-[#e30613]/50 transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-bold tracking-wider uppercase text-zinc-400">
              Jami Buyurtmalar
            </CardTitle>
            <div className="w-9 h-9 rounded-xl bg-[#e30613]/10 border border-[#e30613]/30 flex items-center justify-center text-[#e30613]">
              <ShoppingBag className="w-5 h-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight text-white">428 ta</div>
            <p className="text-xs text-zinc-300 font-bold flex items-center gap-1 mt-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#e30613]" /> +12.5% faol o&apos;sish
            </p>
          </CardContent>
        </Card>

        {/* Card 3: Average Order Value */}
        <Card className="shadow-md border-[#262626] bg-[#141414] hover:border-[#e30613]/50 transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-bold tracking-wider uppercase text-zinc-400">
              O&apos;rtacha Xarid Cheki
            </CardTitle>
            <div className="w-9 h-9 rounded-xl bg-[#e30613]/10 border border-[#e30613]/30 flex items-center justify-center text-[#e30613]">
              <Sparkles className="w-5 h-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight text-white">
              136 500 <span className="text-xs font-normal text-zinc-400">so&apos;m</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1.5 font-medium">
              Fix Price kombinatsiyalari
            </p>
          </CardContent>
        </Card>

        {/* Card 4: Delivered Rate */}
        <Card className="shadow-md border-[#262626] bg-[#141414] hover:border-[#e30613]/50 transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-bold tracking-wider uppercase text-zinc-400">
              Yetkazish Samaradorligi
            </CardTitle>
            <div className="w-9 h-9 rounded-xl bg-[#e30613]/10 border border-[#e30613]/30 flex items-center justify-center text-[#e30613]">
              <PackageCheck className="w-5 h-5" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black tracking-tight text-white">96.8%</div>
            <p className="text-xs text-zinc-400 mt-1.5 font-medium">
              Barcha viloyatlar bo&apos;yicha
            </p>
          </CardContent>
        </Card>
      </div>

      {/* ALLMAX Fix Price Shelves Performance Cards */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#e30613]" /> ALLMAX Fix Price Polkalari Tahlili
          </h2>
          <span className="text-xs text-zinc-500 font-medium">4 ta rasmiy polka guruhi</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <Card className="p-4 border border-[#262626] border-l-4 border-l-[#e30613] bg-[#141414] shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Hamyonbop polka</span>
                <div className="text-xl font-black text-white mt-1">49 000 so&apos;m</div>
              </div>
              <Badge variant="outline" className="text-xs border-[#262626] bg-[#1c1c1c] text-zinc-300">
                120 xarid
              </Badge>
            </div>
            <div className="mt-3 pt-2 border-t border-[#262626] flex justify-between text-xs text-zinc-400">
              <span>Umumiy tushum:</span>
              <span className="font-bold text-white">5 880 000 so&apos;m</span>
            </div>
          </Card>

          <Card className="p-4 border border-[#262626] border-l-4 border-l-[#e30613] bg-[#141414] shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Standart polka (Top)</span>
                <div className="text-xl font-black text-white mt-1">99 000 so&apos;m</div>
              </div>
              <Badge className="text-xs bg-[#e30613] text-white shadow-[0_0_10px_rgba(227,6,19,0.6)]">
                185 xarid
              </Badge>
            </div>
            <div className="mt-3 pt-2 border-t border-[#262626] flex justify-between text-xs text-zinc-400">
              <span>Umumiy tushum:</span>
              <span className="font-bold text-[#e30613]">18 315 000 so&apos;m</span>
            </div>
          </Card>

          <Card className="p-4 border border-[#262626] border-l-4 border-l-[#e30613] bg-[#141414] shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Premium polka</span>
                <div className="text-xl font-black text-white mt-1">149 000 so&apos;m</div>
              </div>
              <Badge variant="outline" className="text-xs border-[#262626] bg-[#1c1c1c] text-zinc-300">
                95 xarid
              </Badge>
            </div>
            <div className="mt-3 pt-2 border-t border-[#262626] flex justify-between text-xs text-zinc-400">
              <span>Umumiy tushum:</span>
              <span className="font-bold text-white">14 155 000 so&apos;m</span>
            </div>
          </Card>

          <Card className="p-4 border border-[#262626] border-l-4 border-l-[#e30613] bg-[#141414] shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Eksklyuziv polka</span>
                <div className="text-xl font-black text-white mt-1">199 000 so&apos;m</div>
              </div>
              <Badge variant="outline" className="text-xs border-[#262626] bg-[#1c1c1c] text-zinc-300">
                28 xarid
              </Badge>
            </div>
            <div className="mt-3 pt-2 border-t border-[#262626] flex justify-between text-xs text-zinc-400">
              <span>Umumiy tushum:</span>
              <span className="font-bold text-white">5 572 000 so&apos;m</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Revenue Chart (2 cols) */}
        <Card className="lg:col-span-2 shadow-md border-[#262626] bg-[#141414]">
          <CardHeader className="pb-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <CardTitle className="text-base font-extrabold text-white">
                  Sotuvlar Dinamikasi (Mln so&apos;m)
                </CardTitle>
                <CardDescription className="text-xs text-zinc-400">
                  Oxirgi 6 oylik savdo tushumlari tahlili
                </CardDescription>
              </div>
              <div className="flex items-center gap-1.5 text-xs bg-[#1a1a1a] p-1 rounded-lg border border-[#262626]">
                <button
                  type="button"
                  onClick={() => setPeriod("month")}
                  className={`px-3 py-1 rounded-md font-bold transition-all ${
                    period === "month"
                      ? "bg-[#e30613] text-white shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Oylik
                </button>
                <button
                  type="button"
                  onClick={() => setPeriod("week")}
                  className={`px-3 py-1 rounded-md font-bold transition-all ${
                    period === "week"
                      ? "bg-[#e30613] text-white shadow-xs"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Haftalik
                </button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlySalesData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#262626" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} stroke="#71717a" />
                  <YAxis tickLine={false} axisLine={false} unit="M" stroke="#71717a" />
                  <Tooltip
                    formatter={(value: any) => [`${value} Mln so'm`, "Tushum"]}
                    contentStyle={{
                      backgroundColor: "#141414",
                      borderColor: "#262626",
                      borderRadius: "0.5rem",
                      fontSize: "0.75rem",
                      color: "#ffffff",
                    }}
                  />
                  <Bar
                    dataKey="tushum"
                    fill="#e30613"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Payment Systems Pie Chart (1 col) */}
        <Card className="shadow-md border-[#262626] bg-[#141414] flex flex-col justify-between">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-extrabold text-white">
              To&apos;lov Turlari Ulushi
            </CardTitle>
            <CardDescription className="text-xs text-zinc-400">
              Click, Payme va Naqd pul taqsimoti
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pt-2">
            <div className="h-[190px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={paymentDistribution}
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {paymentDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`${value}%`, "Ulush"]}
                    contentStyle={{
                      backgroundColor: "#141414",
                      borderColor: "#262626",
                      color: "#ffffff",
                      borderRadius: "0.5rem",
                      fontSize: "0.75rem",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-2 w-full pt-3 border-t border-[#262626] text-center">
              <div>
                <div className="text-xs font-bold text-[#e30613]">Click</div>
                <div className="text-base font-black text-white">48%</div>
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-300">Payme</div>
                <div className="text-base font-black text-white">36%</div>
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-500">Naqd</div>
                <div className="text-base font-black text-white">16%</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-[11px] text-zinc-400 text-center w-full">
              Onlayn to&apos;lovlar jami 84% ni tashkil qilmoqda
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Lower Section: Recent Orders and Low Stock alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders (2 cols) */}
        <Card className="lg:col-span-2 shadow-md border-[#262626] bg-[#141414]">
          <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-[#262626]">
            <div>
              <CardTitle className="text-base font-extrabold text-white">
                So&apos;nggi Kelgan Buyurtmalar
              </CardTitle>
              <CardDescription className="text-xs text-zinc-400">
                Eng so&apos;nggi rasmiylashtirilgan xaridlar
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-xs font-bold text-[#e30613] hover:text-white hover:bg-[#e30613]/20 gap-1"
            >
              <Link href="/admin/orders">
                Barchasini ko&apos;rish <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-[#262626]">
              {INITIAL_ORDERS.slice(0, 5).map((order) => (
                <div
                  key={order.id}
                  className="p-3.5 px-6 flex items-center justify-between gap-4 hover:bg-[#1a1a1a] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#e30613]/15 border border-[#e30613]/30 flex items-center justify-center text-[#e30613] font-bold text-xs shrink-0">
                      {order.customerName.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {order.customerName}
                      </div>
                      <div className="text-xs text-zinc-400 flex items-center gap-2">
                        <span>{order.region}</span>
                        <span>•</span>
                        <span>{order.createdAt.split(" ")[0]} {order.createdAt.split(" ")[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-black text-white">
                      {order.totalPrice.toLocaleString("uz-UZ")} so&apos;m
                    </div>
                    <div className="text-[11px] mt-0.5">
                      <span className="text-[#e30613] font-bold">
                        {order.orderStatus}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alerts (1 col) */}
        <Card className="shadow-md border-[#262626] bg-[#141414] flex flex-col justify-between">
          <CardHeader className="pb-3 border-b border-[#262626]">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-extrabold text-white flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#e30613]" /> Omborda Kam Qolganlar
              </CardTitle>
              <Badge className="bg-[#e30613] text-white text-[10px] px-1.5 py-0">
                Diqqat
              </Badge>
            </div>
            <CardDescription className="text-xs text-zinc-400">
              Razmerlar bo&apos;yicha zaxirasi tugagan tovarlar
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-[#262626]">
              {lowStockItems.map((item, idx) => (
                <div key={idx} className="p-3 px-6 flex items-center justify-between text-xs hover:bg-[#1a1a1a]">
                  <div>
                    <div className="font-bold text-white truncate max-w-[170px]">
                      {item.name}
                    </div>
                    <div className="text-zinc-400 flex items-center gap-1.5 mt-0.5">
                      <Badge variant="outline" className="text-[10px] px-1 py-0 border-[#262626] bg-[#1c1c1c] text-zinc-300">
                        {item.size}
                      </Badge>
                      <span>{item.shelf}</span>
                    </div>
                  </div>
                  <div>
                    {item.remaining === 0 ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-black bg-[#e30613]/20 border border-[#e30613]/40 text-[#e30613]">
                        Tugagan (0)
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#262626] text-zinc-300">
                        Qoldiq: {item.remaining}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="pt-3 border-t border-[#262626]">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="w-full text-xs font-bold border-[#262626] bg-[#1a1a1a] hover:bg-[#222222] text-zinc-200 hover:text-white"
            >
              <Link href="/admin/products/new">
                <PackagePlus className="w-3.5 h-3.5 mr-1 text-[#e30613]" /> Yangi tovar / zaxira kiritish
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

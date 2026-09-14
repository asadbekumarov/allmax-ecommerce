"use client";

import React, { useState, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Order,
  OrderStatus,
  PaymentMethod,
  INITIAL_ORDERS,
  UZBEKISTAN_REGIONS,
} from "@/lib/ordersData";
import {
  Search,
  ShoppingBag,
  Truck,
  CheckCircle2,
  Clock,
  Eye,
  CreditCard,
  MapPin,
  Phone,
  User,
  DollarSign,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [paymentFilter, setPaymentFilter] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Status badge styling - ALLMAX Dark Corporate style
  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "Tayyorlanmoqda":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-[#1f1f1f] text-zinc-200 border border-[#262626]">
            <Clock className="w-3.5 h-3.5 text-[#e30613]" /> Tayyorlanmoqda
          </span>
        );
      case "Yo'lda":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-[#261012] text-zinc-100 border border-[#e30613]/40">
            <Truck className="w-3.5 h-3.5 text-[#e30613]" /> Yo&apos;lda
          </span>
        );
      case "Yetkazildi":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-black bg-[#e30613] text-white shadow-[0_0_10px_rgba(227,6,19,0.5)]">
            <CheckCircle2 className="w-3.5 h-3.5" /> Yetkazildi
          </span>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  // Payment badge styling - ALLMAX Dark style
  const getPaymentBadge = (method: PaymentMethod) => {
    switch (method) {
      case "Click":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1a1a1a] text-sky-400 border border-[#262626]">
            Click
          </span>
        );
      case "Payme":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1a1a1a] text-teal-400 border border-[#262626]">
            Payme
          </span>
        );
      case "Naqd":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold bg-[#1a1a1a] text-zinc-300 border border-[#262626]">
            Naqd pul
          </span>
        );
      default:
        return <Badge variant="secondary">{method}</Badge>;
    }
  };

  const handleUpdateStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((ord) =>
        ord.id === orderId ? { ...ord, orderStatus: newStatus } : ord
      )
    );
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder((prev) =>
        prev ? { ...prev, orderStatus: newStatus } : null
      );
    }
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.customerPhone.includes(searchQuery) ||
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || order.orderStatus === statusFilter;

      const matchesRegion =
        regionFilter === "all" || order.region === regionFilter;

      const matchesPayment =
        paymentFilter === "all" || order.paymentMethod === paymentFilter;

      return matchesSearch && matchesStatus && matchesRegion && matchesPayment;
    });
  }, [orders, searchQuery, statusFilter, regionFilter, paymentFilter]);

  const stats = useMemo(() => {
    const total = orders.length;
    const preparing = orders.filter((o) => o.orderStatus === "Tayyorlanmoqda").length;
    const shipping = orders.filter((o) => o.orderStatus === "Yo'lda").length;
    const delivered = orders.filter((o) => o.orderStatus === "Yetkazildi").length;
    const totalRevenue = orders.reduce((sum, o) => sum + o.totalPrice, 0);

    return { total, preparing, shipping, delivered, totalRevenue };
  }, [orders]);

  const resetFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setRegionFilter("all");
    setPaymentFilter("all");
  };

  return (
    <div className="space-y-6">
      {/* Top Metrics Cards - Dark Corporate */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3.5">
        <Card className="shadow-md border-[#262626] bg-[#141414] p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-400 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Jami buyurtmalar</span>
            <ShoppingBag className="w-4 h-4 text-[#e30613]" />
          </div>
          <div className="text-2xl font-black text-white">{stats.total} ta</div>
          <p className="text-[11px] text-zinc-500 mt-1 font-medium">Barcha tushganlar</p>
        </Card>

        <Card className="shadow-md border-[#262626] bg-[#141414] p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-400 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Tayyorlanmoqda</span>
            <Clock className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-2xl font-black text-white">
            {stats.preparing} ta
          </div>
          <p className="text-[11px] text-zinc-500 mt-1 font-medium">Ombor bosqichida</p>
        </Card>

        <Card className="shadow-md border-[#262626] bg-[#141414] p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-400 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Yo&apos;lda</span>
            <Truck className="w-4 h-4 text-[#e30613]" />
          </div>
          <div className="text-2xl font-black text-white">
            {stats.shipping} ta
          </div>
          <p className="text-[11px] text-zinc-500 mt-1 font-medium">Kuryer topshirig&apos;ida</p>
        </Card>

        <Card className="shadow-md border-[#262626] bg-[#141414] p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-zinc-400 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Yetkazildi</span>
            <CheckCircle2 className="w-4 h-4 text-[#e30613]" />
          </div>
          <div className="text-2xl font-black text-[#e30613]">
            {stats.delivered} ta
          </div>
          <p className="text-[11px] text-zinc-500 mt-1 font-medium">Muvaffaqiyatli yakun</p>
        </Card>

        <Card className="col-span-2 lg:col-span-1 shadow-md border-[#262626] bg-[#141414] p-4 flex flex-col justify-between border-l-4 border-l-[#e30613]">
          <div className="flex items-center justify-between text-zinc-400 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider">Jami tushum</span>
            <DollarSign className="w-4 h-4 text-[#e30613]" />
          </div>
          <div className="text-xl font-black text-white">
            {stats.totalRevenue.toLocaleString("uz-UZ")} <span className="text-xs font-normal text-zinc-400">so&apos;m</span>
          </div>
          <p className="text-[11px] text-[#e30613] mt-1 font-bold">ALLMAX Fix Price</p>
        </Card>
      </div>

      {/* Main Table Card */}
      <Card className="shadow-md border-[#262626] bg-[#141414]">
        <CardHeader className="pb-4 border-b border-[#262626]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl font-black text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#e30613]" /> Buyurtmalar ro&apos;yxati
              </CardTitle>
              <CardDescription className="mt-1 text-xs text-zinc-400">
                O&apos;zbekiston viloyatlari, to&apos;lov tizimlari va buyurtma holatini boshqarish
              </CardDescription>
            </div>
            <div className="text-xs text-zinc-400">
              Topildi: <span className="font-bold text-white">{filteredOrders.length}</span> ta buyurtma
            </div>
          </div>

          {/* Filters Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2.5 pt-4">
            {/* Search */}
            <div className="relative sm:col-span-2 lg:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input
                placeholder="ID, mijoz ismi, telefon yoki manzil..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-9 text-xs bg-[#1a1a1a] border-[#262626] text-white placeholder:text-zinc-500 focus:border-[#e30613]"
              />
            </div>

            {/* Status Filter */}
            <div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-9 text-xs bg-[#1a1a1a] border-[#262626] text-white">
                  <SelectValue placeholder="Holat bo'yicha" />
                </SelectTrigger>
                <SelectContent className="bg-[#141414] border-[#262626] text-white">
                  <SelectItem value="all">Barcha holatlar</SelectItem>
                  <SelectItem value="Tayyorlanmoqda">Tayyorlanmoqda</SelectItem>
                  <SelectItem value="Yo'lda">Yo&apos;lda</SelectItem>
                  <SelectItem value="Yetkazildi">Yetkazildi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Region Filter */}
            <div>
              <Select value={regionFilter} onValueChange={setRegionFilter}>
                <SelectTrigger className="h-9 text-xs bg-[#1a1a1a] border-[#262626] text-white">
                  <SelectValue placeholder="Viloyat bo'yicha" />
                </SelectTrigger>
                <SelectContent className="max-h-56 bg-[#141414] border-[#262626] text-white">
                  <SelectItem value="all">Barcha viloyatlar</SelectItem>
                  {UZBEKISTAN_REGIONS.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Payment Filter */}
            <div className="flex gap-2">
              <Select value={paymentFilter} onValueChange={setPaymentFilter}>
                <SelectTrigger className="h-9 text-xs flex-1 bg-[#1a1a1a] border-[#262626] text-white">
                  <SelectValue placeholder="To'lov turi" />
                </SelectTrigger>
                <SelectContent className="bg-[#141414] border-[#262626] text-white">
                  <SelectItem value="all">Barcha to&apos;lovlar</SelectItem>
                  <SelectItem value="Click">Click</SelectItem>
                  <SelectItem value="Payme">Payme</SelectItem>
                  <SelectItem value="Naqd">Naqd pul</SelectItem>
                </SelectContent>
              </Select>

              {(searchQuery || statusFilter !== "all" || regionFilter !== "all" || paymentFilter !== "all") && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={resetFilters}
                  title="Filtrlarni tozalash"
                  className="h-9 w-9 shrink-0 border-[#262626] bg-[#1a1a1a] text-zinc-300 hover:text-white hover:bg-[#202020]"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </Button>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#0d0d0d] border-b border-[#262626]">
                <TableRow className="border-[#262626] hover:bg-transparent">
                  <TableHead className="w-[110px] font-bold text-xs text-zinc-400">Buyurtma ID</TableHead>
                  <TableHead className="font-bold text-xs text-zinc-400">Mijoz ma&apos;lumotlari</TableHead>
                  <TableHead className="font-bold text-xs text-zinc-400">Viloyat / Manzil</TableHead>
                  <TableHead className="font-bold text-xs text-zinc-400">Mahsulot & Razmer</TableHead>
                  <TableHead className="font-bold text-xs text-zinc-400">Summa</TableHead>
                  <TableHead className="font-bold text-xs text-zinc-400">To&apos;lov turi</TableHead>
                  <TableHead className="font-bold text-xs text-zinc-400">Buyurtma holati</TableHead>
                  <TableHead className="text-right font-bold text-xs text-zinc-400 pr-4">Amallar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-32 text-center text-zinc-500">
                      Hech qanday buyurtma topilmadi. Filtrlarni o&apos;zgartirib ko&apos;ring.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredOrders.map((order) => (
                    <TableRow key={order.id} className="border-b border-[#262626] hover:bg-[#1a1a1a] transition-colors">
                      {/* ID and Date */}
                      <TableCell className="font-medium">
                        <span className="font-bold text-white text-xs block">
                          {order.id}
                        </span>
                        <span className="text-[11px] text-zinc-500 block mt-0.5">
                          {order.createdAt}
                        </span>
                      </TableCell>

                      {/* Customer */}
                      <TableCell>
                        <div className="font-bold text-sm text-white">
                          {order.customerName}
                        </div>
                        <div className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                          <Phone className="w-3 h-3 text-[#e30613]" /> {order.customerPhone}
                        </div>
                      </TableCell>

                      {/* Region & Address */}
                      <TableCell>
                        <Badge variant="outline" className="text-xs font-semibold bg-[#1a1a1a] border-[#262626] text-white">
                          <MapPin className="w-3 h-3 mr-1 text-[#e30613]" />
                          {order.region}
                        </Badge>
                        <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1 max-w-[200px]" title={order.address}>
                          {order.address}
                        </p>
                      </TableCell>

                      {/* Items & Size */}
                      <TableCell>
                        <div className="space-y-1 max-w-[220px]">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs">
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-[#262626] text-white">
                                {item.size}
                              </span>
                              <span className="truncate text-zinc-200">{item.productName}</span>
                              <span className="text-zinc-500 text-[11px]">
                                (x{item.quantity})
                              </span>
                            </div>
                          ))}
                        </div>
                      </TableCell>

                      {/* Total Price */}
                      <TableCell>
                        <span className="font-black text-sm text-white">
                          {order.totalPrice.toLocaleString("uz-UZ")}
                        </span>
                        <span className="text-[11px] text-zinc-500 block">so&apos;m</span>
                      </TableCell>

                      {/* Payment Method */}
                      <TableCell>
                        <div className="space-y-1">
                          {getPaymentBadge(order.paymentMethod)}
                          <div className="text-[10px] text-zinc-500">
                            {order.paymentStatus}
                          </div>
                        </div>
                      </TableCell>

                      {/* Order Status with Quick Change */}
                      <TableCell>
                        <div className="space-y-1.5">
                          <div>{getStatusBadge(order.orderStatus)}</div>
                          <Select
                            value={order.orderStatus}
                            onValueChange={(val: OrderStatus) =>
                              handleUpdateStatus(order.id, val)
                            }
                          >
                            <SelectTrigger className="h-7 text-[11px] w-[130px] bg-[#1a1a1a] border-[#262626] text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-[#141414] border-[#262626] text-white">
                              <SelectItem value="Tayyorlanmoqda">Tayyorlanmoqda</SelectItem>
                              <SelectItem value="Yo'lda">Yo&apos;lda</SelectItem>
                              <SelectItem value="Yetkazildi">Yetkazildi</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="text-right pr-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedOrder(order)}
                          className="h-8 px-2 text-xs font-bold text-zinc-300 hover:text-white hover:bg-[#e30613]/20"
                        >
                          <Eye className="w-3.5 h-3.5 mr-1 text-[#e30613]" /> Ko&apos;rish
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Order Details Dialog */}
      {selectedOrder && (
        <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
          <DialogContent className="max-w-lg bg-[#141414] border border-[#262626] text-white">
            <DialogHeader>
              <div className="flex items-center justify-between pr-6">
                <div>
                  <DialogTitle className="text-xl font-black flex items-center gap-2 text-white">
                    Buyurtma {selectedOrder.id}
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-xs text-zinc-400">
                    {selectedOrder.createdAt} sanasida rasmiylashtirilgan
                  </DialogDescription>
                </div>
                <div>{getStatusBadge(selectedOrder.orderStatus)}</div>
              </div>
            </DialogHeader>

            <div className="space-y-4 pt-2">
              {/* Customer Box */}
              <div className="p-3.5 rounded-xl border border-[#262626] bg-[#1c1c1c] space-y-2">
                <h4 className="text-xs font-bold uppercase text-zinc-400 tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#e30613]" /> Mijoz Tafsilotlari
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-xs text-zinc-500 block">Ism:</span>
                    <span className="font-bold text-white">{selectedOrder.customerName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block">Telefon:</span>
                    <span className="font-bold text-white">{selectedOrder.customerPhone}</span>
                  </div>
                </div>

                <div className="pt-1 text-sm">
                  <span className="text-xs text-zinc-500 block">Viloyat va manzil:</span>
                  <div className="font-medium text-zinc-200 flex items-start gap-1 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#e30613] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">{selectedOrder.region}</strong>, {selectedOrder.address}
                    </span>
                  </div>
                </div>

                {selectedOrder.notes && (
                  <div className="pt-1 text-xs bg-[#141414] p-2 rounded-md border border-[#262626] text-zinc-300">
                    <span className="text-zinc-500 font-bold">Mijoz izohi:</span> &ldquo;{selectedOrder.notes}&rdquo;
                  </div>
                )}
              </div>

              {/* Items in order */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase text-zinc-400 tracking-wider flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#e30613]" /> Buyurtma qilingan tovarlar
                </h4>
                <div className="space-y-2 border border-[#262626] rounded-xl p-3 bg-[#1c1c1c]">
                  {selectedOrder.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3 py-2 border-b border-[#262626] last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#141414] relative overflow-hidden border border-[#262626] shrink-0">
                          {item.image && (
                            <Image
                              src={item.image}
                              alt={item.productName}
                              fill
                              className="object-contain p-1"
                            />
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-white">
                            {item.productName}
                          </div>
                          <div className="text-xs text-zinc-400 flex items-center gap-2">
                            <span>Razmer: <strong className="text-white">{item.size}</strong></span>
                            <span>•</span>
                            <span>Miqdor: {item.quantity} dona</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-sm text-white">
                          {(item.price * item.quantity).toLocaleString("uz-UZ")} so&apos;m
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          {item.price.toLocaleString("uz-UZ")} so&apos;mdan
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between items-center pt-2 text-base font-bold border-t border-[#262626]">
                    <span className="text-zinc-300">Jami to&apos;lov:</span>
                    <span className="text-[#e30613] text-lg font-black">
                      {selectedOrder.totalPrice.toLocaleString("uz-UZ")} so&apos;m
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment & Status change */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-[#1c1c1c] border border-[#262626]">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs text-zinc-400">To&apos;lov:</span>
                  {getPaymentBadge(selectedOrder.paymentMethod)}
                  <span className="text-xs text-zinc-500">({selectedOrder.paymentStatus})</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-400 font-bold">Holat:</span>
                  <Select
                    value={selectedOrder.orderStatus}
                    onValueChange={(val: OrderStatus) =>
                      handleUpdateStatus(selectedOrder.id, val)
                    }
                  >
                    <SelectTrigger className="h-8 text-xs w-[140px] bg-[#141414] border-[#262626] text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#141414] border-[#262626] text-white">
                      <SelectItem value="Tayyorlanmoqda">Tayyorlanmoqda</SelectItem>
                      <SelectItem value="Yo'lda">Yo&apos;lda</SelectItem>
                      <SelectItem value="Yetkazildi">Yetkazildi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

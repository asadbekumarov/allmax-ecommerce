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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  FIX_PRICE_SHELVES,
} from "@/lib/ordersData";
import {
  UploadCloud,
  PackagePlus,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  Tag,
  Boxes,
  Palette,
  Image as ImageIcon,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const SIZES = ["S", "M", "L", "XL", "XXL", "3XL"] as const;
type SizeType = (typeof SIZES)[number];

const COLOR_OPTIONS = [
  { id: "black", name: "Qora", hex: "#18181b" },
  { id: "white", name: "Oq", hex: "#f4f4f5", border: true },
  { id: "gray", name: "Kulrang", hex: "#71717a" },
  { id: "blue", name: "To'q ko'k", hex: "#1e3a8a" },
  { id: "green", name: "Yashil / Xaki", hex: "#15803d" },
  { id: "purple", name: "Binafsha", hex: "#7e22ce" },
  { id: "red", name: "Qizil", hex: "#b91c1c" },
];

const CATEGORIES = [
  { value: "t-shirts", label: "Polo va Futbolkalar" },
  { value: "jackets", label: "Kurtka va Tolovkalar" },
  { value: "hoodies", label: "Sportiv Hudi va Sviterlar" },
  { value: "pants", label: "Shimlar va Sportivkalar" },
  { value: "accessories", label: "Aksessuarlar va Bosh kiyimlar" },
];

export default function NewProductForm() {
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("t-shirts");
  
  // ALLMAX Fix Price shelf (49000, 99000, 149000, 199000)
  const [selectedPrice, setSelectedPrice] = useState<string>("99000");

  // Stock per size (S, M, L, XL, XXL, 3XL)
  const [sizeStock, setSizeStock] = useState<Record<SizeType, number>>({
    S: 10,
    M: 25,
    L: 20,
    XL: 15,
    XXL: 8,
    "3XL": 5,
  });

  // Selected colors
  const [selectedColors, setSelectedColors] = useState<string[]>([
    "black",
    "gray",
  ]);

  // Image state
  const [imagePreview, setImagePreview] = useState<string>("/products/1g.png");
  const [isSaved, setIsSaved] = useState(false);

  const handleStockChange = (size: SizeType, value: string) => {
    const num = Math.max(0, parseInt(value) || 0);
    setSizeStock((prev) => ({
      ...prev,
      [size]: num,
    }));
  };

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) =>
      prev.includes(colorId)
        ? prev.filter((c) => c !== colorId)
        : [...prev, colorId]
    );
  };

  const totalStock = Object.values(sizeStock).reduce((acc, curr) => acc + curr, 0);

  const selectedShelf = FIX_PRICE_SHELVES.find(
    (s) => s.value.toString() === selectedPrice
  );

  const handleQuickStockFill = (amount: number) => {
    const updated: Record<SizeType, number> = {
      S: amount,
      M: amount,
      L: amount,
      XL: amount,
      XXL: amount,
      "3XL": amount,
    };
    setSizeStock(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-5xl mx-auto py-6 space-y-6">
      {/* Header with breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Link
              href="/admin"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Bosh sahifa
            </Link>
            <span>/</span>
            <Link href="/admin/products" className="hover:text-primary transition-colors">
              Tovarlar
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">Yangi tovar</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2">
            <PackagePlus className="w-7 h-7 text-primary" /> Yangi tovar qo&apos;shish
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            ALLMAX Fix Price standartidagi polkalar va o&apos;lchamlar ombori bo&apos;yicha yangi tovar kartochkasini yaratish.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/products">Bekor qilish</Link>
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            className="bg-primary text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" /> Tovarni saqlash
          </Button>
        </div>
      </div>

      {/* Success Banner */}
      {isSaved && (
        <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 flex items-start justify-between gap-3 shadow-sm transition-all animate-in fade-in slide-in-from-top-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
            <div>
              <h4 className="font-semibold text-base">
                Tovar muvaffaqiyatli saqlandi!
              </h4>
              <p className="text-sm opacity-90">
                &ldquo;{name || "Yangi ALLMAX Tovar"}&rdquo; {selectedShelf?.label} narxi va {totalStock} ta umumiy ombor qoldig&apos;i bilan bazaga kiritildi (Mock).
              </p>
            </div>
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsSaved(false)}
            className="text-xs"
          >
            Yopish
          </Button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN: Main info and Sizes (2 cols on large) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Card 1: Basic Information */}
          <Card className="shadow-sm border-border/70">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Asosiy ma&apos;lumotlar</CardTitle>
              </div>
              <CardDescription>
                Tovarning nomi, toifasi va mijozlarga ko&apos;rinadigan tavsifini kiriting.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product-name" className="font-medium">
                  Tovar nomi <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="product-name"
                  placeholder="Masalan: ALLMAX Premium Paxtali Polo Futbolka"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-10 text-base"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className="font-medium">
                    Kategoriya
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger id="category" className="h-10">
                      <SelectValue placeholder="Kategoriyani tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="short-desc" className="font-medium">
                    Qisqa shior / tavsif
                  </Label>
                  <Input
                    id="short-desc"
                    placeholder="Qulay, nafas oluvchi va kundalik uslub"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    className="h-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="full-description" className="font-medium">
                  Batafsil tavsif va xususiyatlari
                </Label>
                <Textarea
                  id="full-description"
                  rows={4}
                  placeholder="Tovar matosi, tarkibi, yuvish ko'rsatmalari va afzalliklari..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 2: ALLMAX Fix Price Shelves (Select & Visual Selector) */}
          <Card className="shadow-sm border-border/70 overflow-hidden">
            <CardHeader className="pb-4 bg-muted/20 border-b border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <div>
                    <CardTitle className="text-lg">
                      ALLMAX Fix Price Narx Polkalari
                    </CardTitle>
                    <CardDescription>
                      Ixtiyoriy narx emas — do&apos;kon konseptiga muvofiq qat&apos;iy 4 ta polkadan birini tanlang.
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs bg-background">
                  Fix Price Konsepti
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-5 space-y-5">
              {/* Dropdown Select (As requested) */}
              <div className="space-y-2">
                <Label htmlFor="fix-price-select" className="font-medium">
                  Narx polkasini tanlang (Dropdown) <span className="text-destructive">*</span>
                </Label>
                <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                  <SelectTrigger id="fix-price-select" className="h-11 text-base font-semibold">
                    <SelectValue placeholder="Fix Price polkani tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    {FIX_PRICE_SHELVES.map((shelf) => (
                      <SelectItem
                        key={shelf.value}
                        value={shelf.value.toString()}
                        className="py-2.5 cursor-pointer"
                      >
                        <div className="flex items-center justify-between w-full gap-4">
                          <span className="font-bold text-base">{shelf.label}</span>
                          <span className="text-xs text-muted-foreground">
                            ({shelf.tag})
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Visual Quick Select Cards */}
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">
                  Tezkor ko&apos;rish va taqqoslash polkalari:
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {FIX_PRICE_SHELVES.map((shelf) => {
                    const isSelected = selectedPrice === shelf.value.toString();
                    return (
                      <button
                        key={shelf.value}
                        type="button"
                        onClick={() => setSelectedPrice(shelf.value.toString())}
                        className={`p-3 rounded-xl text-left border transition-all relative cursor-pointer ${
                          isSelected
                            ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-sm"
                            : "border-border/70 hover:border-primary/40 bg-card"
                        }`}
                      >
                        <div className="text-xs text-muted-foreground font-medium">
                          {shelf.tag}
                        </div>
                        <div className="text-base sm:text-lg font-bold mt-1 text-foreground">
                          {shelf.shortLabel}
                        </div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">
                          {shelf.value.toLocaleString("uz-UZ")} so&apos;m
                        </div>
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Size Stock Management (S, M, L, XL, XXL, 3XL) */}
          <Card className="shadow-sm border-border/70">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Boxes className="w-5 h-5 text-primary" />
                  <div>
                    <CardTitle className="text-lg">
                      Tovar o&apos;lchamlari ombori (Stock)
                    </CardTitle>
                    <CardDescription>
                      Har bir razmer uchun alohida qoldiq miqdorini kiriting.
                    </CardDescription>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickStockFill(10)}
                    className="text-xs h-7"
                  >
                    Barchasiga 10 ta
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickStockFill(20)}
                    className="text-xs h-7"
                  >
                    Barchasiga 20 ta
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Grid of Sizes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {SIZES.map((size) => {
                  const stock = sizeStock[size];
                  const isOutOfStock = stock === 0;
                  const isLow = stock > 0 && stock <= 5;

                  return (
                    <div
                      key={size}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isOutOfStock
                          ? "border-destructive/40 bg-destructive/5"
                          : isLow
                          ? "border-amber-500/40 bg-amber-500/5"
                          : "border-border/70 bg-card"
                      }`}
                    >
                      <div className="font-bold text-lg mb-1 flex items-center justify-center gap-1">
                        <span>{size}</span>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor={`stock-${size}`} className="text-[11px] text-muted-foreground">
                          Qoldiq (dona)
                        </Label>
                        <Input
                          id={`stock-${size}`}
                          type="number"
                          min="0"
                          value={stock.toString()}
                          onChange={(e) => handleStockChange(size, e.target.value)}
                          className="h-9 text-center font-bold text-base"
                        />
                      </div>
                      <div className="mt-2 text-[10px] font-medium">
                        {isOutOfStock ? (
                          <span className="text-destructive font-semibold">Tugagan</span>
                        ) : isLow ? (
                          <span className="text-amber-600 dark:text-amber-400">Kam qolgan</span>
                        ) : (
                          <span className="text-emerald-600 dark:text-emerald-400">Mavjud</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Total Stock Summary Bar */}
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Jami hisoblangan ombor zaxirasi:</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={totalStock > 0 ? "secondary" : "destructive"} className="text-sm px-3 py-1 font-bold">
                    {totalStock} dona
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN: Media Upload, Colors, Preview (1 col) */}
        <div className="space-y-6">
          {/* Card 4: Product Image Upload */}
          <Card className="shadow-sm border-border/70">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Tovar rasmi</CardTitle>
              </div>
              <CardDescription>
                Tovarning asosiy rasmini yuklang yoki namunani tanlang.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Preview Area */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-border bg-muted/30 flex items-center justify-center group">
                {imagePreview ? (
                  <>
                    <Image
                      src={imagePreview}
                      alt="Tovar rasmi preview"
                      fill
                      className="object-contain p-4 transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-background/90 text-foreground backdrop-blur text-xs font-semibold">
                        {selectedShelf?.shortLabel}
                      </Badge>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
                    <UploadCloud className="w-12 h-12 mb-2 stroke-1" />
                    <p className="text-sm font-medium">Rasm yuklanmagan</p>
                  </div>
                )}
              </div>

              {/* Upload Dropzone / Quick Select */}
              <div className="border-2 border-dashed border-border/80 rounded-xl p-4 text-center hover:border-primary/50 transition-colors cursor-pointer bg-card">
                <UploadCloud className="w-7 h-7 mx-auto text-muted-foreground mb-1" />
                <p className="text-xs font-medium text-foreground">
                  Faylni tanlash yoki shu yerga tashlash
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  PNG, JPG yoki WebP (maks. 5MB)
                </p>
              </div>

              {/* Quick sample image chooser */}
              <div className="space-y-1.5">
                <Label className="text-xs text-muted-foreground">Mavjud namunaviy rasmlar:</Label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    "/products/1g.png",
                    "/products/2g.png",
                    "/products/3gr.png",
                    "/products/5r.png",
                  ].map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setImagePreview(src)}
                      className={`relative aspect-square rounded-lg border overflow-hidden p-1 transition-all ${
                        imagePreview === src
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-border/60 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Sample ${i + 1}`}
                        fill
                        className="object-contain p-1"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 5: Available Colors */}
          <Card className="shadow-sm border-border/70">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" />
                <CardTitle className="text-base">Mavjud ranglar</CardTitle>
              </div>
              <CardDescription className="text-xs">
                Ushbu tovar qaysi ranglarda sotiladi:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {COLOR_OPTIONS.map((color) => {
                  const isChecked = selectedColors.includes(color.id);
                  return (
                    <button
                      key={color.id}
                      type="button"
                      onClick={() => toggleColor(color.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                        isChecked
                          ? "border-primary bg-primary/10 text-foreground ring-1 ring-primary/30"
                          : "border-border/60 hover:bg-muted/40 text-muted-foreground"
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-black/20 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                      {isChecked && <span className="text-primary font-bold">✓</span>}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Card 6: Live Card Summary */}
          <Card className="shadow-sm border-border/70 bg-muted/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Kartochka Ko&apos;rinishi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Tovar:</span>
                <span className="font-semibold text-right truncate max-w-[170px]">
                  {name || "Nomi kiritilmagan"}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Fix Price Polka:</span>
                <span className="font-bold text-primary">
                  {selectedShelf?.label}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-border/40">
                <span className="text-muted-foreground">Jami zaxira:</span>
                <span className="font-medium">{totalStock} dona</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-muted-foreground">Razmerlar soni:</span>
                <span className="font-medium">{SIZES.length} ta o&apos;lcham</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-primary text-primary-foreground font-medium shadow"
              >
                <PackagePlus className="w-4 h-4 mr-2" /> Tovarni saqlash
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
}

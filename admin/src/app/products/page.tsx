import { Product, columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { PackagePlus, Shirt } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tovarlar Ro'yxati | ALLMAX Fix Price Admin",
  description: "ALLMAX Fix Price do'koni tovarlar katalogi",
};

const getData = async (): Promise<Product[]> => {
  return [
    {
      id: 1,
      name: "ALLMAX Classic Polo Futbolka",
      shortDescription: "Erkaklar uchun 100% paxtali premium kundalik polo.",
      description: "ALLMAX Fix Price standart polkasidagi qulay va nafas oluvchi erkaklar polosi.",
      price: 99000,
      sizes: ["s", "m", "l", "xl", "xxl"],
      colors: ["gray", "purple", "green"],
      images: {
        gray: "/products/1g.png",
        purple: "/products/1p.png",
        green: "/products/1gr.png",
      },
    },
    {
      id: 2,
      name: "ALLMAX Qishki Issiq Tolovka",
      shortDescription: "Ichki qismi junli, sovuq kunlar uchun mo'ljallangan qulay tolovka.",
      description: "ALLMAX qishki kolleksiyasidan issiq va yumshoq tolovka.",
      price: 149000,
      sizes: ["s", "m", "l", "xl"],
      colors: ["gray", "green"],
      images: { gray: "/products/2g.png", green: "/products/2gr.png" },
    },
    {
      id: 3,
      name: "ALLMAX Sportiv Hudi Pullover",
      shortDescription: "Erkaklar sportiv uslubidagi kapyushonli hudi.",
      description: "Sport va shahar hayoti uchun mukammal uslubdagi kapyushonli hudi.",
      price: 149000,
      sizes: ["s", "m", "l"],
      colors: ["green", "blue", "black"],
      images: {
        green: "/products/3gr.png",
        blue: "/products/3b.png",
        black: "/products/3bl.png",
      },
    },
    {
      id: 4,
      name: "ALLMAX Yozgi Paxtali Mayka",
      shortDescription: "Yengil va nafas oluvchi yozgi futbolka.",
      description: "Issiq ob-havo uchun hamyonbop va qulay paxtali mayka.",
      price: 49000,
      sizes: ["s", "m", "l"],
      colors: ["white", "pink"],
      images: { white: "/products/4w.png", pink: "/products/4p.png" },
    },
    {
      id: 5,
      name: "ALLMAX Demisezon Kurtka",
      shortDescription: "Suv o'tkazmaydigan premium shamolbardosh kurtka.",
      description: "Kuz va erta bahor mavsumi uchun zamonaviy dizayndagi himoyalovchi kurtka.",
      price: 199000,
      sizes: ["s", "m", "l", "xl"],
      colors: ["red", "orange", "black"],
      images: {
        red: "/products/5r.png",
        orange: "/products/5o.png",
        black: "/products/5bl.png",
      },
    },
    {
      id: 6,
      name: "ALLMAX Kundalik Krossovka",
      shortDescription: "Yengil taglikli, qulay shahar krossovkasi.",
      description: "Erkaklar uchun yurishda charchatmaydigan qulay sport poyabzali.",
      price: 149000,
      sizes: ["40", "42", "43", "44"],
      colors: ["gray", "white"],
      images: { gray: "/products/6g.png", white: "/products/6w.png" },
    },
    {
      id: 7,
      name: "ALLMAX Sportiv Yugurish Krossovkasi",
      shortDescription: "Amortizatsiyali engil sport poyabzali.",
      description: "Faol mashg'ulotlar va yugurish uchun maxsus ishlab chiqarilgan.",
      price: 199000,
      sizes: ["40", "42", "43"],
      colors: ["gray", "pink"],
      images: { gray: "/products/7g.png", pink: "/products/7p.png" },
    },
    {
      id: 8,
      name: "ALLMAX Klassik Djinsi Shim",
      shortDescription: "Mustahkam matoli qulay erkaklar djinsisi.",
      description: "Har kungi kiyish uchun pishiq va qulay bichimdagi klassik djinsi shim.",
      price: 99000,
      sizes: ["s", "m", "l", "xl"],
      colors: ["blue", "green"],
      images: { blue: "/products/8b.png", green: "/products/8gr.png" },
    },
  ];
};

export default async function ProductsPage() {
  const data = await getData();
  return (
    <div className="py-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2">
            <Shirt className="w-6 h-6 text-primary" /> Barcha Tovarlar Katalogi
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            ALLMAX Fix Price do&apos;konidagi faol mahsulotlar va polkalar
          </p>
        </div>
        <Button asChild className="bg-primary text-primary-foreground font-medium shadow-sm">
          <Link href="/admin/products/new">
            <PackagePlus className="w-4 h-4 mr-2" /> Yangi tovar qo&apos;shish
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

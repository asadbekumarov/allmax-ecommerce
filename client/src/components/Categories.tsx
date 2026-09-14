"use client";
import {
  Briefcase,
  Footprints,
  Glasses,
  Layers,
  Shirt,
  ShoppingBag,
  Tag,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "Barchasi",
    icon: <ShoppingBag className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "Futbolka & Polo",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Kurtka & Hudi",
    icon: <Layers className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Shim & Jinsi",
    icon: <Tag className="w-4 h-4" />,
    slug: "pants",
  },
  {
    name: "Krossovkalar",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Aksessuarlar",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Sumkalar",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
];

const Categories = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategory = searchParams.get("category") || "all";

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "all") {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
      {categories.map((category) => {
        const isActive =
          category.slug === selectedCategory ||
          (!selectedCategory && category.slug === "all");

        return (
          <button
            key={category.name}
            type="button"
            onClick={() => handleChange(category.slug)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold tracking-tight whitespace-nowrap transition-all cursor-pointer border ${
              isActive
                ? "bg-[#e30613] text-white border-[#e30613] shadow-[0_0_15px_rgba(227,6,19,0.45)] scale-102"
                : "bg-[#141414] text-zinc-300 border-[#262626] hover:border-[#e30613]/50 hover:bg-[#1a1a1a] hover:text-white"
            }`}
          >
            {category.icon}
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

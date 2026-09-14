import { products } from "@/data/products";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";
import { ArrowRight } from "lucide-react";

interface ProductListProps {
  category?: string;
  price?: string;
  sort?: string;
  params: "homepage" | "products";
}

const ProductList = ({ category, price, sort, params }: ProductListProps) => {
  // Filter by category
  let filtered = [...products];

  if (category && category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  // Filter by Fix Price
  if (price && price !== "all") {
    const targetPrice = Number(price);
    filtered = filtered.filter((p) => p.price === targetPrice);
  }

  // Sort
  if (sort === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "oldest") {
    filtered.sort((a, b) => Number(a.id) - Number(b.id));
  } else {
    // default newest
    filtered.sort((a, b) => Number(b.id) - Number(a.id));
  }

  return (
    <div className="w-full">
      <Categories />
      <Filter />

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 bg-[#141414] border border-[#262626] rounded-2xl my-8 text-center shadow-lg">
          <p className="text-white font-bold text-lg">
            Tanlangan parametrlar bo&apos;yicha mahsulotlar topilmadi
          </p>
          <p className="text-zinc-400 text-xs mt-1 max-w-sm">
            Iltimos, boshqa kiyim toifasi yoki narx polkasini tanlab ko&apos;ring.
          </p>
          <Link
            href="/products"
            className="mt-5 px-5 py-2.5 bg-[#e30613] hover:bg-[#bd0410] text-white text-xs font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(227,6,19,0.5)]"
          >
            Filtrlarni tozalash
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {params === "homepage" && (
        <div className="flex justify-end mt-10">
          <Link
            href={category ? `/products/?category=${category}` : "/products"}
            className="inline-flex items-center gap-2 font-bold text-sm text-zinc-300 hover:text-[#e30613] transition-colors py-2 px-4 rounded-lg bg-[#141414] border border-[#262626] hover:border-[#e30613]/50 shadow-sm"
          >
            Barcha tovarlar katalogini ko&apos;rish <ArrowRight className="w-4 h-4 text-[#e30613]" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductList;

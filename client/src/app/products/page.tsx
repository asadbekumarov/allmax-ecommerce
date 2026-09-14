import ProductList from "@/components/ProductList";
import { Sparkles } from "lucide-react";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; price?: string; sort?: string }>;
}) => {
  const { category, price, sort } = await searchParams;

  return (
    <div className="py-6">
      <div className="mb-6">
        <span className="text-[11px] font-black uppercase tracking-widest text-[#22c55e] flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> HAMYONBOP NARXLAR
        </span>
        <h1 className="text-2xl md:text-3xl font-black text-white mt-1">
          Barcha Mahsulotlar Katalogi
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          ALLMAX Fix Price — 49 000, 99 000, 149 000 va 199 000 so&apos;mlik erkaklar kiyimlari
        </p>
      </div>
      <ProductList
        category={category}
        price={price}
        sort={sort}
        params="products"
      />
    </div>
  );
};

export default ProductsPage;

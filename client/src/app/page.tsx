import HeroBanner from "@/components/HeroBanner";
import ShopByCategory from "@/components/ShopByCategory";
import ValueBar from "@/components/ValueBar";
import NewArrivals from "@/components/NewArrivals";
import ShopByOccasion from "@/components/ShopByOccasion";
import BestsellersRow from "@/components/BestsellersRow";
import BrandStoryBanner from "@/components/BrandStoryBanner";
import NewsletterBar from "@/components/NewsletterBar";

export default function HomePage() {
  return (
    <div className="w-full space-y-4">
      {/* 1. HERO BANNER ("New Season, New Expressions") */}
      <HeroBanner />

      {/* 2. SHOP BY CATEGORY (Aavira Circular Categories + Sale) */}
      <ShopByCategory />

      {/* 3. VALUE PROPOSITION BAR (4 Guarantees) */}
      <ValueBar />

      {/* 4. NEW ARRIVALS (Carousel with Badges & Wishlist) */}
      <NewArrivals />

      {/* 5. SHOP BY OCCASION (3 Cards) */}
      <ShopByOccasion />

      {/* 6. BESTSELLERS / FIX POLKA PRODUCTS ROW */}
      <BestsellersRow />

      {/* 7. BRAND STORY BANNER ("Crafted with love") */}
      <BrandStoryBanner />

      {/* 8. NEWSLETTER SUBSCRIBE BAR ("Join the ALLMAX Family") */}
      <NewsletterBar />
    </div>
  );
}

import AdvertisingSection from "@/components/home-sections/advertising-section";
import BannerSection from "@/components/home-sections/banner-section";
import ChoosingUsSection from "@/components/home-sections/choosing-us-section";
import FeatureProductSection from "@/components/home-sections/feature-product";
import SellerSection from "@/components/home-sections/seller-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <BannerSection />
      <SellerSection />
      <AdvertisingSection />
      <ChoosingUsSection />
      <FeatureProductSection />
    </div>
  );
}

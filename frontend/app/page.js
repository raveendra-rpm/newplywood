import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import ApplicationAreas from "@/components/sections/application-areas";
import AboutSection from "@/components/sections/about";
import ProductRangeSection from "@/components/sections/products";
import FeaturesGrid from "@/components/sections/features-grid";
import OfferBanner from "@/components/sections/offer-banner";
import GallerySection from "@/components/sections/gallery";
import StatsSection from "@/components/sections/stats";
import TestimonialsSection from "@/components/sections/testimonials";
import PartnerSection from "@/components/sections/partner";
import QuoteFormSection from "@/components/sections/quote-form";

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <HeroSection />
      <ApplicationAreas />
      <AboutSection />
      <FeaturesGrid />
      <OfferBanner />
      <ProductRangeSection />
      <GallerySection />
      <StatsSection />
      <TestimonialsSection />
      <PartnerSection />
      <QuoteFormSection />
      <Footer />
    </main>
  );
}

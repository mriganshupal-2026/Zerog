import { AboutComfort } from "@/components/AboutComfort";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CtaBanner } from "@/components/CtaBanner";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { LifestyleSection } from "@/components/LifestyleSection";
import { Navbar } from "@/components/Navbar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SocialProof } from "@/components/SocialProof";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#111827]">
      <Navbar />
      <HeroSection />
      <AboutComfort />
      <ServicesGrid />
      <FeaturesSection />
      <ProductShowcase />
      <BenefitsSection />
      <LifestyleSection />
      <TestimonialSection />
      <CtaBanner />
      <GallerySection />
      <SocialProof />
      <Footer />
    </main>
  );
}

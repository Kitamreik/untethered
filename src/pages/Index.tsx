import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import SlideshowSection from "@/components/sections/SlideshowSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import MapSection from "@/components/sections/MapSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SlideshowSection />
        <FrameworkSection />
        <ServicesSection />
        <CTASection />
        <MapSection />
      </main>
    </div>
  );
};

export default Index;

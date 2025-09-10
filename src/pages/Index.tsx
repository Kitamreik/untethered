import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import CoachSection from "@/components/sections/CoachSection";
import SlideshowSection from "@/components/sections/SlideshowSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import MapSection from "@/components/sections/MapSection";
import FormSection from "@/components/sections/FormSection";
import PackageBooking from "@/components/sections/PackageBooking";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header /> {/* Feature for later: have search bar search the page for all matches...? */}
      <main>
        <HeroSection />
        <CoachSection/>
        <SlideshowSection />
        <FrameworkSection />
        <CTASection />
        <FormSection/> {/* generate form */}
        <ServicesSection />
        <PackageBooking/>
        <MapSection />
      </main>
      <Footer/>
    </div>
  );
};

export default Index;

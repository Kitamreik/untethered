import React from "react";
import { Routes, Route } from "react-router-dom";
//Components
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import CoachSection from "@/components/sections/CoachSection";
import SlideshowSection from "@/components/sections/SlideshowSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import MapSection from "@/components/sections/MapSection";
import FormSection from "@/pages/FormSection";
import PackageBooking from "@/pages/PackageBooking";
import AdminDashboard from "@/pages/AdminDashboard";
import FormDashboard from "@/components/sections/FormDashboard";
import Footer from "@/components/layout/Footer";
import ConfirmationPage from "@/pages/ConfirmationPage";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header /> {/* Feature for later: have search bar search the page for all matches...? */}
      <main>
        {/* <HeroSection />
        <CoachSection/>
        <SlideshowSection />
        <FrameworkSection />
        <CTASection /> */}
        <FormSection/>
        {/* <ServicesSection /> */}
        <PackageBooking/> 
        <AdminDashboard/> 
        <FormDashboard/>
        {/* <ConfirmationPage/> */}
        {/* Booking flow with routing */}
        <Routes>
        <Route path="/intake" element={<FormSection />} />
          <Route path="/booking" element={<PackageBooking />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />      
        </Routes>
        {/* end */}
        {/* <MapSection /> */}
      </main>
      <Footer/>
    </div>
  );
};

export default Index;

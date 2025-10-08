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
import FormDashboard from "@/pages/FormDashboard";
import MVPAdminDashboard from "./MVPAdminDashboard";
import Footer from "@/components/layout/Footer";
import ConfirmationPage from "@/pages/ConfirmationPage";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header /> {/* Feature for later: have search bar search the page for all matches...? */}
      <main>
        <HeroSection />
        <CoachSection/>
        <SlideshowSection />
        <FrameworkSection />
        <CTASection />
        <FormSection/> 
        <ServicesSection /> 
        {/* <PackageBooking/>   */}
        {/* Stripe IP */}
        {/* <AdminDashboard/>  */}
        {/* won't render w/o stripe */}
        {/* <FormDashboard/>  */}
        {/* operational */}
        {/* <MVPAdminDashboard/>   */}
        {/* admin path, MVP skeleton */}
        <MapSection />  
      </main>
      <Footer/>
    </div>
  );
};

export default Index;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FormSection from "./pages/FormSection";
import FormDashboard from "./pages/FormDashboard";
import ConfirmationPage from "./pages/ConfirmationPage";
import PackageBooking from "./pages/PackageBooking";
import MVPAdminDashboard from "./pages/MVPAdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<MVPAdminDashboard />} />
          <Route path="/api/admin/bookings" element={<PackageBooking />} />
          <Route path="/form" element={<FormSection />} />
          <Route path="/confirmation" element={<ConfirmationPage/>} />
          <Route path="/api/admin/intakes" element={<FormDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

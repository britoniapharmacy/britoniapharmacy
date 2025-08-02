
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DrugDiscoveryProject from "./pages/DrugDiscoveryProject";
import SupplyChainProject from "./pages/SupplyChainProject";
import RegulatoryIntelligenceProject from "./pages/RegulatoryIntelligenceProject";
import PatientAdherenceProject from "./pages/PatientAdherenceProject";
import QualityIntelligenceProject from "./pages/QualityIntelligenceProject";
import MVPOverview from "./pages/MVPOverview";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import BlogPostDetail from "./pages/BlogPostDetail";
import ClientPortal from "./pages/ClientPortal";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects/drug-discovery" element={<DrugDiscoveryProject />} />
            <Route path="/projects/supply-chain" element={<SupplyChainProject />} />
            <Route path="/projects/regulatory-intelligence" element={<RegulatoryIntelligenceProject />} />
            <Route path="/projects/patient-adherence" element={<PatientAdherenceProject />} />
            <Route path="/projects/quality-intelligence" element={<QualityIntelligenceProject />} />
            <Route path="/tech-details" element={<TechDetails />} />
            <Route path="/development-process" element={<DevelopmentProcess />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route path="/mvp-overview" element={<MVPOverview />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

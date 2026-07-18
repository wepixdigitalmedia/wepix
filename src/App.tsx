import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Manifesto from "./pages/Manifesto";
import Contact from "./pages/Contact";
import People from "./pages/People";
import Abdul from "./pages/Abdul";
import Santhosh from "./pages/Santhosh";
import Vignesh from "./pages/Vignesh";
import Handbook from "./pages/Handbook";
import Careers from "./pages/Careers";
import Perennial from "./pages/Perennial";
import Blogs from "./pages/Blogs";
import Fashion from "./pages/fashion/Fashion";
import Kickstarter from "./pages/fashion/Kickstarter";
import WePixStudio from "./pages/fashion/WePixStudio";
import ShopifyService from "./pages/fashion/ShopifyService";
import CaseStudies from "./pages/fashion/CaseStudies";
import BookACall from "./pages/fashion/BookACall";
import Academy from "./pages/academy/Academy";
import DigitalStore from "./pages/academy/DigitalStore";
import MetaAdsCourse from "./pages/academy/MetaAdsCourse";
import Webinar from "./pages/academy/Webinar";
import Community from "./pages/academy/Community";
import KickstartCourse from "./pages/academy/KickstartCourse";
import Business from "./pages/business/Business";
import AIAgents from "./pages/business/AIAgents";
import Mentorship from "./pages/business/Mentorship";
import BusinessContact from "./pages/business/BusinessContact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookiePolicy from "./pages/CookiePolicy";
import Legal from "./pages/Legal";
import MyWorks from "./pages/MyWorks";
import WorkProjectDetail from "./pages/WorkProjectDetail";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/people" element={<People />} />
            <Route path="/abdul" element={<Abdul />} />
            <Route path="/santhosh" element={<Santhosh />} />
            <Route path="/vignesh" element={<Vignesh />} />
            <Route path="/handbook" element={<Handbook />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/digital-store" element={<Navigate to="/academy/digital-store" replace />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/perennial" element={<Perennial />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/my-works" element={<MyWorks />} />
            <Route path="/work" element={<Navigate to="/my-works" replace />} />
            <Route path="/work/:slug" element={<WorkProjectDetail />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/fashion/kickstarter" element={<Kickstarter />} />
            <Route path="/fashion/wepixstudio" element={<WePixStudio />} />
            <Route path="/fashion/case-studies" element={<CaseStudies />} />
            <Route path="/fashion/shopify" element={<ShopifyService />} />
            <Route path="/fashion/book" element={<BookACall />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/academy/digital-store" element={<DigitalStore />} />
            <Route path="/academy/meta-ads-course" element={<MetaAdsCourse />} />
            <Route path="/academy/kickstart-course" element={<KickstartCourse />} />
            <Route path="/academy/webinar" element={<Webinar />} />
            <Route path="/academy/community" element={<Community />} />
            <Route path="/business" element={<Business />} />
            <Route path="/business/ai-agents" element={<AIAgents />} />
            <Route path="/business/mentorship" element={<Mentorship />} />
            <Route path="/business/contact" element={<BusinessContact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie" element={<CookiePolicy />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;


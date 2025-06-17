
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Updates from "./pages/Updates";
import Achievers from "./pages/Achievers";
import About from "./pages/About";
import SubmitResources from "./pages/SubmitResources";
import NotFound from "./pages/NotFound";
import CB78 from "./pages/CB78";
import LeadershipPlan from "./pages/LeadershipPlan";
import Careers from "./pages/Careers";
import UNCIF from "./pages/UNCIF";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/achievers" element={<Achievers />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit-resources" element={<SubmitResources />} />
          <Route path="/cb-78" element={<CB78 />} />
          <Route path="/leadership-plan" element={<LeadershipPlan />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/uncif" element={<UNCIF />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

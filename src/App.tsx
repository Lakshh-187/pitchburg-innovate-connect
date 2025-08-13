
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
import Documentation from "./pages/Documentation";
import WeizmannPortal from "./pages/WeizmannPortal";
import Store from "./pages/Store";
import AdminPanel from "./pages/AdminPanel";
import Manage from "./pages/Manage";
import MentorMe from "./pages/MentorMe";
import EditingPrompts from "./pages/EditingPrompts";
import Opportunities from "./pages/Opportunities";

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
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/weizmann-portal" element={<WeizmannPortal />} />
          <Route path="/store" element={<Store />} />
          <Route path="/admin" element={<AdminPanel />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/mentor-me" element={<MentorMe />} />
        <Route path="/editing-prompts" element={<EditingPrompts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;


import { Toaster } from "@/components/ui/toaster";
import { MycelialBackground } from "./components/MycelialBackground";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import RichCulture from "./pages/RichCulture";
import OpenSystems from "./pages/OpenSystems";
import JoinUs from "./pages/JoinUs";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col relative">
          <MycelialBackground 
            color="#4a9eff"
            density={1.0}
            animationSpeed={0.5}
            glowIntensity={0.55}
          />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/rich-culture" element={<RichCulture />} />
              <Route path="/open-systems" element={<OpenSystems />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

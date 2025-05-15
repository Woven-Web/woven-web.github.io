
import { Toaster } from "@/components/ui/toaster";
import { MycelialBackground } from "./components/MycelialBackground";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Principles from "./pages/Principles";
import Projects from "./pages/Projects";
import Partnerships from "./pages/Partnerships";
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
              <Route path="/principles" element={<Principles />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/about" element={<About />} />
              <Route path="/map" element={<MapRedirect />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Create a component that will handle the map redirect more gracefully
const MapRedirect = () => {
  React.useEffect(() => {
    // Open the PDF in a new tab
    window.open('/map.pdf', '_blank');
  }, []);
  
  return (
    <div className="flex items-center justify-center min-h-[60vh] p-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Opening Map...</h1>
        <p className="mb-4">If the map doesn't open automatically, please click the button below:</p>
        <a 
          href="/map.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-natural-leaf text-white rounded hover:bg-natural-sage transition-colors"
        >
          Open Map
        </a>
      </div>
    </div>
  );
};

export default App;

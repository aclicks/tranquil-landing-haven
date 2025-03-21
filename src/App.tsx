
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Psiquiatria from "./pages/Psiquiatria";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Add a useEffect to detect and remove Lovable badge if it appears
  useEffect(() => {
    // Function to remove Lovable badge if it appears
    const removeLovableBadge = () => {
      const badges = document.querySelectorAll('div[id^="lovable-"]');
      badges.forEach(badge => {
        badge.remove();
      });
      
      // Also remove any badge-related styles
      const lovableStyles = document.querySelectorAll('style[data-lovable]');
      lovableStyles.forEach(style => {
        style.remove();
      });
    };

    // Run immediately
    removeLovableBadge();
    
    // Set up an observer to detect if the badge is added dynamically
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        removeLovableBadge();
      });
    });
    
    observer.observe(document.body, { 
      childList: true,
      subtree: true 
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/psiquiatria" element={<Psiquiatria />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

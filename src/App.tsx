import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Course from "./pages/Course.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const resetScroll = () => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }

  window.scrollTo({ top: 0, left: 0 });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    resetScroll();
  }, [pathname]);

  useEffect(() => {
    resetScroll();
    window.addEventListener("load", resetScroll);

    return () => {
      window.removeEventListener("load", resetScroll);
    };
  }, []);

  return null;
};

const AppContent = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/course" element={<Course />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </TooltipProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;

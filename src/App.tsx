
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import QuemSomos from "./pages/QuemSomos";
import ProgressoObras from "./pages/ProgressoObras";
import Downloads from "./pages/Downloads";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import FaleConosco from "./pages/FaleConosco";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/progresso-obras" element={<ProgressoObras />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

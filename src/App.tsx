import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlbumSidebar } from "@/components/album/AlbumSidebar";
import Index from "./pages/Index";
import Games from "./pages/Games";
import Collection from "./pages/Collection";
import Achievements from "./pages/Achievements";
import Friends from "./pages/Friends";
import Tutorial from "./pages/Tutorial";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => (
  <div className="flex min-h-screen w-full">
    <AlbumSidebar />
    <main className="flex-1">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/games" element={<Games />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

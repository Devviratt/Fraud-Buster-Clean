import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DemoProvider } from "@/lib/demo-context";
import { LiveTransactionStoreProvider, ReviewedTransactionStoreProvider } from "@/lib/transaction-store";
import Index from "./pages/Index";
import Simulate from "./pages/Simulate";
import Landing from "./pages/Landing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DemoProvider>
        <LiveTransactionStoreProvider>
          <ReviewedTransactionStoreProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter basename={import.meta.env.BASE_URL}>
              <Routes>
                <Route index element={<Index />} />
                <Route path="simulate" element={<Simulate />} />
                <Route path="landing" element={<Landing />} />
                <Route path="*" element={<Navigate to="/landing" replace />} />
              </Routes>
            </BrowserRouter>
          </ReviewedTransactionStoreProvider>
        </LiveTransactionStoreProvider>
      </DemoProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

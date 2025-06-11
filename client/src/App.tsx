import { Switch, Route } from "wouter";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function Router() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <Navigation />
      <AnimatePresence mode="wait">
        <Switch>
          <Route path="/" component={() => <PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" component={() => <PageWrapper><About /></PageWrapper>} />
          <Route path="/skills" component={() => <PageWrapper><Skills /></PageWrapper>} />
          <Route path="/projects" component={() => <PageWrapper><Projects /></PageWrapper>} />
          <Route path="/contact" component={() => <PageWrapper><Contact /></PageWrapper>} />
          <Route component={() => <PageWrapper><NotFound /></PageWrapper>} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

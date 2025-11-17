import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" 
          : "bg-black/20 backdrop-blur-md border-b border-white/5"
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <motion.div 
                className="text-2xl font-poppins font-bold cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  PhantomsByte
                </span>
              </motion.div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    className={`relative px-5 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                      isActive(item.path) 
                        ? "text-white" 
                        : "text-white/70 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-xl border border-purple-500/50"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button 
              className="md:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
          
          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                <div className="flex flex-col gap-2 py-4 border-t border-white/10">
                  {navItems.map((item, index) => (
                    <Link key={item.path} href={item.path}>
                      <motion.div
                        className={`px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-300 ${
                          isActive(item.path) 
                            ? "bg-gradient-to-r from-purple-600/30 to-cyan-600/30 text-white border border-purple-500/50" 
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}

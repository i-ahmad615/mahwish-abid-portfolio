import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentView?: 'portfolio' | 'contact';
  setView?: (v: 'portfolio' | 'contact') => void;
}

export default function Navbar({ currentView = 'portfolio', setView }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === "contact") {
      if (setView) setView("contact");
      return;
    }

    if (currentView !== "portfolio" && setView) {
      setView("portfolio");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (setView) {
      setView("portfolio");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Work", id: "work" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-300 flex items-center justify-between px-6 md:px-12 lg:px-24 ${
          scrolled
            ? "bg-[#0f1115]/90 backdrop-blur-md border-b border-white/5 shadow-lg h-20"
            : "bg-transparent"
        }`}
        id="app-navbar"
      >
        {/* Logo */}
        <div 
          onClick={scrollToTop}
          className="cursor-pointer font-display text-2xl font-bold tracking-tighter text-white flex items-center group"
          id="navbar-logo"
        >
          <span className="relative overflow-hidden inline-block">
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">
              MAHWISH
            </span>
            <span className="absolute top-0 left-0 block transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-white">
              MAHWISH
            </span>
          </span>
          <span className="text-[#00df8f] text-3xl leading-none ml-0.5 group-hover:animate-ping absolute right-[-12px] top-[14px] opacity-0 group-hover:opacity-100 duration-300">.</span>
          <span className="text-[#00df8f] text-3xl leading-none ml-0.5 group-hover:scale-150 transition-transform duration-300">.</span>
        </div>

        {/* Center-Right Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-10 ml-auto mr-10" id="navbar-links-desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs tracking-widest font-semibold text-gray-400 uppercase hover:text-[#00df8f] transition-colors duration-300 relative py-2 group cursor-pointer"
              id={`nav-link-${link.id}`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00df8f] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Action Button (Far Right) */}
        <div className="flex items-center gap-4" id="navbar-action-container">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="relative hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 hover:border-[#00df8f]/50 transition-colors duration-300 cursor-pointer group"
            id="navbar-action-btn"
          >
            <span className="w-3 h-3 rounded-full bg-[#00df8f] group-hover:scale-150 transition-transform duration-300 glow-green"></span>
            <span className="absolute -inset-0.5 rounded-full border border-[#00df8f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></span>
          </motion.button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white cursor-pointer hover:bg-white/5 transition-all"
            id="navbar-mobile-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-0 w-full bg-[#0f1115]/95 backdrop-blur-lg border-b border-white/10 z-40 px-6 py-8 flex flex-col gap-6 md:hidden"
            id="navbar-mobile-drawer"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg tracking-widest font-bold text-gray-200 uppercase hover:text-[#00df8f] transition-colors py-2 border-b border-white/5 cursor-pointer"
                id={`nav-link-mobile-${link.id}`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 flex items-center justify-between bg-white/5 hover:bg-[#00df8f]/10 text-[#00df8f] border border-[#00df8f]/20 font-semibold px-6 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
              id="nav-link-mobile-cta"
            >
              <span>Get in Touch</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#00df8f] glow-green"></span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

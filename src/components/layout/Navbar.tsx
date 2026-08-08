"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "CERTIFICATIONS", href: "#certifications" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "SECURITY LAB", href: "#security-lab" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#0a0e14]/85 backdrop-blur-md border-b border-white/[0.09] shadow-lg shadow-black/50"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-1.5 rounded bg-[#39FF88]/10 border border-[#39FF88]/30 group-hover:border-[#39FF88] transition-colors">
            <Shield size={18} className="text-[#39FF88]" />
          </div>
          <span className="text-base font-mono font-bold tracking-wider text-white">
            GPR<span className="text-[#39FF88]">.SEC_OPS</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono font-semibold tracking-wider text-gray-300 hover:text-[#39FF88] transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#39FF88] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Green Pill CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-[#39FF88] text-[#0a0e14] font-mono text-xs font-bold tracking-wider hover:scale-105 hover:shadow-[0_0_20px_rgba(57,255,136,0.5)] transition-all flex items-center gap-1.5"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 rounded border border-white/10 text-gray-300 hover:text-[#39FF88] hover:border-[#39FF88]/40 transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[101] bg-[#0a0e14]/95 backdrop-blur-xl flex flex-col justify-between p-8"
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-mono font-bold tracking-wider text-white">
                GPR<span className="text-[#39FF88]">.NAV</span>
              </span>
              <button
                className="p-2 rounded border border-white/10 text-gray-300 hover:text-[#39FF88]"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="flex flex-col gap-5 my-auto">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-mono font-bold text-gray-200 hover:text-[#39FF88] tracking-wider transition-colors"
                >
                  &gt; {link.name}
                </motion.a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-full bg-[#39FF88] text-[#0a0e14] font-mono text-sm font-bold tracking-wider"
            >
              INITIALIZE CONTACT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

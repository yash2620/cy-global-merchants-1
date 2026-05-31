"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Export Markets", href: "/markets" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Real Estate Advisory", href: "/real-estate" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-primary-black/85 backdrop-blur-md py-4 border-b border-luxury-gold/15"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex flex-col focus:outline-none">
            <span className="font-serif text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-premium-white group-hover:text-luxury-gold transition-colors duration-300">
              CY Global
            </span>
            <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.35em] text-luxury-gold group-hover:text-premium-white transition-colors duration-300 -mt-1">
              Merchants
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-sans text-xs uppercase tracking-widest transition-colors duration-300 relative py-1 focus:outline-none ${
                    isActive
                      ? "text-luxury-gold"
                      : "text-premium-white/70 hover:text-luxury-gold"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <Button
                variant="outline"
                size="sm"
                iconRight={<ArrowUpRight size={13} />}
              >
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-premium-white hover:text-luxury-gold focus:outline-none p-1 transition-colors duration-300"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-primary-black/98 backdrop-blur-lg lg:hidden flex flex-col justify-center pt-24 pb-8 px-8"
          >
            <div className="flex flex-col space-y-6 items-center">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-sans text-base uppercase tracking-[0.2em] transition-colors duration-300 focus:outline-none ${
                      isActive ? "text-luxury-gold font-semibold" : "text-premium-white/80 hover:text-luxury-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              <div className="pt-6 w-full max-w-[240px]">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button
                    variant="gold"
                    size="md"
                    className="w-full"
                    iconRight={<ArrowUpRight size={14} />}
                  >
                    Request Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

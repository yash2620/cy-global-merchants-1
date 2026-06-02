"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Instagram, PhoneCall, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-black border-t border-luxury-gold/10 text-premium-white/80 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Company Info */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="group flex flex-col focus:outline-none w-max">
            <span className="font-serif text-xl font-bold uppercase tracking-[0.2em] text-premium-white group-hover:text-luxury-gold transition-colors duration-300">
              CY Global
            </span>
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.35em] text-luxury-gold group-hover:text-premium-white transition-colors duration-300 -mt-1">
              Merchants
            </span>
          </Link>
          <p className="font-sans text-xs tracking-wider leading-relaxed text-premium-white/60">
            Indian Sustainable & Wellness Lifestyle Exporter. Sourcing and delivering Pune&apos;s finest sustainable assets and Indian heritage commodities to global trading tables.
          </p>
          <div className="flex space-x-3 pt-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-none border border-white/10 hover:border-luxury-gold flex items-center justify-center text-premium-white/60 hover:text-luxury-gold bg-white/5 transition-all duration-300"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-none border border-white/10 hover:border-luxury-gold flex items-center justify-center text-premium-white/60 hover:text-luxury-gold bg-white/5 transition-all duration-300"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://wa.me/917498025464"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-none border border-white/10 hover:border-luxury-gold flex items-center justify-center text-premium-white/60 hover:text-luxury-gold bg-white/5 transition-all duration-300"
            >
              <PhoneCall size={14} />
            </a>
          </div>
        </div>

        {/* Product Verticals */}
        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-luxury-gold mb-6">
            Product Verticals
          </h4>
          <ul className="space-y-3 font-sans text-xs tracking-widest uppercase">
            <li>
              <Link href="/products" className="hover:text-luxury-gold text-premium-white/60 transition-colors duration-300 flex items-center">
                Incense Sticks (Agarbatti)
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-luxury-gold text-premium-white/60 transition-colors duration-300 flex items-center">
                Brass Handicrafts
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-luxury-gold text-premium-white/60 transition-colors duration-300 flex items-center">
                Yoga Products
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-luxury-gold text-premium-white/60 transition-colors duration-300 flex items-center">
                Cotton Tote Bags
              </Link>
            </li>
          </ul>
        </div>

        {/* Sourcing Solutions */}
        <div>
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-luxury-gold mb-6">
            Sourcing & Advisory
          </h4>
          <ul className="space-y-3 font-sans text-xs tracking-widest uppercase">
            <li>
              <span className="text-premium-white/50 block">Export Solutions</span>
            </li>
            <li>
              <span className="text-premium-white/50 block">Buyer Search Assistance</span>
            </li>
            <li>
              <span className="text-premium-white/50 block">Export Documentation</span>
            </li>
            <li>
              <span className="text-premium-white/50 block">Market Sourcing Research</span>
            </li>
            <li>
              <Link href="/real-estate" className="hover:text-luxury-gold text-premium-white/60 transition-colors duration-300 flex items-center">
                Real Estate Advisory <ArrowUpRight size={11} className="ml-1" />
              </Link>
            </li>
          </ul>
        </div>

        {/* HQ Contact */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-luxury-gold mb-2">
            Global Headquarters
          </h4>
          <div className="flex items-start space-x-3 text-xs leading-relaxed font-sans text-premium-white/60">
            <MapPin size={16} className="text-luxury-gold shrink-0 mt-0.5" />
            <span>
              Bhakti Darshan, Near Kokate Hospital,<br />
              Pimple Gurav, Pune – 411061,<br />
              Maharashtra, India
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs font-sans text-premium-white/60">
            <Mail size={14} className="text-luxury-gold shrink-0" />
            <a href="mailto:info@cyglobalmerchants.com" className="hover:text-luxury-gold transition-colors duration-300">
              info@cyglobalmerchants.com
            </a>
          </div>
          <div className="flex items-center space-x-3 text-xs font-sans text-premium-white/60">
            <PhoneCall size={14} className="text-luxury-gold shrink-0" />
            <a href="tel:+917498025464" className="hover:text-luxury-gold transition-colors duration-300">
              +91 7498025464
            </a>
          </div>
        </div>
      </div>

      {/* Certifications & Memberships Row */}
      <div className="max-w-7xl mx-auto pt-8 pb-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start space-y-1">
          <span className="font-serif text-[10px] font-bold uppercase tracking-[0.2em] text-luxury-gold">
            Accredited Member & Registered Exporter
          </span>
          <span className="font-sans text-[9px] text-premium-white/40 uppercase tracking-widest">
            Government of India Recognized Export & Enterprise Certifications
          </span>
        </div>
          <div className="flex items-center space-x-6 md:space-x-8">
            <div className="h-10 flex items-center justify-center">
              <img src="/images/fieo.png" alt="FIEO Member" className="max-h-full w-auto object-contain max-w-[65px]" />
            </div>
            <div className="h-10 flex items-center justify-center">
              <img src="/images/msme.jpg" alt="MSME Certified" className="max-h-full w-auto object-contain max-w-[65px]" />
            </div>
            <div className="h-10 flex items-center justify-center">
              <img src="/images/sepc.png" alt="SEPC Registered" className="max-h-full w-auto object-contain max-w-[65px]" />
            </div>
            <div className="h-10 flex items-center justify-center">
              <img src="/images/GST logo.webp" alt="GST Compliant" className="max-h-full w-auto object-contain max-w-[65px]" />
            </div>
          </div>
      </div>

      {/* Base Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs tracking-wider text-premium-white/40">
        <p className="font-sans mb-4 md:mb-0">
          &copy; {currentYear} CY Global Merchants. All Rights Reserved. Sourcing sustainability, ethically verified.
        </p>
        <div className="flex space-x-6 font-sans">
          <Link href="/contact" className="hover:text-luxury-gold transition-colors duration-300">Terms of Trade</Link>
          <Link href="/contact" className="hover:text-luxury-gold transition-colors duration-300">Privacy Charter</Link>
          <Link href="/contact" className="hover:text-luxury-gold transition-colors duration-300">Compliance</Link>
        </div>
      </div>
    </footer>
  );
}

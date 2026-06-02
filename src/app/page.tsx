"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  FileCheck,
  CheckCircle,
  Download,
  Building2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import Badge from "@/components/ui/Badge";
import InquiryForm from "@/components/ui/InquiryForm";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Home() {
  const handleScrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("quotation-desk");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-primary-black min-h-screen text-premium-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden border-b border-white/5">
        {/* Subtle Animated Gold Mesh Background & Grid lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/20 rounded-full blur-[100px] animate-pulse duration-10000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-dark/30 rounded-full blur-[120px] animate-pulse duration-8000"></div>
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(12,90,62,0.08) 1px, transparent 0)", 
              backgroundSize: "40px 40px" 
            }}
          ></div>
        </div>

        {/* Global Sourcing Vector Map Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <svg className="w-full h-full max-w-7xl" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
            {/* Simple B2B Sourcing map with paths connecting Pune (India) to global centers */}
            <rect width="1000" height="500" fill="none" />
            <path d="M150,150 L200,100 M200,100 L300,120 M300,120 L400,200 M400,200 L500,250 M500,250 L600,240 M600,240 L700,180" stroke="rgba(12,90,62,0.4)" strokeWidth="1" fill="none" strokeDasharray="5,5" />
            <path d="M500,250 L350,150 M500,250 L450,120 M500,250 L580,180 M500,250 L620,130" stroke="rgba(12,90,62,0.4)" strokeWidth="1" fill="none" strokeDasharray="5,5" />
            {/* Pune Point */}
            <circle cx="500" cy="250" r="6" fill="#0C5A3E" />
            <circle cx="500" cy="250" r="14" stroke="#0C5A3E" strokeWidth="1" fill="none" className="animate-ping" />
            {/* Global Target Nodes */}
            <circle cx="150" cy="150" r="3" fill="#0A0A0A" /> {/* USA */}
            <circle cx="350" cy="120" r="3" fill="#0A0A0A" /> {/* EU */}
            <circle cx="620" cy="130" r="3" fill="#0A0A0A" /> {/* UAE */}
            <circle cx="780" cy="350" r="3" fill="#0A0A0A" /> {/* AU */}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.1] max-w-5xl mb-6"
          >            Bridging India&apos;s Heritage <br />
            <span className="text-luxury-gold">With Global Commerce</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-base md:text-xl text-premium-white/70 max-w-3xl leading-relaxed tracking-wide mb-12"
          >
            Premium Indian Wellness, Handicraft and Sustainable Lifestyle Products Sourced Directly and Exported to Global Trading Desks Worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-none"
          >
            <a href="#quotation-desk" onClick={handleScrollToQuote} className="w-full sm:w-auto">
              <Button variant="gold" size="lg" className="w-full">
                Request Export Quote
              </Button>
            </a>
            
            {/* Dummy Catalogue Link */}
            <a 
              href="/products" 
              className="w-full sm:w-auto"
            >
              <Button variant="outline" size="lg" className="w-full" iconRight={<Download size={14} />}>
                Product Catalogue
              </Button>
            </a>
            
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="w-full">
                Contact Us
              </Button>
            </Link>
          </motion.div>

          {/* 2. STATS BAR */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl w-full mt-24 pt-12 border-t border-white/10"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <Counter value={25} suffix="+" />
              <span className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-premium-white/50 mt-2">
                Countries Served
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <Counter value={50} suffix="+" />
              <span className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-premium-white/50 mt-2">
                Premium Products
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <Counter value={15} suffix="+" />
              <span className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-premium-white/50 mt-2">
                Global Markets
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <Counter value={100} suffix="+" />
              <span className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-premium-white/50 mt-2">
                Buyer Network
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. TRUST & BADGES REGISTER */}
      <section className="bg-primary-black py-12 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-sans text-[10px] font-bold text-center uppercase tracking-[0.3em] text-luxury-gold mb-8">
            VERIFIED REGULATORY REGISTRATION & ACCREDITATIONS
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "IEC Registered", desc: "Import Export Code", logo: "/images/IEC logo.webp" },
              { title: "GST Compliant", desc: "Goods & Services Tax", logo: "/images/GST logo.webp" },
              { title: "MSME Certified", desc: "Govt of India", logo: "/images/msme.jpg" },
              { title: "AD Code Registered", desc: "Authorized Dealer", logo: "/images/GST logo.webp" },
              { title: "FIEO RCMC", desc: "Export Organisation", logo: "/images/fieo.png" },
              { title: "SEPC Registered", desc: "Services Export", logo: "/images/sepc.png" }
            ].map((badge, idx) => (
              <div 
                key={idx} 
                className="bg-subdued-gray/30 border border-white/5 hover:border-luxury-gold/30 p-4 text-center transition-all duration-300 group rounded-none flex flex-col items-center justify-between min-h-[140px]"
              >
                <div className="w-full flex-1 flex items-center justify-center mb-3">
                  {badge.logo ? (
                    <div className="h-10 flex items-center justify-center">
                      <img src={badge.logo} alt={badge.title} className="max-h-full max-w-[80px] object-contain" />
                    </div>
                  ) : (
                    <FileCheck size={18} className="text-luxury-gold mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </div>
                <div>
                  <h5 className="font-sans text-[11px] font-bold uppercase tracking-widest text-premium-white">
                    {badge.title}
                  </h5>
                  <p className="font-sans text-[9px] text-premium-white/40 uppercase mt-0.5 tracking-wider">
                    {badge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE COMPANY OVERVIEW */}
      <section className="py-24 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <Badge variant="outline" className="w-max">
            International Trading House
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight">
            Sourcing Ethical, <br />
            <span className="text-luxury-gold">Delivering Luxury Sourcing</span>
          </h2>
          <p className="font-sans text-sm md:text-base tracking-wide leading-relaxed text-premium-white/70">
            Based in the historical sourcing node of **Pune, India**, CY Global Merchants is an elite export-import house representing Indian heritage commodities. We curate premium, sustainable B2B assets—ranging from organic wellness accessories and aromatic products to artisan crafts—engineered specifically to attract international distributors, wholesalers, and commercial buyers.
          </p>
          <p className="font-sans text-sm tracking-wide leading-relaxed text-premium-white/60">
            We bypass complex merchant networks by establishing direct-to-farm and direct-to-factory integrations. This guarantees certified quality levels, stable volume margins, complete compliance parameters, and seamless transit handling.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-2 border-luxury-gold pl-4">
              <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-luxury-gold">Our Mission</h4>
              <p className="font-sans text-xs text-premium-white/60 leading-relaxed mt-1">
                To promote premium, ethically audited Indian products globally through structured supply chains.
              </p>
            </div>
            <div className="border-l-2 border-luxury-gold pl-4">
              <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-luxury-gold">Our Vision</h4>
              <p className="font-sans text-xs text-premium-white/60 leading-relaxed mt-1">
                To become the ultimate trusted merchant partner for global B2B sustainable wellness sourcing.
              </p>
            </div>
          </div>

          <div className="pt-6">
            <Link href="/about">
              <Button variant="outline" iconRight={<ArrowRight size={14} />}>
                Our Sourcing Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 5. PRODUCT PREVIEW DASHBOARD */}
      <section className="py-24 bg-subdued-gray/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
            <div className="max-w-2xl">
              <Badge variant="gold">Premium Portfolios</Badge>
              <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight mt-4">
                Export Verticals
              </h2>
              <p className="font-sans text-sm text-premium-white/60 leading-relaxed mt-2 uppercase tracking-wider">
                Explore handpicked Indian wellness, craft and sustainable commodities ready for distribution.
              </p>
            </div>
            <Link href="/products" className="mt-6 md:mt-0">
              <Button variant="outline" size="sm" iconRight={<ArrowRight size={13} />}>
                View Technical Specs
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "agarbatti",
                name: "Incense Sticks (Agarbatti)",
                image: "/images/Incense sticks photo.webp",
                hs: "33074100",
                desc: "High-grade natural aromatic extracts, hand-rolled with organic binding powders. Non-toxic slow burn.",
                moq: "500 Kg",
              },
              {
                id: "handicrafts",
                name: "Brass Decorative Handicrafts",
                image: "/images/Brass decorative handicrafts.webp",
                hs: "74199930",
                desc: "Luxury heavy-gauge decorative items, masterfully crafted by legacy Indian brassware metalsmiths.",
                moq: "100 Units",
              },
              {
                id: "yoga",
                name: "Yoga Sourcing Products",
                image: "/images/Yoga products.webp",
                hs: "95069190",
                desc: "Premium cork and organic cotton mats, blocks, and wellness straps. Fully biodegradable, non-slip coatings.",
                moq: "200 Sets",
              },
              {
                id: "tote-bags",
                name: "Cotton Tote Bags",
                image: "/images/Cotton tote bags.webp",
                hs: "420292",
                desc: "Eco-friendly, robust woven shopping accessories. Grade-A long-staple Indian cotton canvas. Customizable screenprinting.",
                moq: "1,000 Pcs",
              },
            ].map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="luxury-card p-6 flex flex-col justify-between h-[400px] relative overflow-hidden group"
              >
                <div className="relative w-full h-32 mb-4 overflow-hidden bg-subdued-gray/30 border border-white/5">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="gold" className="text-[9px]">HS CODE: {p.hs}</Badge>
                    <Globe size={16} className="text-luxury-gold/40 group-hover:text-luxury-gold transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-premium-white group-hover:text-luxury-gold transition-colors duration-300 mb-3">
                    {p.name}
                  </h3>
                  <p className="font-sans text-xs text-premium-white/60 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between text-[11px] mb-4">
                    <span className="font-sans uppercase tracking-wider text-premium-white/40">Minimum Order</span>
                    <span className="font-sans font-bold text-luxury-gold">{p.moq}</span>
                  </div>
                  
                  <a href="#quotation-desk" onClick={handleScrollToQuote} className="w-full">
                    <Button variant="secondary" size="sm" className="w-full text-[10px]">
                      Quick MOQ Enquiry
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US - THE TRUST SYSTEM */}
      {/* 7. REAL ESTATE ADVISORY (Secondary division, beautifully framed) */}
      <section className="py-24 bg-gradient-to-b from-primary-black to-emerald-dark/10 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-square bg-subdued-gray/50 border border-luxury-gold/15 p-8 flex flex-col justify-between gold-glow">
            <div className="flex items-center space-x-2">
              <Building2 size={20} className="text-luxury-gold" />
              <span className="font-sans text-[10px] font-bold text-luxury-gold tracking-[0.25em] uppercase">
                Premium Division / Secondary Service
              </span>
            </div>

            <div className="my-8">
              <h4 className="font-serif text-xl font-bold uppercase tracking-wider text-premium-white mb-4">
                Pune Real Estate Mandates
              </h4>
              <p className="font-sans text-xs text-premium-white/60 leading-relaxed mb-6">
                Pune&apos;s commercial and residential landscape represents some of India&apos;s highest yield investment potentials. Through our localized real estate desk, we coordinate builder project validation, legal reviews, and strategic physical site layouts.
              </p>

              <div className="space-y-3">
                {[
                  "High-Yield Residential Investment Portfolios",
                  "Commercial Office & Warehouse Sourcing",
                  "Builder Project Feasibility Reports",
                  "Site Visit Planning & Representation",
                  "Comprehensive Legal & Title Guidance",
                ].map((s, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-sans text-premium-white/70">
                    <CheckCircle size={12} className="text-luxury-gold shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#quotation-desk" onClick={handleScrollToQuote} className="w-full">
              <Button variant="outline" size="sm" className="w-full">
                Schedule Advisory Consultation
              </Button>
            </a>
          </div>

          <div className="order-1 lg:order-2 flex flex-col space-y-6">
            <Badge variant="gold">Capital Sourcing Advisory</Badge>
            <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Exclusive Real Estate <br />
              <span className="text-luxury-gold font-serif">Advisory Services</span>
            </h2>
            <p className="font-sans text-sm md:text-base tracking-wide leading-relaxed text-premium-white/70">
              Beyond core export sourcing, CY Global Merchants provides an elite, secondary transactional portal focused on high-yield real estate investments within the Pune Metropolitan Region. 
            </p>
            <p className="font-sans text-sm tracking-wide leading-relaxed text-premium-white/60">
              We leverage direct networks with Tier-1 infrastructure groups and institutional developers to match international B2B clients, overseas buyers, and premium traders with vetted residential projects, prime commercial layouts, and strategic warehousing assets.
            </p>
            <div className="pt-4">
              <Link href="/real-estate">
                <Button variant="gold" iconRight={<ArrowRight size={14} />}>
                  Explore Siting Advisory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DYNAMIC B2B QUOTATION FORM DESK */}
      <section id="quotation-desk" className="py-24 bg-primary-black border-t border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <Badge variant="gold">Procurement Desk</Badge>
            <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Request Sourcing <br />
              <span className="text-luxury-gold font-serif">Pro-Forma Quote</span>
            </h2>
            <p className="font-sans text-sm tracking-wide leading-relaxed text-premium-white/75">
              Submit your detailed product import specifications, target discharge port requirements, and scheduled delivery timetables.
            </p>
            <p className="font-sans text-xs tracking-wider leading-relaxed text-premium-white/50 uppercase">
              ✔️ Standard Turnaround: Within 12 Hours <br />
              ✔️ CIF / FOB Trade Terms Accommodated <br />
              ✔️ Customized Aromatic / Packaging Private Labels Supported
            </p>
            
            <div className="bg-subdued-gray/30 border border-white/5 p-6 rounded-none space-y-4">
              <h5 className="font-serif text-sm font-bold uppercase tracking-widest text-luxury-gold">
                Direct Trade Connect
              </h5>
              <p className="font-sans text-xs text-premium-white/60 leading-relaxed">
                If you have completed RFP / RFQ documentation files, you can email them directly to our trade desk:
              </p>
              <a 
                href="mailto:info@cyglobalmerchants.com" 
                className="font-sans text-xs font-semibold text-luxury-gold hover:underline block"
              >
                info@cyglobalmerchants.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}

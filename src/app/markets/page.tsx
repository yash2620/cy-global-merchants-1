"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Plane, Navigation, Activity, ArrowRight, ShieldCheck } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface Market {
  country: string;
  flag: string;
  code: string;
  overview: string;
  buyers: string[];
  potential: number; // score out of 100
  keyPillar: string;
}

const marketsData: Market[] = [
  {
    country: "United States",
    flag: "🇺🇸",
    code: "USA",
    overview: "Substantial, high-converting B2B market prioritizing organic eco-accessories (Tote Bags, Yoga props) and premium wellness incense. Driven by clean label compliance and organic material clearances.",
    buyers: ["Organic Supermarket Chains", "Private Label Eco Brands", "Premium Wellness Wholesalers"],
    potential: 98,
    keyPillar: "Sustainable Packaging & Mats",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    code: "GBR",
    overview: "Rigorous standards for ethical supply chains. Significant demand for sustainable alternative shopping bags (Cotton Totes) and certified incense sticks.",
    buyers: ["High-End Retail Wholesalers", "Corporate Event Procurement", "Boutique Giftware Retailers"],
    potential: 94,
    keyPillar: "Organic Canvas Totes",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    code: "DEU",
    overview: "Europe's largest sustainable hub. Extremely strict chemical audits for incense burning, preferring non-toxic bamboo cores and organic cork yoga items.",
    buyers: ["B2B Wellness Importers", "Eco Fitness Cooperatives", "Department Store Sourcing Desks"],
    potential: 96,
    keyPillar: "Non-Toxic Wellness Gear",
  },
  {
    country: "France",
    flag: "🇫🇷",
    code: "FRA",
    overview: "Deep aesthetic and luxury focus. Prefers antique smelted brassware decoratives and artistic aroma sticks designed for hospitality ambiance.",
    buyers: ["Luxury Interior Design Firms", "Hotel Group Procurement Chairs", "Premium Boutique Distributors"],
    potential: 91,
    keyPillar: "High-End Brass Metalsmithing",
  },
  {
    country: "Spain",
    flag: "🇪🇸",
    code: "ESP",
    overview: "Strong seasonal demand for retail canvas items and ecological wellness accessories. Flexible logistics hubs connect Spain to North Africa trade lanes.",
    buyers: ["Wholesale Souvenir Networks", "Mediterranean Resort Sourcing", "Organic Stores Co-Ops"],
    potential: 88,
    keyPillar: "Bulk Canvas Bag Batches",
  },
  {
    country: "Netherlands",
    flag: "🇳🇱",
    code: "NLD",
    overview: "Rotterdam serves as the primary cargo gate for EU customs operations. High demand for eco packaging (totes) and fully certified phytosanitary yoga accessories.",
    buyers: ["Pan-European Cargo Wholesalers", "Logistical Sourcing Platforms", "Sustainable Chain Buyers"],
    potential: 95,
    keyPillar: "EU Consolidation Sourcing",
  },
  {
    country: "United Arab Emirates",
    flag: "🇦🇪",
    code: "ARE",
    overview: "Executive corporate trading hub. Premium scale demand for high-end cast brassware, premium aroma packs, and corporate siting consultations.",
    buyers: ["Luxury Hospitality Sourcing Desks", "B2B Commodity Traders", "Sovereign Siting Groups"],
    potential: 97,
    keyPillar: "Luxurious Cast Metalwork",
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    code: "SAU",
    overview: "Growing luxury hospitality market under Vision 2030. Exceptional appetite for heavy architectural brass castings and wellness/ambience assets.",
    buyers: ["Giga-Project Sourcing Divisions", "Fine Hospitality Distributors", "Premium Decor Showrooms"],
    potential: 93,
    keyPillar: "High-Value Custom Castings",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    code: "AUS",
    overview: "Ecological lifestyle focus. Strong compliance restrictions. Highly lucrative for organic-certified cork mats, unbleached cotton totes, and pesticide-free incense.",
    buyers: ["Sustainable Fitness Chains", "Specialty Wellness Distributors", "Eco-Packaging Importers"],
    potential: 92,
    keyPillar: "Organic Certified Goods",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    code: "CAN",
    overview: "High demand for clean-manufactured wellness merchandise. Strict consumer safety standards require certified ingredients for incense and ethical raw materials.",
    buyers: ["National Eco-Store Wholesalers", "Premium Yoga Cooperatives", "Ethical Corporate Buyers"],
    potential: 90,
    keyPillar: "Eco-Compliance Products",
  },
  {
    country: "Singapore",
    flag: "🇸🇬",
    code: "SGP",
    overview: "Asia's primary luxury transit node. High-density consumer demand for wellness accessories, high-grade incense sticks, and B2B sitemap connections to SE Asia.",
    buyers: ["Regional Trade Hubs", "Premium Lifestyle Showrooms", "High-End Corporate Gifting Desk"],
    potential: 95,
    keyPillar: "Regional Cargo Distribution",
  },
];

export default function ExportMarkets() {
  const [selectedMarket, setSelectedMarket] = useState<Market>(marketsData[0]);

  return (
    <div className="bg-primary-black py-16 text-premium-white min-h-screen">
      {/* Header Banner */}
      <section className="relative overflow-hidden py-20 border-b border-white/5 bg-gradient-to-b from-subdued-gray/30 to-transparent mb-12">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-luxury-gold/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Badge variant="gold" className="mb-4">
            B2B LOGISTICS PORTAL
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Export Markets
          </h1>
          <p className="font-sans text-base md:text-xl text-premium-white/60 max-w-3xl mx-auto leading-relaxed">
            Our global B2B delivery map. Tracing maritime and aerial supply routes from Pune, India to world procurement clusters.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Interactive Map Visual Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-subdued-gray/40 border border-luxury-gold/15 p-6 rounded-none relative gold-glow">
            <h3 className="font-serif text-lg font-bold text-luxury-gold uppercase tracking-wider mb-4 flex items-center">
              <Globe className="mr-2 animate-spin-slow text-luxury-gold" size={18} />
              Route Visualizer
            </h3>

            {/* Simulated Route Terminal Interface */}
            <div className="bg-primary-black border border-white/5 p-4 font-mono text-[10px] space-y-2 text-premium-white/70">
              <p className="text-luxury-gold">*** B2B ROUTE INITIATING ***</p>
              <p>Origin Hub: Pune Logistics Nexus, Maharashtra</p>
              <p>Dispatch Port: Nhava Sheva Terminal (JNPT, Mumbai)</p>
              <p className="flex justify-between">
                <span>Selected Destination:</span>
                <span className="text-luxury-gold font-bold">{selectedMarket.country} ({selectedMarket.code})</span>
              </p>
              <p className="flex justify-between">
                <span>Shipping Modality:</span>
                <span>Sea Freight (FCL / LCL) / Air Cargo</span>
              </p>
              <p className="flex justify-between border-t border-white/5 pt-2 mt-2">
                <span>Import Potential:</span>
                <span className="text-green-500 font-bold">{selectedMarket.potential}/100 Rating</span>
              </p>
              <p className="flex justify-between">
                <span>Core Demand:</span>
                <span className="text-luxury-gold font-bold">{selectedMarket.keyPillar}</span>
              </p>
            </div>

            {/* Simple Animated route diagram */}
            <div className="relative h-48 border border-white/5 mt-6 bg-primary-black/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(12,90,62,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(12,90,62,0.2) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
              
              {/* Animated line */}
              <svg className="w-full h-full p-4" viewBox="0 0 200 100">
                <circle cx="40" cy="80" r="4" fill="#0C5A3E" />
                <text x="40" y="93" fill="rgba(10,10,10,0.4)" fontSize="6" textAnchor="middle" fontFamily="sans-serif">PUNE (IN)</text>
                
                <circle cx="160" cy="30" r="4" fill="#0A0A0A" />
                <text x="160" y="18" fill="#0C5A3E" fontSize="6" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold">{selectedMarket.code}</text>
                
                {/* Dotted path */}
                <path d="M40,80 Q90,30 160,30" fill="none" stroke="rgba(12,90,62,0.3)" strokeWidth="1" strokeDasharray="3,3" />
                
                {/* Solid animation path */}
                <motion.path
                  d="M40,80 Q90,30 160,30"
                  fill="none"
                  stroke="#0C5A3E"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                />
              </svg>
              
              <div className="absolute top-2 right-2 flex items-center space-x-1.5 text-[8px] tracking-widest text-premium-white/30 uppercase font-sans">
                <Activity size={10} className="text-green-500 animate-pulse" />
                <span>Active Track</span>
              </div>
            </div>
          </div>

          <div className="bg-subdued-gray/30 border border-white/5 p-6 rounded-none space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-premium-white">
              B2B Transit Specifications
            </h4>
            <div className="space-y-3 font-sans text-xs text-premium-white/60">
              <div className="flex items-start">
                <ShieldCheck size={14} className="text-luxury-gold shrink-0 mt-0.5 mr-2" />
                <span>Standard Incoterms: CIF, FOB, CFR, Ex-Works Pune.</span>
              </div>
              <div className="flex items-start">
                <ShieldCheck size={14} className="text-luxury-gold shrink-0 mt-0.5 mr-2" />
                <span>Origin clearances and shipping bills filed at JNPT Port (Mumbai).</span>
              </div>
              <div className="flex items-start">
                <ShieldCheck size={14} className="text-luxury-gold shrink-0 mt-0.5 mr-2" />
                <span>Full packaging compliant with FSC and phyto regulations.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Country Details and Countries Selection Grid */}
        <div className="lg:col-span-7 space-y-8">
          {/* Selected details */}
          <div className="bg-subdued-gray/50 border border-luxury-gold/15 p-8 gold-glow relative min-h-[320px] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{selectedMarket.flag}</span>
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider text-premium-white">
                      {selectedMarket.country}
                    </h2>
                    <span className="font-sans text-[10px] text-premium-white/40 uppercase tracking-widest block">
                      Target B2B Sourcing Region
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-luxury-gold">{selectedMarket.potential}%</span>
                  <span className="font-sans text-[8px] text-premium-white/40 uppercase tracking-widest block mt-0.5">
                    Sourcing Potential
                  </span>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-xs font-semibold text-luxury-gold uppercase tracking-wider mb-2">
                  Market Overview & Sourcing Demand
                </h4>
                <p className="font-sans text-xs md:text-sm text-premium-white/70 leading-relaxed">
                  {selectedMarket.overview}
                </p>
              </div>

              <div>
                <h4 className="font-serif text-xs font-semibold text-luxury-gold uppercase tracking-wider mb-3">
                  Target B2B Buyer Categories
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMarket.buyers.map((b, i) => (
                    <span
                      key={i}
                      className="bg-white/5 border border-white/10 px-3 py-1.5 text-[10px] tracking-wider uppercase font-sans text-premium-white/80"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-left">
                <span className="font-sans text-[8px] uppercase tracking-wider text-premium-white/40">Primary Cargo Asset Focus</span>
                <span className="font-sans text-xs font-bold text-luxury-gold block mt-0.5">{selectedMarket.keyPillar}</span>
              </div>
              <a href="/contact">
                <Button variant="gold" size="sm" iconRight={<ArrowRight size={13} />}>
                  Discuss {selectedMarket.country} Sourcing
                </Button>
              </a>
            </div>
          </div>

          {/* Grid Selection list */}
          <div>
            <h4 className="font-serif text-xs font-bold text-luxury-gold uppercase tracking-widest mb-4">
              Select Market Directory
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {marketsData.map((market) => (
                <button
                  key={market.code}
                  onClick={() => setSelectedMarket(market)}
                  className={`p-3 text-left border transition-all duration-300 rounded-none cursor-pointer flex items-center justify-between group ${
                    selectedMarket.code === market.code
                      ? "border-luxury-gold bg-luxury-gold/5"
                      : "border-white/5 bg-subdued-gray/20 hover:border-white/30 hover:bg-subdued-gray/30"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{market.flag}</span>
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider text-premium-white group-hover:text-luxury-gold transition-colors duration-300">
                      {market.code}
                    </span>
                  </div>
                  <span className="font-sans text-[9px] text-premium-white/40 uppercase group-hover:text-premium-white transition-colors duration-300">
                    {market.potential}%
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

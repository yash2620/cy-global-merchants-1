"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building, Building2, ShieldAlert, Landmark, FileCheck, CheckCircle2, TrendingUp, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/ui/InquiryForm";

export default function RealEstate() {
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("advisory-desk");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-primary-black py-16 text-premium-white min-h-screen">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-24 border-b border-white/5 bg-gradient-to-b from-subdued-gray/30 to-transparent">
        {/* Abstract Architectural Line Overlays */}
        <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
            <line x1="100" y1="50" x2="100" y2="350" stroke="#0C5A3E" strokeWidth="2" />
            <line x1="100" y1="350" x2="900" y2="350" stroke="#0C5A3E" strokeWidth="2" />
            <line x1="250" y1="120" x2="250" y2="350" stroke="#0C5A3E" strokeWidth="1" />
            <line x1="450" y1="80" x2="450" y2="350" stroke="#0C5A3E" strokeWidth="1.5" />
            <line x1="680" y1="150" x2="680" y2="350" stroke="#0C5A3E" strokeWidth="1" />
            {/* Building profiles */}
            <rect x="150" y="200" width="80" height="150" fill="none" stroke="#0C5A3E" strokeWidth="1" />
            <rect x="300" y="100" width="120" height="250" fill="none" stroke="#0C5A3E" strokeWidth="1" />
            <rect x="520" y="180" width="100" height="170" fill="none" stroke="#0C5A3E" strokeWidth="1" strokeDasharray="3,3" />
          </svg>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Badge variant="gold" className="mb-4">
            SECONDARY CAPITAL PLACEMENT SERVICES
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Exclusive Real Estate Advisory
          </h1>
          <p className="font-sans text-base md:text-xl text-premium-white/60 max-w-3xl mx-auto leading-relaxed">
            Navigating prime investment acquisitions, developer audits, physical site coordinates, and transaction closures across the booming Pune Metropolitan Area.
          </p>
          <div className="mt-8">
            <a href="#advisory-desk" onClick={handleScrollToForm}>
              <Button variant="gold" size="lg" iconRight={<Calendar size={14} />}>
                Schedule Strategic Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Pune Market Insights Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <Badge variant="outline">Pune Real Estate Dynamics</Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight">
            High-Yield Indian <br />
            <span className="text-luxury-gold">Growth Clusters</span>
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed text-premium-white/70">
            As a global IT manufacturing and educational hub, Pune, India yields some of the highest compound capital appreciations in Southern Asia. However, cross-border acquisitions necessitate strict transaction governance.
          </p>
          <p className="font-sans text-sm leading-relaxed text-premium-white/60">
            Our specialized real estate desk bridges the gap for overseas buyers, NRIs, and institutional firms. We perform independent asset checks, vet construction compliance indices (MAHA-RERA audits), manage developer representations, and ensure full compliance under Indian capital regulations.
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4 text-center">
            <div className="border border-white/5 bg-subdued-gray/30 p-3">
              <span className="font-serif text-xl font-bold text-luxury-gold">12%+</span>
              <span className="font-sans text-[8px] text-premium-white/40 block mt-1 uppercase tracking-widest">Est. Capital CAGR</span>
            </div>
            <div className="border border-white/5 bg-subdued-gray/30 p-3">
              <span className="font-serif text-xl font-bold text-luxury-gold">100%</span>
              <span className="font-sans text-[8px] text-premium-white/40 block mt-1 uppercase tracking-widest">RERA Registered</span>
            </div>
            <div className="border border-white/5 bg-subdued-gray/30 p-3">
              <span className="font-serif text-xl font-bold text-luxury-gold">Vetted</span>
              <span className="font-sans text-[8px] text-premium-white/40 block mt-1 uppercase tracking-widest">Title Verification</span>
            </div>
          </div>
        </div>

        {/* Visual Map/Vetting checklist */}
        <div className="bg-subdued-gray/30 border border-luxury-gold/15 p-8 gold-glow relative">
          <h3 className="font-serif text-xl font-bold text-luxury-gold uppercase tracking-wider mb-6 flex items-center">
            <Landmark size={20} className="mr-2 text-luxury-gold" />
            Advisory Vetting Protocol
          </h3>
          <div className="space-y-4 font-sans text-xs">
            {[
              {
                title: "MAHA-RERA Regulatory Verification",
                desc: "We verify developer compliance logs, timelines, and legal dispute history before recommending any layout.",
              },
              {
                title: "Independent Title Clearances",
                desc: "Full coordinate matching and independent search-report documentation going back 30 years.",
              },
              {
                title: "Physical Site Coordinate Analysis",
                desc: "Detailed photographic verification, topological audits, and actual infrastructure progress logs.",
              },
              {
                title: "FDI & NRI Capital Safety",
                desc: "Guiding FEMA compliance parameter banking declarations and safe transaction execution routes.",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex space-x-3">
                <span className="font-serif text-xs font-bold text-luxury-gold mt-0.5">[{idx + 1}]</span>
                <div>
                  <h5 className="font-sans font-bold uppercase tracking-wider text-premium-white">{step.title}</h5>
                  <p className="font-sans text-premium-white/50 uppercase mt-0.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-subdued-gray/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge variant="gold">Advisory Portfolios</Badge>
            <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight mt-4">
              Our Advisory Verticals
            </h2>
            <p className="font-sans text-sm text-premium-white/50 uppercase tracking-widest mt-2 leading-relaxed">
              Bespoke real estate integration services spanning Pune&apos;s prime residential & industrial corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 size={24} />,
                title: "Residential Acquisitions",
                desc: "Access to private-inventory luxury apartments, penthouses, and gated community villas in premium clusters (Koregaon Park, Baner, Kalyani Nagar).",
              },
              {
                icon: <Building size={24} />,
                title: "Commercial & Industrial Siting",
                desc: "Sourcing premium tech-park offices, grade-A warehouse logistics sites, and commercial corporate headquarters with pre-vetted zoning permissions.",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Builder Project Valuations",
                desc: "Feasibility modeling, cash flow predictions, builder reliability checks, and construction quality inspections on upcoming developments.",
              },
              {
                icon: <Calendar size={24} />,
                title: "Site Visit Coordination",
                desc: "Detailed layout sweeps, drone verification, and local transport coordinate setups for visiting overseas buyers and executives.",
              },
              {
                icon: <FileCheck size={24} />,
                title: "Legal & Title Guidance",
                desc: "Assisting with local registration procedures, stamp duty clearances, municipal tax compliance, and drafting secure agreements.",
              },
              {
                icon: <Landmark size={24} />,
                title: "Pune Market Intelligence",
                desc: "Real-time municipal master plan audits, upcoming mass transit (Metro) influence maps, and micro-market rental yield tables.",
              },
            ].map((s, i) => (
              <div 
                key={i} 
                className="luxury-card p-6 flex flex-col justify-between h-[250px]"
              >
                <div>
                  <div className="text-luxury-gold mb-4">{s.icon}</div>
                  <h3 className="font-serif text-lg font-bold text-premium-white uppercase tracking-wider mb-2">
                    {s.title}
                  </h3>
                  <p className="font-sans text-xs text-premium-white/60 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="border-t border-white/5 pt-3">
                  <span className="font-sans text-[9px] uppercase tracking-widest text-luxury-gold font-bold">
                    Vetted Partner Program
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Intake Form Desk */}
      <section id="advisory-desk" className="py-24 max-w-7xl mx-auto px-6 md:px-12 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="gold">Investment Desk</Badge>
            <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight">
              Initiate Asset <br />
              <span className="text-luxury-gold font-serif">Siting Consultation</span>
            </h2>
            <p className="font-sans text-sm tracking-wide leading-relaxed text-premium-white/70">
              Provide your capital placement guidelines, preferred asset classes (residential/commercial), target geographic zones, and expected visit dates.
            </p>
            <p className="font-sans text-xs tracking-wider leading-relaxed text-premium-white/50 uppercase">
              ✔️ MAHA-RERA Vetting Guaranteed <br />
              ✔️ Strictly Independent Legal Checklists <br />
              ✔️ Dedicated Portfolios for Overseas buyers
            </p>
            
            <div className="bg-subdued-gray/30 border border-white/5 p-6 space-y-4">
              <h5 className="font-serif text-sm font-bold uppercase tracking-widest text-luxury-gold">
                Legal Disclaimer
              </h5>
              <p className="font-sans text-[10px] text-premium-white/50 leading-relaxed uppercase">
                Real Estate Siting Services represent a secondary compliance division. CY Global Merchants acts as a transactional advisory consultancy, directing capital only to regulatory-cleared builder portfolios.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <InquiryForm defaultProduct="Real Estate Advisory" isRealEstate={true} />
          </div>
        </div>
      </section>
    </div>
  );
}

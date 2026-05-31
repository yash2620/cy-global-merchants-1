"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Eye, Target, MapPin, Award, CheckCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
};

export default function About() {
  return (
    <div className="bg-primary-black py-16 text-premium-white">
      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-white/5 py-20 bg-gradient-to-b from-subdued-gray/30 to-transparent">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-luxury-gold/15 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Badge variant="gold" className="mb-4">
            ESTABLISHED IN PUNE
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Our Sourcing Philosophy
          </h1>
          <p className="font-sans text-base md:text-xl text-premium-white/60 max-w-3xl mx-auto leading-relaxed">
            CY Global Merchants specializes in sourcing premium, wellness-oriented, sustainable, and handcrafted Indian products to connect national heritage with international commerce.
          </p>
        </div>
      </section>

      {/* Main Core Sourcing Introduction */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="font-sans text-[10px] font-bold text-luxury-gold tracking-[0.25em] uppercase block">
            Executive Summary
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Pune&apos;s Sourcing <br />
            <span className="text-luxury-gold">Gateway to the World</span>
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed text-premium-white/70">
            CY Global Merchants is a Pune-based international export house specializing in curation, quality auditing, packing, and global shipping of Indian luxury wellness and sustainable items. 
          </p>
          <p className="font-sans text-sm leading-relaxed text-premium-white/60">
            We work closely with direct farm associations, forest collector groups, and certified metal smiths in Western India. By structuring direct, audited supply chains, we maintain competitive pricing models, certified quality standards, and strict timelines.
          </p>
          <div className="border-l-2 border-luxury-gold/50 pl-4 py-1">
            <p className="font-sans text-xs italic text-premium-white/50">
              &quot;We focus on building multi-decade relationships with international importers, distributors, wholesalers, and sourcing agents who refuse to compromise on quality and integrity.&quot;
            </p>
          </div>
        </motion.div>

        {/* Visual Map/HQ Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-subdued-gray/30 border border-luxury-gold/15 p-8 flex flex-col justify-between gold-glow"
        >
          <div className="flex items-center space-x-3 mb-6">
            <MapPin className="text-luxury-gold" size={24} />
            <div>
              <h4 className="font-serif text-lg font-bold text-premium-white uppercase tracking-wider">
                Geographic Sourcing Nexus
              </h4>
              <p className="font-sans text-[10px] text-luxury-gold uppercase mt-0.5 tracking-widest">
                Pune, Maharashtra, India
              </p>
            </div>
          </div>

          <p className="font-sans text-xs text-premium-white/60 leading-relaxed mb-6">
            Located just 120 km from Nhava Sheva (Jawaharlal Nehru Port Trust, Mumbai)—India&apos;s largest container port—our Pune headquarters provides instant multi-modal dispatch solutions to Western Europe, North America, Oceania, and the GCC region.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-black/40 border border-white/5 p-4 text-center">
              <span className="font-serif text-2xl font-bold text-luxury-gold">120 KM</span>
              <span className="font-sans text-[9px] text-premium-white/40 uppercase block mt-1 tracking-wider">Distance to Mumbai Port</span>
            </div>
            <div className="bg-primary-black/40 border border-white/5 p-4 text-center">
              <span className="font-serif text-2xl font-bold text-luxury-gold">100%</span>
              <span className="font-sans text-[9px] text-premium-white/40 uppercase block mt-1 tracking-wider">Direct Origin Traceability</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-subdued-gray/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-primary-black/50 border border-luxury-gold/10 p-8 gold-glow flex flex-col justify-between group hover:border-luxury-gold/30 transition-colors duration-300">
            <div>
              <div className="w-12 h-12 bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                <Target size={22} />
              </div>
              <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-premium-white mb-4">
                Our Sourcing Mission
              </h3>
              <p className="font-sans text-sm text-premium-white/70 leading-relaxed">
                To promote premium, ethically sourced Indian wellness, lifestyle, and handcrafted items to global procurement divisions. We accomplish this by maintaining fair trade wages for local artisans, strictly avoiding synthetic bindings, and engineering fully transparent logistical documentation chains.
              </p>
            </div>
            <span className="font-sans text-[10px] text-luxury-gold font-bold tracking-[0.2em] uppercase mt-8 block">
              Ethical Trade Integrity &bull; ISO Parameters
            </span>
          </div>

          {/* Vision */}
          <div className="bg-primary-black/50 border border-luxury-gold/10 p-8 gold-glow flex flex-col justify-between group hover:border-luxury-gold/30 transition-colors duration-300">
            <div>
              <div className="w-12 h-12 bg-luxury-gold/10 border border-luxury-gold/30 flex items-center justify-center text-luxury-gold mb-6 group-hover:scale-105 transition-transform duration-300">
                <Eye size={22} />
              </div>
              <h3 className="font-serif text-2xl font-bold uppercase tracking-wider text-premium-white mb-4">
                Our Strategic Vision
              </h3>
              <p className="font-sans text-sm text-premium-white/70 leading-relaxed">
                To become the premier globally recognized export partner for Indian sustainable lifestyle and wellness commodities. We aim to establish a fully digitized B2B intake platform where importers can customize branding, secure pre-shipment certifications, and track sea-bound freight status in real-time.
              </p>
            </div>
            <span className="font-sans text-[10px] text-luxury-gold font-bold tracking-[0.2em] uppercase mt-8 block">
              Digitized B2B Procurement &bull; Sourcing Benchmark
            </span>
          </div>
        </div>
      </section>

      {/* Professional Sourcing Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="gold">Compliance Timeline</Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight mt-4">
            Corporate Operations Roadmap
          </h2>
          <p className="font-sans text-sm text-premium-white/50 uppercase tracking-widest mt-2">
            Structured roadmap ensuring verified, low-friction transactions.
          </p>
        </div>

        <div className="relative border-l border-luxury-gold/20 max-w-4xl mx-auto pl-8 space-y-12">
          {[
            {
              year: "Phase 1 - Direct Manufacturer Integrations",
              title: "Ethical Sourcing Cluster Integration",
              desc: "Consolidated relationships with hand-rolled incense cottage collectives in Maharashtra, direct brass smelting guilds in Western regions, and certified organic cotton bag weavers.",
            },
            {
              year: "Phase 2 - Regulatory Registrations",
              title: "Acquired Standard Export Accreditation",
              desc: "Acquired standard regulatory credentials required for corporate B2B trading: IEC, GST, MSME, AD code registration, and FIEO (Federation of Indian Export Organisations) licensing.",
            },
            {
              year: "Phase 3 - B2B Digital Sourcing Portal",
              title: "Launch of Digital Procurement Desk",
              desc: "Created the www.cyglobalmerchants.com corporate trade interface to host catalog downloads, MOQ requests, and server actions managing client specifications and quotation turnarounds.",
            },
            {
              year: "Phase 4 - Port & Customs Automation",
              title: "CIF Custom Freight Tracking",
              desc: "Integrating shipping APIs directly with Nhava Sheva cargo logs to supply B2B clients with automatic sea container numbers and real-time shipping bills.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[37px] top-1.5 w-4 h-4 bg-primary-black border-2 border-luxury-gold rounded-full"></span>
              
              <span className="font-sans text-[10px] font-bold text-luxury-gold uppercase tracking-[0.2em] block mb-1">
                {item.year}
              </span>
              <h4 className="font-serif text-xl font-bold text-premium-white uppercase tracking-wider mb-2">
                {item.title}
              </h4>
              <p className="font-sans text-xs md:text-sm text-premium-white/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sourcing CTA */}
      <section className="bg-gradient-to-b from-transparent to-emerald-dark/10 py-16 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider mb-4">
            Partner with India&apos;s Elite Trade House
          </h3>
          <p className="font-sans text-xs md:text-sm text-premium-white/60 uppercase tracking-widest max-w-xl mx-auto mb-8">
            Submit your specifications for a custom quotation, private label requirements, or shipping queries.
          </p>
          <Link href="/contact">
            <Button variant="gold" size="lg">
              Open Sourcing Discussion
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

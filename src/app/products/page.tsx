"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowUpRight, Shield, Award, Package, Landmark } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface Product {
  id: string;
  name: string;
  hsCode: string;
  subTitle: string;
  description: string;
  moq: string;
  packaging: string;
  leadTime: string;
  specifications: { key: string; value: string }[];
  applications: string[];
  industries: string[];
}

const productsData: Product[] = [
  {
    id: "agarbatti",
    name: "Incense Sticks (Agarbatti)",
    hsCode: "33074100",
    subTitle: "Aromatic Sustainable Bamboo Core Agarbatti",
    description: "Premium hand-rolled charcoal-free incense sticks manufactured using natural binding gums, organic plant resins, raw essential oils, and traditional Indian floral distillates. Formulated for high aroma retention, low ash output, and slow, non-toxic burns.",
    moq: "500 Kilograms (Bulk / Private Label)",
    packaging: "Moisture-sealed export-grade inner sleeves inside heavy-duty outer corrugated cartons.",
    leadTime: "15 to 20 Days FOB Pune/Mumbai Port",
    specifications: [
      { key: "Stick Length", value: "8 Inch / 9 Inch / 12 Inch options" },
      { key: "Burning Duration", value: "40 to 45 Minutes (Per stick)" },
      { key: "Fragrance Retention", value: "Up to 2 Years in sealed packaging" },
      { key: "Bnding Agent", value: "Natural Loha powder & Machilus Macrantha gum" },
      { key: "Private Labeling", value: "Fully supported (Custom outer artwork)" },
    ],
    applications: [
      "Residential aromatherapy & ambient scenting",
      "Spa, wellness center, and mindfulness studios",
      "Corporate gifting & festive custom packages",
      "Traditional lifestyle rituals",
    ],
    industries: [
      "Wellness & Lifestyle Wholesalers",
      "Aromatherapy Importers",
      "Supermarket Sourcing Agencies",
      "Premium Hospitality & Hospitality Brands",
    ],
  },
  {
    id: "handicrafts",
    name: "Brass Decorative Handicrafts",
    hsCode: "74199930",
    subTitle: "Legacy Smelted Fine Metal Handiworks",
    description: "Exceptional decorative artifacts, idols, and centerpieces crafted by hereditary brass smelting guilds in Western India. Created utilizing sand-casting or lost-wax techniques, polished to a premium mirror finish or protected with antique patina coatings.",
    moq: "100 Units (Assorted sizes and designs supported)",
    packaging: "Each piece wrapped in anti-tarnish tissue, bubble sheets, and boxed inside reinforced 5-ply cartons.",
    leadTime: "30 to 45 Days (Depending on craftsmanship complexity)",
    specifications: [
      { key: "Material Grade", value: "High-grade industrial B2B copper-zinc brass alloy" },
      { key: "Smelting Technique", value: "Traditional sand-cast & lost-wax casting methods" },
      { key: "Finishing Selection", value: "Glossy brass / Antique bronze / Patina green" },
      { key: "Quality Assured", value: "Checked for cracks, weight distribution, and alloy purity" },
      { key: "Custom Designs", value: "CAD blueprint-based casting supported" },
    ],
    applications: [
      "Luxury hospitality decor (Hotels, premium resorts)",
      "High-end corporate headquarter interior styling",
      "Private collectors & luxury lifestyle showrooms",
      "Premium corporate recognition gifts",
    ],
    industries: [
      "Luxury Home Decor Importers",
      "Architectural Sourcing Firms",
      "Fine Giftware Distributors",
      "Commercial Interior Design Houses",
    ],
  },
  {
    id: "yoga",
    name: "Premium Sourced Yoga Products",
    hsCode: "95069190",
    subTitle: "Eco-Friendly Biodegradable Wellness Accessories",
    description: "Fully sustainable B2B yoga accessories, including organic oak tree cork mats, high-density natural cork blocks, non-stretch cotton stretching straps, and buckwheat-filled yoga bolsters. Completely free from harmful PVCs and synthetics.",
    moq: "200 Complete Sets / 500 Individual Units",
    packaging: "Individual organic cotton carry sleeves, boxed in bulk inside recycled heavy cartons.",
    leadTime: "20 to 25 Days FOB",
    specifications: [
      { key: "Mat Base Material", value: "100% Biodegradable natural tree rubber" },
      { key: "Mat Surface", value: "Fine organic Portuguese cork bark laminate" },
      { key: "Cork Block Density", value: "High-density fine-grain compression blocks" },
      { key: "Strap Material", value: "Heavy-weave unbleached organic Indian cotton" },
      { key: "Toxic Parameters", value: "0% PVC, Phthalates, or chemical plasticizers" },
    ],
    applications: [
      "Elite fitness clubs & boutique wellness resorts",
      "Corporate wellness programs and gyms",
      "Private-label eco-conscious health brands",
      "Physical rehabilitation and therapy facilities",
    ],
    industries: [
      "Fitness Equipment Wholesalers",
      "Eco-Brand Sourcing Offices",
      "Hotel & Spa Accessory Importers",
      "Sports Goods Distributors",
    ],
  },
  {
    id: "tote-bags",
    name: "Organic Cotton Tote Bags",
    hsCode: "420292",
    subTitle: "Heavyweight Reusable Organic Canvas Shopping Bags",
    description: "Sustainable packaging alternatives crafted using robust, long-staple Indian organic cotton. Available in unbleached natural textures or custom dyed using non-toxic vegetable inks. Fully reinforced stitching at stress points.",
    moq: "1,000 Pieces (Includes custom screenprinting options)",
    packaging: "Packed in bundles of 50 inside waterproof lining export boxes.",
    leadTime: "15 to 25 Days (Depending on screenprint colors)",
    specifications: [
      { key: "Fabric Weight", value: "8 oz / 10 oz / 12 oz / 14 oz Canvas options" },
      { key: "Stitch Parameters", value: "Heavy-duty cross-stitch reinforced handles" },
      { key: "Ink Specifications", value: "Certified eco-friendly AZO-free screen inks" },
      { key: "Bag Dimensions", value: "Standard 38x42 cm or bespoke dimensions" },
      { key: "Closure Variants", value: "Open-top / Metal snaps / Wooden button / Zipper" },
    ],
    applications: [
      "Eco-friendly corporate packaging overlays",
      "Supermarket B2B plastic bag replacements",
      "Retail promotional event supply",
      "Bespoke museum & university bookstore accessories",
    ],
    industries: [
      "Eco-Friendly Packaging Buyers",
      "Retail Grocery Chain Importers",
      "Corporate Event Planners",
      "Fashion & Promotional Agencies",
    ],
  },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProducts =
    activeTab === "all" ? productsData : productsData.filter((p) => p.id === activeTab);

  return (
    <div className="bg-primary-black py-16 text-premium-white min-h-screen">
      {/* Header Banner */}
      <section className="relative overflow-hidden py-20 border-b border-white/5 bg-gradient-to-b from-subdued-gray/30 to-transparent mb-12">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-luxury-gold/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Badge variant="gold" className="mb-4">
            B2B TECHNICAL DIRECTORY
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Export Portfolios
          </h1>
          <p className="font-sans text-base md:text-xl text-premium-white/60 max-w-3xl mx-auto leading-relaxed">
            Technical specifications, compliance indices, packaging criteria, and tariff codes for our premier sustainable assets.
          </p>
        </div>
      </section>

      {/* Tabs System */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-white/10 pb-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer ${
              activeTab === "all"
                ? "bg-luxury-gold text-primary-black border border-luxury-gold font-bold"
                : "bg-transparent text-premium-white/60 hover:text-premium-white border border-white/10 hover:border-white/30"
            }`}
          >
            All Verticals
          </button>
          {productsData.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer ${
                activeTab === p.id
                  ? "bg-luxury-gold text-primary-black border border-luxury-gold font-bold"
                  : "bg-transparent text-premium-white/60 hover:text-premium-white border border-white/10 hover:border-white/30"
              }`}
            >
              {p.name.split(" (")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        <AnimatePresence mode="wait">
          {filteredProducts.map((p, idx) => (
            <motion.section
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-white/5 first:border-t-0 first:pt-0"
            >
              {/* Product Info Block */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center space-x-3">
                  <Badge variant="gold" className="text-xs">
                    HS CODE: {p.hsCode}
                  </Badge>
                  <span className="font-sans text-[10px] text-premium-white/40 uppercase tracking-widest">
                    CIF & FOB AVAILABLE
                  </span>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-premium-white">
                  {p.name}
                </h2>
                
                <h4 className="font-sans text-sm font-semibold uppercase tracking-widest text-luxury-gold">
                  {p.subTitle}
                </h4>

                <p className="font-sans text-sm md:text-base leading-relaxed text-premium-white/70">
                  {p.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="bg-subdued-gray/30 border border-white/5 p-6 rounded-none">
                  <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-luxury-gold mb-4 flex items-center">
                    <Package size={15} className="mr-2 text-luxury-gold" />
                    TECHNICAL CLASSIFICATION DATA
                  </h4>
                  <div className="divide-y divide-white/5">
                    {p.specifications.map((s, index) => (
                      <div key={index} className="flex justify-between py-2 text-xs font-sans">
                        <span className="text-premium-white/50 uppercase tracking-wider">{s.key}</span>
                        <span className="font-medium text-premium-white text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sourcing / Delivery Logistics details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  <div className="border-l border-luxury-gold/30 pl-4">
                    <span className="font-sans text-[9px] uppercase tracking-wider text-premium-white/40 block">Minimum Order</span>
                    <span className="font-sans text-xs font-semibold text-luxury-gold block mt-0.5">{p.moq}</span>
                  </div>
                  <div className="border-l border-luxury-gold/30 pl-4">
                    <span className="font-sans text-[9px] uppercase tracking-wider text-premium-white/40 block">Export Packaging</span>
                    <span className="font-sans text-xs font-semibold text-premium-white/80 block mt-0.5 leading-snug">{p.packaging}</span>
                  </div>
                  <div className="border-l border-luxury-gold/30 pl-4">
                    <span className="font-sans text-[9px] uppercase tracking-wider text-premium-white/40 block">Dispatch Lead Time</span>
                    <span className="font-sans text-xs font-semibold text-premium-white/80 block mt-0.5">{p.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* Applications & Industries Block */}
              <div className="lg:col-span-5 space-y-8 bg-subdued-gray/50 border border-luxury-gold/15 p-8 gold-glow h-full flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-base font-bold uppercase tracking-wider text-luxury-gold mb-4 flex items-center">
                    <Globe size={18} className="mr-2 text-luxury-gold" />
                    Target B2B Applications
                  </h4>
                  <ul className="space-y-3">
                    {p.applications.map((app, index) => (
                      <li key={index} className="flex items-start text-xs font-sans text-premium-white/70">
                        <span className="w-1.5 h-1.5 bg-luxury-gold rounded-none mr-2.5 mt-1.5 shrink-0"></span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <h4 className="font-serif text-base font-bold uppercase tracking-wider text-luxury-gold mb-4 flex items-center">
                    <Landmark size={18} className="mr-2 text-luxury-gold" />
                    Industries Served
                  </h4>
                  <ul className="space-y-3">
                    {p.industries.map((ind, index) => (
                      <li key={index} className="flex items-start text-xs font-sans text-premium-white/70">
                        <span className="w-1.5 h-1.5 bg-emerald-dark rounded-none mr-2.5 mt-1.5 shrink-0"></span>
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                  <a href="/contact" className="w-full">
                    <Button variant="gold" size="md" className="w-full text-xs" iconRight={<ArrowUpRight size={13} />}>
                      Request RFQ Quotation
                    </Button>
                  </a>
                </div>
              </div>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>

      {/* Sourcing Certifications Callout */}
      <section className="mt-32 border-t border-white/5 pt-20 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto mb-12">
          <Badge variant="gold">Compliance Verified</Badge>
          <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-wider mt-4">
            Audits & Certificate Management
          </h3>
          <p className="font-sans text-xs md:text-sm text-premium-white/50 uppercase tracking-widest leading-relaxed mt-2">
            Every export shipment is dispatched with certified chemical test logs, origin sheets, and customs clearances standard.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { tag: "SGS / Intertek", label: "Third-Party Audits" },
            { tag: "FIEO Registered", label: "National Export Body" },
            { tag: "Phytosanitary", label: "Wellness Clearance" },
            { tag: "APEDA Compliant", label: "Agricultural Standard" },
          ].map((item, idx) => (
            <div key={idx} className="border border-white/5 bg-subdued-gray/30 p-4">
              <span className="font-serif text-sm font-bold text-luxury-gold block uppercase tracking-wider">{item.tag}</span>
              <span className="font-sans text-[10px] text-premium-white/40 block uppercase tracking-widest mt-1">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

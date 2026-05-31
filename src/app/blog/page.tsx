"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/lib/blogs";

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-primary-black py-16 text-premium-white min-h-screen">
      {/* Header Banner */}
      <section className="relative overflow-hidden py-20 border-b border-white/5 bg-gradient-to-b from-subdued-gray/30 to-transparent mb-12">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-luxury-gold/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Badge variant="gold" className="mb-4">
            B2B KNOWLEDGE CENTER
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Trade Insights & Guides
          </h1>
          <p className="font-sans text-base md:text-xl text-premium-white/60 max-w-3xl mx-auto leading-relaxed">
            Market research reports, HS code classifications, export documentation manuals, and regulatory guidelines for global B2B procurement.
          </p>
        </div>
      </section>

      {/* Category Selection Tabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-wrap items-center justify-center gap-3 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer ${
                activeCategory === cat
                  ? "bg-luxury-gold text-primary-black border border-luxury-gold font-bold"
                  : "bg-transparent text-premium-white/60 hover:text-premium-white border border-white/10 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="luxury-card p-6 flex flex-col justify-between h-[380px] relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Badge variant="gold" className="text-[9px]">
                  {post.category}
                </Badge>
                <div className="flex items-center space-x-3 text-[10px] text-premium-white/40">
                  <span className="flex items-center">
                    <Calendar size={11} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={11} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-lg font-bold text-premium-white group-hover:text-luxury-gold transition-colors duration-300 mb-3 leading-snug">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  {post.title}
                </Link>
              </h3>

              <p className="font-sans text-xs text-premium-white/60 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              {/* Tags */}
              <div className="flex space-x-1.5 overflow-hidden max-w-[65%]">
                {post.tags.slice(0, 2).map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-sans tracking-widest text-premium-white/40 uppercase truncate"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <Link href={`/blog/${post.slug}`}>
                <Button variant="ghost" size="sm" className="p-0 text-[10px] group-hover:text-luxury-gold transition-colors duration-300" iconRight={<ArrowRight size={12} />}>
                  Read Article
                </Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

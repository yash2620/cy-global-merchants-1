import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Calendar, Clock, BookOpen, MessageSquareText, ShieldAlert } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { blogPosts } from "@/lib/blogs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | CY Global Merchants",
    };
  }

  return {
    title: `${post.title} | CY Global Merchants B2B Insights`,
    description: post.excerpt,
    keywords: post.tags,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-primary-black py-32 text-center text-premium-white min-h-[70vh] flex flex-col items-center justify-center">
        <ShieldAlert size={48} className="text-red-500 mb-6" />
        <h1 className="font-serif text-3xl font-bold uppercase mb-4">Article Not Found</h1>
        <p className="font-sans text-xs text-premium-white/50 uppercase tracking-widest max-w-sm mb-8">
          The requested trade research publication is currently offline or under archive revision.
        </p>
        <Link href="/blog">
          <Button variant="outline">Back to B2B Catalog</Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-primary-black py-16 text-premium-white min-h-screen">
      {/* Header Banner */}
      <section className="relative overflow-hidden py-16 border-b border-white/5 bg-gradient-to-b from-subdued-gray/30 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <Link href="/blog" className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-luxury-gold hover:underline focus:outline-none mb-4">
            <ArrowLeft size={12} className="mr-2" />
            Back to Trade Directory
          </Link>
          
          <div className="flex items-center justify-center space-x-4">
            <Badge variant="gold" className="text-xs">
              {post.category}
            </Badge>
            <div className="flex items-center space-x-3 text-xs text-premium-white/40 font-sans">
              <span className="flex items-center">
                <Calendar size={12} className="mr-1" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock size={12} className="mr-1" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight max-w-3xl mx-auto text-premium-white">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {post.tags.map((t, idx) => (
              <span
                key={idx}
                className="bg-white/5 border border-white/10 px-2.5 py-1 text-[9px] tracking-widest uppercase font-sans text-premium-white/50"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content & B2B Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
        {/* Article Body */}
        <div className="lg:col-span-8 space-y-8 font-sans text-premium-white/80 leading-relaxed text-sm md:text-base tracking-wide border-r border-white/5 pr-0 lg:pr-12">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:uppercase prose-headings:text-luxury-gold prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:mb-6 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:mb-2 prose-strong:text-premium-white"
          />
        </div>

        {/* B2B Sourcing Sidebar (Conversion module) */}
        <div className="lg:col-span-4 space-y-8 sticky top-28 h-max">
          <div className="bg-subdued-gray/50 border border-luxury-gold/15 p-6 gold-glow space-y-6">
            <div className="flex items-center space-x-2 border-b border-luxury-gold/20 pb-4">
              <BookOpen size={18} className="text-luxury-gold" />
              <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-premium-white">
                Sourcing Assistance
              </h4>
            </div>

            <p className="font-sans text-xs text-premium-white/60 leading-relaxed">
              Are you an importer seeking custom specifications, custom aromatic formulations, or heavy custom castings like the ones detailed in this guide?
            </p>

            <ul className="space-y-2 text-xs font-sans text-premium-white/70">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-luxury-gold mr-2"></span>
                <span>Pro-Forma Quotations in 12 Hours</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-luxury-gold mr-2"></span>
                <span>Third-Party Audits (SGS) supported</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-luxury-gold mr-2"></span>
                <span>FOB / CIF Transit Handling</span>
              </li>
            </ul>

            <Link href="/contact" className="block w-full">
              <Button variant="gold" size="md" className="w-full text-xs" iconRight={<MessageSquareText size={13} />}>
                Submit Sourcing Spec
              </Button>
            </Link>
          </div>

          <div className="bg-primary-black border border-white/5 p-6 text-center space-y-4">
            <span className="font-sans text-[9px] uppercase tracking-widest text-premium-white/40 block">Direct Assistance Desk</span>
            <h5 className="font-serif text-base font-bold text-luxury-gold uppercase tracking-wider">
              WhatsApp Logistics
            </h5>
            <a 
              href="https://wa.me/917498025464" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block font-sans text-xs font-bold text-premium-white hover:text-luxury-gold transition-colors duration-300"
            >
              +91 74980 25464
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

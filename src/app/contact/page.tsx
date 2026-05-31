"use client";

import React from "react";
import { MapPin, Mail, Phone, Clock, MessageSquareCode, ShieldCheck, Globe } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import InquiryForm from "@/components/ui/InquiryForm";

export default function Contact() {
  const address = "Bhakti Darshan, Near Kokate Hospital, Pimple Gurav, Pune – 411061, Maharashtra, India";
  const email = "info@cyglobalmerchants.com";
  const phone = "+91 7498025464";
  const whatsAppUrl = "https://wa.me/917498025464";

  return (
    <div className="bg-primary-black py-16 text-premium-white min-h-screen">
      {/* Header Banner */}
      <section className="relative overflow-hidden py-20 border-b border-white/5 bg-gradient-to-b from-subdued-gray/30 to-transparent mb-12">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-luxury-gold/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <Badge variant="gold" className="mb-4">
            TRADE DESK DIRECTORY
          </Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
            Contact Sourcing Desk
          </h1>
          <p className="font-sans text-base md:text-xl text-premium-white/60 max-w-3xl mx-auto leading-relaxed">
            Connect directly with our Pune headquarters. Initiate pro-forma bids, request documentation, or coordinate real estate site visits.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Information & Map */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-subdued-gray/40 border border-luxury-gold/15 p-6 md:p-8 gold-glow space-y-6">
            <h3 className="font-serif text-xl font-bold text-luxury-gold uppercase tracking-wider border-b border-luxury-gold/20 pb-4">
              HQ Sourcing Office
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin size={20} className="text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-[10px] font-bold text-premium-white/40 uppercase tracking-widest">
                    Business Address
                  </h5>
                  <p className="font-sans text-xs md:text-sm text-premium-white/80 leading-relaxed mt-1">
                    Bhakti Darshan, Near Kokate Hospital,<br />
                    Pimple Gurav, Pune – 411061,<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <Mail size={20} className="text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-[10px] font-bold text-premium-white/40 uppercase tracking-widest">
                    Trade E-Mail
                  </h5>
                  <a href={`mailto:${email}`} className="font-sans text-xs md:text-sm text-luxury-gold hover:underline mt-1 block">
                    {email}
                  </a>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-start space-x-4">
                <Phone size={20} className="text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-[10px] font-bold text-premium-white/40 uppercase tracking-widest">
                    Hotlines (Calling & WhatsApp)
                  </h5>
                  <a href={`tel:${phone}`} className="font-sans text-xs md:text-sm text-premium-white/80 hover:text-luxury-gold transition-colors duration-300 mt-1 block">
                    Phone: {phone}
                  </a>
                  <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="font-sans text-xs md:text-sm text-green-500 hover:underline mt-0.5 block">
                    WhatsApp: Direct Chat Link
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <Clock size={20} className="text-luxury-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans text-[10px] font-bold text-premium-white/40 uppercase tracking-widest">
                    Operational Hours
                  </h5>
                  <p className="font-sans text-xs md:text-sm text-premium-white/80 leading-relaxed mt-1">
                    Monday to Saturday<br />
                    9:00 AM – 7:00 PM IST (GMT +5:30)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Styled SVG Map illustration instead of blank maps */}
          <div className="bg-subdued-gray/30 border border-white/5 p-6 rounded-none relative">
            <div className="absolute top-2 right-2 flex items-center space-x-1.5 text-[8px] tracking-widest text-premium-white/30 uppercase font-sans">
              <Globe size={10} className="text-green-500" />
              <span>Pune HQ Verified</span>
            </div>
            
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-premium-white mb-4">
              Operational Geography Map
            </h4>

            <div className="relative h-48 border border-white/5 bg-primary-black/30 flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full p-4" viewBox="0 0 200 100">
                <rect width="200" height="100" fill="none" />
                {/* Simulated contour lines */}
                <path d="M10,80 C50,85 100,50 150,90 C180,10 190,50 200,30" fill="none" stroke="rgba(12,90,62,0.05)" strokeWidth="1" />
                <path d="M10,60 C40,40 80,80 120,40 C150,60 170,20 200,10" fill="none" stroke="rgba(11,61,46,0.08)" strokeWidth="1.5" />
                
                {/* India Outline Mock (Vaguely) */}
                <path d="M70,30 L90,20 L110,35 L120,60 L100,85 L85,90 L65,70 Z" fill="rgba(11,61,46,0.15)" stroke="rgba(12,90,62,0.1)" strokeWidth="1" />
                
                {/* Pune Marker */}
                <circle cx="95" cy="55" r="4" fill="#0C5A3E" />
                <circle cx="95" cy="55" r="10" stroke="#0C5A3E" strokeWidth="1" fill="none" className="animate-ping" />
                
                {/* Label */}
                <text x="95" y="75" fill="#0C5A3E" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PUNE HEADQUARTERS</text>
                <text x="95" y="83" fill="rgba(10,10,10,0.4)" fontSize="5" textAnchor="middle" fontFamily="sans-serif">Bhakti Darshan, Maharashtra</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Lead Sourcing Form */}
        <div className="lg:col-span-7 w-full">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquareText } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/917498025464";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-primary-black hover:bg-emerald-dark text-luxury-gold hover:text-premium-white border border-luxury-gold/30 hover:border-luxury-gold p-3.5 shadow-2xl transition-colors duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Direct Sourcing Chat"
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 border border-luxury-gold/50 rounded-none scale-100 opacity-70 group-hover:animate-ping duration-1000"></span>
      
      {/* Icon */}
      <MessageSquareText size={22} className="relative z-10 mr-0 group-hover:mr-2 transition-all duration-300" />
      
      {/* Label (Visible on hover on desktop) */}
      <span className="max-w-0 overflow-hidden text-xs font-semibold uppercase tracking-wider whitespace-nowrap group-hover:max-w-[150px] transition-all duration-500 ease-in-out relative z-10">
        Trade Inquiry Desk
      </span>
    </motion.a>
  );
}

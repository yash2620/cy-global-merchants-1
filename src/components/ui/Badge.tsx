import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "green" | "gray" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 text-xs font-semibold uppercase tracking-widest font-sans border rounded-none";
  
  const variantStyles = {
    gold: "bg-luxury-gold/10 border-luxury-gold/30 text-luxury-gold",
    green: "bg-emerald-dark/15 border-emerald-dark/40 text-emerald-dark dark:text-emerald-500",
    gray: "bg-white/5 border-white/10 text-premium-white/80",
    outline: "bg-transparent border-luxury-gold/40 text-luxury-gold",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

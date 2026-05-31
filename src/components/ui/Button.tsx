"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
  variant?: "gold" | "emerald" | "outline" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  animate?: boolean;
}

export default function Button({
  children,
  variant = "gold",
  size = "md",
  iconLeft,
  iconRight,
  animate = true,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium uppercase tracking-wider rounded-none cursor-pointer transition-all duration-300 focus:outline-none";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantStyles = {
    gold: "gold-gradient text-primary-black hover:brightness-110 font-semibold border border-luxury-gold shadow-md",
    emerald: "emerald-gradient text-premium-white hover:brightness-110 border border-emerald-dark shadow-md",
    outline: "bg-transparent border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-primary-black",
    secondary: "bg-subdued-gray text-premium-white border border-white/10 hover:bg-white/5",
    ghost: "bg-transparent text-premium-white hover:text-luxury-gold",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (!animate) {
    return (
      <button className={combinedClasses} {...props}>
        {iconLeft && <span className="mr-2">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </button>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {iconLeft && <span className="mr-2 inline-flex items-center justify-center">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2 inline-flex items-center justify-center">{iconRight}</span>}
    </motion.button>
  );
}

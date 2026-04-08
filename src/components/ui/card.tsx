"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={`bg-surface border border-border rounded-xl p-6 transition-shadow ${
        hover ? "hover:shadow-lg hover:shadow-accent/5" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

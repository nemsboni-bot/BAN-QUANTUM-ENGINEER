"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-steel max-w-3xl mx-auto">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light">
          404
        </div>
        <h1 className="mt-4 text-3xl font-bold text-foreground">Page Not Found</h1>
        <p className="mt-3 text-steel max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Check the URL or navigate back to our main pages.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/references"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-surface transition-colors"
          >
            <Search className="w-4 h-4" />
            Browse References
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto">
          {[
            { name: "Services", href: "/services/oil-and-gas" },
            { name: "Projects", href: "/projects" },
            { name: "Resources", href: "/resources" },
            { name: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-center gap-1 px-4 py-2 text-sm text-steel bg-surface border border-border rounded-lg hover:text-accent hover:border-accent transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

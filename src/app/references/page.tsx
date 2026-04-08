"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, BookOpen, ExternalLink, Download } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { references, type Reference } from "@/data/references";

const categories = ["All", "API", "ASME", "ASTM", "ISO"] as const;

const categoryColors: Record<string, string> = {
  API: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  ASME: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  ASTM: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  ISO: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function ReferencesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    return references.filter((ref: Reference) => {
      const matchesCategory = activeCategory === "All" || ref.category === activeCategory;
      const matchesSearch =
        search === "" ||
        ref.title.toLowerCase().includes(search.toLowerCase()) ||
        ref.code.toLowerCase().includes(search.toLowerCase()) ||
        ref.description.toLowerCase().includes(search.toLowerCase()) ||
        ref.scope.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-surface to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Engineering References & Standards
              </h1>
            </div>
            <p className="mt-4 text-lg text-steel max-w-2xl">
              Comprehensive library of industry standards from API, ASME, ASTM, and ISO.
              Search and filter to find the references you need.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-steel" />
            <input
              type="text"
              placeholder="Search by code, title, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-xl text-foreground placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-steel mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                  activeCategory === cat
                    ? "bg-accent text-white border-accent"
                    : "bg-surface text-steel border-border hover:border-accent hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-sm text-steel">
              {filtered.length} {filtered.length === 1 ? "standard" : "standards"} found
            </span>
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((ref: Reference) => (
              <motion.div
                key={ref.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-md border ${
                          categoryColors[ref.category] || ""
                        }`}
                      >
                        {ref.category}
                      </span>
                      <span className="font-mono text-sm text-accent font-medium">
                        {ref.code}
                      </span>
                      <span className="text-xs text-steel-light">({ref.year})</span>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{ref.title}</h3>
                    <p className="mt-1 text-sm text-steel leading-relaxed">{ref.description}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-surface-dark text-steel text-xs rounded-md border border-border">
                      {ref.scope}
                    </span>
                  </div>
                  <div className="flex sm:flex-col gap-2 shrink-0">
                    <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-accent border border-accent/30 rounded-lg hover:bg-accent/10 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-2 text-sm text-steel border border-border rounded-lg hover:bg-surface-dark transition-colors">
                      <Download className="w-4 h-4" />
                      Save
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-steel-light mx-auto mb-4" />
              <p className="text-lg text-steel">No standards found matching your search.</p>
              <p className="text-sm text-steel-light mt-1">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </Section>

      {/* Categories Info */}
      <Section className="bg-surface">
        <SectionHeader
          title="Standards Organizations"
          subtitle="Understanding the key standards bodies in engineering."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              code: "API",
              name: "American Petroleum Institute",
              description: "Develops standards for the oil and gas industry covering equipment, operations, and safety practices.",
            },
            {
              code: "ASME",
              name: "American Society of Mechanical Engineers",
              description: "Publishes codes and standards for mechanical engineering, including the Boiler and Pressure Vessel Code.",
            },
            {
              code: "ASTM",
              name: "ASTM International",
              description: "Develops technical standards for materials, products, systems, and services used across industries.",
            },
            {
              code: "ISO",
              name: "International Organization for Standardization",
              description: "Develops international standards covering technology, manufacturing, quality, and safety management.",
            },
          ].map((org) => (
            <Card key={org.code} className="text-center">
              <span
                className={`inline-block px-3 py-1.5 text-sm font-bold rounded-lg border ${
                  categoryColors[org.code] || ""
                }`}
              >
                {org.code}
              </span>
              <h3 className="mt-3 font-semibold text-foreground">{org.name}</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{org.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

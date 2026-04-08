"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  ExternalLink,
  Download,
  ChevronRight,
  Library,
  Hash,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { references, type Reference } from "@/data/references";

const categories = ["All", "API", "ASME", "ASTM", "ISO"] as const;

const categoryMeta: Record<string, { color: string; name: string; count: number }> = {
  API: {
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    name: "American Petroleum Institute",
    count: references.filter((r) => r.category === "API").length,
  },
  ASME: {
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    name: "American Society of Mechanical Engineers",
    count: references.filter((r) => r.category === "ASME").length,
  },
  ASTM: {
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    name: "ASTM International",
    count: references.filter((r) => r.category === "ASTM").length,
  },
  ISO: {
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    name: "International Organization for Standardization",
    count: references.filter((r) => r.category === "ISO").length,
  },
};

const scopes = Array.from(new Set(references.map((r) => r.scope))).sort();

export default function ReferencesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeScope, setActiveScope] = useState<string>("All");

  const filtered = useMemo(() => {
    return references.filter((ref: Reference) => {
      const matchesCategory = activeCategory === "All" || ref.category === activeCategory;
      const matchesScope = activeScope === "All" || ref.scope === activeScope;
      const matchesSearch =
        search === "" ||
        ref.title.toLowerCase().includes(search.toLowerCase()) ||
        ref.code.toLowerCase().includes(search.toLowerCase()) ||
        ref.description.toLowerCase().includes(search.toLowerCase()) ||
        ref.scope.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesScope && matchesSearch;
    });
  }, [search, activeCategory, activeScope]);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-surface to-background py-16">
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

      {/* Main content with sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
                <input
                  type="text"
                  placeholder="Search standards..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-surface border border-border rounded-lg text-foreground text-sm placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-semibold text-steel uppercase tracking-wider mb-3">
                  <Library className="w-3.5 h-3.5" />
                  Categories
                </h3>
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveCategory("All")}
                    className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeCategory === "All"
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-steel hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    <span>All Standards</span>
                    <span className="text-xs bg-surface-dark px-2 py-0.5 rounded-full border border-border">
                      {references.length}
                    </span>
                  </button>
                  {(["API", "ASME", "ASTM", "ISO"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeCategory === cat
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-steel hover:text-foreground hover:bg-surface"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ChevronRight className={`w-3 h-3 transition-transform ${activeCategory === cat ? "rotate-90 text-accent" : ""}`} />
                        <span>{cat}</span>
                      </div>
                      <span className="text-xs bg-surface-dark px-2 py-0.5 rounded-full border border-border">
                        {categoryMeta[cat].count}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Scope filter */}
              <div>
                <h3 className="flex items-center gap-2 text-xs font-semibold text-steel uppercase tracking-wider mb-3">
                  <Hash className="w-3.5 h-3.5" />
                  Scope
                </h3>
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveScope("All")}
                    className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      activeScope === "All"
                        ? "bg-accent/10 text-accent font-medium"
                        : "text-steel hover:text-foreground hover:bg-surface"
                    }`}
                  >
                    All Scopes
                  </button>
                  {scopes.map((scope) => (
                    <button
                      key={scope}
                      onClick={() => setActiveScope(scope)}
                      className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors truncate ${
                        activeScope === scope
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-steel hover:text-foreground hover:bg-surface"
                      }`}
                    >
                      {scope}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Category info card */}
              {activeCategory !== "All" && (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-surface border border-border rounded-xl"
                >
                  <span
                    className={`inline-block px-2.5 py-1 text-xs font-bold rounded-md border ${categoryMeta[activeCategory].color}`}
                  >
                    {activeCategory}
                  </span>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    {categoryMeta[activeCategory].name}
                  </p>
                  <p className="mt-1 text-xs text-steel">
                    {categoryMeta[activeCategory].count} standards in this category
                  </p>
                </motion.div>
              )}
            </div>
          </aside>

          {/* Results */}
          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-steel">
                <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                {filtered.length === 1 ? "standard" : "standards"} found
                {activeCategory !== "All" && (
                  <span> in <span className="text-accent">{activeCategory}</span></span>
                )}
                {activeScope !== "All" && (
                  <span> &middot; {activeScope}</span>
                )}
              </p>
              {(activeCategory !== "All" || activeScope !== "All" || search) && (
                <button
                  onClick={() => { setActiveCategory("All"); setActiveScope("All"); setSearch(""); }}
                  className="text-xs text-accent hover:text-accent-dark transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>

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
                              categoryMeta[ref.category]?.color || ""
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
                <div className="text-center py-16">
                  <BookOpen className="w-12 h-12 text-steel-light mx-auto mb-4" />
                  <p className="text-lg text-steel">No standards found matching your criteria.</p>
                  <p className="text-sm text-steel-light mt-1">Try adjusting your filters or search terms.</p>
                  <button
                    onClick={() => { setActiveCategory("All"); setActiveScope("All"); setSearch(""); }}
                    className="mt-4 text-sm text-accent hover:text-accent-dark transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

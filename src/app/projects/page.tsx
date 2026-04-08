"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cog, Calendar, Briefcase } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Projects & Portfolio</h1>
            <p className="mt-4 text-lg text-steel max-w-2xl">
              Explore our track record of successfully delivered engineering projects across
              drilling, mechanical engineering, and fabrication disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        {/* Category filter */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          {allCategories.map((cat) => (
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
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  {/* Image placeholder */}
                  <div className="w-full h-48 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                    <Cog className="w-20 h-20 text-accent/30" />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-steel">
                      <Calendar className="w-3 h-3" /> {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{project.description}</p>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <Briefcase className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-medium text-foreground">Scope:</span>
                        <p className="text-xs text-steel">{project.scope}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Cog className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <div>
                        <span className="text-xs font-medium text-foreground">Outcome:</span>
                        <p className="text-xs text-steel">{project.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-surface-dark text-steel text-xs rounded-md border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </Section>
    </>
  );
}

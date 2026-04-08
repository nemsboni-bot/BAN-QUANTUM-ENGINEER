"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Clock, User, Tag, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { articles } from "@/data/articles";

const allCategories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    if (activeCategory === "All") return articles;
    return articles.filter((a) => a.category === activeCategory);
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
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-accent" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Resources & Knowledge Hub
              </h1>
            </div>
            <p className="mt-4 text-lg text-steel max-w-2xl">
              Technical articles, engineering guides, and industry insights from our team of
              experienced engineers.
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
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col group cursor-pointer">
                  {/* Category & Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-steel">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed flex-1">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-steel">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <span className="text-xs text-steel-light">{article.date}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-0.5 bg-surface-dark text-steel text-xs rounded-md border border-border"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-1 text-sm text-accent font-medium group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-steel-light mx-auto mb-4" />
            <p className="text-lg text-steel">No articles found in this category.</p>
          </div>
        )}
      </Section>

      {/* Knowledge Categories */}
      <Section className="bg-surface">
        <SectionHeader
          title="Explore by Topic"
          subtitle="Deep-dive into specific engineering disciplines and topics."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Technical Articles",
              description: "In-depth technical articles covering drilling operations, mechanical systems, and fabrication processes.",
              count: articles.length,
            },
            {
              title: "Engineering Guides",
              description: "Step-by-step guides for engineering calculations, design procedures, and standards compliance.",
              count: 12,
            },
            {
              title: "Industry Insights",
              description: "Commentary on industry trends, emerging technologies, and best practices in engineering.",
              count: 8,
            },
          ].map((topic) => (
            <Card key={topic.title}>
              <h3 className="text-lg font-semibold text-foreground">{topic.title}</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{topic.description}</p>
              <div className="mt-4 text-2xl font-bold text-accent">{topic.count}+</div>
              <p className="text-xs text-steel">resources available</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

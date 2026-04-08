"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

interface ServiceSection {
  title: string;
  description: string;
  items?: string[];
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  overview: string;
  sections: ServiceSection[];
  relatedServices: { name: string; href: string }[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicePage({
  title,
  subtitle,
  icon: Icon,
  overview,
  sections,
  relatedServices,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-surface to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-6"
          >
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{title}</h1>
              <p className="mt-4 text-lg text-steel max-w-2xl">{subtitle}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground">Overview</h2>
          <div className="mt-2 h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full" />
          <p className="mt-6 text-steel leading-relaxed text-lg">{overview}</p>
        </div>
      </Section>

      {/* Sections */}
      <Section className="bg-surface">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <Card className="h-full">
                <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{section.description}</p>
                {section.items && (
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-steel">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA + Related */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="Related Services" centered={false} />
            <div className="space-y-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center justify-between p-4 bg-surface border border-border rounded-lg hover:border-accent transition-colors group"
                >
                  <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {service.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-steel group-hover:text-accent transition-colors" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <Card hover={false} className="w-full p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <h3 className="text-2xl font-bold text-foreground">Need Expert Consultation?</h3>
              <p className="mt-3 text-steel leading-relaxed">
                Our team of experienced engineers is ready to assist with your project requirements.
                Contact us for a detailed discussion.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

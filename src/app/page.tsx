"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Drill,
  Flame,
  Cog,
  PenTool,
  HardHat,
  BookOpen,
  ArrowRight,
  Shield,
  Globe,
  Award,
  Users,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

const services = [
  {
    icon: Drill,
    title: "Oil & Gas Drilling",
    description: "Comprehensive drilling engineering services including well design, rig selection, and BOP systems management.",
    href: "/services/oil-and-gas",
  },
  {
    icon: Flame,
    title: "Geothermal Drilling",
    description: "Specialized geothermal well engineering for sustainable energy extraction from subsurface reservoirs.",
    href: "/services/geothermal",
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    description: "Equipment lifecycle management, maintenance systems, and rotating equipment expertise.",
    href: "/services/mechanical-engineering",
  },
  {
    icon: PenTool,
    title: "Mechanical Design",
    description: "CAD design, stress analysis, and pressure vessel engineering compliant with international standards.",
    href: "/services/mechanical-design",
  },
  {
    icon: HardHat,
    title: "Fabrication & Construction",
    description: "Structural fabrication, welding engineering, and QA/QC management for industrial projects.",
    href: "/services/fabrication",
  },
  {
    icon: BookOpen,
    title: "Engineering References",
    description: "Comprehensive library of API, ASME, ASTM, and ISO engineering standards and references.",
    href: "/references",
  },
];

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Globe, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "100+", label: "Engineers & Specialists" },
  { icon: Shield, value: "Zero", label: "Safety Incidents" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-accent opacity-10 animate-gradient" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--steel-light) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          opacity: 0.15,
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                ISO 9001 Certified Engineering
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Engineering Solutions{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary-light">
                  Beyond Boundaries
                </span>
              </h1>
              <p className="mt-6 text-lg text-steel max-w-lg leading-relaxed">
                From deep-well drilling to precision mechanical design, BAN Quantum Engineering
                delivers world-class engineering services backed by decades of industry expertise.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/services/oil-and-gas"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-surface transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-surface to-surface-dark border border-border p-8 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                    {[Drill, Flame, Cog, HardHat].map((Icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="aspect-square rounded-xl bg-background border border-border flex items-center justify-center hover:border-accent transition-colors group"
                      >
                        <Icon className="w-12 h-12 text-steel group-hover:text-accent transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl blur-xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-2xl blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-steel mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeader
          title="Our Engineering Services"
          subtitle="Comprehensive engineering solutions spanning the full project lifecycle, from concept to commissioning."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link href={service.href}>
                <Card className="h-full group cursor-pointer">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{service.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm text-accent font-medium">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-surface">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of our recent engineering achievements across multiple disciplines."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.slice(0, 3).map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full">
                <div className="w-full h-40 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Cog className="w-16 h-16 text-accent/40" />
                </div>
                <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md">
                  {project.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed line-clamp-3">
                  {project.description}
                </p>
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
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-background hover:text-accent transition-colors"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Next Project?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Our team of experienced engineers is ready to deliver solutions tailored to your
              specific requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/references"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                Browse Standards
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

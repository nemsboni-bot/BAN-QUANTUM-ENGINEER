"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Drill, Flame, Cog, PenTool, HardHat } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Drill,
    title: "Oil & Gas Drilling",
    description:
      "Comprehensive drilling engineering services including well design, rig selection, mud system optimization, and BOP management for onshore and offshore operations.",
    href: "/services/oil-and-gas",
    highlights: ["Well Design", "BOP Systems", "Drilling Fluids", "Well Control"],
  },
  {
    icon: Flame,
    title: "Geothermal Drilling",
    description:
      "Specialized geothermal well engineering for sustainable energy extraction, adapted for extreme temperatures and corrosive reservoir conditions.",
    href: "/services/geothermal",
    highlights: ["High-Temperature Wells", "EGS", "Reservoir Engineering", "Environmental"],
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    description:
      "Equipment lifecycle management, maintenance system implementation, and reliability engineering for industrial rotating and static equipment.",
    href: "/services/mechanical-engineering",
    highlights: ["CMMS/PMS", "Rotating Equipment", "Reliability", "Condition Monitoring"],
  },
  {
    icon: PenTool,
    title: "Mechanical Design",
    description:
      "Precision CAD design, FEA stress analysis, and pressure vessel engineering compliant with ASME, API, and ISO international standards.",
    href: "/services/mechanical-design",
    highlights: ["CAD/CAE", "FEA Analysis", "Pressure Vessels", "GD&T"],
  },
  {
    icon: HardHat,
    title: "Fabrication & Construction",
    description:
      "Industrial fabrication engineering, welding procedure development, structural steel detailing, and comprehensive QA/QC management.",
    href: "/services/fabrication",
    highlights: ["Welding Engineering", "Structural Steel", "QA/QC", "NDT"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-surface to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h1>
            <p className="mt-6 text-lg text-steel leading-relaxed">
              BAN Quantum Engineering delivers integrated engineering solutions across five core
              disciplines. From subsurface drilling operations to surface facility design and
              construction, our multidisciplinary team provides end-to-end project support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link href={service.href}>
                <Card className="group cursor-pointer p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {service.title}
                        </h2>
                        <ArrowRight className="w-5 h-5 text-steel group-hover:text-accent group-hover:translate-x-1 transition-all mt-1 shrink-0 hidden sm:block" />
                      </div>
                      <p className="mt-2 text-steel leading-relaxed">{service.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.highlights.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 bg-surface-dark text-steel text-xs font-medium rounded-full border border-border"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">
              Need a Custom Engineering Solution?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Our team combines expertise across all disciplines to deliver integrated solutions
              tailored to your project requirements.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

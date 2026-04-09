"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Shield,
  Award,
  Users,
  Lightbulb,
  ArrowRight,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Wrench,
  CheckCircle,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  const expertise = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Zero-incident culture embedded in every project through rigorous safety protocols and continuous training.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Comprehensive QA/QC frameworks aligned with international standards ensuring consistent excellence in every deliverable.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "A growing team of licensed engineers, certified welding inspectors, and drilling specialists committed to technical mastery.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Leveraging cutting-edge technology and modern methodologies to deliver optimal, cost-effective engineering solutions.",
    },
  ];

  const milestones = [
    { year: "2021", event: "BAN Quantum Engineering founded by Engr. Bonifacio A. Nemesio Jr., RME, PME" },
    { year: "2022", event: "Expanded service offerings to include mechanical design and fabrication engineering" },
    { year: "2023", event: "Completed first major drilling engineering and equipment specification project" },
    { year: "2024", event: "Launched engineering references platform and knowledge hub for industry professionals" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-surface to-background py-20 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              <Calendar className="w-4 h-4" />
              Established 2021
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              About BAN Quantum Engineering
            </h1>
            <p className="mt-6 text-lg text-steel leading-relaxed">
              Founded in 2021 by Engr. Bonifacio A. Nemesio Jr., RME, PME, BAN Quantum Engineering
              is a dynamic engineering firm delivering professional solutions in drilling, mechanical
              engineering, design, and fabrication for the energy and industrial sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <Section>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Founder card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card hover={false} className="p-8 text-center border-accent/20">
              {/* Founder avatar */}
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-primary/20 border-4 border-accent/30 flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-accent">BAN</span>
              </div>

              <h3 className="text-2xl font-bold text-foreground">Engr. Bonifacio A. Nemesio Jr.</h3>
              <p className="text-accent font-semibold mt-1">Founder & Principal Engineer</p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full border border-accent/20">
                  RME
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary-light text-xs font-bold rounded-full border border-primary/20">
                  PME
                </span>
              </div>

              <div className="mt-6 space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm text-steel">
                  <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                  Registered Mechanical Engineer
                </div>
                <div className="flex items-center gap-3 text-sm text-steel">
                  <Wrench className="w-4 h-4 text-accent shrink-0" />
                  Professional Mechanical Engineer
                </div>
                <div className="flex items-center gap-3 text-sm text-steel">
                  <Briefcase className="w-4 h-4 text-accent shrink-0" />
                  Oil &amp; Gas / Geothermal Industry Specialist
                </div>
                <div className="flex items-center gap-3 text-sm text-steel">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  Novaliches, Quezon City, Philippines
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full" />
            <div className="mt-6 space-y-4 text-steel leading-relaxed">
              <p>
                BAN Quantum Engineering was founded in <strong className="text-foreground">2021</strong> by{" "}
                <strong className="text-foreground">Engr. Bonifacio A. Nemesio Jr., RME, PME</strong> — a
                Registered Mechanical Engineer and Professional Mechanical Engineer with extensive
                hands-on experience in the oil &amp; gas, geothermal, and industrial sectors.
              </p>
              <p>
                Driven by the vision of bridging the gap between traditional drilling operations
                and modern engineering disciplines, Engr. Nemesio established the company to provide
                integrated, high-quality engineering services that meet international standards while
                remaining accessible and responsive to client needs.
              </p>
              <p>
                From its base in Quezon City, Philippines, BAN Quantum Engineering has steadily
                grown its capabilities — offering end-to-end solutions from feasibility studies and
                conceptual design through to detailed engineering, fabrication support, and
                construction oversight.
              </p>
              <p>
                The company&apos;s commitment to safety, quality, and technical excellence continues
                to drive its growth as it builds lasting partnerships across the energy and
                industrial sectors.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Company Milestones</h3>
              <div className="space-y-4">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-accent">{m.year}</span>
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-0.5 h-8 bg-border mt-1" />
                      )}
                    </div>
                    <p className="text-sm text-steel pt-2.5">{m.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-surface">
        <SectionHeader
          title="Mission & Vision"
          subtitle="The guiding principles that define our direction and purpose."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <Card hover={false} className="p-8">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="mt-4 text-steel leading-relaxed">
              To deliver safe, innovative, and cost-effective engineering solutions that empower
              our clients to achieve their operational objectives while maintaining the highest
              standards of quality and environmental responsibility.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Provide world-class drilling and mechanical engineering services",
                "Uphold the highest safety and quality standards",
                "Deliver projects on time and within budget",
                "Foster long-term client partnerships built on trust",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-steel">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card hover={false} className="p-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-light" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="mt-4 text-steel leading-relaxed">
              To become a recognized leader in integrated engineering services — known for
              our technical expertise, unwavering commitment to safety, and ability to deliver
              complex projects across the energy and industrial sectors.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Be the partner of choice for drilling and engineering solutions",
                "Set the benchmark for quality in every project we undertake",
                "Expand our reach across the Asia-Pacific region and beyond",
                "Continuously innovate and adopt emerging technologies",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-steel">
                  <CheckCircle className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Core Expertise */}
      <Section>
        <SectionHeader
          title="Core Expertise"
          subtitle="What sets us apart in the engineering landscape."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {expertise.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="text-center p-6 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Values */}
      <Section className="bg-surface">
        <SectionHeader title="Our Values" subtitle="The principles that guide every decision we make." />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Integrity",
              description: "We uphold the highest ethical standards in all our business dealings and engineering practices. Transparency and honesty are non-negotiable.",
            },
            {
              title: "Excellence",
              description: "We pursue technical excellence relentlessly, ensuring every deliverable meets or exceeds industry standards. Good enough is never enough.",
            },
            {
              title: "Collaboration",
              description: "We work as an extension of our client's team, fostering open communication and shared success. Your goals become our goals.",
            },
          ].map((value) => (
            <motion.div key={value.title} variants={itemVariants}>
              <Card className="p-6 h-full">
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-3 text-steel leading-relaxed">{value.description}</p>
              </Card>
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
              Let&apos;s Build Something Together
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Whether you need drilling engineering support, mechanical design, or fabrication
              expertise — our team is ready to deliver.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

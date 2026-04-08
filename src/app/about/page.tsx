"use client";

import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, Users, Lightbulb } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

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
      description: "ISO 9001 certified operations with comprehensive QA/QC frameworks ensuring consistent excellence.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Multidisciplinary team of licensed engineers, certified welding inspectors, and drilling specialists.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Leveraging cutting-edge technology and methodologies to deliver optimal engineering solutions.",
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">About BAN Quantum Engineering</h1>
            <p className="mt-6 text-lg text-steel leading-relaxed">
              Founded on the principles of engineering excellence and safety, BAN Quantum Engineering
              has grown into a trusted partner for oil &amp; gas operators, geothermal developers,
              and industrial clients worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full" />
            <div className="mt-6 space-y-4 text-steel leading-relaxed">
              <p>
                BAN Quantum Engineering was established by a team of seasoned engineers with
                decades of combined experience in the energy and industrial sectors. Our founders
                recognized the need for an engineering firm that could bridge the gap between
                traditional drilling operations and modern engineering disciplines.
              </p>
              <p>
                Today, we operate across multiple continents, providing integrated engineering
                services that span the full project lifecycle — from feasibility studies and
                conceptual design through to fabrication, construction, and commissioning.
              </p>
              <p>
                Our commitment to quality, safety, and technical excellence has made us the partner
                of choice for operators seeking reliable engineering solutions in demanding
                environments.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-surface to-surface-dark border border-border rounded-2xl p-8 flex items-center justify-center aspect-video">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <p className="text-xl font-semibold text-foreground">15+ Years of Excellence</p>
              <p className="text-sm text-steel mt-1">Trusted by industry leaders worldwide</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-surface">
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
          </Card>
          <Card hover={false} className="p-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-light" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="mt-4 text-steel leading-relaxed">
              To be the global benchmark for integrated engineering excellence — recognized for
              our technical expertise, unwavering commitment to safety, and ability to deliver
              complex projects on time and within budget across the energy and industrial sectors.
            </p>
          </Card>
        </div>
      </Section>

      {/* Core Expertise */}
      <Section>
        <SectionHeader
          title="Core Expertise"
          subtitle="What sets us apart in the engineering landscape."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item) => (
            <Card key={item.title} className="text-center p-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-surface">
        <SectionHeader title="Our Values" subtitle="The principles that guide every decision we make." />
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Integrity",
              description: "We uphold the highest ethical standards in all our business dealings and engineering practices.",
            },
            {
              title: "Excellence",
              description: "We pursue technical excellence relentlessly, ensuring every deliverable meets or exceeds industry standards.",
            },
            {
              title: "Collaboration",
              description: "We work as an extension of our client's team, fostering open communication and shared success.",
            },
          ].map((value) => (
            <Card key={value.title} className="p-6">
              <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
              <p className="mt-3 text-steel leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

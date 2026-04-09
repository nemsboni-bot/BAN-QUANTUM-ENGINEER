"use client";

import { ServicePage } from "@/components/sections/service-page";
import { ApiFlangeReference } from "@/components/sections/api-flange-reference";
import { Section, SectionHeader } from "@/components/ui/section";
import { OilDropletIcon } from "@/components/ui/custom-icons";

export default function OilAndGasPage() {
  return (
    <>
      <ServicePage
        title="Oil & Gas Drilling"
        subtitle="Comprehensive drilling engineering solutions for upstream oil and gas operations worldwide."
        icon={OilDropletIcon}
        overview="BAN Quantum Engineering provides end-to-end drilling engineering services for onshore and offshore oil and gas operations. Our team of experienced drilling engineers delivers well designs optimized for safety, cost-efficiency, and operational performance, backed by deep expertise in all aspects of drilling operations from spud to completion."
        sections={[
          {
            title: "Drilling Processes",
            description: "Complete well planning and execution support covering all phases of drilling operations.",
            items: [
              "Well trajectory design and directional planning",
              "Casing and cementing program design",
              "Drilling fluid system selection and optimization",
              "Hydraulics analysis and bit selection",
              "Torque and drag modeling",
              "Well control planning and contingency procedures",
            ],
          },
          {
            title: "Equipment & Systems",
            description: "Expert specification and management of drilling equipment and critical systems.",
            items: [
              "Drilling rig selection and evaluation",
              "Mud system design and management",
              "BOP stack configuration and testing (API RP 53)",
              "Wellhead and casing equipment (API 6A)",
              "Drill string design and inspection",
              "Solids control equipment optimization",
            ],
          },
          {
            title: "Safety Practices",
            description: "Industry-leading safety protocols and well control measures for zero-incident operations.",
            items: [
              "Well control procedures and kill sheet preparation",
              "Risk assessment and HAZOP studies",
              "BOP testing and maintenance programs",
              "Emergency response planning",
              "Safety Management System (SMS) implementation",
              "Compliance with API, IADC, and regulatory standards",
            ],
          },
          {
            title: "Well Completion",
            description: "Optimized completion strategies for maximum reservoir performance and production efficiency.",
            items: [
              "Completion design and equipment selection",
              "Perforation design and optimization",
              "Artificial lift system selection",
              "Sand control methodology",
              "Production tubing and packer design",
            ],
          },
          {
            title: "Performance Optimization",
            description: "Data-driven approaches to improve drilling efficiency and reduce well delivery costs.",
            items: [
              "Real-time drilling data monitoring and analysis",
              "Offset well analysis and lessons learned",
              "Rate of penetration optimization",
              "Non-productive time (NPT) reduction strategies",
              "Cost estimation and benchmarking",
            ],
          },
          {
            title: "Regulatory Compliance",
            description: "Full compliance support with international and local drilling regulations and permits.",
            items: [
              "API and NORSOK standards compliance",
              "Environmental Impact Assessment support",
              "Permit application and documentation",
              "Audit preparation and support",
              "Reporting and documentation per regulatory requirements",
            ],
          },
        ]}
        relatedServices={[
          { name: "Geothermal Drilling", href: "/services/geothermal" },
          { name: "Mechanical Engineering", href: "/services/mechanical-engineering" },
          { name: "Fabrication & Construction", href: "/services/fabrication" },
        ]}
      />

      {/* API Flange Reference Section */}
      <Section className="bg-surface">
        <SectionHeader
          title="API Flange Dimension Reference"
          subtitle="Interactive slide rule for API 6A flange dimensions. Select a nominal bore size and working pressure to view complete flange specifications."
        />
        <ApiFlangeReference />
      </Section>
    </>
  );
}

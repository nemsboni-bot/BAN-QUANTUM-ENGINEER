"use client";

import { HardHat } from "lucide-react";
import { ServicePage } from "@/components/sections/service-page";

export default function FabricationPage() {
  return (
    <ServicePage
      title="Fabrication & Construction"
      subtitle="Industrial fabrication engineering and construction management for steel structures and process equipment."
      icon={HardHat}
      overview="BAN Quantum Engineering provides comprehensive fabrication and construction engineering services covering the full scope from design through field erection. Our team includes certified welding engineers, QA/QC specialists, and construction managers who ensure every project meets the highest standards of quality, safety, and code compliance."
      sections={[
        {
          title: "Welding Standards",
          description: "Expert welding engineering and procedure development per international welding codes.",
          items: [
            "Welding Procedure Specification (WPS) development",
            "Procedure Qualification Records (PQR) per ASME IX",
            "Welder performance qualification (WPQ)",
            "AWS D1.1 structural welding compliance",
            "Special process welding (GTAW, SMAW, FCAW, SAW)",
            "Weld map development and tracking",
          ],
        },
        {
          title: "Structural Fabrication",
          description: "Complete structural steel fabrication engineering from detailing through erection.",
          items: [
            "Structural steel detailing and shop drawings",
            "Connection design and analysis",
            "Fabrication sequence planning",
            "Fit-up and dimensional control",
            "Surface preparation and coating specifications",
            "Heavy lift planning and rigging engineering",
          ],
        },
        {
          title: "QA/QC Processes",
          description: "Comprehensive quality management systems ensuring compliance with project specifications.",
          items: [
            "Inspection and Test Plans (ITP) development",
            "Non-Destructive Testing (RT, UT, MT, PT)",
            "Dimensional inspection and survey",
            "Material traceability and certification",
            "Non-conformance reporting and resolution",
            "Final documentation and data book compilation",
          ],
        },
        {
          title: "Pressure Equipment Fabrication",
          description: "ASME code fabrication of pressure vessels, heat exchangers, and process equipment.",
          items: [
            "ASME U-stamp and R-stamp fabrication",
            "Pressure vessel fabrication per BPVC VIII",
            "Heat exchanger manufacturing per TEMA",
            "Hydrostatic and pneumatic testing",
            "Post-Weld Heat Treatment (PWHT)",
          ],
        },
        {
          title: "Construction Management",
          description: "On-site construction management and supervision for industrial projects.",
          items: [
            "Construction planning and scheduling",
            "Field engineering and technical support",
            "Progress tracking and reporting",
            "Subcontractor management and coordination",
            "Safety management and incident prevention",
          ],
        },
        {
          title: "Coating & Corrosion Protection",
          description: "Surface protection engineering for long-term asset integrity.",
          items: [
            "Coating system selection per NACE/SSPC",
            "Surface preparation standards (SSPC-SP series)",
            "Coating application inspection",
            "Cathodic protection design",
            "Corrosion monitoring and assessment",
          ],
        },
      ]}
      relatedServices={[
        { name: "Mechanical Design", href: "/services/mechanical-design" },
        { name: "Mechanical Engineering", href: "/services/mechanical-engineering" },
        { name: "Engineering References", href: "/references" },
      ]}
    />
  );
}

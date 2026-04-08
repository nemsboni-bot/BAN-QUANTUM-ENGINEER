"use client";

import { PenTool } from "lucide-react";
import { ServicePage } from "@/components/sections/service-page";

export default function MechanicalDesignPage() {
  return (
    <ServicePage
      title="Mechanical Design"
      subtitle="Precision mechanical design and engineering analysis services compliant with international standards."
      icon={PenTool}
      overview="Our mechanical design team delivers high-quality engineering design solutions using state-of-the-art CAD/CAE tools and proven design methodologies. From conceptual design through detailed engineering and fabrication drawings, we ensure every design meets functional requirements while complying with applicable codes and standards including ASME, API, and ISO."
      sections={[
        {
          title: "CAD Design Concepts",
          description: "Advanced 3D modeling and 2D drafting services for industrial equipment and components.",
          items: [
            "3D parametric solid modeling (SolidWorks, Inventor, CATIA)",
            "2D engineering drawings per ASME Y14.5",
            "Assembly modeling and interference checking",
            "Sheet metal design and flat pattern development",
            "Piping and plant layout design",
            "Fabrication and shop drawings",
          ],
        },
        {
          title: "Stress Analysis",
          description: "Comprehensive structural and thermal analysis ensuring design integrity and code compliance.",
          items: [
            "Finite Element Analysis (FEA) — linear and nonlinear",
            "Pressure vessel stress analysis per ASME BPVC",
            "Piping flexibility analysis per ASME B31.3",
            "Fatigue life assessment",
            "Thermal stress and transient analysis",
            "Seismic and wind load analysis",
          ],
        },
        {
          title: "Design Standards",
          description: "Engineering design compliant with international codes, standards, and client specifications.",
          items: [
            "ASME Boiler and Pressure Vessel Code (BPVC)",
            "ASME B31 series for piping design",
            "ASME Y14.5 for GD&T",
            "API standards for petroleum equipment",
            "EN/ISO standards for European projects",
            "NACE standards for corrosion engineering",
          ],
        },
        {
          title: "Product Development",
          description: "End-to-end product development from concept to prototype and production.",
          items: [
            "Conceptual design and feasibility studies",
            "Design for Manufacturability (DFM)",
            "Design for Assembly (DFA)",
            "Prototype development support",
            "Design verification and validation",
          ],
        },
        {
          title: "Computational Fluid Dynamics",
          description: "CFD analysis for flow optimization and thermal management in process equipment.",
          items: [
            "Internal and external flow simulation",
            "Heat transfer and conjugate analysis",
            "Mixing and multiphase flow modeling",
            "Erosion and corrosion prediction",
            "Ventilation and HVAC system analysis",
          ],
        },
        {
          title: "Documentation",
          description: "Comprehensive engineering documentation packages for manufacturing and regulatory compliance.",
          items: [
            "Design basis documents",
            "Calculation reports and design reviews",
            "Bill of Materials (BOM)",
            "Material Requisitions (MR)",
            "Manufacturing Data Reports (MDR)",
          ],
        },
      ]}
      relatedServices={[
        { name: "Mechanical Engineering", href: "/services/mechanical-engineering" },
        { name: "Fabrication & Construction", href: "/services/fabrication" },
        { name: "Engineering References", href: "/references" },
      ]}
    />
  );
}

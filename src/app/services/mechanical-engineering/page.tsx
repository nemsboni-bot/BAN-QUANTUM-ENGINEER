"use client";

import { Cog } from "lucide-react";
import { ServicePage } from "@/components/sections/service-page";

export default function MechanicalEngineeringPage() {
  return (
    <ServicePage
      title="Mechanical Engineering"
      subtitle="Expert mechanical engineering services for equipment reliability, maintenance optimization, and lifecycle management."
      icon={Cog}
      overview="BAN Quantum Engineering's mechanical engineering division provides comprehensive solutions for industrial equipment management, from initial specification through decommissioning. Our engineers combine deep technical knowledge with practical field experience to optimize equipment performance, reduce downtime, and extend asset lifecycles across the energy and industrial sectors."
      sections={[
        {
          title: "Core Principles",
          description: "Fundamental engineering principles applied to industrial equipment and system optimization.",
          items: [
            "Thermodynamics and heat transfer analysis",
            "Fluid mechanics and hydraulic systems",
            "Vibration analysis and dynamic balancing",
            "Materials science and metallurgy",
            "Machine design and kinematics",
            "Energy efficiency optimization",
          ],
        },
        {
          title: "Maintenance Systems (PMS/CMMS)",
          description: "Implementation and optimization of computerized maintenance management systems for asset reliability.",
          items: [
            "Preventive Maintenance System (PMS) development",
            "CMMS implementation and configuration",
            "Condition-based maintenance strategies",
            "Predictive maintenance using vibration and oil analysis",
            "Reliability-centered maintenance (RCM)",
            "Spare parts inventory optimization",
          ],
        },
        {
          title: "Equipment Lifecycle",
          description: "Full lifecycle management from specification and procurement through to decommissioning.",
          items: [
            "Equipment specification and selection",
            "Vendor evaluation and procurement support",
            "Installation and commissioning supervision",
            "Performance monitoring and optimization",
            "Overhaul planning and execution",
            "Fitness-for-service assessment and life extension",
          ],
        },
        {
          title: "Rotating Equipment",
          description: "Specialized expertise in pumps, compressors, turbines, and other rotating machinery.",
          items: [
            "Centrifugal and reciprocating pump engineering",
            "Compressor performance analysis",
            "Bearing and seal systems",
            "Alignment and balancing procedures",
            "Condition monitoring programs",
          ],
        },
        {
          title: "Static Equipment",
          description: "Engineering support for pressure vessels, heat exchangers, and static process equipment.",
          items: [
            "Pressure vessel inspection and assessment",
            "Heat exchanger thermal design and rating",
            "Storage tank integrity management",
            "Corrosion assessment and mitigation",
            "Remaining life calculations per API 579",
          ],
        },
        {
          title: "Reliability Engineering",
          description: "Data-driven reliability improvement programs to maximize equipment availability.",
          items: [
            "Failure Mode and Effects Analysis (FMEA)",
            "Root Cause Analysis (RCA)",
            "Reliability growth tracking",
            "Mean Time Between Failure (MTBF) optimization",
            "Key Performance Indicator (KPI) development",
          ],
        },
      ]}
      relatedServices={[
        { name: "Mechanical Design", href: "/services/mechanical-design" },
        { name: "Fabrication & Construction", href: "/services/fabrication" },
        { name: "Oil & Gas Drilling", href: "/services/oil-and-gas" },
      ]}
    />
  );
}

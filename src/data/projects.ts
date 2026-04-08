export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  scope: string;
  outcome: string;
  image: string;
  year: number;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "offshore-platform-a",
    title: "Offshore Platform Drilling Package",
    category: "Oil & Gas Drilling",
    description: "Complete engineering design and equipment specification for an offshore drilling platform in the Gulf of Mexico. Included rig selection, mud system design, and BOP stack configuration.",
    scope: "Detailed engineering, procurement support, commissioning oversight",
    outcome: "Successfully delivered on schedule with zero safety incidents during 18-month drilling campaign.",
    image: "/images/project-drilling.svg",
    year: 2024,
    tags: ["Offshore", "Drilling", "BOP Systems"],
  },
  {
    id: "geothermal-field-dev",
    title: "Geothermal Field Development",
    category: "Geothermal Drilling",
    description: "Engineering support for a 50MW geothermal power plant development including well design, drilling program, and completion strategy for high-temperature reservoir.",
    scope: "Well engineering, drilling supervision, thermal analysis",
    outcome: "Achieved target production rates with 95% well success rate across 12 production wells.",
    image: "/images/project-geothermal.svg",
    year: 2023,
    tags: ["Geothermal", "Well Design", "Power Generation"],
  },
  {
    id: "process-piping-upgrade",
    title: "Refinery Process Piping Upgrade",
    category: "Mechanical Engineering",
    description: "Complete redesign and upgrade of high-pressure process piping systems in a petroleum refinery, including stress analysis and material selection per ASME B31.3.",
    scope: "Piping design, stress analysis, material specification, construction support",
    outcome: "Reduced maintenance downtime by 40% and extended equipment lifecycle by 15 years.",
    image: "/images/project-piping.svg",
    year: 2024,
    tags: ["Piping", "ASME", "Refinery"],
  },
  {
    id: "pressure-vessel-design",
    title: "Custom Pressure Vessel Design",
    category: "Mechanical Design",
    description: "Designed and engineered a series of custom high-pressure vessels for a chemical processing facility, compliant with ASME BPVC Section VIII Division 1.",
    scope: "Detailed design, FEA analysis, fabrication drawings, QA/QC documentation",
    outcome: "All vessels passed hydrostatic testing and received ASME U-stamp certification on first attempt.",
    image: "/images/project-vessel.svg",
    year: 2023,
    tags: ["Pressure Vessel", "ASME", "FEA"],
  },
  {
    id: "structural-fab-plant",
    title: "Industrial Plant Structural Fabrication",
    category: "Fabrication & Construction",
    description: "Managed structural steel fabrication and erection for a new industrial processing plant, including over 2,000 tons of structural steel.",
    scope: "Fabrication engineering, welding procedures, QA/QC, site erection supervision",
    outcome: "Completed 2 weeks ahead of schedule with all welds passing NDT examination.",
    image: "/images/project-fabrication.svg",
    year: 2024,
    tags: ["Structural Steel", "Welding", "QA/QC"],
  },
  {
    id: "rotating-equipment",
    title: "Rotating Equipment Overhaul Program",
    category: "Mechanical Engineering",
    description: "Developed and implemented a comprehensive rotating equipment maintenance and overhaul program for a gas compression facility.",
    scope: "Condition assessment, maintenance planning, spare parts optimization, training",
    outcome: "Improved equipment availability from 88% to 97% and reduced maintenance costs by 30%.",
    image: "/images/project-rotating.svg",
    year: 2023,
    tags: ["Rotating Equipment", "Maintenance", "Reliability"],
  },
];

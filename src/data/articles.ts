export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "understanding-bop-systems",
    title: "Understanding Blowout Prevention Systems in Modern Drilling",
    category: "Oil & Gas Drilling",
    excerpt: "A comprehensive guide to BOP systems, their components, testing requirements, and critical role in well control operations.",
    content: "Blowout Prevention Systems (BOP) are the primary safety barrier in drilling operations. This guide covers ram-type preventers, annular preventers, BOP stack configurations, and testing requirements per API RP 53. Modern BOP systems incorporate redundant sealing elements, automated control systems, and real-time monitoring capabilities to ensure well integrity throughout drilling operations.",
    author: "BAN Engineering Team",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["BOP", "Well Control", "Safety"],
  },
  {
    id: "geothermal-vs-conventional",
    title: "Geothermal vs. Conventional Drilling: Key Engineering Differences",
    category: "Geothermal Drilling",
    excerpt: "Explore the technical distinctions between geothermal and conventional oil & gas drilling, from equipment to formation challenges.",
    content: "Geothermal drilling presents unique challenges including extreme temperatures (often exceeding 300°C), highly corrosive fluids, and hard crystalline rock formations. Unlike conventional drilling, geothermal wells require specialized high-temperature cements, heat-resistant elastomers, and modified drilling fluid systems. This article examines the critical engineering adaptations required for successful geothermal well construction.",
    author: "BAN Engineering Team",
    date: "2024-11-20",
    readTime: "10 min read",
    tags: ["Geothermal", "Drilling", "Comparison"],
  },
  {
    id: "pressure-vessel-design-guide",
    title: "ASME Pressure Vessel Design: A Practical Guide",
    category: "Mechanical Design",
    excerpt: "Step-by-step guide to designing pressure vessels per ASME BPVC Section VIII Division 1, including material selection and stress analysis.",
    content: "Pressure vessel design requires a systematic approach starting with defining the design conditions (pressure, temperature, corrosion allowance), selecting appropriate materials per ASME Section II, performing thickness calculations for shells, heads, and nozzles, and verifying results through finite element analysis when required. This guide walks through each step with practical examples and references to applicable code sections.",
    author: "BAN Engineering Team",
    date: "2024-10-05",
    readTime: "12 min read",
    tags: ["ASME", "Pressure Vessels", "Design"],
  },
  {
    id: "welding-qa-qc",
    title: "Welding QA/QC: Ensuring Structural Integrity in Fabrication",
    category: "Fabrication & Construction",
    excerpt: "Essential QA/QC practices for structural welding projects, from WPS qualification to NDT examination methods.",
    content: "Quality assurance in welding fabrication begins with proper Welding Procedure Specifications (WPS) qualified per AWS D1.1 or ASME Section IX. This article covers the complete QA/QC framework including welder qualification testing, in-process inspection checkpoints, non-destructive testing methods (RT, UT, MT, PT), and documentation requirements for code-compliant fabrication projects.",
    author: "BAN Engineering Team",
    date: "2024-09-18",
    readTime: "9 min read",
    tags: ["Welding", "QA/QC", "NDT"],
  },
  {
    id: "cmms-implementation",
    title: "Implementing CMMS for Effective Equipment Maintenance",
    category: "Mechanical Engineering",
    excerpt: "How to successfully implement a Computerized Maintenance Management System to optimize equipment reliability and reduce costs.",
    content: "A well-implemented CMMS transforms maintenance operations from reactive to proactive. This guide covers system selection criteria, data migration strategies, work order management setup, preventive maintenance scheduling, spare parts inventory optimization, and KPI tracking. Learn how to leverage CMMS to improve equipment availability, extend asset life, and reduce overall maintenance expenditure.",
    author: "BAN Engineering Team",
    date: "2024-08-22",
    readTime: "7 min read",
    tags: ["CMMS", "Maintenance", "Reliability"],
  },
  {
    id: "cad-best-practices",
    title: "CAD Design Best Practices for Mechanical Engineers",
    category: "Mechanical Design",
    excerpt: "Industry-proven strategies for creating efficient, accurate, and standards-compliant CAD models and engineering drawings.",
    content: "Effective CAD design goes beyond software proficiency — it requires a systematic approach to modeling, documentation, and design intent communication. This article covers parametric modeling strategies, assembly management techniques, drawing standards per ASME Y14.5, tolerance stack-up analysis, and revision control best practices that improve collaboration and reduce costly design errors.",
    author: "BAN Engineering Team",
    date: "2024-07-30",
    readTime: "6 min read",
    tags: ["CAD", "Design", "Standards"],
  },
];

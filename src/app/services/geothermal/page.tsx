"use client";

import { Flame } from "lucide-react";
import { ServicePage } from "@/components/sections/service-page";

export default function GeothermalPage() {
  return (
    <ServicePage
      title="Geothermal Drilling"
      subtitle="Specialized drilling engineering for sustainable geothermal energy development."
      icon={Flame}
      overview="Geothermal drilling presents unique engineering challenges that demand specialized expertise. BAN Quantum Engineering brings cross-disciplinary experience from both oil & gas and geothermal sectors to deliver well designs optimized for the extreme temperatures, corrosive environments, and hard rock formations characteristic of geothermal reservoirs. Our approach combines proven conventional drilling techniques with innovative solutions tailored for geothermal applications."
      sections={[
        {
          title: "Drilling Techniques",
          description: "Advanced drilling methods adapted for geothermal reservoir conditions and hard rock formations.",
          items: [
            "Rotary drilling with high-temperature mud systems",
            "Air/foam drilling for lost circulation zones",
            "Aerated drilling techniques",
            "Directional drilling in crystalline rock",
            "Managed pressure drilling (MPD)",
            "Underbalanced drilling applications",
          ],
        },
        {
          title: "Differences vs. Oil & Gas",
          description: "Critical engineering adaptations required for geothermal well construction compared to conventional drilling.",
          items: [
            "High-temperature cements and casing design (up to 350°C)",
            "Heat-resistant elastomers for downhole tools",
            "Modified drilling fluids for elevated temperatures",
            "Larger diameter wellbores for production capacity",
            "Corrosion-resistant alloy selection for acidic fluids",
            "Thermal stress analysis for casing strings",
          ],
        },
        {
          title: "Case Applications",
          description: "Proven track record across diverse geothermal resource types and geological settings.",
          items: [
            "High-enthalpy volcanic-hosted reservoirs",
            "Enhanced Geothermal Systems (EGS)",
            "Sedimentary basin geothermal projects",
            "Deep geothermal heat mining",
            "Binary cycle power plant well design",
            "Direct-use heating system wells",
          ],
        },
        {
          title: "Reservoir Engineering",
          description: "Comprehensive subsurface analysis and reservoir characterization for optimal well placement.",
          items: [
            "Temperature and pressure gradient analysis",
            "Reservoir simulation and modeling",
            "Well testing and productivity assessment",
            "Scaling and corrosion prediction",
            "Production capacity estimation",
          ],
        },
        {
          title: "Environmental Considerations",
          description: "Environmentally responsible drilling practices for sustainable energy development.",
          items: [
            "Emission monitoring and mitigation",
            "Groundwater protection measures",
            "Induced seismicity risk assessment",
            "Waste management and disposal",
            "Land use optimization and impact minimization",
          ],
        },
        {
          title: "Project Support",
          description: "End-to-end project support from exploration through production operation.",
          items: [
            "Feasibility studies and resource assessment",
            "Drilling cost estimation and budgeting",
            "Procurement and supply chain management",
            "Drilling supervision and wellsite geology",
            "Performance reporting and optimization",
          ],
        },
      ]}
      relatedServices={[
        { name: "Oil & Gas Drilling", href: "/services/oil-and-gas" },
        { name: "Mechanical Engineering", href: "/services/mechanical-engineering" },
        { name: "Mechanical Design", href: "/services/mechanical-design" },
      ]}
    />
  );
}

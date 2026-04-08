import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geothermal Drilling Services",
  description:
    "Specialized geothermal drilling engineering for sustainable energy projects, including well design for high-temperature reservoirs and EGS.",
};

export default function GeothermalLayout({ children }: { children: React.ReactNode }) {
  return children;
}

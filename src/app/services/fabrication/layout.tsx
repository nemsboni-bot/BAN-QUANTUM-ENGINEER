import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fabrication & Construction Services",
  description:
    "Industrial fabrication and construction engineering including welding standards, structural steel, QA/QC management, and ASME code fabrication.",
};

export default function FabricationLayout({ children }: { children: React.ReactNode }) {
  return children;
}

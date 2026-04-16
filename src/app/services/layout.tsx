import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Services",
  description:
    "BAN Quantum Engineering services: geothermal drilling, mechanical engineering, mechanical design, and fabrication & construction.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

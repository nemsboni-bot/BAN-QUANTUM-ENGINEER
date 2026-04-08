import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description:
    "Explore BAN Quantum Engineering's portfolio of successfully delivered projects in drilling, mechanical engineering, and fabrication.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

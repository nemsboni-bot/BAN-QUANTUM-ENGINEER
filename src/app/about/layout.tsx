import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BAN Quantum Engineering — our story, mission, vision, and core expertise in drilling, mechanical engineering, and fabrication.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

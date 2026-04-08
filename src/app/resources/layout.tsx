import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Knowledge Hub",
  description:
    "Technical articles, engineering guides, and industry insights from BAN Quantum Engineering's team of experienced engineers.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

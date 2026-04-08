import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechanical Design Services",
  description:
    "Professional mechanical design services including CAD design, FEA stress analysis, pressure vessel engineering, and standards compliance.",
};

export default function MechanicalDesignLayout({ children }: { children: React.ReactNode }) {
  return children;
}

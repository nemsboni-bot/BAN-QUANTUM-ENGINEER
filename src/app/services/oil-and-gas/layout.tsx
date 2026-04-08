import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oil & Gas Drilling Services",
  description:
    "Comprehensive oil and gas drilling engineering services including well design, rig selection, mud systems, BOP management, and well control planning.",
};

export default function OilAndGasLayout({ children }: { children: React.ReactNode }) {
  return children;
}

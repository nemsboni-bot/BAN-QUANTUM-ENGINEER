import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering References & Standards",
  description:
    "Searchable library of API, ASME, ASTM, and ISO engineering standards and references for oil & gas, mechanical, and fabrication engineering.",
};

export default function ReferencesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechanical Engineering Services",
  description:
    "Expert mechanical engineering services including equipment lifecycle management, CMMS implementation, reliability engineering, and rotating equipment.",
};

export default function MechanicalEngineeringLayout({ children }: { children: React.ReactNode }) {
  return children;
}

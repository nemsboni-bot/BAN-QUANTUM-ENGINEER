import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BAN Quantum Engineering for expert engineering consultation, project inquiries, and support.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

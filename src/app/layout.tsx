import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BAN Quantum Engineering | Engineering Solutions Beyond Boundaries",
    template: "%s | BAN Quantum Engineering",
  },
  description:
    "BAN Quantum Engineering delivers expert solutions in oil & gas drilling, geothermal energy, mechanical engineering, design, fabrication, and construction.",
  keywords: [
    "engineering",
    "oil and gas drilling",
    "geothermal drilling",
    "mechanical engineering",
    "mechanical design",
    "fabrication",
    "construction",
    "engineering standards",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

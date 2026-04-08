"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ExternalLink, Share2, Link2 } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Oil & Gas Drilling", href: "/services/oil-and-gas" },
    { name: "Geothermal Drilling", href: "/services/geothermal" },
    { name: "Mechanical Engineering", href: "/services/mechanical-engineering" },
    { name: "Mechanical Design", href: "/services/mechanical-design" },
    { name: "Fabrication & Construction", href: "/services/fabrication" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resources", href: "/resources" },
    { name: "References", href: "/references" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Link2, href: "#" },
  { name: "Social", icon: Share2, href: "#" },
  { name: "External", icon: ExternalLink, href: "#" },
  { name: "Website", icon: Globe, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BQ</span>
              </div>
              <div>
                <span className="font-bold text-lg text-foreground">BAN Quantum</span>
                <span className="block text-xs text-steel -mt-1">Engineering</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-steel leading-relaxed">
              Engineering solutions beyond boundaries. Delivering excellence in drilling,
              mechanical engineering, and fabrication services worldwide.
            </p>
            <div className="mt-4 space-y-2">
              <a href="mailto:info@banquantum.com" className="flex items-center gap-2 text-sm text-steel hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                info@banquantum.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-steel hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2 text-sm text-steel">
                <MapPin className="w-4 h-4 shrink-0" />
                Houston, Texas, USA
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-background border border-border text-steel hover:text-accent hover:border-accent transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-steel hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-steel hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-sm text-steel mb-4">
              Subscribe to our newsletter for engineering insights and company updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-steel-light"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-dark transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-steel">
            &copy; {new Date().getFullYear()} BAN Quantum Engineering. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-steel hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-steel hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

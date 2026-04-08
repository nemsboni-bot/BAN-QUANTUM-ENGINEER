"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-surface to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
            <p className="mt-4 text-lg text-steel max-w-2xl">
              Ready to discuss your engineering project? Get in touch with our team for expert
              consultation and support.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-foreground">Message Sent!</h2>
                <p className="mt-2 text-steel">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
                  }}
                  className="mt-6 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="oil-gas">Oil & Gas Drilling</option>
                      <option value="geothermal">Geothermal Drilling</option>
                      <option value="mechanical-eng">Mechanical Engineering</option>
                      <option value="mechanical-design">Mechanical Design</option>
                      <option value="fabrication">Fabrication & Construction</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-steel-light focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Describe your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card hover={false}>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:nemsboni@gmail.com"
                  className="flex items-start gap-3 text-steel hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm">nemsboni@gmail.com</p>
                  </div>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-start gap-3 text-steel hover:text-accent transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm">+1 (234) 567-890</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-steel">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm">
                      1234 Energy Corridor<br />
                      Houston, TX 77079<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-steel">
                  <Clock className="w-5 h-5 mt-0.5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Business Hours</p>
                    <p className="text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map Placeholder */}
            <Card hover={false} className="p-0 overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-br from-surface-dark to-surface flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-accent/40 mx-auto mb-2" />
                  <p className="text-sm text-steel">Houston, TX</p>
                  <p className="text-xs text-steel-light mt-1">Interactive map integration ready</p>
                </div>
              </div>
            </Card>

            <Card hover={false} className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
              <h3 className="text-lg font-semibold text-foreground">Emergency Support</h3>
              <p className="mt-2 text-sm text-steel leading-relaxed">
                For urgent project support or critical engineering consultations, our emergency
                line is available 24/7.
              </p>
              <a
                href="tel:+1234567899"
                className="mt-3 inline-flex items-center gap-2 text-accent font-medium text-sm hover:text-accent-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-899
              </a>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

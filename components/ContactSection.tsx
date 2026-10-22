"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Send, Github, Linkedin, CheckCircle2, Loader2, MapPin, FileDown } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/lib/data";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time Software Engineering Opportunity",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [submittedName, setSubmittedName] = useState("");

  const inquiryTypes = [
    "Full-Time Engineering Opportunity",
    "Contract / Web Application Project",
    "Data Analysis / Statistical Modeling",
    "Technical Training & Workshop",
    "General Inquiry",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setSubmittedName(formData.name || "Colleague");
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: inquiryTypes[0],
        message: "",
      });

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#7851A9", "#9b6dff", "#ffffff", "#d5c2ff"],
        });
      } catch {
        // no-op
      }
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--bg-primary)] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-[2.5rem] bg-[var(--bg-secondary)] border border-[var(--glass-border)] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#7851A9]/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            {/* Left Panel: Contact Details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#9b6dff] uppercase block mb-3"
                >
                  Direct Inquiries
                </motion.span>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-[var(--text-primary)] leading-tight">
                  Let&apos;s Build
                  <br />
                  <span className="bg-gradient-to-r from-[#7851A9] to-[#9b6dff] bg-clip-text text-transparent">
                    Something Impactful
                  </span>
                </h2>

                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8">
                  Currently seeking software engineering, full-stack, data analysis, or technical training leadership roles. Open to remote worldwide, hybrid, and local opportunities.
                </p>

                {/* Contact Methods */}
                <div className="flex flex-col gap-5 mb-8">
                  {/* Email */}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-4 group p-3 -mx-3 rounded-2xl hover:bg-[var(--bg-primary)] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] text-[#7851A9] dark:text-[#9b6dff] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                        Email Address
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[#9b6dff] transition-colors break-all">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center gap-4 group p-3 -mx-3 rounded-2xl hover:bg-[var(--bg-primary)] transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] text-[#7851A9] dark:text-[#9b6dff] flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                        Direct Phone / WhatsApp
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[#9b6dff] transition-colors">
                        {PERSONAL_INFO.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-3 -mx-3 rounded-2xl">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent-light)] text-[#7851A9] dark:text-[#9b6dff] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                        Location
                      </span>
                      <span className="text-sm font-semibold text-[var(--text-primary)]">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CV Download & Social Links */}
              <div className="pt-6 border-t border-[var(--glass-border)] flex flex-col gap-4">
                <a
                  href={PERSONAL_INFO.cvPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Agim_Uchechukwu_Chigozie_CV.pdf"
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[var(--bg-primary)] border border-[#7851A9]/40 hover:border-[#7851A9] text-[#7851A9] dark:text-[#9b6dff] font-semibold text-sm transition-all hover:bg-[var(--accent-light)]"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold text-[var(--text-secondary)]">
                    Social &amp; Professional Profiles:
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="w-10 h-10 rounded-full border border-[var(--glass-border)] bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[#7851A9] hover:text-white hover:border-[#7851A9] transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="w-10 h-10 rounded-full border border-[var(--glass-border)] bg-[var(--bg-primary)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: Interactive Form */}
            <div className="lg:col-span-7 bg-[var(--bg-primary)] p-6 sm:p-8 rounded-3xl border border-[var(--glass-border)] shadow-md">
              {status === "success" ? (
                <div className="text-center py-12 px-4 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">
                    Thank you, {submittedName}!
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Your inquiry has been received. I will review your project details or job specification and reply promptly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7851A9] to-[#9b6dff] text-white text-sm font-semibold shadow-xs hover:opacity-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5"
                      >
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Adebayo"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-gray-400 focus:outline-hidden focus:border-[#9b6dff] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-gray-400 focus:outline-hidden focus:border-[#9b6dff] transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5"
                    >
                      Inquiry Focus
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-primary)] focus:outline-hidden focus:border-[#9b6dff] transition-colors text-sm"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5"
                    >
                      Message / Project Scope
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding your team, timeline, tech stack, or objectives..."
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-gray-400 focus:outline-hidden focus:border-[#9b6dff] transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#7851A9] to-[#9b6dff] text-white font-bold text-sm tracking-wide shadow-md shadow-[#7851A9]/20 hover:shadow-lg hover:shadow-[#7851A9]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

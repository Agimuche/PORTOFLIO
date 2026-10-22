"use client";

import { motion } from "motion/react";
import { GraduationCap, ShieldCheck, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EDUCATION, CERTIFICATIONS, AWARDS } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 md:py-32 bg-[var(--bg-secondary)] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#9b6dff] uppercase block mb-3"
          >
            Academic Foundation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Education &amp; Credentials
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#7851A9] to-[#9b6dff] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Degrees Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="w-5 h-5 text-[#9b6dff]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              University Degrees
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-[var(--bg-primary)] border border-[var(--glass-border)] shadow-xs hover:border-[#9b6dff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-[#9b6dff] uppercase tracking-wider">
                      {edu.status}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-[var(--text-primary)] mb-1.5">
                    {edu.degree}
                  </h4>

                  <div className="text-sm font-medium text-[var(--text-secondary)] mb-4 flex items-center gap-1.5">
                    <span>{edu.institution}</span>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="flex items-center gap-1 text-xs">
                      <MapPin className="w-3 h-3 text-[#7851A9]" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.highlights && (
                    <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#9b6dff] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Bootcamps Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <ShieldCheck className="w-5 h-5 text-[#9b6dff]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Certifications &amp; Bootcamps
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--glass-border)] shadow-xs hover:border-[#9b6dff]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-2.5">
                    <span className="text-[#9b6dff] font-semibold">{cert.category}</span>
                    <span>{cert.period}</span>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[var(--text-primary)] mb-2 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards & Leadership Honors */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-5 h-5 text-[#9b6dff]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Leadership &amp; Early Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[var(--bg-primary)] border border-[var(--glass-border)] shadow-xs"
              >
                <div className="text-xs text-[#9b6dff] font-semibold mb-2">
                  {award.period}
                </div>
                <h4 className="font-bold text-base text-[var(--text-primary)] mb-1">
                  {award.title}
                </h4>
                <div className="text-xs font-medium text-[var(--text-secondary)] mb-3">
                  {award.organization}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

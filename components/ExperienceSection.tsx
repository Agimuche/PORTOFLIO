"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Building2, Calendar, MapPin, ChevronRight } from "lucide-react";
import { EXPERIENCES, ExperienceItem } from "@/lib/data";

export default function ExperienceSection() {
  const [filter, setFilter] = useState<"All" | "Engineering" | "Leadership & Training" | "Data & Science">("All");

  const filteredExperiences =
    filter === "All"
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.type === filter);

  const tabs: Array<"All" | "Engineering" | "Leadership & Training" | "Data & Science"> = [
    "All",
    "Engineering",
    "Leadership & Training",
    "Data & Science",
  ];

  return (
    <section id="experience" className="py-24 md:py-32 bg-[var(--bg-primary)] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#9b6dff] uppercase block mb-3"
          >
            Career Trajectory
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#7851A9] to-[#9b6dff] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] max-w-2xl mx-auto mb-12">
          {tabs.map((tab) => {
            const isActive = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-[#7851A9] to-[#9b6dff] text-white shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Experience Timeline Grid */}
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp: ExperienceItem, idx: number) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="p-6 sm:p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] shadow-xs hover:border-[#9b6dff]/40 transition-all group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5">
                  <div>
                    {/* Role title */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <Briefcase className="w-4 h-4 text-[#9b6dff] shrink-0" />
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[#9b6dff] transition-colors">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Metadata line with unboxed typographic separators */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1 text-[var(--text-primary)] font-medium">
                        <Building2 className="w-3.5 h-3.5 text-[#7851A9]" />
                        {exp.company}
                      </span>
                      <span aria-hidden="true" className="opacity-40">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                        {exp.location}
                      </span>
                      <span aria-hidden="true" className="opacity-40">·</span>
                      <span className="text-[#9b6dff] font-medium">{exp.type}</span>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--text-primary)] bg-[var(--bg-primary)] px-3.5 py-1.5 rounded-full border border-[var(--glass-border)] self-start whitespace-nowrap shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-[#9b6dff]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bulleted Achievements */}
                <ul className="space-y-2.5 mb-6 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-[#9b6dff] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies / Focus areas unboxed */}
                {exp.technologies && (
                  <div className="pt-4 border-t border-[var(--glass-border)] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Core Focus:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tech} className="hover:text-[#9b6dff] transition-colors">
                        {tech}
                        {tIdx < (exp.technologies?.length ?? 0) - 1 && (
                          <span className="text-[var(--text-secondary)]/40 ml-2">/</span>
                        )}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

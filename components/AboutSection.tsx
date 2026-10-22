"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Award, Code2, BarChart3, Palette, GraduationCap, FileDown, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO, SKILL_CATEGORIES } from "@/lib/data";

export default function AboutSection() {
  const iconMap = [
    <Code2 key="code" className="w-5 h-5 text-[#7851A9]" />,
    <BarChart3 key="chart" className="w-5 h-5 text-[#9b6dff]" />,
    <Palette key="design" className="w-5 h-5 text-[#7851A9]" />,
    <GraduationCap key="teach" className="w-5 h-5 text-[#9b6dff]" />,
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Decorative ambient spots */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#7851A9]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#9b6dff]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#9b6dff] uppercase block mb-3"
          >
            Profile &amp; Discipline
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#7851A9] to-[#9b6dff] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Profile Card Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#7851A9] to-[#9b6dff] opacity-40 blur-lg group-hover:opacity-70 transition duration-500" />

              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-[var(--glass-border)] shadow-2xl bg-[var(--bg-primary)]">
                <Image
                  src="/profile.jpg"
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -bottom-5 -right-4 bg-gradient-to-r from-[#7851A9] to-[#9b6dff] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white/20">
                <div className="p-2 rounded-xl bg-white/15">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold leading-none">
                    3+
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-white/90 leading-tight mt-1">
                    Years of Engineering &amp; Data
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action below card */}
            <div className="mt-10 w-full max-w-sm flex flex-col gap-2.5">
              <a
                href={PERSONAL_INFO.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                download="Agim_Uchechukwu_Chigozie_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[var(--bg-primary)] border border-[#7851A9]/40 hover:border-[#7851A9] text-[#7851A9] dark:text-[#9b6dff] font-semibold text-sm transition-all hover:bg-[var(--accent-light)]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Complete CV (PDF)</span>
              </a>

              <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] px-2 pt-1">
                <span>Location: Calabar, Nigeria</span>
                <span className="text-emerald-500 font-medium">Available for Hire</span>
              </div>
            </div>
          </motion.div>

          {/* Text & Narrative Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold leading-snug mb-5 text-[var(--text-primary)]">
              {PERSONAL_INFO.tagline}
            </h3>

            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed mb-6">
              {PERSONAL_INFO.summary}
            </p>

            {/* Core Competencies from CV */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9b6dff] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Full-Stack Application Delivery:</strong> Proficient in React, Next.js, Node.js, Python, FastAPI, and responsive mobile architecture.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9b6dff] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Technical Leadership &amp; Governance:</strong> Leads curriculum and governance as Head of Training &amp; Development for 20 product teams at Circo Digital Academy.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#9b6dff] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Quantitative &amp; Engineering Rigor:</strong> Dual-degree STEM foundation holding a B.Sc. in Software Engineering (graduated &amp; certified June 20, 2026) alongside a B.Sc. in Environmental Health Science.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical & Professional Skills Matrix */}
        <div className="pt-8 border-t border-[var(--glass-border)]">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.2em] text-[#9b6dff] uppercase block mb-2">
              Toolkit
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">Technical &amp; Analytical Competencies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.title}
                className="p-6 rounded-3xl bg-[var(--bg-primary)] border border-[var(--glass-border)] shadow-xs hover:border-[#9b6dff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[var(--accent-light)] flex items-center justify-center mb-4">
                    {iconMap[idx % iconMap.length]}
                  </div>
                  <h4 className="font-bold text-base text-[var(--text-primary)] mb-1">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mb-5">
                    {cat.description}
                  </p>
                </div>

                {/* Clean unboxed skill list per Zero-Pill discipline */}
                <div className="pt-4 border-t border-[var(--glass-border)] flex flex-wrap gap-x-2 gap-y-1 text-xs text-[var(--text-secondary)]">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={skill} className="hover:text-[#9b6dff] transition-colors">
                      {skill}
                      {sIdx < cat.skills.length - 1 && <span className="text-[var(--text-secondary)]/40 ml-2">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

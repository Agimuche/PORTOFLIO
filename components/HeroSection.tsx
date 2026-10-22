"use client";

import { motion } from "motion/react";
import { ArrowDown, FileDown, FolderGit2, Mail, MapPin } from "lucide-react";
import HeroCanvas from "./HeroCanvas";
import { PERSONAL_INFO } from "@/lib/data";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 85;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 overflow-hidden"
    >
      {/* 3D WebGL Background Canvas */}
      <HeroCanvas />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Name & Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--accent-light)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-xs"
        >
          <span className="text-[#9b6dff] font-bold">{PERSONAL_INFO.name}</span>
          <span className="text-[var(--text-secondary)] opacity-40">·</span>
          <span className="flex items-center gap-1 text-[var(--text-secondary)] text-xs">
            <MapPin className="w-3 h-3 text-[#7851A9]" />
            <span>Calabar, Nigeria</span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-balance"
        >
          Full-Stack{" "}
          <span className="bg-gradient-to-r from-[#7851A9] via-[#9b6dff] to-[#c4a6ff] bg-clip-text text-transparent">
            Software Engineer
          </span>
          , Data Analyst &amp; Educator
        </motion.h1>

        {/* Subtitle / Description based on CV Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-10 text-balance"
        >
          Multidisciplinary engineer bridging scalable web and mobile applications, statistical data analysis, and technical instruction. Currently leading training governance across 20 internship teams and engineering high-impact digital solutions.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full mb-16"
        >
          {/* Download CV (PDF) */}
          <a
            href={PERSONAL_INFO.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            download="Agim_Uchechukwu_Chigozie_CV.pdf"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#7851A9] to-[#9b6dff] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#7851A9]/25 hover:shadow-xl hover:shadow-[#7851A9]/40 hover:-translate-y-0.5 transition-all active:translate-y-0 whitespace-nowrap"
          >
            <FileDown className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </a>

          {/* Explore Projects */}
          <button
            onClick={() => scrollTo("projects")}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] font-semibold text-sm sm:text-base transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Explore Projects</span>
          </button>

          {/* Get in Touch */}
          <button
            onClick={() => scrollTo("contact")}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--accent-light)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-sm sm:text-base transition-all whitespace-nowrap"
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </button>
        </motion.div>

        {/* 4-Column KPI Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-[var(--glass-bg)] backdrop-blur-md border border-[var(--glass-border)] shadow-xs"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#9b6dff] tabular-nums mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-tight">
                {stat.label}
              </span>
              <span className="text-[11px] text-[var(--text-secondary)] mt-0.5 hidden sm:block">
                {stat.detail}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-8 flex flex-col items-center gap-1.5 cursor-pointer z-10"
        onClick={() => scrollTo("about")}
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-1">
          Scroll Down <ArrowDown className="w-3 h-3 text-[#9b6dff]" />
        </span>
      </motion.div>
    </section>
  );
}

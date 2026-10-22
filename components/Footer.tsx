"use client";

import { ArrowUp, Github, Linkedin, FileDown } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 85;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-[var(--bg-primary)] border-t border-[var(--glass-border)] relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Brand */}
        <div className="mb-6 flex flex-col items-center">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-[#7851A9] to-[#9b6dff] bg-clip-text text-transparent">
            {PERSONAL_INFO.shortName}
          </span>
          <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-md">
            Full-Stack Software Engineer · Data Analyst · Educator &amp; STEM Leader
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 text-sm font-medium text-[var(--text-secondary)]">
          <button
            onClick={() => scrollTo("home")}
            className="hover:text-[#9b6dff] transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("about")}
            className="hover:text-[#9b6dff] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("journey")}
            className="hover:text-[#9b6dff] transition-colors"
          >
            Journey
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="hover:text-[#9b6dff] transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="hover:text-[#9b6dff] transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("education")}
            className="hover:text-[#9b6dff] transition-colors"
          >
            Education
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="hover:text-[#9b6dff] transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Actions & Social Icons */}
        <div className="flex items-center gap-3 mb-8">
          <a
            href={PERSONAL_INFO.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            download="Agim_Uchechukwu_Chigozie_CV.pdf"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--glass-border)] text-xs font-semibold text-[var(--text-primary)] hover:border-[#7851A9] hover:text-[#9b6dff] transition-all"
            title="Download CV (PDF)"
          >
            <FileDown className="w-3.5 h-3.5 text-[#9b6dff]" />
            <span>Download CV</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-full border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-white hover:bg-[#7851A9] hover:border-[#7851A9] flex items-center justify-center transition-all"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-full border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] flex items-center justify-center transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="w-9 h-9 rounded-full border border-[var(--glass-border)] text-[var(--text-secondary)] hover:text-white hover:bg-[#9b6dff] hover:border-[#9b6dff] flex items-center justify-center transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[var(--text-secondary)] opacity-80 flex flex-col sm:flex-row items-center gap-1.5">
          <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}.</span>
          <span className="hidden sm:inline">·</span>
          <span>Calabar Municipal, Cross River State, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}

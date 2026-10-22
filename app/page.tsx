"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark =
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark-theme");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark-theme");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Initial Page Entrance Splash */}
      {isLoading && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg-primary)] transition-opacity duration-500"
        >
          <div className="w-12 h-12 rounded-full border-3 border-[var(--bg-secondary)] border-t-[#7851A9] animate-spin" />
          <p className="mt-5 text-xs uppercase tracking-[0.25em] font-semibold text-[var(--text-secondary)]">
            Agim Uchechukwu Chigozie
          </p>
        </div>
      )}

      {/* Floating 3-Zone Navbar */}
      <Navbar currentTheme={theme} onToggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, FileDown, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

interface NavbarProps {
  currentTheme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({ currentTheme, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["home", "about", "experience", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).offsetTop - 85;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl rounded-full border transition-all duration-300 flex items-center justify-between px-6 py-3 mt-4 md:mt-5 ${
          isScrolled
            ? "bg-[var(--glass-bg)] backdrop-blur-xl border-[var(--glass-border)] shadow-lg"
            : "bg-[var(--glass-bg)] backdrop-blur-md border-[var(--glass-border)]"
        }`}
        style={{
          boxShadow: isScrolled
            ? "0 10px 30px -10px rgba(120, 81, 169, 0.15)"
            : "none",
        }}
        aria-label="Main Navigation"
      >
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 group text-xl font-extrabold tracking-tight whitespace-nowrap shrink-0"
        >
          <span className="bg-gradient-to-r from-[#7851A9] to-[#9b6dff] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            {PERSONAL_INFO.shortName}
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-all relative py-1 whitespace-nowrap shrink-0 ${
                  isActive
                    ? "text-[#9b6dff] font-semibold"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#7851A9] to-[#9b6dff] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Zone 3: Actions - CV download, Theme Toggle, Contact */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* Download CV button */}
          <a
            href={PERSONAL_INFO.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            download="Agim_Uchechukwu_Chigozie_CV.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#7851A9]/30 hover:border-[#7851A9] text-[var(--text-primary)] hover:text-[#9b6dff] transition-all whitespace-nowrap shrink-0 hover:bg-[var(--accent-light)]"
            title="Download Agim's Full CV (PDF)"
          >
            <FileDown className="w-3.5 h-3.5 text-[#9b6dff]" />
            <span className="hidden sm:inline">CV / Resume</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
            className="p-2 rounded-full border border-[var(--glass-border)] hover:bg-[var(--accent-light)] text-[var(--text-primary)] transition-transform active:scale-95"
          >
            {currentTheme === "light" ? (
              <Moon className="w-4 h-4 text-[#7851A9]" />
            ) : (
              <Sun className="w-4 h-4 text-[#9b6dff]" />
            )}
          </button>

          {/* Quick Contact CTA button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#7851A9] to-[#9b6dff] text-white hover:opacity-95 shadow-xs transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Hamburger Menu for Mobile / Tablets */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-full border border-[var(--glass-border)] hover:bg-[var(--accent-light)] text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#9b6dff]" />
            ) : (
              <Menu className="w-5 h-5 text-[#7851A9]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-[var(--bg-primary)] border border-[var(--glass-border)] shadow-2xl backdrop-blur-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? "bg-[var(--accent-light)] text-[#9b6dff] font-semibold"
                    : "text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-[var(--glass-border)] flex flex-col gap-2.5">
              <a
                href={PERSONAL_INFO.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                download="Agim_Uchechukwu_Chigozie_CV.pdf"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#7851A9] text-[#7851A9] dark:text-[#9b6dff] text-sm font-semibold"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="text-center py-2.5 rounded-xl bg-gradient-to-r from-[#7851A9] to-[#9b6dff] text-white font-semibold text-sm shadow-md"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

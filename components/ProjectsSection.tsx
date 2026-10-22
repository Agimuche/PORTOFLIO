"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, X, Eye, Building2 } from "lucide-react";
import { PROJECTS, Project, PERSONAL_INFO } from "@/lib/data";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Mobile & Web",
    "AI & SaaS",
    "EdTech & 3D",
    "Hospitality",
    "Healthcare",
    "E-commerce",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            (selectedCategory === "EdTech & 3D" && (p.category.includes("EdTech") || p.category.includes("3D"))) ||
            (selectedCategory === "Mobile & Web" && (p.category.includes("Mobile") || p.category.includes("Frontend")))
        );

  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--bg-secondary)] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#9b6dff] uppercase block mb-3"
          >
            Engineering Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Featured Projects &amp; Systems
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
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--glass-border)] max-w-3xl mx-auto mb-12">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-[#7851A9] to-[#9b6dff] text-white shadow-xs"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col rounded-3xl overflow-hidden bg-[var(--bg-primary)] border border-[var(--glass-border)] shadow-xs hover:shadow-xl hover:border-[#9b6dff]/40 transition-all duration-300"
              >
                {/* Image & Direct Trigger */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-neutral-900 cursor-pointer"
                  onClick={() => setActiveModalProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    referrerPolicy="no-referrer"
                  />

                  {/* Clean gradient overlay on hover */}
                  <div className="absolute inset-0 bg-[#7851A9]/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProject(project);
                      }}
                      className="px-4 py-2 rounded-full bg-white text-[#7851A9] text-xs font-bold flex items-center gap-1.5 hover:scale-105 transition-transform"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Open live demo of ${project.title}`}
                        className="w-10 h-10 rounded-full bg-white text-[#7851A9] flex items-center justify-center hover:scale-110 shadow-lg transition-transform"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed category & company metadata line */}
                    <div className="flex items-center gap-2 text-xs text-[#9b6dff] font-semibold uppercase tracking-wider mb-2">
                      <span>{project.category}</span>
                      {project.company && (
                        <>
                          <span aria-hidden="true" className="opacity-40">·</span>
                          <span className="text-[var(--text-secondary)] normal-case tracking-normal">
                            {project.company}
                          </span>
                        </>
                      )}
                    </div>

                    <h3
                      className="text-xl font-bold mb-2.5 text-[var(--text-primary)] group-hover:text-[#9b6dff] transition-colors cursor-pointer"
                      onClick={() => setActiveModalProject(project)}
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Clean unboxed tags & action triggers */}
                  <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between gap-3 text-xs">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[var(--text-secondary)]">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tag}>
                          {tag}
                          {tIdx < Math.min(project.tags.length, 3) - 1 && (
                            <span className="text-[var(--text-secondary)]/40 ml-2">·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-[#9b6dff] hover:underline whitespace-nowrap shrink-0"
                    >
                      Details &rarr;
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More on GitHub Button */}
        <div className="mt-16 text-center">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#7851A9] text-[#7851A9] dark:text-[#9b6dff] dark:border-[#9b6dff] font-bold text-sm sm:text-base hover:bg-[#7851A9] hover:text-white dark:hover:bg-[#9b6dff] dark:hover:text-black transition-all shadow-xs"
          >
            <span>View More Repositories on GitHub</span>
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal / Lightbox (as requested by portfolio standards) */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-primary)] border border-[var(--glass-border)] shadow-2xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                aria-label="Close project modal"
                className="absolute top-5 right-5 p-2 rounded-full border border-[var(--glass-border)] bg-[var(--bg-secondary)] hover:bg-[var(--accent-light)] text-[var(--text-primary)] transition-all"
              >
                <X className="w-5 h-5 text-[#9b6dff]" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-[var(--glass-border)]">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 650px"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Category & Company */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#9b6dff] font-semibold uppercase tracking-wider mb-2">
                <span>{activeModalProject.category}</span>
                {activeModalProject.company && (
                  <>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="flex items-center gap-1 text-[var(--text-secondary)] normal-case tracking-normal">
                      <Building2 className="w-3 h-3 text-[#7851A9]" />
                      {activeModalProject.company}
                    </span>
                  </>
                )}
                {activeModalProject.role && (
                  <>
                    <span aria-hidden="true" className="opacity-40">·</span>
                    <span className="text-[var(--text-secondary)] normal-case tracking-normal">
                      Role: {activeModalProject.role}
                    </span>
                  </>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-4">
                {activeModalProject.title}
              </h3>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
                {activeModalProject.longDescription || activeModalProject.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2.5">
                  Technologies &amp; Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--glass-border)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="pt-4 border-t border-[var(--glass-border)] flex flex-wrap items-center gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7851A9] to-[#9b6dff] text-white text-xs sm:text-sm font-semibold shadow-xs hover:opacity-95"
                  >
                    <span>Launch Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[var(--glass-border)] text-[var(--text-primary)] text-xs sm:text-sm font-semibold hover:bg-[var(--bg-secondary)]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

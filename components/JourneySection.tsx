"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Binary, FlaskConical } from "lucide-react";
import { JOURNEY } from "@/lib/data";

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm font-bold tracking-[0.25em] text-[#9b6dff] uppercase block mb-3"
          >
            Evolution &amp; Mindset
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Scientist to Software Engineer
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-[#7851A9] to-[#9b6dff] mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Journey Grid: Scientist -> Arrow -> Engineer */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-8 md:gap-4 items-center">
          {/* Scientist Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden aspect-[4/5] border border-[var(--glass-border)] shadow-xl bg-[var(--bg-secondary)]"
          >
            <Image
              src={JOURNEY.scientist.image}
              alt="Agim as an Environmental Health Scientist"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 500px"
              referrerPolicy="no-referrer"
            />
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-200 mb-2">
                <FlaskConical className="w-3.5 h-3.5 text-purple-300" />
                <span>{JOURNEY.scientist.institution}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white">
                {JOURNEY.scientist.title}
              </h3>
              <p className="text-xs text-purple-300 mb-2.5 font-medium">
                {JOURNEY.scientist.role}
              </p>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
                {JOURNEY.scientist.description}
              </p>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-purple-200">
                {JOURNEY.scientist.skills.map((s, idx) => (
                  <span key={s}>
                    {s}
                    {idx < JOURNEY.scientist.skills.length - 1 && (
                      <span className="text-white/40 ml-2">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Central Transformation Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 flex flex-col items-center justify-center my-2 md:my-0"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#7851A9] to-[#9b6dff] flex items-center justify-center text-white shadow-lg shadow-[#7851A9]/30">
              <ArrowRight className="w-6 h-6 md:block hidden" />
              <ArrowRight className="w-6 h-6 md:hidden rotate-90" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#9b6dff] mt-2 text-center">
              Convergence
            </span>
          </motion.div>

          {/* Software Engineer Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 group relative rounded-3xl overflow-hidden aspect-[4/5] border border-[var(--glass-border)] shadow-xl bg-[var(--bg-secondary)]"
          >
            <Image
              src={JOURNEY.engineer.image}
              alt="Agim as a Software Engineer and Tech Leader"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 500px"
              referrerPolicy="no-referrer"
            />
            {/* Scrim overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-200 mb-2">
                <Binary className="w-3.5 h-3.5 text-purple-300" />
                <span>{JOURNEY.engineer.institution}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white">
                {JOURNEY.engineer.title}
              </h3>
              <p className="text-xs text-purple-300 mb-2.5 font-medium">
                {JOURNEY.engineer.role}
              </p>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mb-4">
                {JOURNEY.engineer.description}
              </p>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-purple-200">
                {JOURNEY.engineer.skills.map((s, idx) => (
                  <span key={s}>
                    {s}
                    {idx < JOURNEY.engineer.skills.length - 1 && (
                      <span className="text-white/40 ml-2">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

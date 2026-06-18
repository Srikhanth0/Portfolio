"use client";

import { useRef } from "react";
import { CtaCard } from "@/components/ui/cta-card";
import { experienceData } from "@/data/experience";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="relative w-full min-h-screen py-24 px-[clamp(16px,3vw,48px)] bg-[#121212] flex flex-col items-center">
      <h2 className="text-white font-bold uppercase mb-16 text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        EXPERIENCE
      </h2>
      
      <div ref={containerRef} className="w-full max-w-[800px] flex flex-col gap-6">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="exp-card">
            <CtaCard
              title={exp.period}
              subtitle={<><span className="text-white/90">{exp.role}</span> <span className="text-white/50 text-lg font-light">@ {exp.company}</span></>}
              description={exp.description}
              imageSrc={exp.imageSrc}
              imageAlt={exp.company}
              buttonText={exp.ctaLabel}
              ctaHref={exp.ctaHref}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

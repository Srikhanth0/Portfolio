"use client";

import { TestimonialCarousel } from "@/components/ui/profile-card-testimonial-carousel";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-16 md:py-24 px-[clamp(16px,3vw,48px)] bg-[#121212] flex flex-col items-center justify-center">
      <h2 className="text-white font-bold uppercase mb-8 md:mb-16 text-center" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        PROJECTS
      </h2>
      
      <div className="w-full max-w-[1440px] mx-auto">
        {/* We reuse the TestimonialCarousel adapted for Projects */}
        <TestimonialCarousel />
      </div>
    </section>
  );
}

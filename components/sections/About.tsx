"use client";

import { useState, useEffect } from "react";
import { useDevice } from "@/hooks/useDevice";
import { useDimensions } from "@/hooks/useDimensions";

export default function AboutSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { isMobile } = useDevice();
  const { ref: splineRef, dimensions: splineDimensions } = useDimensions();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <section id="about" className="relative w-full min-h-screen py-20 px-[clamp(16px,3vw,48px)] bg-[#121212] flex flex-col justify-center items-center">

      {/* Top Center Title */}
      <div className="w-full text-center mb-12">
        <h2 className="text-white font-extrabold uppercase" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
          ABOUT ME
        </h2>
      </div>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">

        {/* Left Column: Text Container */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-[32px] p-8 md:p-24 shadow-sm border border-white/10 flex flex-col justify-center min-h-[300px]">
            <div className="text-white/90 leading-relaxed space-y-4 font-light" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(14px, 2vw, 20px)' }}>
              <p>
                Final-year B.Tech student in Artificial Intelligence &amp; Data Science passionate about building impactful AI/ML and immersive technology solutions. As an AI/ML Intern at Rasa AI, I developed a Medical LLM Assistant featuring ECG analysis, prescription understanding, and interactive 3D healthcare training.
              </p>
              <p>
                As an AR/VR Developer Intern at Betasoft, I created immersive applications that connected intelligent systems with real-world user experiences. Certified in Cybersecurity, DevOps, Python, and Machine Learning, I thrive on solving complex problems and transforming innovative ideas into practical solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Spline 3D Scene (Hidden on Mobile) */}
        {!isMobile ? (
          <div className="flex-1 flex flex-col items-center justify-center max-w-[600px]">
            {/* Premium Glassmorphism Container */}
            <div
              ref={splineRef}
              className="group relative w-full aspect-square max-w-[550px] rounded-[28px] overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_-12px_rgba(126,34,206,0.3)]"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Subtle hover glow overlay */}
              <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(126,34,206,0.08) 0%, transparent 70%)',
                }}
              />

              {/* Spline iframe - mounted only when dimensions are > 0 to prevent WebGL crash */}
              {isMounted && splineDimensions.width > 0 && splineDimensions.height > 0 && (
                <iframe
                  src="https://my.spline.design/frostedglasstextureicon-kz5FnTH5OCRIGFxQK6VmKiDa/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  className="absolute inset-0 border-none z-10"
                  style={{
                    top: '0',
                    left: '0',
                  }}
                  title="Spline 3D Model"
                ></iframe>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 w-full">
            <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-[24px] p-6 border border-white/10 flex items-center justify-between">
              <span className="text-white/90 font-medium">Internships</span>
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <div className="bg-[#1A1A1A]/80 backdrop-blur-sm rounded-[24px] p-6 border border-white/10 flex items-center justify-between">
              <span className="text-white/90 font-medium">Projects</span>
              <span className="text-white font-bold text-xl">3+</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

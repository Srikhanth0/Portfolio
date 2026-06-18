"use client";

import TextPressure from "@/components/ui/TextPressure";
import SideRays from "@/components/ui/SideRays";
import { useDevice } from "@/hooks/useDevice";
import { useDimensions } from "@/hooks/useDimensions";
import Script from "next/script";

export default function HeroSection() {
  const { isMobile } = useDevice();
  const { ref: splineRef, dimensions: splineDimensions } = useDimensions();
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 px-[clamp(16px,3vw,48px)] overflow-hidden">
      {/* Background Rays */}
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full z-0 pointer-events-none opacity-80 mix-blend-screen">
        <SideRays
          speed={2.5}
          rayColor1="#EAB308"
          rayColor2="#96c8ff"
          intensity={2}
          spread={2}
          origin="top-left"
          tilt={0}
          saturation={1.5}
          blend={0.75}
          falloff={1.6}
          opacity={isMobile ? 0.5 : 1.0}
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between z-10 gap-12">
        {/* Left Column: Typography */}
        <div className="flex-1 flex flex-col justify-center items-start text-left max-w-2xl">
          <p className="text-white font-light tracking-[0.15em] text-3xl md:text-4xl uppercase mb-4" style={{ fontFamily: 'var(--font-greeting)' }}>
            HEY THERE !!!
          </p>

          <h1 className="text-white leading-[0.9] m-0 mb-6 uppercase" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 900 }}>
            <span className="block mb-[-0.1em]">I'M</span>
            <div style={{ position: 'relative', height: '180px', width: '100%', maxWidth: '700px' }} className="mt-2 mb-8">
              <TextPressure
                text="SRIKHANTH,"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={140}
              />
            </div>
          </h1>

          <p className="text-white font-bold uppercase text-xs md:text-sm max-w-[600px] mb-10 leading-relaxed tracking-wide" style={{ fontFamily: 'var(--font-nav)' }}>
            B.Tech AI & DS Undergraduate @ SREC | Intercollege Hackathon Winner | AI/ML Developer | Intern @ Rasa.ai & Betasoft | Open Source Contributor | GSoC Aspirant | 2025-2026 SREC Symposium President
          </p>

          <a href="https://drive.google.com/file/d/1TFBF7DP7bU6AEZTz8XFroceUmkIJMX65/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-white text-[#121212] rounded-full px-8 py-3.5 font-bold uppercase tracking-wider text-sm md:text-base hover:bg-gray-200 hover:scale-105 transition-all duration-300 inline-block">
            RESUME
          </a>
        </div>

        {/* Right Column: 3D Scene */}
        {!isMobile && (
          <div className="flex-1 w-full flex justify-center md:justify-end items-center h-[400px] md:h-[550px] relative translate-y-6 md:translate-y-12">
            <div ref={splineRef} className="w-full h-full rounded-[24px] overflow-hidden relative shadow-2xl bg-white/5 backdrop-blur-sm border border-black/10 z-10 flex items-center justify-center">
              {splineDimensions.width > 0 && splineDimensions.height > 0 && (
                <>
                  <Script type="module" src="https://cdn.spline.design/@splinetool/hana-viewer@1.2.54/hana-viewer.js" strategy="lazyOnload" />
                  {/* @ts-ignore */}
                  <hana-viewer url="https://prod.spline.design/L5O3NVTRUFMPWmo8-t41/scene.hanacode" style={{ width: '100%', height: '100%', transform: 'scale(1.4)' }}></hana-viewer>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

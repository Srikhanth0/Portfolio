"use client";

import GlassProfileCard from "@/components/ui/glassmorphism-profile-card";
import StackedArticleCards from "@/components/ui/stacked-article-cards";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-8 px-[clamp(16px,3vw,48px)] bg-[#1A1A1A] rounded-t-[40px] flex flex-col items-center overflow-hidden">
      <h2 className="text-white font-bold uppercase mb-8 text-center mt-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        CONTACT
      </h2>
      
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Glassmorphism Profile */}
        <div className="w-full flex justify-center lg:justify-start">
          <GlassProfileCard
            name="SRIKHANTH"
            role="B.Tech AI & DS Undergraduate @ SREC | Intercollege Hackathon Winner | Intern @ Rasa.ai & Betasoft | Open Source Contributor | GSoC Aspirant"
            email="srikhanth.m0@gmail.com"
            avatarSrc="/FOOTER/Srikhanth.webp"
            statusText="Available for work"
            statusColor="bg-purple-500"
            glowText="Currently High on Creativity"
          />
        </div>

        {/* Center Column: Thank you text */}
        <div className="w-full flex justify-center text-center px-4">
          <h3 className="text-white font-extrabold text-4xl md:text-5xl uppercase leading-snug tracking-wider" style={{ fontFamily: 'var(--font-display)' }}>
            THANK YOU FOR <br/> WATCHING TILL <br/> THE END
          </h3>
        </div>

        {/* Right Column: Stacked Social Links */}
        <div className="w-full flex justify-center lg:justify-end relative min-h-[400px]">
          <div className="absolute inset-x-0 mx-auto lg:mx-0 w-full flex justify-center lg:justify-end">
             <StackedArticleCards />
          </div>
        </div>
        
      </div>
      
      <div className="mt-8 w-full text-center text-white/50 text-sm pb-2 font-mono">
        <p>© {new Date().getFullYear()} Srikhanth. All rights reserved.</p>
      </div>
    </section>
  );
}

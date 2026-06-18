import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/Hero";

const AboutSection = dynamic(() => import("@/components/sections/About"));
const ExperienceSection = dynamic(() => import("@/components/sections/Experience"));
const ProjectsSection = dynamic(() => import("@/components/sections/Projects"));
const SkillsSection = dynamic(() => import("@/components/sections/Skills"));
const CertificatesSection = dynamic(() => import("@/components/sections/Certificates"));
const ContactSection = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full relative z-0">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
    </main>
  );
}

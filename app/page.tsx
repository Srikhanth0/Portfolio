import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/Hero";

const loadingFallback = () => <div className="min-h-[50vh] w-full animate-pulse bg-[#121212]/50" />;

const AboutSection = dynamic(() => import("@/components/sections/About"), { loading: loadingFallback });
const ExperienceSection = dynamic(() => import("@/components/sections/Experience"), { loading: loadingFallback });
const ProjectsSection = dynamic(() => import("@/components/sections/Projects"), { loading: loadingFallback });
const SkillsSection = dynamic(() => import("@/components/sections/Skills"), { loading: loadingFallback });
const CertificatesSection = dynamic(() => import("@/components/sections/Certificates"), { loading: loadingFallback });
const ContactSection = dynamic(() => import("@/components/sections/Contact"), { loading: loadingFallback });

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

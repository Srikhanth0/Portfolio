"use client";

import dynamic from 'next/dynamic';

const RadialOrbitalTimeline = dynamic(() => import("@/components/ui/radial-orbital-timeline"), {
  ssr: false,
});

const timelineData = [
  {
    id: 1,
    title: "Python",
    date: "Primary Language",
    content: "Extensive experience in developing AI/ML models, backend systems, and data processing pipelines using Python.",
    category: "Languages",
    iconSrc: "/skills-logo/Python.svg",
    relatedIds: [2, 4, 5],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Docker",
    date: "Containerization",
    content: "Proficient in containerizing applications, building CI/CD pipelines, and deploying scalable microservices.",
    category: "DevOps",
    iconSrc: "/skills-logo/Docker.svg",
    relatedIds: [1, 6],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Unity",
    date: "AR/VR Engine",
    content: "Developing immersive spatial computing applications, VR training simulations, and 3D experiences.",
    category: "AR/VR",
    iconSrc: "/skills-logo/unity.svg",
    relatedIds: [],
    status: "in-progress" as const,
    energy: 75,
  },
  {
    id: 4,
    title: "Git",
    date: "Version Control",
    content: "Expert in Git workflows, branching strategies, and collaborative development with GitHub.",
    category: "Tools",
    iconSrc: "/skills-logo/Git.svg",
    relatedIds: [1, 2],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 5,
    title: "LangChain",
    date: "LLM Orchestration",
    content: "Designing complex agentic workflows, RAG systems, and orchestrating multi-agent environments using LangGraph & LangChain.",
    category: "Generative AI",
    iconSrc: "/skills-logo/Langchain.svg",
    relatedIds: [1, 7],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 6,
    title: "Azure",
    date: "Cloud Platform",
    content: "Experience with Azure cloud services for deploying ML models, managing resources, and building scalable solutions.",
    category: "Cloud",
    iconSrc: "/skills-logo/Azure.svg",
    relatedIds: [2, 7],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 7,
    title: "Google Cloud",
    date: "Cloud & AI",
    content: "Leveraging Google Cloud Platform for AI/ML services, Vertex AI, and cloud infrastructure management.",
    category: "Cloud",
    iconSrc: "/skills-logo/Google_Cloud.svg",
    relatedIds: [1, 5, 6],
    status: "completed" as const,
    energy: 82,
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative w-full min-h-[80vh] pt-20 pb-4 px-[clamp(16px,3vw,48px)] bg-[#121212] flex flex-col items-center overflow-visible">
      {/* Top Center Title */}
      <div className="w-full text-center mb-4 z-10">
        <h2 className="text-white font-extrabold uppercase" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          TECHNICAL SKILLS
        </h2>
        <p className="text-white/60 uppercase tracking-widest text-sm mt-2 font-medium">Interactive Skill Orbit</p>
      </div>

      {/* Orbit Animation Component */}
      <div className="w-full max-w-[1440px] mx-auto flex-1 flex items-center justify-center -mt-10">
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}

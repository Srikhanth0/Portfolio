"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
}

const projects: Project[] = [
  {
    name: "MedBot AI",
    title: "Medical Assistant LLM",
    description:
      "An AI-powered healthcare assistant built using Gemini APIs and Retrieval-Augmented Generation (RAG). Features intelligent medical information retrieval, prescription understanding, contextual healthcare guidance, and an interactive user experience designed to improve accessibility and healthcare support.",
    imageUrl: "/projects/MEDBOT.webp",
    githubUrl: "https://github.com/Srikhanth0/Medbot-AI-Health-Assistant",
    liveUrl: "https://health-assitant.netlify.app/",
  },
  {
    name: "Orion Agent",
    title: "Multi-Agent Windows Assistant",
    description:
      "Orion is a visually-aware multi-agent Windows assistant built on LangGraph. It utilizes a Sensory-Motor Loop architecture combining Vision LLMs and the Model Context Protocol (MCP) to dynamically understand screen context, map coordinates, execute workflows, and perform self-correcting task execution.",
    imageUrl: "/projects/ORION_AGENT.webp",
    githubUrl: "https://github.com/Srikhanth0/Orion_Agent.git",
    status: "Currently under active research and development. Version 1 use cases and validation studies have been successfully completed.",
  },
  {
    name: "LUMA Voice Assistant",
    title: "AI Accessibility Assistant",
    description:
      "An AI-powered accessibility assistant designed for visually impaired users. Combines OCR capabilities, voice interaction, and intelligent assistance to improve digital accessibility and user independence.",
    imageUrl: "/projects/LUMA_AI.webp",
    githubUrl: "https://github.com/Srikhanth0/Luma-AI.git",
    status: "Currently in development with future enhancement phases planned.",
  },
];

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % projects.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + projects.length) % projects.length
    );

  const currentProject = projects[currentIndex];

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center'>
        {/* Image */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-800 flex-shrink-0'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentProject.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentProject.imageUrl}
                alt={currentProject.name}
                width={470}
                height={470}
                className='w-full h-full object-cover'
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className='bg-[#1A1A1A] border border-white/10 rounded-3xl shadow-2xl p-8 ml-[-80px] z-10 max-w-xl flex-1'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentProject.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                <h2 className='text-2xl font-normal text-white mb-2'>
                  {currentProject.name}
                </h2>
                <p className='text-base font-light text-purple-400'>
                  {currentProject.title}
                </p>
              </div>

              <p className='text-white text-lg leading-relaxed mb-4 line-clamp-5'>
                {currentProject.description}
              </p>

              {currentProject.status && (
                <p className='text-purple-200 text-base italic mb-6 border-l-2 border-purple-500/50 pl-3'>
                  {currentProject.status}
                </p>
              )}

              <div className='flex space-x-4'>
                {currentProject.githubUrl && (
                  <Link
                    href={currentProject.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-12 px-6 bg-white rounded-full flex items-center justify-center gap-2 transition-all hover:bg-gray-200 hover:scale-105 cursor-pointer'
                    aria-label="GitHub"
                  >
                    <Github className='w-5 h-5 text-black' />
                    <span className='text-black text-base font-light'>GitHub</span>
                  </Link>
                )}
                {currentProject.liveUrl && (
                  <Link
                    href={currentProject.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-12 px-6 bg-purple-600 rounded-full flex items-center justify-center gap-2 transition-all hover:bg-purple-700 hover:scale-105 cursor-pointer'
                    aria-label="Live Demo"
                  >
                    <ExternalLink className='w-5 h-5 text-white' />
                    <span className='text-white text-base font-light'>Live Demo</span>
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent'>
        {/* Image */}
        <div className='w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-3xl overflow-hidden mb-6'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentProject.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <Image
                src={currentProject.imageUrl}
                alt={currentProject.name}
                width={400}
                height={400}
                className='w-full h-full object-cover'
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className='px-4'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentProject.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className='text-xl font-normal text-white mb-2'>
                {currentProject.name}
              </h2>
                
              <p className='text-base font-light text-purple-400 mb-4'>
                {currentProject.title}
              </p>
                
              <p className='text-white text-lg leading-relaxed mb-4 line-clamp-5'>
                {currentProject.description}
              </p>

              {currentProject.status && (
                <p className='text-purple-200 text-sm italic mb-6 border-l-2 border-purple-500/50 pl-3 text-left'>
                  {currentProject.status}
                </p>
              )}
                
              <div className='flex justify-center space-x-4'>
                {currentProject.githubUrl && (
                  <Link
                    href={currentProject.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-12 px-5 bg-white rounded-full flex items-center justify-center gap-2 transition-colors hover:bg-gray-200 cursor-pointer'
                    aria-label="GitHub"
                  >
                    <Github className='w-5 h-5 text-black' />
                    <span className='text-black text-base font-light'>GitHub</span>
                  </Link>
                )}
                {currentProject.liveUrl && (
                  <Link
                    href={currentProject.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='h-12 px-5 bg-purple-600 rounded-full flex items-center justify-center gap-2 transition-colors hover:bg-purple-700 cursor-pointer'
                    aria-label="Live Demo"
                  >
                    <ExternalLink className='w-5 h-5 text-white' />
                    <span className='text-white text-base font-light'>Live Demo</span>
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className='flex justify-center items-center gap-6 mt-8'>
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label='Previous project'
          className='w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 shadow-md flex items-center justify-center hover:bg-[#2A2A2A] transition-colors cursor-pointer'
        >
          <ChevronLeft className='w-6 h-6 text-white' />
        </button>

        {/* Dots */}
        <div className='flex gap-2'>
          {projects.map((_, projectIndex) => (
            <button
              key={projectIndex}
              onClick={() => setCurrentIndex(projectIndex)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors cursor-pointer",
                projectIndex === currentIndex
                  ? "bg-purple-500"
                  : "bg-gray-600"
              )}
              aria-label={`Go to project ${projectIndex + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label='Next project'
          className='w-12 h-12 rounded-full bg-[#1A1A1A] border border-white/10 shadow-md flex items-center justify-center hover:bg-[#2A2A2A] transition-colors cursor-pointer'
        >
          <ChevronRight className='w-6 h-6 text-white' />
        </button>
      </div>
    </div>
  );
}

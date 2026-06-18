"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const items = [
  { id: "home", label: "HOME", href: "#home" },
  { id: "about", label: "ABOUT", href: "#about" },
  { id: "experience", label: "EXPERIENCE", href: "#experience" },
  { id: "projects", label: "PROJECTS", href: "#projects" },
  { id: "skills", label: "SKILLS", href: "#skills" },
  { id: "certificates", label: "CERTIFICATES", href: "#certificates" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

export default function SiteNav() {
  const [activeSection, setActiveSection] = useState("home");
  const isClickingRef = useRef(false);

  useEffect(() => {
    // Setup Intersection Observer for perfect section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        // If we are currently handling a click smooth-scroll, ignore observer to avoid jitter
        if (isClickingRef.current) return;

        // Find the entry that is intersecting the most
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to get the most prominent section
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -40% 0px", // Trigger when section is roughly in the middle of the screen
        threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for accurate detection
      }
    );

    // Observe all section IDs
    items.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    isClickingRef.current = true;
    setActiveSection(id);
    
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      
      // Reset clicking lock after scroll completes (~800ms)
      setTimeout(() => {
        isClickingRef.current = false;
      }, 800);
    }
  };

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center w-full pointer-events-auto px-4 md:px-0">
      <nav 
        className="relative flex items-center bg-white rounded-full p-1.5 md:p-2 shadow-2xl max-w-full overflow-x-auto hide-scrollbar"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleClick(e, item.id)}
              className={`relative z-10 flex items-center justify-center whitespace-nowrap px-4 py-3 text-[13px] md:px-6 md:py-3.5 lg:px-8 md:text-sm lg:text-base font-bold tracking-widest uppercase transition-colors duration-300 ${
                isActive ? "text-white" : "text-black hover:text-black/80"
              }`}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="pill-active-bg"
                  className="absolute inset-0 bg-[#1A1A1A] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}

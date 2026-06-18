"use client";
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>;
  threshold?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  threshold = 0.1,
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimated) return;

    const chars = el.querySelectorAll<HTMLSpanElement>('.split-char');
    if (!chars.length) return;

    const ctx = gsap.context(() => {
      gsap.set(chars, animationFrom);

      ScrollTrigger.create({
        trigger: el,
        start: `top ${(1 - threshold) * 100}%`,
        once: true,
        onEnter: () => {
          gsap.to(chars, {
            ...animationTo,
            duration,
            ease,
            stagger: delay / 1000,
            onComplete: () => {
              setHasAnimated(true);
              onLetterAnimationComplete?.();
            }
          });
        }
      });
    }, el);

    return () => {
      ctx.revert();
    };
  }, [text, delay, duration, ease, threshold, hasAnimated, animationFrom, animationTo, onLetterAnimationComplete]);

  const Tag = (tag || 'p') as React.ElementType;

  const chars = text.split('').map((char, i) => (
    <span
      key={i}
      className="split-char"
      style={{ display: 'inline-block', willChange: 'transform, opacity' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <Tag
      ref={containerRef}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{ textAlign, wordWrap: 'break-word' as const }}
    >
      {chars}
    </Tag>
  );
};

export default SplitText;

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus, Copy, Zap, Check } from "lucide-react";

interface ComponentProps {
  name?: string;
  role?: string;
  email?: string;
  avatarSrc?: string;
  statusText?: string;
  statusColor?: string; 
  glowText?: string; 
  className?: string;
}

export default function Component({
  name = "Srikhanth",
  role = "AI & DS Engineer",
  email = "srikhanth.m0@gmail.com",
  avatarSrc = "/FOOTER/Srikhanth.webp",
  statusText = "Available for work",
  statusColor = "bg-white",
  glowText = "Currently High on Creativity",
  className,
}: ComponentProps) {
  const [copied, setCopied] = useState(false);


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleHireMe = () => {
    window.open("https://www.linkedin.com/in/srikhanth-m", "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("relative w-sm ", className)}
    >
     
      <div className="pointer-events-none absolute inset-x-3 -bottom-10 top-[90%] rounded-[28px] bg-white/20 blur-xl shadow-[0_40px_80px_-16px_rgba(255,255,255,0.4)] z-0 " />

      
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-full z-0">
        <div className="flex items-center justify-center gap-2 bg-transparent py-3 text-center text-base font-light text-black">
          <Zap className="h-4 w-4" /> {glowText}
        </div>
      </div>

      <Card className={cn(
    "relative z-10 mx-auto w-full max-w-3xl overflow-visible rounded-[20px]",
    "bg-white/10 dark:bg-white/5 backdrop-blur-xl",
    "border border-black/20 border-b-none dark:border-white/10",
    "shadow-lg shadow-black/20 light:text-white hover:shadow-black/10 "
  )}>
        <CardContent className="p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between text-base text-white/90">
            <div className="flex items-center gap-2">
              <span className={cn("inline-block h-2.5 w-2.5 rounded-full animate-pulse", statusColor)} />
              <span className="select-none">{statusText}</span>
            </div>

          </div>

          
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="relative h-52 w-52 shrink-0 overflow-hidden rounded-[20px] ring-2 ring-white/30">
              <Image
                src={avatarSrc}
                alt={`${name} avatar`}
                fill
                sizes="208px"
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0 text-center">
              <h3 className="truncate text-3xl font-normal tracking-tight sm:text-4xl">
                {name}
              </h3>
              <p className="mt-2 text-base md:text-lg text-white leading-relaxed max-w-sm mx-auto">{role}</p>
            </div>
          </div>

         
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Button
              variant="outline"
              className="h-12 justify-start gap-3 rounded-2xl bg-white/5 hover:bg-white/10 border-white/20 text-white"
              onClick={handleHireMe}
            >
              <Plus className="h-4 w-4" /> Hire Me
            </Button>

            <Button
              variant="outline"
              onClick={handleCopy}
              className="h-12 justify-start gap-3 rounded-2xl bg-white/5 hover:bg-white/10 border-white/20 text-white"
            >
              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied!" : "Copy Email"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Toast notification */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white text-black px-6 py-3 rounded-full shadow-lg text-base font-light"
        >
          ✓ Email copied to clipboard!
        </motion.div>
      )}
    </motion.div>
  );
}

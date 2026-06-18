"use client";

import dynamic from 'next/dynamic';

const CardStack = dynamic(() => import("@/components/ui/card-stack").then(mod => mod.CardStack), {
  ssr: false,
});
import { certificatesData } from "@/data/certificates";
import { useDevice } from "@/hooks/useDevice";
import Link from "next/link";
import { ExternalLink, Award } from "lucide-react";

export default function CertificatesSection() {
  const { isMobile, isTablet } = useDevice();
  
  const cardWidth = isMobile ? 300 : isTablet ? 380 : 450;
  const cardHeight = isMobile ? 220 : isTablet ? 280 : 320;
  const spreadDeg = isMobile ? 45 : 60;
  return (
    <section id="certificates" className="relative w-full py-16 md:py-24 px-[clamp(16px,3vw,48px)] bg-[#121212] flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-white font-bold uppercase mb-8 md:mb-16 text-center z-10" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        CERTIFICATES
      </h2>
      
      <div className="w-full max-w-[1440px] mx-auto z-10">
        <CardStack
          items={certificatesData}
          initialIndex={2}
          maxVisible={5}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          spreadDeg={spreadDeg}
          autoAdvance={false}
          showDots={true}
          className="mx-auto"
        />
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 z-10">
        <Link
          href="https://www.credly.com/users/srikhanth-m"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-light text-base transition-all hover:scale-105 shadow-lg shadow-purple-600/30"
        >
          <Award className="w-4 h-4" />
          View Credly Certifications
        </Link>
        <Link
          href="#certificates"
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-light text-base transition-all hover:scale-105 border border-white/20"
        >
          <ExternalLink className="w-4 h-4" />
          View Certificates
        </Link>
      </div>
    </section>
  );
}

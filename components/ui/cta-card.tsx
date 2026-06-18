import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Define the props interface for the component
interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: React.ReactNode;
  description: string;
  buttonText: string;
  ctaHref?: string;
  onButtonClick?: () => void;
}

// Reusable CtaCard component with a clean, modern layout
const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  ({ className, imageSrc, imageAlt, title, subtitle, description, buttonText, ctaHref, onButtonClick, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-xl border border-white/10 bg-[#1A1A1A] text-white shadow-2xl",
          "flex flex-col md:flex-row",
          className
        )}
        {...props}
      >
        {/* Image Section - enlarged to fill container */}
        <div className="md:w-2/5 w-full flex items-center justify-center bg-white/5 p-2 md:p-4">
          <div className="relative w-full h-64 md:h-full md:min-h-[320px] overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain scale-[1.25] md:scale-[1.35] transition-transform duration-500 hover:scale-[1.4]"
              sizes="(max-width: 768px) 100%, 40vw"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 w-full p-6 md:p-8 flex flex-col justify-center">
          <div>
            <p className="text-base font-light text-white/70 uppercase tracking-wider">{title}</p>
            <h2 className="mt-1 text-2xl md:text-3xl font-normal tracking-tight">
              {subtitle}
            </h2>
            <p className="mt-4 text-white/90 text-base leading-relaxed">
              {description}
            </p>
            {ctaHref && ctaHref !== "#" && (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-base font-light text-black shadow-lg shadow-white/10 transition-all hover:bg-gray-200 hover:scale-105 w-fit">
                {buttonText || "View Certificate"}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
);
CtaCard.displayName = "CtaCard";

export { CtaCard };

import type { Metadata } from "next";
import { Barlow_Condensed, Space_Grotesk, IBM_Plex_Mono, Rajdhani, Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/nav/SiteNav";
import SplashCursorWrapper from "@/components/effects/SplashCursorWrapper";

const barlowCondensed = Barlow_Condensed({ 
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const spaceGrotesk = Space_Grotesk({ 
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

const rajdhani = Rajdhani({ 
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

const bebasNeue = Bebas_Neue({ 
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Srikhanth | B.Tech AI & DS Undergraduate | AI/ML Developer Portfolio",
  description: "Portfolio of Srikhanth — B.Tech AI & DS Undergraduate at SREC. AI/ML Developer, Intern at Rasa.ai & Betasoft, Open Source Contributor, and GSoC Aspirant.",
  keywords: ["Srikhanth portfolio", "Srikhanth", "AI Developer", "Machine Learning", "SREC", "Data Science", "Rasa.ai", "Betasoft"],
  authors: [{ name: "Srikhanth" }],
  openGraph: {
    title: "Srikhanth | B.Tech AI & DS Undergraduate | AI/ML Developer Portfolio",
    description: "Portfolio of Srikhanth — AI/ML Developer, Intern at Rasa.ai & Betasoft, Open Source Contributor, and GSoC Aspirant.",
    url: "https://srikhanth.dev",
    siteName: "Srikhanth Portfolio",
    images: [
      {
        url: "https://srikhanth.dev/FOOTER/Srikhanth.webp",
        width: 800,
        height: 800,
        alt: "Srikhanth - AI/ML Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srikhanth | AI/ML Developer Portfolio",
    description: "Portfolio of Srikhanth — AI/ML Developer, Intern at Rasa.ai & Betasoft.",
    images: ["https://srikhanth.dev/FOOTER/Srikhanth.webp"],
  },
  alternates: {
    canonical: "https://srikhanth.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfilePage"],
    name: "Srikhanth",
    jobTitle: "AI & DS Engineer",
    url: "https://srikhanth.dev",
    sameAs: [
      "https://www.linkedin.com/in/srikhanth-m",
      "https://github.com/Srikhanth0",
      "https://leetcode.com/u/srikhanth"
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SREC"
    },
    worksFor: [
      {
        "@type": "Organization",
        name: "Rasa.ai"
      },
      {
        "@type": "Organization",
        name: "Betasoft"
      }
    ]
  };

  return (
    <html lang="en" className={`${barlowCondensed.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} ${rajdhani.variable} ${bebasNeue.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#121212] text-white font-light tracking-wide overflow-x-hidden min-h-screen" suppressHydrationWarning>
        <SplashCursorWrapper />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}

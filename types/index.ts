export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  imageSrc: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
}

export interface Certificate {
  id: number | string;
  title: string;
  issuer: string;
  imageSrc: string;
  href: string;
  tag: string;
}

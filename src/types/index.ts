export interface BlogPost {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  publishedAt: string;
  tags: string[];
  mediumUrl: string;
  readingTime: string;
  featured: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  featured: boolean;
}

/** Bilingual copy toggled via `html[lang]` (see global.css `.locale-en` / `.locale-es`). */
export interface LocalizedText {
  en: string;
  es: string;
}

export interface Experience {
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
}

export interface Education {
  institution: string;
  degree: LocalizedText;
  period: LocalizedText;
  description?: LocalizedText;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Certification {
  name: LocalizedText;
  issuer: LocalizedText;
  date: LocalizedText;
  url?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  cvUrl: string;
  socials: SocialLink[];
  status: {
    available: boolean;
    text: string;
  };
}
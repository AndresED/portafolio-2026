export type BlogCategory = 'data_structures' | 'cryptography' | 'algorithms' | 'ai' | 'architecture';

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
  category: BlogCategory;
}

export type ProjectCategory =
  | 'microservices'
  | 'architecture'
  | 'blockchain'
  | 'frontend'
  | 'iot'
  | 'academy';

/** Production client work vs open-source reference builds vs learning repos. */
export type ProjectTier = 'production' | 'reference' | 'learning';

/** Subsystem or layer shown inside a project detail modal. */
export interface ProjectLayer {
  id: string;
  title: LocalizedText;
  summary: LocalizedText;
  techStack: string[];
  highlights?: LocalizedText[];
  githubUrl?: string;
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
  category: ProjectCategory;
  /** Shown on cards — separates live product work from reference repos. */
  tier: ProjectTier;
  role?: LocalizedText;
  problem?: LocalizedText;
  impact?: LocalizedText;
  /** Optional stack breakdown — opens in a modal from the project card. */
  layers?: ProjectLayer[];
}

/** Bilingual copy toggled via `html[lang]` (see global.css `.locale-en` / `.locale-es`). */
export interface LocalizedText {
  en: string;
  es: string;
}

export type EngagementType = 'full_time' | 'freelance' | 'contract' | 'part_time' | 'co_founder';

export interface Experience {
  company: string;
  role: LocalizedText;
  period: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedText[];
  engagement?: EngagementType;
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

export type CertificationStatus = 'valid' | 'in_progress';

export interface Certification {
  name: LocalizedText;
  code: string;
  issuer: LocalizedText;
  issuerShort: string;
  status: CertificationStatus;
  issuedAt: LocalizedText;
  expiresAt?: LocalizedText;
  expiresNever?: boolean;
  verifyUrl?: string;
  icon?: 'aws';
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
  makingCodeUrl: string;
  socials: SocialLink[];
  status: {
    available: boolean;
    text: string;
  };
  stackKeywords: readonly string[];
}
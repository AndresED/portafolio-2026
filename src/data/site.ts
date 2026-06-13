import { profile } from './profile';

export const siteUrl = 'https://www.andresed.dev';

/** Card copy — ASCII-friendly, distinct from title, under 200 chars for X/LinkedIn. */
export const siteDescription =
  'Senior backend engineer (5+ years) shipping NestJS microservices on AWS for logistics and compliance products — event-driven, multitenant, production-first.';

/** Title for social cards and default SEO. */
export const socialShareTitle = `${profile.name} - Senior Backend Engineer`;

export const siteConfig = {
  title: socialShareTitle,
  description: siteDescription,
  url: siteUrl,
  author: profile.name,
  authorEmail: profile.email,
  social: {
    github: 'https://github.com/AndresED',
    linkedin: 'https://www.linkedin.com/in/andresedev/',
    medium: 'https://medium.com/@andres30xed',
  },
  seo: {
    ogImage: '/images/og-image.jpg',
    ogImageAlt: `${profile.name} - Senior Backend Engineer portfolio`,
    twitterHandle: '',
    keywords: ['Backend Engineer', 'AWS', 'NestJS', 'Microservices', 'Cloud Architecture', 'TypeScript'],
    knowsAbout: [
      'NestJS',
      'AWS',
      'Microservices',
      'Event-driven architecture',
      'Hexagonal architecture',
      'CQRS',
      'Multi-tenant SaaS',
      'TypeScript',
      'IoT platforms',
    ],
  },
};

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).href;
}

export function homepageUrl(): string {
  return `${siteUrl}/`;
}

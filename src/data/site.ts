export const siteUrl = 'https://www.andresed.dev';

/** Card copy — ASCII-only, distinct from title, under 200 chars for X/LinkedIn. */
export const siteDescription =
  'NestJS microservices, event-driven architectures and AWS cloud delivery. 5+ years building production APIs, multitenant SaaS and Kafka integrations.';

/** Shorter title for social cards (avoids redundancy with description). */
export const socialShareTitle = 'Andres Esquivel - Senior Backend Engineer';

export const siteConfig = {
  title: 'Andrés Felipe - Senior Backend Engineer',
  description: siteDescription,
  url: siteUrl,
  author: 'Andrés Felipe',
  authorEmail: 'andres.felipe.dev@email.com',
  social: {
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    twitter: 'https://twitter.com/username',
    medium: 'https://medium.com/@username',
  },
  seo: {
    ogImage: '/images/og-image.jpg',
    ogImageAlt: 'Andres Esquivel - Senior Backend Developer portfolio banner',
    twitterHandle: '@username',
    keywords: ['Backend Engineer', 'AWS', 'NestJS', 'Microservices', 'Cloud Architecture', 'TypeScript'],
  },
};

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).href;
}

export function homepageUrl(): string {
  return `${siteUrl}/`;
}

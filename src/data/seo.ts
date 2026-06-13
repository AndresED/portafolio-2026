import type { BlogPost, Project } from '../types';
import type { TopicHub } from './topics';
import { profile } from './profile';
import { visibleCertifications } from './resume';
import { absoluteUrl, homepageUrl, siteConfig, siteDescription, siteUrl } from './site';

export function projectPath(id: string): string {
  return `/portfolio/${id}`;
}

export function blogPath(id: string): string {
  return `/blog/${id}`;
}

export function topicPath(id: string): string {
  return `/topics/${id}`;
}

export function projectPageUrl(id: string): string {
  return absoluteUrl(projectPath(id));
}

export function blogPageUrl(id: string): string {
  return absoluteUrl(blogPath(id));
}

export function topicPageUrl(id: string): string {
  return absoluteUrl(topicPath(id));
}

const personId = `${homepageUrl()}#person`;
const websiteId = `${homepageUrl()}#website`;

export function buildPersonNode() {
  const sameAs = [
    ...profile.socials.map((s) => s.url),
    profile.makingCodeUrl,
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.medium,
  ].filter((url, index, arr) => arr.indexOf(url) === index);

  const hasCredential = visibleCertifications
    .filter((cert) => cert.status === 'valid')
    .map((cert) => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.name.en,
      credentialCategory: cert.issuerShort,
      ...(cert.verifyUrl ? { url: cert.verifyUrl } : {}),
    }));

  return {
    '@type': 'Person',
    '@id': personId,
    name: profile.name,
    jobTitle: profile.title,
    url: homepageUrl(),
    email: profile.email,
    image: absoluteUrl(siteConfig.seo.ogImage),
    description: siteDescription,
    sameAs,
    knowsAbout: siteConfig.seo.knowsAbout,
    ...(hasCredential.length > 0 ? { hasCredential } : {}),
  };
}

export function buildWebSiteNode() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: homepageUrl(),
    name: `${profile.name} — ${profile.title}`,
    description: siteDescription,
    inLanguage: ['en', 'es'],
    publisher: { '@id': personId },
  };
}

export function buildWebPageNode(options: {
  name: string;
  description: string;
  url: string;
  type?: 'WebPage' | 'CollectionPage' | 'ProfilePage' | 'ContactPage';
}) {
  const pageType = options.type ?? 'WebPage';
  return {
    '@type': pageType,
    '@id': `${options.url}#webpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    isPartOf: { '@id': websiteId },
    about: { '@id': personId },
    ...(pageType === 'ProfilePage' ? { mainEntity: { '@id': personId } } : {}),
    inLanguage: ['en', 'es'],
  };
}

export function buildBreadcrumbNode(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildItemListNode(
  listUrl: string,
  items: { name: string; url: string }[],
) {
  return {
    '@type': 'ItemList',
    '@id': `${listUrl}#itemlist`,
    url: listUrl,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function buildProjectCreativeWorkNode(project: Project, pageUrl: string) {
  return {
    '@type': 'CreativeWork',
    '@id': `${pageUrl}#project`,
    name: project.title,
    description: project.description,
    url: pageUrl,
    image: absoluteUrl(project.thumbnail),
    keywords: [...project.tags, ...project.techStack].join(', '),
    author: { '@id': personId },
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
  };
}

export function buildBlogArticleNode(post: BlogPost, pageUrl: string, imageUrl?: string) {
  return {
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    url: pageUrl,
    author: { '@id': personId },
    isPartOf: { '@id': websiteId },
    mainEntityOfPage: pageUrl,
    sameAs: post.mediumUrl,
    isBasedOn: post.mediumUrl,
    keywords: post.tags.join(', '),
    ...(imageUrl ? { image: imageUrl } : {}),
  };
}

export function buildDefaultGraph(extra: Record<string, unknown>[] = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [buildWebSiteNode(), buildPersonNode(), ...extra],
  };
}

export function projectSeoTitle(project: Project): string {
  return `${project.title} | ${profile.name}`;
}

export function projectSeoDescription(project: Project): string {
  const base =
    project.description.length > 155 ? `${project.description.slice(0, 152)}…` : project.description;
  return `${base} Tech: ${project.techStack.slice(0, 4).join(', ')}.`;
}

export function blogSeoTitle(post: BlogPost): string {
  return `${post.title} | ${profile.name}`;
}

export function topicSeoTitle(topic: TopicHub): string {
  return `${topic.title.en} | ${profile.name}`;
}

export function topicSeoDescription(topic: TopicHub): string {
  return topic.description.en;
}

export { personId, siteUrl, websiteId };

import type { APIRoute } from 'astro';
import { posts } from '../data/blog';
import { projects } from '../data/projects';
import { topics } from '../data/topics';
import { blogPath, projectPath, topicPath } from '../data/seo';
import { siteUrl } from '../data/site';

export const GET: APIRoute = async () => {
  const baseUrl = siteUrl;

  const staticPages = ['', 'portfolio', 'blog', 'contact', 'topics'].map((path) => ({
    url: path === '' ? `${baseUrl}/` : `${baseUrl}/${path}`,
    lastmod: new Date().toISOString().split('T')[0],
    priority: path === '' ? '1.0' : '0.8',
    changefreq: path === '' ? 'weekly' : 'monthly',
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}${projectPath(project.id)}`,
    lastmod: new Date().toISOString().split('T')[0],
    priority: project.featured ? '0.85' : '0.75',
    changefreq: 'monthly',
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}${blogPath(post.id)}`,
    lastmod: post.publishedAt,
    priority: post.featured ? '0.8' : '0.65',
    changefreq: 'yearly',
  }));

  const topicPages = topics.map((topic) => ({
    url: `${baseUrl}${topicPath(topic.id)}`,
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...projectPages, ...blogPages, ...topicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};

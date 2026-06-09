import type { APIRoute } from 'astro';
import { posts } from '../data/blog';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://yourportfolio.dev';

  const staticPages = ['', 'portfolio', 'blog', 'contact'].map((path) => ({
    url: `${baseUrl}/${path}`.replace(/\/$/, ''),
    lastmod: new Date().toISOString().split('T')[0],
    priority: path === '' ? '1.0' : '0.8',
  }));

  const blogPosts = posts.map(post => ({
    url: post.mediumUrl,
    lastmod: post.publishedAt,
    priority: post.featured ? '0.9' : '0.7',
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${blogPosts.map(post => `
  <url>
    <loc>${post.url}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <priority>${post.priority}</priority>
    <changefreq>monthly</changefreq>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
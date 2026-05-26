# AGENTS.md — Portfolio Project

## Project Type
Greenfield Astro portfolio website (static-first, SSR optional).

## Tech Stack
- **Framework**: Astro 4.x
- **Language**: TypeScript (strict)
- **Styling**: TailwindCSS 3.x
- **Animations**: Framer Motion (optional, check compatibility)
- **Content**: MDX support
- **Theme**: Dark mode only

## Key Architecture Decisions

### Blog: JSON-based CMS
- Blog posts stored in `/src/data/blog/posts.json`
- Each post: id, title, description, coverImage, publishedAt, tags, mediumUrl, readingTime, featured
- NO full article hosting — Medium is canonical source
- Posts redirect externally to Medium articles
- Pagination: initially load 9, then lazy-load 12 more on scroll

### Contact: EmailJS (no backend required)
- Use EmailJS for frontend-safe email sending
- Configure via environment variables
- Include honeypot spam protection, loading states, success/error feedback

### Layout
- Desktop: fixed left sidebar + scrollable right content area
- Sidebar: profile image, name, title, social links, email, location, CV download, status indicator, AWS cert badge
- Mobile: sidebar collapses elegantly

## Sections
1. **About**: Hero, professional summary, highlights (animated metrics), technologies grid
2. **Resume**: Education timeline, experience timeline, achievements, certifications, skills
3. **Portfolio**: Premium project cards with thumbnail, title, description, tech stack, links, tags, hover effects
4. **Blog**: Masonry/grid layout, infinite scroll, tag filtering, featured article support
5. **Contact**: Contact card, social links, email, contact form

## Design Philosophy
- Dark premium UI, rounded corners, soft borders, subtle glassmorphism
- Minimalist navigation, strong typography hierarchy, grid-based layouts
- Subtle animations only — scroll reveals, hover transitions, animated counters
- Do NOT generate generic layouts; feel premium and handcrafted

## Developer Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Lint code
```

## SEO Requirements
- OpenGraph, Twitter cards, sitemap, robots.txt
- Dynamic meta tags, structured data, semantic HTML, canonical URLs

## Deployment Targets
- Vercel, Netlify, Cloudflare Pages (all static-compatible)

## Reference
- Full requirements in `requerimientos.md` — source of truth for design and architecture decisions.
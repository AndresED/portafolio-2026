# ROLE

You are a Senior Frontend Architect, UX/UI Engineer, and Astro Specialist.

Your task is to design and generate a complete modern personal portfolio website for a Senior Backend &amp; Cloud Engineer using Astro.

The website must follow the visual style, layout philosophy, and interaction patterns inspired by the provided references, while adapting the branding, content, and technical positioning to the profile described below.

The final result must look modern, premium, minimalist, technical, elegant, cloud-oriented, and recruiter-friendly.

---

# PRIMARY OBJECTIVE

Build a personal portfolio website that positions the owner as:

- Senior Backend Engineer

- AWS Cloud Developer

- Backend Architect

- AI &amp; Cloud Integration Engineer

- Microservices Specialist

The portfolio should communicate:

- Technical seniority

- Cloud expertise

- Clean architecture knowledge

- Distributed systems experience

- Leadership

- Professional branding

- Modern engineering mindset

---

# TECHNOLOGY STACK

Use the following stack:

- Astro

- TypeScript

- TailwindCSS

- Framer Motion (optional if compatible)

- MDX support for blog rendering

- Static-first architecture

- Responsive design

- Dark mode only

- SEO optimized

- Component-based architecture

---

# DESIGN STYLE

The visual style MUST be heavily inspired by the references provided.

Important design characteristics:

- Dark premium UI

- Rounded corners

- Soft borders

- Subtle glassmorphism

- Sidebar profile card

- Main content panel

- Minimalist navigation

- Technical/professional aesthetics

- Smooth hover animations

- Clean spacing

- Subtle gradients

- Strong typography hierarchy

- Grid-based layouts

- Scroll-based transitions

- Elegant card components

- Minimal but premium animations

DO NOT generate generic bootstrap-like layouts.

The design must feel handcrafted and premium.

---

# GENERAL LAYOUT STRUCTURE

Desktop layout:

- Left sidebar fixed/sticky

- Right content area scrollable

- Responsive mobile adaptation

- Sidebar collapses elegantly on mobile

The sidebar must contain:

- Profile image

- Name

- Professional title

- Short tagline

- Social links

- Email

- Location

- Download CV button

- Current status indicator

- AWS certification badge (In Progress)

---

# WEBSITE SECTIONS

The portfolio must contain the following sections:

1. About

2. Resume

3. Portfolio

4. Blog

5. Contact

---

# ABOUT SECTION

This section should contain:

## Hero

- Professional title

- Technical branding

- Strong introduction

- Animated highlights

Suggested branding:

"Senior Backend Engineer | AWS Cloud Developer | NestJS Specialist"

---

## Professional Summary

Use content inspired by:

- Backend architecture

- Cloud-native systems

- AWS

- NestJS

- Microservices

- Distributed systems

- CQRS

- Hexagonal architecture

- SaaS systems

- AI integrations

The tone must sound senior-level and professional.

---

## Highlights Section

Display animated metrics/cards such as:

- 5+ Years Experience

- 10+ Integrations

- Multi-tenant SaaS Experience

- AWS Cloud Experience

- Microservices Architectures

- Backend Team Leadership

---

## Technologies Section

Display categorized technologies:

### Backend

- Node.js

- NestJS

- PHP

- Laravel

- Python

- FastAPI

### Frontend

- Angular

- React

- Ionic

### Databases

- MongoDB

- PostgreSQL

- Redis

- DynamoDB

### Cloud &amp; DevOps

- AWS

- Docker

- Kubernetes

- CI/CD

- Firebase

- Google Cloud

### Messaging

- Kafka

- RabbitMQ

- NATS

- MQTT

- gRPC

---

# RESUME SECTION

This section should visually resemble a modern interactive resume.

Include:

- Education timeline

- Experience timeline

- Achievements

- Certifications

- Skills

- Download CV button

---

# EXPERIENCE CONTENT

Use the following positioning:

## Tres Astronautas

Senior Backend Engineer / Backend Mentor

Focus on:

- Microservices

- SaaS

- AWS

- CI/CD

- Team leadership

- Hexagonal Architecture

- CQRS

- Distributed systems

- Integrations

- Backend scalability

---

## Think In

Full Stack Engineer

Focus on:

- APIs

- IoT

- Mobile apps

- Angular

- Distributed systems

- Cloud deployments

- Payment integrations

---

# PORTFOLIO SECTION

The portfolio section must use premium project cards.

Each project card should contain:

- Thumbnail

- Project title

- Description

- Tech stack

- GitHub link

- Live demo link

- Tags

- Hover effects

- Optional animated preview

---

# PROJECTS TO SHOW

Generate placeholder structure for:

1. AWS Serverless Backend

2. NestJS Hexagonal Architecture Boilerplate

3. AI + AWS Bedrock Integration

4. Distributed Microservices System

5. IoT Monitoring Platform

6. Multi-tenant SaaS Architecture

7. CQRS Event-Driven Backend

8. CI/CD Deployment Platform

---

# BLOG SECTION (IMPORTANT)

The blog system must be designed carefully.

The website owner wants to manage blog posts manually from a JSON-based structure.

---

# BLOG ARCHITECTURE REQUIREMENTS

Implement a lightweight CMS-like architecture using local JSON files.

Example:

/src/data/blog/posts.json

Each blog entry should contain:

```json

{

  "id": "aws-lambda-best-practices",

  "title": "AWS Lambda Best Practices",

  "description": "Best practices for scalable serverless applications.",

  "coverImage": "[https://cdn.medium.com/example-image.jpg](https://cdn.medium.com/example-image.jpg)",

  "publishedAt": "2026-01-15",

  "tags": ["AWS", "Lambda", "Serverless"],

  "mediumUrl": "[https://medium.com/@username/article](https://medium.com/@username/article)",

  "readingTime": "5 min",

  "featured": true

}

```

---

# BLOG UI REQUIREMENTS

The blog section should support:

- Dynamic rendering from JSON

- Infinite scroll OR progressive pagination

- Masonry/grid layout

- Smooth loading transitions

- Featured article support

- Lazy loading

- Responsive cards

- Search filtering

- Tag filtering

- Chronological sorting

---

# BLOG PAGINATION REQUIREMENT

IMPORTANT:

The user wants a hybrid pagination system.

Behavior:

- Initially load 9 posts

- As user scrolls:

  - Load 12 more

  - Continue progressively

- Infinite-scroll-like experience

- Smooth content append

- No full page reloads

This should be implemented efficiently.

---

# MEDIUM INTEGRATION

The blog posts will redirect to Medium articles.

The website itself should NOT host full article content.

Instead:

- Use local JSON metadata

- Use Medium as canonical source

- Open articles externally

- Allow easy manual JSON updates

The architecture must make adding articles extremely easy.

---

# CONTACT SECTION

The contact section must look premium and modern.

Include:

- Contact card

- Social links

- Email

- Professional CTA

- Optional map

- Contact form

---

# EMAIL SERVICE REQUIREMENT (IMPORTANT)

The portfolio is static/frontend-first.

The owner wants to send emails directly from frontend safely.

Propose and implement the BEST frontend-compatible solution.

Recommended approach:

## Option 1 (Preferred)

Use EmailJS

Requirements:

- No custom backend required

- Works directly from frontend

- Environment variable support

- Spam protection

- Loading states

- Success/error feedback

- Clean service abstraction

---

## Option 2

Use Resend + Serverless Endpoint

If Astro server endpoints are enabled:

- Create secure API route

- Use Resend API

- Environment variables

- Rate limiting

- Honeypot spam protection

Explain which option is better and why.

---

# CONTACT FORM FEATURES

Include:

- Name

- Email

- Message

- Optional attachment support

- Validation

- Loading state

- Success feedback

- Error handling

- Anti-spam protection

- Modern UI

---

# SEO REQUIREMENTS

Implement:

- OpenGraph

- Twitter cards

- Sitemap

- Robots.txt

- Dynamic meta tags

- Structured data

- Semantic HTML

- Canonical URLs

---

# PERFORMANCE REQUIREMENTS

The portfolio must prioritize performance.

Requirements:

- Lazy loaded images

- Optimized fonts

- Astro islands architecture

- Minimal hydration

- Static rendering where possible

- Lighthouse optimized

- Responsive image handling

---

# ACCESSIBILITY REQUIREMENTS

Implement:

- Keyboard navigation

- Proper aria labels

- Semantic structure

- Contrast-safe UI

- Focus states

---

# ANIMATION REQUIREMENTS

Animations must be subtle and premium.

Examples:

- Fade-in sections

- Scroll reveal

- Smooth hover transitions

- Card elevation

- Sidebar interactions

- Animated counters

- Gradient transitions

DO NOT overuse animations.

---

# FILE STRUCTURE REQUIREMENTS

Generate a scalable architecture.

Example:

```bash

src/

 ├── components/

 ├── layouts/

 ├── pages/

 ├── sections/

 ├── data/

 ├── styles/

 ├── lib/

 ├── content/

 ├── types/

 └── utils/

```

---

# COMPONENTIZATION

Create reusable components for:

- Cards

- Buttons

- Blog cards

- Timeline items

- Tech badges

- Navigation

- Sidebar

- Contact form

- Pagination loader

- Metrics cards

---

# CONTENT POSITIONING

The entire portfolio should reinforce these concepts:

- Backend Architecture

- Cloud Engineering

- AWS

- Scalability

- Distributed Systems

- AI Integrations

- SaaS

- Technical Leadership

- Clean Architecture

- CQRS

- Microservices

- Event-Driven Systems

---

# PERSONAL BRANDING

The website should feel like:

- A senior engineer portfolio

- A cloud engineer portfolio

- A backend architect showcase

- A technical personal brand

- A modern engineering hub

NOT a beginner portfolio.

---

# FINAL OUTPUT EXPECTATIONS

Generate:

- Full Astro project structure

- Reusable architecture

- Clean code

- Production-ready patterns

- Maintainable folder structure

- Responsive implementation

- Tailwind styling system

- Blog JSON architecture

- Contact form integration

- SEO setup

- Example data

- Recommended dependencies

- Deployment recommendations

---

# DEPLOYMENT TARGETS

The project should be easily deployable to:

- Vercel

- Netlify

- Cloudflare Pages

---

# EXTRA REQUIREMENTS

- Use TypeScript everywhere

- Avoid unnecessary dependencies

- Keep architecture clean

- Prefer maintainability over complexity

- Prioritize scalability

- Use professional naming conventions

---

# FINAL IMPORTANT NOTE

The portfolio must feel like the website of a real senior backend/cloud engineer with strong architectural knowledge and modern technical branding.

The result should be visually premium, technically impressive, scalable, and recruiter-ready.
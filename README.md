# Portfolio — Andrés Esquivel

Personal portfolio website built with Astro, TypeScript, and TailwindCSS. Dark-themed, bilingual (EN/ES), and fully static.

**Live:** [andresed.dev](https://www.andresed.dev/)

## Tech Stack

- **Framework:** Astro 5
- **Language:** TypeScript (strict)
- **Styling:** TailwindCSS 3
- **Content:** JSON-based data files
- **i18n:** Custom dictionary with EN/ES toggle

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── assets/            # Static assets (avatar, etc.)
├── components/
│   └── sections/      # About, Resume, Portfolio, Blog, Contact
├── data/
│   ├── blog/          # Publications data (posts.json + index.ts)
│   ├── profile.ts     # Name, socials, email, CV URL
│   ├── projects.ts    # Portfolio project cards
│   ├── resume.ts      # Experience, education, certifications, skills
│   └── site.ts        # Site metadata
├── i18n/
│   └── dictionary.ts  # EN/ES translations
├── layouts/           # BaseLayout, MainLayout (sidebar + nav)
├── pages/             # index.astro, sitemap.xml.ts
├── styles/            # Global CSS
└── types/             # TypeScript interfaces
public/
├── fonts/
└── images/
    ├── blog/          # Publication cover images
    └── projects/      # Project thumbnail images
```

## Sections

| Section | Description |
|---|---|
| **About** | Hero, professional summary, technologies grid |
| **Resume** | Experience timeline, education, certifications, skills |
| **Portfolio** | Project cards with thumbnails, tech stack, GitHub links |
| **Publications** | Articles from [makingcode.dev](https://www.makingcode.dev/) |
| **Contact** | Contact form (EmailJS), email, social links |

## Configuration

- **Profile data:** `src/data/profile.ts`
- **Projects:** `src/data/projects.ts`
- **Publications:** `src/data/blog/index.ts`
- **Resume:** `src/data/resume.ts`
- **Translations:** `src/i18n/dictionary.ts`

### EmailJS (Contact Form)

Create a `.env` file with:

```
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Deployment

Static output compatible with Vercel, Netlify, and Cloudflare Pages.

## License

MIT

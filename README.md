# Portfolio — Andrés Esquivel

Personal portfolio for a Senior Backend Engineer. Built with Astro, TypeScript, and Tailwind CSS. Dark-themed, bilingual (EN/ES), and fully static.

**Live:** [andresed.dev](https://www.andresed.dev/)

## Tech Stack

- **Framework:** Astro 5 (static output)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS 3
- **Content:** Typed data files (`src/data/`)
- **i18n:** Custom dictionary with EN/ES toggle (saved in browser)
- **Contact:** EmailJS (client-side, optional at build time)

## Getting Started

```bash
# Install dependencies
npm install

# Copy env template and fill EmailJS keys (optional for local contact form)
cp .env.example .env

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type check
npm run lint
```

## Project Structure

```
src/
├── assets/              # Optimized images (avatar, projects, blog covers)
├── components/
│   └── sections/        # Hero, About, Resume, Portfolio, Blog, Contact
├── config/
│   └── features.ts      # Build-time feature flags
├── data/
│   ├── blog/            # Publications (posts.json + index.ts)
│   ├── profile.ts       # Name, email, socials, CV URL, stack line
│   ├── projects.ts      # Portfolio project cards
│   ├── resume.ts        # Experience, education, certifications, skills
│   └── site.ts          # SEO / site metadata
├── i18n/
│   └── dictionary.ts    # EN/ES translations
├── layouts/             # BaseLayout, MainLayout (sidebar + nav)
├── pages/
│   ├── index.astro      # Home (About, Featured, Resume, Certifications, CTA)
│   ├── portfolio/       # Full project gallery
│   ├── blog/            # Publications
│   ├── contact/         # Contact form + direct links
│   └── sitemap.xml.ts
├── styles/
│   └── global.css
└── types/
public/
├── cv.pdf               # Downloadable CV
├── fonts/
└── images/              # OG image, favicons, legacy assets
```

## Pages & Sections

| Route | Content |
|-------|---------|
| `/` | Hero, About, featured projects, resume, certifications, contact CTA |
| `/portfolio` | Full project gallery with category filters |
| `/blog` | Publications linking to [makingcode.dev](https://www.makingcode.dev/) |
| `/contact` | EmailJS form, email, location, social links |

## Configuration

| What | File |
|------|------|
| Profile, email, socials, CV | `src/data/profile.ts` |
| Projects | `src/data/projects.ts` |
| Publications | `src/data/blog/index.ts` |
| Resume & certifications | `src/data/resume.ts` |
| Translations | `src/i18n/dictionary.ts` |
| SEO defaults | `src/data/site.ts` |

Replace `public/cv.pdf` when updating the downloadable CV.

### Environment Variables

Copy `.env.example` to `.env` for local development. In production (Vercel, Netlify, Cloudflare Pages), set the same variables in the hosting dashboard **before** running `npm run build` — Astro inlines `PUBLIC_*` values at build time.

```env
# Optional: show in-progress AWS cert on the site (default: hidden)
PUBLIC_SHOW_IN_PROGRESS_CERTIFICATIONS=false

# EmailJS — contact form (https://www.emailjs.com/)
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**`PUBLIC_SHOW_IN_PROGRESS_CERTIFICATIONS`** — When `true`, displays in-progress certifications from `src/data/resume.ts`. After passing an exam, set status to `valid` in that file and keep this `false`.

**EmailJS** — Without the three `PUBLIC_EMAILJS_*` variables, the contact form shows an error instead of sending mail.

#### EmailJS template setup

1. Create a service (Gmail, Outlook, etc.) and a template.
2. In template **Settings**:

   | Field | Value |
   |-------|--------|
   | **To Email** | `{{to_email}}` |
   | **Reply To** | `{{from_email}}` |
   | **Subject** | `[Portfolio] {{subject}}` |

3. Template variables sent by the form:

   - `{{to_email}}` — from `profile.email` in `src/data/profile.ts`
   - `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

4. In EmailJS **Account → Security**, allow your production domain and `localhost` for local testing.

## Utility Scripts

```bash
npm run optimize-images    # Compress / convert images via Sharp
npm run generate-favicons  # Regenerate favicon set
npm run generate-og-image  # Regenerate Open Graph image
```

## Deployment

Static output (`dist/`) works on Vercel, Netlify, Cloudflare Pages, or any static host.

1. Set environment variables in the hosting panel.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Redeploy after changing `PUBLIC_*` env vars or `.env` locally before build.

## License

MIT

# Dr. Montgomery — Premium Doctor Portfolio Website

A modern, award-winning doctor portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion.

---

## Prerequisites

Install these before anything else:

| Tool | Minimum Version | Download |
|------|----------------|----------|
| **Node.js** | v18.17+ (v20+ recommended) | [nodejs.org](https://nodejs.org) |
| **npm** | v9+ (comes with Node) | bundled with Node |
| **Git** | any | [git-scm.com](https://git-scm.com) |

> **Check your versions:**
> ```bash
> node --version   # should print v18.x or higher
> npm --version    # should print 9.x or higher
> ```

---

## Installation & Running

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd docwebsite

# 2. Install all dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## All npm Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload at localhost:3000 |
| `npm run build` | Build for production (outputs to `.next/`) |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## Dependencies (Auto-installed via `npm install`)

All packages below are installed automatically. This is just for reference.

### Core Framework
| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.x | App framework (App Router) |
| `react` | 19.x | UI library |
| `react-dom` | 19.x | React DOM renderer |
| `typescript` | 5.x | Type safety |

### Styling
| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | 4.x | Utility-first CSS |
| `tw-animate-css` | 1.x | Tailwind animation utilities |
| `tailwind-merge` | 3.x | Merge Tailwind classes safely |
| `clsx` | 2.x | Conditional classNames |
| `class-variance-authority` | 0.7.x | Variant-based styles |

### Animations
| Package | Version | Purpose |
|---------|---------|---------|
| `framer-motion` | 12.x | Page animations, transitions, parallax |

### UI Components
| Package | Version | Purpose |
|---------|---------|---------|
| `@base-ui/react` | 1.x | Headless UI primitives (accordion) |
| `lucide-react` | 1.x | Icon library |
| `shadcn` | 4.x | Component CLI (used during setup) |

### Forms & Validation
| Package | Version | Purpose |
|---------|---------|---------|
| `react-hook-form` | 7.x | Form state management |
| `@hookform/resolvers` | 5.x | Connect RHF with Zod |
| `zod` | 4.x | Schema validation |

### Calendar / Date Picker
| Package | Version | Purpose |
|---------|---------|---------|
| `react-day-picker` | 10.x | Calendar component |
| `date-fns` | 4.x | Date utilities |

---

## Images Required

The site needs 3 images in `public/images/`. **The site works without them** (fallback backgrounds are shown), but adding them completes the design.

| Filename | Section | Specs |
|----------|---------|-------|
| `public/images/doctor.png` | Hero + About | PNG, transparent or plain background, ~480×580px min |
| `public/images/clinic-bg.jpg` | Hero background | JPG, landscape, 1920×1080px recommended |
| `public/images/doctor-about.jpg` | About section (optional) | JPG, portrait, ~800×1000px |

---

## Project Structure

```
docwebsite/
├── app/
│   ├── globals.css        ← Design tokens, colors, glass effects
│   ├── layout.tsx         ← Root layout + SEO metadata
│   └── page.tsx           ← Main page
├── components/
│   ├── Navbar.tsx         ← Floating glass navbar
│   ├── HeroSection.tsx    ← Hero with doctor image + CTA
│   ├── AchievementsSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── AppointmentSection.tsx ← Booking form
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── FloatingCTA.tsx    ← Mobile sticky button
│   ├── ScrollProgress.tsx ← Yellow top progress bar
│   └── ThemeProvider.tsx  ← Dark mode toggle
├── public/
│   └── images/            ← Put doctor.png and clinic-bg.jpg here
└── package.json
```

---

## Deployment (Vercel — Recommended)

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel --prod

# Option 2: Push to GitHub → connect repo at vercel.com
```

No extra configuration needed — Vercel auto-detects Next.js.

---

## Common Issues

| Problem | Fix |
|---------|-----|
| `npm install` fails | Ensure Node ≥ 18.17. Run `node --version` to check. |
| Port 3000 in use | Run `npm run dev -- --port 3001` |
| Images not showing | Check filenames match exactly (case-sensitive on Linux/Mac) |
| Dark mode stuck | Clear `localStorage` in browser DevTools → Application → Storage |
| Build fails with TS errors | Run `npx tsc --noEmit` to see errors, then fix them |

---

## Tech Stack Summary

```
Next.js 15 (App Router)  →  Framework
TypeScript 5             →  Type safety
Tailwind CSS v4          →  Styling
Framer Motion 12         →  Animations
React Hook Form + Zod    →  Form validation
Lucide React             →  Icons
```

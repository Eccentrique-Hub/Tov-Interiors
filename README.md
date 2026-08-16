# Tov Interiors — Website & Client Platform

The official website for **Tov Interiors and Integrated Services** — a full-service interior design, construction, and facility management company. This repo covers the public marketing site (Phase 1) and the phased rollout toward a full client/artisan platform (Phases 2–4).

> Built and maintained for Tov Interiors and Integrated Services. If you're a new developer joining this project, read this file top to bottom before touching code.

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features & Roadmap](#features--roadmap)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Naming Conventions](#naming-conventions)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Design System](#design-system)
- [Git Workflow & Branching](#git-workflow--branching)
- [Code Quality & Pre-Commit Hooks](#code-quality--pre-commit-hooks)
- [CI/CD](#cicd)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

Tov Interiors and Integrated Services manages a project's entire lifecycle — design, renovation, custom furniture/décor sourcing, project management, construction, architectural/3D visualization, and ongoing facility management — under one team. This website exists to make that "concept to completion, and everyday after" claim tangible: a credible public-facing portfolio and booking flow first, then a real transparency layer where clients can see project progress and artisans can log their own work.

Full product requirements, market research, and the phased rollout plan live in the project's PRD (`/docs/PRD.md` if added to this repo — ask the project owner if it isn't there yet).

**Company:** Tov Interiors and Integrated Services
**CEO & Creative Director:** Eddy Osugbo
**Contact:** 0807 496 3381 / 0902 936 7190

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) | SSR/SSG for SEO, built-in image optimization, API routes, one codebase for both the public site and the future authenticated app |
| Language | TypeScript | Catches data-shape mistakes early — matters once forms, auth, and project data are involved |
| Styling | Tailwind CSS | Fast, consistent, deliberate styling without a proliferation of one-off CSS files |
| Forms & validation | react-hook-form + zod | Proper form state, validation, and error handling for the booking/quote and contact forms |
| Icons | lucide-react | Clean, consistent icon set |
| Package manager | **pnpm** — do not use npm or yarn in this repo | Faster installs, strict dependency resolution, single lockfile (`pnpm-lock.yaml`) |
| Hosting/CD | [Vercel](https://vercel.com) | Zero-config deploys tied directly to Git branches |

---

## Features & Roadmap

This project ships in four phases. Do not skip ahead — each phase is a genuine dependency for the next.

- [x] **Phase 1 — Public site:** Home, Services, Portfolio, About, Book/Quote, Contact
- [ ] **Phase 2 — 3D visualization showcase:** presenting architectural renders/walkthroughs
- [ ] **Phase 3 — Client progress tracking:** client login + dashboard, curated progress timeline
- [ ] **Phase 4 — Artisan logging:** artisan login, daily log entry, admin review/curation pipeline

---

## Getting Started

### Prerequisites

- **Node.js** (LTS) — [nodejs.org](https://nodejs.org)
- **pnpm** — enable via Corepack:
  ```
  corepack enable
  corepack prepare pnpm@latest --activate
  ```
- **Git**

### Installation

```bash
git clone https://github.com/YOUR-ORG/tov-interiors.git
cd tov-interiors
pnpm install
```

Husky hooks install automatically as part of `pnpm install` (see [Code Quality & Pre-Commit Hooks](#code-quality--pre-commit-hooks)).

### Running locally

```bash
pnpm dev
```

Visit **http://localhost:3000**.

---

## Project Structure

```
tov-interiors/
├── .github/
│   ├── workflows/            # CI + malware-scan GitHub Actions
│   ├── CODEOWNERS
│   ├── dependabot.yml
│   └── pull_request_template.md
├── .husky/                   # pre-commit / pre-push git hooks
├── public/
│   └── images/                # static images — hero, portfolio, team, services
├── src/
│   ├── app/                   # routes (App Router) — folder = URL path
│   │   ├── page.tsx            → "/"            (Home)
│   │   ├── layout.tsx          # wraps every page (Navbar + Footer)
│   │   ├── not-found.tsx       # custom 404
│   │   ├── services/page.tsx   → "/services"
│   │   ├── portfolio/
│   │   │   ├── page.tsx        → "/portfolio"
│   │   │   └── [slug]/page.tsx → "/portfolio/:slug"  (dynamic project page)
│   │   ├── about/page.tsx      → "/about"
│   │   ├── book/page.tsx       → "/book"
│   │   └── contact/page.tsx    → "/contact"
│   └── components/
│       ├── ui/                 # generic reusable pieces (Button, Input, SectionHeader)
│       ├── layout/              # Navbar, Footer — present on every page
│       └── sections/            # larger page-specific blocks (Hero, TeamGrid, CTABand)
├── .editorconfig
├── .eslintrc / eslint.config.mjs
├── .prettierrc.json
├── .prettierignore
├── .lintstagedrc.json
├── .nvmrc
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml              # commit this — never edit by hand, never delete
```

**Core rule:** a folder inside `src/app/` is a route. A `page.tsx` inside it is what renders there. The folder structure *is* the sitemap.

---

## Naming Conventions

One convention, applied everywhere — don't introduce a second style:

| Thing | Convention | Example |
|---|---|---|
| Project/repo/Vercel project name | kebab-case, identical everywhere it's referenced | `tov-interiors` |
| Route folders (`src/app/`) | kebab-case | `portfolio/`, `not-found.tsx` |
| Reusable component files | PascalCase | `Navbar.tsx`, `ServicesPreview.tsx` |
| Component sub-folders | lowercase, single word | `ui/`, `layout/`, `sections/` |
| Image files | kebab-case, descriptive | `lekki-penthouse-1.jpg` |
| Dynamic route slugs | kebab-case | `/portfolio/vi-office-fitout` |
| Next.js framework files | lowercase (required by the framework — don't rename) | `page.tsx`, `layout.tsx`, `globals.css` |

---

## Available Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Start the local dev server |
| `pnpm build` | Production build (also run in CI) |
| `pnpm start` | Serve the production build locally |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm format` | Run Prettier across the repo |
| `pnpm format:check` | Check formatting without writing changes (used in CI) |
| `pnpm typecheck` | Run `tsc --noEmit` |
| `pnpm check` | Run format:check + lint + typecheck together — same command used by the pre-push hook and CI |

You should rarely need `pnpm format` manually — Prettier runs automatically on every commit (see below).

---

## Environment Variables

Copy `.env.example` to `.env.local` for local development (never commit `.env.local`):

```bash
cp .env.example .env.local
```

| Variable | Purpose | Required for |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used for metadata/SEO tags | All phases |
| `BOOKING_FORM_ENDPOINT` | Where booking/quote submissions are sent | Phase 1 |
| `CONTACT_FORM_ENDPOINT` | Where contact form submissions are sent | Phase 1 |
| _(auth/session secrets)_ | Client and artisan login | Phase 3–4, added when built |

Production, staging, and preview values are set separately in Vercel's Environment Variables settings, scoped per environment — never point preview/dev deployments at production endpoints or real client data.

---

## Design System

Defined centrally so it's applied consistently rather than redefined per component:

- **Typography:** serif/display font for headlines, clean sans-serif for body — configured via `next/font/google` in `src/app/layout.tsx`
- **Colors:** warm, material-inspired palette (plaster background, charcoal text, one restrained accent) — defined once in `tailwind.config.ts`, used via Tailwind classes (`bg-background`, `text-ink`, `text-accent`) rather than raw hex codes anywhere else
- **Visual direction:** photography-led, editorial pacing, asymmetric layouts — explicitly avoiding generic "AI-template" patterns (drop-shadow cards, filler icon cards, purple gradients, uniform centered grids). Full detail in the project's visual style brief — ask the project owner if you don't have it.

If you're building a new component, match the existing tokens rather than introducing new colors/fonts inline.

---

## Git Workflow & Branching

Three branches, one direction of travel:

```
dev  →  staging  →  main
```

- **`dev`** — active work lands here via PR. Gets ephemeral Vercel preview URLs per PR.
- **`staging`** — pre-production QA/client review. Bound to a stable URL (`staging.tovinteriors.com`). PR from `dev`.
- **`main`** — production. Deploys automatically to the live domain on merge. PR from `staging` only.

**Rules:**
- No direct pushes to `main` or `staging` — everything goes through a PR.
- Every PR must pass CI (lint, format check, typecheck, build) and the malware scan before it's mergeable — enforced via required status checks in branch protection, not just convention.
- Feature work: branch off `dev` (`feature/short-description` or similar), PR back into `dev`.

---

## Code Quality & Pre-Commit Hooks

This repo uses Husky + lint-staged so formatting/linting happens automatically — you should not be manually running `prettier --write`.

- **On `git commit`:** lint-staged runs Prettier (`--write`) and ESLint (`--fix`) on staged files only, then re-stages them. Formatting issues are fixed silently before the commit is created.
- **On `git push`:** `pnpm check` runs (format check + lint + typecheck). A failing check blocks the push locally.

If a push is ever made with `--no-verify`, it still has to pass CI on the PR — the pre-push hook is a fast local convenience, not the actual enforcement mechanism.

---

## CI/CD

- **CI** (`.github/workflows/ci.yml`) — runs on every PR into `dev`/`staging`/`main`: install, format check, lint, typecheck, build.
- **Malware scan** (`.github/workflows/malware-scan.yml`) — runs on every PR and on push to `staging`/`main`, scanning for known supply-chain/malware signatures.
- Both are **required status checks** — a PR cannot be merged until both pass, enforced by branch protection on `main`/`staging`.
- **CD** is handled by Vercel directly: pushing to `main` triggers a Production deployment; every other branch/PR gets a Preview deployment automatically. No manual deploy steps.

---

## Deployment

Hosted on **Vercel**, connected directly to this repo.

- Production branch: `main` → deploys to the live domain
- `staging` branch: bound to `staging.tovinteriors.com`
- All other branches/PRs: automatic preview URLs

Environment variables are scoped per environment in Vercel's dashboard (Production / Preview / Development) — see [Environment Variables](#environment-variables).

---

## Contributing

1. Branch off `dev`.
2. Make your changes — commit normally; formatting/linting happens automatically via the pre-commit hook.
3. Before pushing, `pnpm check` should already be passing (the pre-push hook runs this for you).
4. Open a PR into `dev`. Fill out the PR template. Wait for CI + malware scan to pass and for a review.
5. Once merged into `dev` and later promoted through `staging` → `main`, it goes live automatically.

Please don't introduce a second styling approach, a second component-naming convention, or a second package manager into this repo — consistency here is deliberate, not accidental.

---

## License

Private and proprietary. All rights reserved by Tov Interiors and Integrated Services. Not licensed for reuse, redistribution, or public deployment outside of this project.

---

## Contact

**Eddy Osugbo** — CEO & Creative Director, Tov Interiors and Integrated Services
📞 0807 496 3381 / 0902 936 7190

For technical questions about this repository, open an issue or reach the current maintaining developer directly.
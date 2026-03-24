# Worldcom Finance Website

## Quick Start

```bash
npm install
npm run dev        # Dev server on http://localhost:3000 (Turbopack)
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint
```

## Overview

Worldcom Finance landing page — fintech cross-border financial solutions. Desktop-first (1920px), single page, multi-page architecture ready.

## Tech Stack

- Next.js 16.2.1 (App Router, Turbopack)
- TypeScript 5.x
- Tailwind CSS v4 (`@theme` design tokens)
- Framer Motion (scroll animations, `prefers-reduced-motion` via MotionProvider)
- Roboto font (weights: 400, 500, 600, 700, 800) via `next/font/google`

## Project Structure

```
src/
  app/
    layout.tsx              # Root layout: Roboto font, Header, Footer, MotionProvider
    page.tsx                # Homepage: assembles all section components
    globals.css             # Tailwind v4 @theme design tokens
  components/
    layout/
      Header.tsx            # Fixed header, transparent → white+blur on scroll
      Footer.tsx            # 4-column footer with links, social, app badges
    sections/
      Hero.tsx              # Layered bg, animated headline, phone mockup
      Partners.tsx          # 6 financial institution logos
      MoneyTransfer.tsx     # Dark section, 4 photo cards with gradient overlay
      BusinessSolutions.tsx # Two-column: text+CTA left, illustration right
      NewApplication.tsx    # Phone mockups, glassmorphism cards, blend-mode glow
      FeatureCards.tsx      # Digital Wallet + SIM Top-Up white cards
      WPayCard.tsx          # Credit card images + CTA
    ui/
      Button.tsx            # Reusable pill CTA button
      AnimatedSection.tsx   # Scroll-triggered fade-in wrapper
      MotionProvider.tsx    # Framer Motion config (reducedMotion support)
  lib/
    assets.ts               # All asset paths (centralized)
public/images/              # 41 assets downloaded from Figma
docs/plans/                 # Design docs and implementation plans
```

## Key Files

- `src/app/globals.css` — All design tokens (colors, spacing, radii)
- `src/lib/assets.ts` — Single source of truth for all image paths
- `src/components/ui/Button.tsx` — Shared CTA button (used in Hero, BusinessSolutions, WPayCard)

## Design Tokens

Defined in `globals.css` via Tailwind `@theme`:

| Token | Value | Usage |
|-------|-------|-------|
| `page-bg` | `#fbfdff` | Page background |
| `gray-900` | `#0b0b0b` | Dark sections, buttons |
| `text-primary` | `#1e1e1e` | Main text |
| `text-grey` | `#626771` | Footer/secondary |
| `text-light-50` | `rgba(255,255,255,0.5)` | Muted on dark |
| `radius-2xl` | `24px` | Cards |
| `radius-pill` | `28px` | Buttons |

## Figma Source

- File: `https://figma.com/design/uUDxtBDovcR3ggnV3OW17J/Web-2.0?node-id=309-986`
- Node `309:986` — "Web - 2.0 - Homepage" (light theme, 1920px)

## Conventions

- All section components are `"use client"` (Framer Motion requires it)
- SVG images **must** use `unoptimized` prop on Next.js `<Image>`. PNGs should NOT.
- Assets centralized in `src/lib/assets.ts` — never use raw paths in components
- Animations use `whileInView` with `viewport={{ once: true }}`
- Footer links and social icons must be wrapped in `<a>` tags (accessibility)
- Single `<h1>` per page; use `<span className="block">` for multi-line headings

## Gotchas

- **SVG files with `.svg` extension**: Several assets were originally served as PNGs from Figma but are actually SVGs. They were renamed to `.svg`. Always check `file` output if an image doesn't render.
- **Desktop-only layout**: All sections use hardcoded pixel widths (1556px container, 1920px sections). No responsive breakpoints exist yet. The NewApplication section uses absolute pixel positioning for glassmorphism cards.
- **Roboto font weights**: Weights 600 and 800 may not exist in classic Roboto; `next/font/google` silently falls back to nearest available weight. Consider Roboto Flex if exact weights matter.
- **Hero phone mockup**: Positioned with `right-[-168px]` to extend past viewport edge. The section uses `overflow-hidden` to clip it.
- **NewApplication blend-mode**: Uses a duplicate phone image with `mix-blend-screen` at 70% opacity for the glow effect. Both layers must use the same image.
- **Figma asset URLs expire in 7 days**: All assets are downloaded to `public/images/`. If re-downloading, use the Figma MCP tool and check file types.

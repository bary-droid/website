# Worldcom Finance Website

## Project Overview
- Worldcom Finance landing page - a fintech cross-border financial solutions website
- Built with Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion
- Desktop-first design (1920px), single page currently, multi-page architecture ready

## Tech Stack
- Next.js 16.2.1 with App Router and Turbopack
- TypeScript 5.x
- Tailwind CSS v4 with @theme design tokens
- Framer Motion for scroll-triggered animations
- Roboto font (weights: 400, 500, 600, 700, 800) via next/font/google

## Project Structure
- `src/app/` - Next.js App Router pages and layout
- `src/components/layout/` - Header, Footer
- `src/components/sections/` - Hero, Partners, MoneyTransfer, BusinessSolutions, NewApplication, FeatureCards, WPayCard
- `src/components/ui/` - Reusable Button, AnimatedSection
- `src/lib/assets.ts` - Centralized asset paths
- `public/images/` - All image assets downloaded from Figma
- `docs/plans/` - Design documents and implementation plans

## Commands
- `npm run dev` - Start dev server (Turbopack)
- `npm run build` - Production build
- `npm run lint` - ESLint

## Design System
- Design tokens defined in `src/app/globals.css` using Tailwind CSS v4 `@theme`
- Colors: page-bg (#fbfdff), gray-900 (#0b0b0b), text-primary (#1e1e1e), text-grey (#626771)
- Spacing tokens: spacing-03 (8px), spacing-05 (16px), spacing-07 (24px), spacing-08 (32px)
- Corner radius: xl (20px), 2xl (24px), pill (28px)

## Figma Source
- File: https://figma.com/design/uUDxtBDovcR3ggnV3OW17J/Web-2.0?node-id=309-986
- Node ID 309:986 (Web - 2.0 - Homepage, light theme)

## Conventions
- All section components are "use client" (Framer Motion requires it)
- SVG images use `unoptimized` prop on Next.js Image component
- Assets centralized in `src/lib/assets.ts`, referenced by local paths
- Animations use Framer Motion's `whileInView` with `viewport={{ once: true }}`
- CTA buttons use the shared Button component from `src/components/ui/Button.tsx`

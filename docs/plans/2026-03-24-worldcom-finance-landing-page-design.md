# Worldcom Finance Landing Page — Design Document

**Date:** 2026-03-24
**Figma Source:** `https://figma.com/design/uUDxtBDovcR3ggnV3OW17J/Web-2.0?node-id=309-986`
**Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion

---

## 1. Overview

A premium fintech landing page for Worldcom Finance / WPay — a cross-border financial solutions platform. Light theme, desktop-first (1920px), multi-page architecture. Smooth scroll-triggered animations via Framer Motion.

## 2. Architecture

```
src/
  app/
    layout.tsx              # Root layout: fonts, metadata, Header + Footer
    page.tsx                # Homepage: assembles all sections
    globals.css             # Tailwind v4 config + design tokens
  components/
    layout/
      Header.tsx            # Transparent → solid on scroll, backdrop-blur
      Footer.tsx            # 4-column footer
    sections/
      Hero.tsx              # Headline + phone mockup + CTA
      Partners.tsx          # 6 financial institution logos
      MoneyTransfer.tsx     # Dark section, 4 photo cards with gradient overlay
      BusinessSolutions.tsx # Text + illustration + client logos
      NewApplication.tsx    # Dark section, phone mockups + glassmorphism cards
      WPayCard.tsx          # Credit card images + CTA
      FeatureCards.tsx      # Digital Wallet + SIM Top-Up side-by-side
    ui/
      Button.tsx            # Reusable pill CTA (dark bg, 291x56, radius-28)
      AnimatedSection.tsx   # Scroll-triggered fade-in wrapper (Framer Motion)
  lib/
    assets.ts               # All Figma asset URLs centralized
  public/
    fonts/                  # Roboto weights: 400, 500, 600, 700, 800
```

## 3. Design Tokens

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--page-bg` | `#fbfdff` | Page background |
| `--page-tertiary-bg` | `#f3f7fe` | Hero underlay (45% opacity) |
| `--gray-900` | `#0b0b0b` | Dark sections, CTA buttons |
| `--orange-600` | `#bf6932` | Hero gradient (40% opacity) |
| `--blue-300` | `#2f80ed` | Accent |
| `--text-primary` | `#1e1e1e` | Primary text |
| `--text-light` | `#ffffff` | Text on dark |
| `--text-light-50` | `rgba(255,255,255,0.5)` | Muted text on dark |
| `--text-grey` | `#626771` | Footer/secondary text |
| `--divider` | `rgba(30,30,30,0.1)` | Footer divider |

### Spacing

| Token | Value |
|-------|-------|
| `--spacing-03` | 8px |
| `--spacing-05` | 16px |
| `--spacing-07` | 24px |
| `--spacing-08` | 32px |

### Corners

| Token | Value | Usage |
|-------|-------|-------|
| `--corner-xl` | 20px | Language button |
| `--corner-2xl` | 24px | Cards |
| `--corner-pill` | 28px | CTA buttons |

### Typography (Roboto)

| Style | Weight | Size | Line Height | Letter Spacing |
|-------|--------|------|-------------|----------------|
| Hero headline | 800 (ExtraBold) | 96px | normal | 0 |
| Section title | 500 (Medium) | 64px | 72px | 0 |
| Partner heading | 500 (Medium) | 24px | normal | 0 |
| Card title | 700 (Bold) | 24px | normal | 0 |
| Nav / CTA | 600 (SemiBold) | 16-18px | 20-22px | 0 |
| Hero subtitle | 400 (Regular) | 24px | 30px | 0.1px |
| Body | 400 (Regular) | 16-18px | 24px | 0 |
| Footer body | 400 (Regular) | 16px | 24px | 0 |

All text elements use `font-variation-settings: 'wdth' 100`.

## 4. Section Specifications

### 4.1 Header

- **Layout:** Absolute positioned, full width, 40px height, top 32px, 24px horizontal padding
- **Left:** Language button (white bg, 20px radius, 16px padding, "EN" + down arrow icon)
- **Center:** Worldcom Finance logo (centered via ~45% insets)
- **Right:** "Login banking" (lock icon + text) + "Menu" (text + hamburger icon)
- **Font:** Roboto SemiBold 16px/20px, color `#1e1e1e`
- **Scroll behavior:** Starts transparent, transitions to white bg with `backdrop-blur(12px)` + subtle shadow

### 4.2 Hero

- **Background layers (bottom to top):**
  1. `#f3f7fe` at 45% opacity (full 1920x1080)
  2. Background image at 10% opacity (full 1920x1080)
  3. Diagonal gradient overlay with `mix-blend-mode: color`: Orange `rgba(191,105,50,0.4)` at 17% → Blue `rgba(79,148,240,0.4)` at 83%, angle 206.17deg
- **Headline:** "Cross-Border Financial Solutions" — Roboto ExtraBold 96px, `#1e1e1e`, 924px wide, left-aligned ~33% from left
- **Subtitle:** "Streamline your global finances..." — Roboto Regular 24px/30px, letter-spacing 0.1px
- **CTA Button:** "Let's get started" — 291x56px, `#0b0b0b` bg, 28px radius, Roboto SemiBold 18px white
- **Phone mockup:** 837x963px, right side (50% + 99px), `box-shadow: 0px 52px 96px rgba(0,0,0,0.25)`

### 4.3 Partners (Section-01)

- **Container:** 1556px wide, centered
- **Heading:** "Trusted by Leading Financial Institutions Worldwide" — Roboto Medium 24px, centered
- **Gap:** 64px between heading and logos
- **Logos:** 6 logos in flex row, `justify-between`
  - Heights: 64px (most), 32px (InteliExpress) — vertically centered via `items-center`
  - Widths: 96px to 192px
  - PNB logo has overflow crop (106.63% width, clipped)

### 4.4 Money Transfer (Section-02)

- **Background:** `#0b0b0b`, full width, 1080px tall
- **Title:** "Money Transfer Worldwide" — Roboto Medium 64px/72px, white, centered
- **Subtitle:** Roboto Regular 18px/24px, `rgba(255,255,255,0.5)`, 923px wide
- **4 Photo Cards:** 365x570px each, 24px radius
  - Full-bleed images with `object-cover`
  - Bottom gradient: transparent → `#0b0b0b` at 70.19%, covers bottom 338px
  - Title: Roboto Bold 24px, white, 26px inset from card edge
  - Description: Roboto Regular 16px/24px, white, 313px wide
  - Cards: "Competitive Pricing", "Quick and Easy", "Secure and Safe", "Professional Service"

### 4.5 Business Solutions (Section-03)

- **Left side:** Title "Financial Solutions for Businesses" — Roboto Medium 64px/72px
  - Description: Roboto Regular 18px/24px
  - CTA button (same style as hero)
  - "Our Clients" subheading + 5 client logos
- **Right side:** Illustration (766x784px)

### 4.6 New Application (Section-04)

- **Background:** `#0b0b0b` (1350px tall)
- **Title:** "New Application!" — Roboto Medium 64px/72px, white, centered
- **Phone mockups:**
  - Base: 1325.44x872px at (135px, 71px)
  - Duplicate glow layer: same position, `mix-blend-mode: screen`, `opacity: 0.70`
- **Edge-fade vignette:** Three gradients (bottom, left rotated 90deg, right rotated+flipped)
  - All: transparent → `#0b0b0b` at 80.77%, with `box-shadow: 0px 4px 4px rgba(0,0,0,0.25)`
- **3 Glassmorphism cards:** 256x125px, 16px radius
  - `backdrop-filter: blur(16px)`
  - Background: `rgba(0,0,0,0.2)` + `rgba(255,255,255,0.1)` layered
  - Double-layered blur (inner duplicate at -1px offset)
  - Decorative light blob: 271x85px ellipse at `top: -63px, left: -10px`
  - Text: Roboto Medium 20px, white, centered
  - Cards: "Send money anytime, anywhere" (266,162), "Track expenses and monitor transactions" (743,624), "Get live exchange rates" (1040,248)

### 4.7 Feature Cards

- **Two white cards side-by-side:** 766x300px each, 24px radius, no shadow
- **Gap:** ~24px between cards
- **Each card:** 215x236px image (12px radius, 32px padding) + 454px text block (8px gap)
- **"Digital Wallet"** and **"SIM Top-Up"** — Roboto Bold 24px titles, Regular 16px descriptions

### 4.8 WPay Card (Section-05)

- **Left:** Credit card images, 607x741.7px, `top: -124px` (overflows above section)
- **Right:** Title "WPay Card" — Roboto Medium 64px/72px
  - Description: 602px wide, Roboto Regular 18px/24px
  - Partner logos (MAX 68x18px, Bank of Jerusalem 169x19px) with 55px gap
  - CTA: "Order wPay card" (same pill button style)

### 4.9 Footer

- **4-column layout:** 1555px content width
- **Column 1:** "We Are Here For You" — hours (Sun-Thu 08-19, Fri 08-13)
- **Column 2:** "Contact Info" — email icon + cs@worldcomfinance.com, phone icon + 03-900-9823
- **Column 3:** "Social media" — 3 social icons (64x64px black circles)
- **Column 4:** Worldcom Finance logo (271x63px) + App Store (120x40px) + Google Play (135x40px)
- **Divider:** 1px, `rgba(30,30,30,0.1)`
- **Legal:** Privacy Policy, Terms & Conditions (left) + Copyright (center)
- **All headings:** Roboto Bold 24px, `#1e1e1e`
- **All body text:** Roboto Regular 16px/24px, `#626771`

## 5. Animations (Framer Motion)

| Section | Animation | Timing |
|---------|-----------|--------|
| Header | Transparent → white+blur on scroll | CSS transition 300ms |
| Hero headline | Staggered line slide-up + fade | 0.2s delay between lines |
| Hero subtitle | Fade up | 0.4s delay after headline |
| Hero CTA | Fade up + scale(0.95→1) | 0.6s delay |
| Hero phone | Slide from right (100px→0), spring | 0.3s delay |
| Partner logos | Staggered fade-in | 0.1s stagger each |
| Money Transfer title | Fade up on scroll | whileInView, threshold 0.3 |
| Transfer cards | Staggered rise (60px→0) | 0.15s stagger |
| Transfer card hover | scale(1.03) + shadow lift | 200ms ease |
| Business text | Slide from left | whileInView |
| Business illustration | Fade from right | whileInView |
| New Application phones | Scale from 0.9 | whileInView |
| Glass cards | Float in with parallax | staggered, spring |
| Glass card hover | Border glow pulse | 200ms ease |
| WPay cards | Slide from left | whileInView |
| WPay text | Slide from right | whileInView |
| Feature cards | Staggered pop from bottom | 0.2s stagger |
| Footer | Simple fade up | whileInView |

## 6. Responsive Strategy

- Desktop-first at 1920px (matching Figma)
- Container max-width: 1556px centered
- Breakpoints for future: 1280px (laptop), 768px (tablet), 375px (mobile)
- Initial build is desktop only; responsive will follow using Figma's mobile variants

## 7. Performance Considerations

- Roboto loaded via `next/font/google` with subset: latin
- Images: Next.js `<Image>` with `priority` on hero, lazy-load rest
- Framer Motion: `LazyMotion` with `domAnimation` feature set for smaller bundle
- Assets downloaded to `/public` for permanence (Figma URLs expire in 7 days)

# Worldcom Finance Landing Page — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a pixel-perfect, animated fintech landing page from a Figma design using Next.js 15 + TypeScript + Tailwind CSS v4 + Framer Motion.

**Architecture:** Single-page app with multi-page-ready layout. All sections are separate components assembled in `page.tsx`. Shared layout provides Header/Footer. Assets centralized in `lib/assets.ts`. Animations via Framer Motion `whileInView`.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Roboto (next/font/google)

**Design Doc:** `docs/plans/2026-03-24-worldcom-finance-landing-page-design.md`

**Figma:** `https://figma.com/design/uUDxtBDovcR3ggnV3OW17J/Web-2.0?node-id=309-986` (node `309:986`)

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `tailwind.config.ts`, etc. (via CLI)
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`

**Step 1: Initialize Next.js 15 project**

Run from `C:\Website`:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack
```
Select defaults when prompted. This creates the full project structure.

**Step 2: Install Framer Motion**

```bash
npm install framer-motion
```

**Step 3: Verify project runs**

```bash
npm run dev
```
Expected: Dev server starts on localhost:3000, default Next.js page renders.

**Step 4: Commit**

```bash
git init && git add -A && git commit -m "chore: scaffold Next.js 15 + Tailwind + Framer Motion"
```

---

## Task 2: Design Tokens & Global Styles

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

**Step 1: Set up Tailwind CSS with design tokens in `src/app/globals.css`**

Replace the entire file with:
```css
@import "tailwindcss";

@theme {
  /* Colors */
  --color-page-bg: #fbfdff;
  --color-page-tertiary: #f3f7fe;
  --color-gray-900: #0b0b0b;
  --color-orange-600: #bf6932;
  --color-blue-300: #2f80ed;
  --color-text-primary: #1e1e1e;
  --color-text-light: #ffffff;
  --color-text-light-50: rgba(255, 255, 255, 0.5);
  --color-text-grey: #626771;
  --color-divider: rgba(30, 30, 30, 0.1);

  /* Spacing */
  --spacing-03: 8px;
  --spacing-05: 16px;
  --spacing-07: 24px;
  --spacing-08: 32px;

  /* Corner radius */
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-pill: 28px;

  /* Font sizes */
  --font-size-hero: 96px;
  --font-size-section: 64px;
  --font-size-card-title: 24px;
  --font-size-body-lg: 18px;
  --font-size-body: 16px;
  --font-size-glass: 20px;

  /* Line heights */
  --line-height-section: 72px;
  --line-height-body: 24px;
  --line-height-hero-sub: 30px;
  --line-height-nav: 20px;
  --line-height-cta: 22px;
}

body {
  background-color: var(--color-page-bg);
  color: var(--color-text-primary);
  font-variation-settings: 'wdth' 100;
}
```

**Step 2: Configure Roboto font in `src/app/layout.tsx`**

Replace the entire file with:
```tsx
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Worldcom Finance — Cross-Border Financial Solutions",
  description:
    "Streamline your global finances with our cross-border solutions. Money transfers, business solutions, and WPay Card.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-[family-name:var(--font-roboto)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

**Step 3: Create placeholder page in `src/app/page.tsx`**

```tsx
export default function Home() {
  return (
    <main>
      <h1 className="text-[96px] font-extrabold text-text-primary p-10">
        Cross-Border Financial Solutions
      </h1>
    </main>
  );
}
```

**Step 4: Verify tokens work**

Run `npm run dev`, check that the heading renders in Roboto ExtraBold 96px with correct color.

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: design tokens, Roboto font, global styles"
```

---

## Task 3: Download & Organize Assets

**Files:**
- Create: `src/lib/assets.ts`
- Create: `public/images/` directory with downloaded assets

**Step 1: Create `src/lib/assets.ts` with all Figma asset URLs**

This file centralizes every image URL from the Figma MCP response. Use the Figma MCP tool `get_design_context` with fileKey `uUDxtBDovcR3ggnV3OW17J` and nodeId `309:986` to get the latest asset URLs (they expire in 7 days).

The file should export named constants for each asset, organized by section:
```typescript
// Hero
export const heroBackground = "...figma-url...";
export const heroPhoneMockup = "...figma-url...";

// Partner logos
export const logoBPI = "...figma-url...";
// ... etc for all ~40 assets
```

**Step 2: Download critical assets to `public/images/`**

Use `curl` or `fetch` to download each asset URL to `public/images/` for permanence. Name files descriptively:
```
public/images/hero-background.png
public/images/hero-phone-mockup.png
public/images/logo-worldcom.svg
public/images/partner-bpi.png
... etc
```

Update `src/lib/assets.ts` to reference local paths (`/images/filename.ext`) instead of Figma URLs.

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: download and organize all Figma assets"
```

---

## Task 4: Shared UI Components

**Files:**
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/AnimatedSection.tsx`

**Step 1: Create the reusable CTA button in `src/components/ui/Button.tsx`**

```tsx
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, href, onClick, className = "" }: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center w-[291px] h-[56px] bg-gray-900 text-text-light font-semibold text-[18px] leading-[22px] rounded-pill overflow-clip hover:scale-[1.03] hover:shadow-lg transition-all duration-200";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
```

**Step 2: Create the scroll-triggered wrapper in `src/components/ui/AnimatedSection.tsx`**

```tsx
"use client";

import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
}: AnimatedSectionProps) {
  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 3: Verify components render**

Import both into `page.tsx` temporarily, wrap the heading in `AnimatedSection` and add a `Button`. Check scroll animation works.

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add reusable Button and AnimatedSection components"
```

---

## Task 5: Header Component

**Files:**
- Create: `src/components/layout/Header.tsx`
- Modify: `src/app/layout.tsx` (add Header)

**Step 1: Build `src/components/layout/Header.tsx`**

Implements:
- Fixed positioning, starts transparent
- Scroll listener: adds white bg + `backdrop-blur(12px)` + shadow after scrolling 50px
- Left: Language button (white pill with "EN" + down arrow icon)
- Center: Worldcom Finance logo image
- Right: Lock icon + "Login banking" text, "Menu" text + hamburger icon
- All text: Roboto SemiBold 16px, color `#1e1e1e`
- Uses `"use client"` for scroll state

Key details:
- Language button: white bg, `border-radius: 20px`, 16px horizontal padding, 8px gap
- Logo centered using `absolute left-1/2 -translate-x-1/2`
- Icons loaded from `src/lib/assets.ts`
- Transition: `transition-all duration-300`

**Step 2: Add Header to layout**

Import Header in `src/app/layout.tsx` and render it above `{children}`.

**Step 3: Verify**

Scroll the page — header should transition from transparent to white with blur.

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add Header with scroll-driven transparency"
```

---

## Task 6: Hero Section

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build `src/components/sections/Hero.tsx`**

This is the most visually complex section. Implements:

**Background layers (three stacked divs):**
1. `#f3f7fe` at `opacity: 0.45`, full 1920x1080
2. Background image from assets at `opacity: 0.10`, object-cover
3. Gradient overlay with `mix-blend-mode: color`:
   - `background-image: linear-gradient(206.17deg, rgba(191,105,50,0.4) 17%, rgba(79,148,240,0.4) 83%)`

**Content (relative positioned over background):**
- Headline: "Cross-Border" / "Financial Solutions" — two lines, `font-extrabold text-[96px]`, 924px wide, positioned left ~160px
- Subtitle: 24px/30px, `letter-spacing: 0.1px`, centered
- CTA Button using shared `<Button>` component
- Phone mockup image: 837x963px, `box-shadow: 0px 52px 96px rgba(0,0,0,0.25)`, positioned right

**Animations (Framer Motion):**
- Headline lines: staggered `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`, 0.2s delay between
- Subtitle: 0.4s delay
- CTA: 0.6s delay, starts `scale(0.95)`
- Phone: slides from `x: 100`, spring transition with 0.3s delay

**Step 2: Add to page**

In `src/app/page.tsx`, import and render `<Hero />`.

**Step 3: Verify against Figma screenshot**

Compare layout, spacing, shadow, gradient. Key checkpoints:
- [ ] Headline is ExtraBold (800), not Bold (700)
- [ ] Phone shadow is visible and large
- [ ] Background has the warm-to-cool diagonal tint
- [ ] Letter-spacing 0.1px on subtitle

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add Hero section with layered background and animations"
```

---

## Task 7: Partners Section

**Files:**
- Create: `src/components/sections/Partners.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build `src/components/sections/Partners.tsx`**

- Container: 1556px max-width, centered, flex-col, items-center, 64px gap
- Heading: "Trusted by Leading Financial Institutions Worldwide" — Roboto Medium 24px, centered
- Logo row: flex, justify-between, items-center
- 6 logos with specific dimensions (heights vary: 64px for most, 32px for InteliExpress)
- PNB logo: overflow-hidden container, image at 106.63% width
- Animation: staggered fade-in for logos, 0.1s delay each

**Step 2: Add to page after Hero**

**Step 3: Verify logo alignment and spacing**

- [ ] 64px gap between heading and logos
- [ ] InteliExpress vertically centered despite being shorter
- [ ] All logos properly sized

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add Partners logo section"
```

---

## Task 8: Money Transfer Section

**Files:**
- Create: `src/components/sections/MoneyTransfer.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build `src/components/sections/MoneyTransfer.tsx`**

- Full-width dark background (`#0b0b0b`)
- Container: 1556px centered
- Title: "Money Transfer Worldwide" — Roboto Medium 64px/72px, white, centered
- Subtitle: 18px/24px, `rgba(255,255,255,0.5)`, 923px wide, centered
- 4 photo cards in a row:
  - Each: 365x570px, 24px radius, `overflow-hidden`, `relative`
  - Image: `object-cover`, fills entire card
  - Gradient overlay div: absolute bottom, 365x338px, `bg-gradient-to-b from-transparent to-[#0b0b0b]` with `to-[70.19%]`
  - Title: Roboto Bold 24px, white, absolute bottom area, 26px left padding
  - Description: Roboto Regular 16px/24px, white, 313px wide, below title
- Cards data: "Competitive Pricing", "Quick and Easy", "Secure and Safe", "Professional Service"
- Animation: title fades up on scroll, cards stagger rise (60px, 0.15s stagger)
- Hover: `scale(1.03)` + increased shadow, 200ms transition

**Step 2: Add to page**

**Step 3: Verify**

- [ ] Gradient fades image to background seamlessly at 70%
- [ ] Text is readable over gradient
- [ ] Cards have proper gap between them

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add Money Transfer section with photo cards"
```

---

## Task 9: Business Solutions Section

**Files:**
- Create: `src/components/sections/BusinessSolutions.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build `src/components/sections/BusinessSolutions.tsx`**

- Two-column layout (left text, right illustration)
- Left column (766px):
  - Title: "Financial Solutions for Businesses" — Roboto Medium 64px/72px
  - Description: two paragraphs, 18px/24px
  - CTA Button: shared `<Button>` with "Let's get started"
  - "Our Clients" subheading: Roboto Medium 24px, 24px gap above
  - 5 client logos in a row: justify-between, items-center (City Time, Holon, Good Pharm, Egged, Hadasa)
    - Some use mask-image for styling — implement with img tags and proper sizing
- Right column: illustration image, 766x784px
- Animations: text slides from left, illustration fades from right (`whileInView`)

**Step 2: Add to page**

**Step 3: Verify layout**

- [ ] Two columns properly aligned
- [ ] Client logos are small (32px tall) and properly spaced
- [ ] CTA button matches hero button exactly

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add Business Solutions section"
```

---

## Task 10: New Application Section

**Files:**
- Create: `src/components/sections/NewApplication.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build `src/components/sections/NewApplication.tsx`**

This is the most technically complex section. Implements:

**Background & phone mockups:**
- Dark background `#0b0b0b`
- Container: 1556px centered, 1172px tall, relative, overflow-hidden
- Title: "New Application!" — Roboto Medium 64px/72px, white, centered
- Base phone image: 1325.44x872px
- Glow layer: same image, `mix-blend-mode: screen`, `opacity: 0.70` (creates backlit glow)

**Edge-fade vignette (3 gradients):**
- Bottom: 1332px wide x 350px, centered, `bg-gradient-to-b from-transparent to-[#0b0b0b]` at 80.77%
- Left: 350x885px, rotated 90deg via CSS transform
- Right: 498x885px, rotated 90deg + `-scale-y-100`
- Each has `box-shadow: 0px 4px 4px rgba(0,0,0,0.25)`

**3 Glassmorphism floating cards:**
- Each: 256x125px, `border-radius: 16px`
- `backdrop-filter: blur(16px)`
- Background: layered gradients `linear-gradient(90deg, rgba(0,0,0,0.2) 0% 100%), linear-gradient(90deg, rgba(255,255,255,0.1) 0% 100%)`
- Inner duplicate element with same backdrop-blur (reinforces effect)
- Decorative light blob: ellipse image, 271x85px, positioned `top: -63px, left: -10px`
- Text: Roboto Medium 20px, white, centered, positioned `top: 39px`
- Positions: (266,162), (743,624), (1040,248) — absolute within container

**Animations:**
- Phones scale from 0.9, glass cards float in with staggered spring
- Card hover: border glow `rgba(255,255,255,0.2)`, 200ms

**Step 2: Add to page**

**Step 3: Verify**

- [ ] Phone glow effect visible (screen blend + 70% opacity)
- [ ] Edge vignettes fade phones into background smoothly
- [ ] Glass cards have frosted glass appearance
- [ ] Light blob creates subtle reflection on each card

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add New Application section with glassmorphism cards"
```

---

## Task 11: Feature Cards (Digital Wallet + SIM Top-Up)

**Files:**
- Create: `src/components/sections/FeatureCards.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build `src/components/sections/FeatureCards.tsx`**

- Container: 1556px centered, flex row, ~24px gap
- Two white cards side-by-side, each 766x300px, `border-radius: 24px`, no shadow
- Each card layout: flex row
  - Image: 215x236px, `border-radius: 12px`, `object-cover`, 32px top/left padding
  - Text block: 454px wide, flex-col, 8px gap, vertically centered
    - Title: Roboto Bold 24px, `#1e1e1e`
    - Description: Roboto Regular 16px/24px, `#1e1e1e`
- Cards: "Digital Wallet" and "SIM Top-Up"
- Animation: staggered pop from bottom, 0.2s stagger

**Step 2: Add to page**

**Step 3: Verify**

- [ ] Cards are same height and width
- [ ] Images have 12px radius
- [ ] No shadow (flat white cards)

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add Feature Cards section (Digital Wallet + SIM Top-Up)"
```

---

## Task 12: WPay Card Section

**Files:**
- Create: `src/components/sections/WPayCard.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build `src/components/sections/WPayCard.tsx`**

- Container: 1556px centered, relative, two-column
- Left: Credit card images, 607x741.7px, `margin-top: -124px` (overflows above section)
- Right (762px wide, offset right):
  - Title: "WPay Card" — Roboto Medium 64px/72px, centered
  - Description: 602px wide, Roboto Regular 18px/24px
  - Partner logos: MAX (68x18px) + Bank of Jerusalem (169x19px), 55px gap between
    - Bank of Jerusalem uses mask-image for black fill
  - CTA: "Order wPay card" — shared `<Button>`
  - Spacing between elements: 32px gap
- Animation: cards slide from left, text from right

**Step 2: Add to page**

**Step 3: Verify**

- [ ] Card images overflow above the section boundary
- [ ] Partner logos are tiny (18-19px tall)
- [ ] 55px gap between logos

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add WPay Card section"
```

---

## Task 13: Footer

**Files:**
- Create: `src/components/layout/Footer.tsx`
- Modify: `src/app/layout.tsx` (add Footer)

**Step 1: Build `src/components/layout/Footer.tsx`**

- Container: 1555px wide, centered
- 4-column grid layout

**Column 1 — "We Are Here For You":**
- Heading: Roboto Bold 24px, `#1e1e1e`
- Hours: Roboto Regular 16px/24px, `#626771`
- "Sundays to Thursdays 08:00 - 19:00" + blank line + "Fridays 08:00 - 13:00"

**Column 2 — "Contact Info":**
- Heading: Roboto Bold 24px
- Mail icon (24x24) + "cs@worldcomfinance.com"
- Phone icon (24x24) + "03-900-9823"
- Text: Roboto Regular 16px/24px, `#626771`

**Column 3 — "Social media":**
- Heading: Roboto Bold 24px
- 3 social icons, each 64x64px (Facebook, Instagram, LinkedIn — loaded from assets)

**Column 4 — Logo + App Badges:**
- Worldcom Finance logo: 271x63px, `overflow-hidden`
- App Store badge: 120x40px
- Google Play badge: 135x40px, side by side

**Divider:** 1px `rgba(30,30,30,0.1)`, full content width

**Legal row (below divider):**
- Left: "Privacy Policy      Terms & Conditions" — 16px, `#626771`
- Center: "©WIC Worldcom Finance LTD, Licenses No: 57533, 63141"

- Animation: simple fade up on scroll

**Step 2: Add Footer to layout.tsx**

**Step 3: Verify**

- [ ] 4 columns properly aligned
- [ ] Social icons are 64x64 (not small)
- [ ] Divider visible
- [ ] App store badges side by side

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: add Footer with 4-column layout"
```

---

## Task 14: Page Assembly & Final Polish

**Files:**
- Modify: `src/app/page.tsx`

**Step 1: Assemble all sections in order**

```tsx
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import MoneyTransfer from "@/components/sections/MoneyTransfer";
import BusinessSolutions from "@/components/sections/BusinessSolutions";
import NewApplication from "@/components/sections/NewApplication";
import FeatureCards from "@/components/sections/FeatureCards";
import WPayCard from "@/components/sections/WPayCard";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <MoneyTransfer />
      <BusinessSolutions />
      <NewApplication />
      <FeatureCards />
      <WPayCard />
    </main>
  );
}
```

**Step 2: Verify full page scroll**

Run through entire page, check:
- [ ] Sections flow naturally without gaps or overlaps
- [ ] Dark-to-light transitions are seamless
- [ ] All animations trigger on scroll
- [ ] Header stays fixed and transitions properly

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: assemble homepage with all sections"
```

---

## Task 15: Visual Validation Against Figma

**Step 1: Side-by-side comparison**

Use the Figma MCP `get_screenshot` tool (fileKey: `uUDxtBDovcR3ggnV3OW17J`, nodeId: `309:986`) and compare with browser screenshot at 1920px viewport.

**Validation checklist:**

- [ ] Hero headline: ExtraBold (800), 96px, correct color
- [ ] Hero phone shadow: large, visible (`52px 96px`)
- [ ] Hero background: warm-to-cool diagonal gradient visible
- [ ] Partner logos: correct sizes, InteliExpress shorter
- [ ] Money Transfer: gradient fades at 70%, text readable
- [ ] Business Solutions: two-column layout, illustration right-aligned
- [ ] New Application: phone glow effect, glassmorphism cards visible
- [ ] Feature Cards: white, flat, 24px radius
- [ ] WPay Card: card images overflow above section
- [ ] Footer: 4 columns, 64px social icons, divider
- [ ] All CTAs: 291x56px, pill shape, dark bg
- [ ] All text: correct weight/size per design doc
- [ ] Animations: smooth, not jarring

**Step 2: Fix any discrepancies found**

**Step 3: Final commit**

```bash
git add -A && git commit -m "fix: visual parity adjustments from Figma validation"
```

---

## Execution Notes

- **Asset URLs expire in 7 days.** Task 3 must download them to `public/` immediately.
- **All sections are `"use client"`** components since they use Framer Motion.
- **Container pattern:** `max-w-[1556px] mx-auto` used consistently across sections.
- **Button component** is reused in Hero, Business Solutions, and WPay Card — keep it DRY.
- The New Application section (Task 10) is the hardest — allocate extra time for the glassmorphism + vignette + blend-mode effects.

# Tasks: Language Switcher (EN/FR) & SEO-Optimized Localization

- [ ] Task 1: Define Translation Dictionaries & Type Contract <!-- id: 1 -->
  - Define `app/data/translations.ts` with typed dictionaries for `navbar` and `hero` (EN and FR)
  - Verify TypeScript compilation

- [ ] Task 2: Update Navbar with Language Switcher & Translations <!-- id: 2 -->
  - Add `EN | FR` switcher toggle in `Navbar.tsx` (desktop and mobile overlay)
  - Detect current locale via `usePathname()`
  - Update nav item labels and CTA button to support French translations
  - Add accessible labels and clean responsive styling in `Navbar.module.css`

- [ ] Task 3: Localize Hero Component <!-- id: 3 -->
  - Update `Hero.tsx` to accept a locale or translation prop
  - Render French copy when on `/fr` (badge, headline with serif accent, description, CTAs, scroll text)
  - Verify animations and video background remain identical

- [ ] Task 4: Create French Homepage Route (`app/fr/page.tsx`) & SEO Alternates <!-- id: 4 -->
  - Create `app/fr/page.tsx` rendering localized `Hero`
  - Configure French metadata (`title`, `description`, `alternates.languages`, `openGraph` with `locale: "fr_FR"`)
  - Update `app/page.tsx` with bidirectional `hreflang` alternates (`en`, `fr`, `x-default`)

- [ ] Task 5: SEO Validation & Build Verification <!-- id: 5 -->
  - Run `npm run build` and `npm run lint`
  - Verify HTML source for `<link rel="alternate" hreflang="...">`
  - Ensure zero hydration mismatches

# Tasks: Language Switcher (EN/FR) & SEO-Optimized Localization

- [x] Task 1: Define Translation Dictionaries & Type Contract <!-- id: 1 -->
  - Define `app/data/translations.ts` with typed dictionaries for `navbar` and `hero` (EN and FR)
  - Verify TypeScript compilation

- [x] Task 2: Update Navbar with Language Switcher & Translations <!-- id: 2 -->
  - Add `EN | FR` switcher toggle in `Navbar.tsx` (desktop and mobile overlay)
  - Detect current locale via `usePathname()`
  - Update nav item labels and CTA button to support French translations
  - Add accessible labels and clean responsive styling in `Navbar.module.css`

- [x] Task 3: Localize Hero Component <!-- id: 3 -->
  - Update `Hero.tsx` to accept a locale or translation prop
  - Render French copy when on `/fr` (badge, headline with serif accent, description, CTAs, scroll text)
  - Verify animations and video background remain identical

- [x] Task 4: Create French Homepage Route (`app/fr/page.tsx`) & SEO Alternates <!-- id: 4 -->
  - Create `app/fr/page.tsx` rendering localized `Hero`
  - Configure French metadata (`title`, `description`, `alternates.languages`, `openGraph` with `locale: "fr_FR"`)
  - Update `app/page.tsx` with bidirectional `hreflang` alternates (`en`, `fr`, `x-default`)

- [x] Task 5: SEO Validation & Build Verification <!-- id: 5 -->
  - Run `npm run build` and `npm run lint`
  - Verify HTML source for `<link rel="alternate" hreflang="...">`
  - Ensure zero hydration mismatches

- [x] Task 6: Localize Digital Capabilities (`Skills.tsx`) <!-- id: 6 -->
  - Translated section header, tabs, and all capability items (EN and FR)

- [x] Task 7: Localize Selected Projects (`Projects.tsx`) <!-- id: 7 -->
  - Translated section badge, title, subtitle, filter categories, project descriptions, tags, and CTAs (EN and FR)

- [x] Task 8: Localize The Virtanis Standard (`About.tsx`) <!-- id: 8 -->
  - Translated section badge, heading, quote, stats, manifesto, and credential cards (EN and FR)

- [x] Task 9: Localize Contact Section (`Contact.tsx`) <!-- id: 9 -->
  - Translated contact info channels, availability badge, form fields, placeholders, subject choices, status messages, and FAQ items (EN and FR)


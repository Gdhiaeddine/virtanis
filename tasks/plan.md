# Implementation Plan: Language Switcher (EN/FR) & SEO-Optimized Localization

## Overview
Implement a bilingual language switcher (English / French) in the navigation bar and provide French translations specifically for the Navbar and the Hero section of the homepage (`/`). The solution adheres strictly to Google SEO internationalization best practices using dedicated subpath routing (`/fr`), bidirectional `hreflang` alternate links, localized OpenGraph and schema metadata, and clean type-safe dictionaries without heavyweight external dependencies.

---

## Assumptions & Scope Discipline

### Assumptions
1. **Subpath URL Structure (`/fr`)**: We will use subpath `/fr` for the French homepage rather than query parameters (`?lang=fr`) or client-only state. Subpath routing is Google Search Central's strongly recommended approach for crawlability and indexing.
2. **Selective Translation Scope**: Only the Navigation Bar (desktop & mobile menu) and the Hero section of the homepage (`/`) will be translated. The remaining homepage sections (Skills, Projects, About, Contact) and secondary pages (`/about`, `/projects`, etc.) remain in English as requested.
3. **Next.js Native Approach**: Following Next.js official guidance (`node_modules/next/dist/docs/01-app/02-guides/internationalization.md`), we use a lightweight, type-safe dictionary structure (`dictionaries/en.ts` and `dictionaries/fr.ts`) to avoid heavy external dependencies and hydration issues.

---

## Architecture & Technical Decisions

### 1. Routing & Layout Architecture
- **Root Layout (`app/layout.tsx`)**:
  - Keep global root layout with font definitions and common providers.
  - Dynamically set or support `lang="fr"` when accessing French routes.
- **Dedicated French Homepage Route (`app/fr/page.tsx`)**:
  - Reuses the core homepage layout while feeding French translations into `Hero` and SEO metadata.
  - Contains complete French SEO metadata (`title`, `description`, `alternates.languages`, `openGraph`, `twitter`).
- **SEO Alternates & hreflang**:
  - English (`app/page.tsx`):
    ```ts
    alternates: {
      canonical: "https://virtanis.com",
      languages: {
        en: "https://virtanis.com",
        fr: "https://virtanis.com/fr",
        "x-default": "https://virtanis.com",
      },
    }
    ```
  - French (`app/fr/page.tsx`):
    ```ts
    alternates: {
      canonical: "https://virtanis.com/fr",
      languages: {
        en: "https://virtanis.com",
        fr: "https://virtanis.com/fr",
        "x-default": "https://virtanis.com",
      },
    }
    ```

### 2. State & Language Switching Mechanism
- In `Navbar.tsx` (`"use client"`):
  - Detect active language via `pathname.startsWith("/fr")`.
  - Add a sleek language switcher pill (`EN | FR`) styled in alignment with Virtanis's dark futuristic aesthetic.
  - Clicking `FR` when on English routes to `/fr`.
  - Clicking `EN` when on French routes to `/`.
  - Navbar links adapt based on current language (e.g., `#home`, `#services` or `/fr#services` when on `/fr`).

### 3. Translation Dictionaries
- Centralized dictionary file `app/data/translations.ts` containing typed strings for `navbar` and `hero`:
  - `navbar`: links ("Home" -> "Accueil", "About" -> "À propos", etc.), CTA button ("Let's Work Together" -> "Travaillons Ensemble").
  - `hero`: badge, title, accented text, description, action buttons ("Start a Project" -> "Lancer un Projet", "Explore Solutions" -> "Explorer nos Solutions"), and scroll indicator ("SCROLL TO EXPLORE" -> "DÉFILER POUR EXPLORER").

---

## Task Breakdown

### Phase 1: Foundation & Translations Data
- [ ] **Task 1: Define Translation Dictionaries & Type Contract**
  - **Description:** Create `app/data/translations.ts` with strict TypeScript types for English and French translations of the Navbar and Hero components.
  - **Acceptance criteria:**
    - Type `TranslationDictionary` defined.
    - Full English (`en`) and French (`fr`) dictionaries declared with exact copy.
    - Helper `getTranslation(lang: "en" | "fr")` available.
  - **Verification:** TypeScript compiles without errors.
  - **Files:** `app/data/translations.ts` (new)
  - **Scope:** Small (1 file)

### Checkpoint 1: Foundation
- [ ] Dictionaries compile and export cleanly.

---

### Phase 2: UI Components & Language Switcher
- [ ] **Task 2: Update Navbar with Language Switcher & Translations**
  - **Description:** Integrate the bilingual switcher into `Navbar.tsx` (desktop and mobile overlay) and render localized nav items based on the active route.
  - **Acceptance criteria:**
    - Language switcher renders cleanly in desktop navbar and mobile drawer.
    - Current active language is highlighted.
    - Clicking toggles between `/` and `/fr`.
    - Nav links and CTA button display French text when locale is `fr`.
    - Accessibility labels (`aria-label`) added to switcher.
  - **Verification:** Test switcher switching between `/` and `/fr`; inspect mobile menu.
  - **Files:** `app/components/Navbar.tsx`, `app/components/Navbar.module.css`
  - **Scope:** Small (2 files)

- [ ] **Task 3: Localize Hero Component**
  - **Description:** Allow `Hero.tsx` to accept a `locale` or localized copy prop, rendering French content when loaded on `/fr`.
  - **Acceptance criteria:**
    - Hero renders English content by default and French content when passed `lang="fr"` or dictionary.
    - All text elements (badge, headline, serif accent, paragraph, CTA buttons, scroll prompt) are localized.
    - Existing Framer Motion animations and video background remain intact.
  - **Verification:** Verify text rendering on both `/` and `/fr`.
  - **Files:** `app/components/Hero.tsx`
  - **Scope:** Small (1 file)

### Checkpoint 2: UI & Interactivity
- [ ] Language toggle works seamlessly across desktop and mobile.
- [ ] Navbar and Hero display French content when on `/fr`.
- [ ] Other sections on the page render without errors.

---

### Phase 3: Route, SEO & Metadata
- [ ] **Task 4: Create French Homepage Route (`app/fr/page.tsx`) & SEO Alternates**
  - **Description:** Implement `app/fr/page.tsx` with complete SEO metadata, OpenGraph tags, canonicals, and `hreflang` alternates matching Google Search recommendations.
  - **Acceptance criteria:**
    - `app/fr/page.tsx` renders `Hero` in French, with remaining sections intact.
    - Metadata includes French `title`, `description`, `alternates.languages` (`en`, `fr`, `x-default`), and `openGraph` with `locale: "fr_FR"`.
    - `app/page.tsx` updated with matching bidirectional `alternates.languages`.
  - **Verification:** Inspect `<head>` tags on both `/` and `/fr` to confirm `hreflang` links and canonical tags.
  - **Files:** `app/fr/page.tsx` (new), `app/page.tsx`
  - **Scope:** Medium (2 files)

- [ ] **Task 5: SEO Validation & Build Verification**
  - **Description:** Run production build and lint checks, verifying zero hydration mismatch, correct status codes, and valid HTML tags.
  - **Acceptance criteria:**
    - `npm run build` succeeds without errors or warnings.
    - `npm run lint` passes.
    - Valid HTML `lang` / alternate tags present.
  - **Verification:** Terminal build output confirmation.
  - **Files:** none (verification run)
  - **Scope:** XS

### Checkpoint 3: Complete & Ready for Review
- [ ] All acceptance criteria met.
- [ ] Build succeeds with zero errors.

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Duplicate content penalty from search engines | High | Implement strict bidirectional `rel="alternate" hreflang` and distinct canonical tags on both `/` and `/fr`. |
| Hydration mismatch in language toggle | Medium | Derive locale deterministically from `usePathname()` rather than `window` or `localStorage`. |
| Breaking changes in other pages (`/about`, etc.) | Low | Keep secondary routes unaffected; only provide translation for `/` and `/fr`. |

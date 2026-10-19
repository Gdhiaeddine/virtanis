export type Locale = "en" | "fr";

export interface NavItem {
  id: string;
  label: string;
  path: string;
  hash: string;
}

export interface NavbarTranslation {
  items: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    services: string;
    contact: string;
  };
  cta: string;
  switchAria: string;
}

export interface HeroTranslation {
  badge: string;
  titlePrefix: string;
  titleAccent: string;
  titleSuffix: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  scrollIndicator: string;
}

export interface TranslationDictionary {
  navbar: NavbarTranslation;
  hero: HeroTranslation;
}

export const translations: Record<Locale, TranslationDictionary> = {
  en: {
    navbar: {
      items: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        services: "Services",
        contact: "Contact",
      },
      cta: "Let's Work Together",
      switchAria: "Change language",
    },
    hero: {
      badge: "Digital Agency • AI & Engineering",
      titlePrefix: "Architecting ",
      titleAccent: "Intelligent Digital",
      titleSuffix: " Systems & Modern Platforms",
      description:
        "Virtanis is an elite digital engineering studio. We architect high-performance web ecosystems, scalable mobile platforms, intelligent AI systems, and 3D digital experiences for industry leaders and visionary founders worldwide.",
      primaryCta: "Start a Project",
      secondaryCta: "Explore Solutions",
      scrollIndicator: "SCROLL TO EXPLORE",
    },
  },
  fr: {
    navbar: {
      items: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        services: "Services",
        contact: "Contact",
      },
      cta: "Travaillons Ensemble",
      switchAria: "Changer de langue",
    },
    hero: {
      badge: "Agence Digitale • IA & Ingénierie",
      titlePrefix: "Concevoir des ",
      titleAccent: "Systèmes Numériques",
      titleSuffix: " Intelligents & Plateformes Modernes",
      description:
        "Virtanis est un studio d'ingénierie numérique d'élite. Nous concevons des écosystèmes web haute performance, des plateformes mobiles évolutives, des systèmes d'IA intelligents et des expériences numériques 3D pour les leaders de l'industrie et les fondateurs visionnaires du monde entier.",
      primaryCta: "Lancer un Projet",
      secondaryCta: "Explorer nos Solutions",
      scrollIndicator: "DÉFILER POUR EXPLORER",
    },
  },
};

export function getTranslations(locale: Locale): TranslationDictionary {
  return translations[locale] || translations.en;
}

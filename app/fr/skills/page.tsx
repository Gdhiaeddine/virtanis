import type { Metadata } from "next";
import SkillsPageContent from "../../skills/SkillsPageContent";

export const metadata: Metadata = {
  title: "Capacités d'Ingénierie & Matrice Technique",
  description:
    "Explorez les compétences d'ingénierie et la matrice technologique de Virtanis : Intelligence Artificielle, Systèmes Web d'Entreprise, Applications Mobiles, UI/UX Spatial et DevOps Cloud.",
  keywords: [
    "Compétences Techniques",
    "Ingénierie IA",
    "Développement Web Entreprise",
    "Applications Mobiles",
    "Next.js TypeScript",
    "DevOps Cloud",
    "Informatique Spatiale",
    "Stack Technologique Virtanis",
  ],
  alternates: {
    canonical: "https://virtanis.com/fr/skills",
    languages: {
      en: "https://virtanis.com/skills",
      fr: "https://virtanis.com/fr/skills",
      "x-default": "https://virtanis.com/skills",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://virtanis.com/fr/skills",
    siteName: "Virtanis",
    title: "Capacités d'Ingénierie & Matrice Technique | Virtanis",
    description:
      "Capacités d'ingénierie numérique complètes couvrant les systèmes d'IA, les applications web d'entreprise, les plateformes mobiles et l'infrastructure cloud haute disponibilité.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matrice des Capacités Techniques Virtanis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capacités d'Ingénierie & Matrice Technique | Virtanis",
    description:
      "Capacités d'ingénierie numérique complètes couvrant l'IA, le web d'entreprise, le mobile et le cloud.",
    images: ["/og-image.png"],
  },
};

const skillsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://virtanis.com/fr/skills#webpage",
      url: "https://virtanis.com/fr/skills",
      name: "Capacités d'Ingénierie & Matrice Technique | Virtanis",
      description:
        "Matrice complète des capacités techniques : intelligence artificielle, ingénierie web d'entreprise, développement mobile, design d'expérience UI/UX et cloud DevOps.",
      inLanguage: "fr-FR",
      isPartOf: {
        "@id": "https://virtanis.com/#website",
      },
      about: {
        "@id": "https://virtanis.com/#organization",
      },
    },
  ],
};

export default function FrenchSkillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsJsonLd) }}
      />
      <div className="flex flex-col flex-1">
        <SkillsPageContent locale="fr" />
      </div>
    </>
  );
}

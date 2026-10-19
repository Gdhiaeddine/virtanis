import type { Metadata } from "next";
import ProjectsPageContent from "../../projects/ProjectsPageContent";

export const metadata: Metadata = {
  title: "Réalisations Phares & Déploiements en Production",
  description:
    "Explorez le portfolio de plateformes en production, de systèmes de machine learning, d'applications web d'entreprise et d'interfaces UI/UX de haute précision conçus par Virtanis.",
  keywords: [
    "Projets Virtanis",
    "Déploiements en Production",
    "Études de Cas IA",
    "Projets Web Entreprise",
    "Systèmes Machine Learning",
    "Applications Next.js",
    "Applications Mobiles",
  ],
  alternates: {
    canonical: "https://virtanis.com/fr/projects",
    languages: {
      en: "https://virtanis.com/projects",
      fr: "https://virtanis.com/fr/projects",
      "x-default": "https://virtanis.com/projects",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://virtanis.com/fr/projects",
    siteName: "Virtanis",
    title: "Réalisations Phares & Déploiements en Production | Virtanis",
    description:
      "Un portfolio sélectif de plateformes numériques à fort impact, de systèmes d'IA, d'applications web d'entreprise et d'interfaces UI/UX conçus par Virtanis.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio des Déploiements en Production Virtanis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Réalisations Phares & Déploiements en Production | Virtanis",
    description:
      "Un portfolio sélectif de plateformes numériques à fort impact, de systèmes d'IA et d'applications web d'entreprise.",
    images: ["/og-image.png"],
  },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://virtanis.com/fr/projects#webpage",
      url: "https://virtanis.com/fr/projects",
      name: "Réalisations Phares & Déploiements en Production | Virtanis",
      description:
        "Portfolio complet de plateformes numériques, systèmes de machine learning, applications web d'entreprise et design UI/UX conçus par Virtanis.",
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

export default function FrenchProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <ProjectsPageContent locale="fr" />
    </>
  );
}

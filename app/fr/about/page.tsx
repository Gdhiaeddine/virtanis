import type { Metadata } from "next";
import AboutPageContent from "../../about/AboutPageContent";

export const metadata: Metadata = {
  title: "À Propos — Studio d'Ingénierie Numérique & Architecture IA",
  description:
    "Découvrez la philosophie, les standards d'ingénierie et la direction de Virtanis — un studio numérique d'élite concevant des systèmes d'IA, des plateformes web d'entreprise et des écosystèmes mobiles.",
  keywords: [
    "À Propos de Virtanis",
    "Agence Digitale",
    "Studio d'Ingénierie IA",
    "Architecture Logicielle",
    "Développement Full Stack",
    "Dhia Eddine Guettaf",
    "Studio de Produits Numériques",
  ],
  alternates: {
    canonical: "https://virtanis.com/fr/about",
    languages: {
      en: "https://virtanis.com/about",
      fr: "https://virtanis.com/fr/about",
      "x-default": "https://virtanis.com/about",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://virtanis.com/fr/about",
    siteName: "Virtanis",
    title: "À Propos — Studio d'Ingénierie Numérique & Architecture IA",
    description:
      "Virtanis est un studio d'ingénierie numérique d'élite combinant intelligence algorithmique, rigueur architecturale et design produit de classe mondiale.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "À Propos du Studio Virtanis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos — Studio d'Ingénierie Numérique",
    description:
      "Découvrez la philosophie, les standards d'ingénierie et la direction de Virtanis.",
    images: ["/og-image.png"],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://virtanis.com/fr/about#webpage",
      url: "https://virtanis.com/fr/about",
      name: "À Propos de Virtanis",
      description:
        "Découvrez la philosophie, la rigueur d'ingénierie, les piliers fondamentaux et la direction de Virtanis.",
      inLanguage: "fr-FR",
      isPartOf: {
        "@id": "https://virtanis.com/#website",
      },
      about: {
        "@id": "https://virtanis.com/#organization",
      },
    },
    {
      "@type": "Person",
      "@id": "https://virtanis.com/fr/about#founder",
      name: "Dhia Eddine Guettaf",
      jobTitle: "Fondateur & Architecte Principal",
      worksFor: {
        "@id": "https://virtanis.com/#organization",
      },
      sameAs: [
        "https://www.linkedin.com/in/guettafdhiaeddine",
        "https://www.instagram.com/dhia_eddine_guettaf",
        "https://www.behance.net/f9d10cef",
      ],
    },
  ],
};

export default function FrenchAboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="flex flex-col flex-1">
        <AboutPageContent locale="fr" />
      </div>
    </>
  );
}

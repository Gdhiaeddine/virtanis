import type { Metadata } from "next";
import ServicesPageContent from "../../services/ServicesPageContent";

export const metadata: Metadata = {
  title: "Architecture de Services & Capacités d'Ingénierie",
  description:
    "Explorez les capacités d'ingénierie numérique de Virtanis : plateformes web modernes, applications mobiles multiplateformes, systèmes d'IA & machine learning, architecture UI/UX, expériences 3D et DevOps cloud.",
  keywords: [
    "Services Agence Digitale",
    "Développement Plateformes Web",
    "Développement Applications Mobiles",
    "Systèmes IA Machine Learning",
    "Architecture UI UX",
    "Expériences Web 3D",
    "Solutions Cloud DevOps",
    "Développement Next.js",
  ],
  alternates: {
    canonical: "https://virtanis.com/fr/services",
    languages: {
      en: "https://virtanis.com/services",
      fr: "https://virtanis.com/fr/services",
      "x-default": "https://virtanis.com/services",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://virtanis.com/fr/services",
    siteName: "Virtanis",
    title: "Architecture de Services & Capacités d'Ingénierie | Virtanis",
    description:
      "Des plateformes web d'entreprise aux pipelines de machine learning et interfaces 3D immersives — nous concevons des solutions numériques haute valeur pour une échelle mondiale.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Services Numériques et Capacités d'Ingénierie Virtanis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecture de Services & Capacités d'Ingénierie | Virtanis",
    description:
      "Systèmes web d'entreprise, pipelines de machine learning, applications mobiles et cloud DevOps conçus par Virtanis.",
    images: ["/og-image.png"],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://virtanis.com/fr/services#webpage",
      url: "https://virtanis.com/fr/services",
      name: "Architecture de Services & Capacités d'Ingénierie | Virtanis",
      description:
        "Capacités d'ingénierie numérique complètes : développement web, applications mobiles, IA/ML, UI/UX, web 3D interactif et cloud DevOps.",
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

export default function FrenchServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesPageContent locale="fr" />
    </>
  );
}

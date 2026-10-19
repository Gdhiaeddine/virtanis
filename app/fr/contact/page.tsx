import type { Metadata } from "next";
import ContactPageContent from "../../contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact & Lancement de Projet",
  description:
    "Contactez Virtanis pour vos systèmes d'IA sur mesure, développement web, applications mobiles multiplateformes, architecture UI/UX, web 3D et infrastructure cloud.",
  keywords: [
    "Contact Virtanis",
    "Lancer un Projet",
    "Demande Développement Web",
    "Conseil IA Contact",
    "Agence Digitale Contact",
  ],
  alternates: {
    canonical: "https://virtanis.com/fr/contact",
    languages: {
      en: "https://virtanis.com/contact",
      fr: "https://virtanis.com/fr/contact",
      "x-default": "https://virtanis.com/contact",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://virtanis.com/fr/contact",
    siteName: "Virtanis",
    title: "Contact & Lancement de Projet | Virtanis",
    description:
      "Échangez avec Virtanis pour concevoir des plateformes haute performance, des pipelines de machine learning et des logiciels de premier plan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact & Engagement Projet Virtanis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Lancement de Projet | Virtanis",
    description:
      "Échangez avec Virtanis pour concevoir des plateformes haute performance et des logiciels sur mesure.",
    images: ["/og-image.png"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://virtanis.com/fr/contact#webpage",
      url: "https://virtanis.com/fr/contact",
      name: "Contact & Lancement de Projet | Virtanis",
      description:
        "Canaux de communication directs et formulaire de demande de projet pour l'ingénierie numérique Virtanis.",
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

export default function FrenchContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <div className="flex flex-col flex-1 bg-[#050505] text-white">
        <ContactPageContent locale="fr" />
      </div>
    </>
  );
}

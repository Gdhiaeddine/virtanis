import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About — Digital Engineering Studio & AI Architecture",
  description:
    "Discover the philosophy, engineering standards, and leadership behind Virtanis — an elite digital studio building AI systems, enterprise web platforms, and mobile ecosystems.",
  keywords: [
    "About Virtanis",
    "Digital Agency",
    "AI Engineering Studio",
    "Software Architecture",
    "Full Stack Development",
    "Dhia Eddine Guettaf",
    "Digital Product Studio",
  ],
  alternates: {
    canonical: "https://virtanis.com/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtanis.com/about",
    siteName: "Virtanis",
    title: "About — Digital Engineering Studio & AI Architecture",
    description:
      "Virtanis is an elite digital engineering studio combining computational intelligence, architectural rigor, and world-class product design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Virtanis Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Digital Engineering Studio",
    description:
      "Discover the philosophy, engineering standards, and leadership behind Virtanis.",
    images: ["/og-image.png"],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://virtanis.com/about#webpage",
      url: "https://virtanis.com/about",
      name: "About Virtanis",
      description:
        "Learn about the philosophy, engineering rigor, core pillars, and leadership of Virtanis.",
      isPartOf: {
        "@id": "https://virtanis.com/#website",
      },
      about: {
        "@id": "https://virtanis.com/#organization",
      },
    },
    {
      "@type": "Person",
      "@id": "https://virtanis.com/about#founder",
      name: "Dhia Eddine Guettaf",
      jobTitle: "Founder & Lead Architect",
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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="flex flex-col flex-1">
        <AboutPageContent />
      </div>
    </>
  );
}

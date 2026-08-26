import type { Metadata } from "next";
import ProjectsPageContent from "./ProjectsPageContent";

export const metadata: Metadata = {
  title: "Featured Production Deployments & Case Studies",
  description:
    "Explore the portfolio of production platforms, machine learning systems, enterprise web applications, and precision UI/UX designs engineered by Virtanis.",
  keywords: [
    "Virtanis Projects",
    "Production Deployments",
    "AI Case Studies",
    "Enterprise Web Projects",
    "Machine Learning Systems",
    "Next.js Applications",
    "Mobile Applications",
  ],
  alternates: {
    canonical: "https://virtanis.com/projects",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtanis.com/projects",
    siteName: "Virtanis",
    title: "Featured Production Deployments & Case Studies",
    description:
      "A curated portfolio of high-impact digital platforms, machine learning systems, enterprise web applications, and precision UI/UX interfaces engineered by Virtanis.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Virtanis Production Deployments Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Production Deployments & Case Studies",
    description:
      "A curated portfolio of high-impact digital platforms, machine learning systems, and enterprise web applications.",
    images: ["/og-image.png"],
  },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://virtanis.com/projects#webpage",
      url: "https://virtanis.com/projects",
      name: "Featured Production Deployments & Case Studies | Virtanis",
      description:
        "Comprehensive portfolio of digital platforms, machine learning systems, enterprise web applications, and UI/UX design engineered by Virtanis.",
      isPartOf: {
        "@id": "https://virtanis.com/#website",
      },
      about: {
        "@id": "https://virtanis.com/#organization",
      },
    },
  ],
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <ProjectsPageContent />
    </>
  );
}

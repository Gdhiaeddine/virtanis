import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Service Architecture & Engineering Capabilities",
  description:
    "Explore Virtanis full-spectrum digital capabilities: modern web platforms, cross-platform mobile apps, AI & machine learning systems, UI/UX architecture, 3D interactive experiences, and cloud DevOps.",
  keywords: [
    "Digital Agency Services",
    "Web Platform Development",
    "Mobile App Development",
    "AI Machine Learning Systems",
    "UI UX Architecture",
    "3D Web Experiences",
    "Cloud DevOps Solutions",
    "Next.js Development",
  ],
  alternates: {
    canonical: "https://virtanis.com/services",
    languages: {
      en: "https://virtanis.com/services",
      fr: "https://virtanis.com/fr/services",
      "x-default": "https://virtanis.com/services",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtanis.com/services",
    siteName: "Virtanis",
    title: "Service Architecture & Engineering Capabilities",
    description:
      "From enterprise web systems to production machine learning pipelines and immersive 3D interfaces — we architect high-value digital solutions built for global scale.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Virtanis Digital Services and Capabilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Architecture & Engineering Capabilities",
    description:
      "Enterprise web systems, machine learning pipelines, mobile applications, and cloud DevOps engineered by Virtanis.",
    images: ["/og-image.png"],
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://virtanis.com/services#webpage",
      url: "https://virtanis.com/services",
      name: "Service Architecture & Engineering Capabilities | Virtanis",
      description:
        "Comprehensive full-spectrum digital engineering capabilities including web development, mobile apps, AI/ML, UI/UX, 3D interactive, and cloud DevOps.",
      isPartOf: {
        "@id": "https://virtanis.com/#website",
      },
      about: {
        "@id": "https://virtanis.com/#organization",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesPageContent locale="en" />
    </>
  );
}

import type { Metadata } from "next";
import SkillsPageContent from "./SkillsPageContent";

export const metadata: Metadata = {
  title: "Engineering Capabilities & Technical Matrix",
  description:
    "Explore the engineering capabilities and technical stack of Virtanis: AI & Machine Intelligence, Enterprise Web Systems, Mobile App Engineering, Spatial UI/UX, Cloud DevOps, and 3D Web.",
  keywords: [
    "Technical Capabilities",
    "AI Engineering",
    "Enterprise Web Development",
    "Mobile Apps",
    "Next.js TypeScript",
    "Cloud DevOps",
    "Spatial Computing",
    "Virtanis Technology Stack",
  ],
  alternates: {
    canonical: "https://virtanis.com/skills",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtanis.com/skills",
    siteName: "Virtanis",
    title: "Engineering Capabilities & Technical Matrix",
    description:
      "Full-spectrum digital engineering capabilities spanning AI systems, enterprise web applications, mobile platforms, and scalable cloud infrastructure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Virtanis Technical Capabilities Matrix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Capabilities & Technical Matrix",
    description:
      "Full-spectrum digital engineering capabilities spanning AI systems, enterprise web, and cloud infrastructure.",
    images: ["/og-image.png"],
  },
};

const skillsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://virtanis.com/skills#webpage",
      url: "https://virtanis.com/skills",
      name: "Engineering Capabilities & Technical Matrix | Virtanis",
      description:
        "Comprehensive technical capabilities matrix across artificial intelligence, enterprise web engineering, mobile development, UI/UX design, and cloud DevOps.",
      isPartOf: {
        "@id": "https://virtanis.com/#website",
      },
      about: {
        "@id": "https://virtanis.com/#organization",
      },
    },
  ],
};

export default function SkillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsJsonLd) }}
      />
      <div className="flex flex-col flex-1">
        <SkillsPageContent />
      </div>
    </>
  );
}

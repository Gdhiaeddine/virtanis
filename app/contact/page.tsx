import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact & Initiate Project",
  description:
    "Get in touch with Virtanis for custom AI systems, web development, cross-platform mobile apps, UI/UX architecture, 3D web experiences, and cloud infrastructure.",
  keywords: [
    "Contact Virtanis",
    "Initiate Project",
    "Web Development Inquiry",
    "AI Consulting Contact",
    "Software Agency Contact",
  ],
  alternates: {
    canonical: "https://virtanis.com/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtanis.com/contact",
    siteName: "Virtanis",
    title: "Contact & Initiate Project",
    description:
      "Connect with Virtanis to engineer high-performance platforms, production machine learning pipelines, and market-defining software.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Virtanis Contact & Project Engagement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Initiate Project",
    description:
      "Connect with Virtanis to engineer high-performance platforms and custom software.",
    images: ["/og-image.png"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://virtanis.com/contact#webpage",
      url: "https://virtanis.com/contact",
      name: "Contact & Initiate Project | Virtanis",
      description:
        "Direct communication channels and project inquiry form for Virtanis digital engineering.",
      isPartOf: {
        "@id": "https://virtanis.com/#website",
      },
      about: {
        "@id": "https://virtanis.com/#organization",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <div className="flex flex-col flex-1 bg-[#050505] text-white">
        <ContactPageContent />
      </div>
    </>
  );
}

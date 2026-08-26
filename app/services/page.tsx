import type { Metadata } from "next";
import ServicesHero from "./components/ServicesHero";
import TrustedBy from "./components/TrustedBy";
import ServicesGrid from "./components/ServicesGrid";
import StatsBar from "./components/StatsBar";
import ProcessTimeline from "./components/ProcessTimeline";
import PageCTA from "../components/PageCTA";

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
      <div className="flex flex-col flex-1 bg-[#050505] text-white">
        <ServicesHero />
        <TrustedBy />
        <ServicesGrid />
        <StatsBar />
        <ProcessTimeline />
        <div className="w-[92%] max-w-[1380px] mx-auto pb-24 self-center">
          <PageCTA
            label="GET IN TOUCH"
            heading="Ready To Architect Your Flagship Solution?"
            description="Partner with Virtanis to engineer high-performance platforms, intelligent machine learning systems, and precision user interfaces."
            primaryText="Initiate Project"
            primaryHref="/contact"
            secondaryText="Explore Deployments"
            secondaryHref="/projects"
          />
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailContent from "../../../services/[slug]/ServiceDetailContent";
import { SERVICES_DATA, getServiceData } from "../../../services/[slug]/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceData(slug, "fr");

  if (!service) {
    return {
      title: "Service Introuvable",
      description: "La page de service demandée est introuvable.",
    };
  }

  const cleanTitle = service.metaTitle.replace(/\s*\|\s*Virtanis.*$/i, "").trim();

  return {
    title: cleanTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://virtanis.com/fr/services/${slug}`,
      languages: {
        en: `https://virtanis.com/services/${slug}`,
        fr: `https://virtanis.com/fr/services/${slug}`,
        "x-default": `https://virtanis.com/services/${slug}`,
      },
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: `https://virtanis.com/fr/services/${slug}`,
      siteName: "Virtanis",
      title: cleanTitle,
      description: service.metaDescription,
      images: [
        {
          url: service.heroImage?.src || "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} par Virtanis`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: service.metaDescription,
      images: [service.heroImage?.src || "/og-image.png"],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export default async function FrenchServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceData(slug, "fr");

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://virtanis.com/fr/services/${slug}#service`,
        name: service.title,
        description: service.metaDescription,
        provider: {
          "@id": "https://virtanis.com/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://virtanis.com/fr",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://virtanis.com/fr/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://virtanis.com/fr/services/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col flex-1 bg-[#050505] text-white">
        <ServiceDetailContent service={service} locale="fr" />
      </div>
    </>
  );
}

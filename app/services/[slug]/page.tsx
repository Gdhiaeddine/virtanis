import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailContent from "./ServiceDetailContent";
import { SERVICES_DATA } from "./data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service page could not be found.",
    };
  }

  const cleanTitle = service.metaTitle.replace(/\s*\|\s*Virtanis.*$/i, "").trim();

  return {
    title: cleanTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://virtanis.com/services/${slug}`,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: `https://virtanis.com/services/${slug}`,
      siteName: "Virtanis",
      title: cleanTitle,
      description: service.metaDescription,
      images: [
        {
          url: service.heroImage?.src || "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} by Virtanis`,
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

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://virtanis.com/services/${slug}#service`,
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
            name: "Home",
            item: "https://virtanis.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://virtanis.com/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
            item: `https://virtanis.com/services/${slug}`,
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
        <ServiceDetailContent service={service} />
      </div>
    </>
  );
}

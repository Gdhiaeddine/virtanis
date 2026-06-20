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
      title: "Service Not Found | Virtanis",
      description: "The requested service page could not be found.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
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

  return (
    <div className="flex flex-col flex-1">
      <ServiceDetailContent service={service} />
    </div>
  );
}

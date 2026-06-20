import type { Metadata } from "next";
import ServicesHero from "./components/ServicesHero";
import TrustedBy from "./components/TrustedBy";
import ServicesGrid from "./components/ServicesGrid";
import StatsBar from "./components/StatsBar";
import ProcessTimeline from "./components/ProcessTimeline";
import ServicesCTA from "./components/ServicesCTA";

export const metadata: Metadata = {
  title: "Services — Virtanis | Web, AI & Digital Solutions",
  description:
    "Explore Virtanis services: web development, mobile apps, AI & machine learning, UI/UX design, 3D experiences, and cloud solutions. Built for the future.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1">
      <ServicesHero />
      <TrustedBy />
      <ServicesGrid />
      <StatsBar />
      <ProcessTimeline />
      <ServicesCTA />
    </div>
  );
}

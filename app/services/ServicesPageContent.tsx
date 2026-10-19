"use client";

import ServicesHero from "./components/ServicesHero";
import TrustedBy from "./components/TrustedBy";
import ServicesGrid from "./components/ServicesGrid";
import StatsBar from "./components/StatsBar";
import ProcessTimeline from "./components/ProcessTimeline";
import PageCTA from "../components/PageCTA";
import { getTranslations, Locale } from "../data/translations";

interface ServicesPageContentProps {
  locale?: Locale;
}

export default function ServicesPageContent({
  locale = "en",
}: ServicesPageContentProps = {}) {
  const isFr = locale === "fr";
  const t = getTranslations(locale).servicesPage.cta;

  return (
    <div className="flex flex-col flex-1 bg-[#050505] text-white">
      <ServicesHero locale={locale} />
      <TrustedBy locale={locale} />
      <ServicesGrid locale={locale} />
      <StatsBar locale={locale} />
      <ProcessTimeline locale={locale} />
      <div className="w-[92%] max-w-[1380px] mx-auto pb-24 self-center">
        <PageCTA
          label={t.label}
          heading={t.heading}
          description={t.description}
          primaryText={t.primaryText}
          primaryHref={isFr ? "/fr#contact" : "/contact"}
          secondaryText={t.secondaryText}
          secondaryHref={isFr ? "/fr/projects" : "/projects"}
        />
      </div>
    </div>
  );
}

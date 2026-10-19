"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Palette,
  Box,
  Cloud,
  Check,
  ArrowRight,
} from "lucide-react";
import {
  getTranslations,
  Locale,
  ServicesPageServiceItem,
} from "../../data/translations";
import styles from "./ServicesGrid.module.css";

const ICON_MAP: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  "web-development": Globe,
  "mobile-development": Smartphone,
  "ai-ml": Brain,
  "ui-ux": Palette,
  "three-d-interactive": Box,
  "cloud-devops": Cloud,
};

function ServiceCard({
  service,
  index,
  deliverablesHeader,
  exploreText,
}: {
  service: ServicesPageServiceItem;
  index: number;
  deliverablesHeader: string;
  exploreText: string;
}) {
  const Icon = ICON_MAP[service.slug] || Globe;
  const href = `/services/${service.slug}`;

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconWrap}>
          <Icon size={24} className={styles.icon} />
        </div>
        <span className={styles.techTag}>{service.tag}</span>
      </div>

      <h3 className={styles.cardTitle}>{service.title}</h3>
      <p className={styles.cardDescription}>{service.description}</p>

      <div className={styles.deliverablesHeader}>{deliverablesHeader}</div>
      <ul className={styles.checklist}>
        {service.checklist.map((item) => (
          <li key={item} className={styles.checkItem}>
            <span className={styles.checkIcon}>
              <Check size={13} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className={styles.cardFooter}>
        <Link href={href} className={styles.exploreLink}>
          <span>{exploreText}</span>
          <ArrowRight size={14} className={styles.arrowIcon} />
        </Link>
      </div>
    </motion.article>
  );
}

interface ServicesGridProps {
  locale?: Locale;
}

export default function ServicesGrid({ locale = "en" }: ServicesGridProps = {}) {
  const isFr = locale === "fr";
  const t = getTranslations(locale).servicesPage.grid;

  return (
    <section
      className={styles.services}
      id="services-grid"
      aria-label={isFr ? "Piliers fondamentaux d'ingénierie" : "Core Engineering Pillars"}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionLabel}>{t.label}</span>
          <h2 className={styles.title}>{t.title}</h2>
          <p className={styles.description}>{t.description}</p>
        </motion.div>

        <div className={styles.grid}>
          {t.items.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={i}
              deliverablesHeader={t.deliverablesHeader}
              exploreText={t.exploreService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

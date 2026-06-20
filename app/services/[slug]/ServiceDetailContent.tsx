"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { ServiceDetail } from "./data";
import styles from "./ServiceDetailContent.module.css";

interface IconProps {
  size?: number;
  className?: string;
}

function ServiceIcon({ name, size = 20, className }: IconProps & { name: string }) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<IconProps>>)[
    name
  ];
  const Fallback = Icons.CircleDot;
  const Component = Icon ?? Fallback;
  return <Component size={size} className={className} />;
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

function LaptopMockup({ service }: { service: ServiceDetail }) {
  return (
    <div
      className={styles.mockup}
      role="img"
      aria-label={`${service.title} digital product mockup displayed on a laptop screen`}
    >
      <div className={styles.mockupGlow} />
      <div className={styles.laptop}>
        <div className={styles.browserBar}>
          <span />
          <span />
          <span />
          <div className={styles.address}>virtanis.com/{service.slug}</div>
        </div>
        <div className={styles.websitePreview}>
          <aside className={styles.previewSidebar}>
            <span />
            <span />
            <span />
            <span />
          </aside>
          <main className={styles.previewMain}>
            <div className={styles.previewHeader}>
              <span />
              <button type="button" aria-label="Mockup button" />
            </div>
            <div className={styles.previewHero}>
              <span />
              <strong />
              <p />
            </div>
            <div className={styles.previewCards}>
              <span />
              <span />
              <span />
            </div>
          </main>
        </div>
      </div>
      <div className={styles.laptopBase} />
    </div>
  );
}

export default function ServiceDetailContent({
  service,
}: {
  service: ServiceDetail;
}) {
  return (
    <main className={styles.page}>
      <div className={styles.bgAtmosphere}>
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
        <div className={styles.starField} />
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
      </div>

      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span aria-current="page">{service.title}</span>
        </nav>

        <section className={styles.hero} aria-labelledby="service-title">
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.sectionLabel}>{service.label}</span>
            <h1 id="service-title" className={styles.heroTitle}>
              {service.heroTitle}
            </h1>
            <p className={styles.heroDescription}>{service.heroDescription}</p>

            <div className={styles.actions}>
              <Link href="/#contact" className={styles.primaryButton}>
                Start Your Project
              </Link>
              <Link href="/#projects" className={styles.secondaryButton}>
                View Our Work
              </Link>
            </div>

            <div className={styles.badges}>
              {service.badges.map((badge) => (
                <span key={badge} className={styles.badge}>
                  <Icons.CheckCircle2 size={14} />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={`${styles.heroVisual} ${
              service.heroImage ? styles.heroVisualImage : ""
            }`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {service.heroImage ? (
              <div className={styles.heroImageWrap}>
                <Image
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 900px) 92vw, 44vw"
                  className={styles.heroImage}
                />
              </div>
            ) : (
              <LaptopMockup service={service} />
            )}
          </motion.div>
        </section>

        <motion.section
          className={styles.statsSection}
          aria-label={`${service.title} statistics`}
          {...fadeUp}
        >
          {service.stats.map((stat) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statIcon}>
                <ServiceIcon name={stat.iconName} size={18} />
              </div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </motion.section>

        <motion.section
          className={styles.sectionBox}
          aria-labelledby="details-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>CAPABILITIES</span>
            <h2 id="details-title">{service.detailTitle}</h2>
            <p>{service.detailDescription}</p>
          </div>

          <div className={styles.serviceGrid}>
            {service.serviceCards.map((card) => (
              <article key={card.title} className={styles.serviceCard}>
                <div className={styles.cardIcon}>
                  <ServiceIcon name={card.iconName} size={22} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                  {card.checklist.map((item) => (
                    <li key={item}>
                      <Icons.Check size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.sectionBox}
          aria-labelledby="tech-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>TECH STACK</span>
            <h2 id="tech-title">Modern Technologies For Modern Solutions</h2>
          </div>

          <div className={styles.techGrid}>
            {service.technologies.map((tech) => (
              <article key={tech.name} className={styles.techCard}>
                <div className={styles.cardIcon}>
                  <ServiceIcon name={tech.iconName} size={22} />
                </div>
                <h3>{tech.name}</h3>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.sectionBox}
          aria-labelledby="process-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>PROCESS</span>
            <h2 id="process-title">A Proven Process For Outstanding Results</h2>
          </div>

          <div className={styles.timeline}>
            {service.process.map((step) => (
              <article key={step.step} className={styles.processCard}>
                <div className={styles.processIcon}>
                  <ServiceIcon name={step.iconName} size={18} />
                  <span>{step.step}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.sectionBox}
          aria-labelledby="why-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>WHY VIRTANIS</span>
            <h2 id="why-title">{service.whyTitle}</h2>
          </div>

          <div className={styles.whyGrid}>
            {service.whyCards.map((card) => (
              <article key={card.title} className={styles.whyCard}>
                <div className={styles.cardIcon}>
                  <ServiceIcon name={card.iconName} size={20} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className={styles.cta}
          aria-labelledby="cta-title"
          {...fadeUp}
        >
          <div className={styles.ctaContent}>
            <span className={styles.sectionLabel}>GET IN TOUCH</span>
            <h2 id="cta-title">{service.ctaTitle}</h2>
            <p>{service.ctaDescription}</p>
            <Link href="/#contact" className={styles.primaryButton}>
              Start Your Project
            </Link>
          </div>
          <div className={styles.ctaInfo}>
            <article className={styles.contactCard}>
              <Icons.Mail size={18} />
              <span>Email</span>
              <strong>hello@virtanis.com</strong>
            </article>
            <article className={styles.contactCard}>
              <Icons.MapPin size={18} />
              <span>Location</span>
              <strong>Setif, Algeria</strong>
            </article>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

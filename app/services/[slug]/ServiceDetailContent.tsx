"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import * as Icons from "lucide-react";
import type { ServiceDetail } from "./data";
import PageCTA from "../../components/PageCTA";
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

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(888);

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${rand() * 100}%`,
  top: `${rand() * 100}%`,
  duration: `${12 + rand() * 16}s`,
  delay: `${rand() * 10}s`,
  size: `${1 + rand() * 2}px`,
  opacity: rand() * 0.35 + 0.1,
}));

function renderTitleWithAccent(title: string, accentWords: string[] = []): React.ReactNode {
  const lines = title.split(/\n|<br\s*\/?>/);
  return (
    <>
      {lines.map((line, lineIdx) => {
        const parts: React.ReactNode[] = [];
        let remaining = line;

        for (const word of accentWords) {
          const index = remaining.indexOf(word);
          if (index !== -1) {
            if (index > 0) {
              parts.push(remaining.slice(0, index));
            }
            parts.push(
              <span key={`${word}-${lineIdx}`} className={styles.serifAccent}>
                {word}
              </span>
            );
            remaining = remaining.slice(index + word.length);
          }
        }

        if (remaining) {
          parts.push(remaining);
        }

        return (
          <span key={lineIdx}>
            {parts}
            {lineIdx < lines.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
}

export default function ServiceDetailContent({
  service,
}: {
  service: ServiceDetail;
}) {
  return (
    <main className={styles.page}>
      {/* Background Atmosphere */}
      <div className={styles.bgAtmosphere} aria-hidden="true">
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
        <div className={styles.starField} />
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={styles.bgParticle}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
      </div>

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="service-title">
        {service.heroImage && (
          <div className={styles.heroBg} aria-hidden="true">
            <Image
              src={service.heroImage.src}
              alt={service.heroImage.alt}
              fill
              priority
              sizes="100vw"
              className={styles.heroBgImage}
            />
          </div>
        )}

        <div className={styles.heroContainer}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span aria-current="page">{service.title}</span>
          </nav>

          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={styles.sectionLabel}>SERVICE SPECIFICATION</span>

            <h1 id="service-title" className={styles.heroTitle}>
              {service.heroAccentWords
                ? renderTitleWithAccent(service.heroTitle, service.heroAccentWords)
                : service.heroTitle}
            </h1>

            <p className={styles.heroDescription}>{service.heroDescription}</p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryButton}>
                Initiate Project <ArrowRight size={15} />
              </Link>
              <Link href="/projects" className={styles.secondaryButton}>
                Explore Deployments <ArrowRight size={15} />
              </Link>
            </div>

            <div className={styles.badges}>
              {service.badges.map((badge) => (
                <span key={badge} className={styles.badge}>
                  <CheckCircle2 size={13} className={styles.badgeIcon} />
                  <span>{badge}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className={styles.container}>
        {/* Performance Statistics */}
        <motion.section
          className={styles.statsSection}
          aria-label={`${service.title} statistics`}
          {...fadeUp}
        >
          <div className={styles.statsGrid}>
            {service.stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <div className={styles.statIcon}>
                  <ServiceIcon name={stat.iconName} size={20} />
                </div>
                <strong className={styles.statValue}>{stat.value}</strong>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Core Capabilities */}
        <motion.section
          className={styles.sectionBox}
          id="capabilities"
          aria-labelledby="details-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>CAPABILITIES</span>
            <h2 id="details-title" className={styles.sectionTitle}>
              {service.detailTitle}
            </h2>
            <p className={styles.sectionDescription}>{service.detailDescription}</p>
          </div>

          <div className={styles.serviceGrid}>
            {service.serviceCards.map((card) => (
              <article key={card.title} className={styles.serviceCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <ServiceIcon name={card.iconName} size={22} />
                  </div>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
                <p className={styles.cardDescription}>{card.description}</p>
                <div className={styles.checklistLabel}>KEY DELIVERABLES</div>
                <ul className={styles.checklist}>
                  {card.checklist.map((item) => (
                    <li key={item} className={styles.checkItem}>
                      <span className={styles.checkIcon}>
                        <Check size={13} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Matrix */}
        <motion.section
          className={styles.sectionBox}
          id="tech-stack"
          aria-labelledby="tech-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>TECH STACK</span>
            <h2 id="tech-title" className={styles.sectionTitle}>
              Engineered With Modern Industry Standards
            </h2>
            <p className={styles.sectionDescription}>
              We leverage modern frameworks, cloud architectures, and specialized toolsets to guarantee optimal performance.
            </p>
          </div>

          <div className={styles.techGrid}>
            {service.technologies.map((tech) => (
              <article key={tech.name} className={styles.techCard}>
                <div className={styles.techIconWrap}>
                  <ServiceIcon name={tech.iconName} size={24} />
                </div>
                <h3 className={styles.techName}>{tech.name}</h3>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Process Timeline */}
        <motion.section
          className={styles.sectionBox}
          id="process"
          aria-labelledby="process-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>EXECUTION PROCESS</span>
            <h2 id="process-title" className={styles.sectionTitle}>
              A Systematic 5-Stage Delivery Framework
            </h2>
            <p className={styles.sectionDescription}>
              Designed for zero friction, predictable development velocity, and continuous deployment transparency.
            </p>
          </div>

          <div className={styles.timeline}>
            {service.process.map((step) => (
              <article key={step.step} className={styles.processCard}>
                <div className={styles.processTop}>
                  <span className={styles.stepNum}>{step.step}</span>
                  <div className={styles.processIcon}>
                    <ServiceIcon name={step.iconName} size={18} />
                  </div>
                </div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Why Virtanis / Strategic Advantage */}
        <motion.section
          className={styles.sectionBox}
          id="why-virtanis"
          aria-labelledby="why-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>STRATEGIC ADVANTAGE</span>
            <h2 id="why-title" className={styles.sectionTitle}>
              {service.whyTitle}
            </h2>
            <p className={styles.sectionDescription}>
              What sets our digital architecture and software delivery apart in today&apos;s competitive landscape.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {service.whyCards.map((card) => (
              <article key={card.title} className={styles.whyCard}>
                <div className={styles.whyTop}>
                  <div className={styles.whyIcon}>
                    <ServiceIcon name={card.iconName} size={20} />
                  </div>
                  <h3 className={styles.whyTitle}>{card.title}</h3>
                </div>
                <p className={styles.whyDesc}>{card.description}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Executive Page CTA */}
        <PageCTA
          heading={service.ctaTitle}
          description={service.ctaDescription}
          primaryText="Initiate Project"
          primaryHref="/contact"
          secondaryText="Explore Deployments"
          secondaryHref="/projects"
        />
      </div>
    </main>
  );
}

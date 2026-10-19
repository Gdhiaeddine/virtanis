"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  Box,
  Cloud,
  Code2,
  Palette,
  Smartphone,
} from "lucide-react";
import PageCTA from "../components/PageCTA";
import { getTranslations, Locale } from "../data/translations";
import styles from "./SkillsPageContent.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-60px" },
};

const staggerItem = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const categoryIcons = [BrainCircuit, Code2, Smartphone, Palette, Cloud, Box];

interface SkillsPageContentProps {
  locale?: Locale;
}

export default function SkillsPageContent({ locale = "en" }: SkillsPageContentProps) {
  const t = getTranslations(locale).skillsPage;
  const isFr = locale === "fr";

  return (
    <main className={styles.page}>
      <div className={styles.bgAtmosphere} aria-hidden="true">
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
        <div className={styles.starField} />
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
      </div>

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="skills-title">
        <div className={styles.heroBg} aria-hidden="true">
          <Image
            src="/skills-hero.webp"
            alt={isFr ? "Arrière-plan des capacités techniques de Virtanis" : "Virtanis technical capabilities background"}
            fill
            priority
            className={styles.heroBgImage}
          />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.sectionLabel}>{t.hero.label}</span>
          <h1 id="skills-title">
            {t.hero.titlePrefix}
            <span className={styles.serifAccent}>{t.hero.titleAccent}</span>
            {t.hero.titleSuffix}
          </h1>

          <p className={styles.heroDescription}>{t.hero.description}</p>

          <div className={styles.heroActions}>
            <a href="#specializations" className={styles.primaryButton}>
              {t.hero.exploreBtn} <ArrowRight size={15} />
            </a>
            <Link href="/contact" className={styles.secondaryButton}>
              {t.hero.consultBtn} <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        {/* Skill Categories */}
        <motion.section
          className={styles.section}
          id="specializations"
          aria-labelledby="categories-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{t.categories.label}</span>
            <h2 id="categories-title">{t.categories.title}</h2>
            <p>{t.categories.description}</p>
          </div>

          <motion.div
            className={styles.categoriesGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
          >
            {t.categories.items.map((cat, idx) => {
              const Icon = categoryIcons[idx] || BrainCircuit;
              return (
                <motion.article
                  key={cat.title}
                  className={styles.categoryCard}
                  variants={staggerItem}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.categoryIcon}>
                      <Icon size={22} />
                    </div>
                    <span className={styles.cardTag}>{cat.tag}</span>
                  </div>

                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>

                  <div className={styles.pillList}>
                    {cat.skills.map((skill) => (
                      <span key={skill} className={styles.skillPill}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link href={`/services/${cat.slug}`} className={styles.exploreLink}>
                    <span>{t.categories.exploreBlueprint}</span>
                    <ArrowRight size={13} className={styles.exploreArrow} />
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Technical Disciplines */}
        <motion.section
          className={styles.section}
          id="disciplines"
          aria-labelledby="disciplines-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{t.disciplines.label}</span>
            <h2 id="disciplines-title">{t.disciplines.title}</h2>
            <p>{t.disciplines.description}</p>
          </div>

          <div className={styles.disciplinesGrid}>
            {t.disciplines.groups.map((group) => (
              <div key={group.category} className={styles.disciplineColumn}>
                <h3 className={styles.disciplineTitle}>{group.category}</h3>
                <div className={styles.disciplineList}>
                  {group.items.map((item) => (
                    <div key={item.name} className={styles.disciplineCard}>
                      <div className={styles.disciplineHeader}>
                        <span className={styles.disciplineName}>{item.name}</span>
                        <span className={styles.disciplineLevel}>{item.level}</span>
                      </div>
                      <span className={styles.disciplineSpec}>{item.spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technologies Matrix */}
        <motion.section
          className={styles.section}
          id="technologies"
          aria-labelledby="tech-title"
          {...fadeUp}
        >
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>{t.tools.label}</span>
            <h2 id="tech-title">{t.tools.title}</h2>
            <p>{t.tools.description}</p>
          </div>

          <motion.div
            className={styles.techGrid}
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-60px" }}
          >
            {t.tools.technologies.map((tech) => (
              <motion.div key={tech.name} className={styles.techTile} variants={staggerItem}>
                <span className={styles.techName}>{tech.name}</span>
                <span className={styles.techCategory}>{tech.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <PageCTA
          heading={t.cta.heading}
          description={t.cta.description}
          primaryText={t.cta.primaryText}
          primaryHref="/contact"
        />
      </div>
    </main>
  );
}

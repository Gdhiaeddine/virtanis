"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { getTranslations, Locale } from "../data/translations";
import styles from "./Hero.module.css";

interface HeroSectionProps {
  locale?: Locale;
}

export default function HeroSection({ locale = "en" }: HeroSectionProps) {
  const t = getTranslations(locale).hero;

  return (
    <section className={styles.hero} id="home">
      <div className={styles.background} aria-hidden="true">
        <video
          src="/hero.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className={styles.videoBgElement}
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.badge}
          </motion.div>

          <h1 className={styles.title}>
            {t.titlePrefix}
            <span className={styles.serifAccent}>{t.titleAccent}</span>
            {t.titleSuffix}
          </h1>

          <p className={styles.description}>
            {t.description}
          </p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
          >
            <a href="#contact" className={styles.primaryButton}>
              {t.primaryCta} <ArrowRight size={17} />
            </a>
            <a href="#services" className={styles.secondaryButton}>
              {t.secondaryCta} <ArrowRight size={17} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <span>{t.scrollIndicator}</span>
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}

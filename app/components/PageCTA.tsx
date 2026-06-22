"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./PageCTA.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

interface PageCTAProps {
  label?: string;
  heading: string;
  description: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function PageCTA({
  label = "GET IN TOUCH",
  heading,
  description,
  primaryText = "Start Your Project",
  primaryHref = "/contact",
  secondaryText,
  secondaryHref = "/contact",
}: PageCTAProps) {
  return (
    <motion.section className={styles.cta} {...fadeUp}>
      <div className={styles.ctaGlow} />
      <div className={styles.ctaContent}>
        <span className={styles.sectionLabel}>{label}</span>
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className={styles.ctaActions}>
          <Link href={primaryHref} className={styles.primaryButton}>
            {primaryText} <ArrowRight size={17} />
          </Link>
          {secondaryText && (
            <Link href={secondaryHref} className={styles.secondaryButton}>
              {secondaryText} <ArrowRight size={17} />
            </Link>
          )}
        </div>
      </div>
      <div className={styles.ctaOrbit} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </motion.section>
  );
}

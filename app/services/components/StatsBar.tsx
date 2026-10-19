"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Layers, Headphones } from "lucide-react";
import { getTranslations, Locale } from "../../data/translations";
import styles from "./StatsBar.module.css";

const STAT_ICONS = [CheckCircle, Zap, Layers, Headphones];

interface StatsBarProps {
  locale?: Locale;
}

export default function StatsBar({ locale = "en" }: StatsBarProps = {}) {
  const t = getTranslations(locale).servicesPage.stats;

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.statsCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t.items.map((stat, i) => {
            const Icon = STAT_ICONS[i] || CheckCircle;
            return (
              <div key={i} className={styles.statItem}>
                <div className={styles.statIcon}>
                  <Icon size={24} />
                </div>
                <div className={styles.statText}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Search, FileCode2, Cpu, Rocket, ShieldCheck } from "lucide-react";
import { getTranslations, Locale } from "../../data/translations";
import styles from "./ProcessTimeline.module.css";

const STEP_ICONS = [Search, FileCode2, Cpu, ShieldCheck, Rocket];

interface ProcessTimelineProps {
  locale?: Locale;
}

export default function ProcessTimeline({ locale = "en" }: ProcessTimelineProps = {}) {
  const isFr = locale === "fr";
  const t = getTranslations(locale).servicesPage.process;

  return (
    <section
      className={styles.process}
      id="process"
      aria-label={isFr ? "Processus d'exécution" : "Execution Process"}
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

        <div className={styles.timeline}>
          {t.steps.map((step, i) => {
            const Icon = STEP_ICONS[i] || Search;
            return (
              <motion.div
                key={step.num}
                className={styles.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.08 * i }}
              >
                <div className={styles.stepTop}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div className={styles.stepIcon}>
                    <Icon size={18} />
                  </div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

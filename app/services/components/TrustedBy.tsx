"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getTranslations, Locale } from "../../data/translations";
import styles from "./TrustedBy.module.css";

const PARTNERS = [
  { name: "Ilina", logo: "/partners/ilina.png" },
  { name: "Golden Hills", logo: "/partners/golden-hills.png" },
];

interface TrustedByProps {
  locale?: Locale;
}

export default function TrustedBy({ locale = "en" }: TrustedByProps = {}) {
  const isFr = locale === "fr";
  const t = getTranslations(locale).servicesPage.trustedBy;

  return (
    <section
      className={styles.trustedBy}
      aria-label={isFr ? "Partenaires d'entreprise de confiance" : "Trusted Enterprise Partners"}
    >
      <div className={styles.container}>
        <motion.p
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.label}
        </motion.p>
        <div className={styles.logoRow}>
          {PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.name}
              className={styles.logoWrapper}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={130}
                height={42}
                className={styles.logo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

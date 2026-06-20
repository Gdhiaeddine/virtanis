"use client";
import { motion } from "framer-motion";
import styles from "./TrustedBy.module.css";

const COMPANIES = ["Acme Corp", "Logipsum", "CloudFlow", "Nextwave", "Synergy", "Pulsar"];

export default function TrustedBy() {
  return (
    <section className={styles.trustedBy}>
      <div className={styles.container}>
        <motion.p
          className={styles.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by businesses &amp; startups
        </motion.p>
        <div className={styles.logoRow}>
          {COMPANIES.map((name, i) => (
            <motion.span
              key={name}
              className={styles.companyName}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

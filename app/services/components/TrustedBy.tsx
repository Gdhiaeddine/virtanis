"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./TrustedBy.module.css";

const PARTNERS = [
  { name: "Ilina", logo: "/partners/ilina.png" },
  { name: "Golden Hills", logo: "/partners/golden-hills.png" },
];

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
                alt={partner.name}
                width={120}
                height={40}
                className={styles.logo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

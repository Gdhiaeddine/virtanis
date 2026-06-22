"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import siteData from "../../data/site.json";
import styles from "./ServicesCTA.module.css";

const CONTACT_CARDS = [
  { icon: Mail, label: "Email", value: siteData.contact.email },
  { icon: MapPin, label: "Location", value: siteData.contact.location },
  { icon: Clock, label: "Availability", value: siteData.contact.availability },
];

export default function ServicesCTA() {
  return (
    <section className={styles.cta} id="cta">
      <div className={styles.bgGlow} />
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className={styles.sectionLabel}>GET STARTED</span>
            <h2 className={styles.title}>
              Ready To Build Something{" "}
              <span className={styles.accent}>Amazing</span> Together?
            </h2>
            <p className={styles.description}>
              Let&apos;s turn your ideas into intelligent digital solutions that
              drive real results and growth.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Start Your Project
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {CONTACT_CARDS.map((card, i) => (
              <div key={i} className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <card.icon size={20} />
                </div>
                <div className={styles.contactText}>
                  <span className={styles.contactLabel}>{card.label}</span>
                  <span className={styles.contactValue}>{card.value}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

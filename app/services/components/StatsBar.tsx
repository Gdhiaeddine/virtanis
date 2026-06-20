"use client";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Layers, Headphones } from "lucide-react";
import styles from "./StatsBar.module.css";

const STATS = [
  { icon: CheckCircle, value: "100%", label: "Client Satisfaction" },
  { icon: Zap, value: "High", label: "Performance" },
  { icon: Layers, value: "Scalable", label: "Architecture" },
  { icon: Headphones, value: "24/7", label: "Support" },
];

export default function StatsBar() {
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
          {STATS.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statIcon}>
                <stat.icon size={24} />
              </div>
              <div className={styles.statText}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Search, FileText, Code, Rocket, HeartHandshake } from "lucide-react";
import styles from "./ProcessTimeline.module.css";

const STEPS = [
  { num: "01", title: "Discover", desc: "We learn about your business, goals, and challenges", icon: Search },
  { num: "02", title: "Plan", desc: "We define the strategy, architecture, and roadmap", icon: FileText },
  { num: "03", title: "Develop", desc: "We build with clean code, modern tools, and best practices", icon: Code },
  { num: "04", title: "Deploy", desc: "We launch your product with optimized performance", icon: Rocket },
  { num: "05", title: "Support", desc: "We provide ongoing maintenance and improvements", icon: HeartHandshake },
];

export default function ProcessTimeline() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionLabel}>OUR PROCESS</span>
          <h2 className={styles.title}>A Clear Process For Outstanding Results</h2>
        </motion.div>

        <div className={styles.timeline}>
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className={styles.stepCircle}>
                <step.icon size={22} />
              </div>
              {i < STEPS.length - 1 && <div className={styles.connector} />}
              <span className={styles.stepNum}>{step.num}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

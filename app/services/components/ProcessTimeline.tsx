"use client";
import { motion } from "framer-motion";
import { Search, FileCode2, Cpu, Rocket, ShieldCheck } from "lucide-react";
import styles from "./ProcessTimeline.module.css";

const STEPS = [
  {
    num: "01",
    title: "Discovery & Spec",
    desc: "We analyze system objectives, user requirements, and establish precise technical scope.",
    icon: Search,
  },
  {
    num: "02",
    title: "System Architecture",
    desc: "We architect scalable schemas, API contracts, high-fidelity UI/UX flows, and infrastructure models.",
    icon: FileCode2,
  },
  {
    num: "03",
    title: "Agile Engineering",
    desc: "We build with modular code, test-driven pipelines, and weekly staging deployments.",
    icon: Cpu,
  },
  {
    num: "04",
    title: "Security & QA Audit",
    desc: "We perform automated end-to-end testing, security penetration audits, and speed benchmarks.",
    icon: ShieldCheck,
  },
  {
    num: "05",
    title: "Production & SLA",
    desc: "We deploy zero-downtime releases backed by real-time observability and continuous scaling.",
    icon: Rocket,
  },
];

export default function ProcessTimeline() {
  return (
    <section className={styles.process} id="process" aria-label="Execution Process">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionLabel}>EXECUTION FRAMEWORK</span>
          <h2 className={styles.title}>A Systematic Delivery Model</h2>
          <p className={styles.description}>
            Engineered for zero friction, rapid iteration cycles, and absolute technical excellence.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {STEPS.map((step, i) => (
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
                  <step.icon size={18} />
                </div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

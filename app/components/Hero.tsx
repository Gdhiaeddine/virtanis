"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.background} aria-hidden="true">
        <video
          src="/hero.mp4"
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className={styles.videoBgElement}
        />
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Digital Agency • AI & Engineering
          </motion.div>

          <h1 className={styles.title}>
            Architecting <span className={styles.serifAccent}>Intelligent Digital</span>{" "}
            Systems & Modern Platforms
          </h1>

          <p className={styles.description}>
            Virtanis is an elite digital engineering studio. We architect high-performance
            web ecosystems, scalable mobile platforms, intelligent AI systems, and 3D digital experiences
            for industry leaders and visionary founders worldwide.
          </p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
          >
            <a href="#contact" className={styles.primaryButton}>
              Start a Project <ArrowRight size={17} />
            </a>
            <a href="#services" className={styles.secondaryButton}>
              Explore Solutions <ArrowRight size={17} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}

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
            AI ENGINEER • FULL STACK DEVELOPER • DIGITAL ARCHITECT
          </motion.div>

          <h1 className={styles.title}>
            Building <span className={styles.serifAccent}>Intelligent Digital</span>{" "}
            Systems For The Future
          </h1>

          <p className={styles.description}>
            I design and engineer scalable digital experiences powered by AI,
            clean code and modern technologies that drive real impact.
          </p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
          >
            <a href="#projects" className={styles.primaryButton}>
              Explore My Work <ArrowRight size={17} />
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Let&apos;s Build Together <ArrowRight size={17} />
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

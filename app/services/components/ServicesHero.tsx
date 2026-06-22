"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Shield, Zap, Expand } from "lucide-react";
import styles from "./ServicesHero.module.css";

const BADGES = [
  { icon: Code, label: "Clean Code" },
  { icon: Expand, label: "Scalable" },
  { icon: Shield, label: "Secure" },
  { icon: Zap, label: "Fast" },
];

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(777);

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${rand() * 100}%`,
  top: `${rand() * 100}%`,
  duration: `${12 + rand() * 16}s`,
  delay: `${rand() * 10}s`,
  size: `${1 + rand() * 2}px`,
  opacity: rand() * 0.35 + 0.1,
}));

export default function ServicesHero() {
  return (
    <section className={styles.hero} id="services-hero">
      <div className={styles.heroBg} aria-hidden="true">
        <Image
          src="/services/hero-service.webp"
          alt="Services background"
          fill
          priority
          className={styles.heroBgImage}
        />
      </div>

      {/* Background atmosphere */}
      <div className={styles.bgAtmosphere}>
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
        <div className={styles.starField} />
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={styles.bgParticle}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
        <div className={styles.glowOrb} />
        <div className={styles.glowOrbSecondary} />
      </div>

      <div className={styles.container}>
        {/* Left content */}
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.sectionLabel}>SERVICES</span>

          <h1 className={styles.title}>
            <span className={styles.serifAccent}>Intelligent Solutions</span> Built For The{" "}
            <span className={styles.accent}>Future</span>
          </h1>

          <p className={styles.description}>
            At Virtanis, we craft innovative digital solutions, intelligent
            systems, and immersive experiences that empower businesses to grow,
            automate, and lead in the digital era.
          </p>

          <div className={styles.buttons}>
            <Link href="#contact" className={styles.btnPrimary}>
              Start A Project
            </Link>
            <Link href="/#projects" className={styles.btnSecondary}>
              Explore Projects
            </Link>
          </div>

          <motion.div
            className={styles.badges}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {BADGES.map((badge) => (
              <div key={badge.label} className={styles.badge}>
                <badge.icon size={14} />
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

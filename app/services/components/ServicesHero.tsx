"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Layers, Cpu } from "lucide-react";
import styles from "./ServicesHero.module.css";

const CAPABILITIES = [
  { icon: ShieldCheck, label: "Enterprise Security" },
  { icon: Zap, label: "Sub-50ms Latency" },
  { icon: Layers, label: "Scalable Architecture" },
  { icon: Cpu, label: "AI & Full-Stack Mastery" },
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
    <section className={styles.hero} id="services-hero" aria-label="Services Overview">
      <div className={styles.heroBg} aria-hidden="true">
        <Image
          src="/services/hero-service.webp"
          alt="Virtanis Services Architecture Background"
          fill
          priority
          sizes="100vw"
          className={styles.heroBgImage}
        />
      </div>

      <div className={styles.bgAtmosphere} aria-hidden="true">
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
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.sectionLabel}>
            SERVICE ARCHITECTURE & ENGINEERING
          </span>

          <h1 className={styles.title}>
            Full-Spectrum Digital <br />
            <span className={styles.serifAccent}>Capabilities</span> For Global Scale
          </h1>

          <p className={styles.description}>
            From mission-critical web platforms and cross-platform mobile systems to
            production machine learning pipelines and immersive 3D interfaces — we architect
            high-value digital solutions engineered for speed, security, and market dominance.
          </p>

          <div className={styles.buttons}>
            <a href="#services-grid" className={styles.primaryButton}>
              Explore Capabilities <ArrowRight size={15} />
            </a>
            <Link href="/contact" className={styles.secondaryButton}>
              Initiate Project <ArrowRight size={15} />
            </Link>
          </div>

          <motion.div
            className={styles.badges}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            {CAPABILITIES.map((badge) => (
              <div key={badge.label} className={styles.badge}>
                <badge.icon size={14} className={styles.badgeIcon} />
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

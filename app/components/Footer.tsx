"use client";

import Image from "next/image";
import { useCallback } from "react";
import styles from "./Footer.module.css";

/* ─── Deterministic random for particles ─── */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(101);

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${rand() * 100}%`,
  top: `${50 + rand() * 50}%`,
  duration: `${8 + rand() * 12}s`,
  delay: `${rand() * 6}s`,
  size: `${1 + rand() * 1.5}px`,
  opacity: rand() * 0.25 + 0.08,
}));

const NAV_LINKS = ["Home", "About", "Journey", "Skills", "Projects", "Contact"];

export default function Footer() {
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
      e.preventDefault();
      const id = link.toLowerCase();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <footer className={styles.footer}>
      {/* ── Background Atmosphere ── */}
      <div className={styles.bgAtmosphere}>
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
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
        {/* Holographic circles */}
        <div
          className={styles.hudCircle}
          style={{
            width: "320px",
            height: "320px",
            bottom: "-160px",
            left: "calc(50% - 160px)",
            animationDuration: "30s",
          }}
        />
        <div className={styles.glowOrb} />
      </div>

      {/* ── Container ── */}
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* LEFT SECTION — Logo, Brand name, Copyright */}
          <div className={styles.leftSection}>
            <div className={styles.logoArea}>
              <Image
                src="/logo.png"
                alt="Virtanis"
                width={32}
                height={32}
                className={styles.logoIcon}
                priority
              />
              <span className={styles.logoText}>VIRTANIS</span>
            </div>
            <span className={styles.copyright} suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Virtanis. All Rights Reserved.
            </span>
          </div>

          {/* RIGHT SECTION — Navigation Links (like navbar) */}
          <div className={styles.rightSection}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, link)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

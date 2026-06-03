"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(42);

const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${rand() * 100}%`,
  top: `${60 + rand() * 40}%`,
  duration: `${8 + rand() * 12}s`,
  delay: `${rand() * 10}s`,
  size: `${1 + rand() * 2}px`,
  opacity: rand() * 0.35 + 0.15,
}));

const ORBITAL_RINGS = [
  { id: 0, size: "600px", duration: "60s", delay: "0s", accent: false, borderStyle: "dashed" as const },
  { id: 1, size: "450px", duration: "45s", delay: "-10s", accent: true, borderStyle: "solid" as const },
  { id: 2, size: "300px", duration: "35s", delay: "-20s", accent: false, borderStyle: "solid" as const },
];


function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgCanvas}>
        <Image
          src="/bg.png"
          alt="Virtanis Background"
          fill
          priority
          className={styles.bgImage}
        />
        <div className={styles.grid} />
        <div className={styles.fog} />

        {ORBITAL_RINGS.map((ring) => (
          <div
            key={ring.id}
            className={styles.orbitalRing}
            style={{
              width: ring.size,
              height: ring.size,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              animationDuration: ring.duration,
              animationDelay: ring.delay,
              borderStyle: ring.borderStyle,
              borderColor: ring.accent
                ? "rgba(77, 163, 255, 0.06)"
                : undefined,
            }}
          />
        ))}

        <div
          className={styles.engineeringLine}
          style={{ top: "30%", left: "10%", width: "35%" }}
        />
        <div
          className={styles.engineeringLine}
          style={{ top: "65%", right: "5%", width: "25%" }}
        />
        <div
          className={styles.engineeringLine}
          style={{ top: "80%", left: "20%", width: "20%" }}
        />

        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
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

        <div className={styles.fogBottom} />
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.welcomeLabel}>WELCOME TO</p>
          <h1 className={styles.title}>
            VIRTANIS
            <span className={styles.titleShimmer} aria-hidden="true">
              VIRTANIS
            </span>
          </h1>
          <p className={styles.subtitle}>
            ENGINEERING DIGITAL INTELLIGENCE
          </p>
          <p className={styles.description}>
            I design and build scalable software systems, AI solutions, and
            modern digital products that drive real impact.
          </p>
          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryButton}>
              View Projects
            </a>
            <a href="#contact" className={styles.secondaryButton}>
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className={styles.socials}>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href="mailto:contact@virtanis.com" className={styles.socialLink} aria-label="Email">
          <EmailIcon />
        </a>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Journey.module.css";

/* ─── Data ─── */
const TIMELINE_ENTRIES = [
  {
    id: 0,
    period: "2025",
    title: "Bachelor Degree in Computer Science",
    subtitle: "Farhat Abbas University — Computer Science",
    description:
      "Successfully completed a Bachelor's Degree in Computer Science with a strong foundation in software engineering, programming, systems architecture, and digital technologies.",
    responsibilities: [],
    icon: "education",
  },
  {
    id: 1,
    period: "February 2026 — May 2026",
    title: "IT Manager",
    subtitle: "Hotel Golden Hills",
    description:
      "Managed hotel technology infrastructure, IT systems, digital operations, and technical support while improving system reliability and operational efficiency.",
    responsibilities: [
      "IT Infrastructure Management",
      "Network Systems",
      "Digital Operations",
      "Technical Maintenance",
      "Operational Support",
    ],
    icon: "infrastructure",
  },
  {
    id: 2,
    period: "May 2026 — Present",
    title: "Software Developer",
    subtitle: "Symloop",
    description:
      "Working on modern digital solutions, scalable applications, AI-powered systems, and advanced software engineering projects focused on innovation and intelligent technologies.",
    responsibilities: [
      "Frontend development",
      "Applications development",
      "Backend systems",
      "AI integration",
      "Scalable architecture",
      "Modern web technologies",
    ],
    icon: "code",
  },
];

/* ─── Icons ─── */
function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5" />
    </svg>
  );
}

function InfrastructureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6" y2="6" />
      <line x1="6" y1="18" x2="6" y2="18" />
      <line x1="10" y1="6" x2="10" y2="6" />
      <line x1="10" y1="18" x2="10" y2="18" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.FC> = {
  education: EducationIcon,
  infrastructure: InfrastructureIcon,
  code: CodeIcon,
};

/* ─── Particle Generator ─── */
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
  top: `${rand() * 100}%`,
  duration: `${12 + rand() * 18}s`,
  delay: `${rand() * 10}s`,
  size: `${1 + rand() * 3}px`,
  opacity: rand() * 0.35 + 0.1,
}));

const HOLOGRAPHIC_LINES = [
  { id: 0, top: "12%", left: "3%", width: "28%", delay: "0s" },
  { id: 1, top: "32%", right: "6%", width: "22%", delay: "-2s" },
  { id: 2, top: "52%", left: "8%", width: "18%", delay: "-4s" },
  { id: 3, top: "72%", right: "4%", width: "32%", delay: "-1s" },
  { id: 4, top: "88%", left: "12%", width: "20%", delay: "-3s" },
];

const HUD_CIRCLES = [
  { id: 0, size: "320px", top: "8%", right: "3%", duration: "28s", delay: "0s" },
  { id: 1, size: "240px", bottom: "12%", left: "5%", duration: "22s", delay: "-6s" },
  { id: 2, size: "180px", top: "55%", left: "1%", duration: "20s", delay: "-12s" },
];

/* ─── Component ─── */
export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.journey} id="journey">
      {/* ─── Background Atmosphere ─── */}
      <div className={styles.bgAtmosphere}>
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
        <div className={styles.glowOrb} />
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
        {HUD_CIRCLES.map((hud) => (
          <div
            key={hud.id}
            className={styles.hudCircle}
            style={{
              width: hud.size,
              height: hud.size,
              top: hud.top,
              right: hud.right,
              bottom: hud.bottom,
              left: hud.left,
              animationDuration: hud.duration,
              animationDelay: hud.delay,
            }}
          />
        ))}
        {HOLOGRAPHIC_LINES.map((line) => (
          <div
            key={line.id}
            className={styles.holoLine}
            style={{
              top: line.top,
              left: line.left,
              right: line.right,
              width: line.width,
              animationDelay: line.delay,
            }}
          />
        ))}
        {/* Neural nodes */}
        <div className={styles.neuralNode} style={{ top: "18%", right: "15%" }} />
        <div className={styles.neuralNode} style={{ top: "42%", left: "6%" }} />
        <div className={styles.neuralNode} style={{ bottom: "22%", right: "20%" }} />
        <div className={styles.neuralNode} style={{ bottom: "38%", left: "18%" }} />
        <svg className={styles.neuralSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="22" y1="28" x2="78" y2="18" className={styles.neuralLine} />
          <line x1="12" y1="52" x2="72" y2="78" className={styles.neuralLine} />
          <line x1="28" y1="68" x2="68" y2="38" className={styles.neuralLine} />
        </svg>
        {/* Data streams */}
        <div className={styles.dataStream} style={{ top: "28%", right: "0" }} />
        <div className={styles.dataStream} style={{ bottom: "32%", left: "0", animationDelay: "-3s" }} />
      </div>

      {/* ─── Content ─── */}
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.sectionLabel}>MY JOURNEY</span>
          <h2 className={styles.mainTitle}>From Student To AI Systems Engineer</h2>
          <p className={styles.description}>
            A visionary software engineer evolving into a next-generation AI and digital systems
            architect. Every step is a building block toward shaping intelligent, scalable, and
            transformative digital futures.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {/* Vertical connector line */}
          <div className={styles.timelineLine} />

          {TIMELINE_ENTRIES.map((entry, index) => {
            const IconComponent = ICON_MAP[entry.icon];
            const isVisible = visibleItems.has(index);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={entry.id}
                ref={(el) => { itemRefs.current[index] = el; }}
                data-index={index}
                className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
              >
                {/* Node */}
                <div className={`${styles.node} ${isVisible ? styles.nodeVisible : ""}`}>
                  <div className={styles.nodeInner} />
                  <div className={styles.nodeGlow} />
                </div>

                {/* Card */}
                <div
                  className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
                >
                  {/* Card header */}
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>
                      {IconComponent && <IconComponent />}
                    </div>
                    <div className={styles.cardMeta}>
                      <span className={styles.cardPeriod}>{entry.period}</span>
                      <span className={styles.cardSubtitle}>{entry.subtitle}</span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{entry.title}</h3>
                    <p className={styles.cardDescription}>{entry.description}</p>

                    {entry.responsibilities.length > 0 && (
                      <div className={styles.responsibilities}>
                        {entry.responsibilities.map((resp, ri) => (
                          <span key={ri} className={styles.respTag}>
                            {resp}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card edge glow */}
                  <div className={styles.cardEdgeGlow} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

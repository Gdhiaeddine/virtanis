"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";

/* ─── Data ─── */
const SOLUTIONS = [
  {
    id: 0,
    slug: "ai-ml",
    title: "AI & Machine Learning Systems",
    description:
      "Custom machine learning models, predictive intelligence, intelligent automation pipelines, and enterprise LLM integration built for scale.",
    technologies: ["Python", "TensorFlow", "FastAPI", "OpenAI APIs", "Predictive Analytics"],
    icon: "ai",
  },
  {
    id: 1,
    slug: "web-development",
    title: "Enterprise Web Applications",
    description:
      "Modern, ultra-fast, responsive web applications and SaaS platforms engineered with Next.js, robust APIs, and conversion-optimized architectures.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    icon: "frontend",
  },
  {
    id: 2,
    slug: "mobile-development",
    title: "Cross-Platform Mobile Apps",
    description:
      "Native-feel iOS and Android applications developed with Flutter, real-time backend synchronization, secure authentication, and sleek UX.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Mobile UI/UX"],
    icon: "mobile",
  },
  {
    id: 3,
    slug: "ui-ux",
    title: "UI/UX & Spatial Product Design",
    description:
      "Design systems, interactive prototypes, user journeys, and high-conversion interfaces with Apple-grade minimalism and precision.",
    technologies: ["Figma", "Design Systems", "Prototyping", "UX Research", "Motion Design"],
    icon: "design",
  },
  {
    id: 4,
    slug: "three-d-interactive",
    title: "3D & Immersive Web Experiences",
    description:
      "Interactive 3D scenes, WebGL shaders, Three.js product visualizers, and sensory digital environments that make brands unforgettable.",
    technologies: ["Three.js", "React Three Fiber", "WebGL", "GSAP", "3D Modeling"],
    icon: "interactive",
  },
  {
    id: 5,
    slug: "cloud-devops",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Production-ready CI/CD pipelines, containerization, high-availability cloud hosting, and enterprise security monitoring.",
    technologies: ["Docker", "Linux", "CI/CD", "Vercel", "Monitoring & Security"],
    icon: "cloud",
  },
];

/* ─── Icons ─── */
function FrontendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M8 10l-2 2 2 2" />
      <path d="M16 10l2 2-2 2" />
      <line x1="11" y1="9" x2="13" y2="13" />
    </svg>
  );
}

function BackendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01" />
      <path d="M6 18h.01" />
      <path d="M10 6h.01" />
      <path d="M10 18h.01" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function InteractiveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      <path d="M12 14v4" />
      <path d="M10 16l2 2 2-2" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18.01" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.FC> = {
  frontend: FrontendIcon,
  backend: BackendIcon,
  ai: AIIcon,
  interactive: InteractiveIcon,
  design: DesignIcon,
  cloud: CloudIcon,
  mobile: MobileIcon,
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

const rand = mulberry32(77);

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
  { id: 0, top: "10%", left: "4%", width: "26%", delay: "0s" },
  { id: 1, top: "28%", right: "7%", width: "24%", delay: "-2s" },
  { id: 2, top: "48%", left: "6%", width: "20%", delay: "-4s" },
  { id: 3, top: "68%", right: "5%", width: "30%", delay: "-1s" },
  { id: 4, top: "86%", left: "10%", width: "22%", delay: "-3s" },
];

const HUD_CIRCLES = [
  { id: 0, size: "300px", top: "6%", right: "4%", duration: "30s", delay: "0s" },
  { id: 1, size: "220px", bottom: "10%", left: "6%", duration: "24s", delay: "-8s" },
  { id: 2, size: "160px", top: "50%", left: "2%", duration: "22s", delay: "-14s" },
];

/* ─── Component ─── */
export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.skills} id="services">
      <span id="skills" aria-hidden="true" style={{ position: "absolute", top: 0 }} />
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
        <div className={styles.neuralNode} style={{ top: "16%", right: "18%" }} />
        <div className={styles.neuralNode} style={{ top: "44%", left: "8%" }} />
        <div className={styles.neuralNode} style={{ bottom: "20%", right: "22%" }} />
        <div className={styles.neuralNode} style={{ bottom: "36%", left: "16%" }} />
        <svg className={styles.neuralSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="24" y1="26" x2="76" y2="16" className={styles.neuralLine} />
          <line x1="14" y1="54" x2="74" y2="76" className={styles.neuralLine} />
          <line x1="26" y1="66" x2="66" y2="36" className={styles.neuralLine} />
        </svg>
        {/* Data streams */}
        <div className={styles.dataStream} style={{ top: "26%", right: "0" }} />
        <div className={styles.dataStream} style={{ bottom: "30%", left: "0", animationDelay: "-3s" }} />
      </div>

      {/* ─── Content ─── */}
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.sectionLabel}>DIGITAL CAPABILITIES</span>
          <h2 className={styles.mainTitle}>Full-Spectrum Digital Engineering Solutions</h2>
          <p className={styles.description}>
            Virtanis engineers end-to-end digital solutions that power industry-leading businesses.
            From intelligent AI systems and high-throughput web applications to native mobile platforms,
            spatial UI/UX design, and cloud infrastructure — we build for performance, scale, and prestige.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className={styles.skillsGrid}>
          {SOLUTIONS.map((solution, index) => {
            const IconComponent = ICON_MAP[solution.icon];
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={solution.id}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-index={index}
                className={`${styles.skillCard} ${isVisible ? styles.cardVisible : ""}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Card top glow */}
                <div className={styles.cardTopGlow} />

                {/* Icon */}
                <div className={styles.cardIconWrapper}>
                  <div className={styles.cardIcon}>
                    {IconComponent && <IconComponent />}
                  </div>
                  <div className={styles.cardIconGlow} />
                </div>

                {/* Title */}
                <h3 className={styles.cardTitle}>{solution.title}</h3>

                {/* Description */}
                <p className={styles.cardDescription}>{solution.description}</p>

                {/* Technologies */}
                <div className={styles.techTags}>
                  {solution.technologies.map((tech, ti) => (
                    <span key={ti} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer Link */}
                <div className={styles.cardFooter}>
                  <Link href={`/services/${solution.slug}`} className={styles.exploreLink}>
                    <span>Explore Solution</span>
                    <span className={styles.exploreArrow}>→</span>
                  </Link>
                </div>

                {/* Edge glow */}
                <div className={styles.cardEdgeGlow} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";

/* ─── Data ─── */
const SKILLS = [
  {
    id: 0,
    title: "Frontend Development",
    description:
      "Designing and building modern responsive user interfaces with premium user experience, smooth interactions, and scalable frontend architectures.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    icon: "frontend",
  },
  {
    id: 1,
    title: "Backend Engineering",
    description:
      "Building scalable backend systems, APIs, authentication systems, and robust server-side architectures optimized for performance and reliability.",
    technologies: ["Node.js", "Laravel", "Express", "REST APIs", "MySQL"],
    icon: "backend",
  },
  {
    id: 2,
    title: "AI & Automation",
    description:
      "Developing intelligent systems, automation workflows, and AI-powered digital solutions focused on efficiency and innovation.",
    technologies: ["AI Systems", "Automation", "Prompt Engineering", "Intelligent Workflows", "Data Processing"],
    icon: "ai",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Designing and developing modern cross-platform mobile applications with smooth user experiences, scalable architectures, and high-performance interfaces optimized for Android and iOS ecosystems.",
    technologies: ["Flutter", "Dart", "Firebase", "Mobile UI/UX", "Cross-Platform Development"],
    icon: "mobile",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Designing premium user experiences with clean interfaces, futuristic aesthetics, and intuitive interaction systems.",
    technologies: ["Figma", "Design Systems", "Wireframing", "User Experience", "Prototyping"],
    icon: "design",
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    description:
      "Managing deployment workflows, hosting environments, cloud infrastructure, and scalable production-ready systems.",
    technologies: ["VPS", "Linux", "Hosting", "Cloud Systems", "Deployment"],
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
    <section ref={sectionRef} className={styles.skills} id="skills">
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
          <span className={styles.sectionLabel}>SKILLS & EXPERTISE</span>
          <h2 className={styles.mainTitle}>Engineering Intelligent Digital Experiences</h2>
          <p className={styles.description}>
            Advanced expertise in building intelligent digital systems, AI solutions, scalable
            infrastructures, and modern digital experiences. From frontend interfaces to backend
            architectures, every technology is chosen to deliver performance, elegance, and
            innovation.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {SKILLS.map((skill, index) => {
            const IconComponent = ICON_MAP[skill.icon];
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={skill.id}
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
                <h3 className={styles.cardTitle}>{skill.title}</h3>

                {/* Description */}
                <p className={styles.cardDescription}>{skill.description}</p>

                {/* Technologies */}
                <div className={styles.techTags}>
                  {skill.technologies.map((tech, ti) => (
                    <span key={ti} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
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

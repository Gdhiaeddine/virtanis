"use client";

import Image from "next/image";
import styles from "./About.module.css";

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(99);

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${rand() * 100}%`,
  top: `${rand() * 100}%`,
  duration: `${10 + rand() * 15}s`,
  delay: `${rand() * 8}s`,
  size: `${1 + rand() * 2.5}px`,
  opacity: rand() * 0.4 + 0.1,
}));

const FOREGROUND_PARTICLES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: `${15 + rand() * 70}%`,
  top: `${20 + rand() * 60}%`,
  duration: `${6 + rand() * 8}s`,
  delay: `${rand() * 5}s`,
  width: `${1 + rand() * 2}px`,
  height: `${1 + rand() * 2}px`,
}));

const HOLOGRAPHIC_LINES = [
  { id: 0, top: "15%", left: "5%", width: "30%", delay: "0s" },
  { id: 1, top: "35%", right: "8%", width: "25%", delay: "-2s" },
  { id: 2, top: "55%", left: "10%", width: "20%", delay: "-4s" },
  { id: 3, top: "75%", right: "5%", width: "35%", delay: "-1s" },
  { id: 4, top: "85%", left: "15%", width: "22%", delay: "-3s" },
];

const HUD_CIRCLES = [
  { id: 0, size: "280px", top: "10%", right: "5%", duration: "25s", delay: "0s" },
  { id: 1, size: "200px", bottom: "15%", left: "8%", duration: "20s", delay: "-5s" },
  { id: 2, size: "160px", top: "50%", left: "2%", duration: "18s", delay: "-10s" },
];

const CREDENTIAL_CARDS = [
  {
    id: 0,
    label: "Name",
    value: "Dhia Eddine Guettaf",
    icon: "experience",
  },
  {
    id: 1,
    label: "Location",
    value: "Algeria",
    icon: "location",
  },
  {
    id: 2,
    label: "Experience",
    value: "3+ Years",
    icon: "tech",
  },
  {
    id: 3,
    label: "Email",
    value: "guettafdhiaeddine@gmail.com",
    icon: "availability",
  },
];

function ExperienceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}

function TechIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
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

function ProjectsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.66 4 3 6 3s6-1.34 6-3v-5" />
    </svg>
  );
}

function AvailabilityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.FC> = {
  experience: ExperienceIcon,
  tech: TechIcon,
  ai: AIIcon,
  projects: ProjectsIcon,
  location: LocationIcon,
  education: EducationIcon,
  availability: AvailabilityIcon,
};

export default function About() {
  return (
    <section className={styles.about} id="about">
      {/* Background atmosphere */}
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
        <div className={styles.glowOrb} />
      </div>

      <div className={styles.container}>
        {/* LEFT COLUMN — Cinematic Portrait */}
        <div className={styles.leftColumn}>
          <div className={styles.portraitFrame}>
            {/* Futuristic background environment — blends seamlessly with section */}
            <div className={styles.portraitBg}>
              <div className={styles.portraitGradient} />
              <div className={styles.portraitVignette} />
              <div className={styles.portraitFog} />

              {/* Holographic HUD circles */}
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

              {/* Holographic lines */}
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

              {/* Neural network nodes */}
              <div className={styles.neuralNode} style={{ top: "20%", right: "12%" }} />
              <div className={styles.neuralNode} style={{ top: "45%", left: "8%" }} />
              <div className={styles.neuralNode} style={{ bottom: "25%", right: "18%" }} />
              <div className={styles.neuralNode} style={{ bottom: "40%", left: "15%" }} />

              {/* Neural connections */}
              <svg className={styles.neuralSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="20" y1="30" x2="80" y2="20" className={styles.neuralLine} />
                <line x1="15" y1="55" x2="75" y2="75" className={styles.neuralLine} />
                <line x1="25" y1="70" x2="70" y2="40" className={styles.neuralLine} />
              </svg>

              {/* Data stream indicators */}
              <div className={styles.dataStream} style={{ top: "30%", right: "0" }} />
              <div className={styles.dataStream} style={{ bottom: "35%", left: "0", animationDelay: "-3s" }} />
            </div>

            {/* Portrait image */}
            <div className={styles.portraitImageWrapper}>
              <Image
                src="/myPicture.png"
                alt="Portrait"
                fill
                priority
                className={styles.portraitImage}
              />
              {/* Cinematic lighting overlays */}
              <div className={styles.portraitLightFront} />
              <div className={styles.portraitLightRim} />
              <div className={styles.portraitBloom} />
            </div>

            {/* Foreground particles */}
            <div className={styles.foregroundParticles}>
              {FOREGROUND_PARTICLES.map((p) => (
                <div
                  key={p.id}
                  className={styles.fgParticle}
                  style={{
                    left: p.left,
                    top: p.top,
                    animationDuration: p.duration,
                    animationDelay: p.delay,
                    width: p.width,
                    height: p.height,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CENTER COLUMN — About Me Content */}
        <div className={styles.centerColumn}>
          <span className={styles.sectionLabel}>ABOUT ME</span>

          <h2 className={styles.mainTitle}>
            Building the Future with Code and Intelligence
          </h2>

          <p className={styles.description}>
            I'm a software developer and tech entrepreneur passionate about AI, Web development
            and system architecture. I build digital solutions that are scalable, efficient, and
            impactful.
          </p>

          {/* CTA Button */}
          <a href="#projects" className={styles.ctaButton}>
            Discover My Work
          </a>
        </div>

        {/* RIGHT COLUMN — Credentials Panel */}
        <div className={styles.rightColumn}>
          <div className={styles.credentialsPanel}>
            <div className={styles.credentialsGrid}>
              {CREDENTIAL_CARDS.map((card) => {
                const IconComponent = ICON_MAP[card.icon];
                return (
                  <div key={card.id} className={styles.credentialCard}>
                    <div className={styles.credentialTop}>
                      <div className={styles.credentialIcon}>
                        {IconComponent && <IconComponent />}
                      </div>
                      <div className={styles.credentialInfo}>
                        <div className={styles.credentialValue}>{card.value}</div>
                        <div className={styles.credentialLabel}>{card.label}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

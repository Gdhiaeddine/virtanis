"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Box,
  Brain,
  Cloud,
  Code2,
  PenTool,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import styles from "./Hero.module.css";

const skillCards: {
  title: string;
  skills: string[];
  icon: LucideIcon;
  position: string;
  delay: number;
}[] = [
  {
    title: "AI Systems",
    skills: ["Machine Learning", "Automation", "LLM Integration"],
    icon: Brain,
    position: "topLeft",
    delay: 0.15,
  },
  {
    title: "Web Development",
    skills: ["Next.js", "React", "TypeScript"],
    icon: Code2,
    position: "middleLeft",
    delay: 0.25,
  },
  {
    title: "Mobile Apps",
    skills: ["Flutter", "Android", "iOS"],
    icon: Smartphone,
    position: "bottomLeft",
    delay: 0.35,
  },
  {
    title: "UI/UX Design",
    skills: ["Figma", "Design Systems", "Prototyping"],
    icon: PenTool,
    position: "topRight",
    delay: 0.2,
  },
  {
    title: "3D Experiences",
    skills: ["Three.js", "WebGL", "Interactive UI"],
    icon: Box,
    position: "middleRight",
    delay: 0.3,
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "CI/CD"],
    icon: Cloud,
    position: "bottomRight",
    delay: 0.4,
  },
];

const particles = [
  { left: "6%", top: "22%", size: 2, delay: "0s", duration: "9s" },
  { left: "16%", top: "74%", size: 1, delay: "1.8s", duration: "11s" },
  { left: "27%", top: "12%", size: 2, delay: "3.1s", duration: "10s" },
  { left: "38%", top: "82%", size: 1, delay: "0.8s", duration: "12s" },
  { left: "49%", top: "30%", size: 2, delay: "2.4s", duration: "9s" },
  { left: "59%", top: "66%", size: 1, delay: "1.2s", duration: "13s" },
  { left: "68%", top: "16%", size: 2, delay: "2.9s", duration: "10s" },
  { left: "78%", top: "78%", size: 1, delay: "4.2s", duration: "12s" },
  { left: "88%", top: "28%", size: 2, delay: "0.4s", duration: "11s" },
  { left: "94%", top: "58%", size: 1, delay: "3.7s", duration: "9s" },
  { left: "12%", top: "44%", size: 1, delay: "5s", duration: "13s" },
  { left: "83%", top: "9%", size: 1, delay: "1.5s", duration: "10s" },
];

const networkLines = [
  { left: "8%", top: "31%", width: "24%", rotate: "12deg" },
  { left: "21%", top: "67%", width: "18%", rotate: "-18deg" },
  { left: "65%", top: "25%", width: "22%", rotate: "-10deg" },
  { left: "69%", top: "72%", width: "20%", rotate: "16deg" },
];

const orbitalRings = [
  { className: styles.ringOne },
  { className: styles.ringTwo },
  { className: styles.ringThree },
  { className: styles.ringFour },
  { className: styles.ringFive },
];

function FloatingCard({
  card,
}: {
  card: (typeof skillCards)[number];
}) {
  const Icon = card.icon;

  return (
    <motion.article
      className={`${styles.skillCard} ${styles[card.position]}`}
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>
          <Icon size={17} />
        </span>
        <h3>{card.title}</h3>
      </div>
      <ul>
        {card.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </motion.article>
  );
}

function OrbitalSphere() {
  return (
    <motion.div
      className={styles.sphereSystem}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div className={styles.sphereGlow} />
      {orbitalRings.map((ring, index) => (
        <div key={index} className={`${styles.orbitalRing} ${ring.className}`}>
          <span className={styles.orbitNode} />
        </div>
      ))}
      <div className={styles.sphere}>
        <div className={styles.sphereGrid} />
        <div className={styles.sphereParticles}>
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className={styles.logoMark}>
          <Image src="/logo.png" alt="Virtanis logo" width={180} height={150} priority />
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.background}>
        <div className={styles.grid} />
        <div className={styles.noise} />
        <div className={styles.leftWatermark}>VIRTANIS</div>
        <div className={styles.sphereAura} />
        {particles.map((particle, index) => (
          <span
            key={index}
            className={styles.particle}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
        {networkLines.map((line, index) => (
          <span
            key={index}
            className={styles.networkLine}
            style={{
              left: line.left,
              top: line.top,
              width: line.width,
              transform: `rotate(${line.rotate})`,
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
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

        <div className={styles.visual} aria-label="Virtanis digital capability system">
          <OrbitalSphere />
          {skillCards.map((card) => (
            <FloatingCard key={card.title} card={card} />
          ))}
        </div>
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

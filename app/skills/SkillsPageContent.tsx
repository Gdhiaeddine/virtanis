"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  Box,
  Cloud,
  Code2,
  Globe2,
  Layers,
  LayoutGrid,
  PenTool,
  Smartphone,
  Zap,
} from "lucide-react";
import PageCTA from "../components/PageCTA";
import styles from "./SkillsPageContent.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-60px" },
};

const staggerItem = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

const skillCategories = [
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    level: 92,
    description: "Intelligent systems, machine learning and automation solutions.",
  },
  {
    icon: Code2,
    title: "Web Development",
    level: 95,
    description: "Modern scalable websites and web applications.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    level: 90,
    description: "Cross-platform applications built with Flutter.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    level: 94,
    description: "User-centered digital experiences and interfaces.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    level: 88,
    description: "Infrastructure, deployment and automation.",
  },
  {
    icon: Box,
    title: "3D & Interactive",
    level: 87,
    description: "Immersive digital experiences using modern web technologies.",
  },
];

const proficiencyLeft = [
  { name: "JavaScript / TypeScript", level: 95, icon: Code2 },
  { name: "React / Next.js", level: 96, icon: LayoutGrid },
  { name: "Python", level: 92, icon: Zap },
  { name: "Node.js", level: 90, icon: Globe2 },
  { name: "Flutter", level: 88, icon: Smartphone },
  { name: "Laravel", level: 92, icon: Layers },
];

const proficiencyRight = [
  { name: "AI / Machine Learning", level: 93, icon: BrainCircuit },
  { name: "UI/UX Design", level: 94, icon: PenTool },
  { name: "Cloud Infrastructure", level: 88, icon: Cloud },
  { name: "DevOps / CI-CD", level: 87, icon: Zap },
  { name: "Database Design", level: 91, icon: Layers },
  { name: "API Development", level: 95, icon: Globe2 },
];

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Laravel",
  "Flutter", "Tailwind CSS", "Supabase", "PostgreSQL", "MySQL", "MongoDB",
  "Docker", "AWS", "Linux", "Git", "GitHub", "Figma", "GSAP", "Three.js", "OpenAI", "Firebase",
];

function AnimatedProgressBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div className={styles.progressTrack} ref={ref}>
      <motion.div
        className={styles.progressFill}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="skills-title">
      <div className={styles.heroBg} aria-hidden="true">
        <Image
          src="/skills-hero.webp"
          alt="Skills background"
          fill
          priority
          className={styles.heroBgImage}
        />
      </div>

      <div className={styles.heroLeft}>
        <motion.h1
          id="skills-title"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Skills That Drive{" "}
          <span className={styles.gradientText}>Innovation.</span>
        </motion.h1>

        <motion.p
          className={styles.heroDescription}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          A powerful blend of technology, creativity and strategy to build
          intelligent digital experiences and scalable digital products.
        </motion.p>

        <motion.div
          className={styles.heroActions}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
        >
          <Link href="#proficiency" className={styles.primaryButton}>
            Explore My Work <ArrowRight size={17} />
          </Link>
           <Link href="/contact" className={styles.secondaryButton}>
            Let&apos;s Collaborate <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Skill Categories ─── */
function SkillCategories() {
  return (
    <motion.section
      className={styles.section}
      id="categories"
      aria-labelledby="categories-title"
      {...fadeUp}
    >
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>WHAT I DO</span>
        <h2 id="categories-title">Core Skill Categories</h2>
        <p>
          Specialized expertise across the full spectrum of modern digital
          product development.
        </p>
      </div>

      <motion.div
        className={styles.categoriesGrid}
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <motion.article
              key={cat.title}
              className={styles.categoryCard}
              variants={staggerItem}
            >
              <div className={styles.categoryIcon}>
                <Icon size={26} />
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
              <div className={styles.categoryProgress}>
                <AnimatedProgressBar level={cat.level} />
                <span className={styles.levelText}>{cat.level}%</span>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

/* ─── Technical Proficiency ─── */
function ProficiencyRow({
  item,
}: {
  item: (typeof proficiencyLeft)[0];
}) {
  const Icon = item.icon;
  return (
    <div className={styles.proficiencyRow}>
      <div className={styles.proficiencyInfo}>
        <div className={styles.proficiencyIcon}>
          <Icon size={18} />
        </div>
        <span className={styles.proficiencyName}>{item.name}</span>
      </div>
      <AnimatedProgressBar level={item.level} />
      <span className={styles.proficiencyLevel}>{item.level}%</span>
    </div>
  );
}

function TechnicalProficiency() {
  return (
    <motion.section
      className={styles.section}
      id="proficiency"
      aria-labelledby="proficiency-title"
      {...fadeUp}
    >
      <div className={styles.proficiencyContainer}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>EXPERTISE</span>
          <h2 id="proficiency-title">Technical Proficiency</h2>
          <p>
            A detailed overview of my technical expertise and experience.
          </p>
        </div>

        <div className={styles.proficiencyGrid}>
          <div className={styles.proficiencyColumn}>
            {proficiencyLeft.map((item) => (
              <ProficiencyRow key={item.name} item={item} />
            ))}
          </div>
          <div className={styles.proficiencyColumn}>
            {proficiencyRight.map((item) => (
              <ProficiencyRow key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ─── Technologies & Tools ─── */
function TechnologiesTools() {
  return (
    <motion.section
      className={styles.section}
      id="technologies"
      aria-labelledby="tech-title"
      {...fadeUp}
    >
      <div className={styles.techContainer}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>TECH STACK</span>
          <h2 id="tech-title">Technologies & Tools</h2>
          <p>
            Tools and technologies I use to build modern digital solutions.
          </p>
        </div>

        <motion.div
          className={styles.techGrid}
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-60px" }}
        >
          {technologies.map((tech) => (
            <motion.div key={tech} className={styles.techTile} variants={staggerItem}>
              <span className={styles.techName}>{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ─── Main Page ─── */
export default function SkillsPageContent() {
  return (
    <main className={styles.page}>
      <div className={styles.bgAtmosphere} aria-hidden="true">
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
        <div className={styles.starField} />
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
      </div>

      <div className={styles.container}>
        <HeroSection />
        <SkillCategories />
        <TechnicalProficiency />
        <TechnologiesTools />
        <PageCTA
          heading="Let's Build Something Extraordinary"
          description="Looking for a developer, AI engineer or digital partner? Let's turn your vision into reality."
          primaryText="View Projects"
          primaryHref="/#projects"
          secondaryText="Contact Me"
          secondaryHref="/contact"
        />
      </div>
    </main>
  );
}

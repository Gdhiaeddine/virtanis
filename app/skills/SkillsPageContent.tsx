"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  Box,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe2,
  Layers,
  LayoutGrid,
  Palette,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
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
    title: "AI & Machine Intelligence",
    tag: "Next-Gen AI",
    slug: "ai-ml",
    description: "Custom machine learning models, autonomous AI agents, neural pipelines, and intelligent automation workflows.",
    skills: ["LLM Integration", "Predictive Models", "Neural Networks", "NLP & Computer Vision"],
  },
  {
    icon: Code2,
    title: "Enterprise Web Systems",
    tag: "Zero-Latency",
    slug: "web-development",
    description: "High-throughput web applications, headless architectures, and scalable platforms engineered for reliability.",
    skills: ["Next.js & React", "TypeScript", "Microservices", "REST & GraphQL APIs"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Engineering",
    tag: "Native Feel",
    slug: "mobile-development",
    description: "Fluid cross-platform mobile experiences for iOS & Android built with native performance and offline-first state.",
    skills: ["Flutter & Dart", "iOS & Android", "Real-Time Sync", "Biometric Auth"],
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    tag: "Apple Standard",
    slug: "ui-ux-design",
    description: "Minimalist design systems, spatial computing interfaces, intuitive ergonomics, and high-fidelity prototypes.",
    skills: ["Design Systems", "Figma & Tokens", "Interaction Design", "UX Architecture"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Rigor",
    tag: "99.9% Uptime",
    slug: "cloud-devops",
    description: "Automated CI/CD pipelines, container orchestration, global CDN caching, and high-availability cloud infrastructure.",
    skills: ["Docker & K8s", "AWS Cloud", "Automated CI/CD", "Edge Computing"],
  },
  {
    icon: Box,
    title: "3D & Immersive Web",
    tag: "WebGL / Three.js",
    slug: "3d-web-experiences",
    description: "Hardware-accelerated 3D environments, spatial web interactions, and WebGL rendering for futuristic product showcases.",
    skills: ["Three.js", "WebGL Shaders", "GSAP Physics", "Interactive Canvases"],
  },
];

const technicalDisciplines = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "TypeScript / JavaScript", level: "Senior / Core", spec: "Strict Typing, ESNext, Async Runtimes" },
      { name: "Next.js & React 19", level: "Architecture", spec: "Server Components, Streaming SSR, Turbopack" },
      { name: "Python & AI Runtimes", level: "Advanced", spec: "PyTorch, FastAPI, HuggingFace, OpenAI APIs" },
      { name: "Flutter & Dart", level: "Production", spec: "Cross-Platform, Custom Shaders, State Machines" },
      { name: "Node.js & Express", level: "Backend", spec: "Event-Driven, High-Concurrency WebSockets" },
      { name: "Tailwind CSS v4", level: "UI Systems", spec: "Zero-Runtime CSS, Custom Design Tokens" },
    ],
  },
  {
    category: "Infrastructure & Data Architecture",
    items: [
      { name: "PostgreSQL & Supabase", level: "Database", spec: "Relational Modeling, Indexing, Vector DBs" },
      { name: "AWS & Edge Hosting", level: "Cloud", spec: "Lambda, CloudFront, S3, Global CDN" },
      { name: "Docker & Containerization", level: "DevOps", spec: "Multi-Stage Builds, Isolated Environments" },
      { name: "CI/CD & Git Pipelines", level: "Automation", spec: "GitHub Actions, Automated Testing, Deployments" },
      { name: "Redis & Caching Layers", level: "Performance", spec: "In-Memory KV, Rate Limiting, Pub/Sub" },
      { name: "Three.js & WebGL", level: "Spatial", spec: "GLTF Pipelines, Custom Fragment Shaders" },
    ],
  },
];

const technologyStack = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "AI / Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "AWS Cloud", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Tailwind CSS", category: "UI" },
  { name: "Figma", category: "Design" },
  { name: "Three.js", category: "3D Web" },
  { name: "OpenAI", category: "AI" },
  { name: "Redis", category: "Data" },
  { name: "GraphQL", category: "API" },
];

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="skills-title">
      <div className={styles.heroBg} aria-hidden="true">
        <Image
          src="/skills-hero.webp"
          alt="Virtanis technical capabilities background"
          fill
          priority
          className={styles.heroBgImage}
        />
      </div>

      <div className={styles.heroContent}>
        <span className={styles.sectionLabel}>TECHNICAL SPECIFICATIONS</span>
        <h1 id="skills-title">
          Architectural Precision & <span className={styles.serifAccent}>Intelligent Engineering</span>
        </h1>

        <p className={styles.heroDescription}>
          Our multidisciplinary digital engineering capabilities unite artificial intelligence,
          cloud-native architecture, and precision design systems to build future-ready platforms.
        </p>

        <div className={styles.heroActions}>
          <a href="#specializations" className={styles.primaryButton}>
            Explore Specializations <ArrowRight size={15} />
          </a>
          <Link href="/contact" className={styles.secondaryButton}>
            Consult Lead Architect <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Skill Categories ─── */
function SkillCategories() {
  return (
    <motion.section
      className={styles.section}
      id="specializations"
      aria-labelledby="categories-title"
      {...fadeUp}
    >
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>CORE DOMAINS</span>
        <h2 id="categories-title">Core Engineering Specializations</h2>
        <p>
          Specialized expertise engineered to deliver end-to-end digital excellence for modern enterprises.
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
              <div className={styles.cardTop}>
                <div className={styles.categoryIcon}>
                  <Icon size={22} />
                </div>
                <span className={styles.cardTag}>{cat.tag}</span>
              </div>
              
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
              
              <div className={styles.pillList}>
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.skillPill}>
                    {skill}
                  </span>
                ))}
              </div>

              <Link href={`/services/${cat.slug}`} className={styles.exploreLink}>
                <span>Explore Domain Blueprint</span>
                <ArrowRight size={13} className={styles.exploreArrow} />
              </Link>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}

/* ─── Technical Disciplines ─── */
function TechnicalDisciplines() {
  return (
    <motion.section
      className={styles.section}
      id="disciplines"
      aria-labelledby="disciplines-title"
      {...fadeUp}
    >
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>PROFICIENCY MATRIX</span>
        <h2 id="disciplines-title">Technical Disciplines & Stacks</h2>
        <p>
          Deep competency benchmarks across modern software paradigms, reactive runtimes, and distributed cloud systems.
        </p>
      </div>

      <div className={styles.disciplinesGrid}>
        {technicalDisciplines.map((group) => (
          <div key={group.category} className={styles.disciplineColumn}>
            <h3 className={styles.disciplineTitle}>{group.category}</h3>
            <div className={styles.disciplineList}>
              {group.items.map((item) => (
                <div key={item.name} className={styles.disciplineCard}>
                  <div className={styles.disciplineHeader}>
                    <span className={styles.disciplineName}>{item.name}</span>
                    <span className={styles.disciplineLevel}>{item.level}</span>
                  </div>
                  <span className={styles.disciplineSpec}>{item.spec}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

/* ─── Technologies Matrix ─── */
function TechnologiesMatrix() {
  return (
    <motion.section
      className={styles.section}
      id="technologies"
      aria-labelledby="tech-title"
      {...fadeUp}
    >
      <div className={styles.sectionHeader}>
        <span className={styles.sectionLabel}>TOOLING ECOSYSTEM</span>
        <h2 id="tech-title">Technologies & Production Stack</h2>
        <p>
          Industry-standard tools and libraries leveraged to ensure high performance, security, and velocity.
        </p>
      </div>

      <motion.div
        className={styles.techGrid}
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-60px" }}
      >
        {technologyStack.map((tech) => (
          <motion.div key={tech.name} className={styles.techTile} variants={staggerItem}>
            <span className={styles.techName}>{tech.name}</span>
            <span className={styles.techCategory}>{tech.category}</span>
          </motion.div>
        ))}
      </motion.div>
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

      <HeroSection />

      <div className={styles.container}>
        <SkillCategories />
        <TechnicalDisciplines />
        <TechnologiesMatrix />

        <PageCTA
          heading="Ready To Engineer Your Digital Platform?"
          description="Collaborate with Virtanis to design, build, and deploy intelligent software engineered for scale."
          primaryText="Start a Project"
          primaryHref="/contact"
        />
      </div>
    </main>
  );
}

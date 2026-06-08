"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Projects.module.css";

/* ─── Types ─── */
type Category = "ML" | "Web" | "App" | "Design";

interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  technologies: string[];
  status: "Live" | "In Progress" | "Beta";
  completion: number;
  aiPowered: boolean;
  metric: { label: string; value: string };
  link?: string;
  image: string;
  /* hue rotation for the generated cinematic preview */
  hue: number;
}

/* ─── Data ─── */
const PROJECTS: Project[] = [
  {
    id: 0,
    title: "Website Sodimfel",
    category: "Web",
    description:
      "Industrial electrical solutions platform showcasing transformers, substations, power distribution systems, and engineering services through a modern enterprise-grade web experience.",
    technologies: ["React", "Tailwind CSS", "Laravel"],
    status: "Beta",
    link: "https://sodimfel-frontend.vercel.app/",
    image: "/projects/sodimfel.png",
    completion: 100,
    aiPowered: true,
    metric: { label: "Inference", value: "12ms" },
    hue: 0,
  },
  {
    id: 1,
    title: "E-commerce Website – Groupe MTFC",
    category: "Web",
    description:
      "E-commerce website for Groupe MTFC, specialized in selling home appliances and household items. Developed with React (frontend) and Laravel (backend), providing a smooth user experience and efficient product and order management. Note: the admin page is accessible with https://mtfc.netlify.app/admin.",
    technologies: ["React", "Tailwind CSS", "Laravel"],
    status: "Beta",
    link: "https://mtfc.netlify.app",
    image: "/projects/mtfc.png",
    completion: 100,
    aiPowered: true,
    metric: { label: "Inference", value: "12ms" },
    hue: 0,
  },
  {
    id: 2,
    title: "Golden Hills Hotel Website",
    category: "Web",
    description:
      "Golden Hills Hotel presentation website showcasing its rooms, services, and relaxation spaces. Built with Next.js and styled using Tailwind CSS, it delivers a modern, fast, and fully responsive interface with smooth navigation and an immersive visual experience.",
    technologies: ["Next js", "Chadcn", "Anime Js", "GSAP"],
    status: "Live",
    image: "/projects/hotelGoldenHills.png",
    link: "https://hotel-golden-hills.vercel.app",
    completion: 100,
    aiPowered: true,
    metric: { label: "Inference", value: "12ms" },
    hue: 0,
  },
  {
    id: 3,
    title: "APL Tech — Futuristic Gaming PC Store Website",
    category: "Design",
    description:
      "A modern and immersive e-commerce website designed for gamers. APL Tech offers a futuristic experience with a sleek dark and purple aesthetic, allowing users to explore, customize, and build their own gaming PCs.",
    technologies: ["Figma"],
    status: "Beta",
    link: "https://www.behance.net/gallery/236340397/Gaming-Store-Website-Design-with-Neon-Tech-Vibes",
    image: "/projects/apltech.png",
    completion: 100,
    aiPowered: true,
    metric: { label: "Inference", value: "12ms" },
    hue: 0,
  },
  {
    id: 4,
    title: "House Rent Predictor Germany",
    category: "ML",
    description:
      "Machine Learning application that predicts rental prices in Germany based on real estate features such as location, size, and number of rooms. The goal is to provide fast and accurate housing price estimation using an AI model.",
    technologies: ["Python", "XGBoost", "Next js", "Tailwind CSS", "FastAPI"],
    status: "Live",
    link: "https://germanyrenthousepredict.vercel.app/",
    image: "/projects/MLRentalHousePredict.png",
    completion: 100,
    aiPowered: true,
    metric: { label: "Inference", value: "12ms" },
    hue: 0,
  },
  {
    id: 5,
    title: "Customer Churn Prediction System",
    category: "ML",
    description:
      "An AI-powered customer churn prediction system that analyzes user behavior and predicts the likelihood of customer attrition, enabling proactive retention actions.",
    technologies: [
      "Python",
      "XGBoost",
      "Next js",
      "Tailwind CSS",
      "FastAPI",
      "SMOTE",
    ],
    status: "Live",
    link: "https://churn-classification-frontend.vercel.app/",
    image: "/projects/churn.png",
    completion: 100,
    aiPowered: true,
    metric: { label: "Inference", value: "12ms" },
    hue: 0,
  },
  {
    id: 6,
    title: "Movie Recommendation System",
    category: "ML",
    description:
      "A machine learning-powered recommendation system that suggests movies based on user preferences, genres, ratings, and similarity analysis to enhance content discovery.",
    technologies: [
      "Python",
      "XGBoost",
      "Next js",
      "Tailwind CSS",
      "FastAPI",
      "SMOTE",
      "• Scikit-Learn",
      "Pandas",
      "NumPy",
    ],
    status: "Live",
    link: "https://movie-ai-frontend.vercel.app/",
    image: "/projects/movieRecomandation.png",
    completion: 100,
    aiPowered: true,
    metric: { label: "Inference", value: "12ms" },
    hue: 0,
  },
  {
    id: 7,
    title: "Hotel Management System",
    category: "Web",
    description:
      "A comprehensive hotel management platform for handling reservations, room allocation, guest information, billing, and daily hotel operations efficiently.",
    technologies: ["Next js", "Postgresql", "Nest Js", "Tailwind"],
    status: "In Progress",
    image: "/projects/hotelManagement.png",
    completion: 100,
    aiPowered: true,
    metric: { label: "Inference", value: "12ms" },
    hue: 0,
  },
];

const FILTERS: ("All" | Category)[] = ["All", "ML", "Web", "App", "Design"];
const INITIAL_COUNT = 6;

/* ─── Deterministic particle generator ─── */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(214);

const PARTICLES = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  left: `${rand() * 100}%`,
  top: `${rand() * 100}%`,
  duration: `${14 + rand() * 18}s`,
  delay: `${rand() * 12}s`,
  size: `${1 + rand() * 2.5}px`,
  opacity: rand() * 0.3 + 0.1,
}));

const HOLO_LINES = [
  { id: 0, top: "12%", left: "3%", width: "24%", delay: "0s" },
  { id: 1, top: "34%", right: "6%", width: "22%", delay: "-2s" },
  { id: 2, top: "58%", left: "5%", width: "18%", delay: "-4s" },
  { id: 3, top: "80%", right: "4%", width: "26%", delay: "-1s" },
];

const HUD_CIRCLES = [
  {
    id: 0,
    size: "320px",
    top: "4%",
    right: "3%",
    duration: "32s",
    delay: "0s",
  },
  {
    id: 1,
    size: "200px",
    bottom: "8%",
    left: "5%",
    duration: "26s",
    delay: "-9s",
  },
];

/* ─── Status indicator ─── */
function StatusDot({ status }: { status: Project["status"] }) {
  const cls =
    status === "Live"
      ? styles.statusLive
      : status === "Beta"
        ? styles.statusBeta
        : styles.statusProgress;
  return (
    <span className={styles.statusWrap}>
      <span className={`${styles.statusDot} ${cls}`} />
      {status}
    </span>
  );
}

/* ─── Arrow icon ─── */
function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ─── Project Card ─── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${(index % 6) * 0.07}s` }}
    >
      {/* Preview */}
      <div className={styles.preview}>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 44vw, 29vw"
          className={styles.previewImage}
        />
        <div className={styles.previewOverlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.metaRow}>
          <span className={styles.categoryPill}>{project.category}</span>
          <StatusDot status={project.status} />
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>

        {/* Stats 
        <div className={styles.statsRow}>
          <div className={styles.statBlock}>
            <span className={styles.statValue}>{project.metric.value}</span>
            <span className={styles.statLabel}>{project.metric.label}</span>
          </div>
          <div className={styles.completionWrap}>
            <div className={styles.completionHead}>
              <span>Completion</span>
              <span>{project.completion}%</span>
            </div>
            <div className={styles.completionTrack}>
              <div
                className={styles.completionFill}
                style={{ width: `${project.completion}%` }}
              />
            </div>
          </div>
        </div>
        */}
        {/* Tech tags */}
        <div className={styles.techTags}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.link ? (
          <Link
            className={styles.exploreBtn}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Project
            <span className={styles.exploreIcon}>
              <ArrowIcon />
            </span>
          </Link>
        ) : (
          <button className={styles.exploreBtn} type="button" disabled>
            Explore Project
            <span className={styles.exploreIcon}>
              <ArrowIcon />
            </span>
          </button>
        )}
      </div>

      <div className={styles.cardTopGlow} />
      <div className={styles.cardEdgeGlow} />
    </article>
  );
}

/* ─── Component ─── */
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");
  const [expanded, setExpanded] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  /* Reset expansion when switching filters */
  const handleFilter = (filter: "All" | Category) => {
    setActiveFilter(filter);
    setExpanded(false);
  };

  const handleShowLess = () => {
    setExpanded(false);
    // smooth cinematic scroll back to the grid top
    requestAnimationFrame(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  /* Header scroll reveal */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setHeaderVisible(true);
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.projects} id="projects">
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
        {HOLO_LINES.map((line) => (
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
        <div
          className={styles.neuralNode}
          style={{ top: "20%", right: "14%" }}
        />
        <div
          className={styles.neuralNode}
          style={{ top: "52%", left: "10%" }}
        />
        <div
          className={styles.neuralNode}
          style={{ bottom: "24%", right: "20%" }}
        />
      </div>

      {/* ─── Content ─── */}
      <div className={styles.container}>
        {/* Header */}
        <div
          className={`${styles.header} ${headerVisible ? styles.headerVisible : ""}`}
        >
          <span className={styles.sectionLabel}>SELECTED PROJECTS</span>
          <h2 className={styles.mainTitle}>
            Building The Future Through Intelligent Digital Products
          </h2>
          <p className={styles.description}>
            A curated portfolio of intelligent digital products, scalable
            systems and AI solutions. Every project is engineered with precision
            — blending advanced architecture, immersive experiences and modern
            development to drive meaningful digital transformation.
          </p>
        </div>

        {/* Filters */}
        <div
          className={styles.filterBar}
          role="tablist"
          aria-label="Project categories"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`${styles.filterBtn} ${
                activeFilter === filter ? styles.filterActive : ""
              }`}
              onClick={() => handleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className={styles.grid}>
          {visible.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Expand / Collapse */}
        {hasMore && (
          <div className={styles.viewMoreWrap}>
            <button
              type="button"
              className={styles.viewMoreBtn}
              onClick={() => (expanded ? handleShowLess() : setExpanded(true))}
            >
              {expanded ? "Show Less" : "View More Projects"}
              <span
                className={`${styles.viewMoreIcon} ${
                  expanded ? styles.viewMoreIconUp : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

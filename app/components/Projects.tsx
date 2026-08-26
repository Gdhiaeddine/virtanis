"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, Images, Maximize2 } from "lucide-react";
import ProjectGalleryModal, { ModalProject } from "./ProjectGalleryModal";
import styles from "./Projects.module.css";

/* ─── Types ─── */
type Category = "ML" | "Web" | "App" | "Design";

interface Project extends ModalProject {
  id: number;
  title: string;
  category: Category;
  description: string;
  technologies: string[];
  status: "Live" | "In Progress" | "Beta";
  link?: string;
  image: string;
  images?: string[];
}

import projectsData from "./projects.json";

const STATUS_ORDER: Record<Project["status"], number> = {
  "Live": 0,
  "Beta": 1,
  "In Progress": 2,
};

const PROJECTS: Project[] = (projectsData as Project[]).sort((a, b) => {
  return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
});

const filterLabels: Record<"All" | Category, string> = {
  All: "All Deployments",
  ML: "AI & Machine Learning",
  Web: "Web Platforms",
  App: "Mobile Systems",
  Design: "Spatial & UI/UX",
};

const FILTERS: ("All" | Category)[] = ["All", "ML", "Web", "Design"];
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
function StatusBadge({ status }: { status: Project["status"] }) {
  const statusClass =
    status === "Live"
      ? styles.statusLive
      : status === "Beta"
        ? styles.statusBeta
        : styles.statusProgress;

  const label =
    status === "Live"
      ? "Live Deployment"
      : status === "Beta"
        ? "Beta Preview"
        : "In Development";

  return (
    <span className={styles.statusWrap}>
      <span className={`${styles.statusDot} ${statusClass}`} />
      <span>{label}</span>
    </span>
  );
}

/* ─── Project Card (Interactive Gallery Enabled) ─── */
function ProjectCard({
  project,
  index,
  onOpenGallery,
}: {
  project: Project;
  index: number;
  onOpenGallery: (project: Project, index?: number) => void;
}) {
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const imageCount = images.length;

  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${(index % 6) * 0.07}s` }}
    >
      <div
        className={styles.cardPreview}
        onClick={() => onOpenGallery(project, 0)}
        role="button"
        tabIndex={0}
        aria-label={`Open ${project.title} photo gallery`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenGallery(project, 0);
          }
        }}
      >
        <Image
          src={project.image}
          alt={`${project.title} preview screenshot`}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 31vw"
          className={styles.previewImage}
        />
        <div className={styles.previewOverlay} />

        <div className={styles.previewBadges}>
          <StatusBadge status={project.status} />
          <span className={styles.categoryBadge}>{project.category}</span>
        </div>

        <div className={styles.previewFooter}>
          <span className={styles.imageCountBadge}>
            <Images size={12} />
            <span>
              {imageCount} {imageCount === 1 ? "Photo" : "Photos"}
            </span>
          </span>

          <span className={styles.previewHint}>
            <Maximize2 size={12} />
            <span>View Gallery</span>
          </span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDescription}>{project.description}</p>

        <div className={styles.techList}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techPill}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.cardFooter}>
          {project.link ? (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              <span>Launch Live Platform</span>
              <ExternalLink size={14} className={styles.linkIcon} />
            </Link>
          ) : (
            <span className={styles.cardLinkDisabled}>
              <span>Internal Enterprise System</span>
            </span>
          )}
        </div>
      </div>
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

  // Gallery Modal State
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleOpenGallery = (project: Project, index = 0) => {
    setGalleryProject(project);
    setActiveImageIndex(index);
  };

  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PROJECTS.length };
    PROJECTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  const handleFilter = (filter: "All" | Category) => {
    setActiveFilter(filter);
    setExpanded(false);
  };

  const handleShowLess = () => {
    setExpanded(false);
    requestAnimationFrame(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

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
    <>
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

          {/* Filters with Counts */}
          <div
            className={styles.filterBar}
            role="tablist"
            aria-label="Project categories"
          >
            {FILTERS.map((filter) => {
              const count = projectCounts[filter] || 0;
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.filterBtn} ${isActive ? styles.filterActive : ""}`}
                  onClick={() => handleFilter(filter)}
                >
                  <span>{filterLabels[filter]}</span>
                  <span className={styles.filterCount}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div ref={gridRef} className={styles.grid}>
            {visible.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenGallery={handleOpenGallery}
              />
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

      {/* Full-Page Gallery Lightbox Modal */}
      <ProjectGalleryModal
        project={galleryProject}
        activeImageIndex={activeImageIndex}
        onClose={() => setGalleryProject(null)}
        onSelectImage={(idx) => setActiveImageIndex(idx)}
      />
    </>
  );
}

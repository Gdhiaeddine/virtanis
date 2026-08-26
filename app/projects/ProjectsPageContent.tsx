"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, Images, Maximize2 } from "lucide-react";
import { useMemo, useState } from "react";
import projectsData from "../components/projects.json";
import PageCTA from "../components/PageCTA";
import ProjectGalleryModal, { ModalProject } from "../components/ProjectGalleryModal";
import styles from "./ProjectsPageContent.module.css";

type Project = ModalProject & {
  id: number;
  title: string;
  category: Category;
  description: string;
  technologies: string[];
  status: "Live" | "In Progress" | "Beta";
  link?: string;
  image: string;
  images?: string[];
};

type Category = "ML" | "Web" | "App" | "Design";

const statusOrder: Record<Project["status"], number> = {
  Live: 0,
  Beta: 1,
  "In Progress": 2,
};

const projects = (projectsData as Project[]).sort((a, b) => {
  return statusOrder[a.status] - statusOrder[b.status];
});

const filterLabels: Record<"All" | Category, string> = {
  All: "All Deployments",
  ML: "AI & Machine Learning",
  Web: "Web Platforms",
  App: "Mobile Systems",
  Design: "Spatial & UI/UX",
};

const filters: ("All" | Category)[] = ["All", "ML", "Web", "Design"];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

/* ─── Hero Section ─── */
function ProjectHero() {
  return (
    <section className={styles.hero} aria-label="Projects overview">
      <div className={styles.heroBg} aria-hidden="true">
        <Image
          src="/projects/projects.png"
          alt="Virtanis Projects Architecture Background"
          fill
          priority
          sizes="100vw"
          className={styles.heroBgImage}
        />
      </div>

      <div className={styles.heroContent}>
        <span className={styles.sectionLabel}>
          PROVEN PORTFOLIO & ARCHITECTURE
        </span>

        <h1>
          Featured Production & <br />
          <span className={styles.serifAccent}>Architectural</span> Deployments
        </h1>

        <p className={styles.heroDescription}>
          Explore high-impact digital platforms, mission-critical web applications,
          machine learning systems, and precision UI/UX interfaces engineered by
          Virtanis for world-class speed, security, and scale.
        </p>

        <div className={styles.heroActions}>
          <a href="#projects-grid" className={styles.primaryButton}>
            Explore Deployments <ArrowRight size={15} />
          </a>
          <Link href="/contact" className={styles.secondaryButton}>
            Initiate Project <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Filter Bar ─── */
function ProjectFilters({
  activeFilter,
  setActiveFilter,
  projectCounts,
}: {
  activeFilter: "All" | Category;
  setActiveFilter: (filter: "All" | Category) => void;
  projectCounts: Record<string, number>;
}) {
  return (
    <motion.div
      className={styles.filterSection}
      role="tablist"
      aria-label="Filter deployments by category"
      {...fadeUp}
    >
      <div className={styles.filterScroller}>
        {filters.map((filter) => {
          const count = projectCounts[filter] || 0;
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.filterButton} ${isActive ? styles.filterActive : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              <span>{filterLabels[filter]}</span>
              <span className={styles.filterCount}>{count}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ─── Status Indicator ─── */
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
  onOpenGallery,
}: {
  project: Project;
  onOpenGallery: (project: Project, index?: number) => void;
}) {
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const imageCount = images.length;

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      layout
    >
      <div
        className={styles.cardPreview}
        onClick={() => onOpenGallery(project, 0)}
        role="button"
        tabIndex={0}
        aria-label={`Open ${project.title} gallery`}
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
        <h2 className={styles.cardTitle}>{project.title}</h2>
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
    </motion.article>
  );
}

/* ─── Grid Section ─── */
function ProjectsGrid({
  visibleProjects,
  allVisible,
  setAllVisible,
  hasMore,
  onOpenGallery,
}: {
  visibleProjects: Project[];
  allVisible: boolean;
  setAllVisible: (value: boolean) => void;
  hasMore: boolean;
  onOpenGallery: (project: Project, index?: number) => void;
}) {
  return (
    <motion.section
      className={styles.gridSection}
      id="projects-grid"
      aria-label="Project portfolio matrix"
      {...fadeUp}
    >
      <div className={styles.projectsGrid}>
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenGallery={onOpenGallery}
          />
        ))}
      </div>

      {hasMore && (
        <div className={styles.viewMoreContainer}>
          <button
            type="button"
            className={styles.viewMoreButton}
            onClick={() => setAllVisible(!allVisible)}
          >
            {allVisible ? "Show Less" : "View All"}
            <ArrowRight
              size={15}
              className={`${styles.viewMoreIcon} ${allVisible ? styles.viewMoreIconUp : ""}`}
            />
          </button>
        </div>
      )}
    </motion.section>
  );
}

/* ─── Main Content ─── */
export default function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");
  const [allVisible, setAllVisible] = useState(false);

  // Gallery Modal State
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleOpenGallery = (project: Project, index = 0) => {
    setGalleryProject(project);
    setActiveImageIndex(index);
  };

  const projectCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const visibleProjects = allVisible
    ? filteredProjects
    : filteredProjects.slice(0, 6);
  const hasMore = filteredProjects.length > 6;

  return (
    <>
      <main className={styles.page}>
        <div className={styles.bgAtmosphere} aria-hidden="true">
          <div className={styles.gridOverlay} />
          <div className={styles.fogLayer} />
          <div className={styles.starField} />
          <div className={styles.glowOne} />
          <div className={styles.glowTwo} />
        </div>

        <ProjectHero />

        <div className={styles.container}>
          <ProjectFilters
            activeFilter={activeFilter}
            setActiveFilter={(filter) => {
              setActiveFilter(filter);
              setAllVisible(false);
            }}
            projectCounts={projectCounts}
          />

          <ProjectsGrid
            visibleProjects={visibleProjects}
            allVisible={allVisible}
            setAllVisible={setAllVisible}
            hasMore={hasMore}
            onOpenGallery={handleOpenGallery}
          />

          <PageCTA
            heading="Ready To Engineer Your Flagship Platform?"
            description="Partner with Virtanis to architect, build, and deploy intelligent software designed for unmatched performance."
            primaryText="Initiate Project"
            primaryHref="/contact"
          />
        </div>
      </main>

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

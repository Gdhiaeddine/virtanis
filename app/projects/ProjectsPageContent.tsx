"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Images, Maximize2 } from "lucide-react";
import { useMemo, useState } from "react";
import projectsData from "../components/projects.json";
import PageCTA from "../components/PageCTA";
import ProjectGalleryModal, { ModalProject } from "../components/ProjectGalleryModal";
import ProjectDetailsModal from "../components/ProjectDetailsModal";
import {
  getTranslations,
  Locale,
  ProjectsPageTranslation,
  ProjectsTranslation,
} from "../data/translations";
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

const filters: ("All" | Category)[] = ["All", "ML", "Web", "Design"];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

/* ─── Hero Section ─── */
function ProjectHero({
  t,
  isFr,
}: {
  t: ProjectsPageTranslation;
  isFr: boolean;
}) {
  return (
    <section className={styles.hero} aria-label={isFr ? "Aperçu des réalisations" : "Projects overview"}>
      <div className={styles.heroBg} aria-hidden="true">
        <Image
          src="/projects/projects.png"
          alt={isFr ? "Fond d'architecture des projets Virtanis" : "Virtanis Projects Architecture Background"}
          fill
          priority
          sizes="100vw"
          className={styles.heroBgImage}
        />
      </div>

      <div className={styles.heroContent}>
        <span className={styles.sectionLabel}>{t.hero.label}</span>

        <h1>
          {t.hero.titlePrefix}
          <br />
          <span className={styles.serifAccent}>{t.hero.titleAccent}</span>
          {t.hero.titleSuffix}
        </h1>

        <p className={styles.heroDescription}>{t.hero.description}</p>

        <div className={styles.heroActions}>
          <a href="#projects-grid" className={styles.primaryButton}>
            {t.hero.exploreBtn} <ArrowRight size={15} />
          </a>
          <Link href={isFr ? "/fr#contact" : "/contact"} className={styles.secondaryButton}>
            {t.hero.initiateBtn} <ArrowRight size={15} />
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
  t,
}: {
  activeFilter: "All" | Category;
  setActiveFilter: (filter: "All" | Category) => void;
  projectCounts: Record<string, number>;
  t: ProjectsPageTranslation;
}) {
  return (
    <motion.div
      className={styles.filterSection}
      role="tablist"
      aria-label={t.filterAria}
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
              <span>{t.filterLabels[filter]}</span>
              <span className={styles.filterCount}>{count}</span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ─── Status Indicator ─── */
function StatusBadge({
  status,
  statusLabels,
}: {
  status: Project["status"];
  statusLabels: ProjectsPageTranslation["statusLabels"];
}) {
  const statusClass =
    status === "Live"
      ? styles.statusLive
      : status === "Beta"
        ? styles.statusBeta
        : styles.statusProgress;

  const label =
    status === "Live"
      ? statusLabels.live
      : status === "Beta"
        ? statusLabels.beta
        : statusLabels.inProgress;

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
  locale,
  tPage,
  tProjects,
  onOpenGallery,
  onOpenDetails,
}: {
  project: Project;
  locale: Locale;
  tPage: ProjectsPageTranslation;
  tProjects: ProjectsTranslation;
  onOpenGallery: (project: Project, index?: number) => void;
  onOpenDetails: (project: Project) => void;
}) {
  const isFr = locale === "fr";
  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const imageCount = images.length;

  const projectTitle = tProjects.items[project.id]?.title || project.title;
  const projectDesc = tProjects.items[project.id]?.description || project.description;
  const localizedProject: Project = {
    ...project,
    title: projectTitle,
    description: projectDesc,
  };
  const categoryLabel =
    project.category === "ML" ? (isFr ? "IA / ML" : "AI / ML") : project.category;

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
        onClick={() => onOpenGallery(localizedProject, 0)}
        role="button"
        tabIndex={0}
        aria-label={
          isFr
            ? `Ouvrir la galerie photo de ${projectTitle}`
            : `Open ${projectTitle} gallery`
        }
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpenGallery(localizedProject, 0);
          }
        }}
      >
        <Image
          src={project.image}
          alt={
            isFr
              ? `Capture d'écran de prévisualisation de ${projectTitle}`
              : `${projectTitle} preview screenshot`
          }
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 46vw, 31vw"
          className={styles.previewImage}
        />
        <div className={styles.previewOverlay} />

        <div className={styles.previewBadges}>
          <StatusBadge status={project.status} statusLabels={tPage.statusLabels} />
          <span className={styles.categoryBadge}>{categoryLabel}</span>
        </div>

        <div className={styles.previewFooter}>
          <span className={styles.imageCountBadge}>
            <Images size={12} />
            <span>
              {imageCount} {imageCount === 1 ? tPage.photoLabel : tPage.photosLabel}
            </span>
          </span>

          <span className={styles.previewHint}>
            <Maximize2 size={12} />
            <span>{tPage.viewGallery}</span>
          </span>
        </div>
      </div>

      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{projectTitle}</h2>

        <div className={styles.descWrap}>
          <p className={styles.cardDescription}>{projectDesc}</p>
          <button
            type="button"
            className={styles.showMoreBtn}
            onClick={() => onOpenDetails(localizedProject)}
            aria-label={
              isFr
                ? `Afficher plus de détails pour ${projectTitle}`
                : `Show more details for ${projectTitle}`
            }
          >
            {tPage.showMore}
          </button>
        </div>

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
              <span>{tPage.launchPlatform}</span>
              <ExternalLink size={14} className={styles.linkIcon} />
            </Link>
          ) : (
            <span className={styles.cardLinkDisabled}>
              <span>{tPage.internalSystem}</span>
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
  locale,
  tPage,
  tProjects,
  onOpenGallery,
  onOpenDetails,
}: {
  visibleProjects: Project[];
  allVisible: boolean;
  setAllVisible: (value: boolean) => void;
  hasMore: boolean;
  locale: Locale;
  tPage: ProjectsPageTranslation;
  tProjects: ProjectsTranslation;
  onOpenGallery: (project: Project, index?: number) => void;
  onOpenDetails: (project: Project) => void;
}) {
  return (
    <motion.section
      className={styles.gridSection}
      id="projects-grid"
      aria-label={locale === "fr" ? "Matrice des projets du portfolio" : "Project portfolio matrix"}
      {...fadeUp}
    >
      <div className={styles.projectsGrid}>
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            locale={locale}
            tPage={tPage}
            tProjects={tProjects}
            onOpenGallery={onOpenGallery}
            onOpenDetails={onOpenDetails}
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
            {allVisible ? tPage.showLess : tPage.viewMore}
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

interface ProjectsPageContentProps {
  locale?: Locale;
}

/* ─── Main Content ─── */
export default function ProjectsPageContent({
  locale = "en",
}: ProjectsPageContentProps = {}) {
  const isFr = locale === "fr";
  const dict = getTranslations(locale);
  const tPage = dict.projectsPage;
  const tProjects = dict.projects;

  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");
  const [allVisible, setAllVisible] = useState(false);

  // Gallery Modal State
  const [galleryProject, setGalleryProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Details Modal State
  const [detailsProject, setDetailsProject] = useState<Project | null>(null);

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

        <ProjectHero t={tPage} isFr={isFr} />

        <div className={styles.container}>
          <ProjectFilters
            activeFilter={activeFilter}
            setActiveFilter={(filter) => {
              setActiveFilter(filter);
              setAllVisible(false);
            }}
            projectCounts={projectCounts}
            t={tPage}
          />

          <ProjectsGrid
            visibleProjects={visibleProjects}
            allVisible={allVisible}
            setAllVisible={setAllVisible}
            hasMore={hasMore}
            locale={locale}
            tPage={tPage}
            tProjects={tProjects}
            onOpenGallery={handleOpenGallery}
            onOpenDetails={setDetailsProject}
          />

          <PageCTA
            heading={tPage.cta.heading}
            description={tPage.cta.description}
            primaryText={tPage.cta.primaryText}
            primaryHref={isFr ? "/fr#contact" : "/contact"}
          />
        </div>
      </main>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={detailsProject}
        locale={locale}
        onClose={() => setDetailsProject(null)}
        onOpenGallery={(p, idx) => {
          setDetailsProject(null);
          handleOpenGallery(p as Project, idx);
        }}
      />

      {/* Full-Page Gallery Lightbox Modal */}
      <ProjectGalleryModal
        project={galleryProject}
        locale={locale}
        activeImageIndex={activeImageIndex}
        onClose={() => setGalleryProject(null)}
        onSelectImage={(idx) => setActiveImageIndex(idx)}
      />
    </>
  );
}

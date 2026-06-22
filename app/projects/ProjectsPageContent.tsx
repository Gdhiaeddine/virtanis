"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import projectsData from "../components/projects.json";
import projectStyles from "../components/Projects.module.css";
import PageCTA from "../components/PageCTA";
import styles from "./ProjectsPageContent.module.css";

type Project = {
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
  hue: number;
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

const filters: ("All" | Category)[] = ["All", "ML", "Web", "App", "Design"];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

function ProjectHero() {
  return (
    <section className={styles.hero} aria-labelledby="projects-title">
      <div className={styles.heroBg} aria-hidden="true">
        <Image
          src="/projects/projects.png"
          alt="Projects background"
          fill
          priority
          className={styles.heroBgImage}
        />
      </div>

      <div className={styles.heroContent}>
        <span className={styles.sectionLabel}>OUR WORK</span>
        <h1 id="projects-title">
          Projects That <span className={styles.serifAccent}>Create Impact.</span>
        </h1>
        <p>
          A selection of digital products and solutions crafted with technology,
          creativity and purpose.
        </p>
        <div className={styles.heroActions}>
          <a href="#projects-grid" className={styles.primaryButton}>
            View All Projects <ArrowRight size={17} />
          </a>
           <a href="/contact" className={styles.secondaryButton}>
            Let&apos;s Build Yours <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectFilters({
  activeFilter,
  setActiveFilter,
}: {
  activeFilter: "All" | Category;
  setActiveFilter: (filter: "All" | Category) => void;
}) {
  return (
    <motion.section
      className={projectStyles.filterBar}
      role="tablist"
      aria-label="Project categories"
      {...fadeUp}
    >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
            className={`${projectStyles.filterBtn} ${
              activeFilter === filter ? projectStyles.filterActive : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
    </motion.section>
  );
}

function StatusDot({ status }: { status: Project["status"] }) {
  const cls =
    status === "Live"
      ? projectStyles.statusLive
      : status === "Beta"
        ? projectStyles.statusBeta
        : projectStyles.statusProgress;

  return (
    <span className={projectStyles.statusWrap}>
      <span className={`${projectStyles.statusDot} ${cls}`} />
      {status}
    </span>
  );
}

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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={projectStyles.card}
      style={{ animationDelay: `${(index % 6) * 0.07}s` }}
    >
      <div className={projectStyles.preview}>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1024px) 44vw, 29vw"
          className={projectStyles.previewImage}
        />
        <div className={projectStyles.previewOverlay} />
      </div>

      <div className={projectStyles.content}>
        <div className={projectStyles.cardBody}>
          <div className={styles.cardHeader}>
            <StatusDot status={project.status} />
            <span className={styles.cardCategory}>{project.category}</span>
          </div>

          <h2 className={projectStyles.cardTitle}>{project.title}</h2>
          <p className={styles.cardDesc}>{project.description}</p>

          <div className={styles.cardTech}>
            {project.technologies.map((tech) => (
              <span key={tech} className={projectStyles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.cardFooter}>
          {project.link ? (
            <Link href={project.link} className={projectStyles.exploreBtn}>
              Explore Project
              <span className={projectStyles.exploreIcon}>
                <ArrowIcon />
              </span>
            </Link>
          ) : (
            <button className={projectStyles.exploreBtn} type="button" disabled>
              Explore Project
              <span className={projectStyles.exploreIcon}>
                <ArrowIcon />
              </span>
            </button>
          )}
        </div>

        <div className={projectStyles.cardTopGlow} />
        <div className={projectStyles.cardEdgeGlow} />
      </div>
    </article>
  );
}

function ProjectsGrid({
  visibleProjects,
  allVisible,
  setAllVisible,
  hasMore,
}: {
  visibleProjects: Project[];
  allVisible: boolean;
  setAllVisible: (value: boolean) => void;
  hasMore: boolean;
}) {
  return (
    <motion.section
      className={styles.gridSection}
      id="projects-grid"
      aria-label="Project portfolio"
      {...fadeUp}
    >
      <div className={projectStyles.grid}>
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {hasMore && (
        <div className={projectStyles.viewMoreWrap}>
          <button
            type="button"
            className={projectStyles.viewMoreBtn}
            onClick={() => setAllVisible(!allVisible)}
          >
            {allVisible ? "Show Less" : "View More Projects"}
            <span
              className={`${projectStyles.viewMoreIcon} ${
                allVisible ? projectStyles.viewMoreIconUp : ""
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
    </motion.section>
  );
}

export default function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState<"All" | Category>("All");
  const [allVisible, setAllVisible] = useState(false);

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
    <main className={styles.page}>
      <div className={styles.bgAtmosphere} aria-hidden="true">
        <div className={styles.gridOverlay} />
        <div className={styles.fogLayer} />
        <div className={styles.starField} />
        <div className={styles.glowOne} />
        <div className={styles.glowTwo} />
      </div>

      <div className={styles.container}>
        <ProjectHero />
        <ProjectFilters
          activeFilter={activeFilter}
          setActiveFilter={(filter) => {
            setActiveFilter(filter);
            setAllVisible(false);
          }}
        />
        <ProjectsGrid
          visibleProjects={visibleProjects}
          allVisible={allVisible}
          setAllVisible={setAllVisible}
          hasMore={hasMore}
        />
        <PageCTA
          label="START A PROJECT"
          heading="Have an idea worth building?"
          description="Let's transform your concept into a scalable, intelligent digital product with premium engineering and design."
          primaryText="Start Your Project"
          primaryHref="/contact"
        />
      </div>
    </main>
  );
}

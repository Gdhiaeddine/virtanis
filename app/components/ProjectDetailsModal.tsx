"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Images, ArrowUpRight } from "lucide-react";
import { getTranslations, Locale } from "../data/translations";
import styles from "./ProjectDetailsModal.module.css";
import { ModalProject } from "./ProjectGalleryModal";

interface ProjectDetailsModalProps {
  project: ModalProject | null;
  locale?: Locale;
  onClose: () => void;
  onOpenGallery?: (project: ModalProject, index?: number) => void;
}

export default function ProjectDetailsModal({
  project,
  locale = "en",
  onClose,
  onOpenGallery,
}: ProjectDetailsModalProps) {
  const t = getTranslations(locale).projects;
  const isFr = locale === "fr";

  // Keyboard navigation & scroll locking
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const statusClass =
    project.status === "Live"
      ? styles.statusLive
      : project.status === "Beta"
        ? styles.statusBeta
        : styles.statusProgress;

  const statusLabel =
    project.status === "Live"
      ? t.statusLabels.live
      : project.status === "Beta"
        ? t.statusLabels.beta
        : t.statusLabels.inProgress;

  const categoryLabel = project.category === "ML" ? (isFr ? "IA / ML" : "AI / ML") : project.category;

  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];
  const imageCount = images.length;

  const handleBannerClick = () => {
    if (onOpenGallery) {
      onOpenGallery(project, 0);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-details-title"
      >
        <motion.div
          className={styles.modalContainer}
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.titleRow}>
                <h2 id="project-details-title" className={styles.projectTitle}>
                  {project.title}
                </h2>
                <span className={styles.categoryBadge}>{categoryLabel}</span>
                <span className={styles.statusWrap}>
                  <span className={`${styles.statusDot} ${statusClass}`} />
                  <span>{statusLabel}</span>
                </span>
              </div>
            </div>

            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
              aria-label={isFr ? "Fermer les détails du projet" : "Close project details"}
            >
              <X size={18} />
            </button>
          </header>

          {/* Body Content */}
          <div className={styles.content}>
            {/* Visual banner preview */}
            <div
              className={styles.previewBanner}
              onClick={handleBannerClick}
              role="button"
              tabIndex={0}
              aria-label={isFr ? `Ouvrir la galerie photo de ${project.title}` : `Open ${project.title} photo gallery`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleBannerClick();
                }
              }}
            >
              <Image
                src={project.image}
                alt={isFr ? `Capture d'écran de ${project.title}` : `${project.title} preview screenshot`}
                fill
                sizes="(max-width: 768px) 94vw, 680px"
                className={styles.bannerImage}
                priority
              />
              <div className={styles.bannerOverlay} />
              <div className={styles.bannerPrompt}>
                <Images size={13} />
                <span>
                  {t.viewGallery} ({imageCount} {imageCount === 1 ? t.photoLabel : t.photosLabel})
                </span>
              </div>
            </div>

            {/* Description Section */}
            <section className={styles.section}>
              <span className={styles.sectionLabel}>{isFr ? "Vue d'ensemble" : "Full Overview"}</span>
              <p className={styles.fullDescription}>{project.description}</p>
            </section>

            {/* Tech Stack Tags */}
            <section className={styles.section}>
              <span className={styles.sectionLabel}>{isFr ? "Technologies & Stack" : "Technologies & Stack"}</span>
              <div className={styles.techGrid}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techPill}>
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <footer className={styles.footer}>
            <div className={styles.footerActions}>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.launchButton}
                >
                  <span>{t.launchPlatform}</span>
                  <ArrowUpRight size={15} />
                </Link>
              )}

              {onOpenGallery && (
                <button
                  type="button"
                  className={styles.galleryButton}
                  onClick={() => onOpenGallery(project, 0)}
                >
                  <Images size={14} />
                  <span>{isFr ? "Voir les photos" : "View Photos"}</span>
                </button>
              )}
            </div>

            <button
              type="button"
              className={styles.dismissButton}
              onClick={onClose}
            >
              {isFr ? "Fermer" : "Close"}
            </button>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

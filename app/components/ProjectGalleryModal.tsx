"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ExternalLink, Images } from "lucide-react";
import styles from "./ProjectGalleryModal.module.css";

export interface ModalProject {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: "Live" | "In Progress" | "Beta";
  link?: string;
  image: string;
  images?: string[];
}

interface ProjectGalleryModalProps {
  project: ModalProject | null;
  activeImageIndex: number;
  onClose: () => void;
  onSelectImage: (index: number) => void;
}

export default function ProjectGalleryModal({
  project,
  activeImageIndex,
  onClose,
  onSelectImage,
}: ProjectGalleryModalProps) {
  const images = project?.images && project.images.length > 0 ? project.images : project ? [project.image] : [];
  const total = images.length;
  const currentImage = images[activeImageIndex] || images[0];

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    onSelectImage((activeImageIndex - 1 + total) % total);
  }, [activeImageIndex, total, onSelectImage]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    onSelectImage((activeImageIndex + 1) % total);
  }, [activeImageIndex, total, onSelectImage]);

  // Keyboard navigation & scroll locking
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handlePrev, handleNext, onClose]);

  if (!project) return null;

  const statusClass =
    project.status === "Live"
      ? styles.statusLive
      : project.status === "Beta"
        ? styles.statusBeta
        : styles.statusProgress;

  const statusLabel =
    project.status === "Live"
      ? "Live Deployment"
      : project.status === "Beta"
        ? "Beta Preview"
        : "In Development";

  return (
    <AnimatePresence>
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} Gallery`}
      >
        <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
          {/* Top Bar */}
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.titleRow}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <span className={styles.categoryBadge}>{project.category}</span>
                <span className={styles.statusWrap}>
                  <span className={`${styles.statusDot} ${statusClass}`} />
                  <span>{statusLabel}</span>
                </span>
              </div>
            </div>

            <div className={styles.headerRight}>
              <div className={styles.counterBadge}>
                <Images size={13} />
                <span>
                  {activeImageIndex + 1} / {total}
                </span>
              </div>

              <button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close gallery"
              >
                <X size={18} />
              </button>
            </div>
          </header>

          {/* Main Visual Stage */}
          <div className={styles.stage}>
            {total > 1 && (
              <button
                type="button"
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <div className={styles.imageViewer}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  className={styles.imageWrapper}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={currentImage}
                    alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                    fill
                    sizes="(max-width: 1400px) 94vw, 1300px"
                    className={styles.mainImage}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {total > 1 && (
              <button
                type="button"
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {/* Bottom Bar: Thumbnails & Meta */}
          <footer className={styles.footer}>
            {total > 1 && (
              <div className={styles.thumbnailTrack} role="tablist" aria-label="Gallery thumbnails">
                {images.map((img, idx) => {
                  const isActive = idx === activeImageIndex;
                  return (
                    <button
                      key={img + idx}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`${styles.thumbnailBtn} ${isActive ? styles.thumbnailActive : ""}`}
                      onClick={() => onSelectImage(idx)}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} thumbnail ${idx + 1}`}
                        fill
                        sizes="90px"
                        className={styles.thumbImage}
                      />
                    </button>
                  );
                })}
              </div>
            )}

            <div className={styles.footerActions}>
              <div className={styles.techTags}>
                {project.technologies.map((t) => (
                  <span key={t} className={styles.techTag}>
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.launchBtn}
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink size={14} />
                </Link>
              )}
            </div>
          </footer>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

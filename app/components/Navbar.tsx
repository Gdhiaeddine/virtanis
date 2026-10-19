"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { getTranslations, Locale } from "../data/translations";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "skills", key: "skills" as const },
  { id: "projects", key: "projects" as const },
  { id: "services", key: "services" as const },
  { id: "contact", key: "contact" as const },
];

function LogoMark() {
  return (
    <span className={styles.logoIcon} aria-hidden="true">
      <Image src="/logo.png" alt="" width={34} height={28} priority />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolledSection, setScrolledSection] = useState("home");

  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");
  const locale: Locale = isFr ? "fr" : "en";
  const t = getTranslations(locale).navbar;

  const routeSection =
    pathname === "/about" || pathname === "/fr/about"
      ? "about"
      : pathname === "/projects" || pathname === "/fr/projects"
        ? "projects"
        : pathname.startsWith("/services") || pathname.startsWith("/fr/services")
          ? "services"
          : pathname === "/skills" || pathname === "/fr/skills"
            ? "skills"
            : pathname === "/contact" || pathname === "/fr/contact"
              ? "contact"
              : null;

  const activeSection = routeSection ?? scrolledSection;

  useEffect(() => {
    if (routeSection) {
      return;
    }

    const onScroll = () => {
      const sections = NAV_ITEMS.filter(
        (item) =>
          item.id !== "about" &&
          item.id !== "services" &&
          item.id !== "projects" &&
          item.id !== "skills" &&
          item.id !== "contact"
      ).map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Number.NEGATIVE_INFINITY };
        return { id: item.id, top: el.getBoundingClientRect().top };
      });

      const current = sections.reduce(
        (closest, section) =>
          section.top <= 120 && section.top > closest.top ? section : closest,
        { id: "home", top: Number.NEGATIVE_INFINITY }
      );

      setScrolledSection(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, routeSection]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const hrefFor = (id: string) => {
    if (id === "home") return isFr ? "/fr" : "/";
    if (id === "about") return isFr ? "/fr/about" : "/about";
    if (id === "services") return isFr ? "/fr/services" : "/services";
    if (id === "projects") return isFr ? "/fr/projects" : "/projects";
    if (id === "skills") return isFr ? "/fr/skills" : "/skills";
    if (id === "contact") return isFr ? "/fr/contact" : "/contact";
    return isFr ? `/fr#${id}` : `/#${id}`;
  };

  const closeMenu = () => setMobileOpen(false);

  // Dynamic language switcher target based on current path
  const isAboutPage = pathname === "/about" || pathname === "/fr/about";
  const isSkillsPage = pathname === "/skills" || pathname === "/fr/skills";
  const isProjectsPage = pathname === "/projects" || pathname === "/fr/projects";
  const isServicesPage = pathname === "/services" || pathname === "/fr/services";
  const isContactPage = pathname === "/contact" || pathname === "/fr/contact";
  const isServiceDetailPage =
    (pathname.startsWith("/services/") && pathname !== "/services") ||
    (pathname.startsWith("/fr/services/") && pathname !== "/fr/services");
  const serviceDetailSlug = isServiceDetailPage
    ? pathname.replace(/^\/(?:fr\/)?services\//, "")
    : "";

  let enHref = "/";
  let frHref = "/fr";

  if (isAboutPage) {
    enHref = "/about";
    frHref = "/fr/about";
  } else if (isSkillsPage) {
    enHref = "/skills";
    frHref = "/fr/skills";
  } else if (isProjectsPage) {
    enHref = "/projects";
    frHref = "/fr/projects";
  } else if (isServiceDetailPage) {
    enHref = `/services/${serviceDetailSlug}`;
    frHref = `/fr/services/${serviceDetailSlug}`;
  } else if (isServicesPage) {
    enHref = "/services";
    frHref = "/fr/services";
  } else if (isContactPage) {
    enHref = "/contact";
    frHref = "/fr/contact";
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href={isFr ? "/fr" : "/"} className={styles.logoLink} onClick={closeMenu}>
            <LogoMark />
            <span className={styles.logoText}>VIRTANIS</span>
          </Link>

          <div className={styles.center}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={hrefFor(item.id)}
                className={`${styles.navLink} ${
                  activeSection === item.id ? styles.navLinkActive : ""
                }`}
              >
                {t.items[item.key]}
              </Link>
            ))}
          </div>

          <div className={styles.right}>
            <div className={styles.langSwitcher} role="group" aria-label={t.switchAria}>
              <Link
                href={enHref}
                className={`${styles.langBtn} ${!isFr ? styles.langBtnActive : ""}`}
                aria-label="English"
                aria-current={!isFr ? "page" : undefined}
              >
                EN
              </Link>
              <Link
                href={frHref}
                className={`${styles.langBtn} ${isFr ? styles.langBtnActive : ""}`}
                aria-label="Français"
                aria-current={isFr ? "page" : undefined}
              >
                FR
              </Link>
            </div>

            <Link href={isFr ? "/fr/contact" : "/contact"} className={styles.ctaButton}>
              {t.cta} <ArrowRight size={14} />
            </Link>
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`${styles.overlay} ${mobileOpen ? styles.overlayOpen : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={hrefFor(item.id)}
            className={styles.overlayLink}
            onClick={closeMenu}
          >
            {t.items[item.key]}
          </Link>
        ))}

        <div className={styles.mobileLangSwitcher} role="group" aria-label={t.switchAria}>
          <Link
            href={enHref}
            className={`${styles.mobileLangBtn} ${!isFr ? styles.mobileLangBtnActive : ""}`}
            onClick={closeMenu}
          >
            EN
          </Link>
          <Link
            href={frHref}
            className={`${styles.mobileLangBtn} ${isFr ? styles.mobileLangBtnActive : ""}`}
            onClick={closeMenu}
          >
            FR
          </Link>
        </div>
      </div>
    </>
  );
}

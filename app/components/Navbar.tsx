"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getTranslations, Locale } from "../data/translations";

const NAV_ITEMS = [
  { id: "home", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "skills", key: "skills" as const },
  { id: "projects", key: "projects" as const },
  { id: "services", key: "services" as const },
  { id: "contact", key: "contact" as const },
];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.76-.79 1.76-1.76s-.79-1.76-1.76-1.76-1.76.79-1.76 1.76.79 1.76 1.76 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  // Suppress header hiding while a nav-link smooth scroll is in flight
  const navHideUntil = useRef(0);
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

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setSticky(y >= 20);

    // Header hide/show on scroll direction
    const suppressHide = Date.now() < navHideUntil.current;
    if (!suppressHide) {
      if (y <= 120) {
        setHeaderHidden(false);
      } else if (y > lastScrollY.current + 1) {
        setHeaderHidden(true);
      } else if (y < lastScrollY.current - 1) {
        setHeaderHidden(false);
      }
    }
    lastScrollY.current = y;

    if (routeSection) return;

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
  }, [routeSection]);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024) {
      setMobileOpen(false);
    }
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const hrefFor = (id: string) => {
    if (id === "home") return isFr ? "/fr" : "/";
    if (id === "about") return isFr ? "/fr/about" : "/about";
    if (id === "services") return isFr ? "/fr/services" : "/services";
    if (id === "projects") return isFr ? "/fr/projects" : "/projects";
    if (id === "skills") return isFr ? "/fr/skills" : "/skills";
    if (id === "contact") return isFr ? "/fr/contact" : "/contact";
    return isFr ? `/fr#${id}` : `/#${id}`;
  };

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

  const closeMenu = () => setMobileOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      animate={headerHidden ? "hidden" : "visible"}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: "easeInOut" },
        },
        hidden: {
          opacity: 0,
          y: "-120%",
          transition: { duration: 0.45, ease: "easeInOut" },
        },
      }}
      className="fixed top-0 left-0 right-0 z-50 pt-8 md:pt-10 flex items-center justify-center w-full pointer-events-none"
    >
      <div
        className="w-[92%] max-w-[1460px] flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-300 pointer-events-auto bg-transparent border-none shadow-none"
      >
        {/* Brand / Logo */}
        <Link
          href={isFr ? "/fr" : "/"}
          className="flex items-center gap-3 group pl-2"
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Virtanis Logo"
            width={32}
            height={26}
            priority
            className="object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
          />
          <span className="text-base font-bold tracking-wider text-white drop-shadow-sm">
            VIRTANIS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu className="bg-black/60 border border-white/20 p-2.5 px-4 rounded-full backdrop-blur-md">
            <NavigationMenuList className="flex gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={hrefFor(item.id)}
                        onClick={() => {
                          navHideUntil.current = Date.now() + 2000;
                        }}
                        className={cn(
                          "inline-flex items-center justify-center px-6 py-2.5 text-base rounded-full transition-all duration-300 tracking-wide leading-none select-none",
                          isActive
                            ? "bg-white text-black shadow-lg font-bold"
                            : "text-zinc-100 hover:text-white font-medium hover:bg-white/15"
                        )}
                      >
                        {t.items[item.key]}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Actions: Lang Switcher + Hero-01 Collaborate Button + Mobile Trigger */}
        <div className="flex items-center gap-3 pr-1">
          {/* Language Switcher */}
          <div
            className="hidden sm:flex items-center bg-black/60 border border-white/20 rounded-full p-2 text-sm font-bold backdrop-blur-md gap-1.5"
            role="group"
            aria-label={t.switchAria}
          >
            <Link
              href={enHref}
              className={cn(
                "inline-flex items-center justify-center px-3 py-1.5 text-sm rounded-full transition-colors leading-none",
                !isFr
                  ? "bg-white text-black shadow-xs font-bold"
                  : "text-zinc-200 hover:text-white font-medium"
              )}
              aria-current={!isFr ? "page" : undefined}
            >
              EN
            </Link>
            <Link
              href={frHref}
              className={cn(
                "inline-flex items-center justify-center px-3 py-1.5 text-sm rounded-full transition-colors leading-none",
                isFr
                  ? "bg-white text-black shadow-xs font-bold"
                  : "text-zinc-200 hover:text-white font-medium"
              )}
              aria-current={isFr ? "page" : undefined}
            >
              FR
            </Link>
          </div>

          {/* Desktop Collaborate Button (Hero-01 style) */}
          <Button
            asChild
            className="hidden md:inline-flex relative text-base font-semibold rounded-full h-11 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-white text-black hover:bg-zinc-100 shadow-md"
          >
            <Link href={isFr ? "/fr/contact" : "/contact"}>
              <span className="relative z-10 transition-all duration-500 font-semibold tracking-tight">
                {t.cta || "Let's Work Together"}
              </span>
              <span className="absolute right-1 w-9 h-9 bg-black text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </Button>

          {/* Mobile Sheet Trigger */}
          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Toggle navigation menu"
                  className="rounded-full border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <Menu width={20} height={20} />
                  <span className="sr-only">Menu</span>
                </button>
              </SheetTrigger>

              <SheetContent
                showCloseButton={false}
                side="right"
                className="w-full sm:w-96 p-0 border-l border-white/10 bg-[#070709] text-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <Link
                      href={isFr ? "/fr" : "/"}
                      className="flex items-center gap-2.5"
                      onClick={closeMenu}
                    >
                      <Image
                        src="/logo.png"
                        alt="Virtanis"
                        width={28}
                        height={24}
                        priority
                      />
                      <span className="font-bold tracking-wider text-sm text-white">
                        VIRTANIS
                      </span>
                    </Link>
                    <SheetClose asChild>
                      <button
                        type="button"
                        aria-label="Close navigation menu"
                        className="rounded-full border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10 transition cursor-pointer"
                      >
                        <X width={16} height={16} />
                      </button>
                    </SheetClose>
                  </div>

                  <div className="flex flex-col gap-8 px-6 pt-8">
                    <SheetTitle className="sr-only">Menu</SheetTitle>

                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col gap-4">
                      {NAV_ITEMS.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                          <Link
                            key={item.id}
                            href={hrefFor(item.id)}
                            onClick={closeMenu}
                            className={cn(
                              "group/nav flex items-center text-2xl font-bold tracking-tight transition-all py-2",
                              isActive
                                ? "text-white"
                                : "text-zinc-200 hover:text-white hover:translate-x-2"
                            )}
                          >
                            <div
                              className={cn(
                                "h-0.5 bg-white transition-all duration-300 overflow-hidden",
                                isActive
                                  ? "w-4 mr-2 opacity-100"
                                  : "w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100"
                              )}
                            />
                            {t.items[item.key]}
                          </Link>
                        );
                      })}
                    </div>

                    {/* Mobile Language Switcher */}
                    <div className="flex items-center gap-3 pt-2">
                      <span className="text-xs text-zinc-300 uppercase tracking-wider font-semibold">
                        Language:
                      </span>
                      <div className="flex bg-black/50 border border-white/20 rounded-full p-1.5 text-sm font-bold">
                        <Link
                          href={enHref}
                          onClick={closeMenu}
                          className={cn(
                            "px-4 py-1.5 rounded-full transition-colors font-bold",
                            !isFr
                              ? "bg-white text-black"
                              : "text-zinc-200 hover:text-white"
                          )}
                        >
                          EN
                        </Link>
                        <Link
                          href={frHref}
                          onClick={closeMenu}
                          className={cn(
                            "px-4 py-1.5 rounded-full transition-colors font-bold",
                            isFr
                              ? "bg-white text-black"
                              : "text-zinc-200 hover:text-white"
                          )}
                        >
                          FR
                        </Link>
                      </div>
                    </div>

                    {/* Mobile Collaborate Button */}
                    <div className="pt-2">
                      <Button
                        asChild
                        className="relative text-sm font-semibold rounded-full h-11 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-full justify-between overflow-hidden cursor-pointer bg-white text-black hover:bg-zinc-100 shadow-md"
                      >
                        <Link href={isFr ? "/fr/contact" : "/contact"} onClick={closeMenu}>
                          <span className="relative z-10 font-semibold tracking-tight">
                            {t.cta || "Let's Work Together"}
                          </span>
                          <span className="absolute right-1 w-9 h-9 bg-black text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-40px)] group-hover:rotate-45">
                            <ArrowUpRight size={18} />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Mobile Drawer Footer with Socials */}
                <div className="p-6 border-t border-white/10 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    {[
                      {
                        icon: LinkedInIcon,
                        href: "https://www.linkedin.com/in/guettafdhiaeddine",
                        label: "LinkedIn",
                      },
                      {
                        icon: InstagramIcon,
                        href: "https://www.instagram.com/dhia_eddine_guettaf",
                        label: "Instagram",
                      },
                      {
                        icon: TwitterIcon,
                        href: "https://twitter.com",
                        label: "Twitter",
                      },
                      {
                        icon: DribbbleIcon,
                        href: "https://www.behance.net/f9d10cef",
                        label: "Behance / Dribbble",
                      },
                    ].map(({ icon: IconComponent, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10 transition"
                      >
                        <IconComponent />
                      </a>
                    ))}
                  </div>
                  <p className="text-xs text-zinc-500">
                    &copy; {new Date().getFullYear()} Virtanis. All rights reserved.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

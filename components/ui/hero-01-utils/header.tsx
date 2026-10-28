"use client";

import { useState, useEffect, useCallback } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Icon } from "@iconify/react";
import Logo from "@/assets/logo/logo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export type NavigationSection = {
  title: string;
  href: string;
  isActive?: boolean;
};

export type HeaderProps = {
  navigationData: NavigationSection[];
  className?: string;
};

export const CollaborateButton = ({ className }: { className?: string }) => (
  <Button className={cn("relative text-sm font-medium rounded-full h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden cursor-pointer", className)}>
    <span className="relative z-10 transition-all duration-500">
      Let&apos;s Collaborate
    </span>
    <span className="absolute right-1 w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] group-hover:rotate-45">
      <ArrowUpRight size={16} />
    </span>
  </Button>
);

export const Header = ({ navigationData, className }: HeaderProps) => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 px-4 pt-8 md:pt-10 flex items-center justify-center w-full pointer-events-none",
        className,
      )}
    >
      <div
        className="w-[94%] sm:w-[88%] lg:w-[80%] max-w-[1380px] flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-300 pointer-events-auto bg-transparent border-none shadow-none"
      >
        {/* Logo */}
        <div>
          <a href="#" aria-label="Home">
            <Logo className="gap-3" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div>
          <NavigationMenu className="max-lg:hidden bg-black/60 border border-white/20 p-2.5 px-4 rounded-full backdrop-blur-md">
            <NavigationMenuList className="flex gap-2">
              {navigationData.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuLink
                    href={navItem.href}
                    className={cn(
                      "inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-full text-zinc-100 hover:text-white hover:bg-white/15 outline outline-transparent hover:outline-border hover:shadow-xs transition tracking-wide leading-none select-none",
                      navItem.isActive ? "bg-white text-black font-bold shadow-md" : ""
                    )}
                  >
                    {navItem.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex gap-4">
          <CollaborateButton className="hidden lg:flex" />

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger id="mobile-menu-trigger" asChild>
                <button
                  type="button"
                  aria-label="Toggle menu"
                  className="rounded-full border border-border p-2 block cursor-pointer hover:bg-muted transition"
                >
                  <Menu width={20} height={20} />
                  <span className="sr-only">Menu</span>
                </button>
              </SheetTrigger>

              <SheetContent
                showCloseButton={false}
                side="right"
                className="w-full sm:w-96 p-0 border-l-0"
              >
                <div className="flex items-center justify-between p-6">
                  <a href="#">
                    <Logo className="gap-2" />
                  </a>
                  <SheetClose id="mobile-menu-close" asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="rounded-full border border-border p-2.5 block cursor-pointer hover:bg-muted transition"
                    >
                      <X width={16} height={16} />
                    </button>
                  </SheetClose>
                </div>

                <div className="flex flex-col gap-12 px-6 pb-6 overflow-y-auto">
                  <div className="flex flex-col gap-8">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <NavigationMenu
                      orientation="vertical"
                      className="items-start flex-none max-w-full w-full"
                    >
                      <NavigationMenuList className="flex flex-col items-start gap-3 w-full">
                        {navigationData.map((item) => (
                          <NavigationMenuItem key={item.title} className="w-full">
                            <NavigationMenuLink
                              href={item.href}
                              className={cn(
                                "group/nav flex items-center text-2xl font-semibold tracking-tight transition-all p-0 hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent",
                                item.isActive
                                  ? "text-primary"
                                  : "text-muted-foreground hover:text-foreground hover:translate-x-2",
                              )}
                            >
                              <div
                                className={cn(
                                  "h-0.5 bg-primary transition-all duration-300 overflow-hidden",
                                  item.isActive
                                    ? "w-4 mr-2 opacity-100"
                                    : "w-0 opacity-0 group-hover/nav:w-4 group-hover/nav:mr-2 group-hover/nav:opacity-100",
                                )}
                              />
                              {item.title}
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>

                    <div className="w-fit">
                      <CollaborateButton />
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-4">
                    <div className="flex gap-3">
                      {[
                        "lucide:dribbble",
                        "lucide:instagram",
                        "lucide:twitter",
                        "lucide:linkedin",
                      ].map((icon) => (
                        <a
                          key={icon}
                          href="#"
                          aria-label={icon.replace("lucide:", "")}
                          className="flex items-center justify-center rounded-full outline outline-border hover:bg-muted transition p-3 shadow-xs"
                        >
                          <Icon icon={icon} width={16} height={16} />
                        </a>
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground">
                      &copy; 2026 Shadcn Space
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

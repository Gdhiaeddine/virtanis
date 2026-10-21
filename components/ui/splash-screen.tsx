"use client"

import { useEffect, useLayoutEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, type Variants } from "framer-motion"
import { ShaderAnimation } from "@/components/ui/shader-animation"

// How long the splash stays fully visible before fading out.
const SPLASH_DURATION = 2400
const SPLASH_KEY = "virtanis-splash"

// useLayoutEffect prevents a flash of the splash on repeat visits (client-only),
// while the useEffect fallback avoids the server-side warning.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

const letterReveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: "easeOut" },
  },
}

const lettersContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.45 },
  },
}

export function SplashScreen() {
  const [visible, setVisible] = useState(true)

  useIsoLayoutEffect(() => {
    // Play once per browser session so client-side navigations back to the
    // homepage don't replay the intro every time.
    if (sessionStorage.getItem(SPLASH_KEY)) {
      setVisible(false)
      return
    }

    sessionStorage.setItem(SPLASH_KEY, "1")

    // Keep the page from scrolling underneath the splash overlay. Lock <html>
    // rather than <body> so Navbar's mobile-menu effect (which resets
    // document.body.style.overflow) can't clobber the lock.
    const rootEl = document.documentElement
    const previousOverflow = rootEl.style.overflow
    const unlock = () => {
      // Only restore our own lock (avoid clobbering any newer one).
      if (rootEl.style.overflow === "hidden") {
        rootEl.style.overflow = previousOverflow
      }
    }
    rootEl.style.overflow = "hidden"

    // Release the scroll lock when the splash ends — not on unmount, which
    // would never fire (the component stays mounted for the page's lifetime)
    // and left scrolling permanently blocked on first visit.
    const timer = setTimeout(() => {
      unlock()
      setVisible(false)
    }, SPLASH_DURATION)

    return () => {
      clearTimeout(timer)
      unlock()
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="virtanis-splash"
          className="fixed inset-0 z-[2000] bg-black"
          // The overlay must be fully opaque from the very first paint (SSR),
          // so there is no entrance fade on the container — only the exit.
          exit={{ opacity: 0, scale: 1.05, filter: "blur(6px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          aria-label="Virtanis intro"
        >
          {/* Animated shader background */}
          <ShaderAnimation />

          {/* Branding: V logo, then the full Virtanis name */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center"
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.15 }}
            >
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="drop-shadow-[0_0_35px_rgba(77,163,255,0.45)]"
              >
                <Image
                  src="/logo.png"
                  alt="Virtanis logo"
                  width={356}
                  height={300}
                  priority
                  className="h-auto w-[120px]"
                />
              </motion.div>
            </motion.div>

            <motion.h1
              className="mt-8 flex text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl md:[text-shadow:0_0_40px_rgba(77,163,255,0.35)]"
              initial="hidden"
              animate="visible"
              variants={lettersContainer}
              aria-label="Virtanis"
            >
              {"Virtanis".split("").map((letter, index) => (
                <motion.span key={index} variants={letterReveal} className="inline-block">
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              className="mt-4 h-px w-40 origin-center bg-white/70"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

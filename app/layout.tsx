import type { Metadata } from "next";
import { Space_Grotesk, Inter, Cormorant_Garamond } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-accent",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://virtanis.com"),
  title: {
    default: "Virtanis | Next-Generation Digital Agency & AI Engineering",
    template: "%s | Virtanis",
  },
  description:
    "Virtanis is a premier digital agency specializing in full-spectrum digital solutions: AI & Machine Learning, Enterprise Web Applications, Mobile Ecosystems, UI/UX Design, 3D Interactive Web, and Cloud Infrastructure.",
  keywords: [
    "Digital Agency",
    "AI Solutions",
    "Machine Learning Engineering",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "3D Web Experiences",
    "Cloud DevOps",
    "Next.js Agency",
    "Flutter Development",
    "Virtanis",
  ],
  authors: [{ name: "Virtanis Team" }],
  creator: "Virtanis",
  publisher: "Virtanis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://virtanis.com",
    siteName: "Virtanis",
    title: "Virtanis | Next-Generation Digital Agency & AI Engineering",
    description:
      "Virtanis architects scalable, intelligent digital solutions engineered with precision, high performance, and Apple/SpaceX-grade craftsmanship.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Virtanis — Next-Generation Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtanis | Next-Generation Digital Agency",
    description:
      "Architecting intelligent digital systems, enterprise web platforms, and mobile apps for visionary companies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://virtanis.com/#organization",
      name: "Virtanis",
      url: "https://virtanis.com",
      logo: "https://virtanis.com/logo.png",
      sameAs: [
        "https://www.linkedin.com/in/guettafdhiaeddine",
        "https://www.instagram.com/dhia_eddine_guettaf",
        "https://www.behance.net/f9d10cef",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+213 560 84 83 22",
        contactType: "Customer Support",
        email: "guettafdhiaeddine@gmail.com",
        availableLanguage: ["English", "French", "Arabic"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://virtanis.com/#website",
      url: "https://virtanis.com",
      name: "Virtanis",
      publisher: {
        "@id": "https://virtanis.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://virtanis.com/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://virtanis.com/#service",
      name: "Virtanis Digital Agency",
      url: "https://virtanis.com",
      priceRange: "$$$$",
      areaServed: "Worldwide",
      description:
        "Full-spectrum digital agency providing AI & Machine Learning, Enterprise Web Applications, Mobile App Development, UI/UX Design, and Cloud DevOps.",
      provider: {
        "@id": "https://virtanis.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

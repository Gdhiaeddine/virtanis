export type Locale = "en" | "fr";

export interface NavItem {
  id: string;
  label: string;
  path: string;
  hash: string;
}

export interface NavbarTranslation {
  items: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    services: string;
    contact: string;
  };
  cta: string;
  switchAria: string;
}

export interface HeroTranslation {
  badge: string;
  titlePrefix: string;
  titleAccent: string;
  titleSuffix: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  scrollIndicator: string;
}

export interface SkillsTranslation {
  sectionLabel: string;
  mainTitle: string;
  description: string;
  exploreSolution: string;
  solutions: Record<string, { title: string; description: string }>;
}

export interface ProjectsTranslation {
  sectionLabel: string;
  mainTitle: string;
  description: string;
  filterLabels: {
    All: string;
    ML: string;
    Web: string;
    App: string;
    Design: string;
  };
  statusLabels: {
    live: string;
    beta: string;
    inProgress: string;
  };
  photoLabel: string;
  photosLabel: string;
  viewGallery: string;
  showMore: string;
  launchPlatform: string;
  internalSystem: string;
  viewMore: string;
  showLess: string;
  items: Record<number, { title?: string; description?: string }>;
}

export interface AboutCredential {
  label: string;
  value: string;
}

export interface AboutTranslation {
  sectionLabel: string;
  mainTitle: string;
  description: string;
  ctaButton: string;
  credentials: {
    focus: AboutCredential;
    engineering: AboutCredential;
    delivery: AboutCredential;
    availability: AboutCredential;
  };
}

export interface ContactTranslation {
  sectionLabel: string;
  mainTitle: string;
  description: string;
  introText: string;
  cardLabels: {
    email: string;
    phone: string;
    location: string;
    availability: string;
  };
  availabilityValue: string;
  locationValue: string;
  socialLabel: string;
  formTitle: string;
  formSubtitle: string;
  labels: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  button: {
    default: string;
    sending: string;
    success: string;
  };
  status: {
    sending: string;
    success: string;
    error: string;
  };
}

export interface FooterTranslation {
  rightsReserved: string;
  items: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    services: string;
    contact: string;
  };
}

export interface TranslationDictionary {
  navbar: NavbarTranslation;
  hero: HeroTranslation;
  skills: SkillsTranslation;
  projects: ProjectsTranslation;
  about: AboutTranslation;
  contact: ContactTranslation;
  footer: FooterTranslation;
}

export const translations: Record<Locale, TranslationDictionary> = {
  en: {
    navbar: {
      items: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        services: "Services",
        contact: "Contact",
      },
      cta: "Let's Work Together",
      switchAria: "Change language",
    },
    hero: {
      badge: "Digital Agency • AI & Engineering",
      titlePrefix: "Architecting ",
      titleAccent: "Intelligent Digital",
      titleSuffix: " Systems & Modern Platforms",
      description:
        "Virtanis is an elite digital engineering studio. We architect high-performance web ecosystems, scalable mobile platforms, intelligent AI systems, and 3D digital experiences for industry leaders and visionary founders worldwide.",
      primaryCta: "Start a Project",
      secondaryCta: "Explore Solutions",
      scrollIndicator: "SCROLL TO EXPLORE",
    },
    skills: {
      sectionLabel: "DIGITAL CAPABILITIES",
      mainTitle: "Full-Spectrum Digital Engineering Solutions",
      description:
        "Virtanis engineers end-to-end digital solutions that power industry-leading businesses. From intelligent AI systems and high-throughput web applications to native mobile platforms, spatial UI/UX design, and cloud infrastructure — we build for performance, scale, and prestige.",
      exploreSolution: "Explore Solution",
      solutions: {
        "ai-ml": {
          title: "AI & Machine Learning Systems",
          description:
            "Custom machine learning models, predictive intelligence, intelligent automation pipelines, and enterprise LLM integration built for scale.",
        },
        "web-development": {
          title: "Enterprise Web Applications",
          description:
            "Modern, ultra-fast, responsive web applications and SaaS platforms engineered with Next.js, robust APIs, and conversion-optimized architectures.",
        },
        "mobile-development": {
          title: "Cross-Platform Mobile Apps",
          description:
            "Native-feel iOS and Android applications developed with Flutter, real-time backend synchronization, secure authentication, and sleek UX.",
        },
        "ui-ux": {
          title: "UI/UX & Spatial Product Design",
          description:
            "Design systems, interactive prototypes, user journeys, and high-conversion interfaces with Apple-grade minimalism and precision.",
        },
        "three-d-interactive": {
          title: "3D & Immersive Web Experiences",
          description:
            "Interactive 3D scenes, WebGL shaders, Three.js product visualizers, and sensory digital environments that make brands unforgettable.",
        },
        "cloud-devops": {
          title: "Cloud Infrastructure & DevOps",
          description:
            "Production-ready CI/CD pipelines, containerization, high-availability cloud hosting, and enterprise security monitoring.",
        },
      },
    },
    projects: {
      sectionLabel: "SELECTED PROJECTS",
      mainTitle: "Building The Future Through Intelligent Digital Products",
      description:
        "A curated portfolio of intelligent digital products, scalable systems and AI solutions. Every project is engineered with precision — blending advanced architecture, immersive experiences and modern development to drive meaningful digital transformation.",
      filterLabels: {
        All: "All Deployments",
        ML: "AI & Machine Learning",
        Web: "Web Platforms",
        App: "Mobile Systems",
        Design: "Spatial & UI/UX",
      },
      statusLabels: {
        live: "Live Deployment",
        beta: "Beta Preview",
        inProgress: "In Development",
      },
      photoLabel: "Photo",
      photosLabel: "Photos",
      viewGallery: "View Gallery",
      showMore: "... show more",
      launchPlatform: "Launch Live Platform",
      internalSystem: "Internal Enterprise System",
      viewMore: "View More Projects",
      showLess: "Show Less",
      items: {
        10: {
          title: "STI Corporate Website",
          description:
            "STI corporate website showcasing Ooredoo recharge credit, prepaid SIM cards, wholesale solutions, and partner services across Algeria. Built with Next.js and Tailwind CSS, it delivers a modern, fast, and fully responsive experience with a premium telecom design and intuitive navigation.",
        },
        7: {
          title: "Hotel Management System",
          description:
            "A comprehensive hotel management platform for handling reservations, room allocation, guest information, billing, and daily hotel operations efficiently.",
        },
        9: {
          title: "KAZELEC Corporate Website",
          description:
            "KAZELEC corporate website showcasing prefabricated transformer substations, electrical equipment, services, and completed projects. Built with Next.js and Tailwind CSS, it delivers a modern, fast, and fully responsive experience with a premium industrial design and intuitive navigation.",
        },
        2: {
          title: "Golden Hills Hotel Website",
          description:
            "Golden Hills Hotel presentation website showcasing its rooms, services, and relaxation spaces. Built with Next.js and styled using Tailwind CSS, it delivers a modern, fast, and fully responsive interface with smooth navigation and an immersive visual experience.",
        },
        4: {
          title: "House Rent Predictor Germany",
          description:
            "Machine Learning application that predicts rental prices in Germany based on real estate features such as location, size, and number of rooms. The goal is to provide fast and accurate housing price estimation using an AI model.",
        },
        5: {
          title: "Customer Churn Prediction System",
          description:
            "An AI-powered customer churn prediction system that analyzes user behavior and predicts the likelihood of customer attrition, enabling proactive retention actions.",
        },
        6: {
          title: "Movie Recommendation System",
          description:
            "A machine learning-powered recommendation system that suggests movies based on user preferences, genres, ratings, and similarity analysis to enhance content discovery.",
        },
        8: {
          title: "HOCO Algeria — Premium Ecommerce Website",
          description:
            "A modern ecommerce website for HOCO Algeria, built to showcase and sell premium phone accessories with a clean responsive design.",
        },
        0: {
          title: "Website Sodimfel",
          description:
            "Industrial electrical solutions platform showcasing transformers, substations, power distribution systems, and engineering services through a modern enterprise-grade web experience.",
        },
        1: {
          title: "E-commerce Website – Groupe MTFC",
          description:
            "E-commerce website for Groupe MTFC, specialized in selling home appliances and household items. Developed with React and Laravel, providing a smooth user experience and efficient product and order management.",
        },
        3: {
          title: "APL Tech — Futuristic Gaming PC Store Website",
          description:
            "A modern and immersive e-commerce website designed for gamers. APL Tech offers a futuristic experience with a sleek dark and purple aesthetic, allowing users to explore, customize, and build their own gaming PCs.",
        },
      },
    },
    about: {
      sectionLabel: "THE VIRTANIS STANDARD",
      mainTitle: "Architecting Tomorrow's High-Value Digital Infrastructure",
      description:
        "Virtanis is an elite digital engineering studio combining computational intelligence, architectural rigor, and world-class product design. We partner with fast-growing startups and global enterprises to design, build, and deploy digital platforms that redefine industries.",
      ctaButton: "Explore Agency",
      credentials: {
        focus: { label: "Focus", value: "Enterprise & Scale" },
        engineering: { label: "Engineering", value: "AI-Native & Zero-Latency" },
        delivery: { label: "Delivery", value: "Worldwide" },
        availability: { label: "Availability", value: "Available to Work" },
      },
    },
    contact: {
      sectionLabel: "CONTACT",
      mainTitle: "Let's Create Intelligent Digital Experiences Together",
      description:
        "Whether you're a visionary startup, an enterprise seeking digital transformation, or an innovator with a bold idea — we partner with forward-thinking teams to architect intelligent systems, engineer scalable platforms, and deliver experiences that redefine industries.",
      introText:
        "Open to innovative collaborations, intelligent software solutions, and futuristic digital projects. Let's engineer something extraordinary.",
      cardLabels: {
        email: "EMAIL",
        phone: "PHONE",
        location: "LOCATION",
        availability: "AVAILABILITY",
      },
      availabilityValue: "Available to Work",
      locationValue: "Algeria & Worldwide",
      socialLabel: "Connect",
      formTitle: "Start a Project",
      formSubtitle: "Tell us about your vision and we'll bring it to life.",
      labels: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "John Doe",
        email: "john@company.com",
        subject: "Project Inquiry, Partnership, Engineering Request...",
        message: "Tell us about your project, goals, and timeline...",
      },
      button: {
        default: "Send Message",
        sending: "Sending...",
        success: "Message sent!",
      },
      status: {
        sending: "Sending your message...",
        success: "Message sent successfully.",
        error: "Could not send your message. Please try again.",
      },
    },
    footer: {
      rightsReserved: "All Rights Reserved.",
      items: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        services: "Services",
        contact: "Contact",
      },
    },
  },
  fr: {
    navbar: {
      items: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        services: "Services",
        contact: "Contact",
      },
      cta: "Travaillons Ensemble",
      switchAria: "Changer de langue",
    },
    hero: {
      badge: "Agence Digitale • IA & Ingénierie",
      titlePrefix: "Concevoir des ",
      titleAccent: "Systèmes Numériques",
      titleSuffix: " Intelligents & Plateformes Modernes",
      description:
        "Virtanis est un studio d'ingénierie numérique d'élite. Nous concevons des écosystèmes web haute performance, des plateformes mobiles évolutives, des systèmes d'IA intelligents et des expériences numériques 3D pour les leaders de l'industrie et les fondateurs visionnaires du monde entier.",
      primaryCta: "Lancer un Projet",
      secondaryCta: "Explorer nos Solutions",
      scrollIndicator: "DÉFILER POUR EXPLORER",
    },
    skills: {
      sectionLabel: "CAPACITÉS NUMÉRIQUES",
      mainTitle: "Solutions Complètes d'Ingénierie Numérique",
      description:
        "Virtanis conçoit des solutions numériques de bout en bout propulsant les entreprises leaders de leur secteur. Des systèmes d'IA intelligents et applications web à haut débit aux plateformes mobiles natives, au design UI/UX spatial et à l'infrastructure cloud — nous bâtissons pour la performance, l'échelle et le prestige.",
      exploreSolution: "Explorer la Solution",
      solutions: {
        "ai-ml": {
          title: "Systèmes d'IA & d'Apprentissage Automatique",
          description:
            "Modèles d'apprentissage automatique sur mesure, intelligence prédictive, pipelines d'automatisation intelligents et intégration de LLM d'entreprise conçus pour évoluer.",
        },
        "web-development": {
          title: "Applications Web d'Entreprise",
          description:
            "Applications web et plateformes SaaS modernes, ultra-rapides et réactives développées avec Next.js, des API robustes et des architectures optimisées pour la conversion.",
        },
        "mobile-development": {
          title: "Applications Mobiles Multiplateformes",
          description:
            "Applications iOS et Android à l'expérience native développées avec Flutter, synchronisation backend en temps réel, authentification sécurisée et UX soignée.",
        },
        "ui-ux": {
          title: "Design UI/UX & Produits Spatiaux",
          description:
            "Systèmes de design, prototypes interactifs, parcours utilisateurs et interfaces à haute conversion avec un minimalisme et une précision de niveau Apple.",
        },
        "three-d-interactive": {
          title: "Expériences Web 3D & Immersives",
          description:
            "Scènes 3D interactives, shaders WebGL, visualiseurs de produits Three.js et environnements numériques sensoriels rendant les marques inoubliables.",
        },
        "cloud-devops": {
          title: "Infrastructure Cloud & DevOps",
          description:
            "Pipelines CI/CD prêts pour la production, conteneurisation, hébergement cloud haute disponibilité et surveillance de la sécurité d'entreprise.",
        },
      },
    },
    projects: {
      sectionLabel: "PROJETS SÉLECTIONNÉS",
      mainTitle: "Bâtir l'Avenir Grâce à des Produits Numériques Intelligents",
      description:
        "Un portfolio sélectionné de produits numériques intelligents, de systèmes évolutifs et de solutions d'IA. Chaque projet est conçu avec précision — alliant architecture avancée, expériences immersives et développement moderne pour mener une transformation numérique significative.",
      filterLabels: {
        All: "Tous les Déploiements",
        ML: "IA & Machine Learning",
        Web: "Plateformes Web",
        App: "Systèmes Mobiles",
        Design: "Design Spatial & UI/UX",
      },
      statusLabels: {
        live: "Déploiement en Ligne",
        beta: "Aperçu Bêta",
        inProgress: "En Développement",
      },
      photoLabel: "Photo",
      photosLabel: "Photos",
      viewGallery: "Voir la Galerie",
      showMore: "... voir plus",
      launchPlatform: "Lancer la Plateforme",
      internalSystem: "Système Interne d'Entreprise",
      viewMore: "Voir Plus de Projets",
      showLess: "Voir Moins",
      items: {
        10: {
          title: "Site Corporate STI",
          description:
            "Site institutionnel de STI mettant en avant le crédit de recharge Ooredoo, les cartes SIM prépayées, les solutions de gros et les services partenaires en Algérie. Développé avec Next.js et Tailwind CSS, il offre une expérience moderne, rapide et réactive avec un design télécom haut de gamme.",
        },
        7: {
          title: "Système de Gestion Hôtelière",
          description:
            "Plateforme complète de gestion hôtelière pour administrer efficacement les réservations, l'attribution des chambres, les données des clients, la facturation et les opérations quotidiennes.",
        },
        9: {
          title: "Site Corporate KAZELEC",
          description:
            "Site d'entreprise KAZELEC présentant les postes de transformation préfabriqués, équipements électriques, services et réalisations industrielles. Conçu avec Next.js et Tailwind CSS pour une navigation intuitive et un design industriel soigné.",
        },
        2: {
          title: "Site Web Golden Hills Hotel",
          description:
            "Site vitrine de l'hôtel Golden Hills présentant ses chambres, services et espaces de détente. Développé avec Next.js et Tailwind CSS, offrant une interface fluide, rapide et immersive.",
        },
        4: {
          title: "Estimateur de Loyers en Allemagne",
          description:
            "Application de Machine Learning prédisant les prix de location en Allemagne selon les critères immobiliers (localisation, surface, nombre de pièces) grâce à un modèle d'IA rapide et précis.",
        },
        5: {
          title: "Système de Prédiction du Churn Client",
          description:
            "Système d'IA analysant le comportement des utilisateurs et prédisant la probabilité d'attrition client afin de permettre des actions proactives de fidélisation.",
        },
        6: {
          title: "Moteur de Recommandation de Films",
          description:
            "Système de recommandation basé sur le machine learning suggérant des films selon les préférences utilisateur, les genres, les notes et l'analyse de similarité.",
        },
        8: {
          title: "HOCO Algérie — E-commerce Haut de Gamme",
          description:
            "Plateforme e-commerce moderne pour HOCO Algérie, conçue pour commercialiser des accessoires mobiles haut de gamme avec un design épuré et réactif.",
        },
        0: {
          title: "Site Web Sodimfel",
          description:
            "Plateforme de solutions électriques industrielles présentant transformateurs, postes électriques, distribution d'énergie et services d'ingénierie.",
        },
        1: {
          title: "Site E-commerce – Groupe MTFC",
          description:
            "Site e-commerce pour le Groupe MTFC spécialisé dans l'électroménager et les articles de maison. Développé avec React et Laravel pour une gestion fluide des commandes et produits.",
        },
        3: {
          title: "APL Tech — Boutique PC Gamer Futuriste",
          description:
            "Boutique e-commerce moderne et immersive conçue pour les gamers. APL Tech propose une expérience futuriste permettant aux utilisateurs de configurer et personnaliser leur propre PC gamer.",
        },
      },
    },
    about: {
      sectionLabel: "LE STANDARD VIRTANIS",
      mainTitle: "Concevoir l'Infrastructure Numérique à Haute Valeur de Demain",
      description:
        "Virtanis est un studio d'ingénierie numérique d'élite alliant intelligence computationnelle, rigueur architecturale et design produit de classe mondiale. Nous collaborons avec des startups en forte croissance et des entreprises mondiales pour concevoir, bâtir et déployer des plateformes numériques qui redéfinissent leur secteur.",
      ctaButton: "Découvrir l'Agence",
      credentials: {
        focus: { label: "Priorité", value: "Entreprise & Échelle" },
        engineering: { label: "Ingénierie", value: "Native IA & Zéro Latence" },
        delivery: { label: "Déploiement", value: "À l'Échelle Mondiale" },
        availability: { label: "Disponibilité", value: "Disponible pour Projets" },
      },
    },
    contact: {
      sectionLabel: "CONTACT",
      mainTitle: "Créons Ensemble des Expériences Numériques Intelligentes",
      description:
        "Que vous soyez une startup visionnaire, une entreprise en quête de transformation numérique ou un innovateur avec une idée audacieuse — nous collaborons avec des équipes avant-gardistes pour concevoir des systèmes intelligents, bâtir des plateformes évolutives et offrir des expériences qui redéfinissent leur secteur.",
      introText:
        "Ouvert aux collaborations innovantes, aux solutions logicielles intelligentes et aux projets numériques futuristes. Concevons ensemble quelque chose d'extraordinaire.",
      cardLabels: {
        email: "E-MAIL",
        phone: "TÉLÉPHONE",
        location: "LOCALISATION",
        availability: "DISPONIBILITÉ",
      },
      availabilityValue: "Disponible pour Projets",
      locationValue: "Algérie & À l'international",
      socialLabel: "Réseaux",
      formTitle: "Lancer un Projet",
      formSubtitle: "Parlez-nous de votre vision et nous lui donnerons vie.",
      labels: {
        name: "Nom Complet",
        email: "Adresse Email",
        subject: "Objet",
        message: "Message",
      },
      placeholders: {
        name: "Jean Dupont",
        email: "jean@entreprise.com",
        subject: "Demande de projet, partenariat, besoin d'ingénierie...",
        message: "Présentez-nous votre projet, vos objectifs et vos délais...",
      },
      button: {
        default: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Message envoyé !",
      },
      status: {
        sending: "Envoi de votre message...",
        success: "Message envoyé avec succès.",
        error: "Impossible d'envoyer votre message. Veuillez réessayer.",
      },
    },
    footer: {
      rightsReserved: "Tous droits réservés.",
      items: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        services: "Services",
        contact: "Contact",
      },
    },
  },
};

export function getTranslations(locale: Locale): TranslationDictionary {
  return translations[locale] || translations.en;
}

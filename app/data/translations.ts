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
export interface AboutPageFeature {
  title: string;
  description: string;
}

export interface AboutPageValue {
  title: string;
  description: string;
}

export interface AboutPageStep {
  step: string;
  title: string;
  description: string;
}

export interface AboutPageTechnology {
  name: string;
}

export interface AboutPageFounder {
  name: string;
  role: string;
  experience: string;
  description: string;
}

export interface AboutPageTranslation {
  hero: {
    label: string;
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
  };
  ethos: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    features: AboutPageFeature[];
  };
  pillars: {
    label: string;
    title: string;
    values: AboutPageValue[];
  };
  methodology: {
    label: string;
    title: string;
    description: string;
    startProject: string;
    steps: AboutPageStep[];
  };
  techStack: {
    label: string;
    title: string;
  };
  leadership: {
    label: string;
    title: string;
    subtitle: string;
    badge: string;
    founder: AboutPageFounder;
  };
  cta: {
    heading: string;
    description: string;
    primaryText: string;
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

export interface SkillsPageCategory {
  title: string;
  tag: string;
  slug: string;
  description: string;
  skills: string[];
}

export interface SkillsPageDisciplineItem {
  name: string;
  level: string;
  spec: string;
}

export interface SkillsPageDisciplineGroup {
  category: string;
  items: SkillsPageDisciplineItem[];
}

export interface SkillsPageTechnology {
  name: string;
  category: string;
}

export interface SkillsPageTranslation {
  hero: {
    label: string;
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    exploreBtn: string;
    consultBtn: string;
  };
  categories: {
    label: string;
    title: string;
    description: string;
    exploreBlueprint: string;
    items: SkillsPageCategory[];
  };
  disciplines: {
    label: string;
    title: string;
    description: string;
    groups: SkillsPageDisciplineGroup[];
  };
  tools: {
    label: string;
    title: string;
    description: string;
    technologies: SkillsPageTechnology[];
  };
  cta: {
    heading: string;
    description: string;
    primaryText: string;
  };
}

export interface ProjectsPageTranslation {
  hero: {
    label: string;
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    exploreBtn: string;
    initiateBtn: string;
  };
  filterAria: string;
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
  cta: {
    heading: string;
    description: string;
    primaryText: string;
  };
}

export interface ServicesPageBadge {
  label: string;
}

export interface ServicesPageServiceItem {
  slug: string;
  title: string;
  tag: string;
  description: string;
  checklist: string[];
}

export interface ServicesPageStatItem {
  value: string;
  label: string;
}

export interface ServicesPageProcessStep {
  num: string;
  title: string;
  desc: string;
}

export interface ServicesPageTranslation {
  hero: {
    label: string;
    titlePrefix: string;
    titleAccent: string;
    titleSuffix: string;
    description: string;
    exploreBtn: string;
    initiateBtn: string;
    badges: ServicesPageBadge[];
  };
  trustedBy: {
    label: string;
  };
  grid: {
    label: string;
    title: string;
    description: string;
    deliverablesHeader: string;
    exploreService: string;
    items: ServicesPageServiceItem[];
  };
  stats: {
    items: ServicesPageStatItem[];
  };
  process: {
    label: string;
    title: string;
    description: string;
    steps: ServicesPageProcessStep[];
  };
  cta: {
    label: string;
    heading: string;
    description: string;
    primaryText: string;
    secondaryText: string;
  };
}

export interface ContactPageBadge {
  label: string;
}

export interface ContactPageTranslation {
  hero: {
    label: string;
    titlePrefix: string;
    titleAccent: string;
    description: string;
    exploreHub: string;
    emailDirectly: string;
    badges: ContactPageBadge[];
  };
  channels: {
    label: string;
    title: string;
    description: string;
    items: {
      email: { label: string };
      phone: { label: string };
      location: { label: string; value: string };
      workingHours: { label: string; value: string };
    };
    socialBoxLabel: string;
  };
  form: {
    label: string;
    title: string;
    description: string;
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
      success: string;
      error: string;
    };
  };
}

export interface TranslationDictionary {
  navbar: NavbarTranslation;
  hero: HeroTranslation;
  skills: SkillsTranslation;
  projects: ProjectsTranslation;
  about: AboutTranslation;
  aboutPage: AboutPageTranslation;
  skillsPage: SkillsPageTranslation;
  projectsPage: ProjectsPageTranslation;
  servicesPage: ServicesPageTranslation;
  contact: ContactTranslation;
  contactPage: ContactPageTranslation;
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
    aboutPage: {
      hero: {
        label: "ABOUT VIRTANIS",
        titlePrefix: "Engineering ",
        titleAccent: "Intelligent Digital",
        titleSuffix: " Systems For The Future",
        description:
          "Virtanis is an elite digital engineering studio. We partner with ambitious companies worldwide to architect, design, and deploy scalable software platforms, custom AI systems, and immersive digital experiences.",
      },
      ethos: {
        label: "THE VIRTANIS ETHOS",
        title: "Architecting High-Value Digital Solutions",
        p1: "Virtanis was established with a singular objective: to build intelligent software and web platforms that simplify complexity, scale effortlessly, and leave a lasting impression on end users.",
        p2: "We believe great software is where computational engineering meets uncompromising design aesthetics. Every line of code and every interaction is crafted with precision.",
        features: [
          {
            title: "Our Mission",
            description:
              "To engineer robust, high-performance digital systems and AI-powered platforms that deliver measurable market advantage for visionary brands.",
          },
          {
            title: "Our Vision",
            description:
              "To be the premier digital engineering studio globally recognized for architectural perfection, intelligent automation, and luxury UX.",
          },
        ],
      },
      pillars: {
        label: "OUR PILLARS",
        title: "The Engineering Principles We Live By",
        values: [
          {
            title: "Engineering Rigor",
            description:
              "Zero compromise on code quality, latency, scalability, and system architecture.",
          },
          {
            title: "AI-First Innovation",
            description:
              "Leveraging state-of-the-art machine intelligence to automate and augment complex workflows.",
          },
          {
            title: "Apple-Grade Design",
            description:
              "Minimalist, intuitive, and tactile interfaces that make interacting with technology effortless.",
          },
          {
            title: "Global Partnership",
            description:
              "Transparent, collaborative execution from initial discovery to worldwide cloud deployment.",
          },
        ],
      },
      methodology: {
        label: "OUR METHODOLOGY",
        title: "From Blueprint To Global Production",
        description:
          "Our execution pipeline is transparent, agile, and engineered for high-velocity product delivery without sacrificing code quality or security.",
        startProject: "Start Your Project",
        steps: [
          {
            step: "01",
            title: "Discover & Strategy",
            description:
              "Comprehensive analysis of business objectives, user requirements, and technical roadmaps.",
          },
          {
            step: "02",
            title: "System Architecture",
            description:
              "Blueprint design of cloud environments, database schemas, and intelligent API topologies.",
          },
          {
            step: "03",
            title: "Spatial & UI Design",
            description:
              "Crafting minimalist design systems, user flows, and interactive high-fidelity prototypes.",
          },
          {
            step: "04",
            title: "Full-Stack Build",
            description:
              "Writing clean, modular, and typed code with modern frontend and backend frameworks.",
          },
          {
            step: "05",
            title: "Scale & Deploy",
            description:
              "Automated CI/CD release, global CDN caching, telemetry monitoring, and continuous scaling.",
          },
        ],
      },
      techStack: {
        label: "CORE STACK & TOOLS",
        title: "Modern Technologies For Resilient Systems",
      },
      leadership: {
        label: "STUDIO LEADERSHIP",
        title: "Engineering Leadership & Vision",
        subtitle:
          "Virtanis is led by Dhia Eddine Guettaf, an AI engineer and full-stack systems architect dedicated to building digital platforms that drive real-world impact.",
        badge: "Studio Leadership",
        founder: {
          name: "Dhia Eddine Guettaf",
          role: "Founder & Lead Architect",
          experience: "Full-Spectrum Engineering",
          description:
            "AI engineer, full-stack systems architect, and digital product craftsman. Dedicated to uniting machine intelligence with architectural precision and world-class product design for ambitious companies.",
        },
      },
      cta: {
        heading: "Let's Build Something Exceptional",
        description:
          "Ready to elevate your digital product with intelligent engineering and high-value design? Let's discuss your project.",
        primaryText: "Start Your Project",
      },
    },
    skillsPage: {
      hero: {
        label: "TECHNICAL SPECIFICATIONS",
        titlePrefix: "Architectural Precision & ",
        titleAccent: "Intelligent Engineering",
        titleSuffix: "",
        description:
          "Our multidisciplinary digital engineering capabilities unite artificial intelligence, cloud-native architecture, and precision design systems to build future-ready platforms.",
        exploreBtn: "Explore Specializations",
        consultBtn: "Consult Lead Architect",
      },
      categories: {
        label: "CORE DOMAINS",
        title: "Core Engineering Specializations",
        description:
          "Specialized expertise engineered to deliver end-to-end digital excellence for modern enterprises.",
        exploreBlueprint: "Explore Domain Blueprint",
        items: [
          {
            title: "AI & Machine Intelligence",
            tag: "Next-Gen AI",
            slug: "ai-ml",
            description:
              "Custom machine learning models, autonomous AI agents, neural pipelines, and intelligent automation workflows.",
            skills: ["LLM Integration", "Predictive Models", "Neural Networks", "NLP & Computer Vision"],
          },
          {
            title: "Enterprise Web Systems",
            tag: "Zero-Latency",
            slug: "web-development",
            description:
              "High-throughput web applications, headless architectures, and scalable platforms engineered for reliability.",
            skills: ["Next.js & React", "TypeScript", "Microservices", "REST & GraphQL APIs"],
          },
          {
            title: "Mobile App Engineering",
            tag: "Native Feel",
            slug: "mobile-development",
            description:
              "Fluid cross-platform mobile experiences for iOS & Android built with native performance and offline-first state.",
            skills: ["Flutter & Dart", "iOS & Android", "Real-Time Sync", "Biometric Auth"],
          },
          {
            title: "UI/UX & Product Design",
            tag: "Apple Standard",
            slug: "ui-ux",
            description:
              "Minimalist design systems, spatial computing interfaces, intuitive ergonomics, and high-fidelity prototypes.",
            skills: ["Design Systems", "Figma & Tokens", "Interaction Design", "UX Architecture"],
          },
          {
            title: "Cloud & DevOps Rigor",
            tag: "99.9% Uptime",
            slug: "cloud-devops",
            description:
              "Automated CI/CD pipelines, container orchestration, global CDN caching, and high-availability cloud infrastructure.",
            skills: ["Docker & K8s", "AWS Cloud", "Automated CI/CD", "Edge Computing"],
          },
          {
            title: "3D & Immersive Web",
            tag: "WebGL / Three.js",
            slug: "three-d-interactive",
            description:
              "Hardware-accelerated 3D environments, spatial web interactions, and WebGL rendering for futuristic product showcases.",
            skills: ["Three.js", "WebGL Shaders", "GSAP Physics", "Interactive Canvases"],
          },
        ],
      },
      disciplines: {
        label: "PROFICIENCY MATRIX",
        title: "Technical Disciplines & Stacks",
        description:
          "Deep competency benchmarks across modern software paradigms, reactive runtimes, and distributed cloud systems.",
        groups: [
          {
            category: "Languages & Frameworks",
            items: [
              { name: "TypeScript / JavaScript", level: "Senior / Core", spec: "Strict Typing, ESNext, Async Runtimes" },
              { name: "Next.js & React 19", level: "Architecture", spec: "Server Components, Streaming SSR, Turbopack" },
              { name: "Python & AI Runtimes", level: "Advanced", spec: "PyTorch, FastAPI, HuggingFace, OpenAI APIs" },
              { name: "Flutter & Dart", level: "Production", spec: "Cross-Platform, Custom Shaders, State Machines" },
              { name: "Node.js & Express", level: "Backend", spec: "Event-Driven, High-Concurrency WebSockets" },
              { name: "Tailwind CSS v4", level: "UI Systems", spec: "Zero-Runtime CSS, Custom Design Tokens" },
            ],
          },
          {
            category: "Infrastructure & Data Architecture",
            items: [
              { name: "PostgreSQL & Supabase", level: "Database", spec: "Relational Modeling, Indexing, Vector DBs" },
              { name: "AWS & Edge Hosting", level: "Cloud", spec: "Lambda, CloudFront, S3, Global CDN" },
              { name: "Docker & Containerization", level: "DevOps", spec: "Multi-Stage Builds, Isolated Environments" },
              { name: "CI/CD & Git Pipelines", level: "Automation", spec: "GitHub Actions, Automated Testing, Deployments" },
              { name: "Redis & Caching Layers", level: "Performance", spec: "In-Memory KV, Rate Limiting, Pub/Sub" },
              { name: "Three.js & WebGL", level: "Spatial", spec: "GLTF Pipelines, Custom Fragment Shaders" },
            ],
          },
        ],
      },
      tools: {
        label: "TOOLING ECOSYSTEM",
        title: "Technologies & Production Stack",
        description:
          "Industry-standard tools and libraries leveraged to ensure high performance, security, and velocity.",
        technologies: [
          { name: "Next.js", category: "Frontend" },
          { name: "React", category: "Frontend" },
          { name: "TypeScript", category: "Language" },
          { name: "Python", category: "AI / Backend" },
          { name: "Flutter", category: "Mobile" },
          { name: "Node.js", category: "Backend" },
          { name: "PostgreSQL", category: "Database" },
          { name: "Supabase", category: "Database" },
          { name: "AWS Cloud", category: "DevOps" },
          { name: "Docker", category: "DevOps" },
          { name: "Tailwind CSS", category: "UI" },
          { name: "Figma", category: "Design" },
          { name: "Three.js", category: "3D Web" },
          { name: "OpenAI", category: "AI" },
          { name: "Redis", category: "Data" },
          { name: "GraphQL", category: "API" },
        ],
      },
      cta: {
        heading: "Ready To Engineer Your Digital Platform?",
        description:
          "Collaborate with Virtanis to design, build, and deploy intelligent software engineered for scale.",
        primaryText: "Start a Project",
      },
    },
    projectsPage: {
      hero: {
        label: "PROVEN PORTFOLIO & ARCHITECTURE",
        titlePrefix: "Featured Production & ",
        titleAccent: "Architectural",
        titleSuffix: " Deployments",
        description:
          "Explore high-impact digital platforms, mission-critical web applications, machine learning systems, and precision UI/UX interfaces engineered by Virtanis for world-class speed, security, and scale.",
        exploreBtn: "Explore Deployments",
        initiateBtn: "Initiate Project",
      },
      filterAria: "Filter deployments by category",
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
      viewMore: "View All",
      showLess: "Show Less",
      cta: {
        heading: "Ready To Engineer Your Flagship Platform?",
        description:
          "Partner with Virtanis to architect, build, and deploy intelligent software designed for unmatched performance.",
        primaryText: "Initiate Project",
      },
    },
    servicesPage: {
      hero: {
        label: "SERVICE ARCHITECTURE & ENGINEERING",
        titlePrefix: "Full-Spectrum Digital ",
        titleAccent: "Capabilities",
        titleSuffix: " For Global Scale",
        description:
          "From mission-critical web platforms and cross-platform mobile systems to production machine learning pipelines and immersive 3D interfaces — we architect high-value digital solutions engineered for speed, security, and market dominance.",
        exploreBtn: "Explore Capabilities",
        initiateBtn: "Initiate Project",
        badges: [
          { label: "Enterprise Security" },
          { label: "Sub-50ms Latency" },
          { label: "Scalable Architecture" },
          { label: "AI & Full-Stack Mastery" },
        ],
      },
      trustedBy: {
        label: "TRUSTED BY ENTERPRISES, SCALE-UPS & GLOBAL FOUNDERS",
      },
      grid: {
        label: "CORE PILLARS",
        title: "Engineered For Precision, Velocity & Scale",
        description:
          "Six foundational engineering and design disciplines orchestrated to build market-defining digital platforms, automated workflows, and high-performance software.",
        deliverablesHeader: "KEY DELIVERABLES",
        exploreService: "Explore Service Specification",
        items: [
          {
            slug: "web-development",
            title: "Web Platform Development",
            tag: "Next.js / Node / GraphQL",
            description:
              "Enterprise-grade, ultra-responsive web applications, headless commerce platforms, and scalable APIs engineered for speed and conversion.",
            checklist: [
              "Custom Next.js & React Architectures",
              "Enterprise SaaS & Web Applications",
              "High-Conversion Headless Commerce",
              "High-Throughput GraphQL & REST APIs",
            ],
          },
          {
            slug: "mobile-development",
            title: "Mobile Systems & Applications",
            tag: "Flutter / iOS / Android",
            description:
              "Cross-platform and native mobile software delivering 60 FPS performance, offline-first reliability, and seamless hardware integration.",
            checklist: [
              "Cross-Platform Flutter Development",
              "Native iOS & Android Architecture",
              "Real-Time Data & Offline Synchronization",
              "App Store & Google Play Lifecycle Deployment",
            ],
          },
          {
            slug: "ai-ml",
            title: "AI & Machine Learning Systems",
            tag: "PyTorch / FastAPI / LangChain",
            description:
              "Production-ready machine learning models, custom LLM agents, predictive intelligence, and automated pipelines that drive quantifiable ROI.",
            checklist: [
              "Custom Predictive & Classification Models",
              "Autonomous AI Agents & LLM Fine-Tuning",
              "Automated Data Ingestion & ETL Pipelines",
              "Sub-20ms Inference API Microservices",
            ],
          },
          {
            slug: "ui-ux",
            title: "Product Design & UI/UX Architecture",
            tag: "Figma / Design Systems",
            description:
              "Executive visual design, frictionless user experience flows, and comprehensive atomic design systems created for market leaders.",
            checklist: [
              "User Research & Journey Mapping",
              "High-Fidelity Interactive Prototyping",
              "Comprehensive Scalable Design Systems",
              "Micro-Interactions & Motion Design",
            ],
          },
          {
            slug: "three-d-interactive",
            title: "3D & Interactive Experiences",
            tag: "Three.js / WebGL / GLSL",
            description:
              "Real-time 3D product visualizers, spatial computing web interfaces, and custom shader animations that leave lasting brand impressions.",
            checklist: [
              "Custom Three.js & WebGL Visualizers",
              "Real-Time 3D Product Configurators",
              "High-Performance Custom Shader Pipelines",
              "Spatial & Interactive Web Experiences",
            ],
          },
          {
            slug: "cloud-devops",
            title: "Cloud Infrastructure & DevOps",
            tag: "AWS / Docker / Kubernetes",
            description:
              "Zero-downtime CI/CD automation, scalable container orchestration, infrastructure as code, and 99.99% uptime operational management.",
            checklist: [
              "Automated Zero-Downtime CI/CD Pipelines",
              "Docker & Kubernetes Containerization",
              "Infrastructure as Code (Terraform)",
              "24/7 Observability & SLA Monitoring",
            ],
          },
        ],
      },
      stats: {
        items: [
          { value: "100%", label: "Client Satisfaction" },
          { value: "High", label: "Performance" },
          { value: "Scalable", label: "Architecture" },
          { value: "24/7", label: "Support" },
        ],
      },
      process: {
        label: "EXECUTION FRAMEWORK",
        title: "A Systematic Delivery Model",
        description:
          "Engineered for zero friction, rapid iteration cycles, and absolute technical excellence.",
        steps: [
          {
            num: "01",
            title: "Discovery & Spec",
            desc: "We analyze system objectives, user requirements, and establish precise technical scope.",
          },
          {
            num: "02",
            title: "System Architecture",
            desc: "We architect scalable schemas, API contracts, high-fidelity UI/UX flows, and infrastructure models.",
          },
          {
            num: "03",
            title: "Agile Engineering",
            desc: "We build with modular code, test-driven pipelines, and weekly staging deployments.",
          },
          {
            num: "04",
            title: "Security & QA Audit",
            desc: "We perform automated end-to-end testing, security penetration audits, and speed benchmarks.",
          },
          {
            num: "05",
            title: "Production & SLA",
            desc: "We deploy zero-downtime releases backed by real-time observability and continuous scaling.",
          },
        ],
      },
      cta: {
        label: "GET IN TOUCH",
        heading: "Ready To Architect Your Flagship Solution?",
        description:
          "Partner with Virtanis to engineer high-performance platforms, intelligent machine learning systems, and precision user interfaces.",
        primaryText: "Initiate Project",
        secondaryText: "Explore Deployments",
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
    contactPage: {
      hero: {
        label: "INITIATE ENGAGEMENT",
        titlePrefix: "Let's Build Something ",
        titleAccent: "Extraordinary.",
        description:
          "Have a landmark project in mind, require enterprise-grade engineering, or want to discuss a strategic digital partnership? Virtanis is ready to deliver.",
        exploreHub: "Explore Contact Hub",
        emailDirectly: "Email Directly",
        badges: [
          { label: "Sub-24h Response" },
          { label: "NDA Protected" },
          { label: "Global Reach" },
          { label: "Direct Access" },
        ],
      },
      channels: {
        label: "DIRECT CHANNELS",
        title: "Reach Virtanis Directly",
        description:
          "Connect through our primary communication channels or social profiles for immediate response.",
        items: {
          email: { label: "Email" },
          phone: { label: "Phone" },
          location: { label: "Location", value: "Algeria & Worldwide" },
          workingHours: { label: "Availability", value: "Available for work" },
        },
        socialBoxLabel: "CONNECT ACROSS PLATFORMS",
      },
      form: {
        label: "PROJECT INQUIRY",
        title: "Start a Project",
        description:
          "Provide your project details below and our engineering leads will respond within 24 hours.",
        labels: {
          name: "Your Name",
          email: "Your Email",
          subject: "Subject / Domain",
          message: "Project Description",
        },
        placeholders: {
          name: "John Doe",
          email: "john@example.com",
          subject: "Web App Architecture, Mobile App, AI Integration...",
          message: "Tell us about your project scope, goals, and target timeline...",
        },
        button: {
          default: "Submit Project Inquiry",
          sending: "Transmitting Message...",
          success: "Message Delivered ✓",
        },
        status: {
          success: "Your message has been received. Our team will get back to you shortly!",
          error: "Could not send your message. Please try again.",
        },
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
    aboutPage: {
      hero: {
        label: "À PROPOS DE VIRTANIS",
        titlePrefix: "Ingénierie de Systèmes ",
        titleAccent: "Numériques Intelligents",
        titleSuffix: " Pour Demain",
        description:
          "Virtanis est un studio d'ingénierie numérique d'élite. Nous collaborons avec des entreprises ambitieuses à travers le monde pour concevoir, développer et déployer des plateformes logicielles évolutives, des systèmes d'IA sur mesure et des expériences immersives.",
      },
      ethos: {
        label: "L'ESPRIT VIRTANIS",
        title: "Concevoir des Solutions Numériques à Haute Valeur",
        p1: "Virtanis a été fondé avec un objectif clair : développer des logiciels intelligents et des plateformes web qui simplifient la complexité, évoluent sans contrainte et marquent durablement leurs utilisateurs.",
        p2: "Nous sommes convaincus que l'excellence logicielle réside dans la rencontre entre ingénierie algorithmique de pointe et esthétique sans compromis. Chaque ligne de code et chaque interaction sont conçues avec minutie.",
        features: [
          {
            title: "Notre Mission",
            description:
              "Concevoir des systèmes numériques robustes et performants et des plateformes propulsées par l'IA apportant un avantage stratégique décisif aux marques visionnaires.",
          },
          {
            title: "Notre Vision",
            description:
              "Être le studio d'ingénierie numérique de référence mondiale, reconnu pour sa rigueur architecturale, l'automatisation intelligente et l'élégance de ses expériences utilisateurs.",
          },
        ],
      },
      pillars: {
        label: "NOS PILIERS",
        title: "Nos Principes Fondateurs d'Ingénierie",
        values: [
          {
            title: "Rigueur d'Ingénierie",
            description:
              "Zéro compromis sur la qualité du code, la latence, la scalabilité et l'architecture des systèmes.",
          },
          {
            title: "Innovation Centrée sur l'IA",
            description:
              "Exploiter l'intelligence machine de pointe pour automatiser et décupler la puissance des flux métiers complexes.",
          },
          {
            title: "Design de Niveau Apple",
            description:
              "Des interfaces épurées, intuitives et tactiles qui rendent l'interaction avec la technologie naturelle et fluide.",
          },
          {
            title: "Partenariat Global",
            description:
              "Une exécution transparente et collaborative, de la phase de cadrage stratégique jusqu'au déploiement mondial dans le cloud.",
          },
        ],
      },
      methodology: {
        label: "NOTRE MÉTHODOLOGIE",
        title: "Du Schéma Directeur à la Production Mondiale",
        description:
          "Notre processus d'exécution est transparent, agile et optimisé pour des déploiements rapides et fiables, sans jamais sacrifier la sécurité ni la maintenabilité.",
        startProject: "Lancer Votre Projet",
        steps: [
          {
            step: "01",
            title: "Découverte & Stratégie",
            description:
              "Analyse approfondie de vos objectifs métiers, des attentes utilisateurs et définition de la feuille de route technique.",
          },
          {
            step: "02",
            title: "Architecture Système",
            description:
              "Conception sur mesure des environnements cloud, schémas de bases de données et topologies d'API résilientes.",
          },
          {
            step: "03",
            title: "Design Spatial & UI",
            description:
              "Création de systèmes de design minimalistes, de parcours utilisateurs fluides et de prototypes haute fidélité.",
          },
          {
            step: "04",
            title: "Développement Full-Stack",
            description:
              "Écriture d'un code propre, modulaire et typé avec les technologies frontend et backend les plus performantes.",
          },
          {
            step: "05",
            title: "Échelle & Déploiement",
            description:
              "Intégration et déploiement continus (CI/CD), mise en cache CDN mondiale, monitoring télémétrique et montée en charge.",
          },
        ],
      },
      techStack: {
        label: "STACK & OUTILS CLÉS",
        title: "Technologies Modernes pour Systèmes Résilients",
      },
      leadership: {
        label: "DIRECTION DU STUDIO",
        title: "Vision & Leadership Technique",
        subtitle:
          "Virtanis est dirigé par Dhia Eddine Guettaf, ingénieur IA et architecte de systèmes full-stack dédié à la création de plateformes numériques à fort impact.",
        badge: "Direction du Studio",
        founder: {
          name: "Dhia Eddine Guettaf",
          role: "Fondateur & Architecte Principal",
          experience: "Ingénierie Système Complète",
          description:
            "Ingénieur en intelligence artificielle, architecte de systèmes full-stack et artisan de produits numériques. Passionné par l'alliance entre rigueur algorithmique, précision logicielle et design haut de gamme pour les entreprises exigeantes.",
        },
      },
      cta: {
        heading: "Bâtissons Quelque Chose d'Exceptionnel",
        description:
          "Prêt à élever votre produit numérique grâce à une ingénierie intelligente et un design prestigieux ? Échangeons sur votre projet.",
        primaryText: "Lancer Votre Projet",
      },
    },
    skillsPage: {
      hero: {
        label: "SPÉCIFICATIONS TECHNIQUES",
        titlePrefix: "Précision Architecturale & ",
        titleAccent: "Ingénierie Intelligente",
        titleSuffix: "",
        description:
          "Nos expertises multidisciplinaires unissent intelligence artificielle, architecture cloud-native et systèmes de design haute fidélité pour concevoir des plateformes pérennes.",
        exploreBtn: "Explorer les Spécialisations",
        consultBtn: "Consulter l'Architecte Principal",
      },
      categories: {
        label: "DOMAINES CLÉS",
        title: "Spécialisations Majeures d'Ingénierie",
        description:
          "Une expertise technique pointue pour délivrer une excellence numérique de bout en bout aux entreprises d'envergure.",
        exploreBlueprint: "Explorer le Schéma du Domaine",
        items: [
          {
            title: "IA & Intelligence Machine",
            tag: "IA Nouvelle Génération",
            slug: "ai-ml",
            description:
              "Modèles de Machine Learning sur mesure, agents d'IA autonomes, pipelines neuronaux et flux d'automatisation cognitive.",
            skills: ["Intégration LLM", "Modèles Prédictifs", "Réseaux Neuronaux", "NLP & Vision par Ordinateur"],
          },
          {
            title: "Systèmes Web d'Entreprise",
            tag: "Zéro Latence",
            slug: "web-development",
            description:
              "Applications web à haut débit, architectures headless et plateformes modulaires conçues pour une fiabilité maximale.",
            skills: ["Next.js & React", "TypeScript", "Microservices", "APIs REST & GraphQL"],
          },
          {
            title: "Ingénierie d'Apps Mobiles",
            tag: "Sensation Native",
            slug: "mobile-development",
            description:
              "Expériences mobiles ultra-fluides pour iOS et Android alliant performances natives et gestion d'état offline-first.",
            skills: ["Flutter & Dart", "iOS & Android", "Synchronisation Temps Réel", "Auth Biométrique"],
          },
          {
            title: "UI/UX & Design Produit",
            tag: "Standard Apple",
            slug: "ui-ux",
            description:
              "Design systems stricts, interfaces spatiales ergonomiques et prototypes interactifs à haute fidélité visuelle.",
            skills: ["Design Systems", "Figma & Design Tokens", "Design d'Interaction", "Architecture UX"],
          },
          {
            title: "Rigueur Cloud & DevOps",
            tag: "Disponibilité 99.9%",
            slug: "cloud-devops",
            description:
              "Pipelines CI/CD automatisés, orchestration de conteneurs, mise en cache CDN mondiale et cloud haute résilience.",
            skills: ["Docker & K8s", "Cloud AWS", "CI/CD Automatisé", "Edge Computing"],
          },
          {
            title: "Web 3D & Immersif",
            tag: "WebGL / Three.js",
            slug: "three-d-interactive",
            description:
              "Environnements 3D avec accélération matérielle, interactions spatiales et rendu WebGL pour vitrines produits futuristes.",
            skills: ["Three.js", "Shaders WebGL", "Physique GSAP", "Canvas Interactifs"],
          },
        ],
      },
      disciplines: {
        label: "MATRICE DE COMPÉTENCES",
        title: "Disciplines Techniques & Stacks",
        description:
          "Niveaux de maîtrise approfondis à travers les paradigmes logiciels modernes, les moteurs réactifs et les systèmes cloud distribués.",
        groups: [
          {
            category: "Langages & Frameworks",
            items: [
              { name: "TypeScript / JavaScript", level: "Senior / Cœur", spec: "Typage Strict, ESNext, Runtimes Asynchrones" },
              { name: "Next.js & React 19", level: "Architecture", spec: "Server Components, Streaming SSR, Turbopack" },
              { name: "Python & Runtimes IA", level: "Avancé", spec: "PyTorch, FastAPI, HuggingFace, APIs OpenAI" },
              { name: "Flutter & Dart", level: "Production", spec: "Multiplateforme, Shaders Personnalisés, Machines d'État" },
              { name: "Node.js & Express", level: "Backend", spec: "Orienté Événements, WebSockets Haute Concurrence" },
              { name: "Tailwind CSS v4", level: "Systèmes UI", spec: "CSS Zéro-Runtime, Design Tokens Personnalisés" },
            ],
          },
          {
            category: "Infrastructure & Architecture de Données",
            items: [
              { name: "PostgreSQL & Supabase", level: "Base de Données", spec: "Modélisation Relationnelle, Indexation, Vector DBs" },
              { name: "AWS & Hébergement Edge", level: "Cloud", spec: "Lambda, CloudFront, S3, CDN Mondial" },
              { name: "Docker & Conteneurisation", level: "DevOps", spec: "Builds Multi-Étapes, Environnements Isolés" },
              { name: "Pipelines CI/CD & Git", level: "Automatisation", spec: "GitHub Actions, Tests Automatisés, Déploiements" },
              { name: "Redis & Couches de Cache", level: "Performance", spec: "In-Memory KV, Rate Limiting, Pub/Sub" },
              { name: "Three.js & WebGL", level: "Spatial", spec: "Pipelines GLTF, Shaders de Fragments Personnalisés" },
            ],
          },
        ],
      },
      tools: {
        label: "ÉCOSYSTÈME D'OUTILS",
        title: "Technologies & Stack de Production",
        description:
          "Outils et bibliothèques aux standards de l'industrie mobilisés pour garantir vélocité, sécurité et haute performance.",
        technologies: [
          { name: "Next.js", category: "Frontend" },
          { name: "React", category: "Frontend" },
          { name: "TypeScript", category: "Langage" },
          { name: "Python", category: "IA / Backend" },
          { name: "Flutter", category: "Mobile" },
          { name: "Node.js", category: "Backend" },
          { name: "PostgreSQL", category: "Base de Données" },
          { name: "Supabase", category: "Base de Données" },
          { name: "Cloud AWS", category: "DevOps" },
          { name: "Docker", category: "DevOps" },
          { name: "Tailwind CSS", category: "UI" },
          { name: "Figma", category: "Design" },
          { name: "Three.js", category: "Web 3D" },
          { name: "OpenAI", category: "IA" },
          { name: "Redis", category: "Données" },
          { name: "GraphQL", category: "API" },
        ],
      },
      cta: {
        heading: "Prêt à Concevoir Votre Plateforme Numérique ?",
        description:
          "Collaborez avec Virtanis pour concevoir, développer et déployer des logiciels intelligents bâtis pour durer.",
        primaryText: "Lancer un Projet",
      },
    },
    projectsPage: {
      hero: {
        label: "PORTFOLIO ÉPROUVÉ & ARCHITECTURE",
        titlePrefix: "Productions Phares & ",
        titleAccent: "Architectures",
        titleSuffix: " Déployées",
        description:
          "Explorez des plateformes numériques à fort impact, des applications web critiques, des systèmes de machine learning et des interfaces UI/UX de haute précision conçus par Virtanis pour une vitesse, une sécurité et une évolutivité sans compromis.",
        exploreBtn: "Explorer les Réalisations",
        initiateBtn: "Démarrer un Projet",
      },
      filterAria: "Filtrer les réalisations par catégorie",
      filterLabels: {
        All: "Tous les Déploiements",
        ML: "IA & Machine Learning",
        Web: "Plateformes Web",
        App: "Systèmes Mobiles",
        Design: "Spatial & UI/UX",
      },
      statusLabels: {
        live: "En Production",
        beta: "Aperçu Bêta",
        inProgress: "En Développement",
      },
      photoLabel: "Photo",
      photosLabel: "Photos",
      viewGallery: "Voir la Galerie",
      showMore: "... en savoir plus",
      launchPlatform: "Lancer la Plateforme",
      internalSystem: "Système Interne d'Entreprise",
      viewMore: "Voir Tout",
      showLess: "Réduire",
      cta: {
        heading: "Prêt à Concevoir Votre Plateforme Phare ?",
        description:
          "Collaborez avec Virtanis pour concevoir, bâtir et déployer des logiciels intelligents pensés pour des performances hors norme.",
        primaryText: "Démarrer un Projet",
      },
    },
    servicesPage: {
      hero: {
        label: "ARCHITECTURE DE SERVICES & INGÉNIERIE",
        titlePrefix: "Capacités Numériques ",
        titleAccent: "Complètes",
        titleSuffix: " à l'Échelle Mondiale",
        description:
          "Des plateformes web critiques aux systèmes mobiles multiplateformes, en passant par les pipelines de machine learning en production et les interfaces 3D immersives — nous concevons des solutions numériques haute valeur pour la vitesse, la sécurité et la domination du marché.",
        exploreBtn: "Explorer les Capacités",
        initiateBtn: "Démarrer un Projet",
        badges: [
          { label: "Sécurité Entreprise" },
          { label: "Latence < 50ms" },
          { label: "Architecture Évolutive" },
          { label: "Maîtrise IA & Full-Stack" },
        ],
      },
      trustedBy: {
        label: "PLEBISCITÉ PAR LES ENTREPRISES, SCALE-UPS ET FONDATEURS VISIONNAIRES",
      },
      grid: {
        label: "PILIERS FONDAMENTAUX",
        title: "Conçu Pour la Précision, la Rapidité & l'Échelle",
        description:
          "Six disciplines fondamentales d'ingénierie et de design coordonnées pour bâtir des plateformes numériques de référence, des flux automatisés et des logiciels haute performance.",
        deliverablesHeader: "LIVRABLES CLÉS",
        exploreService: "Consulter les Spécifications",
        items: [
          {
            slug: "web-development",
            title: "Développement de Plateformes Web",
            tag: "Next.js / Node / GraphQL",
            description:
              "Applications web d'entreprise ultra-réactives, plateformes e-commerce headless et API évolutives conçues pour la vitesse et la conversion.",
            checklist: [
              "Architectures sur mesure Next.js & React",
              "SaaS d'entreprise & applications web critiques",
              "E-commerce headless haute conversion",
              "API GraphQL & REST haut débit",
            ],
          },
          {
            slug: "mobile-development",
            title: "Systèmes & Applications Mobiles",
            tag: "Flutter / iOS / Android",
            description:
              "Logiciels mobiles multiplateformes et natifs garantissant 60 FPS, fiabilité offline-first et intégration matérielle fluide.",
            checklist: [
              "Développement multiplateforme Flutter",
              "Architecture native iOS & Android",
              "Synchronisation hors-ligne & données temps réel",
              "Cycle de déploiement App Store & Google Play",
            ],
          },
          {
            slug: "ai-ml",
            title: "Systèmes d'IA & Machine Learning",
            tag: "PyTorch / FastAPI / LangChain",
            description:
              "Modèles de machine learning en production, agents LLM sur mesure, intelligence prédictive et pipelines automatisés générant un ROI mesurable.",
            checklist: [
              "Modèles prédictifs & de classification sur mesure",
              "Agents IA autonomes & fine-tuning de LLM",
              "Pipelines d'ingestion de données & ETL automatisés",
              "Microservices d'inférence API à latence < 20ms",
            ],
          },
          {
            slug: "ui-ux",
            title: "Design Produit & Architecture UI/UX",
            tag: "Figma / Design Systems",
            description:
              "Design visuel d'exception, parcours utilisateurs sans friction et design systems atomiques complets conçus pour les leaders du marché.",
            checklist: [
              "Recherche utilisateur & cartographie des parcours",
              "Prototypage interactif haute fidélité",
              "Design systems complets et scalables",
              "Micro-interactions & motion design",
            ],
          },
          {
            slug: "three-d-interactive",
            title: "Expériences 3D & Interactives",
            tag: "Three.js / WebGL / GLSL",
            description:
              "Visualiseurs de produits 3D temps réel, interfaces web spatiales et shaders sur mesure laissant une empreinte de marque durable.",
            checklist: [
              "Visualiseurs sur mesure Three.js & WebGL",
              "Configurateurs de produits 3D en temps réel",
              "Pipelines de shaders personnalisés haute performance",
              "Expériences web spatiales & interactives",
            ],
          },
          {
            slug: "cloud-devops",
            title: "Infrastructure Cloud & DevOps",
            tag: "AWS / Docker / Kubernetes",
            description:
              "Automatisation CI/CD sans interruption, orchestration de conteneurs, infrastructure as code et gestion opérationnelle garantissant 99,99% de disponibilité.",
            checklist: [
              "Pipelines CI/CD automatisés sans temps d'arrêt",
              "Conteneurisation Docker & Kubernetes",
              "Infrastructure as Code (Terraform)",
              "Observabilité 24/7 & surveillance des SLA",
            ],
          },
        ],
      },
      stats: {
        items: [
          { value: "100%", label: "Satisfaction Client" },
          { value: "Haute", label: "Performance" },
          { value: "Évolutive", label: "Architecture" },
          { value: "24/7", label: "Support Dédié" },
        ],
      },
      process: {
        label: "CADRE D'EXÉCUTION",
        title: "Un Modèle de Livraison Systématique",
        description:
          "Conçu pour éliminer les frictions, accélérer les cycles d'itération et garantir une excellence technique absolue.",
        steps: [
          {
            num: "01",
            title: "Cadrage & Spécifications",
            desc: "Analyse des objectifs du système, des exigences utilisateurs et définition d'un périmètre technique précis.",
          },
          {
            num: "02",
            title: "Architecture Système",
            desc: "Conception de schémas évolutifs, contrats d'API, parcours UI/UX haute fidélité et modèles d'infrastructure.",
          },
          {
            num: "03",
            title: "Ingénierie Agile",
            desc: "Développement modulaire, pipelines orientés tests et déploiements hebdomadaires en pré-production.",
          },
          {
            num: "04",
            title: "Audit Sécurité & Qualité",
            desc: "Tests end-to-end automatisés, audits de pénétration de sécurité et tests de charge / vélocité.",
          },
          {
            num: "05",
            title: "Production & SLA",
            desc: "Déploiements sans interruption de service avec observabilité temps réel et mise à l'échelle continue.",
          },
        ],
      },
      cta: {
        label: "CONTACT",
        heading: "Prêt à Concevoir Votre Solution Phare ?",
        description:
          "Associez-vous à Virtanis pour concevoir des plateformes haute performance, des systèmes de machine learning intelligents et des interfaces utilisateur de précision.",
        primaryText: "Démarrer un Projet",
        secondaryText: "Explorer les Réalisations",
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
    contactPage: {
      hero: {
        label: "INITIER UN PROJET",
        titlePrefix: "Bâtissons Quelque Chose d'",
        titleAccent: "Extraordinaire.",
        description:
          "Vous avez un projet d'envergure en tête, besoin d'une ingénierie de pointe ou souhaitez discuter d'un partenariat stratégique ? Virtanis est prêt à concrétiser votre vision.",
        exploreHub: "Découvrir le Hub de Contact",
        emailDirectly: "Écrire Directement",
        badges: [
          { label: "Réponse < 24h" },
          { label: "Protection NDA" },
          { label: "Portée Mondiale" },
          { label: "Accès Direct" },
        ],
      },
      channels: {
        label: "CANAUX DIRECTS",
        title: "Contactez Virtanis Directement",
        description:
          "Échangez via nos canaux de communication directs ou nos profils sociaux pour une réponse rapide.",
        items: {
          email: { label: "E-mail" },
          phone: { label: "Téléphone" },
          location: { label: "Localisation", value: "Algérie & International" },
          workingHours: { label: "Disponibilité", value: "Disponible pour projets" },
        },
        socialBoxLabel: "RETROUVEZ-NOUS SUR LES RÉSEAUX",
      },
      form: {
        label: "DEMANDE DE PROJET",
        title: "Lancer un Projet",
        description:
          "Décrivez votre projet ci-dessous et nos architectes d'ingénierie vous répondront sous 24 heures.",
        labels: {
          name: "Votre Nom",
          email: "Votre Adresse Email",
          subject: "Objet / Domaine",
          message: "Description du Projet",
        },
        placeholders: {
          name: "Jean Dupont",
          email: "jean@exemple.com",
          subject: "Architecture Web, Application Mobile, Intégration IA...",
          message: "Présentez-nous le périmètre de votre projet, vos objectifs et vos délais...",
        },
        button: {
          default: "Envoyer la Demande de Projet",
          sending: "Transmission du Message...",
          success: "Message Délivré ✓",
        },
        status: {
          success: "Votre message a bien été reçu. Notre équipe reviendra vers vous très rapidement !",
          error: "Impossible d'envoyer votre message. Veuillez réessayer.",
        },
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

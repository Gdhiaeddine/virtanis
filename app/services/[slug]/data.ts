export interface ServiceDetail {
  slug: string;
  title: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroAccentWords?: string[];
  heroDescription: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  badges: string[];
  stats: {
    value: string;
    label: string;
    iconName: string;
  }[];
  detailTitle: string;
  detailDescription: string;
  serviceCards: {
    title: string;
    description: string;
    checklist: string[];
    iconName: string;
  }[];
  technologies: {
    name: string;
    iconName: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
    iconName: string;
  }[];
  whyTitle: string;
  whyCards: {
    title: string;
    description: string;
    iconName: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    label: "WEB DEVELOPMENT",
    metaTitle: "Web Development Services",
    metaDescription:
      "Premium web development services by Virtanis. We build modern, responsive, SEO-friendly, secure, and high-performance websites and web applications for businesses.",
    heroTitle: "Modern Websites.\nPowerful Experiences.",
    heroAccentWords: ["Modern Websites."],
    heroDescription:
      "We build modern, responsive, and high-performance websites that help businesses grow, engage their audience, and achieve their goals in the digital world.",
    heroImage: {
      src: "/services/web-development.webp",
      alt: "Web development dashboard interface preview by Virtanis",
    },
    badges: [
      "Performance Optimized",
      "SEO Friendly",
      "Secure & Reliable",
      "Scalable Architecture",
    ],
    stats: [
      { value: "10+", label: "Web Projects Completed", iconName: "Award" },
      { value: "100%", label: "Client Satisfaction", iconName: "Handshake" },
      { value: "Fast", label: "Performance Focused", iconName: "Zap" },
      { value: "Support", label: "24/7 Ongoing Assistance", iconName: "Activity" },
    ],
    detailTitle: "Complete Web Solutions For Your Business",
    detailDescription:
      "From custom websites to complex web applications, we provide end-to-end solutions tailored to your unique business needs.",
    serviceCards: [
      {
        title: "Custom Websites",
        description:
          "We create unique, modern websites that reflect your brand and deliver exceptional user experiences.",
        checklist: [
          "Business Websites",
          "Landing Pages",
          "Portfolio Websites",
          "Corporate Websites",
        ],
        iconName: "Globe",
      },
      {
        title: "Web Applications",
        description:
          "Powerful and scalable web applications built with modern technologies for complex needs.",
        checklist: [
          "SaaS Applications",
          "Dashboard Systems",
          "Admin Panels",
          "Custom Web Apps",
        ],
        iconName: "LayoutDashboard",
      },
      {
        title: "E-Commerce Solutions",
        description:
          "High-converting e-commerce websites that drive sales and grow your online business.",
        checklist: [
          "Online Stores",
          "Payment Integration",
          "Inventory Management",
          "Order Management",
        ],
        iconName: "ShoppingCart",
      },
      {
        title: "CMS Development",
        description:
          "Easy-to-manage websites using powerful CMS platforms tailored to your content needs.",
        checklist: [
          "WordPress Development",
          "Headless CMS",
          "Custom CMS Solutions",
          "Content Optimization",
        ],
        iconName: "Settings",
      },
    ],
    technologies: [
      { name: "Next.js", iconName: "Layers" },
      { name: "React", iconName: "Code2" },
      { name: "TypeScript", iconName: "ShieldCheck" },
      { name: "Tailwind CSS", iconName: "PanelsTopLeft" },
      { name: "Node.js", iconName: "Cpu" },
      { name: "MongoDB", iconName: "Database" },
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        description:
          "We understand your business, goals, and requirements to create the right strategy.",
        iconName: "Search",
      },
      {
        step: "02",
        title: "Plan",
        description:
          "We plan, structure, and design the solution tailored to your needs.",
        iconName: "FileText",
      },
      {
        step: "03",
        title: "Develop",
        description:
          "We build your website with clean code and modern technologies.",
        iconName: "Code2",
      },
      {
        step: "04",
        title: "Test",
        description:
          "We test everything to ensure performance, security, and compatibility.",
        iconName: "ShieldCheck",
      },
      {
        step: "05",
        title: "Launch",
        description:
          "We deploy your website and make it live for your users worldwide.",
        iconName: "Rocket",
      },
    ],
    whyTitle: "Why Businesses Choose Virtanis For Web Development",
    whyCards: [
      {
        title: "Performance Focused",
        description:
          "We build fast, optimized websites that deliver exceptional performance.",
        iconName: "Zap",
      },
      {
        title: "SEO Optimized",
        description:
          "Our websites are built with SEO best practices to rank higher and grow.",
        iconName: "Search",
      },
      {
        title: "Secure & Reliable",
        description:
          "We implement the latest security standards to protect your business.",
        iconName: "Lock",
      },
      {
        title: "Future Ready",
        description:
          "Scalable architecture that grows with your business and technology.",
        iconName: "Layers",
      },
    ],
    ctaTitle: "Ready To Build Your Next Website?",
    ctaDescription:
      "Let's create a modern, high-performance website that takes your business to the next level.",
  },
  "mobile-development": {
    slug: "mobile-development",
    title: "Mobile App Development",
    label: "MOBILE APP DEVELOPMENT",
    metaTitle: "Mobile App Development & Flutter Systems",
    metaDescription:
      "Virtanis builds mobile app development solutions for Android and iOS using Flutter, scalable APIs, secure architecture, responsive UI, and ongoing app maintenance.",
    heroTitle: "Mobile Applications.\nBuilt For Speed, Scale & Users.",
    heroAccentWords: ["Mobile Applications."],
    heroDescription:
      "We design and develop cross-platform mobile applications that feel smooth, look premium, and help businesses launch reliable Android and iOS products faster.",
    heroImage: {
      src: "/services/mobile-development.webp",
      alt: "Mobile app development interface preview by Virtanis",
    },
    badges: [
      "Android & iOS",
      "Flutter Development",
      "App Store Ready",
      "Secure API Integration",
    ],
    stats: [
      { value: "2x", label: "Faster Cross-Platform Delivery", iconName: "Smartphone" },
      { value: "Native", label: "Smooth App Experience", iconName: "Gauge" },
      { value: "Secure", label: "API & Data Protection", iconName: "ShieldCheck" },
      { value: "Care", label: "Maintenance & Updates", iconName: "RefreshCcw" },
    ],
    detailTitle: "End-To-End Mobile App Development Services",
    detailDescription:
      "From first product strategy to release and improvement, we build mobile apps that are easy to use, technically stable, and ready to grow with your business.",
    serviceCards: [
      {
        title: "Flutter App Development",
        description:
          "Cross-platform Flutter apps with clean architecture, reusable components, and consistent performance across Android and iOS.",
        checklist: [
          "Android Applications",
          "iOS Applications",
          "Cross-Platform UI",
          "App Performance Tuning",
        ],
        iconName: "Smartphone",
      },
      {
        title: "Mobile Product Design",
        description:
          "Mobile-first user experience design that keeps flows clear, actions fast, and screens beautiful on every device size.",
        checklist: [
          "User Flows",
          "Wireframes",
          "Interactive Prototypes",
          "Design Systems",
        ],
        iconName: "Palette",
      },
      {
        title: "Backend & API Integration",
        description:
          "Reliable app backends, authentication, payment integrations, notifications, dashboards, and third-party API connections.",
        checklist: [
          "REST APIs",
          "Authentication",
          "Push Notifications",
          "Payment Integration",
        ],
        iconName: "Server",
      },
      {
        title: "Launch & Maintenance",
        description:
          "Store preparation, release support, analytics, bug fixes, and continuous improvements after your mobile app goes live.",
        checklist: [
          "App Store Submission",
          "Google Play Release",
          "Bug Fixes",
          "Feature Updates",
        ],
        iconName: "Rocket",
      },
    ],
    technologies: [
      { name: "Flutter", iconName: "Smartphone" },
      { name: "Dart", iconName: "Code2" },
      { name: "Firebase", iconName: "Flame" },
      { name: "Node.js APIs", iconName: "Server" },
      { name: "Supabase", iconName: "Database" },
      { name: "Figma", iconName: "PenTool" },
    ],
    process: [
      {
        step: "01",
        title: "Define",
        description:
          "We define app goals, target users, core features, and the best roadmap for your mobile product.",
        iconName: "FileSearch",
      },
      {
        step: "02",
        title: "Design",
        description:
          "We create clear mobile flows, polished interfaces, and prototypes that match your brand.",
        iconName: "Palette",
      },
      {
        step: "03",
        title: "Develop",
        description:
          "We build the app with Flutter, connect APIs, and keep the codebase scalable and maintainable.",
        iconName: "Code2",
      },
      {
        step: "04",
        title: "Validate",
        description:
          "We test responsiveness, performance, forms, authentication, and device compatibility.",
        iconName: "BadgeCheck",
      },
      {
        step: "05",
        title: "Publish",
        description:
          "We prepare releases, support store submission, and continue improving the app after launch.",
        iconName: "Rocket",
      },
    ],
    whyTitle: "Why Choose Virtanis For Mobile App Development",
    whyCards: [
      {
        title: "Cross-Platform Efficiency",
        description:
          "One strong codebase helps you reach Android and iOS users without doubling development time.",
        iconName: "Layers",
      },
      {
        title: "User-Centered Screens",
        description:
          "Every screen is built around clarity, fast actions, and a premium mobile experience.",
        iconName: "MousePointerClick",
      },
      {
        title: "Scalable Backends",
        description:
          "Your app connects to secure APIs, databases, and services that can grow with real usage.",
        iconName: "Database",
      },
      {
        title: "Long-Term Support",
        description:
          "We help your app evolve with new features, fixes, analytics, and performance upgrades.",
        iconName: "HeartHandshake",
      },
    ],
    ctaTitle: "Ready To Launch A Mobile App?",
    ctaDescription:
      "Let's turn your idea into a polished Android and iOS application built for real users and measurable business growth.",
  },
  "ai-ml": {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    label: "AI & MACHINE LEARNING",
    metaTitle: "AI & Machine Learning Engineering",
    metaDescription:
      "Virtanis delivers AI and machine learning services including predictive analytics, recommendation systems, data analysis, automation workflows, and intelligent business tools.",
    heroTitle: "Intelligent Systems.\nTransforming Data Into Decisions.",
    heroAccentWords: ["Intelligent Systems."],
    heroDescription:
      "We build AI and machine learning solutions that automate repetitive work, discover patterns, predict outcomes, and help your business move with more confidence.",
    heroImage: {
      src: "/services/ai-ml.webp",
      alt: "AI and machine learning analytics interface preview by Virtanis",
    },
    badges: [
      "Predictive Analytics",
      "AI Automation",
      "Data-Driven Insights",
      "Custom ML Models",
    ],
    stats: [
      { value: "Smart", label: "Business Automation", iconName: "Bot" },
      { value: "Data", label: "Actionable Insights", iconName: "ChartNoAxesCombined" },
      { value: "Custom", label: "Model Development", iconName: "Brain" },
      { value: "Secure", label: "Responsible AI Delivery", iconName: "ShieldCheck" },
    ],
    detailTitle: "AI Solutions Built Around Your Business Goals",
    detailDescription:
      "We connect strategy, data engineering, model development, and software integration to create AI tools that solve practical business problems.",
    serviceCards: [
      {
        title: "Machine Learning Models",
        description:
          "Custom models for classification, prediction, scoring, recommendations, and operational decision support.",
        checklist: [
          "Predictive Models",
          "Classification Systems",
          "Recommendation Engines",
          "Model Evaluation",
        ],
        iconName: "Brain",
      },
      {
        title: "Data Analysis & Dashboards",
        description:
          "Clear analytics systems that transform raw business data into visual insights and measurable opportunities.",
        checklist: [
          "Data Cleaning",
          "Business Intelligence",
          "KPI Dashboards",
          "Insight Reports",
        ],
        iconName: "ChartSpline",
      },
      {
        title: "AI Automation Workflows",
        description:
          "Automated processes that reduce manual effort, speed up operations, and connect your tools intelligently.",
        checklist: [
          "Workflow Automation",
          "Document Processing",
          "Lead Scoring",
          "Internal Assistants",
        ],
        iconName: "Workflow",
      },
      {
        title: "AI Product Integration",
        description:
          "AI features integrated into websites, mobile apps, CRMs, dashboards, and internal business platforms.",
        checklist: [
          "Chatbots",
          "Search Enhancement",
          "AI APIs",
          "Product Intelligence",
        ],
        iconName: "PlugZap",
      },
    ],
    technologies: [
      { name: "Python", iconName: "Code2" },
      { name: "TensorFlow", iconName: "BrainCircuit" },
      { name: "Scikit-learn", iconName: "ChartScatter" },
      { name: "Pandas", iconName: "TableProperties" },
      { name: "OpenAI APIs", iconName: "Sparkles" },
      { name: "FastAPI", iconName: "ServerCog" },
    ],
    process: [
      {
        step: "01",
        title: "Assess",
        description:
          "We identify the business problem, data sources, automation potential, and expected return.",
        iconName: "Search",
      },
      {
        step: "02",
        title: "Prepare Data",
        description:
          "We clean, structure, and validate data so models and dashboards can produce reliable results.",
        iconName: "DatabaseZap",
      },
      {
        step: "03",
        title: "Build Models",
        description:
          "We train, test, and compare models or AI workflows based on accuracy, speed, and usefulness.",
        iconName: "Brain",
      },
      {
        step: "04",
        title: "Integrate",
        description:
          "We connect the AI system to your website, app, dashboard, or internal workflow.",
        iconName: "Plug",
      },
      {
        step: "05",
        title: "Improve",
        description:
          "We monitor outcomes, collect feedback, and refine the system as your data changes.",
        iconName: "RefreshCw",
      },
    ],
    whyTitle: "Why Businesses Choose Virtanis For AI & Machine Learning",
    whyCards: [
      {
        title: "Practical AI First",
        description:
          "We focus on AI systems that reduce work, improve decisions, or create better product experiences.",
        iconName: "Target",
      },
      {
        title: "Data-Aware Engineering",
        description:
          "Models are only as good as the data behind them, so we design the full data flow carefully.",
        iconName: "Database",
      },
      {
        title: "Software Integration",
        description:
          "Your AI does not stay in a notebook. We integrate it into useful products and workflows.",
        iconName: "AppWindow",
      },
      {
        title: "Responsible Delivery",
        description:
          "We build with privacy, security, validation, and clear human oversight in mind.",
        iconName: "ShieldCheck",
      },
    ],
    ctaTitle: "Ready To Add AI To Your Business?",
    ctaDescription:
      "Let's design an AI or machine learning solution that turns your data into automation, insight, and better customer experiences.",
  },
  "ui-ux": {
    slug: "ui-ux",
    title: "UI/UX Design",
    label: "UI/UX DESIGN",
    metaTitle: "UI/UX & Product Design Architecture",
    metaDescription:
      "Virtanis provides UI/UX design services for websites, mobile apps, SaaS dashboards, prototypes, user research, conversion-focused interfaces, and scalable design systems.",
    heroTitle: "Precision UI/UX Design.\nCrafted For Seamless Usability.",
    heroAccentWords: ["Precision UI/UX Design."],
    heroDescription:
      "We design digital experiences that help users move confidently, understand value quickly, and connect your product with a memorable visual identity.",
    heroImage: {
      src: "/services/ui-ux.webp",
      alt: "UI UX design system and product interface preview by Virtanis",
    },
    badges: [
      "User Research",
      "Product Strategy",
      "Interactive Prototypes",
      "Design Systems",
    ],
    stats: [
      { value: "UX", label: "Research-Led Decisions", iconName: "SearchCheck" },
      { value: "UI", label: "Modern Visual Design", iconName: "Palette" },
      { value: "Fast", label: "Clickable Prototypes", iconName: "MousePointerClick" },
      { value: "Scale", label: "Reusable Design Systems", iconName: "Component" },
    ],
    detailTitle: "UI/UX Design Services For Digital Products",
    detailDescription:
      "We combine user experience strategy, clean interface design, brand consistency, and conversion thinking to create products people enjoy using.",
    serviceCards: [
      {
        title: "User Experience Design",
        description:
          "Clear journeys, information architecture, and user flows that make your product easier to understand and complete.",
        checklist: [
          "User Research",
          "Journey Mapping",
          "Information Architecture",
          "UX Audits",
        ],
        iconName: "Route",
      },
      {
        title: "Interface Design",
        description:
          "High-quality visual interfaces for websites, mobile apps, SaaS products, dashboards, and brand experiences.",
        checklist: [
          "Website UI",
          "Mobile App UI",
          "Dashboard Design",
          "Responsive Layouts",
        ],
        iconName: "PanelsTopLeft",
      },
      {
        title: "Prototyping",
        description:
          "Clickable prototypes that help validate flows, explain ideas, and reduce development uncertainty before coding.",
        checklist: [
          "Wireframes",
          "Clickable Prototypes",
          "Interaction Design",
          "Usability Testing",
        ],
        iconName: "MousePointer2",
      },
      {
        title: "Design Systems",
        description:
          "Reusable components, style rules, and interface patterns that keep your product consistent as it grows.",
        checklist: [
          "Component Libraries",
          "Style Guides",
          "UI Tokens",
          "Developer Handoff",
        ],
        iconName: "Component",
      },
    ],
    technologies: [
      { name: "Figma", iconName: "PenTool" },
      { name: "FigJam", iconName: "Workflow" },
      { name: "Design Systems", iconName: "Component" },
      { name: "Prototypes", iconName: "MousePointerClick" },
      { name: "Accessibility", iconName: "Accessibility" },
      { name: "Responsive UI", iconName: "MonitorSmartphone" },
    ],
    process: [
      {
        step: "01",
        title: "Research",
        description:
          "We understand users, competitors, product goals, and friction points before designing screens.",
        iconName: "Search",
      },
      {
        step: "02",
        title: "Structure",
        description:
          "We map journeys, flows, and information architecture so the product feels logical.",
        iconName: "GitBranch",
      },
      {
        step: "03",
        title: "Design",
        description:
          "We craft polished interfaces with strong hierarchy, spacing, typography, and brand alignment.",
        iconName: "Palette",
      },
      {
        step: "04",
        title: "Prototype",
        description:
          "We create interactive prototypes to review behavior, validate decisions, and improve usability.",
        iconName: "MousePointerClick",
      },
      {
        step: "05",
        title: "Handoff",
        description:
          "We prepare assets, components, specs, and guidance so development moves cleanly.",
        iconName: "Send",
      },
    ],
    whyTitle: "Why Choose Virtanis For UI/UX Design",
    whyCards: [
      {
        title: "Business-Aware Design",
        description:
          "The interface is shaped around user needs and your business goals, not decoration alone.",
        iconName: "BriefcaseBusiness",
      },
      {
        title: "Clean Visual Systems",
        description:
          "We create consistent layouts, components, and visual patterns that feel polished everywhere.",
        iconName: "LayoutTemplate",
      },
      {
        title: "Developer-Friendly Handoff",
        description:
          "Designs are organized so developers can build faster with fewer gaps and fewer surprises.",
        iconName: "Code2",
      },
      {
        title: "Conversion Focus",
        description:
          "Every section, form, and call to action is designed to help users take the next step.",
        iconName: "TrendingUp",
      },
    ],
    ctaTitle: "Ready To Improve Your Product Experience?",
    ctaDescription:
      "Let's design a website, mobile app, or dashboard that feels premium, clear, and built around your users.",
  },
  "three-d-interactive": {
    slug: "three-d-interactive",
    title: "3D & Interactive Experiences",
    label: "3D & INTERACTIVE",
    metaTitle: "3D Web Experiences & Interactive Systems",
    metaDescription:
      "Virtanis creates 3D web experiences, Three.js interfaces, WebGL animations, interactive product visualizations, immersive landing pages, and digital brand experiences.",
    heroTitle: "Spatial & 3D Web.\nImmersive Digital Experiences.",
    heroAccentWords: ["Spatial & 3D Web."],
    heroDescription:
      "We create interactive 3D experiences, product visualizations, and motion-rich web interfaces that make brands, products, and ideas feel alive online.",
    heroImage: {
      src: "/services/three-d-interactive.webp",
      alt: "3D interactive web experience preview by Virtanis",
    },
    badges: [
      "Three.js Experiences",
      "WebGL Animation",
      "Product Visualization",
      "Interactive Storytelling",
    ],
    stats: [
      { value: "3D", label: "Real-Time Web Experiences", iconName: "Box" },
      { value: "Motion", label: "Interactive Animation", iconName: "Sparkles" },
      { value: "Visual", label: "Product Storytelling", iconName: "Orbit" },
      { value: "Web", label: "Browser-Ready Delivery", iconName: "Globe2" },
    ],
    detailTitle: "Interactive 3D Experiences For Modern Brands",
    detailDescription:
      "We blend frontend engineering, creative direction, 3D assets, and interaction design to build memorable web experiences that still load and perform well.",
    serviceCards: [
      {
        title: "3D Web Experiences",
        description:
          "Immersive browser-based scenes for landing pages, portfolios, product showcases, and campaign websites.",
        checklist: [
          "Three.js Scenes",
          "WebGL Interfaces",
          "Interactive Landing Pages",
          "Scroll Experiences",
        ],
        iconName: "Box",
      },
      {
        title: "Product Visualization",
        description:
          "Interactive models and product displays that help users inspect features, materials, and configurations online.",
        checklist: [
          "3D Product Viewers",
          "Configurator UI",
          "Feature Highlights",
          "Model Optimization",
        ],
        iconName: "ScanSearch",
      },
      {
        title: "Motion & Microinteractions",
        description:
          "Tasteful animation systems that make interfaces feel responsive, premium, and engaging without sacrificing usability.",
        checklist: [
          "Page Transitions",
          "Scroll Animation",
          "Hover Effects",
          "Motion Systems",
        ],
        iconName: "WandSparkles",
      },
      {
        title: "Interactive Campaigns",
        description:
          "Creative digital experiences for launches, events, campaigns, portfolios, and experiential brand storytelling.",
        checklist: [
          "Launch Pages",
          "Brand Experiences",
          "Interactive Stories",
          "Event Microsites",
        ],
        iconName: "Megaphone",
      },
    ],
    technologies: [
      { name: "Three.js", iconName: "Box" },
      { name: "React Three Fiber", iconName: "Atom" },
      { name: "WebGL", iconName: "Orbit" },
      { name: "GSAP", iconName: "Activity" },
      { name: "Blender Assets", iconName: "Boxes" },
      { name: "Next.js", iconName: "Layers" },
    ],
    process: [
      {
        step: "01",
        title: "Concept",
        description:
          "We define the story, experience goals, visual direction, and interaction model.",
        iconName: "Lightbulb",
      },
      {
        step: "02",
        title: "Prototype",
        description:
          "We create early interactive tests to validate movement, framing, performance, and usability.",
        iconName: "MousePointerClick",
      },
      {
        step: "03",
        title: "Build",
        description:
          "We develop the 3D scene, animations, UI layers, and responsive behavior for the web.",
        iconName: "Code2",
      },
      {
        step: "04",
        title: "Optimize",
        description:
          "We tune models, textures, animation, loading, and rendering for a smooth user experience.",
        iconName: "Gauge",
      },
      {
        step: "05",
        title: "Launch",
        description:
          "We deploy the experience and verify it across browsers, screen sizes, and devices.",
        iconName: "Rocket",
      },
    ],
    whyTitle: "Why Choose Virtanis For 3D & Interactive Experiences",
    whyCards: [
      {
        title: "Creative Engineering",
        description:
          "We connect strong visual ideas with reliable frontend implementation and real browser performance.",
        iconName: "CodeXml",
      },
      {
        title: "Performance Mindset",
        description:
          "3D assets are optimized so the experience feels impressive without becoming heavy or frustrating.",
        iconName: "Gauge",
      },
      {
        title: "Responsive Interaction",
        description:
          "Experiences are planned for desktop and mobile so users can explore comfortably anywhere.",
        iconName: "MonitorSmartphone",
      },
      {
        title: "Memorable Presentation",
        description:
          "Interactive storytelling helps your brand or product stand out from static websites.",
        iconName: "Sparkles",
      },
    ],
    ctaTitle: "Ready To Create An Interactive Experience?",
    ctaDescription:
      "Let's build a 3D website, product visualization, or immersive digital experience that makes your brand impossible to ignore.",
  },
  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    label: "CLOUD & DEVOPS",
    metaTitle: "Cloud Infrastructure & DevOps Solutions",
    metaDescription:
      "Virtanis provides cloud and DevOps services including cloud deployment, CI/CD pipelines, server management, monitoring, performance optimization, and scalable infrastructure.",
    heroTitle: "Cloud & DevOps Infrastructure.\nEngineered For Speed & Reliability.",
    heroAccentWords: ["Cloud & DevOps Infrastructure."],
    heroDescription:
      "We set up cloud infrastructure, deployment pipelines, monitoring, and performance systems so your websites and applications stay stable as they grow.",
    heroImage: {
      src: "/services/cloud-devops.webp",
      alt: "Cloud and DevOps infrastructure dashboard preview by Virtanis",
    },
    badges: [
      "Cloud Deployment",
      "CI/CD Pipelines",
      "Performance Monitoring",
      "Secure Infrastructure",
    ],
    stats: [
      { value: "Auto", label: "Deployment Pipelines", iconName: "GitPullRequestArrow" },
      { value: "24/7", label: "Monitoring Ready", iconName: "Activity" },
      { value: "Scale", label: "Cloud Architecture", iconName: "CloudCog" },
      { value: "Secure", label: "Infrastructure Practices", iconName: "Lock" },
    ],
    detailTitle: "Cloud & DevOps Services That Keep Products Running",
    detailDescription:
      "We help businesses deploy faster, reduce downtime, monitor critical systems, and build infrastructure that supports real users with confidence.",
    serviceCards: [
      {
        title: "Cloud Deployment",
        description:
          "Production-ready deployment for websites, APIs, dashboards, mobile backends, and full-stack applications.",
        checklist: [
          "Vercel Deployment",
          "Cloud Hosting",
          "Environment Setup",
          "Domain Configuration",
        ],
        iconName: "CloudUpload",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Automated build, test, and deployment workflows that make releases faster and more reliable.",
        checklist: [
          "GitHub Actions",
          "Automated Builds",
          "Preview Deployments",
          "Release Workflows",
        ],
        iconName: "GitBranchPlus",
      },
      {
        title: "Server & Database Management",
        description:
          "Backend infrastructure, databases, storage, environment variables, backups, and access management.",
        checklist: [
          "Server Setup",
          "Database Hosting",
          "Backup Strategy",
          "Access Control",
        ],
        iconName: "ServerCog",
      },
      {
        title: "Monitoring & Optimization",
        description:
          "Performance checks, logs, uptime monitoring, security improvements, and scaling recommendations.",
        checklist: [
          "Uptime Monitoring",
          "Error Tracking",
          "Performance Audits",
          "Security Hardening",
        ],
        iconName: "Activity",
      },
    ],
    technologies: [
      { name: "Vercel", iconName: "Triangle" },
      { name: "Docker", iconName: "Container" },
      { name: "GitHub Actions", iconName: "GitBranch" },
      { name: "Linux Servers", iconName: "Terminal" },
      { name: "MongoDB", iconName: "Database" },
      { name: "Monitoring", iconName: "Activity" },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description:
          "We review your current app, hosting, environments, risks, performance, and deployment process.",
        iconName: "ClipboardCheck",
      },
      {
        step: "02",
        title: "Architect",
        description:
          "We design the cloud setup, environments, data services, access rules, and release workflow.",
        iconName: "Network",
      },
      {
        step: "03",
        title: "Automate",
        description:
          "We configure CI/CD pipelines, preview deployments, and repeatable release steps.",
        iconName: "Workflow",
      },
      {
        step: "04",
        title: "Secure",
        description:
          "We harden secrets, permissions, headers, backups, and operational safety practices.",
        iconName: "ShieldCheck",
      },
      {
        step: "05",
        title: "Monitor",
        description:
          "We add monitoring and logs so you can detect issues early and keep improving performance.",
        iconName: "Activity",
      },
    ],
    whyTitle: "Why Choose Virtanis For Cloud & DevOps",
    whyCards: [
      {
        title: "Faster Releases",
        description:
          "Automated pipelines help your team ship updates with less manual work and fewer release mistakes.",
        iconName: "Rocket",
      },
      {
        title: "Stable Systems",
        description:
          "Infrastructure is configured around reliability, observability, backups, and recovery planning.",
        iconName: "ShieldCheck",
      },
      {
        title: "Scalable Foundations",
        description:
          "Your hosting and backend services are prepared for more traffic, features, and users.",
        iconName: "Layers",
      },
      {
        title: "Clear Operations",
        description:
          "Logs, monitoring, and documentation make your production systems easier to understand and maintain.",
        iconName: "FileText",
      },
    ],
    ctaTitle: "Ready To Strengthen Your Infrastructure?",
    ctaDescription:
      "Let's create a cloud and DevOps setup that makes your product faster to deploy, easier to monitor, and ready to scale.",
  },
};

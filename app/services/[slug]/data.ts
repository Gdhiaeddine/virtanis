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

export const SERVICES_DATA_FR: Record<string, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    title: "Développement Web",
    label: "DÉVELOPPEMENT WEB",
    metaTitle: "Services de Développement Web",
    metaDescription:
      "Services de développement web haut de gamme par Virtanis. Nous concevons des sites et applications web modernes, réactifs, optimisés pour le SEO, sécurisés et performants pour les entreprises.",
    heroTitle: "Sites Modernes.\nExpériences Puissantes.",
    heroAccentWords: ["Sites Modernes."],
    heroDescription:
      "Nous concevons des sites web modernes, réactifs et ultra-performants qui propulsent la croissance des entreprises, captivent leur audience et concrétisent leurs ambitions numériques.",
    heroImage: {
      src: "/services/web-development.webp",
      alt: "Aperçu de tableau de bord de développement web par Virtanis",
    },
    badges: [
      "Performance Optimisée",
      "Optimisé pour le SEO",
      "Sécurisé & Fiable",
      "Architecture Évolutive",
    ],
    stats: [
      { value: "10+", label: "Projets Web Réalisés", iconName: "Award" },
      { value: "100%", label: "Satisfaction Client", iconName: "Handshake" },
      { value: "Rapide", label: "Focalisé Performance", iconName: "Zap" },
      { value: "Support", label: "Assistance Continue 24/7", iconName: "Activity" },
    ],
    detailTitle: "Des Solutions Web Complètes Pour Votre Entreprise",
    detailDescription:
      "Des sites vitrines sur mesure aux applications web complexes, nous concevons des solutions de bout en bout adaptées à vos impératifs métiers.",
    serviceCards: [
      {
        title: "Sites Web Sur Mesure",
        description:
          "Nous concevons des sites web uniques et contemporains qui valorisent votre image de marque et garantissent une expérience utilisateur remarquable.",
        checklist: [
          "Sites Entreprise",
          "Pages d'Atterrissage (Landing Pages)",
          "Sites Portfolios",
          "Sites Institutionnels",
        ],
        iconName: "Globe",
      },
      {
        title: "Applications Web",
        description:
          "Des applications web robustes et évolutives développées avec des technologies de pointe pour répondre à des besoins métiers complexes.",
        checklist: [
          "Applications SaaS",
          "Tableaux de Bord",
          "Panneaux d'Administration",
          "Apps Web Métier",
        ],
        iconName: "Layout",
      },
      {
        title: "Plateformes E-Commerce",
        description:
          "Boutiques en ligne optimisées conçues pour convertir les visiteurs en clients fidèles, avec des tunnels d'achat fluides et sécurisés.",
        checklist: [
          "Boutiques en Ligne",
          "Passerelles de Paiement",
          "Gestion des Stocks",
          "Optimisation Conversion",
        ],
        iconName: "ShoppingCart",
      },
      {
        title: "Maintenance & Évolution",
        description:
          "Support technique continu, mises à jour de sécurité et optimisations régulières pour garantir la pérennité de votre plateforme.",
        checklist: [
          "Mises à Jour Régulières",
          "Surveillance Sécurité",
          "Suivi des Performances",
          "Sauvegardes Automatisées",
        ],
        iconName: "Headphones",
      },
    ],
    technologies: [
      { name: "Next.js", iconName: "Triangle" },
      { name: "React", iconName: "Atom" },
      { name: "TypeScript", iconName: "Code2" },
      { name: "Tailwind CSS", iconName: "Sparkles" },
      { name: "Node.js", iconName: "Server" },
      { name: "PostgreSQL", iconName: "Database" },
    ],
    process: [
      {
        step: "01",
        title: "Découverte",
        description:
          "Nous analysons vos besoins, vos cibles et vos objectifs pour définir une feuille de route claire et ambitieuse.",
        iconName: "ClipboardCheck",
      },
      {
        step: "02",
        title: "Design & UI/UX",
        description:
          "Création de maquettes interactives et d'interfaces intuitives centrées sur l'utilisateur et l'image de votre marque.",
        iconName: "Palette",
      },
      {
        step: "03",
        title: "Développement",
        description:
          "Écriture de code propre, maintenable et performant respectant les standards de l'industrie.",
        iconName: "Code2",
      },
      {
        step: "04",
        title: "Tests & Recette",
        description:
          "Vérification rigoureuse des fonctionnalités, de la réactivité, de la compatibilité et de la sécurité.",
        iconName: "ShieldCheck",
      },
      {
        step: "05",
        title: "Déploiement",
        description:
          "Mise en production sécurisée, optimisation du référencement et accompagnement au lancement.",
        iconName: "Rocket",
      },
    ],
    whyTitle: "Pourquoi Choisir Virtanis Pour Votre Projet Web",
    whyCards: [
      {
        title: "Performance Maximale",
        description:
          "Des sites ultra-rapides conçus pour maximiser l'engagement, l'indexation SEO et les conversions.",
        iconName: "Zap",
      },
      {
        title: "Design Sur Mesure",
        description:
          "Des designs contemporains créés sur mesure pour refléter l'identité unique de votre entreprise.",
        iconName: "Palette",
      },
      {
        title: "Architecture Évolutive",
        description:
          "Une base technique solide prête à soutenir la croissance de votre entreprise et l'ajout de fonctionnalités.",
        iconName: "Layers",
      },
      {
        title: "Partenariat Durable",
        description:
          "Un accompagnement proactif à long terme pour faire évoluer votre écosystème digital en toute sérénité.",
        iconName: "Users",
      },
    ],
    ctaTitle: "Prêt À Concrétiser Votre Projet Web ?",
    ctaDescription:
      "Discutons de vos objectifs et bâtissons ensemble une présence numérique performante et mémorable.",
  },
  "mobile-development": {
    slug: "mobile-development",
    title: "Développement Mobile",
    label: "DÉVELOPPEMENT MOBILE",
    metaTitle: "Services de Développement Mobile",
    metaDescription:
      "Services d'ingénierie mobile par Virtanis. Conception et déploiement d'applications iOS et Android performantes, intuitives et évolutives.",
    heroTitle: "Applications Mobiles.\nPerformance & Fluidité.",
    heroAccentWords: ["Applications Mobiles."],
    heroDescription:
      "Nous concevons des applications mobiles iOS et Android performantes et ergonomiques qui allient fluidité native, design soigné et architecture cloud pérenne.",
    heroImage: {
      src: "/services/mobile-development.webp",
      alt: "Aperçu d'application mobile sur smartphone par Virtanis",
    },
    badges: [
      "iOS & Android",
      "Expérience Fluide",
      "Haute Sécurité",
      "Prêt pour les Stores",
    ],
    stats: [
      { value: "Multiplateforme", label: "Architecture Unifiée", iconName: "Smartphone" },
      { value: "60 FPS", label: "Animations Fluides", iconName: "Zap" },
      { value: "App Store", label: "Publication Conforme", iconName: "CheckCircle2" },
      { value: "Sécurisé", label: "Chiffrement & Données", iconName: "ShieldCheck" },
    ],
    detailTitle: "Des Applications Mobiles Conçues Pour L'Excellence",
    detailDescription:
      "Du prototype interactif à la publication sur l'App Store et Google Play, nous développons des applications mobiles fiables, réactives et engageantes.",
    serviceCards: [
      {
        title: "Développement Multiplateforme",
        description:
          "Une base de code unique et performante pour propulser simultanément votre application sur iOS et Android sans compromis.",
        checklist: [
          "React Native & Expo",
          "Interface & Logique Unifiées",
          "Coûts de Maintenance Réduits",
          "Déploiements Accélérés",
        ],
        iconName: "Smartphone",
      },
      {
        title: "Intégration d'APIs & Backend",
        description:
          "Connexion sécurisée à vos systèmes d'information, gestion du mode hors ligne et synchronisation en temps réel.",
        checklist: [
          "APIs REST & GraphQL",
          "Synchronisation Offline",
          "Authentification Sécurisée",
          "Notifications Push",
        ],
        iconName: "Network",
      },
      {
        title: "Publication & Conformité Stores",
        description:
          "Accompagnement rigoureux pour la validation, la soumission et l'approbation sur Apple App Store et Google Play Store.",
        checklist: [
          "Gestion des Comptes Développeur",
          "Conformité des Politiques",
          "Captures & Fiches Produits",
          "Mises à Jour Régulières",
        ],
        iconName: "CheckCircle2",
      },
      {
        title: "Maintenance & Télémétrie",
        description:
          "Surveillance proactive des plantages, analyses des performances et mises à jour continues selon l'évolution des OS.",
        checklist: [
          "Suivi des Crashs en Temps Réel",
          "Optimisation Batterie & RAM",
          "Mises à Jour Majeures OS",
          "Support Technique Réactif",
        ],
        iconName: "Activity",
      },
    ],
    technologies: [
      { name: "React Native", iconName: "Atom" },
      { name: "Expo", iconName: "Smartphone" },
      { name: "TypeScript", iconName: "Code2" },
      { name: "Tailwind CSS", iconName: "Sparkles" },
      { name: "Firebase", iconName: "Flame" },
      { name: "Redux Toolkit", iconName: "Layers" },
    ],
    process: [
      {
        step: "01",
        title: "Spécification Mobile",
        description:
          "Analyse des cas d'usage mobiles, personas, parcours gestuels et contraintes techniques des appareils.",
        iconName: "ClipboardCheck",
      },
      {
        step: "02",
        title: "Prototypage & UI/UX",
        description:
          "Design d'interfaces tactiles intuitives et ergonomiques respectant les directives Human Interface et Material Design.",
        iconName: "Palette",
      },
      {
        step: "03",
        title: "Ingénierie & Intégration",
        description:
          "Développement agile avec tests unitaires, gestion d'état réactive et liaison aux services cloud.",
        iconName: "Code2",
      },
      {
        step: "04",
        title: "Bancs d'Essais Réels",
        description:
          "Tests rigoureux sur un vaste échantillon de smartphones réels pour garantir fluidité et stabilité.",
        iconName: "ShieldCheck",
      },
      {
        step: "05",
        title: "Déploiement & Stores",
        description:
          "Publication validée sur l'App Store et Google Play et suivi attentif des premiers utilisateurs.",
        iconName: "Rocket",
      },
    ],
    whyTitle: "Pourquoi Choisir Virtanis Pour Vos Applications Mobiles",
    whyCards: [
      {
        title: "Fluidité Native",
        description:
          "Des interfaces ultra-réactives animées à 60 images par seconde pour un confort utilisateur irréprochable.",
        iconName: "Zap",
      },
      {
        title: "Mise en Marché Rapide",
        description:
          "Une approche multiplateforme moderne qui réduit drastiquement les délais de commercialisation sur iOS et Android.",
        iconName: "Clock",
      },
      {
        title: "Robustesse Opérationnelle",
        description:
          "Gestion impeccable des réseaux dégradés, du cache local et de la sécurité des données sensibles.",
        iconName: "ShieldCheck",
      },
      {
        title: "Suivi & Évolution",
        description:
          "Un accompagnement constant pour enrichir votre application au fil des retours de votre communauté.",
        iconName: "Users",
      },
    ],
    ctaTitle: "Donnez Vie À Votre Projet Mobile",
    ctaDescription:
      "Discutons de votre vision et créons une application mobile remarquable que vos utilisateurs adopteront au quotidien.",
  },
  "ai-ml": {
    slug: "ai-ml",
    title: "Intelligence Artificielle & ML",
    label: "INTELLIGENCE ARTIFICIELLE & MACHINE LEARNING",
    metaTitle: "Services d'Intelligence Artificielle & Machine Learning",
    metaDescription:
      "Solutions avancées d'intelligence artificielle et de machine learning par Virtanis. Automatisation intelligente, intégration de LLM, pipelines RAG et modèles prédictifs.",
    heroTitle: "Intelligence Artificielle.\nSystèmes Intelligents.",
    heroAccentWords: ["Intelligence Artificielle."],
    heroDescription:
      "Nous intégrons des capacités d'IA générative et de Machine Learning au cœur de vos logiciels pour automatiser vos processus et débloquer de nouveaux leviers de croissance.",
    heroImage: {
      src: "/services/ai-ml.webp",
      alt: "Visualisation de réseau neuronal et modèles d'intelligence artificielle par Virtanis",
    },
    badges: [
      "Intégration LLM & RAG",
      "Modèles Prédictifs",
      "Automatisation Intelligente",
      "Protection des Données",
    ],
    stats: [
      { value: "Sur Mesure", label: "Architectures Dédiées", iconName: "Brain" },
      { value: "99.9%", label: "Disponibilité des APIs", iconName: "Activity" },
      { value: "RAG", label: "Recherche Contextuelle", iconName: "Cpu" },
      { value: "RGPD", label: "Données & Confidentialité", iconName: "ShieldCheck" },
    ],
    detailTitle: "Transformez Vos Données En Avantage Concurrentiel",
    detailDescription:
      "De l'intégration d'assistants conversationnels intelligents aux pipelines de données prédictifs, nous concevons des systèmes IA éthiques, fiables et à fort impact.",
    serviceCards: [
      {
        title: "Intégration de LLM & Assistants IA",
        description:
          "Déploiement d'assistants intelligents sur mesure connectés à votre base de connaissances pour décupler la productivité de vos équipes.",
        checklist: [
          "Agents Conversationnels Métier",
          "Recherche RAG & Embeddings",
          "Synthèse & Analyse Automatisée",
          "Intégration Multi-Modèles",
        ],
        iconName: "Bot",
      },
      {
        title: "Pipelines de Machine Learning",
        description:
          "Conception et entraînement de modèles prédictifs adaptés à vos données pour anticiper les tendances et optimiser vos décisions.",
        checklist: [
          "Modèles de Classification & Régression",
          "Détection d'Anomalies",
          "Systèmes de Recommandation",
          "Nettoyage & Préparation des Données",
        ],
        iconName: "Cpu",
      },
      {
        title: "Automatisation Cognitive des Processus",
        description:
          "Remplacement des tâches manuelles répétitives par des flux de travail autonomes pilotés par l'intelligence artificielle.",
        checklist: [
          "Traitement Automatique de Documents",
          "Extraction Structurée de Données",
          "Workflows Décisionnels",
          "Connexions ERP & CRM",
        ],
        iconName: "Workflow",
      },
      {
        title: "Évaluation & Sécurisation IA",
        description:
          "Audit rigoureux de la précision des modèles, prévention des hallucinations, contrôle des biais et conformité réglementaire.",
        checklist: [
          "Garde-fous & Filtrage des Invites",
          "Mesure des Hallucinations",
          "Isolation des Données Privées",
          "Monitoring des Coûts API",
        ],
        iconName: "ShieldCheck",
      },
    ],
    technologies: [
      { name: "Python", iconName: "Terminal" },
      { name: "PyTorch", iconName: "Cpu" },
      { name: "OpenAI API", iconName: "Bot" },
      { name: "LangChain", iconName: "Network" },
      { name: "Hugging Face", iconName: "Sparkles" },
      { name: "Vector Databases", iconName: "Database" },
    ],
    process: [
      {
        step: "01",
        title: "Cadrage & Cas d'Usage",
        description:
          "Identification des opportunités d'automatisation à plus forte valeur ajoutée pour votre organisation.",
        iconName: "ClipboardCheck",
      },
      {
        step: "02",
        title: "Exploration des Données",
        description:
          "Audit, nettoyage et vectorisation de vos données pour garantir la fiabilité des réponses et prédictions.",
        iconName: "Database",
      },
      {
        step: "03",
        title: "Architecture & Prototypage",
        description:
          "Développement d'un POC ciblé pour valider la précision, la latence et la viabilité économique.",
        iconName: "Brain",
      },
      {
        step: "04",
        title: "Industrialisation Sécurisée",
        description:
          "Mise en place de garde-fous, gestion des clés, limitation de débit et monitoring continu.",
        iconName: "ShieldCheck",
      },
      {
        step: "05",
        title: "Déploiement & Apprentissage",
        description:
          "Mise en service, intégration utilisateur et ajustement continu des invites et modèles.",
        iconName: "Rocket",
      },
    ],
    whyTitle: "Pourquoi Choisir Virtanis Pour Vos Projets IA",
    whyCards: [
      {
        title: "Approche Pragmatique",
        description:
          "Nous concevons des solutions d'IA utiles et mesurables, résolvant de véritables problématiques d'entreprise.",
        iconName: "Target",
      },
      {
        title: "Confidentialité Absolue",
        description:
          "Vos données confidentielles et votre propriété intellectuelle ne sont jamais réutilisées pour entraîner des modèles publics.",
        iconName: "Lock",
      },
      {
        title: "Maîtrise des Coûts",
        description:
          "Optimisation intelligente du routage des requêtes pour préserver vos budgets de calcul.",
        iconName: "Zap",
      },
      {
        title: "Intégration Transparente",
        description:
          "Des APIs modernes qui se greffent harmonieusement sur votre pile technologique existante.",
        iconName: "Layers",
      },
    ],
    ctaTitle: "Prêt À Accélérer Avec L'Intelligence Artificielle ?",
    ctaDescription:
      "Explorons comment l'IA et le Machine Learning peuvent transformer vos opérations et créer une valeur durable.",
  },
  "ui-ux": {
    slug: "ui-ux",
    title: "Design UI/UX",
    label: "DESIGN UI/UX",
    metaTitle: "Services de Design UI/UX",
    metaDescription:
      "Conception d'interfaces et design d'expérience utilisateur par Virtanis. Design systems, wireframes, prototypes interactifs et audits d'ergonomie.",
    heroTitle: "Design Épuré.\nExpériences Mémorables.",
    heroAccentWords: ["Design Épuré."],
    heroDescription:
      "Nous façonnons des interfaces numériques élégantes, intuitives et centrées sur l'utilisateur, alliant rigueur esthétique et efficacité commerciale.",
    heroImage: {
      src: "/services/ui-ux.webp",
      alt: "Maquettes d'interface utilisateur et design system par Virtanis",
    },
    badges: [
      "Design Systems",
      "Prototypage Figma",
      "Accessibilité WCAG",
      "Approche Centrée Utilisateur",
    ],
    stats: [
      { value: "Sur Mesure", label: "Systèmes de Design", iconName: "Palette" },
      { value: "WCAG", label: "Accessibilité Web", iconName: "Eye" },
      { value: "Figma", label: "Prototypes Haute Fidélité", iconName: "Layout" },
      { value: "Testé", label: "Validation Utilisateur", iconName: "CheckCircle2" },
    ],
    detailTitle: "L'Union Parfaite Entre Esthétique Et Fonctionnalité",
    detailDescription:
      "De la recherche utilisateur approfondie à la livraison d'un système de composants complet, nous concevons des produits digitaux désirables et faciles à adopter.",
    serviceCards: [
      {
        title: "Recherche Utilisateur & Stratégie",
        description:
          "Compréhension fine des motivations, des freins et des attentes de vos utilisateurs pour orienter chaque décision de design.",
        checklist: [
          "Interviews Utilisateurs",
          "Cartographie des Parcours",
          "Personas Détaillés",
          "Analyses Concurrentielles",
        ],
        iconName: "Search",
      },
      {
        title: "Design d'Interface (UI)",
        description:
          "Création d'identités visuelles digitales modernes, de typographies équilibrées et de grilles de mise en page harmonieuses.",
        checklist: [
          "Maquettes Haute Fidélité",
          "Systèmes Typographiques & Couleurs",
          "Design Responsive",
          "Iconographie Sur Mesure",
        ],
        iconName: "Palette",
      },
      {
        title: "Design Systems & Composants",
        description:
          "Conception de bibliothèques modulaires documentées garantissant une cohérence absolue et accélérant le développement.",
        checklist: [
          "Bibliothèques de Tokens Design",
          "Composants Réutilisables",
          "Directives d'Accessibilité",
          "Documentation pour Développeurs",
        ],
        iconName: "Layers",
      },
      {
        title: "Prototypage & Tests d'Usabilité",
        description:
          "Modélisation de prototypes dynamiques pour valider les flux de navigation auprès d'utilisateurs réels avant tout codage.",
        checklist: [
          "Prototypes Interactifs Figma",
          "Micro-Interactions",
          "Sessions de Tests Utilisateurs",
          "Itérations & Optimisations",
        ],
        iconName: "Smartphone",
      },
    ],
    technologies: [
      { name: "Figma", iconName: "Palette" },
      { name: "Design Tokens", iconName: "Sparkles" },
      { name: "Tailwind CSS", iconName: "Code2" },
      { name: "Storybook", iconName: "BookOpen" },
      { name: "Framer Motion", iconName: "Wand2" },
      { name: "Directives WCAG", iconName: "ShieldCheck" },
    ],
    process: [
      {
        step: "01",
        title: "Immersion & Audit",
        description:
          "Analyse de votre écosystème, étude des retours utilisateurs et identification des points de friction majeurs.",
        iconName: "ClipboardCheck",
      },
      {
        step: "02",
        title: "Architecture de l'Information",
        description:
          "Structuration claire de la navigation, des arborescences de contenu et des parcours clés.",
        iconName: "Network",
      },
      {
        step: "03",
        title: "Wireframing & Maquettes",
        description:
          "Conception d'écrans basse puis haute fidélité incarnant la vision moderne de votre marque.",
        iconName: "Layout",
      },
      {
        step: "04",
        title: "Systématisation & Design System",
        description:
          "Mise en place de la nomenclature, des variables de style et des états de composants.",
        iconName: "Layers",
      },
      {
        step: "05",
        title: "Passation Technique",
        description:
          "Documentation exhaustive et collaboration étroite avec les ingénieurs pour une intégration pixel-perfect.",
        iconName: "Rocket",
      },
    ],
    whyTitle: "Pourquoi Choisir Virtanis Pour Votre Design UI/UX",
    whyCards: [
      {
        title: "Impact Visuel Immédiat",
        description:
          "Des designs distinctifs et soignés qui démarquent instantanément votre marque sur votre marché.",
        iconName: "Sparkles",
      },
      {
        title: "Orientation Conversion",
        description:
          "Chaque parcours est optimisé pour réduire l'effort cognitif et inciter à l'action.",
        iconName: "TrendingUp",
      },
      {
        title: "Alignement Dev Sans Friction",
        description:
          "Nos fichiers de design sont structurés en composants stricts, réduisant de moitié le temps d'intégration.",
        iconName: "Code2",
      },
      {
        title: "Inclusion & Accessibilité",
        description:
          "Des interfaces accessibles à tous, conformes aux meilleurs standards internationaux de contraste et de lisibilité.",
        iconName: "CheckCircle2",
      },
    ],
    ctaTitle: "Sublimez L'Expérience De Vos Utilisateurs",
    ctaDescription:
      "Co-créons une interface numérique mémorable qui renforce la confiance de vos clients et propulse vos conversions.",
  },
  "three-d-interactive": {
    slug: "three-d-interactive",
    title: "3D & Expériences Interactives",
    label: "3D & EXPÉRIENCES INTERACTIVES",
    metaTitle: "Expériences Web 3D & Interactives",
    metaDescription:
      "Développement d'expériences 3D immersives sur le web par Virtanis. Visualisations de produits, shaders WebGL, Three.js et animations interactives captivantes.",
    heroTitle: "Expériences 3D.\nImmersion & Réalisme.",
    heroAccentWords: ["Expériences 3D."],
    heroDescription:
      "Nous concevons des univers visuels tridimensionnels et des animations WebGL interactives qui captivent l'attention et subliment vos produits.",
    heroImage: {
      src: "/services/three-d-interactive.webp",
      alt: "Rendu 3D interactif et shaders WebGL par Virtanis",
    },
    badges: [
      "Three.js & WebGL",
      "Visualisation de Produits",
      "Performance 60 FPS",
      "Compatibilité Mobile",
    ],
    stats: [
      { value: "Temps Réel", label: "Rendu Graphique Web", iconName: "Box" },
      { value: "WebGL", label: "Shaders & Particules", iconName: "Sparkles" },
      { value: "Optimisé", label: "Chargement Rapide", iconName: "Zap" },
      { value: "Tous Écrans", label: "Support Tactile & Souris", iconName: "Smartphone" },
    ],
    detailTitle: "Repoussez Les Limites Du Web Avec La 3D Interactive",
    detailDescription:
      "De la mise en scène interactive de produits à des mondes immersifs explorables directement dans le navigateur sans plugin requis.",
    serviceCards: [
      {
        title: "Configurateurs & Rendu Produit",
        description:
          "Permettez à vos clients d'inspecter, personnaliser et manipuler vos produits en 3D temps réel sous tous les angles.",
        checklist: [
          "Visualisation à 360 Degrés",
          "Personnalisation de Matériaux",
          "Éclairage Réaliste PBR",
          "Aperçus Temps Réel Fluides",
        ],
        iconName: "Box",
      },
      {
        title: "Sites Immersifs & Scrollytelling",
        description:
          "Des récits numériques interactifs où le défilement de l'utilisateur anime des scènes 3D et des effets cinématographiques.",
        checklist: [
          "Transitions de Caméra Dynamiques",
          "Chorégraphie au Défilement",
          "Effets de Shaders Sur Mesure",
          "Immersion Sensorielle",
        ],
        iconName: "Compass",
      },
      {
        title: "Optimisation des Actifs 3D",
        description:
          "Compression des maillages, optimisation des textures et techniques de LOD pour garantir un affichage instantané et fluide.",
        checklist: [
          "Compression glTF & Draco",
          "Atlas de Textures Optimisés",
          "Gestion Rigoureuse de la Mémoire",
          "Fallback Dégradé pour Mobiles",
        ],
        iconName: "Zap",
      },
      {
        title: "Intégration d'Expériences WebXR",
        description:
          "Préparation de vos scènes pour la réalité augmentée et virtuelle accessible depuis les navigateurs et smartphones récents.",
        checklist: [
          "Visualisation Réalité Augmentée",
          "Compatibilité WebXR",
          "Contrôles Spatiaux",
          "Expériences Immersives Légères",
        ],
        iconName: "Eye",
      },
    ],
    technologies: [
      { name: "Three.js", iconName: "Box" },
      { name: "React Three Fiber", iconName: "Atom" },
      { name: "WebGL / GLSL", iconName: "Sparkles" },
      { name: "Blender", iconName: "Palette" },
      { name: "GSAP", iconName: "Wand2" },
      { name: "glTF / Draco", iconName: "Layers" },
    ],
    process: [
      {
        step: "01",
        title: "Concept & Scénarisation",
        description:
          "Élaboration de l'intention visuelle, des storyboards d'animation et de la direction artistique interactive.",
        iconName: "ClipboardCheck",
      },
      {
        step: "02",
        title: "Modélisation & Optimisation 3D",
        description:
          "Création ou nettoyage des modèles 3D, des textures PBR et réduction de la complexité polygonale.",
        iconName: "Box",
      },
      {
        step: "03",
        title: "Développement WebGL",
        description:
          "Programmation des scènes sous Three.js, des shaders personnalisés et de l'interactivité utilisateur.",
        iconName: "Code2",
      },
      {
        step: "04",
        title: "Optimisation des Performances",
        description:
          "Profilage du framerate (FPS), allègement des draw calls et tests sur configurations variées.",
        iconName: "ShieldCheck",
      },
      {
        step: "05",
        title: "Intégration & Déploiement",
        description:
          "Connexion harmonieuse au reste de votre application web et lancement public.",
        iconName: "Rocket",
      },
    ],
    whyTitle: "Pourquoi Choisir Virtanis Pour La 3D Interactive",
    whyCards: [
      {
        title: "Rétention Visiteur Record",
        description:
          "L'interactivité 3D multiplie par trois le temps moyen passé par vos visiteurs sur vos pages.",
        iconName: "Clock",
      },
      {
        title: "Excellence Technique",
        description:
          "Nous combinons créativité artistique et optimisation algorithmique pointue pour préserver la fluidité.",
        iconName: "Zap",
      },
      {
        title: "Zéro Dépendance Lourde",
        description:
          "Tout fonctionne nativement dans le navigateur de l'utilisateur sans téléchargement d'application.",
        iconName: "Globe",
      },
      {
        title: "Impact de Marque Inoubliable",
        description:
          "Une différenciation radicale face à vos concurrents qui ancre durablement votre image de leader technologique.",
        iconName: "Sparkles",
      },
    ],
    ctaTitle: "Prêt À Éblouir Votre Audience Avec La 3D ?",
    ctaDescription:
      "Imaginons une expérience tridimensionnelle interactive qui donnera une dimension spectaculaire à votre projet.",
  },
  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    label: "CLOUD & DEVOPS",
    metaTitle: "Services Cloud & DevOps",
    metaDescription:
      "Services d'infrastructure cloud et DevOps par Virtanis. Automatisation CI/CD, conteneurisation Docker, hébergement haute disponibilité et sécurité opérationnelle.",
    heroTitle: "Infrastructures Cloud.\nStabilité & Déploiement Continu.",
    heroAccentWords: ["Infrastructures Cloud."],
    heroDescription:
      "Nous concevons des infrastructures cloud sécurisées, évolutives et automatisées pour garantir une disponibilité maximale et accélérer vos cycles de livraison.",
    heroImage: {
      src: "/services/cloud-devops.webp",
      alt: "Architecture d'infrastructure cloud et déploiement continu par Virtanis",
    },
    badges: [
      "Pipelines CI/CD",
      "Conteneurs Docker",
      "Haute Disponibilité",
      "Sécurité & Conformité",
    ],
    stats: [
      { value: "99.9%", label: "Taux de Disponibilité", iconName: "ShieldCheck" },
      { value: "Zéro Panne", label: "Déploiements Transparents", iconName: "Rocket" },
      { value: "Automatisé", label: "Pipelines de Recette & Prod", iconName: "Workflow" },
      { value: "24/7", label: "Monitoring & Alertes", iconName: "Activity" },
    ],
    detailTitle: "Une Infrastructure Moderne Pour Accélérer Votre Ingénierie",
    detailDescription:
      "De la configuration de conteneurs à la mise en œuvre de pipelines automatisés de test et de déploiement, nous sécurisons vos opérations logicielles.",
    serviceCards: [
      {
        title: "Pipelines CI/CD & Déploiements Continus",
        description:
          "Automatisation intégrale de vos tests, builds et mises en production pour livrer sereinement plusieurs fois par jour.",
        checklist: [
          "GitHub Actions & GitLab CI",
          "Environnements de Prévisualisation",
          "Rollback Instantané Automatisé",
          "Tests de Non-Régression",
        ],
        iconName: "Workflow",
      },
      {
        title: "Conteneurisation & Orchestration",
        description:
          "Standardisation de vos environnements de développement et de production avec Docker pour éliminer les bugs de configuration.",
        checklist: [
          "Images Docker Optimisées & Légères",
          "Gestion Multi-Environnements",
          "Isolation Sécurisée des Services",
          "Migration vers le Cloud Facilitée",
        ],
        iconName: "Layers",
      },
      {
        title: "Hébergement Cloud & Architecture Serverless",
        description:
          "Sélection et paramétrage des meilleures plateformes cloud pour concilier performance, élasticité et contrôle des coûts.",
        checklist: [
          "Déploiements Vercel & AWS",
          "Bases de Données Gérées",
          "Réseaux CDN Mondiaux",
          "Dimensionnement Automatique (Auto-scaling)",
        ],
        iconName: "Cloud",
      },
      {
        title: "Supervision, Alertes & Sécurité",
        description:
          "Surveillance proactive de la disponibilité, centralisation des journaux d'erreurs et renforcement des protocoles de sécurité.",
        checklist: [
          "Monitoring de Disponibilité",
          "Traçabilité des Erreurs",
          "Audits de Performance",
          "Durcissement de Sécurité & Clés",
        ],
        iconName: "Activity",
      },
    ],
    technologies: [
      { name: "Vercel", iconName: "Triangle" },
      { name: "Docker", iconName: "Container" },
      { name: "GitHub Actions", iconName: "GitBranch" },
      { name: "Serveurs Linux", iconName: "Terminal" },
      { name: "MongoDB", iconName: "Database" },
      { name: "Monitoring", iconName: "Activity" },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Diagnostic",
        description:
          "Analyse approfondie de votre application, hébergement, environnements, risques et processus de livraison.",
        iconName: "ClipboardCheck",
      },
      {
        step: "02",
        title: "Architecture Cloud",
        description:
          "Conception d'une infrastructure moderne, des règles d'accès, de la topologie réseau et des sauvegardes.",
        iconName: "Network",
      },
      {
        step: "03",
        title: "Automatisation CI/CD",
        description:
          "Configuration des pipelines d'intégration continue, des prévisualisations et des étapes de recette.",
        iconName: "Workflow",
      },
      {
        step: "04",
        title: "Durcissement & Sécurité",
        description:
          "Sécurisation des variables secrètes, droits stricts, en-têtes HTTP et plans de reprise d'activité.",
        iconName: "ShieldCheck",
      },
      {
        step: "05",
        title: "Supervision & Observabilité",
        description:
          "Déploiement des tableaux de bord de surveillance et alertes pour détecter et résoudre tout incident.",
        iconName: "Activity",
      },
    ],
    whyTitle: "Pourquoi Choisir Virtanis Pour Votre Cloud & DevOps",
    whyCards: [
      {
        title: "Déploiements Accélérés",
        description:
          "Les pipelines automatisés libèrent vos développeurs des tâches manuelles et préviennent les erreurs humaines.",
        iconName: "Rocket",
      },
      {
        title: "Disponibilité Sans Faille",
        description:
          "Infrastructures résilientes conçues avec sauvegardes automatiques, redondance et observabilité complète.",
        iconName: "ShieldCheck",
      },
      {
        title: "Fondations Évolutives",
        description:
          "Vos serveurs et bases de données s'adaptent sans heurt aux pics de trafic et à l'afflux de nouveaux utilisateurs.",
        iconName: "Layers",
      },
      {
        title: "Exploitation Transparente",
        description:
          "Des métriques limpides et une documentation exhaustive rendent vos systèmes faciles à maintenir.",
        iconName: "FileText",
      },
    ],
    ctaTitle: "Prêt À Consolider Votre Infrastructure ?",
    ctaDescription:
      "Bâtissons une architecture cloud et des processus DevOps qui accélèrent vos déploiements et garantissent une sérénité totale.",
  },
};

export function getServiceData(slug: string, locale: "en" | "fr" = "en"): ServiceDetail | undefined {
  if (locale === "fr") {
    return SERVICES_DATA_FR[slug] || SERVICES_DATA[slug];
  }
  return SERVICES_DATA[slug];
}

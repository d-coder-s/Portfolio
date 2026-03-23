export interface ServiceDetail {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  imgSrc: string;
  tags: string[];
  accent: string;
  stickyText: string;
  stickyBg: string;
  heroLabel: string;
  overview: string;
  highlights: {
    icon: string;
    title: string;
    body: string;
    featured?: boolean;
  }[];
  approach: { step: string; title: string; desc: string }[];
  stack: { category: string; items: string[] }[];
  faqs: { q: string; a: string }[];
}

const SERVICES_DATA: ServiceDetail[] = [
  /* ── 01 WEB DEVELOPMENT ─────────────────────────────────── */
  {
    slug: "web-development",
    num: "01",
    title: "Web Development",
    tagline: "fast. secure. built to convert.",
    description:
      "Custom, high-performance websites and web applications built for speed, security, and results. We specialise in React, Next.js, and Node.js — delivering SEO-ready, scalable web solutions for startups and businesses across India and globally.",
    imgSrc: "/figma/webb.webp",
    tags: ["React", "Next.js", "Node.js", "TypeScript", "SQL"],
    accent: "#f59e0b",
    stickyText: "avg load time\nunder 1.2s ⚡",
    stickyBg: "bg-dc-sticky-yellow",
    heroLabel: "// 01 — custom web development india",
    overview:
      "We build websites that don't just look good — they perform and convert. Every project starts with understanding your users, your business goals, and the metrics that matter. Then we build: fast, accessible, SEO-optimised, and conversion-focused. No templates, no bloated frameworks — just clean, maintainable code that scales with your business.",
    highlights: [
      {
        icon: "⚡",
        title: "Performance First",
        body: "Core Web Vitals optimised. Sub-1.5s load times as standard. We don't ship slow websites.",
      },
      {
        icon: "🔒",
        title: "Security Built-in",
        body: "HTTPS, input sanitisation, auth best practices, and regular dependency audits on every project.",
      },
      {
        icon: "📱",
        title: "Fully Responsive",
        body: "Pixel-perfect across all screen sizes — mobile, tablet, desktop, and beyond.",
      },
      {
        icon: "🔍",
        title: "SEO Optimised",
        body: "Server-side rendering, semantic HTML, structured data, and meta optimisation built in from day one.",
      },
      {
        icon: "♿",
        title: "WCAG Accessible",
        body: "Keyboard navigable, screen-reader friendly, and contrast-compliant by default.",
      },
      {
        icon: "🔧",
        title: "Easy to Maintain",
        body: "Clean code, thorough documentation, and full handoff support so your team can own it.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Discovery & Strategy",
        desc: "We audit your existing setup, research your users, and map out information architecture before writing a single line of code.",
      },
      {
        step: "02",
        title: "Design & Prototype",
        desc: "Figma wireframes → high-fidelity mockups → interactive prototype. You approve every screen before build begins.",
      },
      {
        step: "03",
        title: "Development",
        desc: "Agile sprints, weekly demos, staging environment. You see real progress every week — no black-box builds.",
      },
      {
        step: "04",
        title: "QA & Optimisation",
        desc: "Cross-browser testing, Lighthouse audits, performance tuning, and full accessibility checks.",
      },
      {
        step: "05",
        title: "Launch & Handoff",
        desc: "Deployment, DNS config, CMS training, and full documentation. We stay on call post-launch.",
      },
    ],
    stack: [
      { category: "Frontend",  items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "Backend",   items: ["Node.js", "Express", "REST APIs", "GraphQL", "Prisma"] },
      { category: "Database",  items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
      { category: "DevOps",    items: ["Vercel", "Netlify", "AWS", "Docker", "GitHub Actions"] },
    ],
    faqs: [
      {
        q: "How long does a custom website development project take?",
        a: "A landing page takes 1–2 weeks. A full web app typically 6–12 weeks. We give you a realistic estimate after the discovery call — no padded timelines.",
      },
      {
        q: "Can you work with our existing website or codebase?",
        a: "Yes. We audit, refactor, and extend existing projects. We'll tell you honestly if something needs a rewrite.",
      },
      {
        q: "Will my website rank on Google?",
        a: "We build with SEO best practices from the start — SSR, semantic markup, structured data, and Core Web Vitals. Rankings also depend on your content strategy.",
      },
      {
        q: "Do you offer CMS integration?",
        a: "Yes — Contentful, Sanity, Strapi, WordPress, or a custom admin panel. Whatever fits your team's workflow.",
      },
    ],
  },

  /* ── 02 APP DEVELOPMENT ─────────────────────────────────── */
  {
    slug: "app-development",
    num: "02",
    title: "App Development",
    tagline: "iOS & Android. one codebase. zero compromise.",
    description:
      "High-performance cross-platform mobile apps for iOS and Android — built with React Native and Flutter. From ideation and UI/UX design to App Store deployment and post-launch support, we deliver mobile apps that users love and businesses rely on.",
    imgSrc: "/figma/app.webp",
    tags: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
    accent: "#06b6d4",
    stickyText: "cross-platform\nby default ✦",
    stickyBg: "bg-dc-sticky-blue",
    heroLabel: "// 02 — mobile app development india",
    overview:
      "We build mobile apps that users actually want to open. Cross-platform by default — one codebase, two stores, zero compromise on performance. We handle everything from UX design and prototyping to App Store submission and post-launch monitoring. Affordable mobile app development without cutting corners.",
    highlights: [
      {
        icon: "📱",
        title: "Cross-Platform Apps",
        body: "React Native & Flutter — one codebase for iOS and Android, without sacrificing native performance or UX.",
      },
      {
        icon: "🚀",
        title: "App Store Ready",
        body: "We handle full submissions, review responses, and metadata for both the App Store and Google Play.",
      },
      {
        icon: "🔔",
        title: "Push Notifications",
        body: "FCM, APNs, and in-app messaging integrated and tested across both platforms.",
      },
      {
        icon: "🔐",
        title: "Secure Authentication",
        body: "OAuth2, biometric login, JWT, and secure token storage — all implemented correctly.",
      },
      {
        icon: "📡",
        title: "Offline Support",
        body: "Local data sync, background tasks, and graceful degradation when connectivity drops.",
      },
      {
        icon: "📊",
        title: "Analytics Built-in",
        body: "Firebase Analytics, crash reporting, and custom event tracking from day one.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Concept & Scope",
        desc: "We map user journeys, define MVP features, and establish platform requirements before any design work.",
      },
      {
        step: "02",
        title: "UI/UX Design",
        desc: "Platform-native design patterns — Material Design for Android, Human Interface for iOS — prototyped in Figma.",
      },
      {
        step: "03",
        title: "Development Sprints",
        desc: "Two-week sprints with live TestFlight/internal builds. You test on a real device every fortnight.",
      },
      {
        step: "04",
        title: "Testing & QA",
        desc: "Device fragmentation testing, performance profiling, battery usage, and network condition simulation.",
      },
      {
        step: "05",
        title: "Launch & Support",
        desc: "Store submission, ASO optimisation, and 30-day post-launch monitoring and support.",
      },
    ],
    stack: [
      { category: "Frameworks",    items: ["React Native", "Flutter", "Expo"] },
      { category: "Backend",       items: ["Node.js", "Firebase", "Supabase", "REST APIs"] },
      { category: "Auth",          items: ["Firebase Auth", "OAuth2", "Biometrics"] },
      { category: "Distribution",  items: ["App Store", "Google Play", "TestFlight", "Fastlane"] },
    ],
    faqs: [
      {
        q: "Should I build a native or cross-platform mobile app?",
        a: "For most startups and businesses, cross-platform delivers 90% of native performance at 60% of the cost. We'll advise based on your specific use case and budget.",
      },
      {
        q: "How do App Store and Google Play submissions work?",
        a: "We handle the full submission process — screenshots, metadata, review responses — for both stores. No extra charge.",
      },
      {
        q: "Can you update or improve our existing mobile app?",
        a: "Yes. We work with existing React Native and Flutter codebases. We'll audit the code before quoting.",
      },
      {
        q: "Do you build the backend for the app too?",
        a: "Yes — REST APIs, Firebase, Supabase — whatever fits your scale and budget. Full-stack mobile development.",
      },
    ],
  },

  /* ── 03 UI/UX DESIGN ────────────────────────────────────── */
  {
    slug: "ui-ux-design",
    num: "03",
    title: "UI/UX Design",
    tagline: "design that converts. not just looks good.",
    description:
      "User-centred UI/UX design that balances aesthetics with measurable functionality. We create intuitive interfaces, scalable design systems, and interactive Figma prototypes — ensuring every touchpoint is purposeful, accessible, and aligned with your brand and business goals.",
    imgSrc: "/figma/uiux.jpg",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
    accent: "#ec4899",
    stickyText: "users first.\nalways. 🎨",
    stickyBg: "bg-dc-sticky-pink",
    heroLabel: "// 03 — ui/ux design agency india",
    overview:
      "Good design is invisible. Great design makes people stay and convert. We obsess over the details most designers overlook — micro-interactions, loading states, empty states, error messages. Every pixel has a purpose. We design with real users in mind, backed by research and validated through usability testing before a single line of code is written.",
    highlights: [
      {
        icon: "🔬",
        title: "Research-Backed Design",
        body: "User interviews, competitor analysis, and heatmap reviews before a single frame is designed.",
      },
      {
        icon: "🎨",
        title: "Scalable Design Systems",
        body: "Component libraries and design tokens that keep your product consistent across every screen and platform.",
      },
      {
        icon: "🖱️",
        title: "Micro-interactions",
        body: "Transitions, hover states, loading animations — the details that turn UI into a genuine experience.",
      },
      {
        icon: "♿",
        title: "Accessible by Default",
        body: "WCAG 2.1 AA compliant. Colour contrast, focus states, and screen reader labels included.",
      },
      {
        icon: "📐",
        title: "Dev-Ready Figma Files",
        body: "Auto-layout, design tokens, and annotated specs so developer handoff is seamless — no back and forth.",
      },
      {
        icon: "🧪",
        title: "Usability Testing",
        body: "Prototype → test with real users → iterate. We validate designs before build begins.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Discovery & Research",
        desc: "User personas, job stories, competitive benchmarking, and analytics review to ground all design decisions.",
      },
      {
        step: "02",
        title: "Information Architecture",
        desc: "Sitemaps, user flows, and content hierarchy defined before any visual design work begins.",
      },
      {
        step: "03",
        title: "Wireframes",
        desc: "Low-fidelity wireframes for every key screen. Fast iteration at low cost, no wasted design time.",
      },
      {
        step: "04",
        title: "Visual Design",
        desc: "High-fidelity mockups with your brand identity — typography, colour, iconography, and spacing.",
      },
      {
        step: "05",
        title: "Prototype & Test",
        desc: "Interactive Figma prototype → usability testing with real users → final design refinement.",
      },
    ],
    stack: [
      { category: "Design Tools", items: ["Figma", "FigJam", "Principle", "Lottie"] },
      { category: "Research",     items: ["Hotjar", "Maze", "UserTesting", "Notion"] },
      { category: "Handoff",      items: ["Figma Dev Mode", "Zeplin", "Storybook"] },
      { category: "Assets",       items: ["Iconify", "Unsplash", "Lottiefiles"] },
    ],
    faqs: [
      {
        q: "Do you design for both mobile apps and websites?",
        a: "Yes — responsive web, iOS, and Android. We follow platform-specific design guidelines for each target.",
      },
      {
        q: "Can you design our brand identity too?",
        a: "We specialise in product UI/UX design. For full brand identity (logo, brand guide), we can refer trusted partners.",
      },
      {
        q: "What design files and assets do we receive?",
        a: "Full Figma source files, exported assets, design tokens, and a component library — everything you own.",
      },
      {
        q: "Can you work with our existing brand guidelines?",
        a: "Absolutely. We extend and apply your existing brand identity to new interfaces and product screens.",
      },
    ],
  },

  /* ── 04 AI/ML SOLUTIONS ─────────────────────────────────── */
  {
    slug: "ai-ml-solutions",
    num: "04",
    title: "AI / ML Solutions",
    tagline: "smarter systems. real automation.",
    description:
      "Custom AI and Machine Learning solutions for businesses ready to automate, predict, and scale. From LLM-powered chatbots and recommendation engines to predictive analytics and computer vision — we build AI/ML systems that actually reach production and deliver measurable business results.",
    imgSrc: "/figma/aiml.jpg",
    tags: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain"],
    accent: "#10b981",
    stickyText: "data-driven\ndecisions 🤖",
    stickyBg: "bg-dc-sticky-mint",
    heroLabel: "// 04 — ai ml solutions india",
    overview:
      "We build AI systems that actually make it to production — not POCs that gather dust. Real, deployed, monitored models that drive measurable business outcomes. From LLM-powered chatbots to computer vision pipelines, we handle the full ML lifecycle: data preparation, model training, deployment, and ongoing monitoring.",
    highlights: [
      {
        icon: "🧠",
        title: "LLM & Generative AI",
        body: "OpenAI, Anthropic, Gemini — RAG pipelines, fine-tuning, and custom AI agents built for your use case.",
      },
      {
        icon: "📈",
        title: "Predictive Analytics",
        body: "Demand forecasting, churn prediction, anomaly detection — trained on your real business data.",
      },
      {
        icon: "💬",
        title: "NLP & AI Chatbots",
        body: "Intent classification, entity extraction, and context-aware conversational AI for customer support and automation.",
      },
      {
        icon: "👁️",
        title: "Computer Vision",
        body: "Object detection, image classification, OCR, and intelligent document processing pipelines.",
      },
      {
        icon: "🔄",
        title: "MLOps & Monitoring",
        body: "Model versioning, drift detection, automated retraining pipelines, and production performance monitoring.",
      },
      {
        icon: "🔗",
        title: "API-First Delivery",
        body: "Clean REST/gRPC APIs so your existing products can consume ML features immediately — no rebuilding required.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Problem Framing",
        desc: "We define the business problem, success metrics, and data requirements clearly before any modelling begins.",
      },
      {
        step: "02",
        title: "Data Audit & Prep",
        desc: "Data quality assessment, cleaning, feature engineering, and augmentation strategy.",
      },
      {
        step: "03",
        title: "Model Development",
        desc: "Baseline → experimentation → evaluation. We track all experiments and share results transparently.",
      },
      {
        step: "04",
        title: "Production Deployment",
        desc: "Containerised model serving, API integration, and load testing before go-live.",
      },
      {
        step: "05",
        title: "Monitor & Improve",
        desc: "Performance dashboards, drift alerts, and scheduled retraining pipelines to keep models accurate.",
      },
    ],
    stack: [
      { category: "ML Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "HuggingFace"] },
      { category: "LLM / GenAI",   items: ["OpenAI API", "LangChain", "LlamaIndex", "Anthropic"] },
      { category: "Data",          items: ["Pandas", "NumPy", "Spark", "Airflow"] },
      { category: "Deployment",    items: ["FastAPI", "Docker", "AWS SageMaker", "GCP Vertex AI"] },
    ],
    faqs: [
      {
        q: "Do we need a large dataset to build an AI/ML solution?",
        a: "Not always. We assess what data you have and recommend the right approach — sometimes transfer learning or synthetic data works well for smaller datasets.",
      },
      {
        q: "Can you integrate AI into our existing product or app?",
        a: "Yes. We expose model predictions via clean APIs your existing product can consume without a full rebuild.",
      },
      {
        q: "How do we know if the AI model is actually working?",
        a: "We set up monitoring dashboards tracking the business metrics that matter — not just accuracy scores.",
      },
      {
        q: "Is our business data safe?",
        a: "Yes. We work within your data governance and compliance requirements. On-premise deployment is available if needed.",
      },
    ],
  },

  /* ── 05 GAME DEVELOPMENT ────────────────────────────────── */
  {
    slug: "game-development",
    num: "05",
    title: "Game Development",
    tagline: "2D. 3D. mobile. immersive.",
    description:
      "Immersive 2D and 3D games for mobile, PC, and web platforms — built with Unity and Unreal Engine. From casual mobile games and WebGL browser experiences to full-scale productions, we deliver polished gameplay, rich visuals, and smooth performance.",
    imgSrc: "/figma/gaming.png",
    tags: ["Unity", "Unreal Engine", "C#", "Mobile", "WebGL"],
    accent: "#f97316",
    stickyText: "play-tested\n& polished 🎮",
    stickyBg: "bg-dc-sticky-yellow",
    heroLabel: "// 05 — game development company india",
    overview:
      "We build games that keep players coming back. Whether it's a casual mobile puzzle, a WebGL browser experience, or a full 3D PC title — we bring the same engineering rigour to game development as we do to software. Playable prototypes fast, polished builds on schedule, and live ops support post-launch.",
    highlights: [
      {
        icon: "🎮",
        title: "Multi-Platform Development",
        body: "iOS, Android, PC, Mac, and WebGL — one Unity or Unreal codebase deployed to multiple platforms.",
      },
      {
        icon: "⚡",
        title: "Smooth 60fps Performance",
        body: "Optimised draw calls, asset streaming, and LOD systems for smooth, responsive gameplay.",
      },
      {
        icon: "🎵",
        title: "Audio & Visual Effects",
        body: "Spatial audio, particle systems, custom shader effects, and haptic feedback integration.",
      },
      {
        icon: "🏆",
        title: "Monetisation Integration",
        body: "In-app purchases, AdMob, Unity Ads, and subscription models designed for maximum LTV.",
      },
      {
        icon: "📊",
        title: "Player Analytics",
        body: "Behaviour tracking, funnel analysis, and A/B testing to make data-driven game design decisions.",
      },
      {
        icon: "☁️",
        title: "Cloud Saves & Leaderboards",
        body: "Firebase, PlayFab, or custom backend for cross-device progression and social features.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Concept & Game Design Document",
        desc: "Core loop definition, art direction, platform targets, and monetisation strategy agreed upfront.",
      },
      {
        step: "02",
        title: "Playable Prototype",
        desc: "Grey-box prototype in 2–3 weeks. Core mechanics tested and validated before any art investment.",
      },
      {
        step: "03",
        title: "Alpha Build",
        desc: "Full feature set with real art, audio integration, and internal QA. Playable end-to-end.",
      },
      {
        step: "04",
        title: "Beta & Polish",
        desc: "Performance optimisation, balance testing, bug fixing, and App Store asset preparation.",
      },
      {
        step: "05",
        title: "Launch & Live Ops",
        desc: "Store submission, launch monitoring, and content update pipeline so the game stays fresh.",
      },
    ],
    stack: [
      { category: "Engines",    items: ["Unity", "Unreal Engine 5", "Godot"] },
      { category: "Languages",  items: ["C#", "C++", "GDScript"] },
      { category: "Backend",    items: ["Firebase", "PlayFab", "Photon (Multiplayer)"] },
      { category: "Platforms",  items: ["iOS", "Android", "PC/Mac", "WebGL"] },
    ],
    faqs: [
      {
        q: "How long does it take to build a mobile game?",
        a: "A casual mobile game typically takes 3–5 months from concept to App Store. Project complexity is the key driver of timeline.",
      },
      {
        q: "Can you add multiplayer to a game?",
        a: "Yes — real-time multiplayer via Photon or Firebase. We assess server infrastructure costs upfront so there are no surprises.",
      },
      {
        q: "Do you handle App Store and Google Play submissions?",
        a: "Yes — store assets, age ratings, privacy policies, and review response handling are all included.",
      },
      {
        q: "Can you work on an existing Unity or Unreal project?",
        a: "Yes. We audit the codebase and provide an honest assessment before committing to a quote.",
      },
    ],
  },

  /* ── 06 DIGITAL ANALYTICS ───────────────────────────────── */
  {
    slug: "digital-analytics",
    num: "06",
    title: "Digital Analytics",
    tagline: "measure everything. optimise relentlessly.",
    description:
      "Expert digital analytics implementation, auditing, and training — covering Google Analytics 4, Adobe Analytics, Google Tag Manager, and advanced conversion tracking. We help businesses build accurate data foundations, measure what actually matters, and train teams to act on insights confidently.",
    imgSrc: "/figma/data.jpg",
    tags: ["Google Analytics 4", "Adobe Analytics", "GTM", "Looker Studio", "Tag Management"],
    accent: "#f97316",
    stickyText: "we also\ntrain your team 🎓",
    stickyBg: "bg-dc-sticky-yellow",
    heroLabel: "// 06 — digital analytics services india",
    overview:
      "Broken tracking. Inflated metrics. Teams that can't read their own dashboards. We fix all of that. We implement GA4, Adobe Analytics, and Google Tag Manager setups from scratch — or audit and repair your existing setup. And unlike most analytics agencies, we don't just hand you a dashboard and disappear. We train your team to understand, interrogate, and act on their data independently.",
    highlights: [
      {
        icon: "📊",
        title: "GA4 Implementation & Audit",
        body: "Complete Google Analytics 4 setup — event tracking, conversion goals, ecommerce tracking, and full data layer configuration.",
      },
      {
        icon: "🔷",
        title: "Adobe Analytics",
        body: "Adobe Analytics implementation, report suites, custom variables, classification rules, and Analysis Workspace reporting.",
      },
      {
        icon: "🏷️",
        title: "Tag Management — GTM & Adobe Launch",
        body: "Google Tag Manager and Adobe Launch setup — clean, audited, documented tag containers with zero data leakage.",
      },
      {
        icon: "📈",
        title: "Conversion Rate Optimisation",
        body: "Funnel analysis, drop-off identification, heatmap integration (Hotjar, Clarity), and A/B test measurement.",
      },
      {
        icon: "🖥️",
        title: "Custom Analytics Dashboards",
        body: "Looker Studio, Power BI, and Tableau dashboards connected to your data — built for your specific stakeholders.",
      },
      {
        icon: "🎓",
        title: "GA4 & Adobe Analytics Training",
        body: "Structured online training programmes covering Google Analytics 4 and Adobe Analytics — from fundamentals to advanced custom reporting. Live sessions with recorded access. Available for teams of 2 to 50+.",
        featured: true,
      },
    ],
    approach: [
      {
        step: "01",
        title: "Analytics Audit",
        desc: "We audit your existing tracking — identify missing events, duplicate triggers, data discrepancies, and configuration errors.",
      },
      {
        step: "02",
        title: "Measurement Planning",
        desc: "We map your business KPIs to specific events, dimensions, and metrics — defining what to track and why.",
      },
      {
        step: "03",
        title: "Implementation",
        desc: "GA4, Adobe Analytics, and/or GTM implementation with full data layer documentation and QA testing.",
      },
      {
        step: "04",
        title: "Dashboards & Reporting",
        desc: "Custom Looker Studio or Tableau dashboards built for your team's actual reporting workflows.",
      },
      {
        step: "05",
        title: "Training & Enablement",
        desc: "We train your team to independently use, interpret, and act on your analytics data — from beginner to advanced.",
      },
    ],
    stack: [
      { category: "Analytics Platforms", items: ["Google Analytics 4", "Adobe Analytics", "Mixpanel", "Amplitude"] },
      { category: "Tag Management",      items: ["Google Tag Manager", "Adobe Launch", "Tealium"] },
      { category: "Reporting",           items: ["Looker Studio", "Power BI", "Tableau", "BigQuery"] },
      { category: "Supporting Tools",    items: ["Hotjar", "Microsoft Clarity", "Google Optimize", "Cookiebot"] },
    ],
    faqs: [
      {
        q: "Do you provide Google Analytics 4 training for beginners?",
        a: "Yes. We offer structured GA4 training for all skill levels — from marketing executives new to analytics to developers implementing tracking. Online sessions with recorded access included.",
      },
      {
        q: "We already have GA4 set up. Can you audit it?",
        a: "Absolutely. Most GA4 setups we audit have significant tracking gaps, misconfigured conversions, or missing events. An audit typically takes 3–5 days and includes a detailed findings report.",
      },
      {
        q: "What is the difference between GA4 and Adobe Analytics?",
        a: "GA4 is event-based, free, and integrates deeply with Google Ads. Adobe Analytics is more customisable, enterprise-grade, and better suited to complex data models. We implement both and advise on the right fit.",
      },
      {
        q: "Can you train our entire marketing or product team?",
        a: "Yes. We run online group training workshops — live sessions with recorded access, customised to your current skill level and analytics setup. Teams of 2 to 50+.",
      },
    ],
  },

  /* ── 07 DIGITAL MARKETING ───────────────────────────────── */
  {
    slug: "digital-marketing",
    num: "07",
    title: "Digital Marketing",
    tagline: "reach more. convert better. grow faster.",
    description:
      "Data-driven digital marketing services that generate real business growth. From SEO, content marketing, and paid advertising to social media and email campaigns — we build and execute strategies that attract the right audience, convert leads, and deliver measurable ROI for businesses across India.",
    imgSrc: "/figma/digital.jpg",
    tags: ["SEO", "Google Ads", "Meta Ads", "Content Marketing", "Analytics"],
    accent: "#8b5cf6",
    stickyText: "real ROI.\nnot vanity metrics 📈",
    stickyBg: "bg-dc-sticky-pink",
    heroLabel: "// 07 — digital marketing agency india",
    overview:
      "We market like engineers — data first, always. Every campaign we run is tracked, measured, and continuously optimised. No vanity metrics, no inflated impression counts. Just clear attribution, honest reporting, and strategies built around what actually moves the needle for your business. From organic search to paid acquisition, we cover the full digital marketing funnel.",
    highlights: [
      {
        icon: "🔍",
        title: "Search Engine Optimisation (SEO)",
        body: "Technical SEO, on-page optimisation, strategic link building, and content planning to rank for keywords that actually convert.",
      },
      {
        icon: "💰",
        title: "Paid Advertising — PPC",
        body: "Google Ads, Meta Ads, and LinkedIn campaigns managed for maximum ROAS — not just clicks or impressions.",
      },
      {
        icon: "✍️",
        title: "Content Marketing",
        body: "SEO-optimised blogs, landing pages, and thought leadership content that builds authority and drives organic traffic.",
      },
      {
        icon: "📱",
        title: "Social Media Marketing",
        body: "Organic and paid social strategies across Instagram, LinkedIn, X, and YouTube — tailored to your audience.",
      },
      {
        icon: "📧",
        title: "Email Marketing",
        body: "Segmented campaigns, automated drip sequences, and newsletters that nurture leads into paying customers.",
      },
      {
        icon: "📊",
        title: "Analytics & Transparent Reporting",
        body: "GA4, Google Search Console, and custom dashboards — full visibility into what's working and why.",
      },
    ],
    approach: [
      {
        step: "01",
        title: "Audit & Research",
        desc: "We audit your digital presence, analyse competitors, and identify the highest-impact growth opportunities across all channels.",
      },
      {
        step: "02",
        title: "Strategy & Planning",
        desc: "Channel selection, budget allocation, content calendar, and KPI targets — all agreed before we spend a rupee.",
      },
      {
        step: "03",
        title: "Campaign Execution",
        desc: "Creative production, ad setup, landing page optimisation, and campaign launch.",
      },
      {
        step: "04",
        title: "Optimise & Scale",
        desc: "Weekly performance reviews, A/B testing, bid adjustments, and creative refresh cycles to maximise results.",
      },
      {
        step: "05",
        title: "Report & Advise",
        desc: "Monthly reports with clear attribution, honest insights, and recommended next steps — no jargon.",
      },
    ],
    stack: [
      { category: "SEO Tools",      items: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog"] },
      { category: "Paid Ads",       items: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "DV360"] },
      { category: "Analytics",      items: ["Google Analytics 4", "Hotjar", "Mixpanel", "Looker Studio"] },
      { category: "Content & CRM",  items: ["HubSpot", "Mailchimp", "WordPress", "Notion"] },
    ],
    faqs: [
      {
        q: "How long before SEO shows results?",
        a: "SEO is a 3–6 month investment. Paid ads can drive traffic from day one. We're upfront about realistic timelines for each channel so you know what to expect.",
      },
      {
        q: "What is your minimum ad budget recommendation?",
        a: "We recommend a minimum monthly ad budget of ₹30,000–₹50,000 to gather meaningful data and optimise effectively. We'll advise based on your goals and market.",
      },
      {
        q: "Do you create the ad creatives and copy?",
        a: "Yes — copywriting, static creatives, and basic video ads are included in our service. Complex video production is scoped separately.",
      },
      {
        q: "How do you define and measure success?",
        a: "We agree on KPIs upfront — leads, revenue, ROAS, or CAC — and report against those. Not follower counts or impressions.",
      },
    ],
  },
];

export default SERVICES_DATA;

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function getAllSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.slug);
}
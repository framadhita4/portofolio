export interface ProjectDetails {
  about?: string;
  whatIDid?: string;
  output?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  filterGroup: string;
  year: string;
  size?: string;
  image?: string;
  stack: string[];
  tech: string;
  desc: string;
  gradient: string;
  featured: boolean;
  details?: ProjectDetails;
}

export const mockProjects: Project[] = [
  {
    id: 1,
    slug: "kuorum",
    title: "Kuorum",
    subtitle: "Academic Concept Discovery & Autonomous Research Engine",
    category: "AI Platform",
    filterGroup: "AI Platform",
    year: "2026",
    size: "large",
    image: "/images/project/kuorum.png",
    stack: ["Go (Chi)", "React", "TanStack", "CQRS", "LLM", "SSE"],
    tech: "Go (Chi), React, TanStack, CQRS, LLM, SSE",
    desc: "Autonomous academic research platform with deep concept decomposition, citation graph traversal, and verbatim-grounded synthesis.",
    gradient: "gradient-mesh-7",
    featured: true,
    details: {
      about:
        "Kuorum is an autonomous academic research engine and deep literature synthesis platform designed to explore scientific concepts, traverse citation networks, and generate verifiable grounded research reports.",
      whatIDid:
        "Engineered the full-stack system using enterprise Go Clean Architecture and CQRS on the backend, paired with React 19, TypeScript, and TanStack (Router & Query) on the frontend. Developed custom streaming LLM clients, multi-tier composite paper rankers, automated PDF ingestion via Poppler, citation network graph traversal, and a 100% verbatim grounding audit engine.",
      output:
        "Delivered an end-to-end autonomous research workspace capable of deconstructing complex queries, screening and ranking hundreds of candidate papers, and generating verifiable synthesis reports with interactive citation mapping in real time via SSE.",
    },
  },
  {
    id: 2,
    slug: "nemo-speech-rs",
    title: "Nemo Speech Rs",
    category: "AI Platform",
    filterGroup: "AI Platform",
    year: "2026",
    size: "large",
    stack: ["Rust", "OpenBLAS"],
    tech: "Rust, OpenBLAS",
    desc: "High-performance speech synthesis and low-latency audio intelligence engine built natively in Rust.",
    gradient: "gradient-mesh-1",
    featured: true,
    details: {
      about:
        "nemo-speech-rs is a high performance Rust library engineered specifically for CPU optimized inference of NVIDIA NeMo Automatic Speech Recognition (ASR) models. Built from scratch with a custom Tensor framework utilizing OpenBLAS and GEMM for accelerated CPU operations.",
      whatIDid:
        "Engineered a complete ASR inference engine in Rust from scratch, starting from audio signal preprocessing and normalization, then building the custom Tensor abstraction layer using OpenBLAS for CPU GEMM acceleration. Implemented the full FastConformer ASR architecture including the convolutional encoder, multi-head self-attention (MHSA), and TDT, CTC, RNN-T decoders.",
      output:
        "Delivered a highly optimized, lightweight compiled library with a binary footprint of less than 10MB, radically smaller than the standard PyTorch-dependent Python packages.",
    },
  },
  {
    id: 3,
    slug: "yawm",
    title: "YAWM",
    subtitle: "Yet Another AI Workflow Management",
    category: "AI Platform",
    filterGroup: "AI Platform",
    year: "2026",
    size: "large",
    image: "/images/project/yawm.png",
    stack: ["Rust (Axum)", "React", "RAG", "Tools Calling", "Python"],
    tech: "Rust (Axum), React, RAG, Tools Calling, Python",
    desc: "Full-circle AI workflow orchestration platform with modular RAG pipelines and autonomous tool calling.",
    gradient: "gradient-mesh-2",
    featured: true,
    details: {
      about:
        "YAWM (Yet Another AI Workflow Management) is an agentic AI platform designed for visually building, running, and observing autonomous AI workflows orchestration.",
      whatIDid:
        "Built the visual graph editor frontend in React and TypeScript, and developed the Rust (Axum) backend using Clean Architecture with PostgreSQL/pgvector RAG storage, SSE execution streaming, and a Python JSON-RPC plugin SDK for third-party service integration.",
      output:
        "Produced an extensible AI orchestration platform supporting drag-and-drop workflow building, isolated plugin execution, and real-time step streaming.",
    },
  },
  {
    id: 4,
    slug: "crab-conductor",
    title: "Crab Conductor",
    category: "AI Platform",
    filterGroup: "AI Platform",
    year: "2026",
    size: "large",
    stack: ["Rust"],
    tech: "Rust",
    desc: "Autonomous multi-agent task conductor engineered for high-concurrency Rust execution environments.",
    gradient: "gradient-mesh-3",
    featured: true,
    details: {
      about:
        "Crab Conductor is a typed, asynchronous Rust framework for stateful agentic workflows, built as the core execution engine for YAWM.",
      whatIDid:
        "Built a LangGraph-inspired async Rust engine featuring Orchestrator-Worker routing, parallel task execution, checkpoint state recovery, and provider-agnostic LLM integration.",
      output:
        "Delivered a resilient micro-second dispatch framework capable of handling concurrent multi-agent decision loops safely.",
    },
  },
  {
    id: 5,
    slug: "syntax-tree-codebase-mcp",
    title: "Syntax Tree Codebase MCP",
    category: "AI Platform",
    filterGroup: "AI Platform",
    year: "2026",
    size: "medium",
    image: "/images/project/syntax-tree-codebase-mcp.png",
    stack: ["TypeScript", "MCP", "Tree Sitter Parser", "RAG"],
    tech: "TypeScript, MCP, Tree Sitter Parser, RAG",
    desc: "Model Context Protocol server leveraging Tree-Sitter AST parsing for surgical codebase querying.",
    gradient: "gradient-mesh-4",
    featured: false,
    details: {
      about:
        "Syntax Tree Codebase MCP is a Model Context Protocol server providing AI orchestration agents with an exact, structural understanding of source code bases.",
      whatIDid:
        "Implemented Tree-sitter AST parsing in TypeScript to index source code into discrete CodeNodes, building a project structured dependency graph walker and local semantic vector search index.",
      output:
        "Enabled LLM agents to perform high-precision code inspections without exceeding context limits.",
    },
  },
  {
    id: 6,
    slug: "lanadiya-villa-resort",
    title: "Lanadiya Villa Resort",
    category: "Booking Platform",
    filterGroup: "Booking Platform",
    year: "2026",
    size: "large",
    image: "/images/project/lanadiya.png",
    stack: ["React", "Laravel"],
    tech: "React, Laravel",
    desc: "Bespoke luxury resort reservation engine with real-time availability sync and seamless guest checkout.",
    gradient: "gradient-mesh-5",
    featured: true,
    details: {
      about:
        "Lanadiya Villa Resort is a booking platform and guest management system built for Lanadiya Villa Resort.",
      whatIDid:
        "Built the landing page and booking engine using React and Laravel, creating real-time villa availability calendars, guest preference logs, dynamic seasonal pricing rules, and automated confirmation emails.",
      output:
        "Launched a resort booking platform with zero double-booking occurrences and automated email confirmations.",
    },
  },
  {
    id: 7,
    slug: "assessment-platform",
    title: "Assessment Platform",
    category: "Assessment",
    filterGroup: "Management System",
    year: "2026",
    size: "large",
    image: "/images/project/assessment.png",
    stack: ["React", "Next.js", "Laravel"],
    tech: "React, Next.js, Laravel",
    desc: "Scalable talent evaluation and automated scoring platform built for high-volume concurrent testing.",
    gradient: "gradient-mesh-6",
    featured: false,
    details: {
      about:
        "Assessment Platform is an enterprise evaluation application featuring a dynamic assessment builder and detailed result reporting.",
      whatIDid:
        "Built the platform using React, Next.js, and Laravel, developing a visual drag-and-drop question builder, automated scoring logic, and recommendation report generation.",
      output:
        "Delivered an automated assessment engine that eliminated manual grading and generated instant result reports with 100% scoring accuracy, with detailed visual insights for each assessment.",
    },
  },
  {
    id: 8,
    slug: "grandia-booking-engine",
    title: "Grandia Booking Engine",
    category: "Booking Platform",
    filterGroup: "Booking Platform",
    year: "2025",
    size: "medium",
    image: "/images/project/grandia-booking-engine.png",
    stack: ["React", "Next.js"],
    tech: "React, Next.js",
    desc: "High-conversion hospitality booking flow engineered for instant room discovery and dynamic rates.",
    gradient: "gradient-mesh-7",
    featured: false,
    details: {
      about:
        "Grandia Booking Engine is a custom hotel reservation system for Grandia Hotel to maximize direct room bookings and event space rentals.",
      whatIDid:
        "Built the booking engine frontend with React and Next.js, implementing interactive room availability calendars, dynamic promo code pricing logic, and event booking flows.",
      output:
        "Launched a direct reservation engine that increased web room bookings while cutting third-party OTA commission fees.",
    },
  },
  {
    id: 9,
    slug: "grandia-room-service",
    title: "Grandia Room Service",
    category: "Management System",
    filterGroup: "Management System",
    year: "2025",
    size: "medium",
    image: "/images/project/grandia-room-service.png",
    stack: ["React", "Next.js", "Laravel"],
    tech: "React, Next.js, Laravel",
    desc: "In-room digital concierge and real-time hospitality order fulfillment management system.",
    gradient: "gradient-mesh-8",
    featured: false,
    details: {
      about:
        "Grandia Room Service is a hotel guest web application for ordering food and requesting room amenities.",
      whatIDid:
        "Developed the guest ordering interface and desktop staff dispatch dashboard using React, Next.js, and Laravel, integrating real-time order tracking and kitchen/housekeeping ticket routing.",
      output:
        "Delivered a digital QR-code ordering portal that reduced order fulfillment times by 25%.",
    },
  },
  {
    id: 10,
    slug: "stp-cost-control",
    title: "STP Cost Control",
    category: "Financial",
    filterGroup: "Financial & CMS",
    year: "2025",
    size: "large",
    image: "/images/project/stp-cost-control.png",
    stack: ["React", "Next.js"],
    tech: "React, Next.js",
    desc: "Enterprise budget tracking, variance auditing, and real-time operational cost control dashboard.",
    gradient: "gradient-mesh-2",
    featured: false,
    details: {
      about:
        "STP Cost Control is a financial management and cash flow monitoring application for PT Sinergi Teknoglobal Perkasa.",
      whatIDid:
        "Built the financial web application using React and Next.js, implementing virtualized data tables for large transaction ledgers, approval workflows for fund disbursements, and financial analytics charts.",
      output:
        "Created a secure digital audit trail for company operational spending, smoothly rendering 10,000+ transaction records and cutting approval cycles from days to hours.",
    },
  },
  {
    id: 11,
    slug: "msi-sales-call",
    title: "MSI Sales Call",
    category: "CRM & Sales",
    filterGroup: "CRM & Sales",
    year: "2025",
    size: "small",
    image: "/images/project/msi-sales-call.png",
    stack: ["React", "Next.js"],
    tech: "React, Next.js",
    desc: "Field sales activity tracker and client pipeline velocity system for distributed commercial teams.",
    gradient: "gradient-mesh-1",
    featured: false,
    details: {
      about:
        "MSI Sales Call is a specialized CRM and field sales tracking application for the canned paint manufacturing and distribution industry.",
      whatIDid:
        "Developed the application using React and Next.js, designing a Product Information Management (PIM) module to handle paint variations while connecting it to inventory stock and order management systems.",
      output:
        "Produced a sales app that simplified order entry across 500+ paint SKU variations for field sales agents and prevented out of stock orders.",
    },
  },
  {
    id: 12,
    slug: "mkm-tour-travel",
    title: "MKM Tour Travel",
    category: "Booking Platform",
    filterGroup: "Booking Platform",
    year: "2024",
    size: "large",
    stack: ["React", "Next.js", "Laravel"],
    tech: "React, Next.js, Laravel",
    desc: "End-to-end travel itinerary booking engine paired with a comprehensive admin reservation suite.",
    gradient: "gradient-mesh-4",
    featured: true,
    details: {
      about:
        "MKM Tour Travel is a comprehensive booking platform for travel, Hajj, and Umrah travel services.",
      whatIDid:
        "Developed the customer-facing booking storefront using React and Next.js, implementing a multi-step pilgrim detail checkout wizard and integrating with a Laravel admin booking API.",
      output:
        "Launched an SEO-optimized travel platform that increased online booking inquiries by 45%.",
    },
  },
  {
    id: 13,
    slug: "limas",
    title: "Limas",
    category: "CRM & Sales",
    filterGroup: "CRM & Sales",
    year: "2024",
    size: "medium",
    image: "/images/project/limas.png",
    stack: ["Vue.js", "Nuxt.js"],
    tech: "Vue.js, Nuxt.js",
    desc: "Streamlined customer relationship and lead conversion platform built with Vue and Nuxt.",
    gradient: "gradient-mesh-3",
    featured: false,
    details: {
      about:
        "Limas is an enterprise CRM and logistics platform for PT Limas Raga Inti to manage LPG gas stock, fleet drivers, vehicles, orders, and sales team call activities.",
      whatIDid:
        "Built the web application using Vue.js and Nuxt.js, creating inventory tracking modules, driver route management tools, and dynamic sales call logging forms.",
      output:
        "Delivered a centralized dashboard that digitized 100% of field sales call tracking and improved data accuracy for order processing.",
    },
  },
  {
    id: 14,
    slug: "el-bethel",
    title: "El Bethel",
    category: "Booking Platform",
    filterGroup: "Booking Platform",
    year: "2024",
    size: "small",
    stack: ["Laravel"],
    tech: "Laravel",
    desc: "Dedicated facility and event scheduling platform with automated confirmation workflows.",
    gradient: "gradient-mesh-5",
    featured: true,
    details: {
      about:
        "El Bethel is an internal asset management and facility booking platform designed to support religious activities and logistics.",
      whatIDid:
        "Built the application with Laravel and Blade, developing room scheduling conflict validators, asset check-in/check-out logs, and inventory management forms.",
      output:
        "Created an internal management system that eliminated room booking clashes and improved equipment accountability across all departments.",
    },
  },
  {
    id: 15,
    slug: "stp-helpdesk",
    title: "STP Helpdesk",
    category: "Helpdesk",
    filterGroup: "Financial & CMS",
    year: "2024",
    size: "small",
    image: "/images/project/stp-helpdesk.png",
    stack: ["React", "Next.js"],
    tech: "React, Next.js",
    desc: "Internal SLA ticketing and rapid incident resolution platform for enterprise operations.",
    gradient: "gradient-mesh-6",
    featured: false,
    details: {
      about:
        "STP Helpdesk is an integrated helpdesk and technical operations management platform for PT Sinergi Teknoglobal Perkasa.",
      whatIDid:
        "Developed the operations portal using React and Next.js, creating interactive scheduling boards for maintenance and operations tasks and linking technician tasks directly to spare parts stock inventory.",
      output:
        "Delivered a unified support ticket system that improved response times and optimized spare parts inventory management.",
    },
  },
  {
    id: 16,
    slug: "indolaw",
    title: "Indolaw",
    category: "CMS",
    filterGroup: "Financial & CMS",
    year: "2024",
    size: "medium",
    image: "/images/project/indolaw.png",
    stack: ["Laravel"],
    tech: "Laravel",
    desc: "Structured legal document repository and high-speed regulatory content management system.",
    gradient: "gradient-mesh-7",
    featured: false,
    details: {
      about:
        "Indolaw is a public portal and content management system providing legal services information with multi language and SEO support.",
      whatIDid:
        "Developed the responsive landing page and admin CMS using Laravel, building a bilingual content engine, role based authorization, and dynamic SEO metadata controls.",
      output:
        "Launched a localized legal platform that improved search engine visibility and simplified independent content publishing.",
    },
  },
  {
    id: 17,
    slug: "jangji",
    title: "Jangji",
    category: "Management System",
    filterGroup: "Management System",
    year: "2023",
    size: "medium",
    image: "/images/project/jangji.png",
    stack: ["React", "Vite"],
    tech: "React, Vite",
    desc: "Fast, lightweight operational management workspace built for daily team coordination.",
    gradient: "gradient-mesh-8",
    featured: false,
    details: {
      about:
        "Jangji is a wedding project management system overhauled to resolve legacy technical debt, improve user performance, and optimize event rundowns.",
      whatIDid:
        "Migrated the legacy stack to React and Vite, fixed UI layout bugs, refactored database CRUD operations, and built interactive wedding rundown templates.",
      output:
        "Achieved 10x faster page load speed and delivered a seamless wedding planning experience.",
    },
  },
  {
    id: 18,
    slug: "hallaw-admin",
    title: "Hallaw Admin",
    category: "CMS",
    filterGroup: "Financial & CMS",
    year: "2023",
    size: "small",
    image: "/images/project/hallaw.png",
    stack: ["React", "Next.js"],
    tech: "React, Next.js",
    desc: "Multi-role administrative publishing portal and content workflow controller.",
    gradient: "gradient-mesh-2",
    featured: false,
    details: {
      about:
        "Hallaw Admin is a dynamic Content Management System (CMS) admin portal built for mobile app data management and real-time legal consultations.",
      whatIDid:
        "Developed the admin dashboard with React and Next.js, implementing Role-Based Access Control permissions, dynamic management forms, and live consultation chat.",
      output:
        "Delivered a responsive CMS giving administrators full control over mobile content and live support sessions.",
    },
  },
  {
    id: 19,
    slug: "sariangin",
    title: "Sariangin",
    category: "Management System",
    filterGroup: "Management System",
    year: "2023",
    size: "medium",
    stack: ["React", "Laravel (Inertia)"],
    tech: "React, Laravel (Inertia)",
    desc: "Integrated resource and inventory management system powered by Laravel Inertia and React.",
    gradient: "gradient-mesh-4",
    featured: true,
    details: {
      about:
        "Sariangin is an operational management system for tracking oxygen gas inventory, delivery drivers, vehicles, and customer orders.",
      whatIDid:
        "Built the application using React and Laravel with Inertia.js, creating inventory tracking dashboards, driver route dispatching, and order processing flows.",
      output:
        "Created a single page management application combining SPA responsiveness with secure Laravel backend routing.",
    },
  },
];

export const filterGroups = [
  { id: "all", label: "All (19)" },
  { id: "AI Platform", label: "AI Platform" },
  { id: "Booking Platform", label: "Booking Platform" },
  { id: "Management System", label: "Management System" },
  { id: "CRM & Sales", label: "CRM & Sales" },
  { id: "Financial & CMS", label: "Financial, Helpdesk & CMS" },
];

export const categories = [
  "All",
  "AI Platform",
  "Booking Platform",
  "Management System",
  "CRM & Sales",
  "Financial",
  "Helpdesk",
  "CMS",
  "Assessment",
];

export interface ProjectDetails {
  about?: string;
  whatIDid?: string;
  output?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  size: string;
  image?: string;
  tech: string;
  details?: ProjectDetails;
}

export const mockProjects: Project[] = [
  {
    id: 18,
    slug: "nemo-speech-rs",
    title: "Nemo Speech Rs",
    category: "AI Platform",
    year: "2026",
    size: "large",
    tech: "Rust, OpenBLAS",
    details: {
      about:
        "nemo-speech-rs is a high performance Rust library engineered specifically for CPU optimized inference of NVIDIA NeMo Automatic Speech Recognition (ASR) models. I built the entire inference engine from scratch, including a custom Tensor framework utilizing OpenBLAS and GEMM for accelerated CPU operations.",
      whatIDid:
        "Engineered a complete ASR inference engine in Rust from scratch, starting from audio signal preprocessing and normalization, then building the custom Tensor abstraction layer using OpenBLAS for CPU GEMM acceleration. I implemented the full FastConformer ASR architecture including the convolutional encoder, multi-head self-attention (MHSA), and add TDT, CTC, RNN-T decoders support.",
      output:
        "Delivered a highly optimized, lightweight compiled library with a binary footprint of less than 10MB. This is drastically smaller compared to the official NVIDIA NeMo speech toolkit, which requires the massive PyTorch library and can take hundreds of megabytes.",
    },
  },
  {
    id: 15,
    slug: "yawm",
    title: "YAWM (Yet Another AI Workflow Management)",
    category: "AI Platform",
    year: "2026",
    size: "large",
    image: "/images/project/yawm.png",
    tech: "Rust (Axum), React, RAG, Tools Calling, Python",
    details: {
      about:
        "YAWM (Yet Another AI Workflow Management) is an agentic AI platform designed for visually building, running, and observing autonomous AI workflows orchestration.",
      whatIDid:
        "Built the visual graph editor frontend in React and TypeScript, and developed the Rust (Axum) backend using Clean Architecture with PostgreSQL/pgvector RAG storage, SSE execution streaming, and a Python JSON-RPC plugin SDK for create a tools to integrate with third party services.",
      // output:
      //   "Produced an extensible AI orchestration platform supporting drag-and-drop workflow building, isolated plugin execution, and real-time step streaming.",
    },
  },
  {
    id: 16,
    slug: "crab-conductor",
    title: "Crab Conductor",
    category: "AI Platform",
    year: "2026",
    size: "large",
    tech: "Rust",
    details: {
      about:
        "Crab Conductor is a typed, asynchronous Rust framework for stateful agentic workflows, built as the core execution engine for YAWM.",
      whatIDid:
        "Built a LangGraph inspired async Rust workspace engine featuring Orchestrator Worker routing, parallel task, checkpoint state recovery, and provider agnostic LLM integration.",
    },
  },
  {
    id: 17,
    slug: "syntax-tree-codebase-mcp",
    title: "Syntax Tree Codebase MCP",
    category: "AI Platform",
    year: "2026",
    size: "medium",
    image: "/images/project/syntax-tree-codebase-mcp.png",
    tech: "TypeScript, MCP, Tree Sitter Parser, RAG",
    details: {
      about:
        "Syntax Tree Codebase MCP is a Model Context Protocol server providing AI orchestration agents with an exact, structural understanding of source code bases.",
      whatIDid:
        "Implemented Tree sitter AST parsing in TypeScript to index source code into discrete CodeNodes, building a project structured dependency graph walker and local semantic vector search index.",
    },
  },
  {
    id: 1,
    slug: "mkm-tour-travel",
    title: "MKM Tour Travel",
    category: "Booking Platform",
    year: "2024",
    size: "large",
    tech: "React, Next.js, Laravel (Admin Booking)",
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
    id: 2,
    slug: "limas",
    title: "Limas",
    category: "CRM & Sales",
    year: "2024",
    size: "medium",
    image: "/images/project/limas.png",
    tech: "Vue.js, Nuxt.js",
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
    id: 3,
    slug: "el-bethel",
    title: "El Bethel",
    category: "Booking Platform",
    year: "2024",
    size: "small",
    tech: "Laravel",
    details: {
      about:
        "El Bethel is an internal asset management and facility booking platform designed to support religious activities and logistics.",
      whatIDid:
        "Built the application with Laravel and Blade, developing room scheduling conflict validators, asset check-in/check-out logs, and inventory management forms.",
      output:
        "Created an internal management system that eliminated room booking clashes and improved equipment accountability across all departments.",
    },
  },
  // {
  //   id: 4,
  //   slug: "food-court-pos",
  //   title: "Food Court POS",
  //   category: "Point of Sale",
  //   year: "2024",
  //   size: "medium",
  //   tech: "React, Next.js",
  //   details: {
  //     about:
  //       "Food Court POS is a high-speed Point of Sale system for order and transaction management in food court environments.",
  //     whatIDid:
  //       "Developed the web cashier interface using React, Next.js, and Zustand, building keyboard-navigable menu grids, dynamic item modifier calculations, and direct receipt printing.",
  //     output:
  //       "Delivered a cashier application that sped up order input by 50% with zero UI latency during peak sales hours.",
  //   },
  // },
  {
    id: 5,
    slug: "stp-cost-control",
    title: "STP Cost Control",
    category: "Financial",
    year: "2025",
    size: "large",
    image: "/images/project/stp-cost-control.png",
    tech: "React, Next.js",
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
    id: 6,
    slug: "stp-helpdesk",
    title: "STP Helpdesk",
    category: "Helpdesk",
    year: "2024",
    size: "small",
    image: "/images/project/stp-helpdesk.png",
    tech: "React, Next.js",
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
    id: 7,
    slug: "grandia-booking-engine",
    title: "Grandia Booking Engine",
    category: "Booking Platform",
    year: "2025",
    size: "medium",
    image: "/images/project/grandia-booking-engine.png",
    tech: "React, Next.js",
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
    id: 8,
    slug: "msi-sales-call",
    title: "MSI Sales Call",
    category: "CRM & Sales",
    year: "2025",
    size: "small",
    image: "/images/project/msi-sales-call.png",
    tech: "React, Next.js",
    details: {
      about:
        "MSI Sales Call is a specialized CRM and field sales tracking application for the canned paint manufacturing and distribution industry.",
      whatIDid:
        "Developed the application using React and Next.js, designing a Product Information Management (PIM) module to handle paint variations (base color, tint code, can size, finish type) while connecting it to inventory stock and order management systems.",
      output:
        "Produced a sales app that simplified order entry across 500+ paint SKU variations for field sales agents and prevent out of stock orders.",
    },
  },
  {
    id: 9,
    slug: "jangji",
    title: "Jangji",
    category: "Management System",
    year: "2023",
    size: "medium",
    image: "/images/project/jangji.png",
    tech: "React, Vite",
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
    id: 10,
    slug: "hallaw-admin",
    title: "Hallaw Admin",
    category: "CMS",
    year: "2023",
    size: "small",
    image: "/images/project/hallaw.png",
    tech: "React, Next.js",
    details: {
      about:
        "Hallaw Admin is a dynamic Content Management System (CMS) admin portal built for mobile app data management and real-time legal consultations.",
      whatIDid:
        "Developed the admin dashboard with React and Next.js, implementing Role-Based Access Control (RBAC) permissions, dynamic management forms, and live consultation chat.",
      output:
        "Delivered a responsive CMS giving administrators full control over mobile content and live support sessions.",
    },
  },
  {
    id: 11,
    slug: "sariangin",
    title: "Sariangin",
    category: "Management System",
    year: "2023",
    size: "medium",
    tech: "React, Laravel (Inertia)",
    details: {
      about:
        "Sariangin is an operational management system for tracking oxygen gas inventory, delivery drivers, vehicles, and customer orders.",
      whatIDid:
        "Built the application using React and Laravel with Inertia.js, creating inventory tracking dashboards, driver route dispatching, and order processing flows.",
      output:
        "Created a single page management application combining SPA responsiveness with secure Laravel backend routing.",
    },
  },
  {
    id: 12,
    slug: "indolaw",
    title: "Indolaw",
    category: "CMS",
    year: "2024",
    size: "medium",
    tech: "Laravel",
    image: "/images/project/indolaw.png",
    details: {
      about:
        "Indolaw is a public portal and content management system providing legal services information with multi language and SEO support.",
      whatIDid:
        "Developed the responsive landing page and admin CMS using Laravel, building a bilingual (Indonesian/English) content engine, role based authorization, and dynamic SEO metadata controls.",
      output:
        "Launched a localized legal platform that improved search engine visibility and simplified independent content publishing.",
    },
  },
  {
    id: 13,
    slug: "assessment-platform",
    title: "Assessment Platform",
    category: "Assessment",
    year: "2026",
    size: "large",
    tech: "React, Next.js, Laravel",
    image: "/images/project/assessment.png",
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
    id: 14,
    slug: "grandia-room-service",
    title: "Grandia Room Service",
    category: "Management System",
    year: "2025",
    size: "medium",
    tech: "React, Next.js, Laravel",
    image: "/images/project/grandia-room-service.png",
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
    id: 15,
    slug: "lanadiya-villa-resort",
    image: "/images/project/lanadiya.png",
    title: "Lanadiya Villa Resort",
    category: "Booking Platform",
    year: "2026",
    size: "large",
    tech: "React, Laravel",
    details: {
      about:
        "Lanadiya Villa Resort is a booking platform and guest management system built for Lanadiya Villa Resort.",
      whatIDid:
        "Built the landing page and booking engine using React and Laravel, creating real-time villa availability calendars, guest preference logs, dynamic seasonal pricing rules, and automated confirmation emails.",
      output:
        "Launched a resort booking platform with zero double-booking occurrences and automated email confirmations.",
    },
  },
];

export const categories = [
  "All",
  "Booking Platform",
  "Management System",
  "CMS",
  "CRM & Sales",
  "Point of Sale",
  "Helpdesk",
  "Financial",
  "Assessment",
  "AI Platform",
];

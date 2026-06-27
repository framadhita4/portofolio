export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  size: string;
  image?: string;
  tech: string;
  description?: string;
  features?: string[];
}

export const mockProjects: Project[] = [
  {
    id: 15,
    slug: "yawm",
    title: "YAWM (Yet Another AI Workflow Management)",
    category: "AI Platform",
    year: "2026",
    size: "large",
    image: "/images/project/yawm.png",
    tech: "Rust (Axum), React, RAG, Tools Calling, Python",
    description:
      "An agentic AI workflow platform for designing, running, and observing multi-step automations.",
    features: [
      "Built an agentic AI workflow platform frontend with a visual graph builder, extensible plugin runtime, and RAG knowledge base.",
      "Implemented the backend in Rust (Axum) using Clean Architecture, with PostgreSQL/pgvector for knowledge retrieval, and SSE-based execution streaming.",
      "Designed a plugin ecosystem with a Rust daemon for lifecycle management, Python JSON-RPC SDK, GitHub-based tool installs, and a reverse LLM proxy for plugins.",
    ],
  },
  {
    id: 16,
    slug: "crab-conductor",
    title: "Crab Conductor",
    category: "AI Platform",
    year: "2026",
    size: "large",
    tech: "Rust",
    description:
      "A typed, async Rust framework for stateful agentic workflows, designed as the execution engine for YAWM.",
    features: [
      "LangGraph-inspired framework featuring streaming execution, parallel fan-out, checkpointing, and provider-agnostic LLM integration.",
      "Built as a comprehensive Rust workspace for orchestrated agentic workflows.",
      "Implemented a central Orchestrator for routing and Worker state transforms.",
      "Developed an Executor that streams ExecutionEvents for real-time observability.",
    ],
  },
  {
    id: 17,
    slug: "syntax-tree-codebase-mcp",
    title: "Syntax Tree Codebase MCP",
    category: "AI Platform",
    year: "2026",
    size: "medium",
    tech: "TypeScript, MCP",
    description:
      "An MCP server that provides AI orchestration agents with an exact, structural understanding of codebases.",
    features: [
      "Powered by Tree-sitter AST parsing, a dependency graph, and local semantic vector search instead of naive text-chunking.",
      "Parses source files at the syntax level so every function, class, interface, and declaration becomes a discrete CodeNode.",
      "Traces and stores cross-file dependencies as a navigable graph, allowing AI agents to walk the codebase with surgical precision.",
      "Extensible architecture currently supporting TypeScript, TSX, and JavaScript, designed for easy integration of new languages.",
    ],
  },
  {
    id: 1,
    slug: "mkm-tour-travel",
    title: "MKM Tour Travel",
    category: "Booking Platform",
    year: "2024",
    size: "large",
    tech: "React, Next.js, Laravel (Admin Booking)",
    description:
      "Comprehensive booking platform for tour, Hajj, and Umrah travel services.",
    features: [
      "Interactive UI for easy search and booking of travel packages.",
      "Seamless checkout and booking flow, including date selection and pilgrim detail management.",
      "SEO optimization and fast page rendering for search engine visibility.",
    ],
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
    description:
      "Comprehensive application for managing LPG gas stock, drivers, vehicles, orders, and sales call activities for PT Limas Raga Inti.",
    features: [
      "Inventory management for LPG gas stock and distribution tracking.",
      "Fleet management module for drivers and vehicles.",
      "Order management system for streamlined processing.",
      "Sales assignment tracking dashboard, enabling real-time monitoring of visits and sales targets.",
      "Dynamic logging form for prospecting data input, call status, and daily sales conversions from the field team.",
    ],
  },
  {
    id: 3,
    slug: "el-bethel",
    title: "El Bethel",
    category: "Booking Platform",
    year: "2024",
    size: "small",
    tech: "Laravel",
    description:
      "Internal Asset Management and Booking System to support smooth religious activities for El Bethel.",
    features: [
      "Management dashboard to track availability, borrowing, and condition of assets in real-time.",
      "Room or facility booking scheduling system to prevent event schedule clashes.",
      "Efficient form interface for inventory and logistics data collection.",
    ],
  },
  {
    id: 4,
    slug: "food-court-pos",
    title: "Food Court POS",
    category: "Point of Sale",
    year: "2024",
    size: "medium",
    tech: "React, Next.js",
    description:
      "Centralized Point of Sale system for order and transaction management in a food court environment.",
    features: [
      "Complex frontend state management for handling shopping carts, menu variations, and real-time price calculations.",
      "Fast and intuitive cashier application interface to speed up order input.",
      "Order status integration and payment receipt printing.",
    ],
  },
  {
    id: 5,
    slug: "stp-cost-control",
    title: "STP Cost Control",
    category: "Financial",
    year: "2025",
    size: "large",
    image: "/images/project/stp-cost-control.png",
    tech: "React, Next.js",
    description:
      "Cost Control and Financial Management application to monitor cash flow for PT Sinergi Teknoglobal Perkasa.",
    features: [
      "Financial dashboard and table interface capable of smoothly rendering large amounts of data (cash mutations, funding).",
      "Approval flow for disbursement and operational fund management.",
      "Data visualization features and comprehensive financial reporting.",
    ],
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
    description:
      "Integrated Helpdesk and Operations Management platform for PT Sinergi Teknoglobal Perkasa.",
    features: [
      "Ticketing and scheduling system (Kanban/Calendar) to track maintenance workflow or customer complaints.",
      "Spare parts stock management module integrated directly with technician tasks.",
      "Interactive dashboard for admins to monitor ticket resolution status and overall workflow efficiency.",
    ],
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
    description:
      "Custom Booking Engine system for Grandia Hotel to maximize direct reservations without third parties.",
    features: [
      "Booking engine with interactive calendar for real-time room availability checking.",
      "Frontend logic for dynamic price calculation, including promos, voucher codes, and extra add-ons.",
      "Booking flow for special events or MICE (Meeting, Incentive, Convention, Exhibition) room rentals along with checkout payment.",
    ],
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
    description:
      "CRM and Sales Call Management platform specifically for the canned paint manufacturing/distribution industry.",
    features: [
      "Adapted sales tracking flow (assignments and logging) for specific paint industry needs.",
      "Complex Product Information Management (PIM) module to handle product variations (base color, color code, can size, paint type).",
      "Order input interface allowing sales to select highly specific product variants directly from the field.",
    ],
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
    description:
      "Specialized wedding project management system, overhauled to address legacy issues and improve overall efficiency.",
    features: [
      "Stack Modernization: Successfully migrated the project's outdated stack to Vite, enhancing performance and stability.",
      "UI Refinement: Resolved styling and layout discrepancies for an improved and lightweight user interface.",
      "Quality Assurance: Identified and rectified layout bugs while optimizing CRUD operations.",
      "Deployment Optimization: Revamped the deployment process for a more streamlined and reliable approach.",
      "Dashboard & reporting, Rundown Templates, and other specialized features.",
    ],
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
    description:
      "A dynamic CMS platform designed for efficient mobile app data management.",
    features: [
      "Translating design files into functional code, ensuring an impeccable representation of the design.",
      "Implementing responsive web design principles to guarantee optimal viewing across various devices.",
      "Developing reusable components to maintain consistency and streamline development.",
      "Handling form creation and validation to ensure data accuracy and user-friendly interactions.",
      "Managing routing and navigation to facilitate smooth user journeys within the application.",
      "Implementing state management solutions to efficiently manage data and user interfaces.",
      "Integrating seamlessly with the backend to enable data communication and synchronization.",
      "Adding features related to user privileges and roles for enhanced security and access control.",
      "Incorporating a live chat functionality using Pusher to enhance real-time communication capabilities.",
    ],
  },
  {
    id: 11,
    slug: "sariangin",
    title: "Sariangin",
    category: "Management System",
    year: "2023",
    size: "medium",
    tech: "React, Laravel (Inertia)",
    description:
      "Comprehensive application for managing oxygen gas stock, drivers, vehicles, and orders.",
    features: [
      "Inventory management for oxygen gas stock and distribution tracking.",
      "Fleet management module for drivers and vehicles.",
      "Order management system for streamlined processing.",
    ],
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
    description:
      "Main page and admin dashboard CMS for managing Indolaw content.",
    features: [
      "Developed the main landing page for Indolaw with a modern, responsive design.",
      "Built a comprehensive admin dashboard for efficient content management and site administration.",
      "Implemented a multi-language content system to support localization and broader reach.",
      "Integrated dynamic SEO metadata management for better search engine visibility.",
      "Added role-based access control (RBAC) for secure administration privileges.",
    ],
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
    description:
      "A comprehensive assessment application featuring a dynamic assessment builder and detailed result reporting.",
    features: [
      "Dynamic assessment builder to easily create, manage, and distribute custom evaluations.",
      "Detailed reporting engine that generates in-depth insights into assessment results.",
      "Automated recommendation system providing actionable feedback based on user performance.",
      "Integrated supportive tools to assist administrators and users throughout the evaluation process.",
    ],
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
    description:
      "A comprehensive room service application for managing hotel guest requests and internal service operations.",
    features: [
      "Intuitive guest interface for submitting room service requests, ordering food, and requesting amenities.",
      "Real-time dashboard for hotel staff to track, manage, and fulfill guest requests efficiently.",
      "Integration with hotel internal systems to streamline communication between departments (e.g., kitchen, housekeeping).",
      "Status tracking and notifications to keep guests informed about the progress of their requests.",
    ],
  },
  {
    id: 15,
    slug: "lanadiya-villa-resort",
    title: "Lanadiya Villa Resort",
    category: "Booking Platform",
    year: "2026",
    size: "large",
    tech: "React, Laravel",
    description: "A comprehensive booking platform for Lanadiya Villa Resort.",
    features: [
      "Built the main landing page with a modern, responsive design.",
      "Implemented a comprehensive booking engine for villa and room reservations.",
      "Developed a detailed guest management system with booking history and preferences.",
      "Added automated reservation confirmation and email notification system.",
      "Integrated dynamic pricing rules and availability management.",
    ],
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

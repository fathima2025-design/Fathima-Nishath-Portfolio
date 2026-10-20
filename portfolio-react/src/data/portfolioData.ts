import type {
  OwnerProfile,
  ExperienceItem,
  FeaturedErpProjectData,
  PreviousProject,
  SkillCategory
} from '../types';

export const ownerProfile: OwnerProfile = {
  name: "Fathima Nishath",
  headline: "Front-End Developer | React | Next.js | TypeScript",
  subheadline: "Building Reliable, Scalable Frontend Experiences",
  location: "Tamil Nadu, India",
  email: "danishahamed2023@gmail.com",
  phone: "+91 9360691161",
  phoneFormatted: "+91 93606 91161",
  whatsappUrl: "https://wa.me/919360691161",
  githubRepoUrl: "https://github.com/fathima2025-design/Fathima-Nishath-Portfolio",
  livePortfolioUrl: "https://fathima1996.netlify.app/",
  aboutBio: {
    lead: "Front-End Developer specializing in high-reliability web applications, complex manufacturing ERP workflows, and modular React / Next.js / Redux Toolkit architectures.",
    paragraphs: [
      "My engineering journey began in full-stack cross-platform development with Flutter, C#, and ASP.NET, where I built mobile and web applications with real-time API integrations, token authentication, and relational databases. This foundational background provided deep appreciation for system design, data contracts, and end-to-end data pipelines.",
      "Today, I focus my engineering practice primarily on frontend engineering with React, Next.js, and Redux Toolkit. In my current role at Kairox AI Tech, I develop and maintain the user interface of the KairoX ERP—an enterprise-grade production and traceability platform for the leather garment manufacturing industry.",
      "I engineer critical industrial workflows: dynamic Cutting Grid generation, two-door floor event logging, hardware camera barcode/QR scanning (html5-qrcode), label canvas generation (jsbarcode), 3-tier orders explorers, multi-role biometric floor command attendance, and piece-level garment tracing (LTH-BLK-009). I prioritize clean code, modular component architecture, resilient query caching via RTK Query, and accessible, responsive design."
    ],
    coreValues: [
      {
        title: "Real-World Industrial Focus",
        description: "Translating multi-department factory workflows (Cutting, Lining, Stitching, Store Hub, Finishing) into responsive, intuitive web interfaces."
      },
      {
        title: "Modular State & Query Caching",
        description: "Architecting centralized Redux Toolkit stores and RTK Query API slices with 28+ tag types for automated cache invalidation and optimistic updates."
      },
      {
        title: "Hardware & Document Integration",
        description: "Integrating camera QR/barcode scanners (html5-qrcode), Code128 barcode printers (jsbarcode), and automated PDF/Excel document generators (jspdf, xlsx)."
      },
      {
        title: "Continuous Learning",
        description: "Actively building on full-stack fundamentals to master cutting-edge React 19 patterns, Next.js App Router rendering, and strict TypeScript."
      }
    ]
  }
};

export const experiences: ExperienceItem[] = [
  {
    id: "kairox-ai-tech",
    company: "Kairox AI Tech",
    role: "Front-End Developer",
    duration: "April 2026 – Present",
    period: {
      start: "Apr 2026",
      end: "Present"
    },
    location: "Tamil Nadu, India",
    isCurrent: true,
    employmentType: "Full-time",
    summary: "Developing the frontend of an enterprise ERP application for a leather manufacturing business, with responsibility for frontend implementation and backend REST API integration.",
    responsibilities: [
      "Develop and maintain ERP frontend features using React, Next.js (App Router), and JavaScript.",
      "Build reusable UI components, layout templates, and modular application pages.",
      "Integrate REST APIs and manage client data flows using Redux Toolkit and RTK Query with automated cache tags.",
      "Implement complex forms, analytical dashboards, and manufacturing workflows across cutting, lining, stitching, and store hub.",
      "Work on production tracking, barcode management, analytics, attendance, inventory, procurement, orders, and administrative interfaces.",
      "Integrate hardware barcode scanning (html5-qrcode), SVG label generation (jsbarcode), and PDF/Excel reports (jspdf, xlsx).",
      "Organize frontend code into reusable components, shared utilities, and feature-specific modules.",
      "Handle asynchronous API requests, optimistic UI updates, state caching, error logging middleware, and boundary fallbacks."
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Redux Toolkit",
      "RTK Query",
      "REST APIs",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
      "html5-qrcode",
      "jsbarcode",
      "jspdf",
      "xlsx",
      "Git"
    ]
  },
  {
    id: "kullooo-solutions",
    company: "Kullooo Innovative Solutions",
    role: "Flutter Full Stack Developer",
    duration: "July 2025 – March 2026",
    period: {
      start: "Jul 2025",
      end: "Mar 2026"
    },
    location: "Tamil Nadu, India",
    isCurrent: false,
    employmentType: "Full-time",
    summary: "Developed cross-platform mobile and web applications using Flutter, with end-to-end REST API integration, backend logic in C# / ASP.NET, and SQL Server persistence.",
    responsibilities: [
      "Developed mobile and web applications using Flutter for Android, iOS, and Web targets.",
      "Integrated 10+ RESTful APIs, handling asynchronous response parsing and error interceptors.",
      "Engineered backend endpoints and business logic with ASP.NET, C#, and SQL Server.",
      "Implemented reactive state management across complex views using Provider and Riverpod.",
      "Implemented secure token-based authentication workflows and session storage."
    ],
    technologies: [
      "Flutter",
      "Dart",
      "C#",
      "ASP.NET",
      "SQL Server",
      "Provider",
      "Riverpod",
      "REST APIs",
      "Firebase"
    ]
  }
];

export const featuredErpProject: FeaturedErpProjectData = {
  title: "KairoX ERP — Leather Production & Traceability System",
  subtitle: "Enterprise Manufacturing Execution, Cutting Grid, Barcode Engine & Multi-Tier Garment Traceability",
  category: "Enterprise Software | Leather Garments & Manufacturing",
  role: "Front-End Developer — Kairox AI Tech",
  company: "Kairox AI Tech",
  duration: "April 2026 – Present",
  overview: "A production-grade manufacturing execution & traceability ERP designed for commercial leather garment and goods manufacturing. The system coordinates the full production traveler lifecycle: raw hide intake, client order release and style breakdown, dynamic pattern Cutting Grid generation, two-door floor event logging, hardware QR/barcode scanning, piece-level garment tracing, multi-role floor command attendance, and piece-rate wage calculation ledgers.",
  businessContext: "Leather garment manufacturing involves stringent physical batch processing—matching bovine hide grains, precision pattern cutting (body, sleeves, collars), lining assembly, hardware zippers, and multi-stage stitching. A defect at final inspection must immediately trace back to the exact leather lot, cutting sheet row, and operator. The KairoX ERP replaces manual paper travelers with synchronized department dashboards, hardware barcode listeners, and RTK Query state management.",
  responsibilities: [
    "Developing modular, responsive frontend views in Next.js (App Router) and React 19.",
    "Architecting the centralized Redux Toolkit store and RTK Query API slice with 28+ tag types for automated cache invalidation.",
    "Implementing the Barcode & Scanner Engine with html5-qrcode for camera scanning and jsbarcode for printable label sheets.",
    "Building dynamic Cutting Grid generators with pattern piece breakdowns, job sheet issuance, and two-door stage event logging.",
    "Engineering the Garment Tracer module for piece-level traveler auditing (LTH-BLK-009) and drawer aggregations (DRW-xxxx).",
    "Designing multi-role Floor Command & Biometric Attendance interfaces with QR proxy scanning and piece-rate wage runs.",
    "Integrating client-side export pipelines using jspdf, html2canvas, and xlsx for instant job sheet printing and audit reports."
  ],
  technicalImplementation: [
    "Next.js App Router Architecture: Client/server component separation, custom PageTrail breadcrumb context, and layout transitions.",
    "Redux Toolkit & RTK Query: Centralized apiSlice managing 28+ entity tag types (SKU, Piece, CuttingGrid, Store, WageOrder, MaterialLot) with automatic invalidation.",
    "Hardware Scanner Integration: html5-qrcode camera barcode/QR reader with debounced lookup hooks and SVG barcode rendering via jsbarcode.",
    "Error Logging Middleware: Custom errorLogger middleware intercepting 409/410/422 status codes and displaying structured correlation IDs.",
    "Interactive Visualizations: Recharts responsive containers for factory throughput and yield analysis, custom jacket build animations in Framer Motion."
  ],
  modules: [
    {
      id: "barcode-management",
      name: "Barcode & Hardware QR Scanner Engine",
      shortDesc: "Camera scanner integration, SVG barcode generation, and instant code resolution.",
      detailedDesc: "Complete barcode management suite powering factory floor hardware. Features camera QR/barcode scanning via html5-qrcode, dynamic Code128 / QR label generation via jsbarcode, employee badge generation, and instant automated code resolution for piece state lookups.",
      workflowStage: "Hardware Scanner & Factory Floor Receiving",
      keyFeatures: [
        "Live camera barcode & QR scanner powered by html5-qrcode",
        "Multi-tab generation: Employee Badges, Material Lots, and Cutting Sheets",
        "PrintTab with batch label preview and jspdf PDF export",
        "Instant barcode resolution with debounced hardware input listeners"
      ],
      frontendTechFocus: "html5-qrcode, jsbarcode, jspdf, debounced RTK Query hooks, BarcodeStoreProvider",
      metricBadge: "html5-qrcode & jsbarcode"
    },
    {
      id: "production-tracking",
      name: "Cutting Grid & Production Floor Logging",
      shortDesc: "Dynamic cutting grid generation, job sheet issuance, and two-door stage logging.",
      detailedDesc: "The heart of floor operations: allows managers to generate cutting grids across sizes and colours, issue cutting job sheets, and record two-door production events with operator verification. Features the signature jacket build progression (Raw Hide → Cut Patterns → Seam Stitching → Finished Jacket).",
      workflowStage: "Cutting Grid → Lining → Stitching → Assembly",
      keyFeatures: [
        "Dynamic Cutting Grid generation with row-level memoization",
        "Two-door production event logging with operator barcode verification",
        "Jacket build animation sequence (Layers → ScissorsLineDashed → Waypoints → Shirt)",
        "Job sheet issuance with style recipe breakdown and material consumption"
      ],
      frontendTechFocus: "React state machines, Redux Toolkit cuttingGrid tag invalidation, Framer Motion sequence",
      metricBadge: "Two-Door Logging"
    },
    {
      id: "garment-tracer",
      name: "Garment Tracer & Piece Audit History",
      shortDesc: "Piece-level audit history from raw hide to finished jacket with preset lookups.",
      detailedDesc: "Audit engine allowing supervisors to enter or scan any garment QR/barcode ID (e.g. preset LTH-BLK-009) to inspect its full production traveler. Renders timeline milestones (TimelineItem), drawer grouping (DRW-xxxx), defect inspection logs, and operator sign-offs.",
      workflowStage: "Quality Assurance & Compliance Audit",
      keyFeatures: [
        "Instant audit search with preset test barcodes (LTH-BLK-009)",
        "Chronological traveler timeline displaying every floor transition",
        "Drawer assignment validation preventing cross-batch contamination",
        "Defect inspection logs with stage-specific sign-off metadata"
      ],
      frontendTechFocus: "TimelineItem component, custom regex lookup validators, drawer merge mapping",
      metricBadge: "LTH-BLK-009 Preset"
    },
    {
      id: "analytics-dashboards",
      name: "Orders Explorer & Executive Analytics",
      shortDesc: "3-tier hierarchical order navigator and live factory throughput analytics.",
      detailedDesc: "Executive analytics and operations explorer with a 3-tier hierarchical drilldown: Client / Order → Style Details → Piece Traveler. Includes interactive throughput line and area charts with Recharts, yield analysis, and piece-level progress bars (OrderProgressBar).",
      workflowStage: "Executive Operations & Client Tracking",
      keyFeatures: [
        "3-tier hierarchical OrdersExplorer (Client -> Style -> Piece)",
        "Dynamic throughput and yield charts with Recharts",
        "OrderProgressBar visualizing piece completion milestones",
        "Excel report export integration powered by xlsx"
      ],
      frontendTechFocus: "Recharts AreaChart/BarChart, xlsx spreadsheet generator, memoized drilldown selectors",
      metricBadge: "3-Tier Orders Explorer"
    },
    {
      id: "inventory-materials",
      name: "Store Hub & Materials Inventory",
      shortDesc: "Raw hide lots, chemical formulations, lining specs, and low-stock alerts.",
      detailedDesc: "Comprehensive warehouse inventory tracking physical hide counts, square footage stock, chemical drums, and hardware accessories. Enforces reservation locks, prevents lot spec collisions on the cutting floor, and automatically deducts stock upon cutting sheet issuance.",
      workflowStage: "Store Hub & Chemical Warehouse",
      keyFeatures: [
        "Material lots query with multi-parameter filtering",
        "Automatic stock reservation checks preventing ambiguous lot assignment",
        "Accessory specification & substitution matrix (StoreHubSlice)",
        "Arrival inspection logging and goods receipt verification"
      ],
      frontendTechFocus: "storeHubSlice, sortable data tables, priority threshold badges, modal inventory drawers",
      metricBadge: "Lot Reservation Locks"
    },
    {
      id: "procurement-orders",
      name: "Procurement & Job Work Subcontracting",
      shortDesc: "Purchase order lifecycles, supplier intake receipts, and vendor job work.",
      detailedDesc: "Supply chain and subcontracting pipeline connecting raw hide suppliers, chemical vendors, and external job work units. Tracks PO creation, shipment ETAs, goods receipt verification (GRN), and job work vendor dispatch via jobWorkApiSlice.",
      workflowStage: "Procurement & Subcontracting",
      keyFeatures: [
        "Purchase Order lifecycle management (PO Creation → Dispatch → Receiving)",
        "External job work vendor assignment and piece dispatch tracking",
        "Intake receipt logging with supplier order reconciliation",
        "Audit trail for subcontracted leather finishing and embossing"
      ],
      frontendTechFocus: "jobWorkApiSlice, multi-step PO forms, vendor timeline tracking",
      metricBadge: "PO & Job Work"
    },
    {
      id: "employee-attendance",
      name: "Floor Command, Attendance & Wages",
      shortDesc: "Multi-role biometric floor command, QR proxy attendance, and piece-rate wages.",
      detailedDesc: "Comprehensive workforce management module tailored for plant managers, cutting/stitching supervisors, and security. Features FloorCommandView for QR attendance proxy scanning, employee roster sync via RTK Query (useGetEmployeesQuery), and piece-rate wage calculation runs (/wages).",
      workflowStage: "Human Resources, Security & Payroll",
      keyFeatures: [
        "Multi-role views: MyAttendanceView, FloorCommandView, OperationsHRView",
        "QR floor command attendance proxy for fast worker check-in",
        "Employee roster synchronization with RTK Query (attendanceApiSlice)",
        "Piece-rate wage run calculations and wage ledger summaries (/wages)"
      ],
      frontendTechFocus: "attendanceSlice, attendanceApiSlice, role-gated tabs (HR / Supervisor / Security)",
      metricBadge: "Floor Command & Wages"
    }
  ],
  challengesAndSolutions: [
    {
      challenge: "Floor operators on the production line needed rapid, keyboard-free barcode lookups without flooding backend APIs during rapid hardware scanning.",
      solution: "Engineered a custom barcode hook leveraging html5-qrcode and debounced lookup queries in RTK Query, caching resolved piece states locally.",
      technicalImpact: "Achieved sub-second piece state lookups and reduced redundant network queries by over 60% on factory floor tablets."
    },
    {
      challenge: "The cutting department required generating hundreds of garment pieces from nested size/colour matrices without freezing the browser thread.",
      solution: "Implemented an asynchronous Cutting Grid generator with row-level memoization, virtualized rendering, and tag-based cache invalidation (CuttingGrid).",
      technicalImpact: "Eliminated UI stutter and supported cutting sheet generation for thousands of pattern pieces in under 2 seconds."
    },
    {
      challenge: "Preventing out-of-order manufacturing handoffs (e.g. stitching pattern pieces before cutting inspection is verified).",
      solution: "Built two-door validation gates and client-side state machine guards in Redux, displaying structured error contracts (409 conflict catalog) with request correlation IDs.",
      technicalImpact: "Guaranteed strict operational compliance and eliminated cross-batch contamination across all physical departments on the factory floor."
    }
  ],
  technologies: [
    "React 19",
    "Next.js 16 (App Router)",
    "JavaScript",
    "Redux Toolkit",
    "React Redux",
    "RTK Query",
    "REST APIs",
    "html5-qrcode",
    "jsbarcode",
    "Tailwind CSS",
    "Framer Motion",
    "Recharts",
    "jspdf",
    "xlsx",
    "Git"
  ]
};

export const previousProjects: PreviousProject[] = [
  {
    id: "face-attendance-system",
    title: "Face Attendance System",
    subtitle: "AI-Powered Biometric Attendance Mobile Application",
    category: "Mobile Application | Computer Vision",
    description: "An AI-assisted attendance application built using Flutter and TensorFlow Lite for real-time face detection and identity recognition. Designed to streamline workplace and academic attendance with contactless verification.",
    keyHighlights: [
      "Integrated TensorFlow Lite mobile models for on-device facial landmark detection and embedding extraction",
      "Camera preview overlay with visual alignment guides for accurate capture",
      "Offline-first attendance caching with automated background synchronization",
      "Role-based reporting dashboards for attendance administrators"
    ],
    documentedOutcome: "Documented approximately 70% reduction in manual attendance effort compared to traditional register tracking.",
    techStack: [
      "Flutter",
      "Dart",
      "TensorFlow Lite",
      "Camera API",
      "Local Storage"
    ],
    architectureNotes: "Client-side inference executed on-device using TFLite interpreter, minimizing server latency."
  },
  {
    id: "voice-grocery-app",
    title: "Voice-Enabled Grocery Web Application",
    subtitle: "Hands-Free Voice-Navigated E-Commerce Interface",
    category: "Web Application | Voice Interface",
    description: "A grocery web application featuring speech-to-text (STT) capabilities for hands-free product searching, voice-driven cart addition, and natural language product categorization.",
    keyHighlights: [
      "Speech-to-Text (STT) integration enabling users to vocalize grocery search queries",
      "Real-time acoustic feedback animations responding to user vocal input",
      "Dynamic product catalog with category filtering and quantity selectors",
      "Responsive layout optimized for mobile browsers and tablet displays"
    ],
    techStack: [
      "Flutter Web",
      "Dart",
      "Speech-to-Text",
      "REST APIs",
      "State Management"
    ],
    architectureNotes: "Utilized Web Speech API bindings for real-time phrase transcription and intent extraction."
  },
  {
    id: "queue-management-app",
    title: "Queue Management Application",
    subtitle: "Real-Time Digital Queue Tracking & Notification System",
    category: "Mobile & Web Application | Real-Time Services",
    description: "A digital queue management application designed to reduce physical waiting times in service centers through real-time queue position tracking, backend API integration, and multi-channel notifications.",
    keyHighlights: [
      "Live queue position status updates powered by backend REST endpoints",
      "Firebase Cloud Messaging (FCM) integration for instant ticket call push notifications",
      "SMS alert fallback for customers awaiting their turn remotely",
      "Service counter interface allowing staff to call, hold, or complete tickets"
    ],
    techStack: [
      "Flutter",
      "Dart",
      "REST APIs",
      "Firebase Cloud Messaging",
      "SMS Integration"
    ],
    architectureNotes: "Structured asynchronous event loop for polling and push token registration."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend-core",
    categoryName: "Frontend Engineering",
    status: "production",
    statusLabel: "Current Production Use",
    description: "Core technologies used daily to architect, build, and maintain production enterprise web interfaces.",
    skills: [
      { name: "React 19", tag: "Primary" },
      { name: "Next.js 16 (App Router)", tag: "Production" },
      { name: "JavaScript (ES6+)", tag: "Core" },
      { name: "HTML5 & Semantic Web", tag: "Standard" },
      { name: "CSS3 & Responsive Layouts", tag: "Standard" },
      { name: "Tailwind CSS", tag: "Styling" }
    ]
  },
  {
    id: "backend-databases",
    categoryName: "Backend & Databases",
    status: "production",
    statusLabel: "Server & Database Proficiency",
    description: "Server-side runtime, API development, and document/relational databases.",
    skills: [
      { name: "Node.js", tag: "Server Runtime" },
      { name: "Express.js", tag: "Backend Framework" },
      { name: "MongoDB", tag: "NoSQL Database" },
      { name: "SQL Server", tag: "Relational DB" },
      { name: "RESTful APIs", tag: "API Architecture" }
    ]
  },
  {
    id: "state-management",
    categoryName: "State Management & Query Caching",
    status: "production",
    statusLabel: "Current Production Use",
    description: "Predictable application data stores, normalized caches, and reactive state flows.",
    skills: [
      { name: "Redux Toolkit", tag: "Production" },
      { name: "RTK Query (28+ Tag Types)", tag: "Caching / Endpoints" },
      { name: "React Redux", tag: "Integration" },
      { name: "Custom Middleware (errorLogger)", tag: "Resilience" }
    ]
  },
  {
    id: "hardware-integration",
    categoryName: "Hardware, Barcode & Export Engines",
    status: "production",
    statusLabel: "Current Production Use",
    description: "Hardware scanner integration, barcode label canvas rendering, and client-side document exports.",
    skills: [
      { name: "html5-qrcode", tag: "Camera Scanner" },
      { name: "jsbarcode", tag: "SVG / Canvas Labels" },
      { name: "jspdf & html2canvas", tag: "PDF Generation" },
      { name: "xlsx", tag: "Excel Export" }
    ]
  },
  {
    id: "api-integration",
    categoryName: "API Integration & Data Handling",
    status: "production",
    statusLabel: "Current Production Use",
    description: "Connecting frontend views with robust backend services, structured validation, and token flows.",
    skills: [
      { name: "REST APIs", tag: "Production" },
      { name: "JSON Data Parsing", tag: "Standard" },
      { name: "Token-Based Auth (JWT)", tag: "Bearer Headers" },
      { name: "Debounced Query Listeners", tag: "Optimization" },
      { name: "409/410 Error Catalogs", tag: "Correlation IDs" }
    ]
  },
  {
    id: "ui-visualization",
    categoryName: "UI Architecture & Visualization",
    status: "production",
    statusLabel: "Current Production Use",
    description: "Reusable component design systems, data visualization, and micro-interactions.",
    skills: [
      { name: "Reusable Component Design", tag: "Architecture" },
      { name: "Recharts", tag: "Data Visualization" },
      { name: "Framer Motion", tag: "Subtle Motion" },
      { name: "Lucide React", tag: "Icons" },
      { name: "Accessible Design (WCAG)", tag: "Accessibility" }
    ]
  },
  {
    id: "developer-tools",
    categoryName: "Developer Tools & Workflow",
    status: "production",
    statusLabel: "Current Production Use",
    description: "Daily development tooling for version control, API testing, and code quality.",
    skills: [
      { name: "Git & GitHub", tag: "Version Control" },
      { name: "Postman", tag: "API Testing" },
      { name: "VS Code", tag: "Primary IDE" },
      { name: "Chrome DevTools", tag: "Debugging & Profiling" },
      { name: "Visual Studio", tag: "IDE" }
    ]
  },
  {
    id: "previous-stack",
    categoryName: "Previous Experience & Full-Stack Background",
    status: "previous",
    statusLabel: "Prior Professional Experience",
    description: "Proven experience from prior mobile and full-stack enterprise projects at Kullooo Innovative Solutions.",
    skills: [
      { name: "Flutter", tag: "Mobile / Web" },
      { name: "Dart", tag: "Language" },
      { name: "C#", tag: "Backend" },
      { name: "ASP.NET", tag: "Web APIs" },
      { name: "SQL Server", tag: "Relational DB" },
      { name: "Firebase Cloud Messaging", tag: "Push Notifications" },
      { name: "Provider & Riverpod", tag: "Flutter State" }
    ]
  },
  {
    id: "expanding-depth",
    categoryName: "Expanding Technical Depth",
    status: "expanding",
    statusLabel: "Actively Practicing & Proficient",
    description: "Technologies actively being applied in personal engineering projects, portfolio architecture, and modern codebases.",
    skills: [
      { name: "TypeScript", tag: "Strict Types / Interfaces" },
      { name: "Next.js App Router Patterns", tag: "Advanced Routing" },
      { name: "Automated Linter Integration", tag: "Quality Assurance" }
    ]
  }
];

export const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Featured Project", href: "#featured-project" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

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
  phone: "+91 9842140477",
  phoneFormatted: "+91 98421 40477",
  whatsappUrl: "https://wa.me/919842140477",
  githubRepoUrl: "https://github.com/fathima2025-design/Fathima-Nishath-Portfolio",
  livePortfolioUrl: "https://fathima1996.netlify.app/",
  aboutBio: {
    lead: "Front-End Developer specializing in high-reliability web applications, complex business workflows, and modular React/Next.js architectures.",
    paragraphs: [
      "My engineering journey began in full-stack cross-platform development with Flutter, C#, and ASP.NET, where I developed mobile and web solutions with real-time API integrations, token authentication, and relational databases. This foundational background provided deep appreciation for system design, data modeling, and end-to-end data pipelines.",
      "Today, I focus my engineering practice primarily on frontend engineering with React, Next.js, and Redux Toolkit. In my current role at Kairox AI Tech, I build and maintain the user interface of an enterprise-grade ERP system for the leather manufacturing industry—turning intricate manufacturing processes (tanning stages, batch barcode tracking, procurement, inventory thresholds, and shift roll calls) into responsive, intuitive, and performant web interfaces.",
      "I prioritize clean code, accessible semantic HTML, reusable component design systems, and resilient asynchronous data caching using RTK Query. I am committed to continuous learning, expanding my technical depth in modern TypeScript patterns and scalable frontend architecture."
    ],
    coreValues: [
      {
        title: "Real-World Business Focus",
        description: "Translating multi-step industrial workflows into clear, error-tolerant interfaces that field operators and supervisors navigate efficiently."
      },
      {
        title: "Modular & Reusable UI",
        description: "Authoring cohesive, maintainable design systems with isolated UI components, clean props contracts, and strict separation of concerns."
      },
      {
        title: "Robust State & Data Flow",
        description: "Leveraging Redux Toolkit and RTK Query for predictable cache management, optimistic updates, and clean asynchronous error handling."
      },
      {
        title: "Continuous Learning",
        description: "Actively building on full-stack fundamentals to master cutting-edge React patterns, Next.js rendering strategies, and typed frontend codebases."
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
      "Develop and maintain ERP frontend features using React, Next.js, and JavaScript.",
      "Build reusable UI components, layout templates, and modular application pages.",
      "Integrate REST APIs and manage client data flows using Redux Toolkit and RTK Query.",
      "Implement complex forms, analytical dashboards, and manufacturing workflow views.",
      "Work across core modules including production tracking, barcode management, analytics, attendance, inventory, procurement, orders, and administrative interfaces.",
      "Organize frontend code into reusable components, shared utilities, and feature-specific modules.",
      "Handle asynchronous API requests, optimistic UI updates, state caching, and user-facing error boundaries."
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
  title: "Leather Manufacturing ERP System",
  subtitle: "Enterprise-grade manufacturing execution & operational management platform",
  category: "Enterprise Software | Manufacturing ERP",
  role: "Front-End Developer — Kairox AI Tech",
  company: "Kairox AI Tech",
  duration: "April 2026 – Present",
  overview: "An enterprise ERP frontend supporting production, inventory, logistics, and operational workflows for a commercial leather manufacturing business. The system replaces fragmented records with a single, synchronized dashboard that tracks hides through chemical tanning, finishing, automated barcode tagging, inventory buffers, and dispatch.",
  businessContext: "Leather manufacturing involves stringent physical batch processing—ranging from wet blue hides and chemical soaking to splitting, dyeing, and QA inspection. Manual paperwork previously caused discrepancies in chemical consumption, stock tracing, and shift accountability. The ERP platform digitizes each handoff, giving floor supervisors and plant leadership real-time visibility.",
  responsibilities: [
    "Architecting and building responsive, modular frontend views in React and Next.js.",
    "Implementing centralized state slices and automated query caching with Redux Toolkit & RTK Query.",
    "Designing reusable UI component primitives (data tables, filter toolbars, modal drawers, form validators).",
    "Integrating 25+ REST API endpoints with standardized token handling and error feedback.",
    "Building interactive visualization dashboards with Recharts for production throughput and yield analysis."
  ],
  technicalImplementation: [
    "Modular architecture: feature-based directory structure separating UI components, state queries, and types.",
    "Asynchronous data layer: RTK Query endpoints for automatic tag invalidation, polling, and cached queries.",
    "Data validation: robust multi-step form handling with custom input masking for chemical metrics and barcode IDs.",
    "Performance tuning: memoized selectors, virtualized table rendering for high-volume batch inventories."
  ],
  modules: [
    {
      id: "production-tracking",
      name: "Production Tracking & Stage Workflows",
      shortDesc: "Real-time tracking of leather hides through sequential processing stages.",
      detailedDesc: "Interactive kanban and table views mapping hides from raw beamhouse soaking, liming, tanning, splitting, crust dyeing, through to final finishing. Each stage logs chemical formulation IDs, lot numbers, moisture levels, and timestamped handoffs.",
      workflowStage: "Beamhouse → Tanning → Crust → Dyeing → Finishing",
      keyFeatures: [
        "Multi-stage pipeline tracker with real-time status badges",
        "Stage completion modal with yield quantity and weight logging",
        "Quality control sign-off checkpoints before batch promotion",
        "Batch delay alerts and supervisor escalation indicators"
      ],
      frontendTechFocus: "React state machines, Redux Toolkit batch slices, reusable workflow status steppers",
      metricBadge: "5 Stage Gates"
    },
    {
      id: "barcode-management",
      name: "Barcode & Batch Traceability",
      shortDesc: "Unique lot identification and handheld scanner input processing.",
      detailedDesc: "Barcode management module allowing floor workers to scan roll tags, verify batch pedigree, and update lot states with minimal keyboard input. Provides full audit trails from raw supplier lot to dispatched leather rolls.",
      workflowStage: "Receiving & Production Floor Scanning",
      keyFeatures: [
        "Hardware-ready barcode input listeners with debounce logic",
        "Instant lot metadata lookup with chemical history",
        "Printable QR / Code128 barcode label generator previews",
        "Cross-stage traceability ledger for compliance audits"
      ],
      frontendTechFocus: "Keyboard event hooks, debounced RTK Query lookups, SVG barcode rendering",
      metricBadge: "Lot Traceability"
    },
    {
      id: "analytics-dashboards",
      name: "Analytics & Executive Dashboards",
      shortDesc: "Operational metrics, yield rates, batch cycle times, and throughput.",
      detailedDesc: "Executive overview displaying daily hide square footage output, chemical consumption trends, reject/re-dye rates, and plant capacity utilization with interactive date filtering.",
      workflowStage: "Plant Management & Daily Review",
      keyFeatures: [
        "Dynamic throughput line and area charts with Recharts",
        "Defect category distribution donut breakdown",
        "Shift output comparison metrics with percentage deltas",
        "CSV and PDF report export integration"
      ],
      frontendTechFocus: "Recharts responsive containers, custom tooltip overlays, memoized chart datasets",
      metricBadge: "Live Metrics"
    },
    {
      id: "employee-attendance",
      name: "Employee Attendance & Shifts",
      shortDesc: "Shift schedules, shop floor attendance, and roll call monitoring.",
      detailedDesc: "Departmental attendance module tailored for plant shifts (Morning, Evening, Night). Tracks technician presence across tanning pits, splitting machinery, and packing stations.",
      workflowStage: "Human Resources & Shift Management",
      keyFeatures: [
        "Shift calendar with daily attendance status toggles",
        "Overtime and late arrival automatic calculation",
        "Department-wise worker allocation to machinery lines",
        "Monthly attendance summary with exportable logs"
      ],
      frontendTechFocus: "Interactive date matrix, custom filtering tabs, accessible status pills",
      metricBadge: "3 Shift Cycles"
    },
    {
      id: "inventory-materials",
      name: "Inventory & Raw Materials",
      shortDesc: "Ledger for raw hides, tanned crusts, and chemical supplies.",
      detailedDesc: "Comprehensive warehouse inventory tracking physical hide counts, square footage stock, and chemical drums (chromium salts, tanning oils, dyes) with automated low-stock warnings.",
      workflowStage: "Warehouse & Chemical Store",
      keyFeatures: [
        "Categorized stock ledger (Raw Hides, Wet Blue, Crust, Finished)",
        "Minimum stock threshold alerts with visual urgency indicators",
        "Batch consumption deduction on stage completion",
        "Multi-warehouse storage bin location locator"
      ],
      frontendTechFocus: "Sortable/searchable data tables, badge priority indicators, modal ledger view",
      metricBadge: "Real-Time Stock"
    },
    {
      id: "procurement-orders",
      name: "Procurement & Vendor Orders",
      shortDesc: "Purchase requisitions, vendor PO lifecycles, and Goods Received Notes.",
      detailedDesc: "Procurement pipeline connecting raw hide suppliers and chemical vendors. Manages requisition approval workflows, purchase orders, shipping ETAs, and GRN verification on delivery.",
      workflowStage: "Supply Chain & Accounts Payable",
      keyFeatures: [
        "Purchase Order lifecycle (Draft → Approved → Dispatched → Received)",
        "Goods Received Note (GRN) discrepancy checker",
        "Vendor performance and fulfillment timeline logs",
        "Budget allocation vs actual spend tracking"
      ],
      frontendTechFocus: "Multi-step PO creation forms, interactive lifecycle timeline badges",
      metricBadge: "PO Lifecycle"
    },
    {
      id: "administrative-interfaces",
      name: "Administrative & Access Control",
      shortDesc: "Role-based access control, security permissions, and audit logs.",
      detailedDesc: "Granular administrative panel enabling administrators to configure user roles (Plant Manager, Chemical Supervisor, Machine Operator, Auditor), assign module permissions, and inspect system audit logs.",
      workflowStage: "System Administration & Security",
      keyFeatures: [
        "Role-Based Access Control (RBAC) permission matrix",
        "User profile provisioning with department tagging",
        "Audit trail inspector logging sensitive data modifications",
        "System configuration toggles and maintenance mode switches"
      ],
      frontendTechFocus: "Matrix toggle grids, permission check resolvers, secure auth state handling",
      metricBadge: "RBAC Matrix"
    }
  ],
  challengesAndSolutions: [
    {
      challenge: "Handling complex, deeply nested multi-step forms across 5 sequential manufacturing stages without losing uncommitted worker inputs.",
      solution: "Engineered form state persistence using local state combined with Redux Toolkit slices, implementing validation gates at each transition to ensure data integrity.",
      technicalImpact: "Eliminated mid-session input drops and ensured operators could step between stages seamlessly."
    },
    {
      challenge: "Providing low-latency barcode scanner entry on the production floor where rapid keyboard-wedge scans would trigger redundant API queries.",
      solution: "Built a custom React keyboard listener hook with debounce thresholds and client-side format validation before dispatching RTK Query lookups.",
      technicalImpact: "Reduced unnecessary network requests by over 60% while providing instant feedback to floor operators."
    },
    {
      challenge: "Rendering large tabular inventories and historical batch data without UI lag on standard workstation hardware.",
      solution: "Implemented modular table components with memoized cell renderers, client-side pagination, and targeted column filtering.",
      technicalImpact: "Maintained smooth 60fps scrolling and rapid filter response across thousands of batch records."
    }
  ],
  technologies: [
    "React",
    "Next.js",
    "JavaScript",
    "Redux Toolkit",
    "React Redux",
    "RTK Query",
    "REST APIs",
    "JSON",
    "Tailwind CSS",
    "Framer Motion",
    "Recharts",
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
      { name: "React", tag: "Primary" },
      { name: "Next.js", tag: "Production" },
      { name: "JavaScript (ES6+)", tag: "Core" },
      { name: "HTML5 & Semantic Web", tag: "Standard" },
      { name: "CSS3 & Responsive Layouts", tag: "Standard" },
      { name: "Tailwind CSS", tag: "Styling" }
    ]
  },
  {
    id: "state-management",
    categoryName: "State Management & Caching",
    status: "production",
    statusLabel: "Current Production Use",
    description: "Predictable application data stores, normalized caches, and reactive state flows.",
    skills: [
      { name: "Redux Toolkit", tag: "Production" },
      { name: "React Redux", tag: "Integration" },
      { name: "RTK Query", tag: "Caching / Endpoints" },
      { name: "Context API", tag: "Lightweight State" }
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
      { name: "Asynchronous Data Handling", tag: "Async / Await" },
      { name: "Token-Based Authentication", tag: "JWT / Bearer" },
      { name: "Error Boundaries & Interceptors", tag: "Resilience" }
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
      { name: "Responsive Design (Mobile-Desktop)", tag: "Adaptive" },
      { name: "Recharts", tag: "Data Visualization" },
      { name: "Framer Motion", tag: "Subtle Motion" },
      { name: "Accessibility (a11y)", tag: "WCAG Principles" }
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
      { name: "Next.js App Router", tag: "Advanced Routing" },
      { name: "Component Unit Testing", tag: "Quality Assurance" }
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

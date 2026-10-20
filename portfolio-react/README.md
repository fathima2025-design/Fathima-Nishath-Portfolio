# Fathima Nishath — Professional Front-End Developer Portfolio

Modern, production-ready developer portfolio built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Rebuilt and enhanced from the original Flutter web portfolio to showcase enterprise ERP frontend engineering, complex manufacturing workflows, and reusable component architectures for Front-End and React Developer roles.

---

## 👤 Profile & Credentials

- **Name:** Fathima Nishath
- **Headline:** Front-End Developer | React | Next.js | TypeScript
- **Current Role:** Front-End Developer at **Kairox AI Tech** (April 2026 – Present)
- **Previous Role:** Flutter Full Stack Developer at **Kullooo Innovative Solutions** (July 2025 – March 2026)
- **Location:** Tamil Nadu, India
- **Email:** [danishahamed2023@gmail.com](mailto:danishahamed2023@gmail.com)
- **Phone:** +91 9842140477
- **Existing Live Portfolio:** [https://fathima1996.netlify.app/](https://fathima1996.netlify.app/)
- **GitHub Portfolio Repository:** [https://github.com/fathima2025-design/Fathima-Nishath-Portfolio](https://github.com/fathima2025-design/Fathima-Nishath-Portfolio)

---

## 🚀 Technology Stack

- **Core:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS (customized palette with slate, navy, and enterprise accents)
- **Icons:** Lucide React
- **Data Visualization:** Recharts (responsive SVG charts for ERP throughput and yield tracking)
- **State & Data Concepts:** Redux Toolkit, RTK Query, REST API integrations, Token-based Auth
- **Code Quality:** Oxlint, strict TypeScript verification (`tsc -b`)

---

## 📁 Architecture & Folder Structure

```text
portfolio-react/
├── public/
│   ├── favicon.svg             # Custom SVG brand favicon
│   └── resume.pdf              # Target location for official PDF resume
├── src/
│   ├── assets/                 # Static media and assets
│   ├── components/
│   │   ├── common/
│   │   │   ├── Icons.tsx       # Reusable SVG brand icons
│   │   │   ├── Navbar.tsx      # Responsive navigation with active scroll-spy & drawer
│   │   │   ├── Footer.tsx      # Verified links, navigation links, and back-to-top
│   │   │   ├── SectionHeader.tsx # Reusable section title with eyebrow badges
│   │   │   └── ResumeModal.tsx # Accessible modal with verified credentials & direct request
│   │   └── sections/
│   │       ├── HeroSection.tsx # Enterprise hero headline & verified contact CTAs
│   │       ├── ExperienceSection.tsx # Current Kairox role first, previous Kullooo role
│   │       ├── FeaturedErpProject.tsx # Leather Manufacturing ERP deep-dive & module explorer
│   │       ├── PreviousProjects.tsx # Preserved Flutter apps (Face Attendance, Voice Grocery, Queue)
│   │       ├── SkillsSection.tsx # Honest categorization (Current vs Prior vs Expanding)
│   │       ├── AboutSection.tsx # Career transition & engineering principles
│   │       └── ContactSection.tsx # Direct email, phone, and WhatsApp channels (no fake form)
│   ├── data/
│   │   └── portfolioData.ts    # Centralized, strongly-typed portfolio data models
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces for experience, projects, and skills
│   ├── App.tsx                 # Root layout assembling all modular sections
│   ├── index.css               # Tailwind directives, focus rings, reduced-motion rules
│   └── main.tsx                # React application entry point
├── index.html                  # SEO metadata, Open Graph tags, Plus Jakarta Sans typography
├── package.json
├── tailwind.config.js          # Tailored color palette, fonts, and elevation shadows
└── tsconfig.app.json           # Strict TypeScript configuration
```

---

## 🛠️ Local Development & Build Commands

Inside the `portfolio-react` directory:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to inspect the application.

### 3. Run Production Build (TypeScript Check + Vite Bundle)
```bash
npm run build
```
The optimized production bundle will be generated into `dist/`.

### 4. Preview Production Build Locally
```bash
npm run preview
```

### 5. Run Linter
```bash
npm run lint
```

---

## 📄 Adding Your Resume PDF

The application includes a verified **Resume Modal** that prevents broken links or fake download behaviors:
1. Copy your compiled resume PDF file to:
   ```text
   portfolio-react/public/resume.pdf
   ```
2. When present, the button inside the modal will directly open and download your real PDF file.
3. In addition, the modal provides a 1-click **"Request via Email"** and copyable email address for recruiters.

---

## 🌐 Deployment Instructions (Netlify / Vercel)

### Deploying to Netlify (Matching your existing `fathima1996.netlify.app` site):
1. In Netlify dashboard, link your GitHub repository: `https://github.com/fathima2025-design/Fathima-Nishath-Portfolio`
2. Configure build settings:
   - **Base directory:** `portfolio-react`
   - **Build command:** `npm run build`
   - **Publish directory:** `portfolio-react/dist`
3. Click **Deploy Site**.

---

## 🔒 Confidentiality & Accuracy Standard

- All metrics, screenshots, and diagrams for the **Leather Manufacturing ERP System** are fully sanitized illustrations.
- Proprietary source code, customer records, database credentials, and internal API keys are strictly excluded.
- The original Flutter source code remains intact inside `Fathima-Nishath-Portfolio-main/`.

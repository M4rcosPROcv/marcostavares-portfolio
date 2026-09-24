import { useState } from "react";
import {
  Terminal,
  Code2,
  Download,
  Database,
  Server,
  ExternalLink,
  GraduationCap,
  MapPin,
  Mail,
  Briefcase,
  Trophy,
  Cloud,
  ArrowUp,
  Users,
  Lock,
  Menu,
  X,
} from "lucide-react";

interface Project {
  title: string;
  badge: string;
  affiliation?: string;
  description: string;
  highlights: string[];
  tech: string[];
  repoUrl?: string;
  image?: string;
  windowTitle?: string;
  isMobile?: boolean;
}

interface Skill {
  name: string;
  hover: string;
}

const projects: Project[] = [
  {
    title: "HGP Automated Intake Pipeline",
    badge: "Applied AI / Desktop Engine",
    affiliation: "ACSGW Co-op",
    image: "/projects/intake-preview.png",
    windowTitle: "intake-pipeline-v1.0.exe",
    description:
      "Desktop intake pipeline automating high-volume handwritten/printed form parsing, validation, and database ingestion.",
    highlights: [
      "Custom-trained Azure AI Document Intelligence model integrated via REST API for form extraction",
      "Architected multithreaded PySide6 desktop interface with stage-by-stage review and confidence scoring",
      "Replaced manual data entry workflows, reducing per-form intake latency by over 80%",
    ],
    tech: ["Python", "PySide6", "Azure AI", "REST APIs", "OpenCV"],
  },
  {
    title: "My South Church Workspace API",
    badge: "Cloud Auth & Directory",
    affiliation: "Production Project",
    image: "/projects/my-south-church.png",
    windowTitle: "app.mysouthchurch.org",
    description:
      "Multi-tenant backend platform managing organizational roles, volunteers, and directory services with automated cloud CI/CD.",
    highlights: [
      "Designed 15+ REST endpoints in Spring Boot with Firebase JWT authentication and RBAC",
      "Integrated with Google Workspace APIs and automated MySQL schema models via Spring Data JPA",
      "Engineered automated GitHub Actions CI/CD pipeline deploying directly to Google Cloud Platform (GCP)",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "GCP",
      "Firebase JWT",
      "GitHub Actions",
    ],
    repoUrl: "https://github.com/lucasbacchi/My-South-Church",
  },
  {
    title: "CinePraia Cinema Ticket Engine",
    badge: "Full-Stack Web App",
    affiliation: "Featured Project",
    image: "/projects/cinepraia.png",
    windowTitle: "cinepraia.cv",
    description:
      "Web application for cinema seat reservations, movie scheduling, and user booking transactions.",
    highlights: [
      "Built stateless Spring Boot security filter chain with encrypted JWT session lifecycle",
      "Designed relational schema to prevent double-booking race conditions during seat checkout",
      "Interactive responsive interface developed in React, TypeScript, and Tailwind CSS",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "React",
      "TypeScript",
    ],
  },
  {
    title: "Game Deals Tracker",
    badge: "Mobile & Async APIs",
    affiliation: "Android Systems",
    image: "/projects/game-deals.png",
    windowTitle: "deals-tracker-v1.0.apk",
    isMobile: true,
    description:
      "Mobile data client querying real-time game pricing feeds across multiple digital storefronts.",
    highlights: [
      "Integrated Volley for asynchronous HTTP requests parsing 1,000+ real-time JSON discount feeds",
      "Implemented local caching and persistence for user favorites and deal alert thresholds",
    ],
    tech: ["Kotlin", "Android SDK", "REST APIs", "Volley", "JSON"],
    repoUrl: "https://github.com/M4rcosPROcv/GameDealsApp",
  },
  {
    title: "Healthcare Prior Authorization Tool",
    badge: "Modular Microservice",
    affiliation: "NeighborHealth MVP",
    description:
      "Healthcare backend service streamlining medical authorization workflows, validation engines, and audit packet generation.",
    highlights: [
      "Engineered dynamic decision logic in FastAPI to verify clinical submission readiness",
      "Collaborated in a modular service architecture with audit logging and structured packet creation",
      "Documented and stress-tested endpoints with Swagger/OpenAPI and structured contract testing",
    ],
    tech: ["Python", "FastAPI", "SQL", "REST APIs", "Swagger/OpenAPI"],
  },
  {
    title: "CVCash Digital Wallet & Ledger",
    badge: "Fintech / Transaction Engine",
    affiliation: "Financial Systems",
    description:
      "Fintech payment platform managing peer-to-peer balance transfers, wallet ledger states, and atomic transaction records.",
    highlights: [
      "Engineered ACID-compliant transaction routines to prevent double-spending and ensure balance consistency",
      "Designed secure RESTful wallet management endpoints with token authentication and audit trails",
      "Modeled relational schemas with optimized indexing for rapid balance ledger auditing and transaction lookups",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Docker"],
  },
];

const journeySteps = [
  {
    period: "Sep 2026 – Present",
    role: "Information Systems & Technology Co-op",
    institution: "Adventist Community Services of Greater Washington",
    location: "Silver Spring, MD",
    type: "work",
    description: [
      "Architected an automated document intake tool using PySide6 and custom Azure AI Document Intelligence models, cutting intake processing time and reducing manual errors.",
      "Diagnosed and deployed physical network drops and endpoint cabling, designed operational reports in Power BI, and developed digital media assets.",
    ],
  },
  {
    period: "Jul 2026 – Aug 2026",
    role: "Volunteer Coding Instructor (STEM Summer Camp)",
    institution: "ACSGW Youth Program",
    location: "Silver Spring, MD",
    type: "volunteer",
    description:
      "Instructed 20+ elementary students (Grades 1–5) in computational logic, algorithm structure, and event-driven game scripting using MIT Scratch.",
  },
  {
    period: "Fall 2025 – Expected Fall 2027",
    role: "B.S. in Computer Science",
    institution: "Wentworth Institute of Technology",
    location: "Boston, MA",
    type: "education",
    description: [
      "Deepening technical foundations in core systems and backend development.",
      "Key coursework: Computer Networking, Algorithms, Software Engineering, Computer Organization, and Discrete Mathematics.",
    ],
  },
  {
    period: "Sep 2023 – May 2025",
    role: "A.S. in Computer Science",
    institution: "Bunker Hill Community College",
    location: "Boston, MA",
    type: "education",
    description:
      "Graduated with foundational coursework in Data Structures, Object-Oriented Programming (Java/C++), SQL Programming, and Android Development prior to transferring to Wentworth.",
  },
  {
    period: "Sep 2023 – May 2025",
    role: "Academic Testing Proctor",
    institution: "Bunker Hill Community College",
    location: "Boston, MA",
    type: "work",
    description: [
      "Managed high-volume, secure testing environments for hundreds of students across standardized testing sessions.",
      "Enforced strict Pearson VUE exam guidelines, verified candidate identities, and maintained data integrity and testing compliance under pressure.",
    ],
  },
  {
    period: "Spring 2024",
    role: "3rd Place Winner — HACKBHCC2024 Hackathon",
    institution: "Bunker Hill Community College",
    location: "Boston, MA",
    type: "award",
    description:
      "Developed and pitched a functional application prototype in a 3-person team under a time-constrained sprint, earning $1,200 in prize pool funding.",
  },
];

const languageSkills: Skill[] = [
  {
    name: "Java",
    hover:
      "hover:border-orange-500 hover:text-orange-400 hover:shadow-[0_0_14px_rgba(249,115,22,0.3)]",
  },
  {
    name: "Python",
    hover:
      "hover:border-yellow-400 hover:text-yellow-300 hover:shadow-[0_0_14px_rgba(250,204,21,0.3)]",
  },
  {
    name: "C",
    hover:
      "hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_14px_rgba(59,130,246,0.3)]",
  },
  {
    name: "C++",
    hover:
      "hover:border-indigo-400 hover:text-indigo-300 hover:shadow-[0_0_14px_rgba(129,140,248,0.3)]",
  },
  {
    name: "Kotlin",
    hover:
      "hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_14px_rgba(168,85,247,0.3)]",
  },
  {
    name: "TypeScript",
    hover:
      "hover:border-sky-400 hover:text-sky-300 hover:shadow-[0_0_14px_rgba(56,189,248,0.3)]",
  },
  {
    name: "SQL",
    hover:
      "hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_14px_rgba(34,211,238,0.3)]",
  },
];

const backendSkills: Skill[] = [
  {
    name: "Spring Boot",
    hover:
      "hover:border-emerald-500 hover:text-emerald-400 hover:shadow-[0_0_14px_rgba(16,185,129,0.3)]",
  },
  {
    name: "FastAPI",
    hover:
      "hover:border-teal-400 hover:text-teal-300 hover:shadow-[0_0_14px_rgba(45,212,191,0.3)]",
  },
  {
    name: "Spring Data JPA",
    hover: "hover:border-emerald-400 hover:text-emerald-300",
  },
  {
    name: "JWT Auth",
    hover:
      "hover:border-pink-500 hover:text-pink-400 hover:shadow-[0_0_14px_rgba(236,72,153,0.3)]",
  },
  { name: "OAuth2", hover: "hover:border-blue-400 hover:text-blue-300" },
  { name: "REST APIs", hover: "hover:border-teal-400 hover:text-teal-300" },
  {
    name: "Design Patterns",
    hover: "hover:border-purple-400 hover:text-purple-300",
  },
];

const cloudSkills: Skill[] = [
  {
    name: "Azure AI Doc Intelligence",
    hover:
      "hover:border-sky-400 hover:text-sky-300 hover:shadow-[0_0_14px_rgba(56,189,248,0.3)]",
  },
  {
    name: "Google Cloud (GCP)",
    hover:
      "hover:border-blue-400 hover:text-blue-300 hover:shadow-[0_0_14px_rgba(96,165,250,0.3)]",
  },
  {
    name: "Docker",
    hover:
      "hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_14px_rgba(6,182,212,0.3)]",
  },
  { name: "GitHub Actions", hover: "hover:border-slate-300 hover:text-white" },
  {
    name: "Linux",
    hover:
      "hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_14px_rgba(251,191,36,0.3)]",
  },
];

const toolSkills: Skill[] = [
  {
    name: "PostgreSQL",
    hover:
      "hover:border-sky-500 hover:text-sky-300 hover:shadow-[0_0_14px_rgba(14,165,233,0.3)]",
  },
  {
    name: "MySQL",
    hover:
      "hover:border-amber-500 hover:text-amber-400 hover:shadow-[0_0_14px_rgba(245,158,11,0.3)]",
  },
  { name: "PySide6", hover: "hover:border-emerald-400 hover:text-emerald-300" },
  {
    name: "Postman",
    hover:
      "hover:border-orange-500 hover:text-orange-400 hover:shadow-[0_0_14px_rgba(249,115,22,0.3)]",
  },
  { name: "Swagger", hover: "hover:border-lime-400 hover:text-lime-300" },
  { name: "Power BI", hover: "hover:border-yellow-500 hover:text-yellow-400" },
  {
    name: "Git",
    hover:
      "hover:border-rose-500 hover:text-rose-400 hover:shadow-[0_0_14px_rgba(244,63,94,0.3)]",
  },
  { name: "Jira", hover: "hover:border-blue-500 hover:text-blue-400" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/10 blur-[130px] pointer-events-none -z-10" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/80 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-mono font-bold text-lg tracking-tight hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            <span className="bg-[linear-gradient(135deg,#2dd4bf,#007092)] bg-clip-text text-transparent">
              marcostavares.me
            </span>
            <span className="animate-pulse text-teal-300">_</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-mono text-slate-300">
            <a href="#about" className="hover:text-teal-400 transition-colors">
              About
            </a>
            <a
              href="#experience"
              className="hover:text-teal-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-teal-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pt-2 pb-5 border-b border-slate-800 bg-[#030712]/95 backdrop-blur-xl flex flex-col gap-3 font-mono text-sm">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-slate-300 hover:text-teal-400 transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-slate-300 hover:text-teal-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-slate-300 hover:text-teal-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-slate-300 hover:text-teal-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-slate-300 hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/40 bg-teal-500/10 text-teal-400 text-xs font-mono">
              <Terminal size={14} /> Systems & Backend Software Engineer
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-mono leading-tight">
              Hi, I’m <br />
              <span className="bg-[linear-gradient(135deg,#2dd4bf,#007092)] bg-clip-text text-transparent">
                Marcos Tavares
              </span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl font-mono">
              Computer Science student focused on designing and building
              scalable backend architectures, secure APIs, cloud integrations,
              and distributed data pipelines.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(20,184,166,0.35)] transition-all font-mono"
              >
                <Code2 size={16} /> View Projects
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-colors font-mono"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>

            {/* Social Pill Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="https://github.com/M4rcosPROcv"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-teal-400 text-xs font-mono transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/marcos-tavares-swe/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-teal-400 text-xs font-mono transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0-.01 3.32 1.66 1.66 0 0 0 .01-3.32z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:mtavares25@outlook.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-800 bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-teal-400 text-xs font-mono transition-colors"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Photo & Details Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="/pfp.jpg"
                alt="Marcos Tavares"
                className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover object-top border-2 border-slate-800 shadow-2xl"
              />
            </div>

            <div className="mt-6 text-center space-y-2 font-mono text-sm">
              <div className="flex items-center justify-center gap-1.5 text-slate-300">
                <MapPin size={15} className="text-red-400" /> Boston, MA
              </div>
              <div className="flex items-center justify-center gap-1.5 text-slate-300">
                <GraduationCap size={16} className="text-slate-400" />
                <span>
                  B.S. Computer Science @{" "}
                  <span className="text-[#FFC72C] font-semibold">
                    Wentworth
                  </span>
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                status: active
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience / Journey Timeline Section */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900"
      >
        <div className="mb-10">
          <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-1">
            Experience & Background
          </span>
          <h2 className="text-3xl font-bold font-mono text-white">
            My Journey
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800/80 space-y-10 ml-2 sm:ml-4">
          {journeySteps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-teal-400 group-hover:scale-125 group-hover:bg-teal-400 transition-all"></div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-mono text-teal-400 font-semibold">
                    {step.period}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {step.location}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-mono text-white flex items-center gap-2">
                  {step.type === "work" && (
                    <Briefcase size={16} className="text-teal-400" />
                  )}
                  {step.type === "volunteer" && (
                    <Users size={16} className="text-cyan-400" />
                  )}
                  {step.type === "education" && (
                    <GraduationCap size={16} className="text-amber-400" />
                  )}
                  {step.type === "award" && (
                    <Trophy size={16} className="text-yellow-400" />
                  )}
                  {step.role}
                </h3>
                <h4 className="text-sm font-mono text-slate-300 mb-3">
                  {step.institution}
                </h4>
                <div className="space-y-2">
                  {Array.isArray(step.description) ? (
                    step.description.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-slate-400 text-sm leading-relaxed font-sans"
                      >
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900"
      >
        <div className="mb-10">
          <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-1">
            Software Architecture
          </span>
          <h2 className="text-3xl font-bold font-mono text-white">
            Featured Systems & Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                {proj.image && (
                  <div className="mb-4 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 group">
                    {/* Window Titlebar Header */}
                    <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-slate-800 bg-slate-900/90">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                      <span className="ml-2 text-xs font-mono text-slate-400">
                        {proj.windowTitle || "application"}
                      </span>
                    </div>

                    {/* Device Viewport */}
                    {proj.isMobile ? (
                      <div className="w-full h-48 sm:h-52 bg-slate-950 flex items-center justify-center p-2.5">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="h-full max-h-[185px] w-auto object-contain rounded-md border border-slate-700/60 shadow-xl transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ) : (
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-48 sm:h-52 object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    )}
                  </div>
                )}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 block">
                      {proj.affiliation}
                    </span>
                    <h3 className="text-lg font-bold text-white font-mono">
                      {proj.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-teal-400 border border-slate-700 whitespace-nowrap">
                    {proj.badge}
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed font-sans">
                  {proj.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2 font-mono">
                    Architecture Highlights
                  </span>
                  <ul className="text-xs text-slate-300 space-y-1.5 font-mono">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-teal-400 select-none">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 bg-slate-800 rounded text-slate-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {proj.repoUrl ? (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 font-mono"
                  >
                    Repository <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 inline-flex items-center gap-1 font-mono">
                    <Lock size={12} /> Private Repo
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills / Technical Stack Section */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-900"
      >
        <div className="mb-10">
          <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-1">
            Technical Expertise
          </span>
          <h2 className="text-3xl font-bold font-mono text-white">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(20,184,166,0.1)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-mono font-bold text-sm mb-4">
                <Code2 size={18} /> Languages
              </div>
              <div className="flex flex-wrap gap-2">
                {languageSkills.map((s, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-300 font-mono border border-slate-700/60 hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200 cursor-default ${s.hover}`}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Backend & Architecture */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(20,184,166,0.1)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-mono font-bold text-sm mb-4">
                <Server size={18} /> Backend & APIs
              </div>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((s, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-300 font-mono border border-slate-700/60 hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200 cursor-default ${s.hover}`}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Cloud & Systems */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(20,184,166,0.1)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-mono font-bold text-sm mb-4">
                <Cloud size={18} /> Cloud & Systems
              </div>
              <div className="flex flex-wrap gap-2">
                {cloudSkills.map((s, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-300 font-mono border border-slate-700/60 hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200 cursor-default ${s.hover}`}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Databases & Tools */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 hover:-translate-y-1.5 hover:shadow-[0_0_25px_rgba(20,184,166,0.1)] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-mono font-bold text-sm mb-4">
                <Database size={18} /> Databases & Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {toolSkills.map((s, i) => (
                  <span
                    key={i}
                    className={`text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 text-slate-300 font-mono border border-slate-700/60 hover:-translate-y-0.5 hover:bg-slate-800 transition-all duration-200 cursor-default ${s.hover}`}
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-900 text-center"
      >
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white">
            Let’s Connect
          </h2>
          <p className="text-slate-400 text-sm font-mono leading-relaxed">
            Feel free to reach out directly regarding software engineering
            roles, collaborations, or questions about my work.
          </p>

          <div className="pt-2">
            <a
              href="mailto:mtavares25@outlook.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shadow-[0_0_25px_rgba(20,184,166,0.35)] transition-all font-mono"
            >
              <Mail size={16} /> Send a Message
            </a>
          </div>

          {/* Social Quick Links with Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-xs font-mono text-slate-400">
            <a
              href="https://github.com/M4rcosPROcv"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>github.com/M4rcosPROcv</span>
            </a>

            <span className="text-slate-700">•</span>

            <a
              href="https://www.linkedin.com/in/marcos-tavares-swe/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-teal-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0-.01 3.32 1.66 1.66 0 0 0 .01-3.32z" />
              </svg>
              <span>linkedin.com/in/marcos-tavares-swe</span>
            </a>
          </div>
        </div>
      </section>

      {/* Clean Minimal Footer */}
      <footer className="border-t border-slate-900 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Marcos Tavares. All rights reserved.
          </div>
          <a
            href="#"
            className="flex items-center gap-1 hover:text-teal-400 transition-colors"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </footer>
    </div>
  );
}
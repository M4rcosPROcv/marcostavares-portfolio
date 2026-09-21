import {
  Terminal,
  Database,
  Server,
  ExternalLink,
} from "lucide-react";

interface Project {
  title: string;
  badge: string;
  description: string;
  architecture: string[];
  tech: string[];
  repoUrl: string;
}

const projects: Project[] = [
  {
    title: "CinePraia Core API",
    badge: "Auth & Data Pipeline",
    description:
      "Full-stack authentication and movie service featuring stateless JWT validation, RBAC, and relational query optimization.",
    architecture: [
      "Layered Controller-Service-Repo Pattern",
      "Stateless JWT Auth Filter",
      "Dockerized DB Container",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
    repoUrl: "https://github.com",
  },
  {
    title: "HGP Intake Pipeline",
    badge: "Async Worker / OCR",
    description:
      "Desktop workflow engine automating form digitization and OCR validation with confidence scoring and queue parsing.",
    architecture: [
      "PySide6 UI Event Loop",
      "OpenCV Image Preprocessing",
      "Hugging Face TrOCR Inference",
    ],
    tech: ["Python", "PySide6", "OpenCV", "TrOCR", "PyMuPDF"],
    repoUrl: "https://github.com",
  },
  {
    title: "Multicast Pub/Sub Network Lab",
    badge: "Distributed Systems",
    description:
      "Low-latency publisher-subscriber socket application operating over UDP multicast groups with custom packet serialization.",
    architecture: [
      "MulticastSocket Binding",
      "DatagramPacket Serialization",
      "Worker Thread Pooling",
    ],
    tech: ["Java", "Multicast Sockets", "Concurrency", "Networking"],
    repoUrl: "https://github.com",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-white">
      <header className="max-w-4xl mx-auto pt-20 pb-12 px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-mono mb-4">
          <Terminal size={14} /> Systems & Backend Software Engineer
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Marcos Tavares
        </h1>
        <p className="mt-4 text-slate-400 text-lg leading-relaxed max-w-2xl">
          Computer Science student focused on building scalable backend
          architectures, secure APIs, and distributed data systems.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 text-sm font-medium"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            GitHub Profile
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 rounded-lg text-white transition-colors"
          >
            <Server size={16} /> View Systems & Projects
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
        {/* Projects Section */}
        <section id="projects">
          <div className="flex items-center gap-2 text-xl font-bold mb-6 text-slate-200">
            <Server className="text-teal-400" size={20} /> Featured Systems &
            Projects
          </div>
          <div className="grid gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold text-white">
                    {proj.title}
                  </h2>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-teal-400 border border-slate-700">
                    {proj.badge}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4 leading-normal">
                  {proj.description}
                </p>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    Architecture Highlights
                  </span>
                  <ul className="text-xs text-slate-300 list-disc list-inside space-y-0.5 font-mono">
                    {proj.architecture.map((arch, aIdx) => (
                      <li key={aIdx}>{arch}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800 items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2 py-0.5 bg-slate-800/80 rounded text-slate-300 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-teal-400 hover:text-teal-300 inline-flex items-center gap-1 font-mono"
                  >
                    View Repo <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className="flex items-center gap-2 text-xl font-bold mb-6 text-slate-200">
            <Database className="text-teal-400" size={20} /> Core Technical
            Stack
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-teal-400 mb-2">Languages</h3>
              <p className="text-slate-400 font-mono text-xs leading-6">
                Java, Python, TypeScript, SQL, C/C++
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-teal-400 mb-2">
                Frameworks & Tools
              </h3>
              <p className="text-slate-400 font-mono text-xs leading-6">
                Spring Boot, Docker, React, PySide6, Git, Vite
              </p>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-teal-400 mb-2">
                Systems & Concepts
              </h3>
              <p className="text-slate-400 font-mono text-xs leading-6">
                REST APIs, JWT Auth, Sockets/UDP, Pipelines, Schema Design
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

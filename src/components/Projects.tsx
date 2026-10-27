import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  longDesc: string;
  techStack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  emoji: string;
}

const PROJECTS: Project[] = [
  {
    title: "Bazar Dhor",
    emoji: "🛒",
    description: "A full-stack e-commerce web application for online shopping.",
    longDesc:
      "Bazar Dhor is a complete e-commerce platform where users can browse products, add items to cart, and complete purchases. Built with a modern JavaScript stack featuring React on the front end and a Node.js/Express REST API backed by MongoDB.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    liveUrl: "https://bazar-dhor-lemon.vercel.app",
    featured: true,
  },
];

function TechBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "0.18rem 0.55rem",
        background: "rgba(108,99,255,0.12)",
        color: "var(--accent-light)",
        borderRadius: "0.35rem",
        fontSize: "0.75rem",
        fontWeight: 600,
        border: "1px solid rgba(108,99,255,0.25)",
      }}
    >
      {label}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        height: "100%",
      }}
    >
      {/* Visual header */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(108,99,255,0.25) 0%, rgba(168,155,255,0.08) 100%)",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "160px",
          borderBottom: "1px solid var(--border)",
          position: "relative",
        }}
      >
        {p.featured && (
          <span
            className="tag"
            style={{
              position: "absolute",
              top: "0.75rem",
              right: "0.75rem",
              fontSize: "0.72rem",
            }}
          >
            ⭐ Featured
          </span>
        )}
        <span style={{ fontSize: "4rem", lineHeight: 1 }}>{p.emoji}</span>
      </div>

      {/* Card body */}
      <div style={{ padding: "1.4rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
        <h3
          style={{
            fontSize: "1.15rem",
            fontWeight: 800,
            color: "var(--text)",
            margin: 0,
          }}
        >
          {p.title}
        </h3>

        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
          {p.longDesc}
        </p>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {p.techStack.map((t) => <TechBadge key={t} label={t} />)}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "auto", paddingTop: "0.5rem", flexWrap: "wrap" }}>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ flex: 1, justifyContent: "center", padding: "0.6rem 1rem", fontSize: "0.85rem", minWidth: "120px" }}
            >
              <FaExternalLinkAlt size={13} /> Live Demo
            </a>
          )}
          {p.sourceUrl && (
            <a
              href={p.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ flex: 1, justifyContent: "center", padding: "0.6rem 1rem", fontSize: "0.85rem", minWidth: "120px" }}
            >
              <FaGithub size={15} /> Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.35rem" }}>
            // WHAT I&apos;VE BUILT
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Real projects I&apos;ve designed and developed — from idea to deployment.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
            gap: "1.5rem",
          }}
        >
          {PROJECTS.map((p) => <ProjectCard key={p.title} p={p} />)}

          {/* More Coming Soon card */}
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "340px",
              padding: "2rem",
              gap: "1rem",
              background: "repeating-linear-gradient(45deg, var(--bg-card) 0px, var(--bg-card) 10px, var(--bg-card2) 10px, var(--bg-card2) 20px)",
              border: "1.5px dashed var(--border)",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "2.5rem" }}>🚀</span>
            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
              More projects coming soon
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>
              I&apos;m actively building and will be adding more projects here.
            </p>
            <a
              href="https://github.com/mdadnanhossen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ fontSize: "0.85rem", padding: "0.55rem 1.1rem" }}
            >
              <FaGithub size={15} /> GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


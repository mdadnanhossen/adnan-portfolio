"use client";
import { FaGraduationCap, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const HIGHLIGHTS = [
  {
    icon: <FaGraduationCap size={22} />,
    title: "Academic Background",
    text: "Studying Computer Science & Engineering at NUBT, Khulna — building a solid foundation in algorithms, data structures, and software engineering principles.",
  },
  {
    icon: <FaCode size={22} />,
    title: "Hands-On Builder",
    text: "I learn by building. From REST APIs to full-stack web apps, every project teaches me something new about writing better, more reliable code.",
  },
  {
    icon: <FaLaptopCode size={22} />,
    title: "Full-Stack Focus",
    text: "I'm comfortable across the stack — React & Next.js on the front end, Node.js & Express on the back end, MongoDB for persistence.",
  },
  {
    icon: <FaRocket size={22} />,
    title: "Growth Mindset",
    text: "I'm continuously expanding my skills — currently deepening my TypeScript knowledge and exploring modern deployment practices.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.35rem" }}>
            // WHO I AM
          </p>
          <h2 className="section-title">About Me</h2>
          <div className="divider" />
          <p className="section-subtitle">
            A passionate CSE student on a journey from learner to professional software engineer.
          </p>
        </div>

        {/* Grid: text left, highlights right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Bio */}
          <div>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.2rem", fontSize: "0.97rem" }}>
              Hi there! I'm <strong style={{ color: "var(--text)" }}>Md Adnan Hossen</strong>, a Computer Science
              &amp; Engineering student at{" "}
              <strong style={{ color: "var(--accent-light)" }}>
                Northern University of Business and Technology (NUBT), Khulna, Bangladesh
              </strong>
              . I&apos;m passionate about software engineering and building things for the web.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.2rem", fontSize: "0.97rem" }}>
              My journey started with the fundamentals — C, C++, and Java — and has evolved into
              building full-stack web applications using the modern JavaScript ecosystem. I believe
              in writing clean, maintainable code and solving real problems through software.
            </p>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.97rem" }}>
              When I&apos;m not coding, I&apos;m exploring new technologies, solving algorithmic
              challenges, and working on personal projects that push my boundaries as a developer.
            </p>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1.75rem", flexWrap: "wrap" }}>
              <a href="#projects" className="btn-primary">See My Work</a>
              <a
                href="https://github.com/mdadnanhossen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Highlight Cards */}
          <div style={{ display: "grid", gap: "1rem" }}>
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="card"
                style={{ padding: "1.1rem 1.25rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}
              >
                <span style={{ color: "var(--accent)", marginTop: "2px", flexShrink: 0 }}>{h.icon}</span>
                <div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, margin: "0 0 0.3rem", color: "var(--text)" }}>
                    {h.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                    {h.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

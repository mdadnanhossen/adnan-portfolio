import { FaLayerGroup, FaServer, FaMobileAlt, FaDatabase } from "react-icons/fa";

const SERVICES = [
  {
    icon: <FaLayerGroup size={28} />,
    title: "Full-Stack Web Apps",
    description:
      "Building end-to-end web applications — responsive UIs with React/Next.js paired with REST APIs powered by Node.js and Express.",
  },
  {
    icon: <FaServer size={28} />,
    title: "REST API Development",
    description:
      "Designing and building clean, well-structured REST APIs with proper authentication, validation, and error handling using Node.js and Express.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Responsive UI Development",
    description:
      "Crafting responsive, accessible, and visually polished user interfaces with React, Tailwind CSS, and modern design principles.",
  },
  {
    icon: <FaDatabase size={28} />,
    title: "Database Integration",
    description:
      "Integrating MongoDB databases into web applications — designing schemas, writing queries, and managing data efficiently.",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="section-pad">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.35rem" }}>
            // MY FOCUS AREAS
          </p>
          <h2 className="section-title">What I Do</h2>
          <div className="divider" />
          <p className="section-subtitle">
            The kinds of applications and systems I design and build as a full-stack developer.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="card"
              style={{
                padding: "1.75rem 1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.9rem",
              }}
            >
              {/* Number + Icon */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(108,99,255,0.12)",
                    border: "1px solid rgba(108,99,255,0.25)",
                    borderRadius: "0.6rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "var(--border)",
                    lineHeight: 1,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", margin: 0 }}>
                {s.title}
              </h3>

              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


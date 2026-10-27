"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const LINKS = [
  {
    icon: <FaGithub size={20} />,
    label: "GitHub",
    value: "github.com/mdadnanhossen",
    href: "https://github.com/mdadnanhossen",
  },
  {
    icon: <FaLinkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/adnan35",
    href: "https://www.linkedin.com/in/adnan35",
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    label: "Location",
    value: "Khulna, Bangladesh",
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ background: "var(--bg-card)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.35rem" }}>
            // GET IN TOUCH
          </p>
          <h2 className="section-title" style={{ textAlign: "center" }}>Let&apos;s Connect</h2>
          <div className="divider" style={{ margin: "0.75rem auto 1.5rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            I&apos;m open to internship opportunities, collaboration on interesting projects, and
            connecting with other developers. Don&apos;t hesitate to reach out!
          </p>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "2rem",
          }}
        >
          {/* Left — contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", margin: "0 0 0.5rem" }}>
              Contact Information
            </h3>

            {LINKS.map((l) =>
              l.href ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    padding: "0.9rem 1.1rem",
                    background: "var(--bg-card2)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.6rem",
                    textDecoration: "none",
                    color: "var(--text-muted)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--accent)";
                    el.style.color = "var(--text)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-muted)";
                  }}
                >
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>{l.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent-light)", letterSpacing: "0.05em" }}>
                      {l.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 500 }}>{l.value}</div>
                  </div>
                </a>
              ) : (
                <div
                  key={l.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    padding: "0.9rem 1.1rem",
                    background: "var(--bg-card2)",
                    border: "1px solid var(--border)",
                    borderRadius: "0.6rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>{l.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent-light)", letterSpacing: "0.05em" }}>
                      {l.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 500 }}>{l.value}</div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Right — CTA card */}
          <div
            className="card"
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              background: "linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(168,155,255,0.05) 100%)",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text)", margin: 0 }}>
              Open to Opportunities 🤝
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>
              I&apos;m currently looking for internship and junior developer opportunities where I can
              apply my skills and continue growing. I&apos;m also open to collaborating on open-source
              projects or interesting side projects.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>
              Whether you want to discuss a project, offer an opportunity, or just say hi —
              feel free to reach out through any of the channels listed here.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              <a
                href="https://www.linkedin.com/in/adnan35"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, justifyContent: "center", minWidth: "120px" }}
              >
                <FaLinkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://github.com/mdadnanhossen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ flex: 1, justifyContent: "center", minWidth: "120px" }}
              >
                <FaGithub size={15} /> GitHub
              </a>
            </div>

            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: 0, borderTop: "1px solid var(--border)", paddingTop: "0.9rem" }}>
              <FaEnvelope
                size={12}
                style={{ display: "inline", marginRight: "0.35rem", color: "var(--accent)" }}
              />
              You can also connect via LinkedIn message for quickest response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

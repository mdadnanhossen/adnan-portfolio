import { FaUniversity, FaBook, FaCalendar } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="section-pad" style={{ background: "var(--bg-card)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.35rem" }}>
            // MY ACADEMIC JOURNEY
          </p>
          <h2 className="section-title">Education</h2>
          <div className="divider" />
        </div>

        {/* Education Card */}
        <div
          style={{
            maxWidth: "720px",
          }}
        >
          <div
            className="card"
            style={{ padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", flexWrap: "wrap" }}
          >
            {/* Icon column */}
            <div
              style={{
                width: "56px",
                height: "56px",
                background: "rgba(108,99,255,0.15)",
                border: "1px solid rgba(108,99,255,0.3)",
                borderRadius: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "var(--accent)",
              }}
            >
              <FaUniversity size={26} />
            </div>

            {/* Info column */}
            <div style={{ flex: 1, minWidth: "220px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.3rem", flexWrap: "wrap" }}>
                <span className="tag">Currently Enrolled</span>
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "var(--text)",
                  margin: "0.4rem 0 0.2rem",
                }}
              >
                BSc in Computer Science &amp; Engineering
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--accent-light)",
                  margin: "0 0 0.8rem",
                }}
              >
                Northern University of Business and Technology (NUBT)
              </p>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  margin: "0 0 0.5rem",
                }}
              >
                Khulna, Bangladesh
              </p>

              <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  <FaBook size={14} style={{ color: "var(--accent)" }} />
                  Dept. of CSE
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  <FaCalendar size={14} style={{ color: "var(--accent)" }} />
                  In progress
                </span>
              </div>

              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1rem",
                }}
              >
                My coursework covers core CS fundamentals — data structures, algorithms, computer
                networks, operating systems, software engineering, and database management. Alongside
                academics, I apply my learning through personal full-stack projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


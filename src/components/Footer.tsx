"use client";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer
      style={{
        background: "#0b0b0e",
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 1.25rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontSize: "1.15rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            textDecoration: "none",
            color: "var(--text)",
          }}
        >
          <span style={{ color: "var(--accent)" }}>&lt;</span>
          Adnan
          <span style={{ color: "var(--accent)" }}>/&gt;</span>
        </a>

        {/* Nav */}
        <nav aria-label="Footer navigation">
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              justifyContent: "center",
            }}
          >
            {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href="https://github.com/mdadnanhossen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/adnan35"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#0a66c2")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          © {year ?? "2026"} Md Adnan Hossen. Built with
          <FaHeart size={11} style={{ color: "#e25555", display: "inline" }} />
          using Next.js &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { href: "#about",     label: "About"     },
  { href: "#skills",    label: "Skills"    },
  { href: "#projects",  label: "Projects"  },
  { href: "#education", label: "Education" },
  { href: "#what-i-do", label: "What I Do" },
  { href: "#contact",   label: "Contact"   },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        background: scrolled ? "rgba(15,15,19,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4rem",
        }}
      >
        {/* Logo */}
        <Link
          href="#hero"
          style={{
            fontSize: "1.15rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            textDecoration: "none",
            color: "var(--text)",
          }}
          onClick={close}
        >
          <span style={{ color: "var(--accent)" }}>&lt;</span>
          Adnan
          <span style={{ color: "var(--accent)" }}>/&gt;</span>
        </Link>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            gap: "1.75rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link" onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-primary hidden md:inline-flex"
          style={{ padding: "0.5rem 1.1rem", fontSize: "0.85rem" }}
          onClick={close}
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            padding: "0.4rem",
            display: "flex",
            alignItems: "center",
          }}
          className="md:hidden"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className="md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: open ? "26rem" : "0",
          transition: "max-height 0.35s ease",
          background: "rgba(15,15,19,0.98)",
          borderTop: open ? "1px solid var(--border)" : "none",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "1rem 1.25rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={close}
                style={{
                  display: "block",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  padding: "0.35rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={close}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}


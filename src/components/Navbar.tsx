
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#what-i-do", label: "What I Do" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when screen becomes desktop-sized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close menu with Escape key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const navLinkStyle: React.CSSProperties = {
    display: "block",
    color: "var(--text)",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
    padding: "0.5rem 0",
    transition: "color 0.2s ease",
  };

  return (
    <header
      className="portfolio-navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled
          ? "rgba(15, 15, 19, 0.94)"
          : "rgba(15, 15, 19, 0.35)",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.2)" : "none",
        transition:
          "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <nav
        aria-label="Main navigation"
        className="navbar-container"
        style={{
          width: "100%",
          maxWidth: "1200px",
          minHeight: "4.25rem",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <Link
          href="#hero"
          onClick={closeMenu}
          aria-label="Adnan home"
          style={{
            flexShrink: 0,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            textDecoration: "none",
            color: "var(--text)",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "var(--accent)" }}>&lt;</span>
          Adnan
          <span style={{ color: "var(--accent)" }}>/&gt;</span>
        </Link>

        {/* Desktop navigation */}
        <ul
          className="navbar-desktop-links"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(0.8rem, 2vw, 1.6rem)",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                style={{ ...navLinkStyle, whiteSpace: "nowrap" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="btn-primary navbar-desktop-cta"
          style={{
            flexShrink: 0,
            padding: "0.6rem 1.1rem",
            fontSize: "0.875rem",
            textDecoration: "none",
            whiteSpace: "nowrap",
            justifyContent: "center",
          }}
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((previous) => !previous)}
          className="navbar-menu-toggle"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            flexShrink: 0,
            border: "1px solid var(--border)",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.04)",
            color: "var(--text)",
            cursor: "pointer",
          }}
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation drawer */}
      <div
        id="mobile-navigation"
        className={`navbar-mobile-drawer${open ? " is-open" : ""}`}
        aria-hidden={!open}
        style={{
          maxHeight: open ? "min(80vh, 34rem)" : "0",
          overflowY: open ? "auto" : "hidden",
          overscrollBehavior: "contain",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          borderTop: open ? "1px solid var(--border)" : "1px solid transparent",
          background: "rgba(15, 15, 19, 0.98)",
          transition:
            "max-height 0.3s ease, opacity 0.2s ease, visibility 0.3s ease",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "0.75rem 1.25rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
                style={{
                  display: "block",
                  padding: "0.85rem 0.75rem",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  borderRadius: "8px",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}

          <li style={{ paddingTop: "0.5rem" }}>
            <a
              href="#contact"
              tabIndex={open ? 0 : -1}
              className="btn-primary"
              onClick={closeMenu}
              style={{
                display: "flex",
                width: "100%",
                minHeight: "44px",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                textDecoration: "none",
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>

      {/* Responsive styles */}
<style jsx>{`
  .portfolio-navbar {
    width: 100%;
  }

  .navbar-container {
    box-sizing: border-box;
  }

  .navbar-desktop-links {
    min-width: 0;
  }

  .nav-link:hover {
    color: var(--accent) !important;
  }

  .navbar-mobile-drawer a:hover {
    color: var(--accent) !important;
    background: rgba(255, 255, 255, 0.04);
  }

  @media (max-width: 900px) {
    .navbar-desktop-links {
      gap: 0.75rem !important;
    }

    .navbar-desktop-links a {
      font-size: 0.85rem !important;
    }
  }

  @media (max-width: 767px) {
    .navbar-desktop-links,
    .navbar-desktop-cta {
      display: none !important;
    }

    .navbar-menu-toggle {
      display: inline-flex !important;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .portfolio-navbar,
    .navbar-mobile-drawer,
    .navbar-mobile-drawer a {
      transition: none !important;
    }
  }
`}</style>
    </header>
  );
}

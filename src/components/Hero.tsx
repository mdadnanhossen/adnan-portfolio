"use client";
import { useEffect, useState } from "react";

import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const ROLES = [
  "Full-Stack Developer",
  "React & Next.js Enthusiast",
  "Backend with Node.js",
  "CSE Student & Problem Solver",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  /* Typewriter effect */
  useEffect(() => {
    const role = ROLES[roleIdx];
    if (pause) {
      const t = setTimeout(() => {
        setPause(false);
        setDeleting(true);
      }, 1800);
      return () => clearTimeout(t);
    }
    if (!deleting) {
      if (displayed.length < role.length) {
        const t = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          60,
        );
        return () => clearTimeout(t);
      } else {
        setPause(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
  }, [displayed, deleting, pause, roleIdx]);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "5rem",
        paddingInline: "1.25rem",
      }}
    >
      {/* Background blobs */}
      <span
        className="hero-blob"
        style={{
          width: "42vw",
          height: "42vw",
          maxWidth: "520px",
          maxHeight: "520px",
          background: "rgba(108,99,255,0.18)",
          top: "-8%",
          left: "-10%",
        }}
      />
      <span
        className="hero-blob"
        style={{
          width: "32vw",
          height: "32vw",
          maxWidth: "380px",
          maxHeight: "380px",
          background: "rgba(168,155,255,0.10)",
          bottom: "5%",
          right: "-6%",
        }}
      />

      <div
        style={{
          maxWidth: "820px",
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <span
          className="tag fade-up"
          style={{ marginBottom: "1.5rem", display: "inline-block" }}
        >
          👋 Available for opportunities
        </span>
        {/* Profile Photo */}
        {/* Profile Photo */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "1.5rem",
    position: "relative",
    zIndex: 10,
  }}
>
  <img
  src="/profile.jpeg"
  alt="Md Adnan Hossen"
  className="w-64 h-64 rounded-full object-cover"
/>
</div>

        {/* Name */}
        <h1
          className="fade-up fade-up-1"
          style={{
            fontSize: "clamp(2.2rem, 7vw, 4.2rem)",
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            margin: "0 0 0.5rem",
            color: "var(--text)",
          }}
        >
          Md Adnan <span className="gradient-text">Hossen</span>
        </h1>

        {/* Typewriter role */}
        <p
          className="fade-up fade-up-2"
          style={{
            fontSize: "clamp(1.05rem, 3vw, 1.45rem)",
            fontWeight: 600,
            color: "var(--accent-light)",
            minHeight: "2em",
            margin: "0 0 1.25rem",
          }}
        >
          {displayed}
          <span className="cursor" aria-hidden />
        </p>

        {/* Description */}
        <p
          className="fade-up fade-up-3"
          style={{
            fontSize: "clamp(0.95rem, 2.2vw, 1.08rem)",
            color: "var(--text-muted)",
            maxWidth: "60ch",
            margin: "0 auto 2.2rem",
            lineHeight: 1.7,
          }}
        >
          CSE student at NUBT, Khulna — building practical full-stack web
          applications with React, Next.js, Node.js &amp; MongoDB. Passionate
          about clean code, problem solving, and continuous learning.
        </p>

        {/* CTA Buttons */}
        <div
          className="fade-up fade-up-4"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
          {/* <a
            href="/resume.pdf"
            download="Md-Adnan-Hossen-Resume.pdf"
            className="btn-outline"
          >
            Download Resume
          </a> */}
        </div>

        {/* Social Icons */}
        <div
          className="fade-up fade-up-5"
          style={{ display: "flex", gap: "1.2rem", justifyContent: "center" }}
        >
          <a
            href="https://github.com/mdadnanhossen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            style={{
              color: "var(--text-muted)",
              transition: "color 0.2s, transform 0.2s",
              display: "flex",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/adnan35"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            style={{
              color: "var(--text-muted)",
              transition: "color 0.2s, transform 0.2s",
              display: "flex",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#0a66c2";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            <FaLinkedin size={26} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--text-muted)",
            fontSize: "0.78rem",
            animation: "fadeUp 0.8s 0.8s both",
          }}
        >
          <span>Scroll to explore</span>
          <FaArrowDown
            style={{
              animation: "bounce 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}

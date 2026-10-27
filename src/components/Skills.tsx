import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub,
  SiCplusplus, SiPython,
} from "react-icons/si";
import { FaJava, FaCode } from "react-icons/fa";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  level?: "comfortable" | "learning";
}

const SKILL_GROUPS: { group: string; skills: Skill[] }[] = [
  {
    group: "Frontend",
    skills: [
      { name: "HTML5",      icon: <SiHtml5 />,      color: "#e34c26" },
      { name: "CSS3",       icon: <SiCss />,       color: "#264de4" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6", level: "learning" },
      { name: "React.js",   icon: <SiReact />,      color: "#61dafb" },
      { name: "Next.js",    icon: <SiNextdotjs />,  color: "#ffffff" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06b6d4" },
    ],
  },
  {
    group: "Backend & Database",
    skills: [
      { name: "Node.js",   icon: <SiNodedotjs />,  color: "#68a063" },
      { name: "Express.js",icon: <SiExpress />,    color: "#c8c8c8" },
      { name: "MongoDB",   icon: <SiMongodb />,    color: "#47a248" },
      { name: "REST APIs", icon: <FaCode />,        color: "#6c63ff" },
    ],
  },
  {
    group: "Programming Languages",
    skills: [
      { name: "C/C++",     icon: <SiCplusplus />, color: "#00599c" },
      { name: "Java",      icon: <FaJava />,       color: "#007396" },
      { name: "Python",    icon: <SiPython />,     color: "#3776ab", level: "learning" },
    ],
  },
  {
    group: "Tools & Version Control",
    skills: [
      { name: "Git",    icon: <SiGit />,    color: "#f05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
    ],
  },
];

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="skill-pill" title={skill.level === "learning" ? "Currently learning" : undefined}>
      <span style={{ color: skill.color }}>{skill.icon}</span>
      <span>{skill.name}</span>
      {skill.level === "learning" && (
        <span
          style={{
            fontSize: "0.68rem",
            background: "rgba(108,99,255,0.18)",
            color: "var(--accent-light)",
            borderRadius: "999px",
            padding: "0.1rem 0.4rem",
            fontWeight: 600,
            marginLeft: "auto",
          }}
        >
          learning
        </span>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ background: "var(--bg-card)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.35rem" }}>
            // WHAT I WORK WITH
          </p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Technologies I use to build modern, full-stack web applications.
            Items marked <em>learning</em> are actively being developed.
          </p>
        </div>

        {/* Skill groups */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {SKILL_GROUPS.map(({ group, skills }) => (
            <div key={group}>
              <h3
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "0.9rem",
                }}
              >
                {group}
              </h3>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                }}
              >
                {skills.map((s) => (
                  <SkillPill key={s.name} skill={s} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

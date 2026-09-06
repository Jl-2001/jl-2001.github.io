import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import {
  IconCaret,
  IconChevron,
  IconDownload,
  IconExternal,
  IconGitHub,
  IconHeadphones,
  IconLinkedIn,
  IconMail,
  IconMountain,
  IconMusic,
  IconTerminal,
  IconTicket,
  IconTrophy,
  IconUsers,
  PixelAvatar,
  PixelBuddy
} from "./PixelIcons";

/* ───────────────────────────────────────────────────────────
   CONTENT — every fact below is taken from Jorge's résumés.
   Nothing here is invented. Update LINKEDIN_URL when available.
   ─────────────────────────────────────────────────────────── */

// TODO(Jorge): paste your LinkedIn profile URL here, e.g.
// "https://www.linkedin.com/in/your-handle". Left blank so no broken
// link ships — the LinkedIn buttons hide themselves until it's set.
const LINKEDIN_URL = "";

const PROFILE = {
  name: "Jorge Lazaro",
  role: "Software Developer",
  location: "Minneapolis, Minnesota",
  specialtyTags: [
    { label: "FULL-STACK", tone: "blue" },
    { label: "CLOUD", tone: "purple" },
    { label: "SECURITY", tone: "green" }
  ],
  status: "Open to opportunities",
  blurb:
    "Full-stack developer building REST APIs in C#/.NET and Node.js, modern React/Next.js apps, and cloud-hosted systems on AWS.",
  blurbSecurity:
    "Growing expertise in cybersecurity and secure software development.",
  email: "j.lazaro0101@gmail.com",
  github: "https://github.com/Jl-2001",
  resumeSwe: "/Jorge%20Lazaro%20Software%20Developer%20Resume%202026.pdf",
  resumeIt: "/Jorge%20Lazaro%20Info%20Tech.pdf"
};

type Accent = "blue" | "cyan" | "gold" | "green" | "purple" | "orange";

interface Project {
  id: string;
  name: string;
  tagline: string;
  type: string;
  glyph: ReactNode;
  featured: boolean;
  accent: Accent;
  stack: string[];
  mission: string;
  objectives: string[];
  security?: string;
  demo?: string;
  source?: string;
}

const PROJECTS: Project[] = [
  {
    id: "musipal",
    name: "MUSIPAL",
    tagline: "Full-Stack Music Social Platform",
    type: "Full-Stack",
    glyph: <IconMusic />,
    featured: true,
    accent: "blue",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Spotify API"],
    mission:
      "Discover music, connect with people, and interact socially around shared listening taste.",
    objectives: [
      "Designed and built a full-stack application enabling users to discover music, connect, and interact socially.",
      "Implemented authentication, real-time Spotify API integration, and dynamic UI updates.",
      "Designed SQL queries and JOINs to generate friend suggestions based on shared interests."
    ],
    security:
      "User authentication with login/session handling, and integration with the Spotify authorization flow for third-party API access.",
    demo: "http://musipal-api-alb-1562654769.us-east-2.elb.amazonaws.com/login"
  },
  {
    id: "helpdesk",
    name: "HELP DESK TICKETING",
    tagline: "REST API · C# / .NET 8",
    type: "Backend · API",
    glyph: <IconTicket />,
    featured: true,
    accent: "cyan",
    stack: ["C#", ".NET 8", "ASP.NET Core", "SQL", "React", "Next.js"],
    mission:
      "A RESTful ticketing service for creating, retrieving, and tracking help desk tickets, wired to a React/Next.js UI.",
    objectives: [
      "Built a RESTful Web API using C# and .NET 8 to manage help desk tickets — creation, retrieval, and status tracking.",
      "Designed a controller + endpoint architecture with dependency injection, DTOs, and separation of concerns.",
      "Implemented POST and GET endpoints, request validation, and structured responses following REST best practices.",
      "Integrated the API with a React/Next.js frontend for real-time ticket submission and display."
    ],
    security:
      "Request validation on every endpoint, DTOs to constrain request/response models and limit over-posting, and structured error responses following REST conventions.",
    source: "https://github.com/Jl-2001/HelpDesk-Tickets-C-"
  },
  {
    id: "japahub",
    name: "JAPAHUB",
    tagline: "Mentorship & Community Platform",
    type: "Full-Stack",
    glyph: <IconUsers />,
    featured: true,
    accent: "purple",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "Docker"],
    mission: "A platform focused on mentorship and community resources.",
    objectives: [
      "Built a platform focused on mentorship and community resources.",
      "Developed backend services and REST APIs with scalability in mind.",
      "Collaborated on architecture decisions and feature planning."
    ]
  },
  {
    id: "outdoor",
    name: "MY OUTDOOR ADVENTURES",
    tagline: "Local Activity Finder",
    type: "Full-Stack",
    glyph: <IconMountain />,
    featured: false,
    accent: "orange",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Google Maps API"],
    mission:
      "Helps users discover local activities filtered by difficulty, price, and location.",
    objectives: [
      "Built a full-stack web app that helps users discover local activities based on difficulty level, price, and location.",
      "Integrated the Google Maps API to display activity locations and improve navigation and discovery.",
      "Collaborated in an Agile team using sprints, task planning, and iterative delivery."
    ]
  },
  {
    id: "listening-rooms",
    name: "SPOTIFY LISTENING ROOMS",
    tagline: "Real-Time Listening Rooms · Python",
    type: "Backend",
    glyph: <IconHeadphones />,
    featured: false,
    accent: "gold",
    stack: ["Python", "Spotify Web API", "Session Management"],
    mission:
      "A Python backend that powers real-time Spotify listening rooms so users can sync and share playback.",
    objectives: [
      "Developed a Python backend service powering real-time Spotify listening rooms.",
      "Integrated the Spotify Web API to retrieve playback state, track metadata, and listening position.",
      "Implemented logic to track song progress and session state, keeping users synchronized in a shared room."
    ],
    security:
      "Per-room session management and server-side state tracking, backed by the Spotify Web API's authenticated access to playback data."
  },
  {
    id: "vm-lab",
    name: "VM DEPLOYMENT & LINUX ADMIN",
    tagline: "Security Labs · Linux Hardening",
    type: "Infrastructure · Security",
    glyph: <IconTerminal />,
    featured: false,
    accent: "green",
    stack: ["Ubuntu", "Kali Linux", "Bash", "PowerShell", "UFW Firewall"],
    mission:
      "Built and configured virtual machines for enterprise training and security labs, with hardened networking and firewall rules.",
    objectives: [
      "Created and configured VMs using Ubuntu and Kali Linux for enterprise-level training and security labs.",
      "Managed network adapters, NAT/Bridged connections, user accounts, permissions, and UFW firewall settings.",
      "Performed Linux administration with Bash and PowerShell for troubleshooting and automation."
    ],
    security:
      "Host firewall (UFW) rule management, least-privilege user and permission setup, and isolated NAT/bridged network segments to contain lab traffic."
  }
];

interface SkillCat {
  name: string;
  role: string;
  accent: Accent;
  items: string[];
}

const SKILLS: SkillCat[] = [
  {
    name: "LANGUAGES",
    role: "core",
    accent: "gold",
    items: ["C#", "TypeScript", "JavaScript (ES6+)", "Python", "SQL", "Java"]
  },
  {
    name: "FRONTEND",
    role: "interface",
    accent: "cyan",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    name: "BACKEND / APIs",
    role: "services",
    accent: "blue",
    items: ["ASP.NET Core", "Node.js", "Express", "REST APIs", "Postman"]
  },
  {
    name: "CLOUD / DEVOPS",
    role: "infra",
    accent: "purple",
    items: [
      "AWS (ECS · RDS · EC2 · IAM)",
      "Azure",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Linux (Ubuntu)",
      "Git"
    ]
  },
  {
    name: "DATABASES",
    role: "storage",
    accent: "orange",
    items: ["PostgreSQL", "SQL Server", "MySQL"]
  },
  {
    // Only tools/skills backed by Jorge's IT résumé + the VM/Linux lab project.
    name: "CYBERSECURITY / IT",
    role: "defense",
    accent: "green",
    items: [
      "Active Directory",
      "Azure Entra ID (Azure AD)",
      "Okta",
      "AWS IAM",
      "MFA / Hardware Tokens (YubiKey)",
      "Authentication & Authorization",
      "Intune / MDM",
      "Group Policy",
      "BitLocker",
      "Endpoint Protection",
      "PowerShell",
      "Splunk",
      "UFW / Firewall Config",
      "Network Troubleshooting (VPN · TCP/IP)",
      "Linux / Kali"
    ]
  }
];

interface Job {
  when: string;
  role: string;
  org: string;
  bullets: string[];
}

const CAREER: Job[] = [
  {
    when: "2025 — NOW",
    role: "Desktop Support Technician / End-User Support (Contract)",
    org: "Ensono / Illumin (IT Associates) — Woodbury, MN",
    bullets: [
      "Image and deploy Windows 11 devices with SCCM and Intune for a large-scale Windows 10 → 11 enterprise migration.",
      "Run pre-upgrade readiness checks — hardware compatibility, backups, OS validation — and post-upgrade troubleshooting.",
      "Support VDI environments including Citrix, VMware, and Azure Virtual Desktop, plus endpoint security tooling."
    ]
  },
  {
    when: "2025",
    role: "Help Desk Technician (Contract)",
    org: "Lorien — Minnesota (Remote)",
    bullets: [
      "Provided Tier 1 support for Windows 10 and legacy Windows 7, running in-depth diagnostics for application, network, and systems issues.",
      "Managed username, password, and access-right provisioning across multiple proprietary and client applications.",
      "Documented, tracked, and monitored problems to ensure timely resolution against SLAs."
    ]
  },
  {
    when: "2024 — NOW",
    role: "IT Support / Software Developer Intern",
    org: "Robert Half — Northfield, MN",
    bullets: [
      "Developed RESTful API endpoints in C# using DTOs to structure request/response models and improve maintainability.",
      "Diagnosed and resolved C# backend issues by analyzing logs, stepping through code, and validating API behavior with Postman.",
      "Refactored and debugged Python services, improving reliability and incident resolution time in production.",
      "Supported apps in Linux and Azure environments, including Azure Entra ID (Azure AD) identity/access workflows."
    ]
  },
  {
    when: "2023 — 2024",
    role: "IT Support / Web Developer",
    org: "KGP Co. — Faribault, MN",
    bullets: [
      "Developed and enhanced production web-app features using TypeScript, React, and REST APIs alongside stakeholders.",
      "Built internal automation tools and scripts to accelerate troubleshooting, data access, and repetitive IT workflows.",
      "Supported backend systems and databases by validating API responses and reviewing logs."
    ]
  },
  {
    when: "2022 — 2023",
    role: "Software Engineer Intern",
    org: "Accenture — Richfield, MN",
    bullets: [
      "Built and enhanced React and TypeScript components for enterprise-scale applications following established design systems.",
      "Assisted backend debugging by writing SQL queries, validating API responses, and identifying data inconsistencies.",
      "Participated in Agile ceremonies and collaborated with senior engineers and cross-functional teams."
    ]
  }
];

interface Edu {
  cred: string;
  org: string;
  when: string;
  note?: string;
  tone: "blue" | "purple" | "green";
}

const EDUCATION: Edu[] = [
  {
    cred: "A.A.S. — Computer Software Development / Cyber Security & Defense",
    org: "Minneapolis College",
    when: "Expected May 2026",
    tone: "blue",
    note: "Coursework incl. Internet & Network Security, Ethical Hacking & Network Defense, Linux & Server System Administration, Computer Networks, SDLC."
  },
  {
    cred: "Full-Stack Software Engineering Certificate",
    org: "Prime Digital Academy",
    when: "Nov 2024 – Jun 2025",
    tone: "purple",
    note: "React, Node/Express, RESTful API development, PostgreSQL, TDD, Agile/Scrum, code reviews."
  },
  {
    // Exact degree title / start term not in source material — confirm with Jorge.
    cred: "Cybersecurity — Incoming Student",
    org: "Western Governors University (WGU)",
    when: "Enrolling",
    tone: "green",
    note: "Degree title and start term to be confirmed."
  }
];

const SKILL_TREE: { label: string; tone: "blue" | "purple" | "green" }[] = [
  { label: "SOFTWARE DEVELOPMENT", tone: "blue" },
  { label: "FULL-STACK ENGINEERING", tone: "purple" },
  { label: "CYBERSECURITY", tone: "green" }
];

/* ─── small helpers ─────────────────────────────────────────── */

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true
  );
}

interface Toast {
  id: number;
  title: string;
  body: string;
  xp: string;
}

/* ─── boot sequence (one-time, skippable, motion-safe) ──────── */

function BootScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    try {
      sessionStorage.setItem("jl_booted", "1");
    } catch {
      /* private mode — harmless */
    }
    const finish = () => onDone();
    const t = window.setTimeout(finish, 1050);
    const opts = { once: true } as const;
    window.addEventListener("keydown", finish, opts);
    window.addEventListener("pointerdown", finish, opts);
    window.addEventListener("wheel", finish, opts);
    window.addEventListener("touchmove", finish, opts);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
      window.removeEventListener("wheel", finish);
      window.removeEventListener("touchmove", finish);
    };
  }, [onDone]);

  return (
    <div className="boot" aria-hidden="true">
      <div className="boot__line">JORGE-OS v2.026 &mdash; cold boot</div>
      <div className="boot__line">&gt; loading profile ......... OK</div>
      <div className="boot__line">&gt; mounting /projects ...... OK</div>
      <div className="boot__line">&gt; net link: OPEN TO WORK</div>
      <div className="boot__line">&gt; ready.</div>
      <div className="boot__skip">PRESS ANY KEY / TAP TO SKIP</div>
    </div>
  );
}

/* ─── reusable bits ────────────────────────────────────────── */

function ResumeButtons({ variant = "ghost" }: { variant?: "ghost" | "dark" }) {
  const cls = variant === "dark" ? "btn btn--dark" : "btn btn--ghost";
  return (
    <>
      <a
        className={cls}
        href={PROFILE.resumeSwe}
        download="Jorge_Lazaro_Software_Developer_Resume_2026.pdf"
      >
        <IconDownload /> SWE RÉSUMÉ
      </a>
      <a
        className={cls}
        href={PROFILE.resumeIt}
        download="Jorge_Lazaro_IT_Resume.pdf"
      >
        <IconDownload /> IT RÉSUMÉ
      </a>
    </>
  );
}

function QuestCard({
  project,
  onExpand
}: {
  project: Project;
  onExpand: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `quest-${project.id}-detail`;

  const toggle = () => {
    setOpen((v) => {
      if (!v) onExpand(project.id);
      return !v;
    });
  };

  return (
    <article
      className={`quest ${project.featured ? "quest--featured" : ""}`}
      data-accent={project.accent}
    >
      <div className="quest__top">
        <span className="quest__glyph">{project.glyph}</span>
        <h3 className="quest__name">{project.name}</h3>
        <span className="badge">{project.type}</span>
      </div>
      <div className="quest__body">
        <p className="quest__tagline">{project.tagline}</p>

        <div>
          <div className="field-k">MISSION</div>
          <p className="quest__mission">{project.mission}</p>
        </div>

        <div>
          <div className="field-k">STACK</div>
          <div className="chip-row">
            {project.stack.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        {project.security && (
          <div className="sec-note">
            <div className="field-k">▲ SECURITY NOTES</div>
            <p className="quest__mission">{project.security}</p>
          </div>
        )}

        <button
          type="button"
          className="disclosure-btn"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={toggle}
        >
          <IconChevron open={open} />
          {open ? "HIDE MISSION LOG" : "VIEW MISSION LOG"}
        </button>

        <div className="disclosure-panel" id={panelId} hidden={!open}>
          <div>
            <div className="field-k">OBJECTIVES CLEARED</div>
            <ul className="obj-list">
              {project.objectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>

        {(project.demo || project.source) && (
          <div className="quest__actions">
            {project.demo && (
              <a
                className="btn btn--primary"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                <IconExternal /> LIVE DEMO
              </a>
            )}
            {project.source && (
              <a
                className="btn btn--ghost"
                href={project.source}
                target="_blank"
                rel="noreferrer"
              >
                <IconGitHub /> SOURCE CODE
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/* ─── page ─────────────────────────────────────────────────── */

const NAV = [
  { href: "#home", label: "HOME" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#skills", label: "SKILLS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#contact", label: "CONTACT" }
];

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

export default function App() {
  // one-time boot screen (session-scoped, skipped entirely under reduced motion)
  const [booting, setBooting] = useState(() => {
    if (prefersReducedMotion()) return false;
    try {
      return sessionStorage.getItem("jl_booted") !== "1";
    } catch {
      return true;
    }
  });
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [eggFound, setEggFound] = useState(false);
  const unlocked = useRef<Set<string>>(new Set());
  const openedProjects = useRef<Set<string>>(new Set());
  const toastSeq = useRef(0);

  const dismissToast = useCallback((id: number) => {
    setToasts((list) => list.filter((t) => t.id !== id));
  }, []);

  const unlock = useCallback(
    (key: string, toast: Omit<Toast, "id">) => {
      if (unlocked.current.has(key)) return;
      unlocked.current.add(key);
      const id = ++toastSeq.current;
      setToasts((list) => [...list, { ...toast, id }]);
      window.setTimeout(() => dismissToast(id), 6000);
    },
    [dismissToast]
  );

  const handleExpand = useCallback(
    (id: string) => {
      openedProjects.current.add(id);
      if (openedProjects.current.size >= 3) {
        unlock("deep-diver", {
          title: "ACHIEVEMENT UNLOCKED",
          body: "Deep Diver — opened three project mission logs.",
          xp: "+50 Recruiter XP"
        });
      }
    },
    [unlock]
  );

  // Konami-style easter egg
  useEffect(() => {
    let idx = 0;
    const onKey = (e: KeyboardEvent) => {
      const want = KONAMI[idx];
      if (e.key.toLowerCase() === want.toLowerCase()) {
        idx += 1;
        if (idx === KONAMI.length) {
          idx = 0;
          setEggFound(true);
          unlock("source-inspector", {
            title: "ACHIEVEMENT UNLOCKED",
            body: "You inspected the source.",
            xp: "+100 Recruiter XP"
          });
        }
      } else {
        idx = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [unlock]);

  const featured = PROJECTS.filter((p) => p.featured);
  const secondary = PROJECTS.filter((p) => !p.featured);

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      {booting && <BootScreen onDone={() => setBooting(false)} />}

      <div className="crt">
        <div className="scanlines" />
        <div className="vignette" />

        {/* ── nav ── */}
        <nav className="nav" aria-label="Primary">
          <div className="wrap nav-inner">
            <a className="wordmark" href="#home">
              JL<span className="blink" aria-hidden="true">_</span>
            </a>
            <ul className="nav-list">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a className="nav-link" href={n.href}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="btn btn--primary"
              href={PROFILE.resumeSwe}
              download="Jorge_Lazaro_Software_Developer_Resume_2026.pdf"
            >
              <IconDownload /> RÉSUMÉ
            </a>
          </div>
        </nav>

        <main>
          {/* ── hero ── */}
          <header id="home" className="wrap hero">
            <div>
              <p className="hero-kicker">▶ NEW GAME — PLAYER 1</p>
              <h1 className="hero-name">{PROFILE.name}</h1>
              <p className="hero-role">{PROFILE.role.toUpperCase()}</p>
              <p className="hero-blurb">
                {PROFILE.blurb}{" "}
                <span className="hl-sec">{PROFILE.blurbSecurity}</span>
              </p>

              <nav className="menu" aria-label="Jump to section">
                <a className="menu-cmd" href="#projects">
                  <IconCaret className="menu-cmd__caret w-3 h-3" />
                  <span>VIEW PROJECTS</span>
                </a>
                <a className="menu-cmd" href="#experience">
                  <IconCaret className="menu-cmd__caret w-3 h-3" />
                  <span>EXPERIENCE</span>
                </a>
                <a className="menu-cmd" href="#skills">
                  <IconCaret className="menu-cmd__caret w-3 h-3" />
                  <span>SKILLS</span>
                </a>
                <a
                  className="menu-cmd"
                  href={PROFILE.resumeSwe}
                  download="Jorge_Lazaro_Software_Developer_Resume_2026.pdf"
                >
                  <IconCaret className="menu-cmd__caret w-3 h-3" />
                  <span>RÉSUMÉ</span>
                </a>
                <a className="menu-cmd" href="#contact">
                  <IconCaret className="menu-cmd__caret w-3 h-3" />
                  <span>CONTACT</span>
                </a>
              </nav>

              <p className="press-start blink" aria-hidden="true">
                ▶ SELECT A COMMAND
              </p>
            </div>

            <aside className="panel" aria-label="Developer status">
              <div className="panel-hd">
                <IconTerminal className="w-3.5 h-3.5" /> STATUS.SYS
              </div>
              <div style={{ padding: "1rem", display: "grid", gap: "1rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem"
                  }}
                >
                  <span
                    style={{
                      width: 64,
                      height: 64,
                      border: "3px solid var(--color-line)",
                      boxShadow: "3px 3px 0 var(--color-ink)",
                      flexShrink: 0
                    }}
                  >
                    <PixelAvatar />
                  </span>
                  <div>
                    <div
                      className="font-pixel"
                      style={{ fontSize: 10, color: "var(--color-navy)" }}
                    >
                      {PROFILE.name}
                    </div>
                    <div className="font-term" style={{ fontSize: "1.15rem" }}>
                      <span className="lv">LV.99</span>{" "}
                      <span style={{ color: "var(--color-blue-ink)" }}>
                        Software Developer
                      </span>
                    </div>
                  </div>
                </div>

                <div className="stat-grid">
                  <div className="stat-cell" data-tone="blue">
                    <div className="stat-cell__k">ROLE</div>
                    <div
                      className="stat-cell__v"
                      style={{ color: "var(--color-blue-ink)" }}
                    >
                      Software Developer
                    </div>
                  </div>
                  <div className="stat-cell">
                    <div className="stat-cell__k">LOCATION</div>
                    <div className="stat-cell__v">{PROFILE.location}</div>
                  </div>
                  <div className="stat-cell" data-tone="purple">
                    <div className="stat-cell__k">SPECIALTY</div>
                    <div className="spec-tags">
                      {PROFILE.specialtyTags.map((t) => (
                        <span key={t.label} className="tag" data-tone={t.tone}>
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="stat-cell" data-tone="green">
                    <div className="stat-cell__k">STATUS</div>
                    <div
                      className="stat-cell__v"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        color: "var(--color-green-ink)"
                      }}
                    >
                      <span className="dot dot--on" aria-hidden="true" />
                      {PROFILE.status}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </header>

          {/* ── projects ── */}
          <section
            id="projects"
            className="section section--projects"
            aria-labelledby="projects-h"
          >
            <div className="wrap">
              <p className="section-tag">
                <IconTrophy className="w-3.5 h-3.5" /> QUEST BOARD
              </p>
              <h2 id="projects-h" className="section-title">
                PROJECTS
              </h2>

              <div className="quest-grid">
                {featured.map((p) => (
                  <QuestCard key={p.id} project={p} onExpand={handleExpand} />
                ))}
              </div>

              <p
                className="section-tag"
                style={{ marginTop: "2rem", color: "var(--color-dark-dim)" }}
              >
                SIDE QUESTS
              </p>
              <div className="quest-grid">
                {secondary.map((p) => (
                  <QuestCard key={p.id} project={p} onExpand={handleExpand} />
                ))}
              </div>
            </div>
          </section>

          {/* ── skills ── */}
          <section
            id="skills"
            className="section section--skills"
            aria-labelledby="skills-h"
          >
            <div className="wrap">
              <p className="section-tag">
                <IconTerminal className="w-3.5 h-3.5" /> LOADOUT
              </p>
              <h2 id="skills-h" className="section-title">
                SKILLS &amp; TECH STACK
              </h2>

              <div className="panel" style={{ padding: "1.5rem" }}>
                <div className="inv-grid">
                  {SKILLS.map((cat) => (
                    <div
                      key={cat.name}
                      className="inv-cat"
                      data-accent={cat.accent}
                    >
                      <div className="inv-cat__hd">
                        <span className="inv-cat__name">{cat.name}</span>
                        <span className="inv-cat__role">/ {cat.role}</span>
                      </div>
                      <div className="inv-slots">
                        {cat.items.map((it) => (
                          <span key={it} className="inv-slot">
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── experience ── */}
          <section
            id="experience"
            className="section section--experience"
            aria-labelledby="experience-h"
          >
            <div className="wrap">
              <p className="section-tag">
                <IconCaret className="w-3.5 h-3.5" /> CAREER LOG
              </p>
              <h2 id="experience-h" className="section-title">
                EXPERIENCE
              </h2>

              <div className="log">
                {CAREER.map((job) => (
                  <div className="log-item" key={job.role + job.when}>
                    <div className="log-item__when">{job.when}</div>
                    <div className="log-item__card">
                      <div className="log-item__role">{job.role}</div>
                      <div className="log-item__org">{job.org}</div>
                      <ul className="log-item__bullets">
                        {job.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="section-tag"
                style={{ marginTop: "2rem", color: "var(--color-orange)" }}
              >
                TRAINING
              </p>

              <div
                className="skill-tree"
                role="img"
                aria-label="Progression: software development, then full-stack engineering, now adding cybersecurity — skills accumulate, they do not replace each other"
              >
                {SKILL_TREE.map((s, i) => (
                  <span key={s.label} style={{ display: "contents" }}>
                    {i > 0 && (
                      <span className="tree-link" aria-hidden="true">
                        ↓
                      </span>
                    )}
                    <span
                      className="tree-node"
                      data-tone={s.tone}
                      aria-hidden="true"
                    >
                      {s.label}
                    </span>
                  </span>
                ))}
              </div>
              <p className="skill-tree__caption">
                Each stage adds to the stack — it doesn&rsquo;t replace the last.
              </p>

              <div
                className="panel"
                style={{ padding: "1.25rem", marginTop: "1rem" }}
              >
                {EDUCATION.map((e) => (
                  <div key={e.cred} className="edu-item" data-tone={e.tone}>
                    <div className="edu-item__org">{e.org}</div>
                    <div className="edu-item__cred">{e.cred}</div>
                    <div className="edu-item__when">{e.when}</div>
                    {e.note && <p className="edu-item__note">{e.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── contact ── */}
          <section
            id="contact"
            className="section section--contact"
            aria-labelledby="contact-h"
          >
            <div className="wrap">
              <p className="section-tag">
                <IconMail className="w-3.5 h-3.5" /> FINAL BOSS
              </p>
              <h2 id="contact-h" className="section-title">
                CONTACT
              </h2>

              <div className="panel contact-card">
                <p className="contact-h">READY TO BUILD SOMETHING?</p>
                <p
                  className="font-term"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--color-title)",
                    marginTop: "0.5rem"
                  }}
                >
                  {PROFILE.name} · {PROFILE.role} · {PROFILE.location}
                </p>

                <div className="contact-actions">
                  <a className="btn btn--primary" href={`mailto:${PROFILE.email}`}>
                    <IconMail /> EMAIL ME
                  </a>
                  {LINKEDIN_URL && (
                    <a
                      className="btn btn--ghost"
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IconLinkedIn /> LINKEDIN
                    </a>
                  )}
                  <a
                    className="btn btn--ghost"
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IconGitHub /> GITHUB
                  </a>
                  <ResumeButtons />
                </div>

                <div className="status-line">
                  <span className="dot dot--on" aria-hidden="true" />
                  STATUS: AVAILABLE FOR NEW OPPORTUNITIES
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div
            className="wrap"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <span>
              © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.location} ·
              built with React, TypeScript &amp; Vite
            </span>
            {eggFound && (
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <PixelBuddy />
                <span className="font-term" style={{ fontSize: "1.1rem" }}>
                  ▲▲▼▼◀▶◀▶ B A — nice.
                </span>
              </span>
            )}
          </div>
        </footer>
      </div>

      {/* ── achievement toasts ── */}
      <div className="toast-wrap" role="status" aria-live="polite">
        {toasts.map((t) => (
          <div className="toast" key={t.id}>
            <IconTrophy className="toast__icon w-4 h-4" />
            <div>
              <div className="toast__title">{t.title}</div>
              <div className="toast__body">{t.body}</div>
              <div className="toast__xp">{t.xp}</div>
            </div>
            <button
              type="button"
              className="toast__close"
              aria-label="Dismiss notification"
              onClick={() => dismissToast(t.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

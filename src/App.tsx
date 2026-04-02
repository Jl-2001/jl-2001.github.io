import { useState, useRef, useEffect } from "react";
import type { ReactNode, KeyboardEvent } from "react";
import {
  Music2,
  Mountain,
  Clock,
  Download,
  HelpCircle,
  Settings,
  Volume2,
  TriangleAlert,
  Ban
} from "lucide-react";

// ─── types ────────────────────────────────────────────────────────────────────
type Status = "online" | "away" | "offline";

interface Project {
  id: string;
  icon: ReactNode;
  name: string;
  status: Status;
  desc: string;
  tech: string[];
  link: string;
}

interface Message {
  from: "system" | "user";
  text: string;
  tags?: string[];
  link?: string;
}

interface WinChromeProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

interface DotProps {
  status: Status | string;
}

// ─── AIM-specific icons (no lucide equivalent) ────────────────────────────────
const RunningMan = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="2.5" r="1.8" />
    <path d="M6.5 5.5 Q8 4.5 10 5.5 L11.5 9 L9.5 9 L8.5 7 L7.5 10.5 L9 13.5 L7.5 13.5 L6 10.5 L4.5 9 L5.5 9 Z" />
    <path
      d="M5 8.5 L3.5 10 M10.5 8.5 L12 10"
      strokeWidth="1"
      stroke="currentColor"
      fill="none"
    />
  </svg>
);

const AolIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9" fill="#4A90D9" />
    <path d="M6 14 L10 6 L14 14" stroke="white" strokeWidth="2" fill="none" />
    <path d="M7.5 11.5 L12.5 11.5" stroke="white" strokeWidth="1.5" />
  </svg>
);

// ─── data ─────────────────────────────────────────────────────────────────────
const PROJECTS: Project[] = [
  {
    id: "musipal",
    icon: <Music2 size={14} className="inline-block mr-1.5 shrink-0" />,
    name: "Musipal",
    status: "online",
    desc: "A social music discovery app. Users sync Spotify listening history, get AI-curated playlists, and match with friends by taste.",
    tech: ["React", "Node.js", "Spotify API", "PostgreSQL"],
    link: "http://musipal-api-alb-1562654769.us-east-2.elb.amazonaws.com/login"
  },
  {
    id: "outdoor",
    icon: <Mountain size={14} className="inline-block mr-1.5 shrink-0" />,
    name: "Outdoor Adventures",
    status: "online",
    desc: "Trail-finding PWA with offline maps, elevation profiles, and community trip reports. 10k+ monthly active users.",
    tech: ["Next.js", "Mapbox", "PWA", "Firebase"],
    link: "#"
  },
  {
    id: "Help Desk Ticket in C#",
    icon: <Clock size={14} className="inline-block mr-1.5 shrink-0" />,
    name: "Help Desk Ticket in C#",
    status: "online",
    desc: "Internal HR tool replacing Excel chaos — auto-approvals, manager dashboards, CSV exports, and Slack notifications.",
    tech: ["C#", ".NET 8.0", "Typescript", "Postgres", "Docker", "Next Js"],
    link: "https://github.com/Jl-2001/HelpDesk-Tickets-C-"
  }
];

const QUICK_CMDS = ["projects", "resume", "contact", "skills"] as const;
type QuickCmd = (typeof QUICK_CMDS)[number];

const SKILLS_LIST: string[] = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "AWS",
  "Node / Express",
  "PostgreSQL / MySQL",
  "REST & GraphQL",
  "Docker & CI/CD",
  "C# @ ASP.NET",
  "IT Support / Sysadmin"
];

const CANNED: Record<QuickCmd, string> = {
  projects: "Sure! Pick any project thread on the left to learn more about it.",
  resume:
    "📄 You can download my resume using the button in the Sign On window.",
  contact:
    "📬 Best way to reach me: jorge@jorgelazaro.dev — or DM me on LinkedIn.",
  skills: `🛠 Here's what I work with:\n${SKILLS_LIST.join(" · ")}`
};

// ─── status dot ───────────────────────────────────────────────────────────────
const Dot = ({ status }: DotProps) => {
  const color =
    status === "online"
      ? "bg-green-500"
      : status === "away"
      ? "bg-yellow-400"
      : "bg-gray-400";
  return (
    <span
      className={`inline-block w-2.5 h-2.5 rounded-full ${color} shrink-0`}
    />
  );
};

// ─── window chrome ────────────────────────────────────────────────────────────
function WinChrome({ title, icon, children, className = "" }: WinChromeProps) {
  return (
    <div
      className={`flex flex-col rounded-xl overflow-hidden shadow-2xl border border-white/40 ${className}`}
      style={{ background: "linear-gradient(180deg,#dce9f5 0%,#c8ddf0 100%)" }}
    >
      <div
        className="flex items-center gap-2 px-3 py-1.5 select-none"
        style={{
          background: "linear-gradient(180deg,#4a9de0 0%,#2272c3 100%)"
        }}
      >
        {icon}
        <span className="text-white text-sm font-bold tracking-wide drop-shadow flex-1 truncate">
          {title}
        </span>
        <div className="flex gap-1">
          {(["─", "□", "✕"] as const).map((s, i) => (
            <button
              key={i}
              className="w-5 h-5 flex items-center justify-center rounded text-white text-xs font-bold hover:bg-white/20 transition-colors border border-white/30"
              style={{ fontSize: 10 }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

// ─── sign-on panel ────────────────────────────────────────────────────────────
function SignOnPanel() {
  return (
    <WinChrome
      title="Sign On"
      icon={<RunningMan className="w-4 h-4 text-yellow-300" />}
      className="w-64"
    >
      <div className="p-4 flex flex-col gap-3">
        {/* avatar */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-gradient-to-b from-sky-300 to-blue-500 flex items-center justify-center">
            <svg viewBox="0 0 40 40" className="w-20 h-20">
              <rect x="12" y="4" width="16" height="16" rx="8" fill="#f5c5a3" />
              <rect x="14" y="8" width="4" height="3" rx="1" fill="#333" />
              <rect x="22" y="8" width="4" height="3" rx="1" fill="#333" />
              <rect x="13" y="14" width="14" height="3" rx="1" fill="#c9956a" />
              <rect
                x="10"
                y="20"
                width="20"
                height="14"
                rx="4"
                fill="#4a90d9"
              />
              <rect x="4" y="21" width="7" height="10" rx="3" fill="#4a90d9" />
              <rect x="29" y="21" width="7" height="10" rx="3" fill="#4a90d9" />
              <rect
                x="14"
                y="11"
                width="12"
                height="5"
                rx="2"
                fill="#555"
                opacity="0.4"
              />
            </svg>
          </div>
          <div className="text-center">
            <div className="font-bold text-gray-800 text-lg leading-tight">
              Jorge Lazaro
            </div>
            <div className="text-xs text-gray-500">
              Full-Stack Developer / IT Support
            </div>
          </div>
        </div>

        {/* screen name */}
        <div className="text-xs text-gray-600">
          <span className="font-semibold">ScreenName:</span>{" "}
          <span className="font-bold text-blue-700">jorgelazaro.dev</span>{" "}
          <span className="text-green-600">✓</span>
        </div>

        {/* password */}
        <div>
          <div className="text-xs font-semibold text-gray-700 mb-1">
            Password
          </div>
          <div className="bg-white border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-600 shadow-inner">
            Building fast, scalable web apps
          </div>
        </div>

        {/* buttons */}
        <button
          className="w-full flex items-center justify-center gap-2 text-white font-bold text-sm py-2 rounded-md shadow-md transition-all hover:brightness-110 active:scale-95"
          style={{
            background: "linear-gradient(180deg,#4db8ff 0%,#1a6fc4 100%)",
            border: "1px solid #0d5aad"
          }}
        >
          <RunningMan className="w-4 h-4" /> Sign On
        </button>

        <a
          href="/public/Jorge Lazaro Software Developer Resume 2026.pdf"
          download
        >
          <button
            className="w-full flex items-center justify-center gap-2 text-gray-700 font-semibold text-sm py-2 rounded-md shadow border border-gray-300 hover:brightness-95 active:scale-95 transition-all"
            style={{
              background: "linear-gradient(180deg,#eee 0%,#d4d4d4 100%)"
            }}
          >
            <Download size={14} /> Download Resume
          </button>
        </a>

        <div className="flex justify-between text-xs text-blue-700 font-semibold">
          <button className="hover:underline flex items-center gap-1">
            <HelpCircle size={12} /> Help
          </button>
          <button className="hover:underline flex items-center gap-1">
            <Settings size={12} /> Setup
          </button>
        </div>

        <div className="flex justify-between text-xs text-gray-500 pt-1 border-t border-gray-200">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            Version: 1
          </span>
          <span>Version:1 ▾</span>
        </div>
      </div>
    </WinChrome>
  );
}

// ─── messenger window ─────────────────────────────────────────────────────────
function MessengerWindow() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "system",
      text: "Hello. Here are my projects — let me know if you have any questions."
    },
    { from: "system", text: "Pick a thread to dive in:" }
  ]);
  const [input, setInput] = useState<string>("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const openProject = (proj: Project): void => {
    setActiveProject(proj);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: `Tell me about ${proj.name}` },
      { from: "system", text: proj.desc, tags: proj.tech, link: proj.link }
    ]);
  };

  const sendMessage = (overrideInput?: string): void => {
    const trimmed = (overrideInput ?? input).trim().toLowerCase() as QuickCmd;
    if (!trimmed) return;
    const reply =
      CANNED[trimmed] ??
      "I didn't catch that — try: projects, resume, contact, or skills.";
    setMessages((prev) => [
      ...prev,
      { from: "user", text: (overrideInput ?? input).trim() },
      { from: "system", text: reply }
    ]);
    setInput("");
  };

  const handleKey = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <WinChrome
      title="AOL System Msg: jorgelazaro.dev"
      icon={<AolIcon className="w-5 h-5" />}
      className="flex-1 min-w-0"
    >
      {/* menu bar */}
      <div
        className="flex gap-4 px-3 py-1 text-xs text-gray-700 border-b border-blue-200 bg-white/50"
        style={{ fontFamily: "Tahoma, sans-serif" }}
      >
        {(["File", "Edit", "Insert", "People"] as const).map((m) => (
          <button key={m} className="hover:underline">
            {m}
          </button>
        ))}
      </div>

      <div className="flex flex-1 min-h-0">
        {/* chat area */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* IM header */}
          <div className="flex items-center gap-2 px-3 py-2 bg-white/60 border-b border-blue-100">
            <RunningMan className="w-4 h-4 text-yellow-500" />
            <span className="font-bold text-sm text-gray-800">
              Jorge Lazaro
            </span>
            <Dot status="online" />
          </div>

          {/* system msg label */}
          <div className="mx-3 mt-2 mb-1">
            <div className="flex items-center gap-2 bg-white/80 border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 shadow-inner">
              <AolIcon className="w-4 h-4 shrink-0" />
              <span className="font-semibold">AOL System Msg</span>
            </div>
          </div>

          {/* messages */}
          <div
            className="flex-1 overflow-y-auto px-3 py-2 space-y-2"
            style={{ minHeight: 0 }}
          >
            {messages.map((m, i) => (
              <div key={i}>
                {m.from === "system" ? (
                  <div className="text-sm text-gray-700 leading-relaxed">
                    <p>{m.text}</p>
                    {m.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {m.tags.map((t) => (
                          <span
                            key={t}
                            className="bg-blue-100 border border-blue-300 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    {m.link && (
                      <a
                        href={m.link}
                        className="text-blue-600 underline text-xs mt-1 inline-block hover:text-blue-800"
                      >
                        View project →
                      </a>
                    )}
                  </div>
                ) : m.text === "Pick a thread to dive in:" ? (
                  <div>
                    <p className="text-sm text-gray-700 mb-2">{m.text}</p>
                    <div className="space-y-1.5">
                      {PROJECTS.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => openProject(p)}
                          className="w-full flex items-center justify-between px-3 py-2 rounded bg-white/70 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all text-sm font-medium text-gray-700 shadow-sm group"
                        >
                          <span className="flex items-center">
                            {p.icon}
                            {p.name}
                          </span>
                          <span className="text-gray-400 group-hover:text-blue-400">
                            ›
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`flex ${m.from === "user" ? "justify-end" : ""}`}
                  >
                    <span
                      className={`text-sm px-2.5 py-1.5 rounded-lg max-w-xs shadow-sm ${
                        m.from === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-white border border-gray-200 text-gray-700 rounded-bl-none"
                      }`}
                    >
                      {m.text}
                    </span>
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* input bar */}
          <div className="border-t border-blue-200 bg-white/60 px-3 py-2">
            <div className="flex gap-2 items-center bg-white border border-gray-300 rounded shadow-inner px-2 py-1">
              <input
                className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
                placeholder="Type a command or keyword..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
              />
              <button className="text-gray-400 hover:text-blue-500 text-xs">
                △
              </button>
              <button className="text-gray-400 hover:text-blue-500">
                <Volume2 size={14} />
              </button>
            </div>
            <div className="flex gap-2 mt-2 flex-wrap">
              {QUICK_CMDS.map((cmd) => (
                <button
                  key={cmd}
                  className="px-3 py-1 rounded-full bg-white border border-gray-300 text-xs text-gray-600 hover:border-blue-400 hover:text-blue-600 shadow-sm transition-all"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    sendMessage(cmd);
                  }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* buddy list sidebar */}
        <div className="w-44 border-l border-blue-200 bg-white/50 flex flex-col shrink-0">
          <div className="px-3 py-2 text-xs font-bold text-gray-600 border-b border-blue-100 flex items-center gap-1">
            <span className="text-base">G</span> Buddy List
          </div>
          <div className="flex-1 overflow-y-auto px-2 py-2 space-y-3 text-xs">
            {(
              [
                {
                  label: "Online",
                  color: "text-green-600",
                  statusFilter: "online"
                },
                {
                  label: "Away",
                  color: "text-yellow-600",
                  statusFilter: "away"
                },
                {
                  label: "Offline",
                  color: "text-gray-400",
                  statusFilter: "offline"
                }
              ] as { label: string; color: string; statusFilter: Status }[]
            ).map((group) => (
              <div key={group.label}>
                <div
                  className={`font-bold ${group.color} mb-1 flex items-center gap-1`}
                >
                  <Dot status={group.statusFilter} /> {group.label}
                </div>
                {PROJECTS.filter((p) => p.status === group.statusFilter).map(
                  (p) => (
                    <button
                      key={p.id}
                      onClick={() => openProject(p)}
                      className={`w-full flex items-center gap-1 px-2 py-1 rounded text-left text-gray-700 hover:bg-blue-100 transition-colors ${
                        activeProject?.id === p.id
                          ? "bg-blue-100 font-semibold"
                          : ""
                      }`}
                    >
                      {p.icon}
                      <span className="truncate">{p.name}</span>
                      {p.status === "online" && <Dot status="online" />}
                    </button>
                  )
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-blue-200 px-2 py-2 flex gap-3 text-xs text-gray-500">
            <button className="hover:text-yellow-600 flex items-center gap-1">
              <TriangleAlert size={12} /> Warn
            </button>
            <button className="hover:text-red-500 flex items-center gap-1">
              <Ban size={12} /> Block
            </button>
          </div>
          <div className="px-2 pb-2 flex gap-1.5 items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-800" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
          </div>
        </div>
      </div>
    </WinChrome>
  );
}

// ─── root ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 overflow-auto"
      style={{
        background:
          "linear-gradient(180deg, #87ceeb 0%, #b8e0f7 45%, #7ab648 45%, #5a8f2e 100%)"
      }}
    >
      {/* cloud blobs */}
      <div className="absolute top-8 left-16 w-32 h-10 rounded-full bg-white/60 blur-sm pointer-events-none" />
      <div className="absolute top-12 left-32 w-20 h-8 rounded-full bg-white/50 blur-sm pointer-events-none" />
      <div className="absolute top-6 right-24 w-40 h-12 rounded-full bg-white/60 blur-sm pointer-events-none" />

      <div className="flex gap-6 items-start">
        <SignOnPanel />
        <MessengerWindow />
      </div>
    </div>
  );
}

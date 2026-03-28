import "./index.css";

import {
  ChevronDown,
  CircleHelp,
  Download,
  MessageCircle,
  Music2,
  Search,
  Settings,
  Ban,
  Clock3,
  TriangleAlert,
  Mountain
} from "lucide-react";

export default function App() {
  const projectThreads = [
    { label: "Musipal", icon: <Music2 size={20} />, active: true },
    {
      label: "Outdoor Adventures",
      icon: <Mountain size={20} />,
      active: false
    },
    { label: "Timesheet App", icon: <Clock3 size={20} />, active: false },
    {
      label: "Ask me anything",
      icon: <MessageCircle size={20} />,
      active: false
    }
  ];
  const buddyGroups = [
    {
      title: "Online",
      dot: "bg-green-500",
      items: [
        { label: "Musipal", icon: <Music2 size={18} />, active: true },
        {
          label: "Outdoor Adventures",
          icon: <Mountain size={18} />,
          active: false
        },
        { label: "Timesheet App", icon: <Clock3 size={18} />, active: false }
      ]
    },
    {
      title: "Away",
      dot: "bg-yellow-400",
      items: [
        { label: "Streamline CRM", icon: <Search size={18} />, active: false }
      ]
    },
    {
      title: "Offline",
      dot: "bg-slate-400",
      items: [
        {
          label: "Weather Dashboard",
          icon: (<CloudIcon />) as React.ReactNode,
          active: false
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#74b9ff_0%,#99cfff_35%,#d9efff_63%,#76b14f_64%,#8fc764_100%)] px-4 py-10 md:px-8">
      <div className="mx-auto flex max-w-[1450px] flex-col gap-6 xl:flex-row xl:items-start xl:justify-center">
        <section className="aim-window w-full xl:max-w-[430px]">
          <WindowTitleBar title="Sign on" />

          <div className="aim-window-body">
            <div className="rounded-[22px] border border-[#b7c9ef] bg-[linear-gradient(180deg,#d7ebff_0%,#eef6ff_34%,#ffffff_60%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
              <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-[radial-gradient(circle_at_30%_20%,#f7fbff_0%,#d7e7ff_45%,#b8d4ff_100%)] shadow-[0_4px_14px_rgba(40,80,150,0.18)]">
                <div className="text-center leading-none">
                  <div className="text-5xl">👨🏽‍💻</div>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-[22px] font-extrabold tracking-[-0.02em] text-slate-800 md:text-[28px]">
                  Jorge Lazaro
                </h1>
                <p className="mt-1 text-[15px] text-slate-600 md:text-[17px]">
                  Full-Stack Developer / IT Support
                </p>
              </div>

              <div className="mt-5 border-t border-slate-200 pt-4">
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2 text-[15px] md:text-[16px]">
                    <span className="font-medium text-slate-500">
                      ScreenName:
                    </span>
                    <span className="font-semibold text-[#37548a]">
                      Jl-2001
                    </span>
                  </div>
                  <ChevronDown className="text-[#4c6faa]" size={20} />
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[22px] border border-[#d4dcea] bg-[linear-gradient(180deg,#ffffff_0%,#f3f6fb_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]">
              <h2 className="text-[18px] font-extrabold text-slate-800 md:text-[20px]">
                Password
              </h2>
              <div className="mt-3 rounded-2xl border border-[#cfd7e6] bg-[#f9fbff] px-4 py-3 text-[16px] text-slate-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
                Building fast, scalable web apps
              </div>

              <button className="aim-primary-btn mt-4">
                <span className="text-[22px] leading-none">🚶</span>
                <span>Sign On</span>
              </button>

              <button className="aim-secondary-btn mt-4">
                <Download size={20} />
                <span>Download Resume</span>
              </button>

              <div className="mt-5 flex items-center gap-8 px-2 text-[#3f5c96]">
                <div className="flex items-center gap-2 text-[16px] font-medium">
                  <CircleHelp />
                  <span>Help</span>
                </div>
                <div className="flex items-center gap-2 text-[16px] font-medium">
                  <Settings size={22} />
                  <span>Setup</span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#d6dbe7] bg-[linear-gradient(180deg,#ffffff_0%,#edf2fb_100%)] px-4 py-3 text-[15px] text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded-full bg-green-500 shadow-[0_0_0_2px_rgba(255,255,255,0.6),0_0_10px_rgba(34,197,94,0.35)]" />
                  <span> Version: 1 </span>
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="aim-window w-full xl:max-w-[920px]">
          <WindowTitleBar title="AOL System Msg : jorgelazaro.dev" showStatus />

          <div>
            <span>File</span>
            <span>Edit</span>
            <span>Insert</span>
            <span>People</span>
          </div>

          <div className="grid min-h-[690px] grid-cols-1 xl:grid-cols-[1fr_240px]">
            <div className="border-r border-[#cfd7e5] bg-[linear-gradient(180deg,#f8fbff_0%,#eef3fb_100%)] p-4 md:p-5">
              <div className="rounded-[16px] border border-[#d4dceb] bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3 text-[18px] font-bold text-slate-700 md:text-[20px]">
                  <span className="text-[22px]">🚶</span>
                  <span>Jorge Lazaro</span>
                  <span className="h-3.5 w-3.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.35)]" />
                </div>
              </div>

              <div className="mt-4 rounded-[16px] border border-[#d7dfed] bg-white p-4 shadow-sm">
                <div className="inline-flex items-center gap-2 rounded-xl border border-[#d9e0ef] bg-[linear-gradient(180deg,#f4f8ff_0%,#eef3fb_100%)] px-3 py-2 text-[16px] font-semibold text-[#435f98]">
                  <span className="text-[18px]">🔊</span>
                  <span>AOL System Msg</span>
                </div>

                <div className="mt-5 space-y-3">
                  {projectThreads.map((thread) => (
                    <button
                      key={thread.label}
                      className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition 
                      ${
                        thread.active
                          ? "border-[#bfd1ee] bg-[linear-gradient(180deg,#eef5ff_0%,#ddeafb_100%)] shadow-sm"
                          : "border-[#d8deeb] bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)] hover:bg-[linear-gradient(180deg,#f5f9ff_0%,#edf4ff_100%)]"
                      }`}
                    >
                      <div className="flex items-center gap-3 text-[18px] text-[#425c93]">
                        <span
                          className={
                            thread.active ? "text-[#4c78c8]" : "text-slate-500"
                          }
                        >
                          {thread.icon}
                        </span>
                        <span className="font-medium text-slate-700">
                          {thread.label}
                        </span>
                      </div>
                      <span className="text-2xl text-slate-300 transition group-hover:text-slate-400">
                        ›
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[16px] border border-[#d5dcea] bg-white p-3 shadow-sm">
                <div className="flex items-center rounded-xl border border-[#d8dfec] bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fd_100%)] px-4 py-3">
                  <input
                    className="w-full bg-transparent text-[18px] text-slate-500 outline-none placeholder:text-slate-400"
                    placeholder="Type a command or keyword..."
                    readOnly
                  />
                  <div className="ml-3 flex items-center gap-3 text-slate-400">
                    <span className="text-lg">⌂</span>
                    <span className="text-lg">💬</span>
                    <span className="text-lg">🔈</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {["projects", "Resume", "Contact", "Skills"].map((chip) => (
                    <button
                      key={chip}
                      className="rounded-full border border-[#cfd7e6] bg-[linear-gradient(180deg,#ffffff_0%,#e9eef8_100%)] px-5 py-2 text-[18px] font-medium text-[#3d588e] shadow-sm transition hover:-translate-y-[1px]"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <aside className="flex flex-col bg-[linear-gradient(180deg,#f8fbff_0%,#eef3fa_100%)]">
              <div className="border-b border-[#d1d8e6] px-5 py-5">
                <div className="flex items-center gap-2 text-[18px] font-semibold text-slate-600">
                  <span className="rotate-[-12deg] text-slate-400">↺</span>
                  <span>Buddy List</span>
                </div>
              </div>

              <div className="flex-1 space-y-5 px-4 py-4">
                {buddyGroups.map((group) => (
                  <div key={group.title}>
                    <div className="mb-3 flex items-center gap-2 text-[17px] font-medium text-slate-600">
                      <span
                        className={`h-3.5 w-3.5 rounded-full ${group.dot}`}
                      />
                      <span>{group.title}</span>
                    </div>

                    <div className="space-y-2">
                      {group.items.map((item) => (
                        <button
                          key={item.label}
                          className="flex w-full items-center justify-between rounded-xl border border-[#d4dceb] bg-[linear-gradient(180deg,#ffffff_0%,#f3f7fc_100%)] px-3 py-3 text-left shadow-sm transition hover:bg-[linear-gradient(180deg,#f4f8ff_0%,#ebf1fa_100%)]"
                        >
                          <div className="flex items-center gap-3 text-[16px] text-slate-700">
                            <span className="text-[#5a7abc]">{item.icon}</span>
                            <span className="font-medium">{item.label}</span>
                          </div>
                          {item.active ? (
                            <span className="h-3 w-3 rounded-full bg-green-500" />
                          ) : null}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 border-t border-[#d1d8e6]">
                <button className="flex items-center justify-center gap-2 border-r border-[#d1d8e6] px-4 py-5 text-[18px] text-slate-600 transition hover:bg-white/70">
                  <TriangleAlert size={22} className="text-yellow-500" />
                  <span>warn</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-5 text-[18px] text-slate-600 transition hover:bg-white/70">
                  <Ban size={22} />
                  <span>block</span>
                </button>
              </div>

              <div className="flex items-center justify-between rounded-b-[26px] border-t border-[#dde3ee] bg-[linear-gradient(180deg,#f7f9fc_0%,#e8edf6_100%)] px-5 py-4">
                <span className="text-slate-300">...</span>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="h-3 w-3 rounded-full bg-slate-400" />
                  <span className="h-3 w-3 rounded-full bg-slate-400" />
                  <span className="h-3 w-3 rounded-full bg-slate-400" />
                  <span className="h-3 w-3 rounded-full bg-slate-300" />
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

function WindowTitleBar({
  title,
  showStatus = false
}: {
  title: string;
  showStatus?: boolean;
}) {
  return (
    <div className="aim-titlebar">
      <div className="flex items-center gap-3">
        <span className="text-[22px] leading-none">🚶</span>
        <span className="truncate">{title}</span>
        {showStatus ? (
          <span className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.55)]" />
        ) : null}
      </div>

      <div className="ml-3 flex items-center gap-2">
        <button className="aim-window-control">–</button>
        <button className="aim-window-control">□</button>
        <button className="aim-window-control">×</button>
      </div>
    </div>
  );
}

function CloudIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-[#5a7abc]"
    >
      <path
        d="M7 18h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7.1 8.2 4 4 0 0 0 7 18Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WinChrome({ title, icon, children, className = "" }) {
  return (
    <div
      className={`flex flex-col rounded-xl overflow-hidden shadow-2xl border border-white/40 ${className}`}
      style={{ background: "linear-gradient(180deg,#dce9f5 0%,#c8ddf0 100%)" }}
    >
      {/* title bar */}
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
          {["─", "□", "✕"].map((s, i) => (
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

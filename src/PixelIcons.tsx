// Original 16x16 pixel-art glyphs drawn as crisp-edged SVG rects.
// No external icon library — keeps the bundle tiny and the look consistent.

type IconProps = { className?: string };

const base = "pix shrink-0";

export const IconCaret = ({ className = "w-3 h-3" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="4" y="2" width="2" height="2" />
    <rect x="6" y="4" width="2" height="2" />
    <rect x="8" y="6" width="2" height="4" />
    <rect x="6" y="10" width="2" height="2" />
    <rect x="4" y="12" width="2" height="2" />
  </svg>
);

export const IconChevron = ({ className = "w-3 h-3", open = false }: IconProps & { open?: boolean }) => (
  <svg
    viewBox="0 0 16 16"
    className={`${base} ${className}`}
    fill="currentColor"
    aria-hidden="true"
    style={open ? { transform: "rotate(90deg)" } : undefined}
  >
    <rect x="4" y="2" width="2" height="2" />
    <rect x="6" y="4" width="2" height="2" />
    <rect x="8" y="6" width="2" height="4" />
    <rect x="6" y="10" width="2" height="2" />
    <rect x="4" y="12" width="2" height="2" />
  </svg>
);

export const IconDownload = ({ className = "w-3.5 h-3.5" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="7" y="1" width="2" height="8" />
    <rect x="5" y="7" width="6" height="2" />
    <rect x="6" y="9" width="4" height="2" />
    <rect x="7" y="11" width="2" height="1" />
    <rect x="2" y="13" width="12" height="2" />
  </svg>
);

export const IconExternal = ({ className = "w-3.5 h-3.5" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="7" y="2" width="7" height="2" />
    <rect x="12" y="2" width="2" height="7" />
    <rect x="9" y="5" width="2" height="2" />
    <rect x="7" y="7" width="2" height="2" />
    <rect x="2" y="4" width="2" height="10" />
    <rect x="2" y="12" width="10" height="2" />
    <rect x="10" y="9" width="2" height="4" />
    <rect x="2" y="4" width="6" height="2" />
  </svg>
);

export const IconMail = ({ className = "w-3.5 h-3.5" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="1" y="3" width="14" height="10" />
    <rect x="3" y="5" width="10" height="6" fill="var(--color-paper)" />
    <rect x="3" y="5" width="3" height="2" />
    <rect x="10" y="5" width="3" height="2" />
    <rect x="5" y="7" width="2" height="2" />
    <rect x="9" y="7" width="2" height="2" />
    <rect x="7" y="8" width="2" height="2" />
  </svg>
);

export const IconGitHub = ({ className = "w-3.5 h-3.5" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="4" y="2" width="8" height="2" />
    <rect x="2" y="4" width="12" height="8" />
    <rect x="3" y="12" width="2" height="3" />
    <rect x="7" y="12" width="2" height="3" />
    <rect x="11" y="12" width="2" height="2" />
    <rect x="5" y="6" width="2" height="2" fill="var(--color-paper)" />
    <rect x="9" y="6" width="2" height="2" fill="var(--color-paper)" />
  </svg>
);

export const IconLinkedIn = ({ className = "w-3.5 h-3.5" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="1" y="1" width="14" height="14" />
    <rect x="3" y="6" width="2" height="7" fill="var(--color-paper)" />
    <rect x="3" y="3" width="2" height="2" fill="var(--color-paper)" />
    <rect x="7" y="6" width="2" height="7" fill="var(--color-paper)" />
    <rect x="9" y="8" width="3" height="5" fill="var(--color-paper)" />
    <rect x="7" y="6" width="4" height="2" fill="var(--color-paper)" />
  </svg>
);

export const IconTrophy = ({ className = "w-4 h-4" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="4" y="2" width="8" height="2" />
    <rect x="4" y="2" width="2" height="6" />
    <rect x="10" y="2" width="2" height="6" />
    <rect x="2" y="3" width="2" height="3" />
    <rect x="12" y="3" width="2" height="3" />
    <rect x="6" y="8" width="4" height="2" />
    <rect x="7" y="10" width="2" height="2" />
    <rect x="5" y="12" width="6" height="2" />
    <rect x="4" y="14" width="8" height="2" />
  </svg>
);

export const IconTerminal = ({ className = "w-3.5 h-3.5" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="1" y="2" width="14" height="12" />
    <rect x="3" y="4" width="10" height="8" fill="var(--color-ink)" />
    <rect x="4" y="5" width="2" height="2" fill="var(--color-online)" />
    <rect x="6" y="7" width="2" height="2" fill="var(--color-online)" />
    <rect x="4" y="9" width="2" height="2" fill="var(--color-online)" />
    <rect x="8" y="9" width="4" height="1" fill="var(--color-online)" />
  </svg>
);

// Small per-project glyphs
export const IconMusic = ({ className = "w-full h-full" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="5" y="9" width="4" height="4" />
    <rect x="11" y="7" width="4" height="4" />
    <rect x="8" y="2" width="2" height="9" />
    <rect x="14" y="3" width="2" height="6" />
    <rect x="9" y="2" width="6" height="2" />
  </svg>
);

export const IconTicket = ({ className = "w-full h-full" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="1" y="4" width="14" height="8" />
    <rect x="3" y="6" width="10" height="4" fill="var(--color-paper)" />
    <rect x="7" y="4" width="2" height="2" fill="var(--color-cream)" />
    <rect x="7" y="10" width="2" height="2" fill="var(--color-cream)" />
    <rect x="4" y="7" width="6" height="1" />
  </svg>
);

export const IconUsers = ({ className = "w-full h-full" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="4" y="3" width="4" height="4" />
    <rect x="3" y="8" width="6" height="5" />
    <rect x="10" y="4" width="3" height="3" />
    <rect x="9" y="8" width="5" height="4" />
  </svg>
);

export const IconMountain = ({ className = "w-full h-full" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="1" y="12" width="14" height="2" />
    <rect x="3" y="8" width="4" height="4" />
    <rect x="5" y="5" width="2" height="3" />
    <rect x="8" y="7" width="6" height="5" />
    <rect x="10" y="4" width="2" height="3" />
    <rect x="5" y="4" width="2" height="1" fill="var(--color-paper)" />
  </svg>
);

export const IconHeadphones = ({ className = "w-full h-full" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`${base} ${className}`} fill="currentColor" aria-hidden="true">
    <rect x="4" y="3" width="8" height="2" />
    <rect x="2" y="5" width="2" height="4" />
    <rect x="12" y="5" width="2" height="4" />
    <rect x="2" y="9" width="3" height="4" />
    <rect x="11" y="9" width="3" height="4" />
  </svg>
);

// Enlarged developer avatar — original pixel sprite (no third-party likeness).
export const PixelAvatar = ({ className = "w-full h-full" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`pix ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    <rect width="16" height="16" fill="var(--color-aim)" />
    <rect x="3" y="8" width="10" height="2" fill="var(--color-navy)" />
    <rect x="4" y="2" width="8" height="3" fill="var(--color-navy)" />
    <rect x="3" y="3" width="10" height="2" fill="var(--color-navy)" />
    <rect x="4" y="4" width="8" height="4" fill="#f0c8a0" />
    <rect x="3" y="5" width="10" height="3" fill="#f0c8a0" />
    <rect x="5" y="5" width="2" height="2" fill="var(--color-navy)" />
    <rect x="9" y="5" width="2" height="2" fill="var(--color-navy)" />
    <rect x="6" y="8" width="4" height="1" fill="#c9956a" />
    <rect x="4" y="9" width="8" height="5" fill="var(--color-title)" />
    <rect x="2" y="10" width="3" height="4" fill="var(--color-title)" />
    <rect x="11" y="10" width="3" height="4" fill="var(--color-title)" />
    <rect x="6" y="9" width="4" height="3" fill="var(--color-paper)" />
    <rect x="7" y="14" width="2" height="2" fill="var(--color-navy)" />
  </svg>
);

// Tiny idle sprite used by the source-inspector easter egg.
export const PixelBuddy = ({ className = "w-6 h-6" }: IconProps) => (
  <svg viewBox="0 0 16 16" className={`pix idle-bob ${className}`} shapeRendering="crispEdges" aria-hidden="true">
    <rect x="6" y="2" width="4" height="4" fill="#f0c8a0" />
    <rect x="6" y="2" width="4" height="1" fill="var(--color-navy)" />
    <rect x="6" y="4" width="1" height="1" fill="var(--color-navy)" />
    <rect x="9" y="4" width="1" height="1" fill="var(--color-navy)" />
    <rect x="5" y="6" width="6" height="5" fill="var(--color-aim)" />
    <rect x="3" y="7" width="2" height="3" fill="#f0c8a0" />
    <rect x="11" y="7" width="2" height="3" fill="#f0c8a0" />
    <rect x="5" y="11" width="2" height="3" fill="var(--color-navy)" />
    <rect x="9" y="11" width="2" height="3" fill="var(--color-navy)" />
  </svg>
);

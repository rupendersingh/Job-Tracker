"use client";

import {
  BoardIcon,
  CalendarIcon,
  ChartIcon,
  DownloadIcon,
  LogoMark,
  MoonIcon,
  PanelLeftIcon,
  SunIcon,
  UploadIcon,
} from "./Icons";

const NAV = [
  { id: "board", label: "Board", Icon: BoardIcon },
  { id: "interviews", label: "Interviews", Icon: CalendarIcon },
  { id: "statistics", label: "Statistics", Icon: ChartIcon },
] as const;

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
  view: string;
  onViewChange: (view: string) => void;
  theme: string;
  onToggleTheme: () => void;
  onExport: () => void;
  onImportClick: () => void;
};

export function Sidebar({
  collapsed,
  onToggleCollapse,
  view,
  onViewChange,
  theme,
  onToggleTheme,
  onExport,
  onImportClick,
}: SidebarProps) {
  return (
    <aside
      className={`flex h-full shrink-0 flex-col border-r border-hairline bg-surface shadow-sm transition-[width] duration-200 ease-out ${
        collapsed ? "w-16" : "w-[220px]"
      }`}
    >
      <div className={`flex items-center gap-2.5 px-3 py-4 ${collapsed ? "justify-center" : "px-4"}`}>
        <LogoMark className="h-8 w-8 shrink-0" />
        {!collapsed ? (
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-[0.16em] text-muted uppercase">
              Local first
            </p>
            <h1 className="truncate text-sm font-semibold tracking-tight text-ink">Job Tracker</h1>
          </div>
        ) : null}
      </div>

      <nav className="flex flex-col gap-1 px-2">
        {NAV.map(({ id, label, Icon }) => {
          const active = view === id;
          return (
            <button
              key={id}
              type="button"
              title={label}
              aria-label={label}
              aria-current={active ? "page" : undefined}
              onClick={() => onViewChange(id)}
              className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm font-medium transition duration-150 ${
                collapsed ? "justify-center" : ""
              } ${
                active
                  ? "bg-accent-soft text-accent shadow-sm"
                  : "text-muted hover:bg-surface-muted hover:text-ink"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed ? <span>{label}</span> : null}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-1 border-t border-hairline p-2">
        <SidebarButton
          collapsed={collapsed}
          label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={onToggleCollapse}
        >
          <PanelLeftIcon />
        </SidebarButton>
        <SidebarButton
          collapsed={collapsed}
          label={theme === "dark" ? "Light mode" : "Dark mode"}
          onClick={onToggleTheme}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </SidebarButton>
        <SidebarButton collapsed={collapsed} label="Export JSON" onClick={onExport}>
          <DownloadIcon />
        </SidebarButton>
        <SidebarButton collapsed={collapsed} label="Import JSON" onClick={onImportClick}>
          <UploadIcon />
        </SidebarButton>
      </div>
    </aside>
  );
}

function SidebarButton({
  collapsed,
  label,
  onClick,
  children,
}: {
  collapsed: boolean;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={label}
      aria-label={label}
      className={`flex items-center gap-2 rounded-xl px-2.5 py-2 text-sm text-muted transition duration-150 hover:bg-surface-muted hover:text-ink ${
        collapsed ? "justify-center" : ""
      }`}
    >
      {children}
      {!collapsed ? <span>{label}</span> : null}
    </button>
  );
}

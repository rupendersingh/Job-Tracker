"use client";

import { dashboardStats, formatPercent } from "../utils";
import type { Job } from "../constants";

const SUMMARY = [
  { key: "total", label: "Total applications", tone: "bg-violet-600 text-white", pct: false },
  { key: "appliedThisWeek", label: "Applications this week", tone: "bg-sky-600 text-white", pct: false },
  { key: "appliedThisMonth", label: "Applications this month", tone: "bg-amber-500 text-white", pct: false },
  { key: "conversion", label: "Interview conversion", tone: "bg-emerald-600 text-white", pct: true },
] as const;

function heatClass(count: number): string {
  if (!count) return "bg-surface-muted";
  if (count === 1) return "bg-violet-200 dark:bg-violet-900";
  if (count === 2) return "bg-violet-400 dark:bg-violet-700";
  return "bg-violet-600 dark:bg-violet-500";
}

type StatisticsProps = {
  jobs: Job[];
};

export function Statistics({ jobs }: StatisticsProps) {
  const stats = dashboardStats(jobs);
  const maxLast = Math.max(1, ...stats.last10.map((d) => d.count));
  const maxCol = Math.max(1, ...stats.byColumn.map((c) => c.count));

  return (
    <div className="kanban-scroll h-full space-y-4 overflow-y-auto px-4 pb-6">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {SUMMARY.map((card) => (
          <div key={card.key} className={`rounded-2xl p-4 shadow-sm ${card.tone}`}>
            <p className="text-xs font-semibold tracking-wide uppercase opacity-80">{card.label}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight">
              {card.pct
                ? formatPercent(stats[card.key] as number)
                : (stats[card.key as keyof typeof stats] as number)}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        <div
          className={`rounded-2xl border p-4 ${
            stats.conversion >= 2
              ? "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100"
              : "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100"
          }`}
        >
          <h3 className="font-semibold">
            {stats.conversion >= 2 ? "Interview rate is solid" : "Interview rate needs a push"}
          </h3>
          <p className="mt-1 text-sm opacity-80">
            {formatPercent(stats.conversion)} of progressed applications are in interview rounds
            (industry ballpark is ~2%).
          </p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
          <h3 className="font-semibold">
            {stats.appliedThisWeek > 0 ? "Keep the weekly rhythm" : "Apply more this week"}
          </h3>
          <p className="mt-1 text-sm opacity-80">
            {stats.appliedThisWeek > 0
              ? `You logged ${stats.appliedThisWeek} application${stats.appliedThisWeek === 1 ? "" : "s"} this week.`
              : "No applications this week yet. A small daily target compounds quickly."}
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {(
          [
            ["Total interviews", stats.interviewCount],
            ["Response rate", formatPercent(stats.responseRate)],
            ["Interview → Offer", formatPercent(stats.interviewToOffer)],
            ["Interview → Rejected", formatPercent(stats.interviewToRejected)],
          ] as [string, string | number][]
        ).map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-hairline bg-surface p-4 shadow-sm">
            <p className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</p>
            <p className="mt-1 text-2xl font-bold text-ink">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-hairline bg-surface p-4 shadow-sm">
        <h3 className="font-semibold text-ink">Application pipeline</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {stats.byColumn.map((col) => (
            <div key={col.id} className="min-w-[110px] flex-1 rounded-xl bg-canvas p-3">
              <p className="text-xs text-muted">{col.title}</p>
              <p className="text-xl font-bold text-ink">{col.count}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-muted">
                <div
                  className={`h-full rounded-full ${col.bar || col.color}`}
                  style={{ width: `${Math.round((col.count / maxCol) * 100)}%` }}
                />
              </div>
            </div>
          ))}
          <div className="min-w-[110px] flex-1 rounded-xl bg-canvas p-3">
            <p className="text-xs text-muted">No response</p>
            <p className="text-xl font-bold text-ink">{stats.noResponse}</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-hairline bg-surface p-4 shadow-sm">
        <h3 className="font-semibold text-ink">Job apply frequency · {stats.year}</h3>
        <div className="mt-3 flex gap-0.5 overflow-x-auto">
          {stats.heatmap.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-0.5">
              {week.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.count}`}
                  className={`h-2.5 w-2.5 rounded-[3px] ${day.inYear ? heatClass(day.count) : "bg-transparent"}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        <div className="rounded-2xl border border-hairline bg-surface p-4 shadow-sm">
          <h3 className="font-semibold text-ink">Jobs applied in last 10 days</h3>
          <div className="mt-4 flex h-36 items-end gap-1">
            {stats.last10.map((day) => (
              <div key={day.date} className="flex flex-1 flex-col items-center gap-1" title={`${day.label}: ${day.count} applied`}>
                <div className="flex h-28 w-full items-end rounded-md bg-canvas">
                  <div
                    className="w-full rounded-md bg-violet-500 transition-all duration-300"
                    style={{ height: `${Math.max(6, Math.round((day.count / maxLast) * 100))}%` }}
                  />
                </div>
                <span className="text-[9px] font-medium text-muted">{day.dayNumber}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-hairline bg-surface p-4 shadow-sm">
          <h3 className="font-semibold text-ink">Status breakdown</h3>
          <div className="mt-4 flex items-center gap-6">
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
              <div
                className="h-full w-full rounded-full"
                style={{
                  background: stats.donut.length
                    ? `conic-gradient(${stats.donut
                        .reduce(
                          (acc, slice, i) => {
                            const colors = [
                              "#8b5cf6",
                              "#0ea5e9",
                              "#f59e0b",
                              "#6366f1",
                              "#10b981",
                              "#f43f5e",
                              "#64748b",
                            ];
                            const start = acc.offset;
                            const end = start + slice.pct;
                            acc.offset = end;
                            acc.parts.push(`${colors[i % colors.length]} ${start}% ${end}%`);
                            return acc;
                          },
                          { offset: 0, parts: [] as string[] }
                        )
                        .parts.join(", ")})`
                    : "var(--color-surface-muted)",
                }}
              />
              <div className="absolute flex h-20 w-20 flex-col items-center justify-center rounded-full bg-surface shadow-xs">
                <span className="text-xs font-bold text-ink">{jobs.length}</span>
                <span className="text-[9px] text-muted uppercase tracking-wider">total</span>
              </div>
            </div>
            <ul className="flex-1 space-y-1.5 text-sm">
              {stats.byColumn.map((col) => (
                <li key={col.id} className="flex items-center justify-between gap-3 text-ink">
                  <span className="flex items-center gap-1.5 text-xs font-medium">
                    <span className={`h-2 w-2 rounded-full ${col.color}`} />
                    {col.title}
                  </span>
                  <span className="text-xs text-muted font-mono">
                    {col.count} ({stats.share(col.count)}%)
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

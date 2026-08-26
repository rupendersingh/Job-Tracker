"use client";

import { pipelineStats } from "../utils";
import type { Job } from "../constants";

type StatsBarProps = {
  jobs: Job[];
};

export function StatsBar({ jobs }: StatsBarProps) {
  const stats = pipelineStats(jobs);
  const max = Math.max(stats.total, 1);
  const items = [
    { key: "total", label: "Total", value: stats.total, bar: "bg-accent", max },
    { key: "applied", label: "Applied", value: stats.applied, bar: "bg-sky-500", max },
    { key: "interview", label: "Interview", value: stats.interview, bar: "bg-violet-500", max },
    { key: "offer", label: "Offer", value: stats.offer, bar: "bg-emerald-500", max },
    { key: "rejected", label: "Rejected", value: stats.rejected, bar: "bg-rose-500", max },
    {
      key: "stalled",
      label: "Stalled",
      value: stats.stalled,
      bar: "bg-amber-500",
      max: Math.max(stats.stalled, 1),
      hint: "Applied or follow-up older than 14 days",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
      {items.map((item) => (
        <div
          key={item.key}
          title={item.hint}
          className="rounded-xl border border-hairline bg-surface px-3 py-2.5"
        >
          <p className="text-[11px] font-medium tracking-wide text-muted uppercase">{item.label}</p>
          <p className="mt-0.5 text-xl font-semibold tracking-tight text-ink">{item.value}</p>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface-muted">
            <div
              className={`h-full rounded-full ${item.bar}`}
              style={{ width: `${Math.round((item.value / item.max) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

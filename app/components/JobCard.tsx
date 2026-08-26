"use client";

import { useDraggable, useDroppable } from "@dnd-kit/core";
import { COLUMNS } from "../constants";
import type { Job } from "../constants";
import { ageChipTone, companyAvatarClass, companyInitials, daysSinceApplied } from "../utils";
import { GripIcon, LinkedInIcon } from "./Icons";

function mergeRefs(...refs: ((node: HTMLElement | null) => void)[]) {
  return (node: HTMLElement | null) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node);
    }
  };
}

const ageChipClass = {
  muted: "bg-surface-muted text-muted",
  aging: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200",
  stale: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200",
};

type JobCardProps = {
  job: Job;
  onOpen?: (job: Job) => void;
  overlay?: boolean;
};

export function JobCard({ job, onOpen, overlay = false }: JobCardProps) {
  const { attributes, listeners, setNodeRef: setDragRef, isDragging } = useDraggable({
    id: job.id,
    data: { type: "job", status: job.status },
    disabled: overlay,
  });
  const { setNodeRef: setDropRef } = useDroppable({
    id: `drop-${job.id}`,
    data: { type: "job", status: job.status },
    disabled: overlay,
  });

  const column = COLUMNS.find((c) => c.id === job.status);
  const style = overlay ? undefined : { opacity: isDragging ? 0.35 : 1 };
  const tone = ageChipTone(job);

  return (
    <article
      ref={overlay ? undefined : mergeRefs(setDragRef, setDropRef)}
      style={style}
      className={`group relative rounded-xl border border-hairline border-l-[4px] bg-card p-3 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:shadow-md ${column?.accent || "border-l-zinc-400"} ${overlay ? "w-[292px] shadow-xl ring-1 ring-hairline" : ""}`}
    >
      <div className="flex items-start gap-2.5">
        {!overlay ? (
          <button
            type="button"
            className="mt-1.5 -ml-1 cursor-grab touch-none rounded p-0.5 text-muted opacity-0 transition duration-150 group-hover:opacity-100 hover:bg-surface-muted active:cursor-grabbing"
            aria-label="Drag card"
            {...listeners}
            {...attributes}
          >
            <GripIcon />
          </button>
        ) : null}
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold text-white ${companyAvatarClass(job.company)}`}
        >
          {companyInitials(job.company)}
        </div>
        <button type="button" onClick={() => onOpen?.(job)} className="min-w-0 flex-1 text-left">
          <h3 className="truncate text-sm font-semibold tracking-tight text-ink">{job.company}</h3>
          <p className="mt-0.5 truncate text-sm text-muted">{job.role}</p>
        </button>
        {job.linkedinUrl ? (
          <a
            href={job.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="rounded-md p-1 text-[#0A66C2] transition duration-150 hover:bg-sky-50 dark:hover:bg-sky-950/40"
            aria-label={`Open LinkedIn posting for ${job.company}`}
            title="Open LinkedIn job"
          >
            <LinkedInIcon />
          </a>
        ) : null}
      </div>

      {job.skills?.length ? (
        <div className="mt-2.5 flex flex-wrap gap-1">
          {job.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-accent-soft px-1.5 py-0.5 text-[10px] font-medium text-accent"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 3 ? (
            <span className="rounded-md px-1.5 py-0.5 text-[10px] text-muted">
              +{job.skills.length - 3}
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {job.resume ? (
          <span className="rounded-md bg-surface-muted px-1.5 py-0.5 font-mono text-[11px] text-ink">
            {job.resume}
          </span>
        ) : null}
        <span className={`rounded-md px-1.5 py-0.5 text-[11px] font-medium ${ageChipClass[tone]}`}>
          {daysSinceApplied(job.dateApplied)}
          {tone === "stale" ? " · stalled" : ""}
        </span>
        {job.salaryRange ? (
          <span className="truncate rounded-md px-1.5 py-0.5 text-[11px] text-muted">{job.salaryRange}</span>
        ) : null}
      </div>
    </article>
  );
}

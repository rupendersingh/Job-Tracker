"use client";

import { useDroppable } from "@dnd-kit/core";
import type { ColumnDef, Job } from "../constants";
import { JobCard } from "./JobCard";

type ColumnProps = {
  column: ColumnDef;
  jobs: Job[];
  onOpen: (job: Job) => void;
};

export function Column({ column, jobs, onOpen }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
    data: { type: "column", status: column.id },
  });

  return (
    <section className="flex h-full min-w-[275px] max-w-[340px] flex-1 flex-col overflow-hidden rounded-2xl border border-hairline bg-surface shadow-sm">
      <div className={`h-[3px] w-full ${column.bar}`} />
      <header className="px-3 pt-3 pb-2">
        <div className="flex items-center justify-between gap-2">
          <h2 className={`flex items-center gap-2 text-sm font-semibold tracking-tight ${column.header}`}>
            <span className={`h-2 w-2 rounded-full ${column.dot}`} />
            {column.title}
          </h2>
          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${column.badge}`}>
            {jobs.length}
          </span>
        </div>
        <p className="mt-0.5 pl-4 text-[11px] text-muted">{column.hint}</p>
      </header>
      <div
        ref={setNodeRef}
        data-column-scroll
        className={`kanban-scroll mx-2 mb-2 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto rounded-xl px-1 pb-2 transition duration-150 ${
          isOver ? column.wellOver : column.well
        }`}
      >
        {jobs.length === 0 ? (
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed border-hairline px-3 py-8 text-center text-xs text-muted">
            Drop a card here
          </div>
        ) : (
          jobs.map((job) => <JobCard key={job.id} job={job} onOpen={onOpen} />)
        )}
      </div>
    </section>
  );
}

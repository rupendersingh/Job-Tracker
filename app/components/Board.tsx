"use client";

import { useMemo, useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { COLUMNS } from "../constants";
import type { Job } from "../constants";
import { matchesSearch, sortJobs } from "../utils";
import { Column } from "./Column";
import { JobCard } from "./JobCard";

type BoardProps = {
  jobs: Job[];
  query: string;
  dateSort: string;
  onOpen: (job: Job) => void;
  onMove: (id: string, status: string) => void;
};

export function Board({ jobs, query, dateSort, onOpen, onMove }: BoardProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
  );

  const grouped = useMemo(() => {
    const filtered = jobs.filter((job) => matchesSearch(job, query));
    const map = Object.fromEntries(COLUMNS.map((col) => [col.id, [] as Job[]]));
    for (const job of filtered) {
      if (map[job.status]) map[job.status].push(job);
    }
    for (const col of COLUMNS) {
      map[col.id] = sortJobs(map[col.id], dateSort);
    }
    return map;
  }, [jobs, query, dateSort]);

  const activeJob = jobs.find((job) => job.id === activeId) || null;

  const resolveStatus = (over: { data?: { current?: { status?: string } } } | null) =>
    over?.data?.current?.status || null;

  return (
    <div className="h-full min-h-0">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={({ active }) => setActiveId(active.id as string)}
        onDragCancel={() => setActiveId(null)}
        onDragEnd={({ active, over }) => {
          const status = resolveStatus(over);
          if (status) onMove(active.id as string, status);
          setActiveId(null);
        }}
      >
        <div className="kanban-scroll flex h-full gap-3 overflow-x-auto px-4 pb-4">
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              jobs={grouped[column.id]}
              onOpen={onOpen}
            />
          ))}
        </div>
        <DragOverlay dropAnimation={null}>
          {activeJob ? <JobCard job={activeJob} overlay /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

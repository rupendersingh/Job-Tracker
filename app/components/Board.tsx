"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
  );

  // A vertical wheel gesture does nothing on a horizontally overflowing
  // container, so the board reads as unscrollable unless you hold Shift or
  // find the thin scrollbar. Translate vertical wheel into horizontal pan,
  // but let a column that can still scroll vertically keep the gesture first.
  // Registered natively because React's onWheel is passive (preventDefault
  // would be ignored).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth) return;
      // Trackpad side-swipes and Shift+wheel already target the right axis.
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      // deltaMode 1 reports lines rather than pixels (Firefox).
      const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
      if (!delta) return;

      const target = event.target as HTMLElement | null;
      const column = target?.closest?.<HTMLElement>("[data-column-scroll]");
      if (column && column.scrollHeight > column.clientHeight) {
        const atTop = column.scrollTop <= 0;
        const atBottom =
          column.scrollTop + column.clientHeight >= column.scrollHeight - 1;
        if (!(delta < 0 ? atTop : atBottom)) return;
      }

      const before = el.scrollLeft;
      el.scrollLeft = before + delta;
      if (el.scrollLeft !== before) event.preventDefault();
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

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
        <div
          ref={scrollRef}
          className="kanban-scroll flex h-full gap-3 overflow-x-auto overscroll-x-contain px-4 pb-4"
        >
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

"use client";

import { useMemo, useState, useEffect } from "react";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  PlusIcon,
  TrashIcon,
} from "./Icons";
import { ConfirmDialog } from "./ConfirmDialog";
import {
  companyAvatarClass,
  companyInitials,
  formatInterviewTime,
  fromDatetimeLocal,
  localDateKey,
  toDatetimeLocal,
} from "../utils";
import type { Interview, Job } from "../constants";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

type InterviewsProps = {
  jobs: Job[];
  interviews: Interview[];
  onSave: (draft: Partial<Interview>, existingId?: string) => Promise<Interview>;
  onRemove: (id: string) => Promise<void>;
};

function dateKeyOf(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function buildMonthGrid(year: number, month: number): Date[] {
  const first = new Date(year, month, 1);
  const offset = (first.getDay() + 6) % 7; // Monday-first
  const start = new Date(year, month, 1 - offset);
  return Array.from({ length: 42 }, (_, i) => {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    return day;
  });
}

export function Interviews({ jobs, interviews, onSave, onRemove }: InterviewsProps) {
  const today = useMemo(() => new Date(), []);
  const [cursor, setCursor] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedKey, setSelectedKey] = useState(() => dateKeyOf(today));
  const [editing, setEditing] = useState<Interview | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<Interview | null>(null);

  const byDay = useMemo(() => {
    const map = new Map<string, Interview[]>();
    for (const item of interviews) {
      const key = localDateKey(item.startsAt);
      if (!key) continue;
      const list = map.get(key);
      if (list) list.push(item);
      else map.set(key, [item]);
    }
    for (const list of map.values()) {
      list.sort((a, b) => a.startsAt.localeCompare(b.startsAt));
    }
    return map;
  }, [interviews]);

  const grid = useMemo(
    () => buildMonthGrid(cursor.getFullYear(), cursor.getMonth()),
    [cursor]
  );

  const upcoming = useMemo(() => {
    const now = today.getTime();
    return interviews
      .filter((item) => {
        const t = new Date(item.startsAt).getTime();
        return !Number.isNaN(t) && t >= now;
      })
      .sort((a, b) => a.startsAt.localeCompare(b.startsAt))
      .slice(0, 6);
  }, [interviews, today]);

  const selectedList = byDay.get(selectedKey) || [];
  const todayKey = dateKeyOf(today);

  const shiftMonth = (delta: number) => {
    setCursor((prev) => new Date(prev.getFullYear(), prev.getMonth() + delta, 1));
  };

  const goToday = () => {
    setCursor(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedKey(todayKey);
  };

  const openCreate = () => {
    setEditing(null);
    setFormOpen(true);
  };

  const openEdit = (interview: Interview) => {
    setEditing(interview);
    setFormOpen(true);
  };

  return (
    <div className="kanban-scroll h-full overflow-y-auto px-4 pb-6">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        {/* Calendar */}
        <section className="rounded-2xl border border-hairline bg-surface p-4 shadow-sm">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-base font-semibold tracking-tight text-ink">
              {cursor.toLocaleDateString(undefined, { month: "long", year: "numeric" })}
            </h3>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => shiftMonth(-1)}
                aria-label="Previous month"
                className="rounded-lg p-1.5 text-muted transition duration-150 hover:bg-surface-muted hover:text-ink"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                onClick={goToday}
                className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-ink transition duration-150 hover:bg-surface-muted"
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => shiftMonth(1)}
                aria-label="Next month"
                className="rounded-lg p-1.5 text-muted transition duration-150 hover:bg-surface-muted hover:text-ink"
              >
                <ChevronRightIcon />
              </button>
              <button
                type="button"
                onClick={openCreate}
                className="ml-1 inline-flex items-center gap-1.5 rounded-xl bg-accent px-3 py-1.5 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-accent-hover"
              >
                <PlusIcon />
                Interview
              </button>
            </div>
          </div>

          <div className="mb-1 grid grid-cols-7 gap-1">
            {WEEKDAYS.map((day) => (
              <div
                key={day}
                className="px-1 py-1 text-center text-[11px] font-semibold tracking-wide text-muted uppercase"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {grid.map((day) => {
              const key = dateKeyOf(day);
              const items = byDay.get(key) || [];
              const inMonth = day.getMonth() === cursor.getMonth();
              const isToday = key === todayKey;
              const isSelected = key === selectedKey;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedKey(key)}
                  className={`flex min-h-[76px] flex-col items-start gap-1 rounded-xl border p-1.5 text-left transition duration-150 ${
                    isSelected
                      ? "border-accent bg-accent-soft"
                      : "border-hairline bg-canvas hover:bg-surface-muted"
                  } ${inMonth ? "" : "opacity-40"}`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                      isToday ? "bg-accent text-white" : "text-ink"
                    }`}
                  >
                    {day.getDate()}
                  </span>
                  <span className="flex w-full flex-col gap-0.5">
                    {items.slice(0, 2).map((item) => (
                      <span
                        key={item.id}
                        className="truncate rounded-md bg-violet-100 px-1 py-0.5 text-[10px] font-medium text-violet-800 dark:bg-violet-950 dark:text-violet-200"
                      >
                        {new Date(item.startsAt).toLocaleTimeString(undefined, {
                          hour: "numeric",
                          minute: "2-digit",
                        })}{" "}
                        {item.company || item.role || "Interview"}
                      </span>
                    ))}
                    {items.length > 2 ? (
                      <span className="px-1 text-[10px] font-medium text-muted">
                        +{items.length - 2} more
                      </span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Side panel */}
        <aside className="space-y-4">
          <section className="rounded-2xl border border-hairline bg-surface p-4 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold tracking-tight text-ink">
              {new Date(`${selectedKey}T00:00:00`).toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h3>
            {selectedList.length === 0 ? (
              <p className="text-sm text-muted">
                No interviews scheduled. Use{" "}
                <span className="font-medium text-ink">Interview</span> to add one.
              </p>
            ) : (
              <ul className="space-y-2">
                {selectedList.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-hairline bg-canvas p-3"
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white ${companyAvatarClass(
                          item.company
                        )}`}
                      >
                        {companyInitials(item.company)}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-ink">
                          {item.company || "Untitled"}
                        </p>
                        <p className="truncate text-xs text-muted">{item.role}</p>
                        <p className="mt-1 text-xs font-medium text-violet-700 dark:text-violet-300">
                          {formatInterviewTime(item.startsAt)}
                        </p>
                        {item.notes ? (
                          <p className="mt-1 text-xs leading-5 text-muted">{item.notes}</p>
                        ) : null}
                      </div>
                      <div className="flex shrink-0 flex-col gap-1">
                        <button
                          type="button"
                          onClick={() => openEdit(item)}
                          className="rounded-lg px-2 py-1 text-xs font-medium text-muted transition duration-150 hover:bg-surface-muted hover:text-ink"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => setPendingDelete(item)}
                          aria-label="Delete interview"
                          className="rounded-lg p-1 text-muted transition duration-150 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/40"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="rounded-2xl border border-hairline bg-surface p-4 shadow-sm">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold tracking-tight text-ink">
              <CalendarIcon />
              Upcoming
            </h3>
            {upcoming.length === 0 ? (
              <p className="text-sm text-muted">Nothing on the calendar yet.</p>
            ) : (
              <ul className="space-y-2">
                {upcoming.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        const key = localDateKey(item.startsAt);
                        const d = new Date(item.startsAt);
                        setCursor(new Date(d.getFullYear(), d.getMonth(), 1));
                        setSelectedKey(key);
                      }}
                      className="w-full rounded-xl px-2 py-1.5 text-left transition duration-150 hover:bg-surface-muted"
                    >
                      <p className="truncate text-sm font-medium text-ink">
                        {item.company || "Untitled"}
                        {item.role ? ` — ${item.role}` : ""}
                      </p>
                      <p className="text-xs text-muted">{formatInterviewTime(item.startsAt)}</p>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </aside>
      </div>

      {formOpen ? (
        <InterviewForm
          jobs={jobs}
          interview={editing}
          defaultDateKey={selectedKey}
          onClose={() => {
            setFormOpen(false);
            setEditing(null);
          }}
          onSave={async (draft, id) => {
            const saved = await onSave(draft, id);
            const key = localDateKey(saved.startsAt);
            if (key) {
              const d = new Date(saved.startsAt);
              setCursor(new Date(d.getFullYear(), d.getMonth(), 1));
              setSelectedKey(key);
            }
            setFormOpen(false);
            setEditing(null);
          }}
        />
      ) : null}

      <ConfirmDialog
        open={Boolean(pendingDelete)}
        title="Delete this interview?"
        message={
          pendingDelete
            ? `${pendingDelete.company || "This interview"} on ${formatInterviewTime(
                pendingDelete.startsAt
              )} will be removed from this browser.`
            : ""
        }
        onCancel={() => setPendingDelete(null)}
        onConfirm={async () => {
          if (pendingDelete) await onRemove(pendingDelete.id);
          setPendingDelete(null);
        }}
      />
    </div>
  );
}

type InterviewFormProps = {
  jobs: Job[];
  interview: Interview | null;
  defaultDateKey: string;
  onClose: () => void;
  onSave: (draft: Partial<Interview>, existingId?: string) => Promise<void>;
};

function InterviewForm({
  jobs,
  interview,
  defaultDateKey,
  onClose,
  onSave,
}: InterviewFormProps) {
  const [jobId, setJobId] = useState(interview?.jobId || "");
  const [company, setCompany] = useState(interview?.company || "");
  const [role, setRole] = useState(interview?.role || "");
  const [startsAt, setStartsAt] = useState(() =>
    interview
      ? toDatetimeLocal(interview.startsAt)
      : toDatetimeLocal(new Date(`${defaultDateKey}T10:00:00`).toISOString())
  );
  const [notes, setNotes] = useState(interview?.notes || "");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const pickJob = (id: string) => {
    setJobId(id);
    const job = jobs.find((item) => item.id === id);
    if (job) {
      setCompany(job.company);
      setRole(job.role);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!company.trim()) {
      setError("Add a company name or pick a job.");
      return;
    }
    if (!startsAt) {
      setError("Pick a date and time.");
      return;
    }
    setSaving(true);
    try {
      await onSave(
        {
          jobId,
          company,
          role,
          startsAt: fromDatetimeLocal(startsAt),
          notes,
          createdAt: interview?.createdAt,
        },
        interview?.id
      );
    } catch {
      setError("Could not save that interview.");
      setSaving(false);
    }
  };

  const field =
    "w-full rounded-xl border border-hairline bg-canvas px-3 py-2 text-sm text-ink outline-none transition duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30";
  const label = "mb-1 block text-xs font-semibold tracking-wide text-muted uppercase";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40 dark:bg-black/70"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md rounded-2xl border border-hairline bg-surface p-5 shadow-xl"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h2 className="text-base font-semibold tracking-tight text-ink">
            {interview ? "Edit interview" : "Schedule interview"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-muted transition duration-150 hover:bg-surface-muted hover:text-ink"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <label className={label} htmlFor="interview-job">
              Linked job
            </label>
            <select
              id="interview-job"
              value={jobId}
              onChange={(e) => pickJob(e.target.value)}
              className={field}
            >
              <option value="">No linked job</option>
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.company} — {job.role}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="interview-company">
                Company
              </label>
              <input
                id="interview-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Inc."
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor="interview-role">
                Role
              </label>
              <input
                id="interview-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="QA Lead"
                className={field}
              />
            </div>
          </div>

          <div>
            <label className={label} htmlFor="interview-startsAt">
              Date and time
            </label>
            <input
              id="interview-startsAt"
              type="datetime-local"
              value={startsAt}
              onChange={(e) => setStartsAt(e.target.value)}
              className={field}
            />
          </div>

          <div>
            <label className={label} htmlFor="interview-notes">
              Notes
            </label>
            <textarea
              id="interview-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Panel round, interviewer names, meeting link…"
              className={`${field} resize-y`}
            />
          </div>

          {error ? <p className="text-sm text-rose-600">{error}</p> : null}
        </div>

        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-ink transition duration-150 hover:bg-surface-muted"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="rounded-lg bg-accent px-3 py-1.5 text-sm font-semibold text-white transition duration-150 hover:bg-accent-hover disabled:opacity-60"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

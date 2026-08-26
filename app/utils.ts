import {
  AVATAR_TONES,
  COLUMNS,
  INTERVIEW_STATUSES,
  POST_WISHLIST,
  SEED_SKILLS,
  STATUS_IDS,
  STALE_DAYS,
} from "./constants";

import type { Job, Interview, SkillRecord } from "./constants";

export function daysElapsed(dateStr: string): number | null {
  if (!dateStr) return null;
  const applied = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(applied.getTime())) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.round((today.getTime() - applied.getTime()) / 86400000);
}

export function daysSinceApplied(dateStr: string): string {
  const diff = daysElapsed(dateStr);
  if (diff === null) return "—";
  if (diff === 0) return "Today";
  if (diff === 1) return "1 day";
  if (diff > 1) return `${diff} days`;
  if (diff === -1) return "Tomorrow";
  return `in ${Math.abs(diff)} days`;
}

export function isStaleJob(job: Job): boolean {
  if (job.status !== "applied" && job.status !== "follow-up") return false;
  const diff = daysElapsed(job.dateApplied);
  return diff !== null && diff > STALE_DAYS;
}

export function ageChipTone(job: Job): "muted" | "aging" | "stale" {
  const diff = daysElapsed(job.dateApplied);
  if (diff === null) return "muted";
  if (
    (job.status === "applied" || job.status === "follow-up") &&
    diff > STALE_DAYS
  ) {
    return "stale";
  }
  if (
    (job.status === "applied" || job.status === "follow-up") &&
    diff >= 8
  ) {
    return "aging";
  }
  return "muted";
}

export function companyInitials(name: string): string {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export function companyAvatarClass(name: string): string {
  const str = String(name || "");
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return AVATAR_TONES[hash % AVATAR_TONES.length];
}

export function normalizeStatus(status: string): string {
  if (status === "interview") return "interview-r1";
  return STATUS_IDS.includes(status) ? status : "wishlist";
}

export function countByStatus(jobs: Job[], status: string): number {
  return jobs.filter((job) => job.status === status).length;
}

export function pipelineStats(jobs: Job[]) {
  const interview =
    countByStatus(jobs, "interview-r1") + countByStatus(jobs, "interview-r2");
  return {
    total: jobs.length,
    applied: countByStatus(jobs, "applied"),
    interview,
    offer: countByStatus(jobs, "offer"),
    rejected: countByStatus(jobs, "rejected"),
    stalled: jobs.filter(isStaleJob).length,
  };
}

function startOfDay(date: Date): Date {
  const next = new Date(date);
  next.setHours(0, 0, 0, 0);
  return next;
}

function startOfWeekMonday(date: Date): Date {
  const next = startOfDay(date);
  const day = next.getDay();
  const diff = day === 0 ? 6 : day - 1;
  next.setDate(next.getDate() - diff);
  return next;
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function formatPercent(value: number): string {
  if (!Number.isFinite(value)) return "0%";
  return `${Math.round(value * 10) / 10}%`;
}

export function dashboardStats(jobs: Job[]) {
  const today = startOfDay(new Date());
  const weekStart = startOfWeekMonday(today);
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const appliedDate = (job: Job): Date | null => {
    if (!job.dateApplied) return null;
    const d = new Date(`${job.dateApplied}T00:00:00`);
    return Number.isNaN(d.getTime()) ? null : d;
  };

  const appliedThisWeek = jobs.filter((job) => {
    const d = appliedDate(job);
    return d && d >= weekStart && job.status !== "wishlist";
  }).length;

  const appliedThisMonth = jobs.filter((job) => {
    const d = appliedDate(job);
    return d && d >= monthStart && job.status !== "wishlist";
  }).length;

  const interviewCount = jobs.filter((job) =>
    INTERVIEW_STATUSES.includes(job.status)
  ).length;
  const progressed = jobs.filter((job) =>
    POST_WISHLIST.includes(job.status)
  ).length;
  const offer = countByStatus(jobs, "offer");
  const rejected = countByStatus(jobs, "rejected");
  const interviewOrLater = interviewCount + offer + rejected;
  const conversion = progressed ? (interviewCount / progressed) * 100 : 0;
  const responseRate = jobs.length ? (progressed / jobs.length) * 100 : 0;
  const interviewToOffer = interviewOrLater
    ? (offer / interviewOrLater) * 100
    : 0;
  const interviewToRejected = interviewOrLater
    ? (rejected / interviewOrLater) * 100
    : 0;

  const noResponse = jobs.filter(
    (job) => job.status === "applied" && isStaleJob(job)
  ).length;

  const byColumn = COLUMNS.map((col) => ({
    id: col.id,
    title: col.title,
    color: col.dot,
    bar: col.bar,
    count: countByStatus(jobs, col.id),
  }));

  const total = jobs.length || 1;
  const donut = byColumn
    .filter((item) => item.count > 0)
    .map((item) => ({
      ...item,
      pct: (item.count / jobs.length) * 100,
    }));

  const last10: { date: string; label: string; dayNumber: number; count: number }[] = [];
  for (let i = 9; i >= 0; i -= 1) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);
    const count = jobs.filter((job) => {
      const d = appliedDate(job);
      return d && isSameDay(d, day);
    }).length;
    last10.push({
      date: day.toISOString().slice(0, 10),
      label: day.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
      }),
      dayNumber: day.getDate(),
      count,
    });
  }

  const year = today.getFullYear();
  const heatmap = buildHeatmap(jobs, year, appliedDate);

  return {
    total: jobs.length,
    appliedThisWeek,
    appliedThisMonth,
    interviewCount,
    conversion,
    responseRate,
    interviewToOffer,
    interviewToRejected,
    progressed,
    offer,
    rejected,
    noResponse,
    byColumn,
    donut,
    last10,
    heatmap,
    year,
    share: (n: number) =>
      jobs.length ? Math.round((n / total) * 1000) / 10 : 0,
  };
}

function buildHeatmap(
  jobs: Job[],
  year: number,
  appliedDate: (job: Job) => Date | null
) {
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  const counts = new Map<string, number>();
  for (const job of jobs) {
    const d = appliedDate(job);
    if (!d || d.getFullYear() !== year) continue;
    const key = d.toISOString().slice(0, 10);
    counts.set(key, (counts.get(key) || 0) + 1);
  }

  const weeks: { date: string; count: number; inYear: boolean }[][] = [];
  const cursor = startOfWeekMonday(start);
  while (cursor <= end || cursor.getDay() !== 1) {
    const week: { date: string; count: number; inYear: boolean }[] = [];
    for (let i = 0; i < 7; i += 1) {
      const day = new Date(cursor);
      const inYear = day.getFullYear() === year;
      const key = day.toISOString().slice(0, 10);
      week.push({
        date: key,
        count: inYear ? counts.get(key) || 0 : 0,
        inYear,
      });
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
    if (cursor.getFullYear() > year) break;
    if (weeks.length > 54) break;
  }
  return weeks;
}

export function isValidHttpUrl(value: string): boolean {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function uniqueResumes(jobs: Job[]): string[] {
  const seen = new Set<string>();
  for (const job of jobs) {
    const name = (job.resume || "").trim();
    if (name) seen.add(name);
  }
  return [...seen].sort((a, b) => a.localeCompare(b));
}

export function uniqueJobSkills(jobs: Job[]): string[] {
  const seen = new Set<string>();
  for (const job of jobs) {
    for (const skill of job.skills || []) {
      const name = String(skill || "").trim();
      if (name) seen.add(name);
    }
  }
  return [...seen];
}

export function mergeSkillOptions(
  customSkills: SkillRecord[],
  jobs: Job[]
): string[] {
  const seen = new Set<string>();
  const list: string[] = [];
  const add = (name: string) => {
    const trimmed = String(name || "").trim();
    if (!trimmed) return;
    const key = trimmed.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    list.push(trimmed);
  };
  for (const name of SEED_SKILLS) add(name);
  for (const item of customSkills) add(item.name);
  for (const name of uniqueJobSkills(jobs)) add(name);
  return list.sort((a, b) => a.localeCompare(b));
}

export function matchesSearch(job: Job, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const skills = (job.skills || []).join(" ").toLowerCase();
  return (
    job.company.toLowerCase().includes(q) ||
    job.role.toLowerCase().includes(q) ||
    skills.includes(q)
  );
}

export function sortJobs(
  jobs: Job[],
  direction: string
): Job[] {
  return [...jobs].sort((a, b) => {
    const da = a.dateApplied || "";
    const db = b.dateApplied || "";
    if (da === db) return (b.updatedAt || 0) - (a.updatedAt || 0);
    return direction === "oldest" ? da.localeCompare(db) : db.localeCompare(da);
  });
}

export function isJobShape(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  if (typeof v.company !== "string" || typeof v.role !== "string") {
    return false;
  }
  if (
    v.status &&
    typeof v.status === "string" &&
    !STATUS_IDS.includes(v.status) &&
    v.status !== "interview"
  ) {
    return false;
  }
  return true;
}

export function normalizeSkills(raw: unknown[]): string[] {
  if (!Array.isArray(raw)) return [];
  const seen = new Set<string>();
  const list: string[] = [];
  for (const item of raw) {
    const name = String(item || "").trim();
    const key = name.toLowerCase();
    if (!name || seen.has(key)) continue;
    seen.add(key);
    list.push(name);
  }
  return list;
}

export function normalizeImportedJob(raw: Record<string, unknown>): Job {
  return {
    id:
      typeof raw.id === "string" && raw.id
        ? raw.id
        : crypto.randomUUID(),
    company: String(raw.company || "").trim(),
    role: String(raw.role || "").trim(),
    linkedinUrl: String(raw.linkedinUrl || "").trim(),
    resume: String(raw.resume || "").trim(),
    dateApplied: String(
      raw.dateApplied || new Date().toISOString().slice(0, 10)
    ),
    salaryRange: String(raw.salaryRange || "").trim(),
    notes: String(raw.notes || ""),
    description: String(raw.description || ""),
    skills: normalizeSkills(raw.skills as unknown[]),
    status: normalizeStatus(String(raw.status || "wishlist")),
    createdAt: Number(raw.createdAt) || Date.now(),
    updatedAt: Number(raw.updatedAt) || Date.now(),
  };
}

export function hydrateJob(job: Job): Job {
  return {
    ...job,
    skills: normalizeSkills(job.skills),
    description: job.description || "",
    status: normalizeStatus(job.status),
  };
}

export function isInterviewShape(value: unknown): boolean {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return Boolean(v.startsAt || v.company || v.role);
}

export function normalizeImportedInterview(
  raw: Record<string, unknown>
): Interview {
  return {
    id:
      typeof raw.id === "string" && raw.id
        ? raw.id
        : crypto.randomUUID(),
    jobId: typeof raw.jobId === "string" ? raw.jobId : "",
    company: String(raw.company || "").trim(),
    role: String(raw.role || "").trim(),
    startsAt: String(raw.startsAt || new Date().toISOString()),
    notes: String(raw.notes || "").trim(),
    createdAt: Number(raw.createdAt) || Date.now(),
    updatedAt: Number(raw.updatedAt) || Date.now(),
  };
}

export function localDateKey(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function formatInterviewTime(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function toDatetimeLocal(iso?: string): string {
  const d = iso ? new Date(iso) : new Date();
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export function fromDatetimeLocal(value: string): string {
  if (!value) return new Date().toISOString();
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

export { formatPercent as pct };

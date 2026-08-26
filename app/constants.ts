export const STALE_DAYS = 14;
export const BOARD_STACK_THRESHOLD = 6;
export const SIDEBAR_COLLAPSED_KEY = "job-tracker-sidebar-collapsed";

export type ColumnDef = {
  id: string;
  title: string;
  hint: string;
  accent: string;
  header: string;
  badge: string;
  bar: string;
  well: string;
  wellOver: string;
  dot: string;
};

export const COLUMNS: ColumnDef[] = [
  {
    id: "wishlist",
    title: "Wishlist",
    hint: "Saved, not applied",
    accent: "border-l-zinc-400",
    header: "text-zinc-700 dark:text-zinc-200",
    badge: "bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100",
    bar: "bg-zinc-400",
    well: "bg-zinc-100/80 dark:bg-zinc-900/40",
    wellOver: "bg-zinc-200/90 ring-2 ring-zinc-400/50 dark:bg-zinc-800/70",
    dot: "bg-zinc-400",
  },
  {
    id: "applied",
    title: "Applied",
    hint: "Application submitted",
    accent: "border-l-sky-500",
    header: "text-sky-800 dark:text-sky-200",
    badge: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200",
    bar: "bg-sky-500",
    well: "bg-sky-50/70 dark:bg-sky-950/20",
    wellOver: "bg-sky-100 ring-2 ring-sky-400/60 dark:bg-sky-950/40",
    dot: "bg-sky-500",
  },
  {
    id: "follow-up",
    title: "Follow-up",
    hint: "Recruiter / referral ping",
    accent: "border-l-amber-500",
    header: "text-amber-800 dark:text-amber-200",
    badge: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200",
    bar: "bg-amber-500",
    well: "bg-amber-50/70 dark:bg-amber-950/20",
    wellOver: "bg-amber-100 ring-2 ring-amber-400/60 dark:bg-amber-950/40",
    dot: "bg-amber-500",
  },
  {
    id: "interview-r1",
    title: "Interview Round 1",
    hint: "First interview round",
    accent: "border-l-violet-500",
    header: "text-violet-800 dark:text-violet-200",
    badge: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200",
    bar: "bg-violet-500",
    well: "bg-violet-50/70 dark:bg-violet-950/20",
    wellOver: "bg-violet-100 ring-2 ring-violet-400/60 dark:bg-violet-950/40",
    dot: "bg-violet-500",
  },
  {
    id: "interview-r2",
    title: "Interview Round 2",
    hint: "Onsite / loop / next round",
    accent: "border-l-indigo-500",
    header: "text-indigo-800 dark:text-indigo-200",
    badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200",
    bar: "bg-indigo-500",
    well: "bg-indigo-50/70 dark:bg-indigo-950/20",
    wellOver: "bg-indigo-100 ring-2 ring-indigo-400/60 dark:bg-indigo-950/40",
    dot: "bg-indigo-500",
  },
  {
    id: "offer",
    title: "Offer",
    hint: "Offer received",
    accent: "border-l-emerald-500",
    header: "text-emerald-800 dark:text-emerald-200",
    badge: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
    bar: "bg-emerald-500",
    well: "bg-emerald-50/70 dark:bg-emerald-950/20",
    wellOver: "bg-emerald-100 ring-2 ring-emerald-400/60 dark:bg-emerald-950/40",
    dot: "bg-emerald-500",
  },
  {
    id: "rejected",
    title: "Rejected",
    hint: "Closed out",
    accent: "border-l-rose-500",
    header: "text-rose-800 dark:text-rose-200",
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200",
    bar: "bg-rose-500",
    well: "bg-rose-50/70 dark:bg-rose-950/20",
    wellOver: "bg-rose-100 ring-2 ring-rose-400/60 dark:bg-rose-950/40",
    dot: "bg-rose-500",
  },
];

export const STATUS_IDS = COLUMNS.map((c) => c.id);

export const INTERVIEW_STATUSES = ["interview-r1", "interview-r2"];

export const POST_WISHLIST = STATUS_IDS.filter((id) => id !== "wishlist");

export const AVATAR_TONES = [
  "bg-teal-600",
  "bg-sky-600",
  "bg-violet-600",
  "bg-amber-600",
  "bg-rose-600",
  "bg-indigo-600",
  "bg-emerald-600",
  "bg-orange-600",
  "bg-cyan-700",
  "bg-fuchsia-600",
];

export const SEED_SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "Go",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "System Design",
  "REST APIs",
  "GraphQL",
  "Tailwind CSS",
  "Git",
  "CI/CD",
  "Machine Learning",
  "Data Structures",
  "Linux",
  "Redis",
  "Kafka",
];

export type JobDraft = {
  company: string;
  role: string;
  linkedinUrl: string;
  resume: string;
  dateApplied: string;
  salaryRange: string;
  notes: string;
  description: string;
  skills: string[];
  status: string;
  createdAt?: number;
};

export const emptyJob = (): JobDraft => ({
  company: "",
  role: "",
  linkedinUrl: "",
  resume: "",
  dateApplied: new Date().toISOString().slice(0, 10),
  salaryRange: "",
  notes: "",
  description: "",
  skills: [],
  status: "wishlist",
});

export type Job = JobDraft & {
  id: string;
  createdAt: number;
  updatedAt: number;
};

export type Interview = {
  id: string;
  jobId: string;
  company: string;
  role: string;
  startsAt: string;
  notes: string;
  createdAt: number;
  updatedAt: number;
};

export type SkillRecord = {
  name: string;
};

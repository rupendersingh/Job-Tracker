import type { Interview, Job, SkillRecord } from "./constants";

/**
 * Demo content bundled into the build so a freshly deployed site never opens
 * on an empty board. This is fictional sample data, not anyone's real job
 * search — the app is local-first, so whatever a visitor adds afterwards
 * lives only in their own browser.
 *
 * `next.config.ts` inlines the deploying commit SHA here, so each deployment
 * carries a new stamp and re-seeds the board (see `seed.ts`).
 */
export const SEED_STAMP = process.env.NEXT_PUBLIC_SEED_STAMP || "dev";

type SeedJob = Omit<Job, "dateApplied" | "createdAt" | "updatedAt"> & {
  appliedDaysAgo: number;
};

type SeedInterview = {
  id: string;
  jobId: string;
  inDays: number;
  atHour: number;
  notes: string;
};

const SEED_JOBS: SeedJob[] = [
  {
    id: "seed-northwind",
    company: "Northwind Analytics",
    role: "Staff QA Engineer",
    status: "wishlist",
    appliedDaysAgo: 2,
    linkedinUrl: "https://www.linkedin.com/jobs/",
    resume: "resume-qa-staff-v3.pdf",
    salaryRange: "$150k – $175k",
    notes: "Referral from a former colleague. Apply once the R2 loop is done.",
    description:
      "Own the regression suite for a data platform and mentor two automation engineers.",
    skills: ["Python", "SQL", "CI/CD", "System Design"],
  },
  {
    id: "seed-helios",
    company: "Helios Robotics",
    role: "SDET II",
    status: "wishlist",
    appliedDaysAgo: 4,
    linkedinUrl: "",
    resume: "resume-sdet-v2.pdf",
    salaryRange: "$130k – $150k",
    notes: "Hardware-in-the-loop testing. Interesting, but heavy on-site.",
    description: "Build integration test rigs for robotics firmware releases.",
    skills: ["Python", "Linux", "Docker"],
  },
  {
    id: "seed-meridian",
    company: "Meridian Health",
    role: "Senior QA Automation Engineer",
    status: "applied",
    appliedDaysAgo: 6,
    linkedinUrl: "https://www.linkedin.com/jobs/",
    resume: "resume-automation-v4.pdf",
    salaryRange: "$140k – $160k",
    notes: "Applied through the careers portal. Recruiter screen expected soon.",
    description:
      "Expand Playwright coverage across a patient-records web app and wire it into CI.",
    skills: ["TypeScript", "Playwright", "CI/CD", "REST APIs"],
  },
  {
    id: "seed-orchard",
    company: "Orchard Financial",
    role: "Automation Architect",
    status: "applied",
    appliedDaysAgo: 24,
    linkedinUrl: "",
    resume: "resume-architect-v1.pdf",
    salaryRange: "$165k – $185k",
    notes: "No response in three weeks — worth a nudge or writing it off.",
    description: "Define the automation strategy for a payments modernization program.",
    skills: ["Java", "Selenium", "Kafka", "System Design"],
  },
  {
    id: "seed-cobalt",
    company: "Cobalt Systems",
    role: "Test Architect",
    status: "follow-up",
    appliedDaysAgo: 11,
    linkedinUrl: "https://www.linkedin.com/jobs/",
    resume: "resume-architect-v1.pdf",
    salaryRange: "$155k – $180k",
    notes: "Recruiter asked for availability. Send three slots for next week.",
    description:
      "Lead quality engineering practice across four product squads.",
    skills: ["TypeScript", "Cypress", "AWS", "Docker"],
  },
  {
    id: "seed-lumen",
    company: "Lumen Retail Group",
    role: "Senior SDET",
    status: "interview-r1",
    appliedDaysAgo: 14,
    linkedinUrl: "https://www.linkedin.com/jobs/",
    resume: "resume-sdet-v2.pdf",
    salaryRange: "$145k – $165k",
    notes: "Round 1 is a live coding exercise on test design. Review flaky-test patterns.",
    description:
      "Own end-to-end coverage for a high-traffic storefront and its checkout flow.",
    skills: ["TypeScript", "React", "Playwright", "GraphQL"],
  },
  {
    id: "seed-atlas",
    company: "Atlas Freight",
    role: "QA Engineering Manager",
    status: "interview-r2",
    appliedDaysAgo: 19,
    linkedinUrl: "",
    resume: "resume-qa-lead-v3.pdf",
    salaryRange: "$170k – $195k",
    notes: "Round 2 is the hiring manager plus a systems-design discussion.",
    description:
      "Manage a team of six across manual and automated testing for logistics software.",
    skills: ["System Design", "Kubernetes", "PostgreSQL", "CI/CD"],
  },
  {
    id: "seed-vantage",
    company: "Vantage Labs",
    role: "Head of Quality Engineering",
    status: "offer",
    appliedDaysAgo: 28,
    linkedinUrl: "https://www.linkedin.com/jobs/",
    resume: "resume-qa-lead-v3.pdf",
    salaryRange: "$185k – $210k",
    notes: "Offer received. Decision needed by the end of next week.",
    description:
      "Build the quality function from scratch for a Series B analytics company.",
    skills: ["System Design", "AWS", "CI/CD", "Machine Learning"],
  },
  {
    id: "seed-kestrel",
    company: "Kestrel Media",
    role: "Principal QA Engineer",
    status: "rejected",
    appliedDaysAgo: 33,
    linkedinUrl: "",
    resume: "resume-automation-v4.pdf",
    salaryRange: "$160k – $180k",
    notes: "Rejected after round 2 — they wanted deeper mobile experience.",
    description: "Quality ownership for a streaming platform across web and mobile.",
    skills: ["Appium", "JavaScript", "REST APIs"],
  },
];

const SEED_INTERVIEWS: SeedInterview[] = [
  {
    id: "seed-interview-lumen",
    jobId: "seed-lumen",
    inDays: 2,
    atHour: 11,
    notes: "Round 1 — live test-design exercise with two engineers.",
  },
  {
    id: "seed-interview-atlas",
    jobId: "seed-atlas",
    inDays: 5,
    atHour: 15,
    notes: "Round 2 — hiring manager and systems design.",
  },
  {
    id: "seed-interview-cobalt",
    jobId: "seed-cobalt",
    inDays: 9,
    atHour: 10,
    notes: "Intro call with the recruiter.",
  },
];

/** Custom skills, i.e. ones not already in SEED_SKILLS. */
const SEED_CUSTOM_SKILLS = [
  "Playwright",
  "Cypress",
  "Selenium",
  "Appium",
  "JMeter",
  "Test Strategy",
];

const DAY_MS = 86_400_000;

export function buildSeedData(): {
  jobs: Job[];
  interviews: Interview[];
  skills: SkillRecord[];
} {
  const now = Date.now();

  // Dates are derived at seed time so the board still reads as current
  // however long after the build someone opens it.
  const jobs: Job[] = SEED_JOBS.map(({ appliedDaysAgo, ...rest }) => {
    const at = now - appliedDaysAgo * DAY_MS;
    return {
      ...rest,
      dateApplied: new Date(at).toISOString().slice(0, 10),
      createdAt: at,
      updatedAt: at,
    };
  });

  const byId = new Map(jobs.map((job) => [job.id, job]));

  const interviews: Interview[] = SEED_INTERVIEWS.flatMap((item) => {
    const job = byId.get(item.jobId);
    if (!job) return [];
    const when = new Date(now + item.inDays * DAY_MS);
    when.setHours(item.atHour, 0, 0, 0);
    return [
      {
        id: item.id,
        jobId: job.id,
        company: job.company,
        role: job.role,
        startsAt: when.toISOString(),
        notes: item.notes,
        createdAt: now,
        updatedAt: now,
      },
    ];
  });

  return {
    jobs,
    interviews,
    skills: SEED_CUSTOM_SKILLS.map((name) => ({ name })),
  };
}

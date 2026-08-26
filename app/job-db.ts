import { openDB } from "idb";

const DB_NAME = "job-tracker";
const DB_VERSION = 2;
const JOBS = "jobs";
const INTERVIEWS = "interviews";
const SKILLS = "skills";

import type { Job, Interview, SkillRecord } from "./constants";

export function getDb() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(JOBS)) {
        const store = db.createObjectStore(JOBS, { keyPath: "id" });
        store.createIndex("status", "status");
        store.createIndex("dateApplied", "dateApplied");
      }
      if (!db.objectStoreNames.contains(INTERVIEWS)) {
        const store = db.createObjectStore(INTERVIEWS, { keyPath: "id" });
        store.createIndex("startsAt", "startsAt");
      }
      if (!db.objectStoreNames.contains(SKILLS)) {
        db.createObjectStore(SKILLS, { keyPath: "name" });
      }
    },
  });
}

/* ── Jobs ── */

export async function getAllJobs(): Promise<Job[]> {
  const db = await getDb();
  return db.getAll(JOBS);
}

export async function putJob(job: Job): Promise<void> {
  const db = await getDb();
  await db.put(JOBS, job);
}

export async function deleteJob(id: string): Promise<void> {
  const db = await getDb();
  await db.delete(JOBS, id);
}

export async function replaceAllJobs(jobs: Job[]): Promise<void> {
  const db = await getDb();
  const tx = db.transaction(JOBS, "readwrite");
  await tx.store.clear();
  await Promise.all(jobs.map((job) => tx.store.put(job)));
  await tx.done;
}

/* ── Interviews ── */

export async function getAllInterviews(): Promise<Interview[]> {
  const db = await getDb();
  return db.getAll(INTERVIEWS);
}

export async function putInterview(interview: Interview): Promise<void> {
  const db = await getDb();
  await db.put(INTERVIEWS, interview);
}

export async function deleteInterview(id: string): Promise<void> {
  const db = await getDb();
  await db.delete(INTERVIEWS, id);
}

export async function replaceAllInterviews(interviews: Interview[]): Promise<void> {
  const db = await getDb();
  const tx = db.transaction(INTERVIEWS, "readwrite");
  await tx.store.clear();
  await Promise.all(interviews.map((item) => tx.store.put(item)));
  await tx.done;
}

/* ── Skills ── */

export async function getAllSkills(): Promise<SkillRecord[]> {
  const db = await getDb();
  return db.getAll(SKILLS);
}

export async function putSkill(skill: SkillRecord): Promise<void> {
  const db = await getDb();
  await db.put(SKILLS, skill);
}

export async function replaceAllSkills(skills: SkillRecord[]): Promise<void> {
  const db = await getDb();
  const tx = db.transaction(SKILLS, "readwrite");
  await tx.store.clear();
  await Promise.all(skills.map((item) => tx.store.put(item)));
  await tx.done;
}

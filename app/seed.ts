import { replaceAllInterviews, replaceAllJobs, replaceAllSkills } from "./job-db";
import { SEED_STAMP, buildSeedData } from "./seed-data";

const STAMP_KEY = "job-tracker-seed-stamp";

/**
 * Loads the bundled demo board once per deployment. The stamp is the commit
 * SHA baked in at build time, so a new deployment re-seeds and REPLACES
 * whatever is in this browser. Within a deployment the stamp is stable, so
 * ordinary edits survive reloads.
 */
async function runSeed(): Promise<void> {
  if (typeof window === "undefined") return;

  let stored: string | null = null;
  try {
    stored = window.localStorage.getItem(STAMP_KEY);
  } catch {
    // Storage blocked (private mode, third-party restrictions): skip seeding
    // rather than wiping the board on every single load.
    return;
  }
  if (stored === SEED_STAMP) return;

  const { jobs, interviews, skills } = buildSeedData();
  await replaceAllJobs(jobs);
  await replaceAllInterviews(interviews);
  await replaceAllSkills(skills);

  try {
    window.localStorage.setItem(STAMP_KEY, SEED_STAMP);
  } catch {
    // Non-fatal: the board is seeded, it just may seed again next load.
  }
}

let pending: Promise<void> | null = null;

/**
 * Shared by every data hook so seeding happens exactly once per page load and
 * always finishes before the first read.
 */
export function ensureSeeded(): Promise<void> {
  if (!pending) {
    pending = runSeed().catch(() => {
      // A failed seed must not stop the app from loading existing data.
    });
  }
  return pending;
}

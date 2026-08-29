import {
  getAllInterviews,
  getAllJobs,
  getAllSkills,
  replaceAllInterviews,
  replaceAllJobs,
  replaceAllSkills,
} from "./job-db";
import { buildSeedData } from "./seed-data";

const SEEDED_KEY = "job-tracker-seeded";

/**
 * Loads the bundled demo board, but only into a browser that has never been
 * seeded AND has nothing stored. Deployments never overwrite what someone has
 * in their browser: once this browser has been through the check, the flag
 * keeps it from seeding again — including after the user deletes everything
 * on purpose.
 */
async function runSeed(): Promise<void> {
  if (typeof window === "undefined") return;

  let alreadySeeded = false;
  try {
    alreadySeeded = window.localStorage.getItem(SEEDED_KEY) === "1";
  } catch {
    // Storage blocked (private mode, third-party restrictions). Without a
    // flag we cannot tell a first visit from a deliberate reset, so leave
    // whatever is in IndexedDB alone.
    return;
  }
  if (alreadySeeded) return;

  const markSeeded = () => {
    try {
      window.localStorage.setItem(SEEDED_KEY, "1");
    } catch {
      // Non-fatal: the check simply runs again next load.
    }
  };

  const [jobs, interviews, skills] = await Promise.all([
    getAllJobs(),
    getAllInterviews(),
    getAllSkills(),
  ]);
  if (jobs.length || interviews.length || skills.length) {
    // An existing board — this browser predates seeding. Record that so the
    // empty check never runs against it again.
    markSeeded();
    return;
  }

  const seed = buildSeedData();
  await replaceAllJobs(seed.jobs);
  await replaceAllInterviews(seed.interviews);
  await replaceAllSkills(seed.skills);
  markSeeded();
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

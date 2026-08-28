"use client";

import { useCallback, useEffect, useState } from "react";
import { deleteJob, getAllJobs, putJob, replaceAllJobs } from "../job-db";
import { ensureSeeded } from "../seed";
import { hydrateJob, isJobShape, normalizeImportedJob } from "../utils";
import type { Job } from "../constants";

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    ensureSeeded()
      .then(getAllJobs)
      .then(async (rows) => {
        const next: Job[] = [];
        for (const row of rows) {
          const job = hydrateJob(row);
          if (
            job.status !== row.status ||
            !Array.isArray(row.skills) ||
            row.description == null
          ) {
            await putJob(job);
          }
          next.push(job);
        }
        if (!cancelled) {
          setJobs(next);
          setReady(true);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || "Failed to load jobs");
          setReady(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const saveJob = useCallback(
    async (draft: Partial<Job> & { company: string; role: string }, existingId?: string) => {
      const now = Date.now();
      const job: Job = {
        company: draft.company.trim(),
        role: draft.role.trim(),
        linkedinUrl: (draft.linkedinUrl || "").trim(),
        resume: (draft.resume || "").trim(),
        dateApplied: draft.dateApplied || new Date().toISOString().slice(0, 10),
        salaryRange: (draft.salaryRange || "").trim(),
        notes: (draft.notes || "").trim(),
        description: (draft.description || "").trim(),
        skills: Array.isArray(draft.skills) ? draft.skills : [],
        status: draft.status || "wishlist",
        id: existingId || crypto.randomUUID(),
        createdAt: draft.createdAt || now,
        updatedAt: now,
      };
      await putJob(job);
      setJobs((prev) => {
        const index = prev.findIndex((item) => item.id === job.id);
        if (index === -1) return [...prev, job];
        const next = [...prev];
        next[index] = job;
        return next;
      });
      return job;
    },
    []
  );

  const moveJob = useCallback(async (id: string, status: string) => {
    let next: Job | null = null;
    setJobs((prev) => {
      const current = prev.find((job) => job.id === id);
      if (!current || current.status === status) return prev;
      next = { ...current, status, updatedAt: Date.now() };
      return prev.map((job) => (job.id === id ? next! : job));
    });
    if (next) await putJob(next);
  }, []);

  const removeJob = useCallback(async (id: string) => {
    await deleteJob(id);
    setJobs((prev) => prev.filter((job) => job.id !== id));
  }, []);

  const importJobs = useCallback(
    async (payload: unknown) => {
      const list = Array.isArray(payload)
        ? payload
        : (payload as Record<string, unknown>)?.jobs;
      if (!Array.isArray(list)) {
        throw new Error('JSON must be an array of jobs (or { jobs: [...] })');
      }
      const normalized = list
        .filter(isJobShape)
        .map(normalizeImportedJob);
      await replaceAllJobs(normalized);
      setJobs(normalized);
      return normalized.length;
    },
    []
  );

  return { jobs, ready, error, saveJob, moveJob, removeJob, importJobs, setJobs };
}

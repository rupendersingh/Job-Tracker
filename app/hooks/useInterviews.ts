"use client";

import { useCallback, useEffect, useState } from "react";
import {
  deleteInterview,
  getAllInterviews,
  putInterview,
  replaceAllInterviews,
} from "../job-db";
import { ensureSeeded } from "../seed";
import { isInterviewShape, normalizeImportedInterview } from "../utils";
import type { Interview } from "../constants";

export function useInterviews() {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    ensureSeeded()
      .then(getAllInterviews)
      .then((rows) => {
        if (!cancelled) {
          setInterviews(
            rows.map((r) => normalizeImportedInterview(r as Record<string, unknown>))
          );
          setReady(true);
        }
      })
      .catch(() => {
        if (!cancelled) setReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const saveInterview = useCallback(
    async (draft: Partial<Interview>, existingId?: string) => {
      const now = Date.now();
      const interview: Interview = {
        id: existingId || crypto.randomUUID(),
        jobId: draft.jobId || "",
        company: (draft.company || "").trim(),
        role: (draft.role || "").trim(),
        startsAt: draft.startsAt || new Date().toISOString(),
        notes: (draft.notes || "").trim(),
        createdAt: draft.createdAt || now,
        updatedAt: now,
      };
      await putInterview(interview);
      setInterviews((prev) => {
        const index = prev.findIndex((item) => item.id === interview.id);
        if (index === -1) return [...prev, interview];
        const next = [...prev];
        next[index] = interview;
        return next;
      });
      return interview;
    },
    []
  );

  const removeInterview = useCallback(async (id: string) => {
    await deleteInterview(id);
    setInterviews((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const importInterviews = useCallback(async (list: unknown[]) => {
    const normalized = (Array.isArray(list) ? list : [])
      .filter(isInterviewShape)
      .map((item) => normalizeImportedInterview(item as Record<string, unknown>));
    await replaceAllInterviews(normalized);
    setInterviews(normalized);
    return normalized.length;
  }, []);

  return { interviews, ready, saveInterview, removeInterview, importInterviews };
}

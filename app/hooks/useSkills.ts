"use client";

import { useCallback, useEffect, useState } from "react";
import { getAllSkills, putSkill, replaceAllSkills } from "../job-db";
import type { SkillRecord } from "../constants";

export function useSkills() {
  const [customSkills, setCustomSkills] = useState<SkillRecord[]>([]);

  useEffect(() => {
    let cancelled = false;
    getAllSkills()
      .then((rows) => {
        if (!cancelled) setCustomSkills(rows);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const addSkill = useCallback(async (name: string) => {
    const trimmed = String(name || "").trim();
    if (!trimmed) return trimmed;
    const record: SkillRecord = { name: trimmed };
    await putSkill(record);
    setCustomSkills((prev) => {
      if (
        prev.some(
          (item) => item.name.toLowerCase() === trimmed.toLowerCase()
        )
      ) {
        return prev;
      }
      return [...prev, record];
    });
    return trimmed;
  }, []);

  const importSkills = useCallback(async (list: unknown[]) => {
    const normalized = (Array.isArray(list) ? list : [])
      .map((item) => ({
        name: String(
          typeof item === "string" ? item : (item as Record<string, unknown>)?.name || ""
        ).trim(),
      }))
      .filter((item) => item.name);
    await replaceAllSkills(normalized);
    setCustomSkills(normalized);
    return normalized.length;
  }, []);

  return { customSkills, addSkill, importSkills };
}

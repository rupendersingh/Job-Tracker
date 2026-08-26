"use client";

import { useEffect } from "react";
import { usePersistentValue, writeStored } from "./usePersistentValue";

const THEME_KEY = "job-tracker-theme";

type Theme = "light" | "dark";

function parseTheme(raw: string | null): Theme {
  if (raw === "light" || raw === "dark") return raw;
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  // SSR and the hydrating render both use "light"; the inline script in
  // app/layout.tsx has already applied the real theme class before paint, so
  // there is no flash and no hydration mismatch.
  const [theme] = usePersistentValue<Theme>(THEME_KEY, "light", parseTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return {
    theme,
    toggleTheme: () => writeStored(THEME_KEY, theme === "dark" ? "light" : "dark"),
  };
}

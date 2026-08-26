"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * A tiny localStorage-backed store.
 *
 * Reading localStorage during render breaks hydration (the server has no
 * localStorage, so the first client render disagrees with the server HTML and
 * React throws). `useSyncExternalStore` is the supported way to do this: React
 * hydrates with the server snapshot, then immediately re-renders with the real
 * client value.
 */
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStored(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode / storage disabled — keep the in-memory value */
  }
  emit();
}

/**
 * @param key          localStorage key
 * @param serverValue  value used for SSR and the hydrating render
 * @param parse        turns the stored string (or null) into the value
 */
export function usePersistentValue<T>(
  key: string,
  serverValue: T,
  parse: (raw: string | null) => T
) {
  const value = useSyncExternalStore(
    subscribe,
    () => parse(readStored(key)),
    () => serverValue
  );

  const setValue = useCallback(
    (next: string) => {
      writeStored(key, next);
    },
    [key]
  );

  return [value, setValue] as const;
}

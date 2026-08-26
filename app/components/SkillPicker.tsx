"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { PlusIcon } from "./Icons";

const EMPTY_SKILLS: string[] = [];

type SkillPickerProps = {
  value: string[];
  options?: string[];
  onChange: (skills: string[]) => void;
  onCreate?: (name: string) => Promise<string | undefined> | void;
};

export function SkillPicker({ value, options = [], onChange, onCreate }: SkillPickerProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = value || EMPTY_SKILLS;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return options
      .filter((name) => {
        if (selected.some((s) => s.toLowerCase() === name.toLowerCase())) return false;
        if (!q) return true;
        return name.toLowerCase().includes(q);
      })
      .slice(0, 12);
  }, [options, query, selected]);

  const canCreate = (() => {
    const q = query.trim();
    if (!q) return false;
    const exists =
      options.some((name) => name.toLowerCase() === q.toLowerCase()) ||
      selected.some((name) => name.toLowerCase() === q.toLowerCase());
    return !exists;
  })();

  const totalItems = filtered.length + (canCreate ? 1 : 0);

  useEffect(() => {
    const onDoc = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const add = async (name: string) => {
    const next = name.trim();
    if (!next) return;
    if (!selected.some((s) => s.toLowerCase() === next.toLowerCase())) {
      onChange([...selected, next]);
    }
    if (onCreate) await onCreate(next);
    setQuery("");
    setHighlightIndex(-1);
  };

  const remove = (name: string) => {
    onChange(selected.filter((item) => item !== name));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev + 1 < totalItems ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((prev) => (prev - 1 >= 0 ? prev - 1 : totalItems - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightIndex >= 0 && highlightIndex < filtered.length) {
        add(filtered[highlightIndex]);
      } else if (highlightIndex === filtered.length && canCreate) {
        add(query);
      } else if (canCreate) {
        add(query);
      } else if (filtered[0]) {
        add(filtered[0]);
      }
    } else if (e.key === "Backspace" && !query && selected.length) {
      remove(selected[selected.length - 1]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setHighlightIndex(-1);
    }
  };

  return (
    <div ref={wrapRef} className="relative mt-1.5">
      <div className="flex min-h-[42px] flex-wrap items-center gap-1.5 rounded-lg border border-hairline bg-canvas px-2 py-1.5 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/30">
        {selected.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-1 rounded-md bg-accent-soft px-1.5 py-0.5 text-xs font-medium text-accent"
          >
            {skill}
            <button
              type="button"
              className="text-accent/70 hover:text-accent"
              aria-label={`Remove ${skill}`}
              onClick={() => remove(skill)}
            >
              ×
            </button>
          </span>
        ))}
        <input
          className="min-w-[120px] flex-1 bg-transparent px-1 py-1 text-sm text-ink outline-none placeholder:text-muted"
          value={query}
          placeholder={selected.length ? "Add another skill" : "Search or add a skill"}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
            setHighlightIndex(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          aria-autocomplete="list"
          aria-controls={listId}
          aria-expanded={open}
        />
      </div>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-20 mt-1 max-h-48 w-full overflow-y-auto rounded-xl border border-hairline bg-surface py-1 shadow-lg"
        >
          {filtered.map((name, idx) => (
            <li key={name} role="option" aria-selected={idx === highlightIndex}>
              <button
                type="button"
                className={`flex w-full px-3 py-1.5 text-left text-sm transition duration-100 ${
                  idx === highlightIndex
                    ? "bg-accent-soft text-accent font-medium"
                    : "text-ink hover:bg-surface-muted"
                }`}
                onClick={() => add(name)}
                onMouseEnter={() => setHighlightIndex(idx)}
              >
                {name}
              </button>
            </li>
          ))}
          {canCreate ? (
            <li role="option" aria-selected={highlightIndex === filtered.length}>
              <button
                type="button"
                className={`flex w-full items-center gap-1.5 px-3 py-1.5 text-left text-sm font-medium transition duration-100 ${
                  highlightIndex === filtered.length
                    ? "bg-accent text-white"
                    : "text-accent hover:bg-accent-soft"
                }`}
                onClick={() => add(query)}
                onMouseEnter={() => setHighlightIndex(filtered.length)}
              >
                <PlusIcon className="h-3.5 w-3.5" />
                Add &ldquo;{query.trim()}&rdquo;
              </button>
            </li>
          ) : null}
          {!filtered.length && !canCreate ? (
            <li className="px-3 py-2 text-xs text-muted">No matching skills</li>
          ) : null}
        </ul>
      ) : null}
    </div>
  );
}

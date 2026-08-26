"use client";

import { useMemo, useRef, useState } from "react";
import { SIDEBAR_COLLAPSED_KEY } from "./constants";
import type { Job, JobDraft } from "./constants";
import { Board } from "./components/Board";
import { ConfirmDialog } from "./components/ConfirmDialog";
import { EmptyState } from "./components/EmptyState";
import { Interviews } from "./components/Interviews";
import { JobForm } from "./components/JobForm";
import { PlusIcon, SearchIcon } from "./components/Icons";
import { Sidebar } from "./components/Sidebar";
import { Statistics } from "./components/Statistics";
import { useInterviews } from "./hooks/useInterviews";
import { useJobs } from "./hooks/useJobs";
import { useSkills } from "./hooks/useSkills";
import { usePersistentValue } from "./hooks/usePersistentValue";
import { useTheme } from "./hooks/useTheme";
import { mergeSkillOptions, uniqueResumes } from "./utils";

export default function JobTracker() {
  const { jobs, ready, error, saveJob, moveJob, removeJob, importJobs } = useJobs();
  const { interviews, saveInterview, removeInterview, importInterviews } = useInterviews();
  const { customSkills, addSkill, importSkills } = useSkills();
  const { theme, toggleTheme } = useTheme();
  const fileRef = useRef<HTMLInputElement>(null);

  const [view, setView] = useState("board");
  // Backed by localStorage but hydration-safe: SSR renders the expanded
  // sidebar, then the stored preference is applied on the client.
  const [collapsed, setCollapsed] = usePersistentValue(
    SIDEBAR_COLLAPSED_KEY,
    false,
    (raw) => raw === "1"
  );
  const [query, setQuery] = useState("");
  const [dateSort, setDateSort] = useState("newest");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Job | null>(null);
  const [pendingDelete, setPendingDelete] = useState<Job | null>(null);
  const [notice, setNotice] = useState("");

  const skillOptions = useMemo(
    () => mergeSkillOptions(customSkills, jobs),
    [customSkills, jobs]
  );

  const onToggleCollapse = () => {
    setCollapsed(collapsed ? "0" : "1");
  };

  const openCreate = () => {
    setEditing(null);
    setFormOpen(true);
  };

  const openEdit = (job: Job) => {
    setEditing(job);
    setFormOpen(true);
  };

  const handleSave = async (draft: JobDraft, id?: string) => {
    await saveJob(draft, id);
    setFormOpen(false);
    setEditing(null);
  };

  const handleExport = () => {
    const payload = { version: 2, jobs, interviews, skills: customSkills };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `job-tracker-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (jobs.length > 0 || interviews.length > 0) {
      const ok = window.confirm(
        "Import will replace jobs, interviews, and custom skills in this browser. Continue?"
      );
      if (!ok) return;
    }
    try {
      const payload = JSON.parse(await file.text());
      const jobCount = await importJobs(payload);
      const interviewCount = await importInterviews(
        Array.isArray(payload) ? [] : payload.interviews || []
      );
      const skillCount = await importSkills(
        Array.isArray(payload) ? [] : payload.skills || []
      );
      const parts = [
        `${jobCount} job${jobCount === 1 ? "" : "s"}`,
        `${interviewCount} interview${interviewCount === 1 ? "" : "s"}`,
        `${skillCount} custom skill${skillCount === 1 ? "" : "s"}`,
      ];
      setNotice(`Restored ${parts.join(", ")} from backup.`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Could not import that file.";
      setNotice(message);
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-canvas text-ink">
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={onToggleCollapse}
        view={view}
        onViewChange={setView}
        theme={theme}
        onToggleTheme={toggleTheme}
        onExport={handleExport}
        onImportClick={() => fileRef.current?.click()}
      />
      <input
        ref={fileRef}
        type="file"
        accept="application/json"
        className="hidden"
        onChange={handleImport}
      />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="border-b border-hairline bg-surface/90 px-4 py-3 backdrop-blur">
          <div className="flex flex-wrap items-center gap-3">
            {view === "board" ? (
              <>
                <label className="relative min-w-[200px] flex-1">
                  <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted">
                    <SearchIcon />
                  </span>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search company, role, or skill"
                    className="w-full rounded-xl border border-hairline bg-canvas py-2 pr-3 pl-9 text-sm text-ink outline-none transition duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </label>
                <label className="flex items-center gap-2 text-sm text-muted">
                  <span className="hidden sm:inline">Sort</span>
                  <select
                    value={dateSort}
                    onChange={(e) => setDateSort(e.target.value)}
                    className="rounded-xl border border-hairline bg-surface px-2 py-2 text-sm text-ink outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                  </select>
                </label>
              </>
            ) : (
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-semibold tracking-tight text-ink">
                  {view === "interviews" ? "Interviews" : "Statistics"}
                </h2>
                <p className="text-xs text-muted">
                  {view === "interviews"
                    ? "Log upcoming interview dates and times on the calendar."
                    : "Pipeline health from the jobs stored in this browser."}
                </p>
              </div>
            )}
            <button
              type="button"
              onClick={openCreate}
              className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-3 py-2 text-sm font-semibold text-white shadow-sm transition duration-150 hover:bg-accent-hover"
            >
              <PlusIcon />
              Add job
            </button>
          </div>
        </header>

        {notice ? (
          <div className="flex items-center justify-between gap-3 border-b border-hairline bg-accent-soft px-4 py-2 text-sm text-ink">
            <p>{notice}</p>
            <button type="button" className="text-muted hover:text-ink" onClick={() => setNotice("")}>
              Dismiss
            </button>
          </div>
        ) : null}

        <main className="min-h-0 flex-1 overflow-hidden pt-3">
          {!ready ? (
            <p className="px-4 text-sm text-muted">Loading…</p>
          ) : error ? (
            <p className="px-4 text-sm text-rose-600">{error}</p>
          ) : view === "interviews" ? (
            <Interviews
              jobs={jobs}
              interviews={interviews}
              onSave={saveInterview}
              onRemove={removeInterview}
            />
          ) : view === "statistics" ? (
            <Statistics jobs={jobs} />
          ) : jobs.length === 0 ? (
            <EmptyState onAdd={openCreate} />
          ) : (
            <Board
              jobs={jobs}
              query={query}
              dateSort={dateSort}
              onOpen={openEdit}
              onMove={moveJob}
            />
          )}
        </main>
      </div>

      <JobForm
        open={formOpen}
        job={editing}
        resumes={uniqueResumes(jobs)}
        skillOptions={skillOptions}
        onCreateSkill={addSkill}
        onClose={() => {
          setFormOpen(false);
          setEditing(null);
        }}
        onSave={handleSave}
        onDelete={() => setPendingDelete(editing)}
      />

      <ConfirmDialog
        open={Boolean(pendingDelete)}
        title="Delete this job?"
        message={
          pendingDelete
            ? `${pendingDelete.company} — ${pendingDelete.role} will be removed from this browser.`
            : ""
        }
        onCancel={() => setPendingDelete(null)}
        onConfirm={async () => {
          if (pendingDelete) await removeJob(pendingDelete.id);
          setPendingDelete(null);
          setFormOpen(false);
          setEditing(null);
        }}
      />
    </div>
  );
}

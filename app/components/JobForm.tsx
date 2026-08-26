"use client";

import { useEffect, useId, useState } from "react";
import { COLUMNS, emptyJob } from "../constants";
import type { Job, JobDraft } from "../constants";
import { isValidHttpUrl } from "../utils";
import { CloseIcon, TrashIcon } from "./Icons";
import { SkillPicker } from "./SkillPicker";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-hairline bg-canvas px-3 py-2.5 text-sm text-ink outline-none transition duration-150 placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/30";

function toDraft(job: Job | null): JobDraft {
  if (!job) return emptyJob();
  return {
    company: job.company,
    role: job.role,
    linkedinUrl: job.linkedinUrl || "",
    resume: job.resume || "",
    dateApplied: job.dateApplied,
    salaryRange: job.salaryRange || "",
    notes: job.notes || "",
    description: job.description || "",
    skills: Array.isArray(job.skills) ? job.skills : [],
    status: job.status,
    createdAt: job.createdAt,
  };
}

type JobFormProps = {
  open: boolean;
  job: Job | null;
  resumes: string[];
  skillOptions: string[];
  onCreateSkill: (name: string) => Promise<string | undefined>;
  onClose: () => void;
  onSave: (draft: JobDraft, id?: string) => void;
  onDelete: () => void;
};

export function JobForm({
  open,
  job,
  resumes,
  skillOptions,
  onCreateSkill,
  onClose,
  onSave,
  onDelete,
}: JobFormProps) {
  if (!open) return null;
  return (
    <JobFormPanel
      key={job?.id || "new"}
      job={job}
      resumes={resumes}
      skillOptions={skillOptions}
      onCreateSkill={onCreateSkill}
      onClose={onClose}
      onSave={onSave}
      onDelete={onDelete}
    />
  );
}

function JobFormPanel({
  job,
  resumes,
  skillOptions,
  onCreateSkill,
  onClose,
  onSave,
  onDelete,
}: Omit<JobFormProps, "open">) {
  const formId = useId();
  const [draft, setDraft] = useState(() => toDraft(job));
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const setField = (key: keyof JobDraft, value: string | string[]) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!draft.company.trim()) next.company = "Company is required";
    if (!draft.role.trim()) next.role = "Role is required";
    if (!isValidHttpUrl(draft.linkedinUrl.trim())) {
      next.linkedinUrl = "Enter a valid http(s) URL";
    }
    if (!draft.dateApplied) next.dateApplied = "Date is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    onSave(draft, job?.id);
  };

  const activeColumn = COLUMNS.find((col) => col.id === draft.status);

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <button
        type="button"
        className="absolute inset-0 bg-ink/30 dark:bg-black/60"
        aria-label="Close form"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${formId}-title`}
        className="relative flex h-full w-full max-w-md flex-col border-l border-hairline bg-surface shadow-2xl"
      >
        <div className={`h-[3px] w-full ${activeColumn?.bar || "bg-accent"}`} />
        <header className="flex items-start justify-between gap-3 border-b border-hairline px-5 py-4">
          <div>
            <h2 id={`${formId}-title`} className="text-lg font-semibold tracking-tight text-ink">
              {job ? "Edit job" : "Add job"}
            </h2>
            <p className="mt-1 text-sm text-muted">Saved locally in this browser.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted transition duration-150 hover:bg-surface-muted hover:text-ink"
          >
            <CloseIcon />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
          <div className="kanban-scroll flex-1 space-y-4 overflow-y-auto px-5 py-5">
            <Field label="Company" error={errors.company} required>
              <input
                autoFocus
                className={inputClass}
                value={draft.company}
                onChange={(e) => setField("company", e.target.value)}
                placeholder="Acme Corp"
              />
            </Field>
            <Field label="Job title / role" error={errors.role} required>
              <input
                className={inputClass}
                value={draft.role}
                onChange={(e) => setField("role", e.target.value)}
                placeholder="Senior Software Engineer"
              />
            </Field>
            <Field label="LinkedIn job URL" error={errors.linkedinUrl}>
              <input
                className={inputClass}
                value={draft.linkedinUrl}
                onChange={(e) => setField("linkedinUrl", e.target.value)}
                placeholder="https://www.linkedin.com/jobs/view/..."
                inputMode="url"
              />
            </Field>
            <div>
              <span className="text-[13px] font-semibold text-ink">Skills</span>
              <SkillPicker
                value={draft.skills}
                options={skillOptions}
                onChange={(skills) => setField("skills", skills)}
                onCreate={onCreateSkill}
              />
            </div>
            <Field label="Job description">
              <textarea
                rows={6}
                className={`${inputClass} resize-y`}
                value={draft.description}
                onChange={(e) => setField("description", e.target.value)}
                placeholder="Paste the role description, requirements, and highlights…"
              />
            </Field>
            <Field label="Resume used">
              <input
                className={inputClass}
                list={`${formId}-resumes`}
                value={draft.resume}
                onChange={(e) => setField("resume", e.target.value)}
                placeholder="SDE_Resume_v3"
              />
              <datalist id={`${formId}-resumes`}>
                {resumes.map((name) => (
                  <option key={name} value={name} />
                ))}
              </datalist>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Date applied" error={errors.dateApplied} required>
                <input
                  type="date"
                  className={inputClass}
                  value={draft.dateApplied}
                  onChange={(e) => setField("dateApplied", e.target.value)}
                />
              </Field>
              <Field label="Status">
                <select
                  className={inputClass}
                  value={draft.status}
                  onChange={(e) => setField("status", e.target.value)}
                >
                  {COLUMNS.map((col) => (
                    <option key={col.id} value={col.id}>
                      {col.title}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Salary range">
              <input
                className={inputClass}
                value={draft.salaryRange}
                onChange={(e) => setField("salaryRange", e.target.value)}
                placeholder="₹25-30 LPA or $150-180K"
              />
            </Field>
            <Field label="Notes">
              <textarea
                rows={4}
                className={`${inputClass} resize-y`}
                value={draft.notes}
                onChange={(e) => setField("notes", e.target.value)}
                placeholder="Recruiter name, referral, next steps…"
              />
            </Field>
          </div>

          <footer className="sticky bottom-0 flex items-center justify-between gap-3 border-t border-hairline bg-surface px-5 py-4">
            {job ? (
              <button
                type="button"
                onClick={onDelete}
                className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-rose-600 transition duration-150 hover:bg-rose-50 dark:hover:bg-rose-950/40"
              >
                <TrashIcon />
                Delete
              </button>
            ) : (
              <span />
            )}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink transition duration-150 hover:bg-surface-muted"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-white transition duration-150 hover:bg-accent-hover"
              >
                Save job
              </button>
            </div>
          </footer>
        </form>
      </aside>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[13px] font-semibold text-ink">
        {label}
        {required ? <span className="text-rose-500"> *</span> : null}
      </span>
      {children}
      {error ? <span className="mt-1 block text-xs text-rose-600">{error}</span> : null}
    </label>
  );
}

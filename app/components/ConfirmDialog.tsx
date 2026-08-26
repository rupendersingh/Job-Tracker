"use client";

import { useEffect } from "react";
import { CloseIcon } from "./Icons";

type ConfirmDialogProps = {
  open: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = "Delete",
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40 dark:bg-black/70"
        aria-label="Close dialog"
        onClick={onCancel}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        className="relative w-full max-w-sm rounded-2xl border border-hairline bg-surface p-5 shadow-xl"
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 id="confirm-title" className="text-base font-semibold tracking-tight text-ink">
            {title}
          </h2>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg p-1 text-muted transition duration-150 hover:bg-surface-muted hover:text-ink"
          >
            <CloseIcon />
          </button>
        </div>
        <p className="text-sm leading-6 text-muted">{message}</p>
        <div className="mt-5 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-ink transition duration-150 hover:bg-surface-muted"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-lg bg-rose-600 px-3 py-1.5 text-sm font-semibold text-white transition duration-150 hover:bg-rose-700"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

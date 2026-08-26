"use client";

import { PlusIcon } from "./Icons";

type EmptyStateProps = {
  onAdd: () => void;
};

export function EmptyState({ onAdd }: EmptyStateProps) {
  return (
    <div className="flex h-full min-h-[280px] items-center justify-center px-6">
      <div className="max-w-md rounded-2xl border border-hairline bg-surface px-8 py-10 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <PlusIcon className="h-5 w-5" />
        </div>
        <h2 className="text-lg font-semibold tracking-tight text-ink">Start your pipeline</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Save a role to Wishlist, then drag it through Applied, Follow-up, interview rounds, and
          Offer. Everything stays in this browser.
        </p>
        <button
          type="button"
          onClick={onAdd}
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition duration-150 hover:bg-accent-hover"
        >
          <PlusIcon />
          Add job
        </button>
      </div>
    </div>
  );
}

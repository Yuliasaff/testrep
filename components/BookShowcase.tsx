export function BookShowcase() {
  return (
    <section className="flex flex-col gap-6 py-12 md:flex-row md:items-center">
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-semibold">Preview the core playbooks</h2>
        <p className="text-sm text-slate-600">
          Dedicated spaces for final imagery and proof points. Phase 2 will replace these placeholders with
          structured MDX-driven content.
        </p>
      </div>
      <div className="flex flex-1 flex-wrap gap-4">
        <div className="h-40 w-full rounded-xl bg-slate-200 md:w-1/2" aria-hidden />
        <div className="h-40 w-full rounded-xl bg-slate-200 md:w-1/2" aria-hidden />
      </div>
    </section>
  );
}

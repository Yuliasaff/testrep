export function SamplePreview() {
  return (
    <section className="flex flex-col gap-4 py-12 md:flex-row md:items-center">
      <div className="flex-1 space-y-3">
        <h2 className="text-2xl font-semibold">Sample chapter preview</h2>
        <p className="text-sm text-slate-600">
          Later phases will connect this section to Contentlayer-driven MDX so editors can curate excerpts without
          shipping code.
        </p>
      </div>
      <div className="flex-1 rounded-xl border border-dashed border-slate-300 p-6 text-sm text-slate-500">
        Embed sample PDF or highlight key frameworks here.
      </div>
    </section>
  );
}

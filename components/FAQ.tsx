const QUESTIONS = [
  {
    question: 'How will content be managed?',
    answer: 'Phase 2 introduces Contentlayer with MDX data sources. Editors can update files without touching TSX.'
  },
  {
    question: 'Will checkout be handled in-app?',
    answer: 'No custom cart yet. External checkout links will be connected in later phases.'
  }
];

export function FAQ() {
  return (
    <section className="space-y-4 py-12">
      <h2 className="text-center text-2xl font-semibold">Frequently asked questions</h2>
      <div className="space-y-4">
        {QUESTIONS.map((item) => (
          <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">
              {item.question}
            </summary>
            <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

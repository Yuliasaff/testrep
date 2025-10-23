const TESTIMONIALS = [
  {
    quote: 'Phase 1 scaffolding keeps the team aligned while content evolves.',
    name: 'Product Marketing Lead'
  },
  {
    quote: 'Structured placeholders make it easy to plug in final creative assets.',
    name: 'Creative Director'
  }
];

export function Testimonials() {
  return (
    <section className="space-y-6 py-12">
      <h2 className="text-center text-2xl font-semibold">Testimonials placeholder</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((item) => (
          <figure key={item.quote} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <blockquote className="text-slate-600">“{item.quote}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-slate-900">{item.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

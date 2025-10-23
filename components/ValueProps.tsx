const VALUE_PROPS = [
  {
    title: 'Actionable training systems',
    description: 'Detailed programming frameworks that support multiple experience levels.'
  },
  {
    title: 'Dialed-in nutrition guidance',
    description: 'Macro breakdowns, recipes, and coaching tips to remove guesswork.'
  },
  {
    title: 'Launch-ready assets',
    description: 'Copy and media placeholders ensure faster iteration once content is ready.'
  }
];

export function ValueProps() {
  return (
    <section className="grid gap-6 py-12 md:grid-cols-3">
      {VALUE_PROPS.map((item) => (
        <article key={item.title} className="rounded-lg border border-slate-200 p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
          <p className="mt-2 text-sm text-slate-600">{item.description}</p>
        </article>
      ))}
    </section>
  );
}

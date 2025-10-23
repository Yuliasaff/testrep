const PRICING = [
  {
    label: 'Training Playbook',
    price: '$49',
    description: 'Program design frameworks and progressive templates.',
    href: '#'
  },
  {
    label: 'Nutrition Playbook',
    price: '$49',
    description: 'Meal systems, macro guidance, and habit protocols.',
    href: '#'
  },
  {
    label: 'Bundle (Best Value)',
    price: '$79',
    description: 'Both playbooks plus bonus launch assets.',
    href: '#'
  }
];

export function BundlePricing() {
  return (
    <section className="py-12">
      <h2 className="text-center text-2xl font-semibold">Simple pricing scaffold</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {PRICING.map((item) => (
          <article key={item.label} className="rounded-lg border border-slate-200 p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{item.price}</p>
            <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            <a
              href={item.href}
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Placeholder CTA
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

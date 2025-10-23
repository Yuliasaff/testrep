const BRANDS = ['Strength Lab', 'Macro Metrics', 'Founders Club'];

export function TrustBar() {
  return (
    <section className="py-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Trusted by builders from
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-400">
        {BRANDS.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </div>
    </section>
  );
}

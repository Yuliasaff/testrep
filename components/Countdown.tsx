import { getDeadline } from '@/lib/countdown';

export function Countdown() {
  const deadline = getDeadline();

  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-semibold">Countdown placeholder</h2>
      <p className="mt-2 text-sm text-slate-600">
        Launch deadline currently set to {deadline.toUTCString()}.
      </p>
    </section>
  );
}

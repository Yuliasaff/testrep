'use client';

import { FormEvent, useState } from 'react';

export function LeadCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitted');
  };

  return (
    <section className="py-12">
      <div className="rounded-2xl bg-slate-900 p-8 text-white">
        <h2 className="text-2xl font-semibold">Join the launch list</h2>
        <p className="mt-2 text-sm text-slate-200">
          Placeholder form. ESP integrations land in Phase 4 once server actions and APIs are wired up.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 md:flex-row">
          <label className="sr-only" htmlFor="lead-email">
            Email address
          </label>
          <input
            id="lead-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-slate-900"
            placeholder="you@example.com"
          />
          <button
            type="submit"
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            {status === 'submitted' ? 'Thanks!' : 'Notify me'}
          </button>
        </form>
      </div>
    </section>
  );
}

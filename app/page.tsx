import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-semibold">Landing experience scaffold</h1>
      <p className="max-w-xl text-balance text-slate-600">
        This workspace hosts the marketing launch flow. Visit the launch page to preview the
        in-progress experience.
      </p>
      <Link
        href="/launch"
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-700"
      >
        View launch page
      </Link>
    </main>
  );
}

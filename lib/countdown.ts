const FALLBACK_DEADLINE = '2025-11-15T23:59:59Z';

export function getDeadline() {
  const raw = process.env.LAUNCH_DEADLINE_UTC ?? FALLBACK_DEADLINE;
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) {
    return new Date(FALLBACK_DEADLINE);
  }
  return parsed;
}

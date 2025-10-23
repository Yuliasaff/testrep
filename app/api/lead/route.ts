import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    { ok: false, error: 'Lead capture endpoint will be implemented in Phase 4.' },
    { status: 501 }
  );
}

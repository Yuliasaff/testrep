import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'A/B bucket debugging endpoint will be implemented in a later phase.' },
    { status: 501 }
  );
}

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const COOKIE_NAME = 'ab_launch_v1';

export function middleware(request: NextRequest) {
  const existing = request.cookies.get(COOKIE_NAME)?.value;
  if (existing === 'A' || existing === 'B') {
    return NextResponse.next();
  }

  const variant = Math.random() < 0.5 ? 'A' : 'B';
  const response = NextResponse.next();
  response.cookies.set(COOKIE_NAME, variant, {
    path: '/',
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 30
  });
  return response;
}

export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)']
};

import { cookies } from 'next/headers';

export type LaunchVariant = 'A' | 'B';

export function getVariant(): LaunchVariant {
  const cookie = cookies().get('ab_launch_v1')?.value;
  return cookie === 'B' ? 'B' : 'A';
}

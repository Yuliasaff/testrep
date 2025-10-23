import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: 'Training & Nutrition Launch',
  description: 'High-converting landing flow scaffolded with Next.js, Tailwind CSS, and Contentlayer.'
};

export function mergeMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...overrides.openGraph
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...overrides.twitter
    }
  } as Metadata;
}

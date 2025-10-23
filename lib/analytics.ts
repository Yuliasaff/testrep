export type AnalyticsEvent = {
  name: string;
  payload?: Record<string, unknown>;
};

export function trackEvent(event: AnalyticsEvent) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', event.name, event.payload);
  }
}

export function getDefaultAnalyticsContext() {
  return {
    variant: 'A'
  };
}

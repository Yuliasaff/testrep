export type LeadPayload = {
  email: string;
};

export async function addToConvertKit(_payload: LeadPayload) {
  throw new Error('ConvertKit integration will be implemented in Phase 4.');
}

export async function addToMailchimp(_payload: LeadPayload) {
  throw new Error('Mailchimp integration will be implemented in Phase 4.');
}

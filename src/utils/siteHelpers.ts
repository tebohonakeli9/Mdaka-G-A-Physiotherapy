export interface AppointmentRequestInput {
  name: string;
  phone: string;
  preferredTime: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: {
    name?: string;
    phone?: string;
    message?: string;
  };
}

/**
 * Checks whether a configurable field (string or array) has meaningful content.
 */
export function hasFieldValue(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value);
}

/**
 * Builds the Google Maps embed URL from a location query string.
 */
export function buildGoogleMapsEmbedUrl(mapQuery: string): string {
  const trimmed = mapQuery.trim();
  if (!trimmed) return '';
  return `https://www.google.com/maps?q=${encodeURIComponent(trimmed)}&output=embed`;
}

/**
 * Builds the Google Maps directions URL from a location query string.
 */
export function buildGoogleMapsDirectionsUrl(mapQuery: string): string {
  const trimmed = mapQuery.trim();
  if (!trimmed) return '';
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(trimmed)}`;
}

/**
 * Builds a clean WhatsApp deep link, optionally prefilling an appointment request message.
 */
export function buildWhatsAppUrl(
  whatsappNumber: string,
  request?: AppointmentRequestInput
): string {
  const digits = whatsappNumber.replace(/\D/g, '');
  if (!digits) return '';
  if (!request) {
    return `https://wa.me/${digits}`;
  }

  const lines = [
    'Hello, I would like to request an appointment at Mdaka G A Physiotherapy.',
    `Name: ${request.name.trim()}`,
    `Phone: ${request.phone.trim()}`,
  ];

  if (request.preferredTime.trim()) {
    lines.push(`Preferred day & time: ${request.preferredTime.trim()}`);
  }
  if (request.message.trim()) {
    lines.push(`Message: ${request.message.trim()}`);
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/**
 * Validates the WhatsApp appointment request form fields.
 */
export function validateAppointmentRequest(
  input: AppointmentRequestInput
): ValidationResult {
  const errors: ValidationResult['errors'] = {};

  if (input.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  const phoneDigits = input.phone.replace(/\D/g, '');
  if (phoneDigits.length < 7) {
    errors.phone = 'Please enter a valid contact phone number.';
  }

  if (input.message.trim().length < 3) {
    errors.message = 'Please enter a brief note about your appointment request.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Computes next or previous gallery index with wrap-around.
 */
export function cycleGalleryIndex(
  current: number,
  direction: 'next' | 'prev',
  total: number
): number {
  if (total <= 0) return 0;
  if (direction === 'next') {
    return (current + 1) % total;
  }
  return (current - 1 + total) % total;
}

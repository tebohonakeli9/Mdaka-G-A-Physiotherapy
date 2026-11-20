import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildGoogleMapsDirectionsUrl,
  buildGoogleMapsEmbedUrl,
  buildWhatsAppUrl,
  cycleGalleryIndex,
  hasFieldValue,
  validateAppointmentRequest,
} from './siteHelpers';

test('hasFieldValue correctly hides empty strings and empty arrays', () => {
  assert.equal(hasFieldValue(''), false);
  assert.equal(hasFieldValue('   '), false);
  assert.equal(hasFieldValue([]), false);
  assert.equal(hasFieldValue(null), false);
  assert.equal(hasFieldValue(undefined), false);
  assert.equal(hasFieldValue('27762325034'), true);
  assert.equal(hasFieldValue(['Wheelchair ramp']), true);
});

test('Google Maps embed and directions URLs encode query properly', () => {
  const query = 'Bethal, 2309, Mpumalanga, South Africa';
  assert.equal(
    buildGoogleMapsEmbedUrl(query),
    'https://www.google.com/maps?q=Bethal%2C%202309%2C%20Mpumalanga%2C%20South%20Africa&output=embed'
  );
  assert.equal(
    buildGoogleMapsDirectionsUrl(query),
    'https://www.google.com/maps/dir/?api=1&destination=Bethal%2C%202309%2C%20Mpumalanga%2C%20South%20Africa'
  );
  assert.equal(buildGoogleMapsEmbedUrl(''), '');
});

test('buildWhatsAppUrl constructs base link and prefilled appointment text', () => {
  assert.equal(buildWhatsAppUrl('27762325034'), 'https://wa.me/27762325034');
  assert.equal(buildWhatsAppUrl(''), '');

  const url = buildWhatsAppUrl('27762325034', {
    name: 'Thabo Mokoena',
    phone: '076 000 1111',
    preferredTime: 'Tuesday morning',
    message: 'Booking an initial assessment',
  });

  assert.ok(url.startsWith('https://wa.me/27762325034?text='));
  const decoded = decodeURIComponent(url.split('text=')[1]);
  assert.match(decoded, /Name: Thabo Mokoena/);
  assert.match(decoded, /Phone: 076 000 1111/);
  assert.match(decoded, /Preferred day & time: Tuesday morning/);
  assert.match(decoded, /Message: Booking an initial assessment/);
});

test('validateAppointmentRequest catches missing fields and accepts valid input', () => {
  const invalid = validateAppointmentRequest({
    name: 'A',
    phone: '123',
    preferredTime: '',
    message: 'hi',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.message);

  const valid = validateAppointmentRequest({
    name: 'Sipho Ndlovu',
    phone: '076 232 5034',
    preferredTime: 'Friday 10:00',
    message: 'Would like to book a session',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('cycleGalleryIndex wraps around cleanly', () => {
  assert.equal(cycleGalleryIndex(0, 'prev', 8), 7);
  assert.equal(cycleGalleryIndex(7, 'next', 8), 0);
  assert.equal(cycleGalleryIndex(3, 'next', 8), 4);
  assert.equal(cycleGalleryIndex(3, 'prev', 8), 2);
});

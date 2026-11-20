import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldAlert,
} from 'lucide-react';
import { siteData } from '../data/siteData';
import {
  buildGoogleMapsDirectionsUrl,
  buildGoogleMapsEmbedUrl,
  buildWhatsAppUrl,
  hasFieldValue,
  validateAppointmentRequest,
} from '../utils/siteHelpers';
import type { ValidationResult } from '../utils/siteHelpers';
import { Reveal } from './Reveal';

export function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<ValidationResult['errors']>({});
  const [submittedUrl, setSubmittedUrl] = useState('');

  const hasWhatsapp = hasFieldValue(siteData.whatsappNumber);
  const hasStreet = hasFieldValue(siteData.streetAddress);
  const hasEmail = hasFieldValue(siteData.email);
  const hasFacebook = hasFieldValue(siteData.facebookUrl);
  const hasMedicalAid = hasFieldValue(siteData.medicalAid);
  const hasAccessibility = hasFieldValue(siteData.accessibility);

  const mapEmbedUrl = buildGoogleMapsEmbedUrl(siteData.mapQuery);
  const mapDirectionsUrl = buildGoogleMapsDirectionsUrl(siteData.mapQuery);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateAppointmentRequest({
      name,
      phone,
      preferredTime,
      message,
    });

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const whatsappHref = buildWhatsAppUrl(siteData.whatsappNumber, {
      name,
      phone,
      preferredTime,
      message,
    });
    setSubmittedUrl(whatsappHref);

    if (whatsappHref) {
      const link = document.createElement('a');
      link.href = whatsappHref;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleReset = () => {
    setSubmittedUrl('');
    setName('');
    setPhone('');
    setPreferredTime('');
    setMessage('');
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#E6FFFA]/60 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0B7F73] sm:text-4xl">
              {siteData.contact.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#12343B]/85 sm:text-lg">
              {siteData.contact.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Call buttons, Location & Map */}
          <Reveal className="space-y-6 lg:col-span-6">
            <div className="rounded-2xl border border-[#0FA896]/20 bg-white p-6 shadow-[0_8px_24px_rgba(18,52,59,0.05)] sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#0B7F73]">
                Call the Practice
              </h3>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${siteData.phoneMobileTel}`}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl bg-[#FFC53D] px-5 py-3 text-base font-semibold whitespace-nowrap text-[#12343B] shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#f6b824] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B7F73]"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{siteData.phoneMobileDisplay}</span>
                </a>

                <a
                  href={`tel:${siteData.phoneLandlineTel}`}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl border border-[#0B7F73]/25 bg-[#E6FFFA] px-5 py-3 text-base font-semibold whitespace-nowrap text-[#0B7F73] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#CFF7F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0FA896]"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{siteData.phoneLandlineDisplay}</span>
                </a>
              </div>

              <div className="mt-6 space-y-3 border-t border-[#0FA896]/15 pt-6 text-sm text-[#12343B]/90 sm:text-base">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#0FA896]"
                    aria-hidden="true"
                  />
                  <div>
                    {hasStreet && (
                      <p className="font-medium text-[#12343B]">{siteData.streetAddress}</p>
                    )}
                    <p className="font-medium text-[#12343B]">
                      {siteData.town} · {siteData.postalCode}
                    </p>
                    <p className="text-sm text-[#12343B]/75">{siteData.municipality}</p>
                  </div>
                </div>

                {hasEmail && (
                  <div className="flex items-center gap-3">
                    <Mail
                      className="h-5 w-5 shrink-0 text-[#0FA896]"
                      aria-hidden="true"
                    />
                    <a
                      href={`mailto:${siteData.email}`}
                      className="font-medium text-[#0B7F73] hover:underline"
                    >
                      {siteData.email}
                    </a>
                  </div>
                )}

                {hasFacebook && (
                  <div className="flex items-center gap-3">
                    <ExternalLink
                      className="h-5 w-5 shrink-0 text-[#0FA896]"
                      aria-hidden="true"
                    />
                    <a
                      href={siteData.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#0B7F73] hover:underline"
                    >
                      Facebook Page
                    </a>
                  </div>
                )}

                {hasMedicalAid && (
                  <p className="text-sm text-[#12343B]/80">
                    Medical aid: {siteData.medicalAid}
                  </p>
                )}

                {hasAccessibility && (
                  <p className="text-sm text-[#12343B]/80">
                    Accessibility: {(siteData.accessibility as string[]).join(' · ')}
                  </p>
                )}
              </div>

              {mapDirectionsUrl && (
                <div className="mt-6">
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-2xl border border-[#0FA896]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B7F73] shadow-xs transition-colors hover:bg-[#E6FFFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0FA896]"
                  >
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Get Directions</span>
                  </a>
                </div>
              )}
            </div>

            {mapEmbedUrl && (
              <div className="overflow-hidden rounded-2xl border border-[#0FA896]/20 bg-[#E6FFFA] shadow-[0_8px_24px_rgba(18,52,59,0.05)]">
                <iframe
                  title="Map showing Bethal, Mpumalanga, South Africa"
                  src={mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0 sm:h-80"
                />
              </div>
            )}
          </Reveal>

          {/* Right Column: WhatsApp Appointment Request Form (only when whatsappNumber is set) */}
          {hasWhatsapp && (
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="rounded-2xl border border-[#0FA896]/20 bg-white p-6 shadow-[0_8px_24px_rgba(18,52,59,0.05)] sm:p-8">
                <h3 className="font-display text-xl font-bold text-[#0B7F73]">
                  {siteData.contact.formHeading}
                </h3>

                <div className="mt-3 flex items-start gap-2.5 rounded-2xl bg-[#E6FFFA] p-3.5 text-sm text-[#0B7F73]">
                  <ShieldAlert
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0FA896]"
                    aria-hidden="true"
                  />
                  <p>{siteData.contact.formNote}</p>
                </div>

                {submittedUrl ? (
                  <div
                    role="status"
                    className="mt-6 rounded-2xl border border-[#0FA896]/25 bg-[#E6FFFA]/60 p-6"
                  >
                    <div className="flex items-center gap-3 text-[#0B7F73]">
                      <CheckCircle2 className="h-6 w-6 shrink-0" aria-hidden="true" />
                      <h4 className="font-display text-lg font-bold">
                        {siteData.contact.formThankYouTitle}
                      </h4>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#12343B]/85">
                      {siteData.contact.formThankYouBody}
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={submittedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-2xl bg-[#0FA896] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0B7F73]"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>Open WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-[#0FA896]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#0B7F73] transition-colors hover:bg-[#E6FFFA]"
                      >
                        Send Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[#12343B]"
                      >
                        Full Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        aria-invalid={Boolean(errors.name)}
                        className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#0FA896]/25 bg-white px-4 py-2.5 text-base text-[#12343B] placeholder:text-[#12343B]/45 focus:border-[#0FA896] focus:outline-2 focus:outline-offset-0 focus:outline-[#0FA896]/30"
                      />
                      {errors.name && (
                        <p role="alert" className="mt-1.5 text-sm text-red-700">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-[#12343B]"
                      >
                        Phone Number <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 076 000 0000"
                        aria-invalid={Boolean(errors.phone)}
                        className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#0FA896]/25 bg-white px-4 py-2.5 text-base text-[#12343B] placeholder:text-[#12343B]/45 focus:border-[#0FA896] focus:outline-2 focus:outline-offset-0 focus:outline-[#0FA896]/30"
                      />
                      {errors.phone && (
                        <p role="alert" className="mt-1.5 text-sm text-red-700">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-preferred-time"
                        className="block text-sm font-medium text-[#12343B]"
                      >
                        Preferred Day and Time
                      </label>
                      <input
                        id="contact-preferred-time"
                        name="preferredTime"
                        type="text"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        placeholder="e.g. Wednesday morning"
                        className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#0FA896]/25 bg-white px-4 py-2.5 text-base text-[#12343B] placeholder:text-[#12343B]/45 focus:border-[#0FA896] focus:outline-2 focus:outline-offset-0 focus:outline-[#0FA896]/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-[#12343B]"
                      >
                        Message <span aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Briefly let us know how we can help arrange your appointment"
                        aria-invalid={Boolean(errors.message)}
                        className="mt-1.5 block w-full rounded-2xl border border-[#0FA896]/25 bg-white px-4 py-3 text-base text-[#12343B] placeholder:text-[#12343B]/45 focus:border-[#0FA896] focus:outline-2 focus:outline-offset-0 focus:outline-[#0FA896]/30"
                      />
                      {errors.message && (
                        <p role="alert" className="mt-1.5 text-sm text-red-700">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[#FFC53D] px-6 py-3 text-base font-semibold text-[#12343B] shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#f6b824] hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B7F73]"
                    >
                      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                      <span>Send Request on WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

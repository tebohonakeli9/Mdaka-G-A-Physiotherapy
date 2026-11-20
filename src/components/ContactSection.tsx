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

  const whatsappDirectUrl = hasWhatsapp ? buildWhatsAppUrl(siteData.whatsappNumber) : '';
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
      className="bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#E8F2FF]/65 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0A2A6B] sm:text-4xl">
              {siteData.contact.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#0A2A6B]/80 sm:text-lg">
              {siteData.contact.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: WhatsApp & Landline buttons, Location, Saturday venue & Map */}
          <Reveal className="space-y-6 lg:col-span-6">
            <div className="rounded-2xl border border-[#1E5FD0]/20 bg-white p-6 shadow-[0_8px_24px_rgba(30,95,208,0.06)] sm:p-8">
              <h3 className="font-display text-xl font-bold text-[#0A2A6B]">
                Get in Touch
              </h3>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                {whatsappDirectUrl && (
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl bg-[#1E5FD0] px-5 py-3 text-base font-semibold whitespace-nowrap text-white shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#0A2A6B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2A6B]"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>WhatsApp {siteData.phoneWhatsappDisplay}</span>
                  </a>
                )}

                <a
                  href={`tel:${siteData.phoneLandlineTel}`}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-2xl border border-[#1E5FD0]/25 bg-[#E8F2FF] px-5 py-3 text-base font-semibold whitespace-nowrap text-[#0A2A6B] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#dbeaff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5FD0]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#1E5FD0]" aria-hidden="true" />
                  <span>Call {siteData.phoneLandlineDisplay}</span>
                </a>
              </div>

              <div className="mt-6 space-y-3 border-t border-[#1E5FD0]/15 pt-6 text-sm text-[#0A2A6B]/90 sm:text-base">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#1E5FD0]"
                    aria-hidden="true"
                  />
                  <div className="space-y-1">
                    {hasStreet && (
                      <p className="font-medium text-[#0A2A6B]">{siteData.streetAddress}</p>
                    )}
                    <p className="font-semibold text-[#0A2A6B]">{siteData.town}</p>
                    <p className="text-sm text-[#0A2A6B]/80">
                      Saturday venue: {siteData.saturdayVenueAddress}
                    </p>
                  </div>
                </div>

                {hasEmail && (
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-[#1E5FD0]" aria-hidden="true" />
                    <a
                      href={`mailto:${siteData.email}`}
                      className="font-medium text-[#1E5FD0] hover:underline"
                    >
                      {siteData.email}
                    </a>
                  </div>
                )}

                {hasFacebook && (
                  <div className="flex items-center gap-3">
                    <ExternalLink
                      className="h-5 w-5 shrink-0 text-[#1E5FD0]"
                      aria-hidden="true"
                    />
                    <a
                      href={siteData.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#1E5FD0] hover:underline"
                    >
                      Facebook Page
                    </a>
                  </div>
                )}
              </div>

              {mapDirectionsUrl && (
                <div className="mt-6">
                  <a
                    href={mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-2xl border border-[#1E5FD0]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A2A6B] shadow-xs transition-colors hover:bg-[#E8F2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5FD0]"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-[#1E5FD0]" aria-hidden="true" />
                    <span>Get Directions to Saturday Venue</span>
                  </a>
                </div>
              )}
            </div>

            {mapEmbedUrl && (
              <div className="overflow-hidden rounded-2xl border border-[#1E5FD0]/20 bg-[#E8F2FF] shadow-[0_8px_24px_rgba(30,95,208,0.06)]">
                <iframe
                  title="Map showing 22a Clerq Street, Bethal, 2310, South Africa"
                  src={mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0 sm:h-80"
                />
              </div>
            )}
          </Reveal>

          {/* Right Column: WhatsApp Appointment Request Form */}
          {hasWhatsapp && (
            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="rounded-2xl border border-[#1E5FD0]/20 bg-white p-6 shadow-[0_8px_24px_rgba(30,95,208,0.06)] sm:p-8">
                <h3 className="font-display text-xl font-bold text-[#0A2A6B]">
                  {siteData.contact.formHeading}
                </h3>

                <div className="mt-3 flex items-start gap-2.5 rounded-2xl bg-[#E8F2FF] p-3.5 text-sm text-[#0A2A6B]">
                  <ShieldAlert
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#1E5FD0]"
                    aria-hidden="true"
                  />
                  <p>{siteData.contact.formNote}</p>
                </div>

                {submittedUrl ? (
                  <div
                    role="status"
                    className="mt-6 rounded-2xl border border-[#1E5FD0]/25 bg-[#E8F2FF]/60 p-6"
                  >
                    <div className="flex items-center gap-3 text-[#0A2A6B]">
                      <CheckCircle2 className="h-6 w-6 shrink-0 text-[#1E5FD0]" aria-hidden="true" />
                      <h4 className="font-display text-lg font-bold">
                        {siteData.contact.formThankYouTitle}
                      </h4>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#0A2A6B]/85">
                      {siteData.contact.formThankYouBody}
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={submittedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-2xl bg-[#1E5FD0] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0A2A6B]"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>Open WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-[#1E5FD0]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#0A2A6B] transition-colors hover:bg-[#E8F2FF]"
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
                        className="block text-sm font-medium text-[#0A2A6B]"
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
                        className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#1E5FD0]/25 bg-white px-4 py-2.5 text-base text-[#0A2A6B] placeholder:text-[#0A2A6B]/45 focus:border-[#1E5FD0] focus:outline-2 focus:outline-offset-0 focus:outline-[#1E5FD0]/30"
                      />
                      {errors.name && (
                        <p role="alert" className="mt-1.5 text-sm text-[#D40000]">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-[#0A2A6B]"
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
                        className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#1E5FD0]/25 bg-white px-4 py-2.5 text-base text-[#0A2A6B] placeholder:text-[#0A2A6B]/45 focus:border-[#1E5FD0] focus:outline-2 focus:outline-offset-0 focus:outline-[#1E5FD0]/30"
                      />
                      {errors.phone && (
                        <p role="alert" className="mt-1.5 text-sm text-[#D40000]">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-preferred-time"
                        className="block text-sm font-medium text-[#0A2A6B]"
                      >
                        Preferred Day and Time
                      </label>
                      <input
                        id="contact-preferred-time"
                        name="preferredTime"
                        type="text"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        placeholder="e.g. Monday 16:30 or Saturday morning"
                        className="mt-1.5 block min-h-[46px] w-full rounded-2xl border border-[#1E5FD0]/25 bg-white px-4 py-2.5 text-base text-[#0A2A6B] placeholder:text-[#0A2A6B]/45 focus:border-[#1E5FD0] focus:outline-2 focus:outline-offset-0 focus:outline-[#1E5FD0]/30"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-[#0A2A6B]"
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
                        className="mt-1.5 block w-full rounded-2xl border border-[#1E5FD0]/25 bg-white px-4 py-3 text-base text-[#0A2A6B] placeholder:text-[#0A2A6B]/45 focus:border-[#1E5FD0] focus:outline-2 focus:outline-offset-0 focus:outline-[#1E5FD0]/30"
                      />
                      {errors.message && (
                        <p role="alert" className="mt-1.5 text-sm text-[#D40000]">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-[#1E5FD0] px-6 py-3 text-base font-semibold text-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#0A2A6B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2A6B]"
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

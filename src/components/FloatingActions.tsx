import { MessageCircle, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';
import { buildWhatsAppUrl, hasFieldValue } from '../utils/siteHelpers';

export function FloatingActions() {
  const whatsappUrl = hasFieldValue(siteData.whatsappNumber)
    ? buildWhatsAppUrl(siteData.whatsappNumber)
    : '';

  return (
    <>
      {/* Sticky bottom bar on mobile with WhatsApp Us and Call Us */}
      <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-[#1E5FD0]/15 bg-white/95 px-3 py-2 shadow-[0_-6px_20px_rgba(10,42,107,0.1)] backdrop-blur-md md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-2xl bg-[#1E5FD0] px-3 py-2 text-sm font-semibold text-white shadow-xs"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{siteData.hero.whatsappCtaLabel}</span>
            </a>
          )}
          <a
            href={`tel:${siteData.phoneLandlineTel}`}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-2xl bg-[#0A2A6B] px-3 py-2 text-sm font-semibold text-white shadow-xs"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{siteData.hero.callCtaLabel}</span>
          </a>
        </div>
      </div>

      {/* Desktop floating WhatsApp button */}
      {whatsappUrl && (
        <div className="pointer-events-none fixed right-6 bottom-6 z-40 hidden md:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Us"
            className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-2xl bg-[#1E5FD0] px-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(30,95,208,0.35)] transition-transform duration-150 hover:scale-105 hover:bg-[#0A2A6B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2A6B]"
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span>{siteData.hero.whatsappCtaLabel}</span>
          </a>
        </div>
      )}
    </>
  );
}

import { MessageCircle, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';
import { buildWhatsAppUrl, hasFieldValue } from '../utils/siteHelpers';

export function FloatingActions() {
  const whatsappUrl = hasFieldValue(siteData.whatsappNumber)
    ? buildWhatsAppUrl(siteData.whatsappNumber)
    : '';

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-40 flex items-center gap-2.5 sm:right-6 sm:bottom-6">
      {/* Floating Call button on mobile only */}
      <a
        href={`tel:${siteData.phoneMobileTel}`}
        aria-label={`Call ${siteData.phoneMobileDisplay}`}
        className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-2xl bg-[#FFC53D] px-4 text-sm font-semibold text-[#12343B] shadow-[0_10px_25px_rgba(18,52,59,0.2)] transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B7F73] md:hidden"
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Call</span>
      </a>

      {/* Floating WhatsApp button (only when whatsappNumber is set) */}
      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0FA896] text-white shadow-[0_10px_25px_rgba(15,168,150,0.35)] transition-transform duration-150 hover:scale-105 hover:bg-[#0B7F73] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B7F73] sm:w-auto sm:gap-2 sm:px-4"
        >
          <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
        </a>
      )}
    </div>
  );
}

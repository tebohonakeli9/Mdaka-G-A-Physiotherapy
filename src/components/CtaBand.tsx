import { MessageCircle, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/siteHelpers';
import { Reveal } from './Reveal';

export function CtaBand() {
  const whatsappUrl = buildWhatsAppUrl(siteData.whatsappNumber);

  return (
    <section
      aria-label="Contact call to action"
      className="bg-gradient-to-r from-[#0A2A6B] via-[#1E5FD0] to-[#0A2A6B] py-14 text-white sm:py-16"
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {siteData.ctaBand.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/90 sm:text-lg">
            {siteData.ctaBand.subtext}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-2xl bg-white px-6 py-3 text-base font-semibold whitespace-nowrap text-[#0A2A6B] shadow-md transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#E8F2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-[#1E5FD0]" aria-hidden="true" />
                <span>{siteData.hero.whatsappCtaLabel} ({siteData.phoneWhatsappDisplay})</span>
              </a>
            )}

            <a
              href={`tel:${siteData.phoneLandlineTel}`}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-2xl border border-white/40 bg-white/15 px-6 py-3 text-base font-semibold whitespace-nowrap text-white backdrop-blur-xs transition-all duration-150 hover:-translate-y-0.5 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{siteData.hero.callCtaLabel} ({siteData.phoneLandlineDisplay})</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

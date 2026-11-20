import { Check, Home, MessageCircle } from 'lucide-react';
import { siteData } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/siteHelpers';
import { Reveal } from './Reveal';

export function PhysioAtHomeSection() {
  const whatsappUrl = buildWhatsAppUrl(
    siteData.whatsappNumber,
    siteData.physioAtHome.whatsappPrefill
  );

  return (
    <section
      id="physio-at-home"
      className="bg-gradient-to-b from-[#FFFFFF] via-[#E8F2FF] to-[#E8F2FF]/60 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-[#1E5FD0]/20 bg-white p-8 shadow-[0_14px_34px_rgba(30,95,208,0.09)] sm:p-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <p className="text-sm font-semibold text-[#1E5FD0]">
                  {siteData.physioAtHome.sectionHeading}
                </p>

                <div className="mt-2 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E8F2FF] text-[#0A2A6B]">
                    <Home className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="font-script text-4xl font-bold text-[#0A2A6B] sm:text-5xl">
                    {siteData.physioAtHome.brandTitle}
                  </h2>
                </div>

                <p className="mt-4 text-base leading-relaxed text-[#0A2A6B]/85 sm:text-lg">
                  {siteData.physioAtHome.intro}
                </p>

                <ul className="mt-6 space-y-3">
                  {siteData.physioAtHome.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-base font-medium text-[#0A2A6B]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#E8F2FF] text-[#1E5FD0]">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full shrink-0 flex-col gap-3 lg:w-auto">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-2xl bg-[#1E5FD0] px-6 py-3.5 text-base font-semibold whitespace-nowrap text-white shadow-[0_10px_24px_rgba(30,95,208,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#0A2A6B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2A6B]"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>{siteData.physioAtHome.ctaLabel}</span>
                  </a>
                )}
                <p className="text-center text-xs font-medium text-[#0A2A6B]/70">
                  {siteData.operatingTimes.inHouseBadge}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

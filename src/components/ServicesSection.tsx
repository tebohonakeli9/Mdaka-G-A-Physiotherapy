import { Check, MessageCircle, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/siteHelpers';
import { IconResolver } from './IconResolver';
import { Reveal } from './Reveal';

export function ServicesSection() {
  const whatsappUrl = buildWhatsAppUrl(siteData.whatsappNumber);

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#FFFFFF] via-[#E8F2FF] to-[#E8F2FF]/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0A2A6B] sm:text-4xl">
              {siteData.services.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#0A2A6B]/80 sm:text-lg">
              {siteData.services.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.services.items.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.04}>
              <article className="flex h-full flex-col rounded-2xl border border-[#1E5FD0]/15 bg-white p-6 shadow-[0_8px_24px_rgba(30,95,208,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1E5FD0]/40 hover:shadow-[0_14px_30px_rgba(30,95,208,0.12)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F2FF] text-[#1E5FD0]">
                  <IconResolver name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0A2A6B]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0A2A6B]/80">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Checklist: Your Health is Our Priority */}
        <Reveal delay={0.12}>
          <div className="mt-10 rounded-2xl border border-[#1E5FD0]/20 bg-white p-6 shadow-[0_10px_28px_rgba(30,95,208,0.07)] sm:p-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-[#0A2A6B]">
                  {siteData.services.checklistHeading}
                </h3>
                <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {siteData.services.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-medium text-[#0A2A6B] sm:text-base"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#E8F2FF] text-[#1E5FD0]">
                        <Check className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-2xl bg-[#1E5FD0] px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white shadow-xs transition-colors hover:bg-[#0A2A6B]"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{siteData.hero.whatsappCtaLabel}</span>
                  </a>
                )}
                <a
                  href={`tel:${siteData.phoneLandlineTel}`}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-2xl border border-[#0A2A6B]/20 bg-[#E8F2FF] px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-[#0A2A6B] transition-colors hover:bg-[#dcebff]"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{siteData.hero.callCtaLabel} ({siteData.phoneLandlineDisplay})</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

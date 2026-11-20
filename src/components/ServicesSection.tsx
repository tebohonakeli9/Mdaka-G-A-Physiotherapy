import { Phone } from 'lucide-react';
import { siteData } from '../data/siteData';
import { hasFieldValue } from '../utils/siteHelpers';
import { IconResolver } from './IconResolver';
import { ImageWithFallback } from './ImageWithFallback';
import { Reveal } from './Reveal';

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#FFFFFF] via-[#E6FFFA] to-[#CFF7F1]/70 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0B7F73] sm:text-4xl">
              {siteData.services.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#12343B]/85 sm:text-lg">
              {siteData.services.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.services.items.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.04}>
              <article className="flex h-full flex-col rounded-2xl border border-[#0FA896]/15 bg-white p-6 shadow-[0_8px_24px_rgba(18,52,59,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0FA896]/40 hover:shadow-[0_14px_30px_rgba(15,168,150,0.12)]">
                {hasFieldValue(service.image) ? (
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    fallbackIcon={service.icon}
                    wrapperClassName="mb-4 h-36 w-full overflow-hidden rounded-xl bg-[#E6FFFA]"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6FFFA] text-[#0FA896]">
                    <IconResolver name={service.icon} className="h-6 w-6" />
                  </div>
                )}

                <h3 className="font-display text-lg font-bold text-[#0B7F73]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#12343B]/80">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#0FA896]/20 bg-white/90 p-6 shadow-xs sm:flex-row sm:items-center">
            <p className="text-base font-medium text-[#12343B]">
              {siteData.services.note}
            </p>
            <a
              href={`tel:${siteData.phoneMobileTel}`}
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-2xl bg-[#FFC53D] px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-[#12343B] shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#f6b824] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B7F73]"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Call {siteData.phoneMobileDisplay}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

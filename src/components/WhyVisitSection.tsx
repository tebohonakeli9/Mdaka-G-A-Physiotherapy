import { siteData } from '../data/siteData';
import { IconResolver } from './IconResolver';
import { Reveal } from './Reveal';

export function WhyVisitSection() {
  return (
    <section
      aria-labelledby="why-visit-heading"
      className="bg-gradient-to-b from-[#FFFFFF] via-[#E6FFFA] to-[#CFF7F1]/60 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2
              id="why-visit-heading"
              className="font-display text-3xl font-extrabold tracking-tight text-[#0B7F73] sm:text-4xl"
            >
              {siteData.whyVisitUs.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#12343B]/85 sm:text-lg">
              {siteData.whyVisitUs.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.whyVisitUs.items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <div className="h-full rounded-2xl border border-[#0FA896]/15 bg-white p-6 shadow-[0_8px_24px_rgba(18,52,59,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0FA896]/35 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6FFFA] text-[#0FA896]">
                  <IconResolver name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#0B7F73]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#12343B]/80">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

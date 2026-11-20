import { siteData } from '../data/siteData';
import { IconResolver } from './IconResolver';
import { Reveal } from './Reveal';

export function HealthTipsSection() {
  return (
    <section
      id="health-tips"
      className="bg-gradient-to-b from-[#FFFFFF] via-[#E6FFFA] to-[#CFF7F1]/55 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0B7F73] sm:text-4xl">
                {siteData.healthTips.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#12343B]/85 sm:text-lg">
                {siteData.healthTips.intro}
              </p>
            </div>
            <p className="text-sm font-medium text-[#0B7F73]">
              {siteData.healthTips.disclaimer}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.healthTips.items.map((tip, idx) => (
            <Reveal key={tip.title} delay={idx * 0.05}>
              <article className="h-full rounded-2xl border border-[#0FA896]/15 bg-white p-6 shadow-[0_8px_24px_rgba(18,52,59,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0FA896]/35 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E6FFFA] text-[#0FA896]">
                  <IconResolver name={tip.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#0B7F73]">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#12343B]/80">
                  {tip.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

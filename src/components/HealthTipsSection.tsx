import { siteData } from '../data/siteData';
import { IconResolver } from './IconResolver';
import { Reveal } from './Reveal';

export function HealthTipsSection() {
  return (
    <section
      id="health-tips"
      className="bg-gradient-to-b from-[#FFFFFF] via-[#E8F2FF] to-[#E8F2FF]/60 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0A2A6B] sm:text-4xl">
                {siteData.healthTips.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#0A2A6B]/80 sm:text-lg">
                {siteData.healthTips.intro}
              </p>
            </div>
            <p className="text-sm font-medium text-[#1E5FD0]">
              {siteData.healthTips.disclaimer}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteData.healthTips.items.map((tip, idx) => (
            <Reveal key={tip.title} delay={idx * 0.05}>
              <article className="h-full rounded-2xl border border-[#1E5FD0]/15 bg-white p-6 shadow-[0_8px_24px_rgba(30,95,208,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1E5FD0]/35 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F2FF] text-[#1E5FD0]">
                  <IconResolver name={tip.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#0A2A6B]">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0A2A6B]/80">
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

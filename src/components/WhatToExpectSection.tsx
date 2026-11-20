import { siteData } from '../data/siteData';
import { Reveal } from './Reveal';

export function WhatToExpectSection() {
  return (
    <section
      id="what-to-expect"
      className="bg-gradient-to-b from-[#CFF7F1]/40 via-[#FFFFFF] to-[#FFFFFF] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0B7F73] sm:text-4xl">
              {siteData.whatToExpect.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#12343B]/85 sm:text-lg">
              {siteData.whatToExpect.intro}
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12">
          {/* Desktop horizontal connector line */}
          <div
            aria-hidden="true"
            className="absolute top-7 right-12 left-12 hidden h-0.5 bg-gradient-to-r from-[#0FA896]/25 via-[#0FA896]/45 to-[#0FA896]/25 lg:block"
          />

          <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {siteData.whatToExpect.steps.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.06}>
                <li className="relative flex h-full flex-col rounded-2xl border border-[#0FA896]/15 bg-white p-6 shadow-[0_8px_24px_rgba(18,52,59,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0FA896]/35 hover:shadow-md">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0FA896] font-display text-lg font-extrabold tabular-nums text-white shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#0B7F73]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#12343B]/80">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

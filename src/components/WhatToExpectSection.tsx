import { siteData } from '../data/siteData';
import { Reveal } from './Reveal';

export function WhatToExpectSection() {
  return (
    <section
      id="what-to-expect"
      className="bg-gradient-to-b from-[#E8F2FF]/45 via-[#FFFFFF] to-[#FFFFFF] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0A2A6B] sm:text-4xl">
              {siteData.whatToExpect.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#0A2A6B]/80 sm:text-lg">
              {siteData.whatToExpect.intro}
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute top-7 right-12 left-12 hidden h-0.5 bg-gradient-to-r from-[#1E5FD0]/20 via-[#1E5FD0]/45 to-[#1E5FD0]/20 lg:block"
          />

          <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {siteData.whatToExpect.steps.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.06}>
                <li className="relative flex h-full flex-col rounded-2xl border border-[#1E5FD0]/15 bg-white p-6 shadow-[0_8px_24px_rgba(30,95,208,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1E5FD0]/35 hover:shadow-md">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E5FD0] font-display text-lg font-extrabold tabular-nums text-white shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#0A2A6B]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#0A2A6B]/80">
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

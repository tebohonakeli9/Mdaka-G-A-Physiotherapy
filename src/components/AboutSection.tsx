import { siteData } from '../data/siteData';
import { IconResolver } from './IconResolver';
import { Reveal } from './Reveal';

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#E8F2FF]/45 via-[#FFFFFF] to-[#FFFFFF] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0A2A6B] sm:text-4xl">
              {siteData.about.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed font-medium text-[#0A2A6B]">
              {siteData.about.intro}
            </p>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-[#0A2A6B]/80">
              {siteData.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="rounded-2xl border border-[#1E5FD0]/15 bg-[#E8F2FF]/70 p-6 shadow-[0_12px_28px_rgba(30,95,208,0.08)] sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#1E5FD0] uppercase">
                {siteData.practiceName}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-[#0A2A6B]">
                {siteData.practitionerTitle}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#0A2A6B]/75">
                {siteData.practiceNumber} · {siteData.town}
              </p>
              <div className="mt-6 border-t border-[#1E5FD0]/15 pt-5">
                <p className="font-display text-base font-bold text-[#0A2A6B]">
                  {siteData.taglines.primary}
                </p>
                <p className="mt-1.5 text-sm text-[#0A2A6B]/80">
                  {siteData.operatingTimes.paymentHighlight} · {siteData.operatingTimes.sessionDuration}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Four tagline value cards */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.about.values.map((value, idx) => (
            <Reveal key={value.title} delay={idx * 0.05}>
              <div className="h-full rounded-2xl border border-[#1E5FD0]/15 bg-[#F7FAFF] p-6 shadow-[0_8px_20px_rgba(30,95,208,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1E5FD0]/35 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F2FF] text-[#1E5FD0]">
                  <IconResolver name={value.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#0A2A6B]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0A2A6B]/80">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

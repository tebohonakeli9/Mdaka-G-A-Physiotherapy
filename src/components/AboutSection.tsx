import { siteData } from '../data/siteData';
import { IconResolver } from './IconResolver';
import { ImageWithFallback } from './ImageWithFallback';
import { Reveal } from './Reveal';

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#E6FFFA]/45 via-[#FFFFFF] to-[#FFFFFF] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0B7F73] sm:text-4xl">
              {siteData.about.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed font-medium text-[#12343B]">
              {siteData.about.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="flex flex-col justify-between gap-6 lg:col-span-6">
            <div className="space-y-4 text-base leading-relaxed text-[#12343B]/85">
              {siteData.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Practitioner card: name and profession as text only */}
            <div className="rounded-2xl border border-[#0FA896]/20 bg-[#E6FFFA]/65 p-6 shadow-xs">
              <p className="font-display text-xl font-bold text-[#0B7F73]">
                {siteData.practitioner}
              </p>
              <p className="mt-1 text-sm font-medium text-[#12343B]/85">
                {siteData.profession}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6">
            <ImageWithFallback
              src={siteData.about.image}
              alt={siteData.about.imageAlt}
              fallbackIcon="Stethoscope"
              fallbackLabel={siteData.practiceName}
              wrapperClassName="h-full min-h-[280px] overflow-hidden rounded-2xl border border-[#0FA896]/15 bg-[#E6FFFA] shadow-[0_14px_34px_rgba(18,52,59,0.08)]"
              className="h-full min-h-[280px] w-full object-cover lg:h-full"
            />
          </Reveal>
        </div>

        {/* Row of four care values */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.about.values.map((value, idx) => (
            <Reveal key={value.title} delay={idx * 0.05}>
              <div className="h-full rounded-2xl border border-[#0FA896]/15 bg-[#F8FFFD] p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0FA896]/35 hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#CFF7F1] text-[#0B7F73]">
                  <IconResolver name={value.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-[#0B7F73]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#12343B]/80">
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

import { siteData } from '../data/siteData';
import { IconResolver } from './IconResolver';
import { Reveal } from './Reveal';

interface QuickInfoStripProps {
  onScrollToSection: (sectionId: string) => void;
}

export function QuickInfoStrip({ onScrollToSection }: QuickInfoStripProps) {
  return (
    <section
      aria-label="Practice quick details"
      className="bg-gradient-to-b from-[#FFFFFF] to-[#E6FFFA]/45 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.quickInfo.map((item, idx) => {
            const isHash = item.href.startsWith('#');
            const cardInner = (
              <div className="flex h-full items-center gap-4 rounded-2xl border border-[#0FA896]/15 bg-white p-5 shadow-[0_8px_24px_rgba(18,52,59,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0FA896]/35 hover:shadow-[0_12px_28px_rgba(15,168,150,0.12)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E6FFFA] text-[#0FA896]">
                  <IconResolver name={item.icon} className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#0B7F73]">{item.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-[#12343B] sm:text-base">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return (
              <Reveal key={item.id} delay={idx * 0.05}>
                {isHash ? (
                  <a
                    href={`/#${item.href.slice(1)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onScrollToSection(item.href.slice(1));
                    }}
                    className="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0FA896]"
                  >
                    {cardInner}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    className="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0FA896]"
                  >
                    {cardInner}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

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
      className="bg-gradient-to-b from-[#FFFFFF] to-[#E8F2FF]/45 py-8 sm:py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.quickInfo.map((item, idx) => {
            const isHash = item.href.startsWith('#');
            const isExternal = item.href.startsWith('http');

            const cardInner = (
              <div className="flex h-full items-center gap-4 rounded-2xl border border-[#1E5FD0]/15 bg-white p-5 shadow-[0_8px_24px_rgba(30,95,208,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1E5FD0]/35 hover:shadow-[0_12px_28px_rgba(30,95,208,0.12)]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E8F2FF] text-[#1E5FD0]">
                  <IconResolver name={item.icon} className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#1E5FD0]">{item.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-[#0A2A6B] sm:text-base">
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
                    className="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5FD0]"
                  >
                    {cardInner}
                  </a>
                ) : (
                  <a
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5FD0]"
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

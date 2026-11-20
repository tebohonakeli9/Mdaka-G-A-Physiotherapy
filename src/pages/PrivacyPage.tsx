import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';

export function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E6FFFA] via-[#FFFFFF] to-[#FFFFFF] pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-2xl border border-[#0FA896]/25 bg-white px-4 py-2 text-sm font-semibold text-[#0B7F73] shadow-xs transition-colors hover:bg-[#E6FFFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0FA896]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>

        <article className="mt-8 rounded-2xl border border-[#0FA896]/15 bg-white p-6 shadow-[0_12px_32px_rgba(18,52,59,0.06)] sm:p-10">
          <p className="text-sm font-medium text-[#0FA896]">
            {siteData.practiceName} · {siteData.privacy.updated}
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#0B7F73] sm:text-4xl">
            {siteData.privacy.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#12343B]/85">
            {siteData.privacy.intro}
          </p>

          <div className="mt-8 space-y-6 border-t border-[#0FA896]/15 pt-8">
            {siteData.privacy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-lg font-bold text-[#0B7F73]">
                  {section.heading}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-[#12343B]/85">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-[#0FA896]/15 pt-6">
            <a
              href={`tel:${siteData.phoneMobileTel}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-2xl bg-[#FFC53D] px-5 py-2.5 text-sm font-semibold text-[#12343B] shadow-xs transition-colors hover:bg-[#f6b824]"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Call {siteData.phoneMobileDisplay}</span>
            </a>
            <a
              href={`tel:${siteData.phoneLandlineTel}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-2xl border border-[#0FA896]/25 bg-[#E6FFFA] px-5 py-2.5 text-sm font-semibold text-[#0B7F73] transition-colors hover:bg-[#CFF7F1]"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Call {siteData.phoneLandlineDisplay}</span>
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}

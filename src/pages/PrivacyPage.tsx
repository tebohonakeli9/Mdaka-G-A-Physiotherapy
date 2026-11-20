import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/siteHelpers';

export function PrivacyPage() {
  const whatsappUrl = buildWhatsAppUrl(siteData.whatsappNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E8F2FF] via-[#FFFFFF] to-[#FFFFFF] pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-2xl border border-[#1E5FD0]/25 bg-white px-4 py-2 text-sm font-semibold text-[#0A2A6B] shadow-xs transition-colors hover:bg-[#E8F2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5FD0]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0 text-[#1E5FD0]" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>

        <article className="mt-8 rounded-2xl border border-[#1E5FD0]/15 bg-white p-6 shadow-[0_12px_32px_rgba(30,95,208,0.07)] sm:p-10">
          <p className="text-sm font-medium text-[#1E5FD0]">
            {siteData.practiceName} · {siteData.practiceNumber} · {siteData.privacy.updated}
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#0A2A6B] sm:text-4xl">
            {siteData.privacy.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#0A2A6B]/85">
            {siteData.privacy.intro}
          </p>

          <div className="mt-8 space-y-6 border-t border-[#1E5FD0]/15 pt-8">
            {siteData.privacy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-lg font-bold text-[#0A2A6B]">
                  {section.heading}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-[#0A2A6B]/85">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-[#1E5FD0]/15 pt-6">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-2xl bg-[#1E5FD0] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#0A2A6B]"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp {siteData.phoneWhatsappDisplay}</span>
              </a>
            )}
            <a
              href={`tel:${siteData.phoneLandlineTel}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-2xl border border-[#1E5FD0]/25 bg-[#E8F2FF] px-5 py-2.5 text-sm font-semibold text-[#0A2A6B] transition-colors hover:bg-[#dbeaff]"
            >
              <Phone className="h-4 w-4 shrink-0 text-[#1E5FD0]" aria-hidden="true" />
              <span>Call {siteData.phoneLandlineDisplay}</span>
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}

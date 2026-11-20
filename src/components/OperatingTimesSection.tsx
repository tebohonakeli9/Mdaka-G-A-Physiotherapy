import { Clock, CreditCard, MapPin, Timer } from 'lucide-react';
import { siteData } from '../data/siteData';
import { Reveal } from './Reveal';

export function OperatingTimesSection() {
  return (
    <section
      id="hours"
      className="bg-gradient-to-b from-[#E8F2FF]/50 via-[#FFFFFF] to-[#FFFFFF] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0A2A6B] sm:text-4xl">
              {siteData.operatingTimes.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#0A2A6B]/80 sm:text-lg">
              {siteData.operatingTimes.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Operating Times Poster-Style Card */}
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-[#1E5FD0]/20 bg-white shadow-[0_12px_32px_rgba(30,95,208,0.08)]">
              <div className="flex items-center gap-3 bg-[#0A2A6B] px-6 py-4 text-white">
                <Clock className="h-5 w-5 text-[#E8F2FF]" aria-hidden="true" />
                <h3 className="font-display text-lg font-bold">
                  Practice Schedule
                </h3>
              </div>

              <div className="divide-y divide-[#1E5FD0]/10 px-6">
                {siteData.operatingTimes.schedule.map((entry) => (
                  <div
                    key={entry.day}
                    className="flex flex-col justify-between gap-1 py-4 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <div>
                      <p className="font-display text-base font-bold text-[#0A2A6B]">
                        {entry.day}
                      </p>
                      {entry.note && (
                        <p className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-[#1E5FD0]">
                          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                          <span>{entry.note}</span>
                        </p>
                      )}
                    </div>
                    <p
                      className={`font-display text-base font-bold tabular-nums ${
                        entry.closed ? 'text-[#D40000]' : 'text-[#0A2A6B]'
                      }`}
                    >
                      {entry.hours}
                    </p>
                  </div>
                ))}
              </div>

              {/* Yellow #FFE600 badge exclusively for In-House Calls */}
              <div className="border-t border-[#1E5FD0]/10 bg-[#F7FAFF] p-5">
                <div className="rounded-2xl bg-[#FFE600] px-4 py-3 text-center text-sm font-extrabold tracking-tight text-[#0A2A6B] shadow-xs sm:text-base">
                  {siteData.operatingTimes.inHouseBadge}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Payment & Session Duration Highlight Cards */}
          <Reveal delay={0.08} className="space-y-5 lg:col-span-5">
            <div className="rounded-2xl border border-[#1E5FD0]/20 bg-[#E8F2FF]/75 p-6 shadow-[0_8px_24px_rgba(30,95,208,0.07)] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1E5FD0] text-white">
                <CreditCard className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-[#0A2A6B]">
                {siteData.operatingTimes.paymentHighlight}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0A2A6B]/80 sm:text-base">
                Flexible payment options are available for both private cash visits and medical aid patients.
              </p>
            </div>

            <div className="rounded-2xl border border-[#1E5FD0]/20 bg-white p-6 shadow-[0_8px_24px_rgba(30,95,208,0.07)] sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F2FF] text-[#1E5FD0]">
                <Timer className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-[#0A2A6B]">
                {siteData.operatingTimes.sessionDuration}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0A2A6B]/80 sm:text-base">
                Dedicated appointment length tailored to your assessment and treatment needs.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

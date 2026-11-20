import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { siteData } from '../data/siteData';
import { Reveal } from './Reveal';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-[#CFF7F1]/35 via-[#FFFFFF] to-[#FFFFFF] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0B7F73] sm:text-4xl">
              {siteData.faq.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#12343B]/85 sm:text-lg">
              {siteData.faq.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-3">
          {siteData.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <Reveal key={item.question} delay={idx * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-[#0FA896]/20 bg-white shadow-xs transition-colors hover:border-[#0FA896]/40">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(idx)}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 px-6 py-4 text-left font-display text-base font-bold text-[#0B7F73] transition-colors hover:bg-[#E6FFFA]/50 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0FA896] sm:text-lg"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 text-[#0FA896] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#0FA896]/10 px-6 pt-3 pb-5 text-base leading-relaxed text-[#12343B]/85">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

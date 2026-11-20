import { useCallback, useEffect, useRef, useState } from 'react';
import type { TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { siteData } from '../data/siteData';
import { cycleGalleryIndex } from '../utils/siteHelpers';
import { ImageWithFallback } from './ImageWithFallback';
import { Reveal } from './Reveal';

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const items = siteData.gallery.items;

  const handleClose = useCallback(() => setActiveIndex(null), []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : cycleGalleryIndex(prev, 'prev', items.length)
    );
  }, [items.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : cycleGalleryIndex(prev, 'next', items.length)
    );
  }, [items.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, handleClose, handlePrev, handleNext]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-[#CFF7F1]/35 via-[#FFFFFF] to-[#FFFFFF] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0B7F73] sm:text-4xl">
              {siteData.gallery.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#12343B]/85 sm:text-lg">
              {siteData.gallery.intro}
            </p>
          </div>
        </Reveal>

        {/* Masonry grid */}
        <div className="mt-10 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-4">
          {items.map((item, idx) => {
            const aspectClass =
              item.aspect === 'portrait'
                ? 'aspect-[3/4]'
                : item.aspect === 'square'
                  ? 'aspect-square'
                  : 'aspect-[4/3]';

            return (
              <Reveal key={item.id} delay={idx * 0.04} className="break-inside-avoid">
                <button
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Open gallery image: ${item.caption}`}
                  className="group relative block w-full overflow-hidden rounded-2xl border border-[#0FA896]/15 bg-[#E6FFFA] text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0FA896]"
                >
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    fallbackIcon="Activity"
                    fallbackLabel={item.caption}
                    wrapperClassName={`w-full overflow-hidden ${aspectClass}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="flex items-center justify-between gap-2 bg-white px-4 py-3">
                    <span className="text-sm font-medium text-[#12343B]">
                      {item.caption}
                    </span>
                    <Expand
                      className="h-4 w-4 shrink-0 text-[#0FA896] transition-transform duration-200 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Full-screen Lightbox */}
      {activeItem && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.caption}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0B2227]/90 p-4 backdrop-blur-xs"
        >
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close gallery lightbox"
            className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous gallery image"
            className="absolute top-1/2 left-3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/15 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="relative z-10 flex max-h-[88vh] w-full max-w-4xl flex-col items-center">
            <div className="w-full overflow-hidden rounded-2xl bg-[#12343B] shadow-2xl">
              <ImageWithFallback
                src={activeItem.src}
                alt={activeItem.alt}
                fallbackIcon="Activity"
                fallbackLabel={activeItem.caption}
                wrapperClassName="flex max-h-[72vh] w-full items-center justify-center bg-[#12343B]"
                className="max-h-[72vh] w-full object-contain"
              />
            </div>
            <div className="mt-4 flex w-full items-center justify-between px-1 text-white">
              <p className="text-base font-medium">{activeItem.caption}</p>
              <p className="text-sm tabular-nums text-white/75">
                {activeIndex + 1} / {items.length}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next gallery image"
            className="absolute top-1/2 right-3 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-2xl bg-white/15 text-white transition-colors hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white sm:right-6"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}

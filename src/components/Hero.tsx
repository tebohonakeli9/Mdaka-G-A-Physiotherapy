import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';
import {
  buildGoogleMapsDirectionsUrl,
  buildWhatsAppUrl,
  hasFieldValue,
} from '../utils/siteHelpers';

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [cutoutFailed, setCutoutFailed] = useState(false);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const layer1TextRef = useRef<HTMLHeadingElement | null>(null);
  const layer2CutoutRef = useRef<HTMLDivElement | null>(null);
  const layer3CopyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion || cutoutFailed) return;
    if (typeof window === 'undefined') return;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return;

    const stage = stageRef.current;
    if (!stage) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;
    let active = true;

    const applyTransforms = (nx: number, ny: number) => {
      const imgX = nx * 14;
      const imgY = ny * 14;
      const textX = -nx * 5;
      const textY = -ny * 5;

      if (layer2CutoutRef.current) {
        layer2CutoutRef.current.style.transform = `translate3d(${imgX.toFixed(2)}px, ${imgY.toFixed(2)}px, 0)`;
      }
      const textTransform = `translate3d(${textX.toFixed(2)}px, ${textY.toFixed(2)}px, 0)`;
      if (layer1TextRef.current) {
        layer1TextRef.current.style.transform = textTransform;
      }
      if (layer3CopyRef.current) {
        layer3CopyRef.current.style.transform = textTransform;
      }
    };

    const tick = () => {
      if (!active) return;
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      applyTransforms(currentX, currentY);

      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const startLoop = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      targetX = Math.max(-1, Math.min(1, nx));
      targetY = Math.max(-1, Math.min(1, ny));
      startLoop();
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      startLoop();
    };

    stage.addEventListener('pointermove', handlePointerMove, { passive: true });
    stage.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      active = false;
      if (rafId) window.cancelAnimationFrame(rafId);
      stage.removeEventListener('pointermove', handlePointerMove);
      stage.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [prefersReducedMotion, cutoutFailed]);

  const hasCutout = hasFieldValue(siteData.hero.cutoutImage) && !cutoutFailed;
  const whatsappUrl = hasFieldValue(siteData.whatsappNumber)
    ? buildWhatsAppUrl(siteData.whatsappNumber)
    : '';
  const directionsUrl = buildGoogleMapsDirectionsUrl(siteData.mapQuery);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#E8F2FF] via-[#F4F8FF] to-[#FFFFFF] pt-20 pb-10 sm:pt-24 sm:pb-14"
    >
      {/* Subtle light sky decorative shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/75 blur-3xl" />
        <div className="absolute top-1/4 -right-20 h-96 w-96 rounded-full bg-[#1E5FD0]/10 blur-3xl" />
        <div className="absolute bottom-8 left-1/3 h-64 w-64 rounded-full bg-white/60 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop 3-layer cutout headline box; clean stacked cutout on phones (behind-text hidden) */}
        <div
          ref={stageRef}
          data-testid="hero-three-layer-stage"
          className={`relative mx-auto w-full select-none ${
            hasCutout
              ? 'flex items-center justify-center md:block md:h-[30rem] lg:h-[33.5rem]'
              : 'flex min-h-[15rem] items-center justify-center py-6 sm:min-h-[20rem]'
          }`}
        >
          {/* Layer 1: Primary headline on desktop (hidden on phones for clean stacked hero) */}
          <h1
            ref={layer1TextRef}
            className={`${
              hasCutout ? 'hidden md:flex md:absolute md:inset-0' : 'flex relative'
            } z-10 flex-col items-center justify-center text-center hero-headline-type text-[#1E5FD0] will-change-transform`}
          >
            <span className="block">{siteData.hero.topWord}</span>
            <span className="block">{siteData.hero.bottomWord}</span>
          </h1>

          {/* Layer 2: Transparent PNG subject cutout */}
          {hasCutout && (
            <div className="pointer-events-none relative z-20 flex items-end justify-center md:absolute md:inset-0 md:overflow-hidden">
              <div
                ref={layer2CutoutRef}
                className="flex h-full items-end justify-center will-change-transform"
              >
                <img
                  src={siteData.hero.cutoutImage}
                  alt={siteData.hero.cutoutAlt}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onError={() => setCutoutFailed(true)}
                  className="h-auto max-h-[300px] w-[72vw] max-w-[300px] object-contain object-bottom drop-shadow-[0_14px_28px_rgba(10,42,107,0.18)] md:max-h-[96%] md:w-[32vw] md:max-w-[430px] lg:w-[27vw]"
                />
              </div>
            </div>
          )}

          {/* Layer 3: Identical copy clipped to bottom 50% (desktop only) */}
          {hasCutout && (
            <div
              ref={layer3CopyRef}
              aria-hidden="true"
              data-testid="hero-layer-three-copy"
              className="pointer-events-none absolute inset-0 z-30 hidden flex-col items-center justify-center text-center hero-headline-type hero-copy-clip text-[#1E5FD0] [text-shadow:0_2px_14px_rgba(255,255,255,0.72),0_0_3px_rgba(255,255,255,0.9)] will-change-transform md:flex"
            >
              <span className="block">{siteData.hero.topWord}</span>
              <span className="block">{siteData.hero.bottomWord}</span>
            </div>
          )}
        </div>

        {/* Practice identity, tagline, intro, and action buttons */}
        <div className="relative z-40 mx-auto mt-4 max-w-3xl text-center sm:mt-5">
          {/* Mobile primary heading when desktop behind-text is hidden */}
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#0A2A6B] md:hidden">
            {siteData.hero.title}
          </h1>
          <p className="hidden font-display text-2xl font-extrabold tracking-tight text-[#0A2A6B] sm:text-3xl md:block">
            {siteData.hero.title}
          </p>

          <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm text-[#0A2A6B]/85 sm:text-base">
            <span className="font-semibold text-[#1E5FD0]">
              {siteData.hero.practitionerLine}
            </span>
            <span aria-hidden="true" className="text-[#0A2A6B]/40">
              ·
            </span>
            <span className="text-xs font-medium text-[#0A2A6B]/75 sm:text-sm">
              {siteData.practiceNumber}
            </span>
          </div>

          <p className="mt-2 font-display text-sm font-semibold tracking-wide text-[#0A2A6B] sm:text-base">
            {siteData.taglines.primary}
          </p>

          <p className="mx-auto mt-2.5 max-w-2xl text-base leading-relaxed text-[#0A2A6B]/80">
            {siteData.hero.intro}
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-2xl bg-[#1E5FD0] px-6 py-3 text-base font-semibold whitespace-nowrap text-white shadow-[0_10px_24px_rgba(30,95,208,0.28)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#0A2A6B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2A6B] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{siteData.hero.whatsappCtaLabel}</span>
              </a>
            )}

            <a
              href={`tel:${siteData.phoneLandlineTel}`}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-2xl bg-[#0A2A6B] px-6 py-3 text-base font-semibold whitespace-nowrap text-white shadow-[0_8px_20px_rgba(10,42,107,0.2)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1E5FD0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5FD0] sm:w-auto"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{siteData.hero.callCtaLabel}</span>
            </a>

            {directionsUrl && (
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl border border-[#1E5FD0]/25 bg-white px-6 py-3 text-base font-semibold whitespace-nowrap text-[#0A2A6B] shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#1E5FD0] hover:bg-[#E8F2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5FD0] sm:w-auto"
              >
                <MapPin className="h-5 w-5 shrink-0 text-[#1E5FD0]" aria-hidden="true" />
                <span>{siteData.hero.directionsCtaLabel}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

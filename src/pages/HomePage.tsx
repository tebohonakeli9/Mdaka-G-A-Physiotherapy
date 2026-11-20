import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { QuickInfoStrip } from '../components/QuickInfoStrip';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { OperatingTimesSection } from '../components/OperatingTimesSection';
import { PhysioAtHomeSection } from '../components/PhysioAtHomeSection';
import { WhatToExpectSection } from '../components/WhatToExpectSection';
import { GallerySection } from '../components/GallerySection';
import { HealthTipsSection } from '../components/HealthTipsSection';
import { FaqSection } from '../components/FaqSection';
import { CtaBand } from '../components/CtaBand';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onScrollToSection: (sectionId: string) => void;
}

export function HomePage({ onScrollToSection }: HomePageProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const timer = window.setTimeout(() => {
        onScrollToSection(targetId);
      }, 60);
      return () => window.clearTimeout(timer);
    }
  }, [location.hash, onScrollToSection]);

  return (
    <main className="pb-14 md:pb-0">
      <Hero />
      <QuickInfoStrip onScrollToSection={onScrollToSection} />
      <AboutSection />
      <ServicesSection />
      <OperatingTimesSection />
      <PhysioAtHomeSection />
      <WhatToExpectSection />
      <GallerySection />
      <HealthTipsSection />
      <FaqSection />
      <CtaBand />
      <ContactSection />
    </main>
  );
}

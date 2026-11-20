import { useCallback, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lenis from 'lenis';
import { useReducedMotion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';

function AppShell() {
  const prefersReducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  const scrollToSection = useCallback(
    (sectionId: string) => {
      const target = document.getElementById(sectionId);
      if (!target) return;

      if (lenisRef.current && !prefersReducedMotion) {
        lenisRef.current.scrollTo(target, { offset: -72 });
      } else {
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    },
    [prefersReducedMotion]
  );

  return (
    <div className="min-h-screen bg-white text-[#0A2A6B]">
      <Navbar onScrollToSection={scrollToSection} />
      <Routes>
        <Route path="/" element={<HomePage onScrollToSection={scrollToSection} />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<HomePage onScrollToSection={scrollToSection} />} />
      </Routes>
      <Footer onScrollToSection={scrollToSection} />
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

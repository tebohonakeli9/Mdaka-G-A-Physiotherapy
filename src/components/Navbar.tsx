import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { siteData } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/siteHelpers';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export function Navbar({ onScrollToSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const whatsappUrl = buildWhatsAppUrl(siteData.whatsappNumber);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    onScrollToSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 ${
        scrolled || mobileOpen
          ? 'bg-white/95 shadow-[0_6px_24px_rgba(10,42,107,0.08)] backdrop-blur-md'
          : 'bg-white/85 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[76px] sm:px-6 lg:px-8">
        <a
          href="/#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E5FD0]"
          aria-label={siteData.practiceName}
        >
          <img
            src={siteData.logoImage}
            alt={siteData.logoAlt}
            className="h-11 w-auto object-contain md:h-14"
          />
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-4 lg:flex xl:gap-6"
        >
          {siteData.navigation.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.id);
              }}
              className="shrink-0 text-sm font-medium whitespace-nowrap text-[#0A2A6B]/85 transition-colors hover:text-[#1E5FD0] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E5FD0]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href={`tel:${siteData.phoneLandlineTel}`}
            className="hidden shrink-0 items-center gap-2 rounded-2xl bg-[#1E5FD0] px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white shadow-[0_6px_16px_rgba(30,95,208,0.25)] transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#0A2A6B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2A6B] sm:inline-flex"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{siteData.hero.callCtaLabel}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1E5FD0]/20 bg-[#E8F2FF]/60 text-[#0A2A6B] transition-colors hover:bg-[#E8F2FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5FD0] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-[#1E5FD0]/15 bg-white px-4 pt-3 pb-5 shadow-lg lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {siteData.navigation.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className="flex min-h-[44px] items-center rounded-xl px-3 py-2 text-base font-medium text-[#0A2A6B] transition-colors hover:bg-[#E8F2FF] hover:text-[#1E5FD0]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[46px] items-center justify-center gap-2 rounded-2xl bg-[#1E5FD0] px-3 py-2.5 text-sm font-semibold text-white shadow-sm"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{siteData.hero.whatsappCtaLabel}</span>
                </a>
              )}
              <a
                href={`tel:${siteData.phoneLandlineTel}`}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[46px] items-center justify-center gap-2 rounded-2xl border border-[#0A2A6B]/20 bg-[#E8F2FF] px-3 py-2.5 text-sm font-semibold text-[#0A2A6B]"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{siteData.hero.callCtaLabel}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

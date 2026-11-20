import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { siteData } from '../data/siteData';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export function Navbar({ onScrollToSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
          ? 'bg-white/95 shadow-[0_4px_24px_rgba(18,52,59,0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a
          href="/#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="flex shrink-0 items-center gap-2.5 text-base font-bold tracking-tight whitespace-nowrap text-[#0B7F73] transition-colors hover:text-[#0FA896] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0FA896] sm:text-lg"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#0FA896] font-display text-sm font-extrabold text-white shadow-sm"
          >
            M
          </span>
          <span className="font-display whitespace-nowrap">{siteData.practiceName}</span>
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
              className="shrink-0 text-sm font-medium whitespace-nowrap text-[#12343B]/85 transition-colors hover:text-[#0B7F73] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0FA896]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href={`tel:${siteData.phoneMobileTel}`}
            className="hidden shrink-0 items-center gap-2 rounded-2xl bg-[#FFC53D] px-4 py-2 text-sm font-semibold whitespace-nowrap text-[#12343B] shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#f6b824] hover:shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B7F73] sm:inline-flex"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Call to Book</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#0FA896]/20 bg-white/90 text-[#12343B] shadow-xs transition-colors hover:bg-[#E6FFFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0FA896] lg:hidden"
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
          className="border-t border-[#0FA896]/15 bg-white px-4 pt-3 pb-5 shadow-lg lg:hidden"
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
                className="flex min-h-[44px] items-center rounded-xl px-3 py-2 text-base font-medium text-[#12343B] transition-colors hover:bg-[#E6FFFA] hover:text-[#0B7F73]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${siteData.phoneMobileTel}`}
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-[46px] items-center justify-center gap-2 rounded-2xl bg-[#FFC53D] px-4 py-3 text-base font-semibold text-[#12343B] shadow-sm transition-colors hover:bg-[#f6b824]"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Call to Book ({siteData.phoneMobileDisplay})</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

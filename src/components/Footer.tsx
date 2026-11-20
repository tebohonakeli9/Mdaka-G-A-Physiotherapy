import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { siteData } from '../data/siteData';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export function Footer({ onScrollToSection }: FooterProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    onScrollToSection(sectionId);
  };

  return (
    <footer className="border-t border-[#0FA896]/15 bg-[#E6FFFA]/60 text-[#12343B]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <a
              href="/#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className="inline-flex items-center gap-3 font-display text-lg font-bold text-[#0B7F73]"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0FA896] font-display text-base font-extrabold text-white shadow-xs"
              >
                M
              </span>
              <span>{siteData.practiceName}</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-[#12343B]/80">
              {siteData.practitioner} · {siteData.profession}
            </p>
            <p className="mt-1 text-sm text-[#12343B]/75">
              {siteData.town} · {siteData.postalCode}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5">
            <h2 className="font-display text-sm font-bold tracking-wide text-[#0B7F73]">
              Quick Links
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {siteData.navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`/#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.id);
                    }}
                    className="text-[#12343B]/85 transition-colors hover:text-[#0B7F73] hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-[#12343B]/85 transition-colors hover:text-[#0B7F73] hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact numbers */}
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-bold tracking-wide text-[#0B7F73]">
              Telephone
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${siteData.phoneMobileTel}`}
                  className="inline-flex items-center gap-2 font-medium text-[#12343B] transition-colors hover:text-[#0B7F73]"
                >
                  <Phone className="h-4 w-4 text-[#0FA896]" aria-hidden="true" />
                  <span>{siteData.phoneMobileDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteData.phoneLandlineTel}`}
                  className="inline-flex items-center gap-2 font-medium text-[#12343B] transition-colors hover:text-[#0B7F73]"
                >
                  <Phone className="h-4 w-4 text-[#0FA896]" aria-hidden="true" />
                  <span>{siteData.phoneLandlineDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#0FA896]/15 pt-6 text-xs text-[#12343B]/75 sm:flex-row sm:items-center sm:text-sm">
          <p>{siteData.footer.copyright}</p>
          <p>{siteData.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

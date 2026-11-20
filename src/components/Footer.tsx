import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';
import { buildWhatsAppUrl } from '../utils/siteHelpers';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export function Footer({ onScrollToSection }: FooterProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const whatsappUrl = buildWhatsAppUrl(siteData.whatsappNumber);

  const handleLinkClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    onScrollToSection(sectionId);
  };

  return (
    <footer className="bg-[#0A2A6B] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand with logo.png on a white rounded badge */}
          <div className="md:col-span-4">
            <a
              href="/#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className="inline-flex rounded-2xl bg-white px-4 py-2.5 shadow-sm transition-transform hover:scale-[1.02]"
              aria-label={siteData.practiceName}
            >
              <img
                src={siteData.logoImage}
                alt={siteData.logoAlt}
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="mt-4 font-display text-base font-bold text-white">
              {siteData.practiceName}
            </p>
            <p className="mt-1 text-sm text-white/85">
              {siteData.practitionerTitle} · {siteData.practiceNumber}
            </p>
            <p className="mt-1 text-sm text-white/75">{siteData.town}</p>
            <p className="mt-1 text-xs text-white/75">
              Saturday: {siteData.saturdayVenueAddress}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5">
            <h2 className="font-display text-sm font-bold tracking-wide text-[#E8F2FF]">
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
                    className="text-white/85 transition-colors hover:text-white hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy"
                  className="text-white/85 transition-colors hover:text-white hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact numbers */}
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-bold tracking-wide text-[#E8F2FF]">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {whatsappUrl && (
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-[#E8F2FF]"
                  >
                    <MessageCircle className="h-4 w-4 text-[#E8F2FF]" aria-hidden="true" />
                    <span>WhatsApp: {siteData.phoneWhatsappDisplay}</span>
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`tel:${siteData.phoneLandlineTel}`}
                  className="inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-[#E8F2FF]"
                >
                  <Phone className="h-4 w-4 text-[#E8F2FF]" aria-hidden="true" />
                  <span>Landline: {siteData.phoneLandlineDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/75 sm:flex-row sm:items-center sm:text-sm">
          <p>{siteData.footer.copyright} · {siteData.practiceNumber}</p>
          <p>{siteData.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

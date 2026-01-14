import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

type MobileLink = {
  label: string;
  to: string;
};

const MOBILE_LINKS: MobileLink[] = [
  { label: 'nav.about', to: '/about-us' },
  { label: 'nav.testimonials', to: '/testimonials' },
  { label: 'nav.faqs', to: '/faqs' },
  { label: 'nav.pricing', to: '/pricing' },
  { label: 'nav.projects', to: '/projects' },
  { label: 'nav.blog', to: '/blog' },
  { label: 'nav.contact', to: '/contact-us' },
];

export default function MobileNavbar() {
  const { t } = useI18n();
  const company = t<{ phone: string }>('company', { phone: '' });
  const phoneHref = company.phone.replace(/[^\d+]/g, '');
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="mobile-navbar offcanvas offcanvas-end border-0" tabIndex={-1} id="offcanvasExample">
          <div className="offcanvas-header">
              {isHome ? (
                <button
                  type="button"
                  className="bg-transparent border-0 p-0 d-block"
                  onClick={handleLogoClick}
                  aria-label="Scroll to top"
                >
                  <img src="/assets/images/renovia_logo.png" className="main-logo" alt="Renovia logo" />
                  <img src="/assets/images/renovia_logo.png" className="white-logo" alt="Renovia logo" />
                </button>
              ) : (
                <Link to="/" className="d-block">
                  <img src="/assets/images/renovia_logo.png" className="main-logo" alt="Renovia logo" />
                  <img src="/assets/images/renovia_logo.png" className="white-logo" alt="Renovia logo" />
                </Link>
              )}
              <button type="button" className="btn-close opacity-1" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i className="ti ti-x"></i>
              </button>
          </div>
          <div className="offcanvas-body">
              <ul className="mobile-menu">
                  {MOBILE_LINKS.map((link) => (
                      <li className="mobile-menu-list without-icon border-bottom" key={link.to}>
                          <Link to={link.to} className="nav-link">
                              {t(link.label)}
                          </Link>
                      </li>
                  ))}
              </ul>
              <div className="others-options d-flex d-sm-none flex-wrap align-items-center gap-4 mt-4">
                  <div className="gap-40 d-flex">
                      <a
                        href={`tel:${phoneHref}`}
                        className="d-flex align-items-center gap-10 text-decoration-none fw-medium call button"
                      >
                          <img src="/assets/images/head-phone.svg" alt="head-phon" />
                          <span className="text-secondary">{company.phone}</span>
                      </a>
                  </div>
                  <Link to="/request-a-quote" className="default-btn">
                      <div className="d-flex align-items-center gap-10">
                          {t('buttons.getFreeQuote')}
                          <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                      </div>
                  </Link>
              </div>
          </div>
      </div>
    </>
  );
}

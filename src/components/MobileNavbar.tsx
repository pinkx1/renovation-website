import { Link, useLocation } from 'react-router-dom';

type MobileLink = {
  label: string;
  to: string;
};

const MOBILE_LINKS: MobileLink[] = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact-us' },
];

export default function MobileNavbar() {
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
                              {link.label}
                          </Link>
                      </li>
                  ))}
              </ul>
              <div className="others-options d-flex d-sm-none flex-wrap align-items-center gap-4 mt-4">
                  <div className="gap-40 d-flex">
                      <a href="tel:+001(808)5550148" className="d-flex align-items-center gap-10 text-decoration-none fw-medium call button">
                          <img src="/assets/images/head-phone.svg" alt="head-phon" />
                          <span className="text-secondary">+001 (808) 5550148</span>
                      </a>
                  </div>
                  <Link to="/request-a-quote" className="default-btn">
                      <div className="d-flex align-items-center gap-10">
                          Get Free Quote
                          <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                      </div>
                  </Link>
              </div>
          </div>
      </div>
    </>
  );
}

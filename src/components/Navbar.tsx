import { Link, useLocation } from 'react-router-dom';

type NavLink = {
  label: string;
  to: string;
};

const NAV_LINKS: NavLink[] = [
  { label: 'About Us', to: '/about-us' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact-us' },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg w-auto mx-0 position-sticky top-0 sticky" id="navbar">
          <div className="container mw-1690">
              <div className="d-flex align-items-center">
                  {isHome ? (
                    <button
                      type="button"
                      className="navbar-brand me-100 bg-transparent border-0 p-0"
                      onClick={handleLogoClick}
                      aria-label="Scroll to top"
                    >
                      <img src="/assets/images/renovia_logo.png" className="main-logo" alt="Renovia logo" />
                      <img src="/assets/images/renovia_logo.png" className="white-logo" alt="Renovia logo" />
                    </button>
                  ) : (
                    <Link className="navbar-brand me-100" to="/">
                      <img src="/assets/images/renovia_logo.png" className="main-logo" alt="Renovia logo" />
                      <img src="/assets/images/renovia_logo.png" className="white-logo" alt="Renovia logo" />
                    </Link>
                  )}
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                      {NAV_LINKS.map((item) => (
                        <li className="nav-item" key={item.label}>
                          <Link className="nav-link" to={item.to}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
              </div>
              <div className="others-options d-flex align-items-center gap-4">
                  <div className="gap-40 d-flex">
                      <a href="tel:+001(808)5550148" className="d-sm-inline-flex d-none align-items-center gap-10 text-decoration-none fw-medium call button">
                          <img src="/assets/images/head-phone.svg" alt="head-phon" />
                          <span className="text-secondary d-none d-md-inline-block d-lg-none d-xxl-inline-block">+001 (808) 5550148</span>
                      </a>
                      <button className="bg-transparent border-0 p-0 button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          <img src="/assets/images/icon-search.svg" alt="icon-search" />
                      </button>
                  </div>
                  <Link to="/request-a-quote" className="default-btn d-none d-sm-inline-block">
                      <div className="d-flex align-items-center gap-10">
                          <span className="d-none d-sm-inline-block">Get Free Quote</span>
                          <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                      </div>
                  </Link>
                  <a className="navbar-toggler" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                      <span className="burger-menu">
                          <span className="top-bar"></span>
                          <span className="middle-bar"></span>
                          <span className="bottom-bar"></span>
                      </span>
                  </a>
              </div>
          </div>
      </nav>
    </>
  );
}

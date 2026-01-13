import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type MobileLink = {
  label: string;
  to: string;
  isActive?: boolean;
};

type MobileSection = {
  label: string;
  isActive?: boolean;
  links: MobileLink[];
};

const MOBILE_SECTIONS: MobileSection[] = [
  {
    label: 'Home',
    isActive: true,
    links: [
      { label: 'Painting Company', to: '/' },
      { label: 'Remodeling', to: '/remodeling-index', isActive: true },
      { label: 'Renovation', to: '/renovation-index' },
    ],
  },
  {
    label: 'Pages',
    links: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Team', to: '/team' },
      { label: 'Request A Quote', to: '/request-a-quote' },
      { label: 'My Account', to: '/my-account' },
      { label: 'Products', to: '/products' },
      { label: 'Single Product', to: '/single-product' },
      { label: 'Cart', to: '/cart' },
      { label: 'Checkout', to: '/checkout' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms-conditions' },
      { label: 'Error 404', to: '/error-404' },
    ],
  },
  {
    label: 'Services',
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Single Service', to: '/single-service' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    label: 'Projects',
    links: [
      { label: 'Projects', to: '/projects' },
      { label: 'Single Project', to: '/single-project' },
    ],
  },
  {
    label: 'Blog',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'Single Blog', to: '/single-blog' },
      { label: 'Categories', to: '/categories' },
      { label: 'Tags', to: '/tags' },
      { label: 'Author', to: '/author' },
    ],
  },
];

const getLinkClass = (base: string, isActive?: boolean) =>
  isActive ? `${base} active` : base;

const handleMenuToggle = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
};

export default function MobileNavbar() {
  return (
    <>
      <div className="mobile-navbar offcanvas offcanvas-end border-0" tabIndex={-1} id="offcanvasExample">
          <div className="offcanvas-header">
              <Link to="/" className="d-block">
                  <img src="/assets/images/logo.svg" className="main-logo" alt="logo" />
                  <img src="/assets/images/white-logo.svg" className="white-logo" alt="white-logo" />
              </Link>
              <button type="button" className="btn-close opacity-1" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i className="ti ti-x"></i>
              </button>
          </div>
          <div className="offcanvas-body">
              <ul className="mobile-menu">
                  {MOBILE_SECTIONS.map((section) => (
                      <li className={getLinkClass('mobile-menu-list', section.isActive)} key={section.label}>
                          <a href="#" onClick={handleMenuToggle}>
                              {section.label}
                          </a>
                          <ul className="mobile-menu-items">
                              {section.links.map((link) => (
                                  <li key={link.to}>
                                      <Link className={getLinkClass('dropdown-item', link.isActive)} to={link.to}>
                                          {link.label}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </li>
                  ))}
                  <li className="mobile-menu-list without-icon border-bottom">
                      <Link to="/contact-us" className="nav-link">
                          Contact Us
                      </Link>
                  </li>
              </ul>
              <div className="others-options d-flex d-sm-none flex-wrap align-items-center gap-4 mt-4">
                  <div className="gap-40 d-flex">
                      <a href="tel:+001(808)5550148" className="d-flex align-items-center gap-10 text-decoration-none fw-medium call button">
                          <img src="/assets/images/head-phone.svg" alt="head-phon" />
                          <span className="text-secondary">+001 (808) 5550148</span>
                      </a>
                  </div>
                  <Link to="/contact-us" className="default-btn">
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

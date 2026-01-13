import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

type NavLink = {
  label: string;
  to: string;
  isActive?: boolean;
};

type NavGroup = {
  label: string;
  isActive?: boolean;
  isSubDropdown?: boolean;
  children: NavItem[];
};

type NavItem = NavLink | NavGroup;

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    isActive: true,
    children: [
      { label: 'Painting Company Home', to: '/' },
      { label: 'Remodeling Home', to: '/remodeling-index', isActive: true },
      { label: 'Renovation Home', to: '/renovation-index' },
    ],
  },
  {
    label: 'Pages',
    children: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Testimonials', to: '/testimonials' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Team', to: '/team' },
      { label: 'Request A Quote', to: '/request-a-quote' },
      { label: 'My Account', to: '/my-account' },
      {
        label: 'Shop',
        isSubDropdown: true,
        children: [
          { label: 'Products', to: '/products' },
          { label: 'Single Product', to: '/single-product' },
          { label: 'Cart', to: '/cart' },
          { label: 'Checkout', to: '/checkout' },
        ],
      },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms-conditions' },
      { label: 'Error 404', to: '/error-404' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Services', to: '/services' },
      { label: 'Single Service', to: '/single-service' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    label: 'Projects',
    children: [
      { label: 'Projects', to: '/projects' },
      { label: 'Single Project', to: '/single-project' },
    ],
  },
  {
    label: 'Blog',
    children: [
      { label: 'Blog', to: '/blog' },
      { label: 'Single Blog', to: '/single-blog' },
      { label: 'Categories', to: '/categories' },
      { label: 'Tags', to: '/tags' },
      { label: 'Author', to: '/author' },
    ],
  },
  {
    label: 'Contact Us',
    to: '/contact-us',
  },
];

const isNavGroup = (item: NavItem): item is NavGroup => 'children' in item;

const getLinkClass = (base: string, isActive?: boolean) =>
  isActive ? `${base} active` : base;

const handleDropdownToggle = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
};

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg w-auto mx-0 position-sticky top-0 sticky" id="navbar">
          <div className="container mw-1690">
              <div className="d-flex align-items-center">
                  <Link className="navbar-brand me-100" to="/">
                      <img src="/assets/images/logo.svg" className="main-logo" alt="logo" />
                      <img src="/assets/images/white-logo.svg" className="white-logo" alt="white-logo" />
                  </Link>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav">
                      {NAV_ITEMS.map((item) => {
                        if (!isNavGroup(item)) {
                          return (
                              <li className="nav-item dropdown" key={item.label}>
                                  <Link className="nav-link" to={item.to}>
                                      {item.label}
                                  </Link>
                              </li>
                          );
                        }

                        return (
                            <li className="nav-item dropdown" key={item.label}>
                                <a
                                  className={getLinkClass('nav-link dropdown-toggle', item.isActive)}
                                  href="#"
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  onClick={handleDropdownToggle}
                                >
                                    {item.label}
                                </a>
                                <ul className="dropdown-menu">
                                    {item.children.map((child) => {
                                      if (isNavGroup(child) && child.isSubDropdown) {
                                        return (
                                            <li key={child.label}>
                                                <a
                                                  className="dropdown-item sub-dropdown dropdown-toggle"
                                                  href="#"
                                                  role="button"
                                                  data-bs-toggle="dropdown"
                                                  aria-expanded="false"
                                                  onClick={handleDropdownToggle}
                                                >
                                                    {child.label}
                                                </a>
                                                <ul className="dropdown-menu">
                                                    {child.children.map((subItem) => {
                                                      if (isNavGroup(subItem)) {
                                                        return null;
                                                      }

                                                      return (
                                                          <li key={subItem.label}>
                                                              <Link className={getLinkClass('dropdown-item', subItem.isActive)} to={subItem.to}>
                                                                  {subItem.label}
                                                              </Link>
                                                          </li>
                                                      );
                                                    })}
                                                </ul>
                                            </li>
                                        );
                                      }

                                      if (isNavGroup(child)) {
                                        return null;
                                      }

                                      return (
                                          <li key={child.label}>
                                              <Link className={getLinkClass('dropdown-item', child.isActive)} to={child.to}>
                                                  {child.label}
                                              </Link>
                                          </li>
                                      );
                                    })}
                                </ul>
                            </li>
                        );
                      })}
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
                  <Link to="/contact-us" className="default-btn d-none d-sm-inline-block">
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

import { Link } from 'react-router-dom';

const SIDEBAR_CONTACTS = [
  {
    icon: 'ti ti-map-pin-filled',
    title: 'Location',
    content: '70 East 65th Street, New York City',
  },
  {
    icon: 'ti ti-mail-filled',
    title: 'Email',
    content: 'hello@pentu.com',
    href: 'mailto:hello@pentu.com',
  },
  {
    icon: 'ti ti-phone-filled',
    title: 'Phone',
    content: '+971(467) 372 2870',
    href: 'tel:+971(467)3722870',
  },
];

const SIDEBAR_SOCIALS = [
  { href: 'https://www.facebook.com/', icon: 'ti ti-brand-facebook' },
  { href: 'https://www.twitter.com/', icon: 'ti ti-brand-x' },
  { href: 'https://www.instagram.com/', icon: 'ti ti-brand-instagram' },
  { href: 'https://www.linkedin.com/', icon: 'ti ti-brand-linkedin' },
];

export default function SidebarInfo() {
  return (
    <>
      <div className="offcanvas offcanvas-end sidebar-info bg-gray " tabIndex={-1} id="offcanvasRight">
          <div className="offcanvas-header border-bottom">
              <Link to="/" className="d-block">
                  <img src="/assets/images/logo.svg" className="main-logo" alt="logo" />
                  <img src="/assets/images/white-logo.svg" className="white-logo" alt="white-logo" />
              </Link>
              <button type="button" className="btn-close p-0 mt-0 me-0" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i className="ti ti-x"></i>
              </button>
          </div>
          <div className="offcanvas-body">
              <div className="sidebar-single-item">
                  <p>We pride ourselves on attention to detail reliability and a customer-first approach that ensures satisfaction from start to finish from color consultation to coat</p>
                  <div className="newsletter-form">
                      <h3>Newsletter</h3>
                      <form className="position-relative z-1">
                          <input type="email" className="form-control" placeholder="Enter Your Email" />
                          <button type="submit" className="submit-btn position-absolute top-50 end-0 translate-middle-y">
                              <img src="/assets/images/send.svg" alt="send" />
                          </button>
                      </form>
                  </div>
              </div>
              <div className="sidebar-single-item">
                  <div className="sidebar-info">
                      <h3>Contact Info</h3>
                      <ul className="p-0 m-0 list-unstyled info-list">
                          {SIDEBAR_CONTACTS.map((item) => (
                              <li className="d-flex" key={item.title}>
                                  <div className="flex-shrink-0">
                                      <i className={item.icon}></i>
                                  </div>
                                  <div className="flex-grow-1">
                                      <span className="fw-semibold d-block text-secondary">{item.title}</span>
                                      {item.href ? (
                                          <a href={item.href}>{item.content}</a>
                                      ) : (
                                          <span>{item.content}</span>
                                      )}
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
              <div className="sidebar-single-item">
                  <h3>Follow Us</h3>
                  <ul className="p-0 mb-0 list-unstyled d-flex align-items-center social-link">
                      {SIDEBAR_SOCIALS.map((item) => (
                          <li key={item.href}>
                              <a href={item.href} target="_blank" rel="noreferrer">
                                  <i className={item.icon}></i>
                              </a>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
    </>
  );
}

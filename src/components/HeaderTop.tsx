import { Link } from 'react-router-dom';

const HEADER_INFO = [
  {
    label: 'Location:',
    value: '70 East 65th Street, New York City',
  },
  {
    label: 'Email:',
    value: 'hello@pentu.com',
    href: 'mailto:hello@pentu.com',
  },
];

const HEADER_LINKS = [
  { label: 'About', to: '/about-us' },
  { label: 'FAQ', to: '/faqs' },
  { label: 'Testimonials', to: '/testimonials' },
];

const HEADER_SOCIALS = [
  { href: 'https://www.facebook.com/', icon: 'ti ti-brand-facebook' },
  { href: 'https://www.twitter.com/', icon: 'ti ti-brand-x' },
  { href: 'https://www.instagram.com/', icon: 'ti ti-brand-instagram' },
];

export default function HeaderTop() {
  return (
    <>
      <div className="header-area bg-secondary mx-0">
          <div className="container mw-1690">
              <div className="row align-items-center gy-2">
                  <div className="col-xl-6 col-lg-7">
                      <ul className="d-flex flex-wrap justify-content-center justify-content-lg-start flex-md-nowrap align-items-center p-0 m-0 list-unstyled header-info">
                          {HEADER_INFO.map((item) => (
                              <li className="d-flex align-items-center gap-6" key={item.label}>
                                  <span className="fw-semibold">{item.label}</span>
                                  {item.href ? (
                                      <a href={item.href} className="text-decoration-none">
                                          {item.value}
                                      </a>
                                  ) : (
                                      <span>{item.value}</span>
                                  )}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                      <div className="d-flex justify-content-center justify-content-lg-end align-items-center link-social-wrap">
                         <div className="d-flex link">
                              {HEADER_LINKS.map((item) => (
                                  <Link key={item.to} to={item.to}>
                                      {item.label}
                                  </Link>
                              ))}
                          </div>
                          <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                              <div className="social-link d-flex align-items-center">
                                  {HEADER_SOCIALS.map((item) => (
                                      <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                                          <i className={item.icon}></i>
                                      </a>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

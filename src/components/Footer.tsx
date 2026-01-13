import { Link } from 'react-router-dom';

const FOOTER_SERVICES = [
  'Residential painting',
  'Interior design consultation',
  'Commercial renovation',
  'Painting Consultation',
  'Exceptional Craftsmanship',
];

const FOOTER_CONTACTS = [
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

const FOOTER_SOCIALS = [
  { href: 'https://www.facebook.com/', icon: 'ti ti-brand-facebook', label: 'Facebook' },
  { href: 'https://www.x.com/', icon: 'ti ti-brand-x', label: 'Twitter' },
  { href: 'https://www.instagram.com/', icon: 'ti ti-brand-instagram', label: 'Instagram' },
  { href: 'https://www.linkedin.com/', icon: 'ti ti-brand-linkedin', label: 'Linkedin' },
];

export default function Footer() {
  return (
    <>
      <div className="footer-area-two bg-secondary ptb-120">
          <div className="container mw-1690">
              <div className="row g-4" data-cues="slideInUp" data-duration="900" data-disabled="true">
                  <div className="col-lg-3 col-sm-6" data-cue="slideInUp" data-duration="900" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "0ms", animationDirection: "normal", animationFillMode: "both" }}>
                      <div className="footer-single-widget">
                          <Link to="/" className="d-inline-block footer-logo">
                              <img src="/assets/images/renovia_logo.png" alt="Renovia logo" />
                          </Link>
                          <p className="text-white">Sign up for our newsletter to latest weekly updates &amp; news</p>
                          <form className="position-relative z-1 mb-4">
                              <input type="email" className="form-control" placeholder="Enter Your Email" />
                              <button type="submit" className="submit-btn position-absolute top-50 end-0 translate-middle-y border-0">
                                  <img src="/assets/images/send2.svg" alt="icon-send" />
                              </button>
                          </form>
                          <div className="d-flex align-items-center info">
                              <div className="flex-shrink-0">
                                  <img src="/assets/images/user10.jpg" className="rounded-circle" alt="user" />
                              </div>
                              <div className="flex-grow-1">
                                  <span className="d-block">Urgent Service&copy;</span>
                                  <a href="tel:+00123(456)890" className="d-block">+00 123 (456) 890</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-sm-6" data-cue="slideInUp" data-duration="900" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "270ms", animationDirection: "normal", animationFillMode: "both" }}>
                      <div className="footer-single-widget ms-xl-5">
                          <h3>Get In Touch</h3>
                          <ul className="p-0 m-0 list-unstyled info-list">
                              {FOOTER_CONTACTS.map((item) => (
                                <li className="d-flex" key={item.title}>
                                  <div className="flex-shrink-0">
                                    <i className={item.icon}></i>
                                  </div>
                                  <div className="flex-grow-1">
                                    <span className="d-block text-white fw-bold fs-18 mb-1">{item.title}</span>
                                    {item.href ? (
                                      <a href={item.href}>{item.content}</a>
                                    ) : (
                                      <p>{item.content}</p>
                                    )}
                                  </div>
                                </li>
                              ))}
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-3 col-sm-6" data-cue="slideInUp" data-duration="900" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "540ms", animationDirection: "normal", animationFillMode: "both" }}>
                      <div className="footer-single-widget ms-xl-5">
                          <h3>Our Services</h3>
                          <ul className="import-link p-0 m-0 list-unstyled">
                              {FOOTER_SERVICES.map((service) => (
                                <li key={service}>
                                  <Link to="/single-service">{service}</Link>
                                </li>
                              ))}
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-3 col-sm-6" data-cue="slideInUp" data-duration="900" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "810ms", animationDirection: "normal", animationFillMode: "both" }}>
                      <div className="footer-single-widget">
                          <h3>Follow Us</h3>
                          <ul className="p-0 mb-0 list-unstyled social-link gap-10 align-items-center">
                              {FOOTER_SOCIALS.map((social) => (
                                <li className={social.label === 'Linkedin' ? undefined : 'mb-2'} key={social.label}>
                                  <a href={social.href} target="_blank" rel="noreferrer">
                                    <i className={social.icon}></i>
                                    <span>{social.label}</span>
                                  </a>
                                </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

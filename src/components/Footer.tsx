import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

const FOOTER_SOCIALS = [
  { href: 'https://www.facebook.com/', icon: 'ti ti-brand-facebook', label: 'Facebook' },
  { href: 'https://www.x.com/', icon: 'ti ti-brand-x', label: 'Twitter' },
  { href: 'https://www.instagram.com/', icon: 'ti ti-brand-instagram', label: 'Instagram' },
  { href: 'https://www.linkedin.com/', icon: 'ti ti-brand-linkedin', label: 'Linkedin' },
];

export default function Footer() {
  const { t } = useI18n();
  const company = t<{ address: string; email: string; phone: string }>('company', {
    address: '',
    email: '',
    phone: '',
  });
  const phoneHref = company.phone.replace(/[^\d+]/g, '');
  const footerServices = t<string[]>('footerServices', []);
  const footerContacts = [
    {
      icon: 'ti ti-map-pin-filled',
      title: t('footerContacts.location'),
      content: company.address,
    },
    {
      icon: 'ti ti-mail-filled',
      title: t('footerContacts.email'),
      content: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: 'ti ti-phone-filled',
      title: t('footerContacts.phone'),
      content: company.phone,
      href: `tel:${phoneHref}`,
    },
  ];

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
                          <p className="text-white">{t('footer.newsletterText')}</p>
                          <form className="position-relative z-1 mb-4">
                              <input type="email" className="form-control" placeholder={t('footer.emailPlaceholder')} />
                              <button type="submit" className="submit-btn position-absolute top-50 end-0 translate-middle-y border-0">
                                  <img src="/assets/images/send2.svg" alt="icon-send" />
                              </button>
                          </form>
                          <div className="d-flex align-items-center info">
                              <div className="flex-shrink-0">
                                  <img src="/assets/images/user10.jpg" className="rounded-circle" alt="user" />
                              </div>
                              <div className="flex-grow-1">
                                  <span className="d-block">{t('footer.urgentService')}&copy;</span>
                                  <a href={`tel:${phoneHref}`} className="d-block">{company.phone}</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-3 col-sm-6" data-cue="slideInUp" data-duration="900" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "270ms", animationDirection: "normal", animationFillMode: "both" }}>
                      <div className="footer-single-widget ms-xl-5">
                          <h3>{t('footer.getInTouch')}</h3>
                          <ul className="p-0 m-0 list-unstyled info-list">
                              {footerContacts.map((item) => (
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
                          <h3>{t('footer.ourServices')}</h3>
                          <ul className="import-link p-0 m-0 list-unstyled">
                              {footerServices.map((service) => (
                                <li key={service}>
                                  <Link to="/single-service">{service}</Link>
                                </li>
                              ))}
                          </ul>
                      </div>
                  </div>
                  <div className="col-lg-3 col-sm-6" data-cue="slideInUp" data-duration="900" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "810ms", animationDirection: "normal", animationFillMode: "both" }}>
                      <div className="footer-single-widget">
                          <h3>{t('footer.followUs')}</h3>
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

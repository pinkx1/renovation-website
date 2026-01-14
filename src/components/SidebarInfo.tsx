import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

const SIDEBAR_SOCIALS = [
  { href: 'https://www.facebook.com/', icon: 'ti ti-brand-facebook' },
  { href: 'https://www.twitter.com/', icon: 'ti ti-brand-x' },
  { href: 'https://www.instagram.com/', icon: 'ti ti-brand-instagram' },
  { href: 'https://www.linkedin.com/', icon: 'ti ti-brand-linkedin' },
];

export default function SidebarInfo() {
  const { t } = useI18n();
  const company = t<{ address: string; email: string; phone: string }>('company', {
    address: '',
    email: '',
    phone: '',
  });
  const phoneHref = company.phone.replace(/[^\d+]/g, '');
  const sidebarContacts = [
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
      <div className="offcanvas offcanvas-end sidebar-info bg-gray " tabIndex={-1} id="offcanvasRight">
          <div className="offcanvas-header border-bottom">
              <Link to="/" className="d-block">
                  <img src="/assets/images/renovia_logo.png" className="main-logo" alt="Renovia logo" />
                  <img src="/assets/images/renovia_logo.png" className="white-logo" alt="Renovia logo" />
              </Link>
              <button type="button" className="btn-close p-0 mt-0 me-0" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i className="ti ti-x"></i>
              </button>
          </div>
          <div className="offcanvas-body">
              <div className="sidebar-single-item">
                  <p>{t('sidebar.blurb')}</p>
                  <div className="newsletter-form">
                      <h3>{t('sidebar.newsletterTitle')}</h3>
                      <form className="position-relative z-1">
                          <input type="email" className="form-control" placeholder={t('sidebar.emailPlaceholder')} />
                          <button type="submit" className="submit-btn position-absolute top-50 end-0 translate-middle-y">
                              <img src="/assets/images/send.svg" alt="send" />
                          </button>
                      </form>
                  </div>
              </div>
              <div className="sidebar-single-item">
                  <div className="sidebar-info">
                      <h3>{t('sidebar.contactInfo')}</h3>
                      <ul className="p-0 m-0 list-unstyled info-list">
                          {sidebarContacts.map((item) => (
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
                  <h3>{t('sidebar.followUs')}</h3>
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

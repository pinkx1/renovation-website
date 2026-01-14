import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

const HEADER_LINKS = [
  { key: 'header.links.about', to: '/about-us' },
  { key: 'header.links.faq', to: '/faqs' },
  { key: 'header.links.testimonials', to: '/testimonials' },
];

const HEADER_SOCIALS = [
  { href: 'https://www.facebook.com/', icon: 'ti ti-brand-facebook' },
  { href: 'https://www.twitter.com/', icon: 'ti ti-brand-x' },
  { href: 'https://www.instagram.com/', icon: 'ti ti-brand-instagram' },
];

export default function HeaderTop() {
  const { t } = useI18n();
  const company = t<{ address: string; email: string }>('company', { address: '', email: '' });
  const headerInfo = [
    {
      label: t('header.locationLabel'),
      value: company.address,
    },
    {
      label: t('header.emailLabel'),
      value: company.email,
      href: `mailto:${company.email}`,
    },
  ];

  return (
    <>
      <div className="header-area bg-secondary mx-0">
          <div className="container mw-1690">
              <div className="row align-items-center gy-2">
                  <div className="col-xl-6 col-lg-7">
                      <ul className="d-flex flex-wrap justify-content-center justify-content-lg-start flex-md-nowrap align-items-center p-0 m-0 list-unstyled header-info">
                          {headerInfo.map((item) => (
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
                                      {t(item.key)}
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

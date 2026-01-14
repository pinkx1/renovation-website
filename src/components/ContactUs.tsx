import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function ContactUs() {
  const { t } = useI18n();
  const company = t<{ phone: string }>('company', { phone: '' });
  const phoneHref = company.phone.replace(/[^\d+]/g, '');

  return (
    <>
      <div className="contact-us-area bg-img ptb-120" style={{ backgroundImage: "url(/assets/images/banner-bg.jpg)" }}>
          <div className="container mw-1690">
              <div className="row g-4">
                  <div className="col-lg-6">
                      <div className="contact-us-content">
                          <div className="mb-50">
                              <span className="top-title">{t('contactSection.topTitle')}</span>
                              <h2 className="main-title ms-0 mw-100">{t('contactSection.title')}</h2>
                              <p>{t('contactSection.description')}</p>
                          </div>
                          <div className="contact-us-img">
                              <div style={{ zIndex: "-1", position: "relative", width: "770px", overflow: "hidden", borderRadius: "20px", isolation: "isolate", height: "448px" }}><img src="/assets/images/contact-us-img.jpg" className="ukiyo z-n1" alt="contact-us-img" style={{ display: "block", overflow: "hidden", backfaceVisibility: "hidden", objectFit: "cover", width: "770px", height: "672px" }} /></div>
                              <div className="d-flex align-items-center contact-info">
                                  <div className="flex-shrink-0">
                                      <div className="icon">
                                          <img src="/assets/images/support2.svg" alt="support2" />
                                      </div>
                                  </div>
                                  <div className="flex-grow-1">
                                      <h3>{t('contactSection.helpTitle')}</h3>
                                      <p>
                                          {t('contactSection.helpLabel')}{' '}
                                          <a href={`tel:${phoneHref}`}>{company.phone}</a>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="contact-us-from">
                          <h3>{t('contactSection.formTitle')}</h3>
                          <p>{t('contactSection.formDescription')}</p>
                          <form>
                              <div className="form-group mb-20">
                                  <input type="text" className="form-control" placeholder={t('contactSection.placeholders.name')} />
                              </div>
                              <div className="form-group mb-20">
                                  <input type="email" className="form-control" placeholder={t('contactSection.placeholders.email')} />
                              </div>
                              <div className="form-group mb-20">
                                  <input type="number" className="form-control" placeholder={t('contactSection.placeholders.phone')} />
                              </div>
                              <div className="form-group mb-20">
                                  <textarea rows="5" className="form-control" placeholder={t('contactSection.placeholders.message')}></textarea>
                              </div>
                              <div className="form-group mb-20">
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                      <label className="form-check-label" htmlFor="checkDefault">
                                          {t('contactSection.termsText')}{' '}
                                          <Link to="/terms-conditions" className="text-decoration-none fw-semibold">
                                            {t('footer.terms')}
                                          </Link>
                                      </label>
                                  </div>
                              </div>
                              <div className="form-group mb-20">
                                  <button type="submit" className="default-btn border-0">
                                      <span className="gap-10 d-flex">
                                          <span>{t('common.sendMessage')}</span>
                                          <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                                      </span>
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

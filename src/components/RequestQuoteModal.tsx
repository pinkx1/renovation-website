import { useI18n } from '../i18n/I18nProvider';

export default function RequestQuoteModal() {
  const { t } = useI18n();
  const placeholders = t<{
    name: string;
    email: string;
    phone: string;
    category: string;
    location: string;
    message: string;
  }>('requestQuote.placeholders', {
    name: '',
    email: '',
    phone: '',
    category: '',
    location: '',
    message: '',
  });
  const categories = t<string[]>('requestQuote.categories', []);
  const locations = t<string[]>('requestQuote.locations', []);
  const introTitle = t('whyChoose.title');
  const introText = t('contactSection.description');
  const introPoints = t<string[]>('servicesHome.benefits', []);
  const formSubtitle = t('contactSection.formDescription');

  return (
    <div
      className="modal fade request-quote-modal"
      id="requestQuoteModal"
      tabIndex={-1}
      aria-labelledby="requestQuoteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div className="modal-content border-0 overflow-hidden rounded-4">
          <button
            type="button"
            className="btn-close request-quote-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div className="row g-0">
            <div className="col-lg-5">
              <div className="request-quote-intro h-100">
                <span className="request-quote-kicker">
                  {t('requestQuote.topTitle')}
                </span>
                <h3>{introTitle}</h3>
                <p>{introText}</p>
                <ul className="list-unstyled p-0 m-0 request-quote-list">
                  {introPoints.map((point) => (
                    <li key={point}>
                      <i className="ti ti-circle-check"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="request-quote-form-wrap">
                <h4 className="main-title mb-2" id="requestQuoteModalLabel">
                  {t('requestQuote.title')}
                </h4>
                <p className="mb-4">{formSubtitle}</p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder={placeholders.name} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder={placeholders.email} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="number" className="form-control" placeholder={placeholders.phone} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select className="form-select form-control" aria-label="Project category" defaultValue="">
                          <option value="">{placeholders.category}</option>
                          {categories.map((category) => (
                            <option key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <select className="form-select form-control" aria-label="Project location" defaultValue="">
                          <option value="">{placeholders.location}</option>
                          {locations.map((location) => (
                            <option key={location} value={location.toLowerCase().replace(/\s+/g, '-')}>
                              {location}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea rows={4} className="form-control" placeholder={placeholders.message}></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="default-btn border-0 active w-100 justify-content-center">
                        <span className="gap-10 d-inline-flex align-items-center">
                          <span>{t('common.sendMessage')}</span>
                          <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

  return (
    <div
      className="modal fade"
      id="requestQuoteModal"
      tabIndex={-1}
      aria-labelledby="requestQuoteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div className="modal-content">
          <div className="modal-header border-0 pb-0">
            <h4 className="main-title mb-0" id="requestQuoteModalLabel">
              {t('requestQuote.title')}
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body pt-0">
            <div className="contact-us-from mx-0">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input type="text" className="form-control" placeholder={placeholders.name} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input type="email" className="form-control" placeholder={placeholders.email} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <input type="number" className="form-control" placeholder={placeholders.phone} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-20">
                      <select className="form-select form-control" aria-label="Default select example" defaultValue="">
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
                    <div className="form-group mb-20">
                      <select className="form-select form-control" aria-label="Default select example" defaultValue="">
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
                    <div className="form-group mb-20">
                      <textarea rows={4} className="form-control" placeholder={placeholders.message}></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="default-btn border-0 active">
                      <span className="gap-10 d-flex">
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
  );
}

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

  return (
    <div
      className="modal fade"
      id="requestQuoteModal"
      tabIndex={-1}
      aria-labelledby="requestQuoteModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable request-quote-modal-dialog">
        <div className="modal-content">
          <div className="contact-us-from mx-0 request-quote-form">
            <h2 className="main-title mb-4" id="requestQuoteModalLabel">
              {t('requestQuote.title')}
            </h2>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-20">
                    <input type="text" className="form-control" placeholder={placeholders.name} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-20">
                    <input type="number" className="form-control" placeholder={placeholders.phone} />
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
  );
}

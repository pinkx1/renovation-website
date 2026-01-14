import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function Subscribe() {
  const { t } = useI18n();

  return (
    <div className="subscribe-area">
      <div className="container mw-1690">
        <div className="subscribe-wrapper bg-f3eade">
          <div className="row g-4" data-cues="slideInUp" data-duration="900" data-disabled="true">
            <div className="col-lg-6" data-cue="slideInUp" data-duration="900">
              <div className="subscribe-content">
                <span className="top-title">{t('subscribe.topTitle')}</span>
                <h2 className="main-title">{t('subscribe.title')}</h2>
              </div>
            </div>
            <div className="col-lg-6" data-cue="slideInUp" data-duration="900">
              <form className="position-relative z-1 mb-3">
                <input type="email" className="form-control" placeholder={t('subscribe.emailPlaceholder')} />
                <button
                  type="submit"
                  className="default-btn position-absolute top-50 end-0 translate-middle-y bg-primary border-0 rounded-2"
                >
                  <span className="d-flex align-items-center gap-6">
                    <img src="/assets/images/send.svg" alt="send" />
                  </span>
                </button>
              </form>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                <label className="form-check-label" htmlFor="checkDefault">
                  {t('subscribe.termsText')}{' '}
                  <Link
                    to="/terms-conditions"
                    className="text-secondary fw-semibold text-decoration-none"
                  >
                    {t('footer.terms')}
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function CopyRight() {
  const { language, setLanguage, t } = useI18n();

  return (
    <>
      <div className="copy-right-area bg-secondary py-0">
          <div className="container mw-1690">
              <div className="copy-right-wrap">
                  <div className="d-flex flex-wrap gap-10 justify-content-center justify-content-lg-between align-items-center">
                      <div className="d-flex flex-wrap gap-5 policy">
                          <Link to="/privacy-policy" className="text-decoration-none">{t('footer.privacy')}</Link>
                          <Link to="/terms-conditions" className="text-decoration-none">{t('footer.terms')}</Link>
                          <div className="language-switch d-flex align-items-center gap-2">
                              <span>{t('footer.language')}:</span>
                              <button
                                type="button"
                                className={`btn btn-link p-0 text-decoration-none${language === 'en' ? ' active' : ''}`}
                                onClick={() => setLanguage('en')}
                                aria-pressed={language === 'en'}
                              >
                                EN
                              </button>
                              <span>/</span>
                              <button
                                type="button"
                                className={`btn btn-link p-0 text-decoration-none${language === 'ru' ? ' active' : ''}`}
                                onClick={() => setLanguage('ru')}
                                aria-pressed={language === 'ru'}
                              >
                                RU
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

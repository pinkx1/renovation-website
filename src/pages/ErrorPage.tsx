import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

export default function ErrorPage() {
  const { t } = useI18n();
  return (
    <>
      <div className="ptb-120 position-relative z-1">
        <div className="container">
          <div className="row">
            <div className="error-content text-center">
              <h1>
                4<span>0</span>4
              </h1>
              <h2 className="fs-24">{t('errorPage.title')}</h2>
              <p className="mb-4">{t('errorPage.description')}</p>
              <Link to="/" className="default-btn d-inline-block">
                {t('errorPage.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

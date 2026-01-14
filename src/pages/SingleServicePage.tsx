import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

export default function SingleServicePage() {
  const { t } = useI18n();
  const company = t<{ phone: string }>('company', { phone: '' });
  const phoneHref = company.phone.replace(/[^\d+]/g, '');
  const categories = t<string[]>('singleService.categories', []);
  const tags = t<string[]>('singleService.tags', []);
  const coveredLeft = t<string[]>('singleService.coveredLeft', []);
  const coveredRight = t<string[]>('singleService.coveredRight', []);
  const touchPlaceholders = t<{ name: string; email: string; message: string }>(
    'singleService.touchPlaceholders',
    {
      name: '',
      email: '',
      message: '',
    }
  );
  const detailsParagraphs = t<string[]>('singleService.detailsParagraphs', []);

  return (
    <>
      <div className="services-details-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            <div className="col-xl-4">
              <div className="sidebar">
                <div className="sidebar-widget widget-search bg-gray2">
                  <h3>{t('common.searchHere')}</h3>
                  <form className="position-relative">
                    <input type="text" className="form-control" placeholder={t('search.placeholder')} />
                    <button type="submit" className="search-btn">
                      <i className="ti ti-search"></i>
                    </button>
                  </form>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>{t('singleService.categoryTitle')}</h3>
                  <ul className="category-list p-0 m-0 list-unstyled">
                    {categories.map((category) => (
                      <li key={category}>
                        <Link
                          to="/categories"
                          className="d-flex justify-content-between align-items-center text-decoration-none"
                        >
                          <span>{category}</span>
                          <i className="ti ti-arrow-right"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>{t('common.popularTags')}</h3>
                  <ul className="p-0 m-0 list-unstyled d-flex flex-wrap tags">
                    {tags.map((tag) => (
                      <li key={tag}>
                        <Link to="/tags">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>{t('singleService.getInTouch')}</h3>
                  <form>
                    <div className="mb-4">
                      <input type="text" className="form-control" placeholder={touchPlaceholders.name} />
                    </div>
                    <div className="mb-4">
                      <input type="email" className="form-control" placeholder={touchPlaceholders.email} />
                    </div>
                    <div className="mb-4">
                      <textarea className="form-control" placeholder={touchPlaceholders.message} rows={5}></textarea>
                    </div>
                    <button type="submit" className="default-btn border-0">
                      <span>
                        {t('common.contactNow')}
                        <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                      </span>
                    </button>
                  </form>
                </div>

                <div className="sidebar-widget bg-dark p-0">
                  <img src="/assets/images/services14.jpg" className="rounded-top-4" alt="services" />
                  <div className="services-content position-relative z-1">
                    <h4 className="text-white fs-24 mb-3">{t('singleService.scheduleTitle')}</h4>
                    <p className="text-white mb-4">
                      {t('singleService.scheduleText')}
                    </p>

                    <div className="d-flex align-items-center gap-20">
                      <div className="flex-shrink-0">
                        <div className="icon">
                          <img src="/assets/images/phone3.svg" alt="phone" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="d-block text-white">{t('singleService.emergencyLabel')}</span>
                        <a
                          href={`tel:${phoneHref}`}
                          className="d-block fs-18 fw-medium text-white text-decoration-none"
                        >
                          {company.phone}
                        </a>
                      </div>
                    </div>

                    <img
                      src="/assets/images/shape2.png"
                      className="position-absolute bottom-0 end-0 m-4 d-none d-xl-inline-block"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="details-content">
                <div className="details-img">
                  <img src="/assets/images/services15.jpg" alt="services" />
                </div>

                <h2>{t('singleService.detailsTitle')}</h2>
                {detailsParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <h3>{t('singleService.rangeTitle')}</h3>
                <p>{t('singleService.rangeText')}</p>

                <div className="row g-4 mb-4 pt-2">
                  <div className="col-sm-6">
                    <img src="/assets/images/services16.jpg" alt="services" />
                  </div>
                  <div className="col-sm-6">
                    <img src="/assets/images/services17.jpg" alt="services" />
                  </div>
                </div>

                <p>{t('singleService.midParagraph')}</p>

                <h4>{t('singleService.coveredTitle')}</h4>
                <p>{t('singleService.coveredText')}</p>

                <div className="row mt-3 pt-lg-4 g-3">
                  <div className="col-sm-6">
                    <ul className="p-0 m-0 list-unstyled check-list">
                      {coveredLeft.map((item) => (
                        <li className="d-flex align-items-center gap-10" key={item}>
                          <i className="ti ti-circle-check text-primary fs-20"></i>
                          <span className="text-secondary fw-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="p-0 m-0 list-unstyled check-list">
                      {coveredRight.map((item) => (
                        <li className="d-flex align-items-center gap-10" key={item}>
                          <i className="ti ti-circle-check text-primary fs-20"></i>
                          <span className="text-secondary fw-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

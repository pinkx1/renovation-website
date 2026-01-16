import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function Services() {
  const { t } = useI18n();
  const benefits = t<string[]>('servicesHome.benefits', []);
  const tabs = t<{ title: string; description: string }[]>('servicesHome.tabs', []);
  const serviceTabs = [
    {
      key: 'kitchen',
      icon: '/assets/images/icon-services4.svg',
      buttonTextClassName: 'text-white',
      image: {
        src: '/assets/images/services4.jpg',
        alt: 'services',
        className: 'img h-100 object-fit-cover ukiyo',
        wrapperStyle: {
          position: 'relative',
          width: '495px',
          overflow: 'hidden',
          borderRadius: '15px',
          isolation: 'isolate',
          height: '376px',
        },
        imageStyle: {
          display: 'block',
          overflow: 'hidden',
          backfaceVisibility: 'hidden',
          objectFit: 'cover',
          width: '495px',
          height: '564px',
        },
      },
    },
    {
      key: 'bedroom',
      icon: '/assets/images/icon-services5.svg',
      image: {
        src: '/assets/images/services5.jpg',
        alt: 'services',
        className: 'img h-100 object-fit-cover',
      },
    },
    {
      key: 'exterior',
      icon: '/assets/images/icon-services6.svg',
      image: {
        src: '/assets/images/services6.jpg',
        alt: 'services',
        className: 'img h-100 object-fit-cover',
      },
    },
    {
      key: 'bathroom',
      icon: '/assets/images/icon-services7.svg',
      image: {
        src: '/assets/images/services7.jpg',
        alt: 'services',
        className: 'img h-100 object-fit-cover',
      },
    },
  ].map((tab, index) => ({
    ...tab,
    title: tabs[index]?.title ?? '',
    description: tabs[index]?.description ?? '',
  }));

  return (
    <>
      <div
        className="services-area-two rounded-0 bg-img ptb-120"
        style={{ backgroundImage: 'url(/assets/images/banner-bg.jpg)' }}
      >
        <div className="container mw-1690">
          <div className="mb-50 mt-0 text-start">
            <h2 className="main-title mw-550 services-title">{t('servicesHome.title')}</h2>
          </div>
          <div className="row align-items-center g-4">
            <div className="col-xl-4 mt-0">
              <div
                className="nav flex-column nav-pills services-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {serviceTabs.map((item, index) => {
                  const isActive = index === 0;
                  const tabId = `v-pills-${item.key}-tab`;
                  const paneId = `v-pills-${item.key}`;

                  return (
                    <div
                      className={`nav-link${isActive ? ' active' : ''}`}
                      id={tabId}
                      key={item.key}
                      data-bs-toggle="pill"
                      data-bs-target={`#${paneId}`}
                      role="tab"
                      aria-controls={paneId}
                      aria-selected={isActive}
                      tabIndex={isActive ? 0 : -1}
                    >
                      <div className="d-flex align-items-center gap-25">
                        <div className="flex-shrink-0">
                          <div className="icon">
                            <img src={item.icon} alt="icon-services" />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="mb-0">{item.title}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-xl-8 mt-0">
              <div className="tab-content" id="v-pills-tabContent">
                {serviceTabs.map((item, index) => {
                  const isActive = index === 0;
                  const tabId = `v-pills-${item.key}-tab`;
                  const paneId = `v-pills-${item.key}`;
                  const image = item.image;
                  const imageNode = image.wrapperStyle ? (
                    <div style={image.wrapperStyle}>
                      <img
                        src={image.src}
                        className={image.className}
                        alt={image.alt}
                        style={image.imageStyle}
                      />
                    </div>
                  ) : (
                    <img
                      src={image.src}
                      className={image.className}
                      alt={image.alt}
                    />
                  );

                  return (
                    <div
                      className={`tab-pane fade${isActive ? ' show active' : ''}`}
                      id={paneId}
                      key={item.key}
                      role="tabpanel"
                      aria-labelledby={tabId}
                      tabIndex={0}
                    >
                      <div className="services-single-item-two">
                        <div className="row g-4 align-items-xxl-center">
                          <div className="col-lg-6">
                            <div className="services-img-two h-100">{imageNode}</div>
                          </div>
                          <div className="col-lg-6">
                            <div className="services-content ms-xxl-5">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                              <ul className="p-0 mb-0 list-unstyled">
                                {benefits.map((benefit) => (
                                  <li className="d-flex align-items-center gap-10" key={benefit}>
                                    <i className="ti ti-rosette-discount-check-filled text-secondary"></i>
                                    <span className="text-secondary">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                              <Link to="/services" className="default-btn">
                                <div
                                  className={`d-flex align-items-center gap-10${
                                    item.buttonTextClassName ? ` ${item.buttonTextClassName}` : ''
                                  }`}
                                >
                                  {t('servicesHome.button')}
                                  <img
                                    src="/assets/images/icon-right-arrow.svg"
                                    alt="icon-right-arrow"
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

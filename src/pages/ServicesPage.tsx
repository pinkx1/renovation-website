import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

export default function ServicesPage() {
  const { t } = useI18n();
  const services = t<{ title: string; description: string }[]>('servicesPage.services', []);
  const items = [
    { icon: '/assets/images/icon-services1.svg', image: '/assets/images/services1.jpg', ...services[0] },
    { icon: '/assets/images/icon-services2.svg', image: '/assets/images/services2.jpg', ...services[1] },
    { icon: '/assets/images/icon-services3.svg', image: '/assets/images/services3.jpg', ...services[2] },
    { icon: '/assets/images/icon-services8.svg', image: '/assets/images/services8.jpg', ...services[3] },
    { icon: '/assets/images/icon-services9.svg', image: '/assets/images/services9.jpg', ...services[4] },
    { icon: '/assets/images/icon-services10.svg', image: '/assets/images/services10.jpg', ...services[5] },
    { icon: '/assets/images/icon-services11.svg', image: '/assets/images/services11.jpg', ...services[6] },
    { icon: '/assets/images/icon-services12.svg', image: '/assets/images/services12.jpg', ...services[7] },
    { icon: '/assets/images/icon-services13.svg', image: '/assets/images/services13.jpg', ...services[8] },
  ].filter((item) => item.title);

  return (
    <>
      <div className="services-area mx-0 ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            {items.map((service) => (
              <div className="col-xl-4 col-md-6" key={service.title}>
                <Link
                  to="/single-service"
                  className="services-single-item text-decoration-none d-block bg-gray2 mt-0"
                >
                  <div className="d-flex align-items-center gap-35">
                    <div className="flex-shrink-0">
                      <img src={service.icon} alt="icon-services" />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="mb-0">{service.title}</h3>
                    </div>
                  </div>
                  <p>{service.description}</p>
                  <span className="read-more">
                    {t('common.readMore')}
                    <img src="/assets/images/icon-right-arrow-black.svg" alt="icon-right-arrow-black" />
                  </span>

                  <img src={service.image} className="services-img2 img" alt="services" />
                </Link>
              </div>
            ))}
            <div className="col-lg-12">
              <div className="pagination-area mt-lg-4 d-flex align-items-center justify-content-center">
                <Link to="/services" className="next page-numbers border-0">
                  <i className="ti ti-chevron-left"></i>
                </Link>
                <span className="page-numbers border-0 current" aria-current="page">
                  1
                </span>
                <Link to="/services" className="page-numbers border-0">
                  2
                </Link>
                <Link to="/services" className="page-numbers border-0">
                  3
                </Link>
                <Link to="/services" className="next page-numbers border-0">
                  <i className="ti ti-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

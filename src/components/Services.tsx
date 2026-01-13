import { Link } from 'react-router-dom';

const SERVICE_BENEFITS = [
  'Manufacturer Quality Equipment',
  'Use Premium Paints And Materials',
  '100% Satisfaction Guarantee',
];

const SERVICE_TABS = [
  {
    key: 'kitchen',
    title: 'Kitchen Remodeling',
    icon: '/assets/images/icon-services4.svg',
    description:
      'Kitchen remodeling renovation is a wonderful way to create a more comfortable functional personalized retreat within home improving storage enhancing lighting',
    buttonTextClassName: 'text-white',
    image: {
      src: '/assets/images/services4.jpg',
      alt: 'services',
      className: 'img h-100 object-fit-cover ukiyo',
      wrapperStyle: {
        position: 'relative',
        width: '517px',
        overflow: 'hidden',
        borderRadius: '15px',
        isolation: 'isolate',
        height: '393px',
      },
      imageStyle: {
        display: 'block',
        overflow: 'hidden',
        backfaceVisibility: 'hidden',
        objectFit: 'cover',
        width: '517px',
        height: '589.5px',
        transform: 'translate3d(0px, 49.125px, 0px)',
      },
    },
  },
  {
    key: 'bedroom',
    title: 'Bedroom Renovation',
    icon: '/assets/images/icon-services5.svg',
    description:
      'Bedroom renovation is a wonderful way to create a more comfortable functional personalized retreat within home improving storage enhancing lighting',
    image: {
      src: '/assets/images/services5.jpg',
      alt: 'services',
      className: 'img h-100 object-fit-cover',
    },
  },
  {
    key: 'exterior',
    title: 'Exterior Painting',
    icon: '/assets/images/icon-services6.svg',
    description:
      'Exterior renovation is a wonderful way to create a more comfortable functional personalized retreat within home improving storage enhancing lighting',
    image: {
      src: '/assets/images/services6.jpg',
      alt: 'services',
      className: 'img h-100 object-fit-cover',
    },
  },
  {
    key: 'bathroom',
    title: 'Bathroom Painting',
    icon: '/assets/images/icon-services7.svg',
    description:
      'Bathroom renovation is a wonderful way to create a more comfortable functional personalized retreat within home improving storage enhancing lighting',
    image: {
      src: '/assets/images/services7.jpg',
      alt: 'services',
      className: 'img h-100 object-fit-cover',
    },
  },
];

export default function Services() {
  return (
    <>
      <div
        className="services-area-two rounded-0 bg-img ptb-120"
        style={{ backgroundImage: 'url(/assets/images/banner-bg.jpg)' }}
      >
        <div className="container mw-1690">
          <div className="mb-50 mt-0 text-center">
            <span className="top-title">our services</span>
            <h2 className="main-title mx-auto mw-550">
              Transform Your Space With Our Expertise
            </h2>
          </div>
          <div className="row align-items-center g-4">
            <div className="col-xl-4">
              <div
                className="nav flex-column nav-pills services-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {SERVICE_TABS.map((item, index) => {
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
            <div className="col-xl-8">
              <div className="tab-content" id="v-pills-tabContent">
                {SERVICE_TABS.map((item, index) => {
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
                                {SERVICE_BENEFITS.map((benefit) => (
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
                                  Browse More
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

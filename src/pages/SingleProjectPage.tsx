import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

export default function SingleProjectPage() {
  const { t } = useI18n();
  const company = t<{ email: string; emailAlt: string; phone: string; phoneAlt: string }>('company', {
    email: '',
    emailAlt: '',
    phone: '',
    phoneAlt: '',
  });
  const phoneHref = company.phone.replace(/[^\d+]/g, '');
  const singleProject = t<{
    title: string;
    paragraphs: string[];
    solutionTitle: string;
    solutionText: string;
    checklist: string[];
    processTitle: string;
    processText: string;
    closingText: string;
    projectInfoTitle: string;
    ratingLabel: string;
    info: { label: string; value: string }[];
    freeConsultation: string;
    emailSupport: string;
    scheduleProject: string;
    schedulePlaceholders: { name: string; email: string; message: string };
  }>('singleProject', {
    title: '',
    paragraphs: [],
    solutionTitle: '',
    solutionText: '',
    checklist: [],
    processTitle: '',
    processText: '',
    closingText: '',
    projectInfoTitle: '',
    ratingLabel: '',
    info: [],
    freeConsultation: '',
    emailSupport: '',
    scheduleProject: '',
    schedulePlaceholders: { name: '', email: '', message: '' },
  });

  return (
    <>
      <div className="services-details-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            <div className="col-xl-8">
              <div className="details-content">
                <div className="details-img" id="before_after">
                  <div className="ba-container">
                    <div className="ba-img before">
                      <img src="/assets/images/after.jpg" alt="after" />
                    </div>
                    <div className="ba-img after" id="after-img">
                      <img src="/assets/images/before.jpg" alt="before" />
                    </div>
                    <div className="ba-handle" id="ba-handle">
                      <div className="icon">⇆</div>
                    </div>
                  </div>
                </div>

                <h2>{singleProject.title}</h2>
                {singleProject.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <h3>{singleProject.solutionTitle}</h3>
                <p>{singleProject.solutionText}</p>

                <ul className="p-0 mb-0 mt-4 list-unstyled check-list">
                  {singleProject.checklist.map((item) => (
                    <li className="d-flex align-items-center gap-10" key={item}>
                      <i className="ti ti-circle-check text-primary fs-20"></i>
                      <span className="text-secondary fw-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <h4>{singleProject.processTitle}</h4>
                <p>{singleProject.processText}</p>

                <div className="position-relative z-1 pt-2 mb-4">
                  <img src="/assets/images/project12.jpg" alt="project" />
                  <a
                    href="https://youtu.be/78GehqOuq-A?si=WSjyu8eJ-TPiQ5QP"
                    className="video-btn mx-auto position-absolute top-50 start-50 translate-middle"
                    data-fslightbox="2"
                  >
                    <i className="ti ti-player-play-filled"></i>
                  </a>
                </div>

                <p>{singleProject.closingText}</p>
              </div>
            </div>
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
                  <h3>{singleProject.projectInfoTitle}</h3>
                  <ul className="category-list p-0 m-0 list-unstyled">
                    {singleProject.info.map((item) => (
                      <li
                        className="d-flex flex-wrap gap-10 justify-content-between align-items-center"
                        key={item.label}
                      >
                        <span className="text-secondary fw-medium">{item.label}</span>
                        <span>{item.value}</span>
                      </li>
                    ))}
                    <li className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                      <span className="text-secondary fw-medium">{singleProject.ratingLabel}</span>
                      <div className="d-flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <i className="ti ti-star-filled fs-18 text-warning" key={index}></i>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-widget bg-dark">
                  <div className="services-content position-relative z-1 p-0">
                    <div className="d-flex align-items-center gap-25 mb-4">
                      <div className="flex-shrink-0">
                        <div className="icon rounded-3">
                          <img src="/assets/images/phone2.svg" alt="phone" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="d-block text-white fs-22 fw-bold mb-2">
                          {singleProject.freeConsultation}
                        </span>
                        <a
                          href={`tel:${phoneHref}`}
                          className="d-block text-white text-decoration-none"
                        >
                          {company.phone} / {company.phoneAlt}
                        </a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-25 mb-0">
                      <div className="flex-shrink-0">
                        <div className="icon rounded-3">
                          <img src="/assets/images/email2.svg" alt="phone" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="d-block text-white fs-22 fw-bold mb-2">{singleProject.emailSupport}</span>
                        <a
                          href={`mailto:${company.email}`}
                          className="d-block text-white text-decoration-none"
                        >
                          {company.email} / {company.emailAlt}
                        </a>
                      </div>
                    </div>
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

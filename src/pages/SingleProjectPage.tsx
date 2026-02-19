import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import { buildProjectCards, buildProjectDetailContent } from '../data/contentCatalog';
import { useI18n } from '../i18n/I18nProvider';

export default function SingleProjectPage() {
  const { t, language } = useI18n();
  const { projectId } = useParams<{ projectId?: string }>();
  const company = t<{ email: string; emailAlt: string; phone: string; phoneAlt: string }>('company', {
    email: '',
    emailAlt: '',
    phone: '',
    phoneAlt: '',
  });
  const phoneHref = company.phone.replace(/[^\d+]/g, '');
  const projectItems = t<{ title: string; category: string }[]>('projectsPage.items', []);
  const projects = useMemo(() => buildProjectCards(projectItems), [projectItems]);
  const activeProject = projects.find((project) => project.id === projectId) ?? projects[0];

  if (!activeProject) {
    return null;
  }

  const activeIndex = projects.findIndex((project) => project.id === activeProject.id);
  const projectDetails = buildProjectDetailContent(activeProject, language, activeIndex >= 0 ? activeIndex : 0);

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
                      <div className="icon">?</div>
                    </div>
                  </div>
                </div>

                <h2>{projectDetails.heading}</h2>
                {projectDetails.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <h3>{projectDetails.solutionTitle}</h3>
                <p>{projectDetails.solutionText}</p>

                <ul className="p-0 mb-0 mt-4 list-unstyled check-list">
                  {projectDetails.checklist.map((item) => (
                    <li className="d-flex align-items-center gap-10" key={item}>
                      <i className="ti ti-circle-check text-primary fs-20"></i>
                      <span className="text-secondary fw-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <h4>{projectDetails.processTitle}</h4>
                <p>{projectDetails.processText}</p>

                <div className="position-relative z-1 pt-2 mb-4">
                  <img src={activeProject.image} alt={activeProject.title} />
                  <a
                    href="https://www.youtube.com/watch?v=78GehqOuq-A"
                    className="video-btn mx-auto position-absolute top-50 start-50 translate-middle"
                    data-fslightbox="2"
                  >
                    <i className="ti ti-player-play-filled"></i>
                  </a>
                </div>

                <p>{projectDetails.closingText}</p>
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
                  <h3>{projectDetails.projectInfoTitle}</h3>
                  <ul className="category-list p-0 m-0 list-unstyled">
                    {projectDetails.info.map((item) => (
                      <li
                        className="d-flex flex-wrap gap-10 justify-content-between align-items-center"
                        key={item.label}
                      >
                        <span className="text-secondary fw-medium">{item.label}</span>
                        <span>{item.value}</span>
                      </li>
                    ))}
                    <li className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                      <span className="text-secondary fw-medium">{projectDetails.ratingLabel}</span>
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
                          {projectDetails.freeConsultation}
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
                          <img src="/assets/images/email2.svg" alt="email" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="d-block text-white fs-22 fw-bold mb-2">{projectDetails.emailSupport}</span>
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

                <div className="sidebar-widget bg-gray2">
                  <h3>{projectDetails.scheduleProject}</h3>
                  <form>
                    <div className="mb-4">
                      <input type="text" className="form-control" placeholder={projectDetails.schedulePlaceholders.name} />
                    </div>
                    <div className="mb-4">
                      <input type="email" className="form-control" placeholder={projectDetails.schedulePlaceholders.email} />
                    </div>
                    <div className="mb-4">
                      <textarea
                        className="form-control"
                        placeholder={projectDetails.schedulePlaceholders.message}
                        rows={5}
                      ></textarea>
                    </div>
                    <button type="submit" className="default-btn border-0">
                      <span>
                        {t('common.contactNow')}
                        <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                      </span>
                    </button>
                  </form>
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

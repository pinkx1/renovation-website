import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function Projects() {
  const { t } = useI18n();
  const items = t<{ title: string; category: string }[]>('projectsHome.items', []);
  const projects = [
    { image: '/assets/images/project4.jpg', ...items[0] },
    { image: '/assets/images/project5.jpg', ...items[1] },
    { image: '/assets/images/project6.jpg', ...items[2] },
  ].filter((item) => item.title);
  const projectSlides = [...projects, ...projects];

  return (
    <>
      <div className="projects-area pt-120">
        <div className="container mw-1690">
          <div className="d-flex flex-wrap gap-20 justify-content-between align-items-center mb-50 mt-0">
            <div>
              <h2 className="main-title mw-720">
                {t('projectsHome.title')}
              </h2>
            </div>
            <div className="default-slide-controller d-flex align-items-end gap-10 project-arrow">
              <div
                className="slide-icon next1"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <i className="ti ti-arrow-left"></i>
              </div>
              <div
                className="slide-icon prev1"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <i className="ti ti-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="swiper projects-slide">
            <div className="swiper-wrapper">
              {projectSlides.map((project, index) => (
                <div className="swiper-slide" key={`${project.title}-${index}`}>
                  <Link
                    to="/single-project"
                    className="projects-single-item-two d-block text-decoration-none"
                  >
                    <img src={project.image} alt="project" />
                    <div className="d-flex align-items-center projects-content">
                      <div className="flex-grow-1">
                        <span>{project.category}</span>
                        <h3>{project.title}</h3>
                      </div>
                      <div className="flex-shrink-0">
                        <i className="ti ti-circle-plus-filled"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

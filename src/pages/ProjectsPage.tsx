import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function ProjectsPage() {
  const { t } = useI18n();
  const items = t<{ title: string; category: string }[]>('projectsPage.items', []);
  const projects = [
    { image: '/assets/images/project4.jpg', columnClass: 'col-xl-4 col-md-6', ...items[0] },
    { image: '/assets/images/project5.jpg', columnClass: 'col-xl-4 col-md-6', ...items[1] },
    { image: '/assets/images/project6.jpg', columnClass: 'col-xl-4 col-md-6', ...items[2] },
    { image: '/assets/images/project7.jpg', columnClass: 'col-md-6', ...items[3] },
    { image: '/assets/images/project8.jpg', columnClass: 'col-md-6', ...items[4] },
    { image: '/assets/images/project9.jpg', columnClass: 'col-xl-4 col-md-6', ...items[5] },
    { image: '/assets/images/project10.jpg', columnClass: 'col-xl-4 col-md-6', ...items[6] },
    { image: '/assets/images/project11.jpg', columnClass: 'col-xl-4 col-md-6', ...items[7] },
  ].filter((project) => project.title);

  return (
    <>
      <div className="projects-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            {projects.map((project) => (
              <div className={project.columnClass} key={`${project.title}-${project.image}`}>
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
    </>
  );
}

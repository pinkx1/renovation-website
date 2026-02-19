import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';
import { buildProjectCards } from '../data/contentCatalog';

export default function ProjectsPage() {
  const { t } = useI18n();
  const items = t<{ title: string; category: string }[]>('projectsPage.items', []);
  const columns = [
    'col-xl-4 col-md-6',
    'col-xl-4 col-md-6',
    'col-xl-4 col-md-6',
    'col-md-6',
    'col-md-6',
    'col-xl-4 col-md-6',
    'col-xl-4 col-md-6',
    'col-xl-4 col-md-6',
  ];
  const projects = buildProjectCards(items).map((project, index) => ({
    ...project,
    columnClass: columns[index] ?? 'col-xl-4 col-md-6',
  }));

  return (
    <>
      <div className="projects-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            {projects.map((project) => (
              <div className={project.columnClass} key={`${project.title}-${project.image}`}>
                <Link
                  to={`/projects/${project.id}`}
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
      <Subscribe />
    </>
  );
}

import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

const PROJECTS = [
  {
    image: '/assets/images/project4.jpg',
    title: 'Custom Home Renovations',
    category: 'home renovation',
    columnClass: 'col-xl-4 col-md-6',
  },
  {
    image: '/assets/images/project5.jpg',
    title: 'Kitchen Remodeling',
    category: 'home renovation',
    columnClass: 'col-xl-4 col-md-6',
  },
  {
    image: '/assets/images/project6.jpg',
    title: 'Bedroom Renovation',
    category: 'home renovation',
    columnClass: 'col-xl-4 col-md-6',
  },
  {
    image: '/assets/images/project7.jpg',
    title: 'Bedroom Renovation',
    category: 'home renovation',
    columnClass: 'col-md-6',
  },
  {
    image: '/assets/images/project8.jpg',
    title: 'Bedroom Renovation',
    category: 'home renovation',
    columnClass: 'col-md-6',
  },
  {
    image: '/assets/images/project9.jpg',
    title: 'Custom Home Renovations',
    category: 'home renovation',
    columnClass: 'col-xl-4 col-md-6',
  },
  {
    image: '/assets/images/project10.jpg',
    title: 'Kitchen Remodeling',
    category: 'home renovation',
    columnClass: 'col-xl-4 col-md-6',
  },
  {
    image: '/assets/images/project11.jpg',
    title: 'Bedroom Renovation',
    category: 'home renovation',
    columnClass: 'col-xl-4 col-md-6',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageBanner
        title="Latest Projects"
        backgroundImage="/assets/images/page-bg8.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Latest Projects' },
        ]}
      />
      <div className="projects-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            {PROJECTS.map((project) => (
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
      <Subscribe />
    </>
  );
}

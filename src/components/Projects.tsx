import { Link } from 'react-router-dom';

const PROJECTS = [
  {
    image: '/assets/images/project4.jpg',
    title: 'Custom Home Renovations',
    category: 'home renovation',
  },
  {
    image: '/assets/images/project5.jpg',
    title: 'Kitchen Remodeling',
    category: 'home renovation',
  },
  {
    image: '/assets/images/project6.jpg',
    title: 'Bedroom Renovation',
    category: 'home renovation',
  },
];

const PROJECT_SLIDES = [...PROJECTS, ...PROJECTS];

export default function Projects() {
  return (
    <>
      <div className="projects-area pt-120">
        <div className="container mw-1690">
          <div className="d-flex flex-wrap gap-20 justify-content-between align-items-center mb-50 mt-0">
            <div>
              <span className="top-title">Latest Projects</span>
              <h2 className="main-title mw-720">
                We Believe In Quality Projects And More Meaningful Moments
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
              {PROJECT_SLIDES.map((project, index) => (
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

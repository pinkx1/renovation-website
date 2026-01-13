import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

const PROJECT_INFO = [
  { label: 'Project Name:', value: 'Custom Home renovation' },
  { label: 'Client::', value: 'Florence Smith' },
  { label: 'Tags:', value: 'painting, interior, building' },
  { label: 'Budgets:', value: '60,000 USD' },
  { label: 'Start Date:', value: '23 Jun 2025' },
  { label: 'End Date:', value: '17 September 2025' },
];

const CHECK_LIST = [
  'Comprehensive Residential & Commercial Painting Services',
  'Professional & Experienced Painters',
  'Top-Quality Materials & Eco-Friendly Options',
  'Detailed Surface Preparation',
  'Transparent Pricing & Free Estimates',
];

export default function SingleProjectPage() {
  return (
    <>
      <PageBanner
        title="Project Details"
        backgroundImage="/assets/images/page-bg3.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Project Details' },
        ]}
      />
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

                <h2>Custom Home Renovations</h2>
                <p>
                  Roller painting is a fast, efficient, and effective technique for achieving
                  smooth and even coverage on large surfaces. Ideal for walls and ceilings, this
                  method allows for a clean finish with minimal streaks and a consistent texture.
                </p>
                <p>
                  Our expert color consultants take into account your style preferences, existing
                  décor, architectural elements, and natural lighting to recommend shades that
                  complement your vision. With professional guidance, you can avoid costly mistakes,
                  gain confidence in your choices, and achieve a cohesive, beautiful result that
                  truly reflects your personality and purpose.
                </p>

                <h3>project solution</h3>
                <p>
                  Color consultation is a personalized service designed to help you choose the
                  perfect palette for your space. Whether refreshing a single room or transforming
                  an entire property, selecting the right colors can greatly impact mood
                </p>

                <ul className="p-0 mb-0 mt-4 list-unstyled check-list">
                  {CHECK_LIST.map((item) => (
                    <li className="d-flex align-items-center gap-10" key={item}>
                      <i className="ti ti-circle-check text-primary fs-20"></i>
                      <span className="text-secondary fw-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <h4>Process &amp; Challenge</h4>
                <p>
                  Wall painting is more than just adding color it's about creating atmosphere
                  enhancing style and expressing textures personality it’s a bold feature wall, a
                  calming neutral palette, or a creative design, wall painting can dramatically
                  transform any room. With the right combination of colors, textures, and
                  techniques, walls can reflect your taste and elevate
                </p>

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

                <p>
                  At our painting company, we are committed to transforming spaces with precision,
                  passion, and professionalism. Whether it's a residential home, commercial property,
                  or industrial site, our team of skilled painters delivers top-quality finishes
                  using premium materials and modern techniques. We pride ourselves on attention to
                  detail, reliability, and a customer-first approach
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="sidebar">
                <div className="sidebar-widget widget-search bg-gray2">
                  <h3>Search Here</h3>
                  <form className="position-relative">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <button type="submit" className="search-btn">
                      <i className="ti ti-search"></i>
                    </button>
                  </form>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>Project Information</h3>
                  <ul className="category-list p-0 m-0 list-unstyled">
                    {PROJECT_INFO.map((item) => (
                      <li
                        className="d-flex flex-wrap gap-10 justify-content-between align-items-center"
                        key={item.label}
                      >
                        <span className="text-secondary fw-medium">{item.label}</span>
                        <span>{item.value}</span>
                      </li>
                    ))}
                    <li className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                      <span className="text-secondary fw-medium">Rating:</span>
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
                        <span className="d-block text-white fs-22 fw-bold mb-2">Free Consultation</span>
                        <a
                          href="tel:+001(808)5550148"
                          className="d-block text-white text-decoration-none"
                        >
                          +(56)123-7865-3245 / +(12)345-7890-1234
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
                        <span className="d-block text-white fs-22 fw-bold mb-2">Email Support</span>
                        <a
                          href="mailto:heloo@pentu.com"
                          className="d-block text-white text-decoration-none"
                        >
                          heloo@pentu.com / support@pentu.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>Schedule Your Project</h3>
                  <form>
                    <div className="mb-4">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="mb-4">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                      <textarea className="form-control" placeholder="Your Message" rows={5}></textarea>
                    </div>
                    <button type="submit" className="default-btn border-0">
                      <span>
                        Contact Now
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

import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

const CATEGORIES = [
  'Interior Painting',
  'Wallpaper Design',
  'Exterior Painting',
  'Wallpaper Removal',
  'Tile installation',
];

const TAGS = ['Painting', 'Construction', 'Interior', 'Furniture', 'Building', 'Space', 'Urban'];

const COVERED_LEFT = [
  'Quality Painting Excellence',
  'Expert Consultation Assurance',
  'Certified Painters Guarantee',
  'Commercial Residential Multi-Level',
  'Odor-Free Application',
];

const COVERED_RIGHT = [
  'General Constructing',
  'Building Maintenance & Renovation',
  'Experienced Construction Professional',
  'Eco-Friendly Cleaning Products',
  'Customized Cleaning Packages',
];

export default function SingleServicePage() {
  return (
    <>
      <PageBanner
        title="Service Details"
        backgroundImage="/assets/images/page-bg3.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Service Details' },
        ]}
      />
      <div className="services-details-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
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
                  <h3>Service Category</h3>
                  <ul className="category-list p-0 m-0 list-unstyled">
                    {CATEGORIES.map((category) => (
                      <li key={category}>
                        <Link
                          to="/categories"
                          className="d-flex justify-content-between align-items-center text-decoration-none"
                        >
                          <span>{category}</span>
                          <i className="ti ti-arrow-right"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>Popular Tags</h3>
                  <ul className="p-0 m-0 list-unstyled d-flex flex-wrap tags">
                    {TAGS.map((tag) => (
                      <li key={tag}>
                        <Link to="/tags">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-widget bg-gray2">
                  <h3>Get In Touch</h3>
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

                <div className="sidebar-widget bg-dark p-0">
                  <img src="/assets/images/services14.jpg" className="rounded-top-4" alt="services" />
                  <div className="services-content position-relative z-1">
                    <h4 className="text-white fs-24 mb-3">Schedule your&nbsp;consultation</h4>
                    <p className="text-white mb-4">
                      Roller painting is a fast efficient and versatile method for covering large
                      surfaces with a smooth even coat paint Ideal for walls and ceilings roller
                      painting ensures
                    </p>

                    <div className="d-flex align-items-center gap-20">
                      <div className="flex-shrink-0">
                        <div className="icon">
                          <img src="/assets/images/phone3.svg" alt="phone" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="d-block text-white">Emergency Call</span>
                        <a
                          href="tel:+001(808)5550148"
                          className="d-block fs-18 fw-medium text-white text-decoration-none"
                        >
                          +001 (808) 5550148
                        </a>
                      </div>
                    </div>

                    <img
                      src="/assets/images/shape2.png"
                      className="position-absolute bottom-0 end-0 m-4 d-none d-xl-inline-block"
                      alt="shape"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="details-content">
                <div className="details-img">
                  <img src="/assets/images/services15.jpg" alt="services" />
                </div>

                <h2>Wallpaper Design Service</h2>
                <p>
                  Wallpaper removal is an essential step in preparing walls for a fresh, updated
                  look. Over time, old wallpaper can peel fade or become outdated, making removal
                  necessary for a clean and smooth surface. Professional wallpaper removal ensures
                  the process
                </p>
                <p>
                  Roller painting is a fast, efficient, and versatile method for covering large
                  surfaces with a smooth, even coat of paint. Ideal for walls and ceilings, roller
                  painting ensures consistent coverage with minimal streaks, making it a popular
                  choice for both residential and commercial projects. Using the right roller type
                  and technique, this method allows for quicker application
                </p>

                <h3>Our Range of Customer Services</h3>
                <p>
                  Professional tile installation ensures precise alignment, secure adhesion, and a
                  flawless finish that can withstand moisture, heavy traffic, and daily wear. With
                  its combination of beauty, functionality, and long-lasting performance, expertly
                  installed tile adds value and elegance to any room. From subtle tones to bold
                  statements, wall painting breathes new life into your space
                </p>

                <div className="row g-4 mb-4 pt-2">
                  <div className="col-sm-6">
                    <img src="/assets/images/services16.jpg" alt="services" />
                  </div>
                  <div className="col-sm-6">
                    <img src="/assets/images/services17.jpg" alt="services" />
                  </div>
                </div>

                <p>
                  Tile installation is a durable and stylish solution for enhancing floors, walls,
                  and surfaces in both residential and commercial spaces. Whether you're upgrading
                  a bathroom, kitchen, or entryway, tile offers a wide range of design options—from
                  classic ceramics to modern porcelains and natural stones remove adhesive residue,
                  and prepare
                </p>

                <h4>What’s&nbsp;covered&nbsp;in our service</h4>
                <p>
                  Wall painting is one of the most effective ways to transform the look and feel of
                  any space refreshing a single room or updating an entire property, the right paint
                  color and finish can enhance mood, reflect personal style, and create a clean
                </p>

                <div className="row mt-3 pt-lg-4 g-3">
                  <div className="col-sm-6">
                    <ul className="p-0 m-0 list-unstyled check-list">
                      {COVERED_LEFT.map((item) => (
                        <li className="d-flex align-items-center gap-10" key={item}>
                          <i className="ti ti-circle-check text-primary fs-20"></i>
                          <span className="text-secondary fw-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="p-0 m-0 list-unstyled check-list">
                      {COVERED_RIGHT.map((item) => (
                        <li className="d-flex align-items-center gap-10" key={item}>
                          <i className="ti ti-circle-check text-primary fs-20"></i>
                          <span className="text-secondary fw-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
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

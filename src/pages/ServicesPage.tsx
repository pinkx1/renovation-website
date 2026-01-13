import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

const SERVICES = [
  {
    icon: '/assets/images/icon-services1.svg',
    title: 'Interior Painting',
    description:
      'Interior painting is a powerful way to refresh and personalize your living or working space with the right colors and finishes it can enhance mood',
    image: '/assets/images/services1.jpg',
  },
  {
    icon: '/assets/images/icon-services2.svg',
    title: 'Wallpaper Design',
    description:
      'Wallpaper design is a creative and stylish way to elevate any interior space with texture pattern from bold prints to subtle textures wallpapers',
    image: '/assets/images/services2.jpg',
  },
  {
    icon: '/assets/images/icon-services3.svg',
    title: 'Exterior Painting',
    description:
      'Exterior painting is a vital part of maintaining and enhancing the appearanc and protection of It not only boosts curb appeal but also serves against',
    image: '/assets/images/services3.jpg',
  },
  {
    icon: '/assets/images/icon-services8.svg',
    title: 'Paint supply',
    description:
      'Paint supply is a crucial part of any painting or renovation project ensuring have access to the right products for a smooth high quality finish',
    image: '/assets/images/services8.jpg',
  },
  {
    icon: '/assets/images/icon-services9.svg',
    title: 'Exterior painting',
    description:
      'Exterior painting is a powerful way to refresh and protect the outside of your home or building enhances curb appeal with clean updated look protective',
    image: '/assets/images/services9.jpg',
  },
  {
    icon: '/assets/images/icon-services10.svg',
    title: 'Wallpaper Removal',
    description:
      'Wallpaper removal is an essential step in preparing walls for a fresh updated look over time wallpaper can peel fade or become outdated making',
    image: '/assets/images/services10.jpg',
  },
  {
    icon: '/assets/images/icon-services11.svg',
    title: 'Paint supply',
    description:
      'Paint supply is a crucial part of any painting or renovation project ensuring have access to the right products for a smooth high quality finish',
    image: '/assets/images/services11.jpg',
  },
  {
    icon: '/assets/images/icon-services12.svg',
    title: 'Exterior painting',
    description:
      'Exterior painting is a powerful way to refresh and protect the outside of your home or building enhances curb appeal with clean updated look protective',
    image: '/assets/images/services12.jpg',
  },
  {
    icon: '/assets/images/icon-services13.svg',
    title: 'Wallpaper Removal',
    description:
      'Wallpaper removal is an essential step in preparing walls for a fresh updated look over time wallpaper can peel fade or become outdated making',
    image: '/assets/images/services13.jpg',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        backgroundImage="/assets/images/page-bg2.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Our Services' },
        ]}
      />
      <div className="services-area mx-0 ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            {SERVICES.map((service) => (
              <div className="col-xl-4 col-md-6" key={service.title}>
                <Link
                  to="/single-service"
                  className="services-single-item text-decoration-none d-block bg-gray2 mt-0"
                >
                  <div className="d-flex align-items-center gap-35">
                    <div className="flex-shrink-0">
                      <img src={service.icon} alt="icon-services" />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="mb-0">{service.title}</h3>
                    </div>
                  </div>
                  <p>{service.description}</p>
                  <span className="read-more">
                    Read More
                    <img src="/assets/images/icon-right-arrow-black.svg" alt="icon-right-arrow-black" />
                  </span>

                  <img src={service.image} className="services-img2 img" alt="services" />
                </Link>
              </div>
            ))}
            <div className="col-lg-12">
              <div className="pagination-area mt-lg-4 d-flex align-items-center justify-content-center">
                <Link to="/services" className="next page-numbers border-0">
                  <i className="ti ti-chevron-left"></i>
                </Link>
                <span className="page-numbers border-0 current" aria-current="page">
                  1
                </span>
                <Link to="/services" className="page-numbers border-0">
                  2
                </Link>
                <Link to="/services" className="page-numbers border-0">
                  3
                </Link>
                <Link to="/services" className="next page-numbers border-0">
                  <i className="ti ti-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

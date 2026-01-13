import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

const TESTIMONIALS = [
  {
    text:
      '"From start to finish, the team made our entire interior painting project a stress-free experience. They helped us choose the perfect color palette, worked within our schedule, and kept us updated at every step. The painters were meticulous with their work, and they left our home clean and spotless transformation was unbelievable.”',
    name: 'Leonard Massie',
    role: 'Project Manager',
    avatar: '/assets/images/user15.jpg',
  },
  {
    text:
      '"I hired them to paint our office space, and the results were fantastic complete the job ahead of schedule, but they also managed to work around our business hours without disrupting our operations. The new look has completely refreshed the energy of our workplace and our staff loves the brighter more modern atmosphere.”',
    name: 'Caroline Bogert',
    role: 'Marketing Officer',
    avatar: '/assets/images/user16.jpg',
  },
  {
    text:
      '"We were overwhelmed with choices when planning to repaint our living room, but the color consultation service offered by this compan was a game changer helped us for pick the perfect tones to match our furniture and lighting. The execution was flawless no mess streaks and perfect edges care about their work their customers.”',
    name: 'Karen Pritchard',
    role: 'Interior Decorator',
    avatar: '/assets/images/user17.jpg',
  },
  {
    text:
      '"This painting company turned our outdated kitchen into a vibrant and modern space with just a few coats of carefully chosen paint. The crew was friendly, efficient, and took great pride in their work revived the heart of our home. I was particularly impressed their punctuality and attention to detail rare to find such dedicated.”',
    name: 'Rebeca Engebrets',
    role: 'Sales Manager',
    avatar: '/assets/images/user18.jpg',
  },
  {
    text:
      '"Hiring this team was one of the best decisions we made during our home renovation. They painted multiple rooms including ceilings and trims with incredible precision to care result was a fresh, elegant look that completely transformed our space arrived on time each day, worked and cleaned up thankful for their hard work."',
    name: 'Rebecca Edwards',
    role: 'Partner & CEO',
    avatar: '/assets/images/user19.jpg',
  },
  {
    text:
      '"We hired this team for both interior and exterior painting, and they did not disappoint. They provided a detailed quote, explained every step of the process, and delivered exceptional results. The quality of the paint and workmanship is top-tier, and the fresh look added a lot of value to our looking for a company that stands.”',
    name: 'Stephen Cordova',
    role: 'Interior Designer',
    avatar: '/assets/images/user20.jpg',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        title="Testimonials"
        backgroundImage="/assets/images/page-bg6.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Testimonials' },
        ]}
      />
      <div className="testimonial-area mx-0 rounded-0 ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            {TESTIMONIALS.map((item) => (
              <div className="col-lg-6" key={item.name}>
                <div className="testimonial-single-item style-four">
                  <div className="d-flex gap-6 mb-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <i className="ti ti-star-filled fs-20" key={index}></i>
                    ))}
                  </div>

                  <p>{item.text}</p>

                  <div className="mt-4 pt-lg-3">
                    <div className="d-flex flex-wrap align-items-center gap-10 justify-content-between">
                      <div className="d-flex align-items-center gap-25">
                        <div className="flex-shrink-0">
                          <img src={item.avatar} className="rounded-2 border-0" alt="user" />
                        </div>
                        <div className="flex-grow-1">
                          <h3 className="mb-0">{item.name}</h3>
                          <span>{item.role}</span>
                        </div>
                      </div>
                      <img src="/assets/images/quote2.svg" className="border-0" alt="quote" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-12">
              <div className="pagination-area mt-lg-4 d-flex align-items-center justify-content-center">
                <Link to="/testimonials" className="next page-numbers border-0">
                  <i className="ti ti-chevron-left"></i>
                </Link>
                <span className="page-numbers border-0 current" aria-current="page">
                  1
                </span>
                <Link to="/testimonials" className="page-numbers border-0">
                  2
                </Link>
                <Link to="/testimonials" className="page-numbers border-0">
                  3
                </Link>
                <Link to="/testimonials" className="next page-numbers border-0">
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

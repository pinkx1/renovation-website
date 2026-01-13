const TESTIMONIALS = [
  {
    quote: 'Impeccable craftsmanship and outstanding service!',
    text:
      'What impressed us most was the level of communication and kept informed stage and concerns change were addressed promptly and with care the project completed to on time and within the agreed budget which is rare in remodeling our house happier with the results highly recommend their services to anyone looking transform their living space. It was a smooth stress free experience',
    name: 'Marquite  Pridgen',
    location: 'Brooklyn, USA',
    avatar: '/assets/images/user5.jpg',
  },
  {
    quote: 'Exceeded Our Expectations',
    text:
      '"From start to finish, the experience was outstanding. The painters were detail-oriented, respectful of our space, and finished earlier than expected. The color consultation helped us choose the perfect tones that completely refreshed our living room. Highly recommend their services!"',
    name: 'Daniela  Simmons',
    location: 'Chicago, USA',
    avatar: '/assets/images/user6.jpg',
  },
];

const USER_AVATARS = [
  '/assets/images/user7.jpg',
  '/assets/images/user8.jpg',
  '/assets/images/user9.jpg',
];

export default function Testimonials() {
  return (
    <>
      <div className="testimonial-area-two bg-secondary ptb-120">
        <div className="container mw-1690">
          <div className="d-flex flex-wrap gap-20 justify-content-between align-items-center mb-50 mt-0">
            <div>
              <span className="top-title two text-white">testimonial</span>
              <h2 className="main-title text-white mw-720">
                What Our Clients Say About Our Painting Company
              </h2>
            </div>
            <div className="default-slide-controller d-flex align-items-end gap-10 project-arrow">
              <div
                className="slide-icon next2"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <i className="ti ti-arrow-left bg-primary"></i>
              </div>
              <div
                className="slide-icon prev2"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                <i className="ti ti-arrow-right bg-primary"></i>
              </div>
            </div>
          </div>
          <div className="row g-4 align-items-xxl-center">
            <div className="col-lg-6">
              <div className="testimonial-img-two position-relative me-xxl-3 h-100">
                <div style={{ position: 'relative', width: '754px', overflow: 'hidden', borderRadius: '20px', isolation: 'isolate', height: '321px' }}>
                  <img
                    src="/assets/images/testimonial2.jpg"
                    className="ukiyo h-100"
                    alt="testimonial"
                    style={{
                      display: 'block',
                      overflow: 'hidden',
                      backfaceVisibility: 'hidden',
                      objectFit: 'cover',
                      width: '754px',
                      height: '481.5px',
                    }}
                  />
                </div>
                <div className="d-flex user-wrap align-items-center">
                  <div className="d-flex">
                    {USER_AVATARS.map((avatar) => (
                      <img src={avatar} alt="user" key={avatar} />
                    ))}
                  </div>
                  <p>
                    Trusted By <span>1000+</span> Satisfied Customers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="swiper testimonial-slide">
                <div className="swiper-wrapper">
                  {TESTIMONIALS.map((item) => (
                    <div className="swiper-slide" key={item.name}>
                      <div className="testimonial-single-item style-two">
                        <div className="mb-3">
                          <div className="d-flex gap-6 mb-3">
                            {Array.from({ length: 5 }).map((_, index) => (
                              <i className="ti ti-star-filled fs-20" key={`${item.name}-star-${index}`}></i>
                            ))}
                          </div>
                          <span className="mb-0 fw-medium fs-24 text-secondary">"{item.quote}"</span>
                        </div>
                        <p>{item.text}</p>
                        <div className="d-flex align-items-center gap-25 info">
                          <div className="flex-shrink-0">
                            <img src={item.avatar} className="rounded-circle" alt="user" />
                          </div>
                          <div className="flex-grow-1">
                            <h3 className="mb-0">{item.name}</h3>
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination-testimonial"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

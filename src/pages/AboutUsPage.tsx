import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Partners from '../components/Partners';
import Subscribe from '../components/Subscribe';
import Team from '../components/Team';
import WhyChooseUs from '../components/WhyChooseUs';

const PROGRESS_ITEMS = [
  { label: 'Satisfaction', percent: 90 },
  { label: 'Revenue', percent: 80 },
];

const KNOW_ITEMS = [
  {
    icon: '/assets/images/icon-get-to-know1.svg',
    number: '01',
    title: 'Our Mission',
    text: 'Our mission is to deliver painting solution that enhance to character of space we touch',
  },
  {
    icon: '/assets/images/icon-get-to-know2.svg',
    number: '02',
    title: 'Our Vision',
    text: 'We aim to inspire and transform through innovative sustainable and dedication to brushstroke',
  },
];

const WORKING_STEPS = [
  {
    icon: '/assets/images/icon-mouse.svg',
    count: 1,
    title: 'Get A quote',
    text: 'Please Contact us use our online form to request a quote',
  },
  {
    icon: '/assets/images/icon-origami.svg',
    count: 2,
    title: 'Schedule A Consultation',
    text: 'We visit your location to discuss your needs and preferences',
  },
  {
    icon: '/assets/images/icon-canvas.svg',
    count: 3,
    title: 'Painting Process',
    text: 'Our team starts the painting project ensuring quality and cleanliness',
  },
  {
    icon: '/assets/images/icon-art-book.svg',
    count: 4,
    title: 'Final Walkthrough',
    text: 'We review the finished work with you to ensure satisfaction',
  },
];

const ABOUT_TESTIMONIALS = [
  {
    quote: '“Our Home Looks Brand New”',
    quoteAsHeading: false,
    text:
      '“The team did an amazing job transforming our home with fresh, vibrant colors. They were punctual, professional, and left everything spotless painting recommend this painting company for anyone looking for quality work! from the initial consultation to the final coat everything choices.”',
    name: 'Marquite Pridgen',
    location: 'Brooklyn, USA',
    avatar: '/assets/images/user5.jpg',
  },
  {
    quote: '“Exceeded Our Expectations”',
    quoteAsHeading: true,
    text:
      '“From start to finish, the experience was outstanding. The painters were detail-oriented, respectful of our space, and finished earlier than expected. The color consultation helped us choose the perfect tones that completely refreshed our living room. Highly recommend their services!”',
    name: 'Daniela Simmons',
    location: 'Chicago, USA',
    avatar: '/assets/images/user6.jpg',
  },
];

const marqueeTexts = Array.from({ length: 6 }, () => [
  'Quality Painting Excellence',
  'Certified Painters Guarantee',
]).flat();
marqueeTexts.push('Quality Painting Excellence', 'Comfort and familiarity');

const marqueeNodes = marqueeTexts.flatMap((text, index) => {
  const nodes = [
    <span className="monogram text-secondary" key={`text-${text}-${index}`}>
      {text}
    </span>,
  ];

  if (index < marqueeTexts.length - 1) {
    nodes.push(
      <span className="monogram" key={`image-${text}-${index}`}>
        <img src="/assets/images/monogram-img.jpg" alt="monogram-img" />
      </span>
    );
  }

  return nodes;
});
const IMAGE_ONE_STYLE = {
  position: 'relative' as const,
  width: '439px',
  overflow: 'hidden',
  borderRadius: '15px',
  isolation: 'isolate' as const,
  height: '406px',
};

const IMAGE_ONE_IMG_STYLE = {
  display: 'block',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  objectFit: 'cover' as const,
  width: '439px',
  height: '609px',
};

const IMAGE_TWO_STYLE = {
  position: 'relative' as const,
  width: '439px',
  overflow: 'hidden',
  borderRadius: '15px',
  isolation: 'isolate' as const,
  height: '695px',
};

const IMAGE_TWO_IMG_STYLE = {
  display: 'block',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  objectFit: 'cover' as const,
  width: '439px',
  height: '1042.5px',
};

const TESTIMONIAL_IMAGE_STYLE = {
  position: 'relative' as const,
  width: '100%',
  overflow: 'hidden',
  height: '690px',
};

const TESTIMONIAL_IMAGE_INNER_STYLE = {
  display: 'block',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  objectFit: 'cover' as const,
  width: '800px',
  height: '1035px',
};

export default function AboutUsPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        backgroundImage="/assets/images/page-bg1.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />
      <div className="get-to-know-us-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            <div className="col-xxl-7">
              <div className="get-to-know-img-wrap">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="get-to-know-img">
                      <div style={IMAGE_ONE_STYLE}>
                        <img
                          src="/assets/images/get-to-know1.jpg"
                          className="ukiyo object-fit-contain"
                          alt="get-to-know"
                          style={IMAGE_ONE_IMG_STYLE}
                        />
                      </div>

                      <div className="get-to-us bg-fff5e9">
                        <h3>Company progress</h3>

                        {PROGRESS_ITEMS.map((item) => (
                          <div className="mb-3" key={item.label}>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span className="fs-18 text-secondary">{item.label}</span>
                              <span className="fs-18 text-secondary">{item.percent}%</span>
                            </div>
                            <div
                              className="progress"
                              role="progressbar"
                              aria-label="Example with label"
                              aria-valuenow={item.percent}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ height: '6px' }}
                            >
                              <div
                                className="progress-bar"
                                style={{ width: `${item.percent}%`, height: '6px' }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="get-to-know-img">
                      <div style={IMAGE_TWO_STYLE}>
                        <img
                          src="/assets/images/get-to-know2.jpg"
                          className="ukiyo object-fit-contain"
                          alt="get-to-know"
                          style={IMAGE_TWO_IMG_STYLE}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-5">
              <div
                className="get-to-know-us-content"
                data-cues="slideInUp"
                data-duration="900"
                data-disabled="true"
              >
                <div className="mb-40 mt-0" data-cue="slideInUp" data-duration="900">
                  <span className="top-title">Get to Know Us</span>
                  <h2 className="main-title">Transform your space with our skilled full members</h2>
                  <p>
                    Perfect for business cards invitation packaging and promotional materials digital
                    foiling enhances visual appeal and leaves a lasting impression with its elegant
                  </p>
                </div>

                <div className="row g-4" data-cue="slideInUp" data-duration="900">
                  {KNOW_ITEMS.map((item) => (
                    <div className="col-md-6" key={item.title}>
                      <div className="get-to-know-us-single-item bg-gray2">
                        <div className="d-flex justify-content-between align-items-center mb-30 mt-0">
                          <img src={item.icon} alt="icon-get-to-know" />
                          <span className="text-secondary">{item.number}</span>
                        </div>

                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="d-flex flex-wrap align-items-center gap-30 about-btn"
                  data-cue="slideInUp"
                  data-duration="900"
                >
                  <Link to="/about-us" className="default-btn active">
                    <div className="d-flex gap-6 align-items-center">
                      More About Us
                      <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                    </div>
                  </Link>

                  <div className="d-flex align-items-center get-author">
                    <div className="flex-shrink-0">
                      <img src="/assets/images/user4.jpg" className="rounded-circle" alt="user" />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="mb-1">Sarah Brown</h3>
                      <span>CEO &amp; Founder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Partners />

      <div
        className="working-process-area ptb-120 bg-img"
        style={{ backgroundImage: 'url(/assets/images/banner-bg.jpg)' }}
      >
        <div className="container mw-1690">
          <div className="text-center mb-40 mt-0" data-cues="slideInUp" data-duration="900" data-disabled="true">
            <span className="top-title" data-cue="slideInUp" data-duration="900">
              working process
            </span>
            <h2 className="main-title mx-auto mw-100" data-cue="slideInUp" data-duration="900">
              Our Step By Step Painting Process
            </h2>
          </div>

          <div className="row g-4" data-cues="slideInUp" data-duration="900" data-disabled="true">
            {WORKING_STEPS.map((step) => (
              <div className="col-lg-3 col-md-6" data-cue="slideInUp" data-duration="900" key={step.title}>
                <div className="working-process-single-item">
                  <div className="icon">
                    <img src={step.icon} alt={step.title} />
                    <span className="count">{step.count}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WhyChooseUs />

      <div
        className="testimonial-area overflow-hidden bg-img mx-0 rounded-0"
        style={{ backgroundImage: 'url(/assets/images/banner-bg.jpg)' }}
      >
        <div className="container-fluid p-lg-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="testimonial-img-one position-relative h-100">
                <div style={TESTIMONIAL_IMAGE_STYLE}>
                  <img
                    src="/assets/images/testimonial.jpg"
                    className="h-100 object-fit-cover ukiyo"
                    alt="testimonial"
                    style={TESTIMONIAL_IMAGE_INNER_STYLE}
                  />
                </div>
                <a
                  href="https://youtu.be/78GehqOuq-A?si=WSjyu8eJ-TPiQ5QP"
                  className="video-btn mx-auto position-absolute top-50 start-50 translate-middle"
                  data-fslightbox="2"
                >
                  <i className="ti ti-player-play-filled"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ptb-120">
                <div className="testimonial-content-wrap">
                  <div className="mb-30 mt-0">
                    <span className="top-title">testimonial</span>
                    <h2 className="main-title mw-100">
                      What Our Clients Say About Our Painting Company
                    </h2>
                  </div>

                  <div className="swiper testimonial-slide position-relative">
                    <div className="swiper-wrapper">
                      {ABOUT_TESTIMONIALS.map((item) => (
                        <div className="swiper-slide" key={item.name}>
                          <div className="testimonial-single-item">
                            <div className="d-flex flex-wrap align-items-center gap-25 mb-3">
                              <div className="d-flex gap-6">
                                {Array.from({ length: 5 }).map((_, index) => (
                                  <i className="ti ti-star-filled fs-20" key={index}></i>
                                ))}
                              </div>
                              {item.quoteAsHeading ? (
                                <h4 className="mb-0">{item.quote}</h4>
                              ) : (
                                <span className="mb-0 fw-medium text-secondary">{item.quote}</span>
                              )}
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
        </div>
      </div>

      <Team />
      <div className="marquee-wrapper monogram-wrap ptb-120">
        <div className="marquee speed-300">{marqueeNodes}</div>
      </div>
      <Subscribe />
    </>
  );
}

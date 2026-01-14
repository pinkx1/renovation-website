import { Link } from 'react-router-dom';
import Partners from '../components/Partners';
import Subscribe from '../components/Subscribe';
import Team from '../components/Team';
import WhyChooseUs from '../components/WhyChooseUs';
import { useI18n } from '../i18n/I18nProvider';

const WORKING_ICONS = [
  '/assets/images/icon-mouse.svg',
  '/assets/images/icon-origami.svg',
  '/assets/images/icon-canvas.svg',
  '/assets/images/icon-art-book.svg',
];
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
  objectPosition: 'top',
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
  objectPosition: 'top',
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
  const { t } = useI18n();
  const progressItems = t<{ label: string; percent: number }[]>('aboutPage.progressItems', []);
  const knowItems = t<{ number: string; title: string; text: string }[]>('aboutPage.knowItems', []);
  const workingSteps = t<{ title: string; text: string }[]>('aboutPage.workingSteps', []);
  const testimonials = t<
    { quote: string; quoteAsHeading: boolean; text: string; name: string; location: string }[]
  >('aboutPage.testimonials', []);
  const marqueeTexts = t<string[]>('aboutPage.marquee', []);

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

  return (
    <>
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
                          className="ukiyo"
                          alt="get-to-know"
                          style={IMAGE_ONE_IMG_STYLE}
                        />
                      </div>

                      <div className="get-to-us bg-fff5e9">
                        <h3>{t('aboutPage.progressTitle')}</h3>

                        {progressItems.map((item) => (
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
                          className="ukiyo"
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
              <div className="get-to-know-us-content">
                <div className="mb-40 mt-0">
                  <span className="top-title">{t('aboutPage.getToKnowTitle')}</span>
                  <h2 className="main-title">{t('aboutPage.getToKnowHeading')}</h2>
                  <p>{t('aboutPage.getToKnowText')}</p>
                </div>

                <div className="row g-4">
                  {knowItems.map((item, index) => (
                    <div className="col-md-6" key={`${item.title}-${index}`}>
                      <div className="get-to-know-us-single-item bg-gray2">
                        <div className="d-flex justify-content-between align-items-center mb-30 mt-0">
                          <img src={`/assets/images/icon-get-to-know${index + 1}.svg`} alt="icon-get-to-know" />
                          <span className="text-secondary">{item.number}</span>
                        </div>

                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex flex-wrap align-items-center gap-30 about-btn">
                  <div className="d-flex align-items-center get-author">
                    <div className="flex-shrink-0">
                      <img src="/assets/images/user4.jpg" className="rounded-circle" alt="user" />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="mb-1">{t('getToKnow.authorName')}</h3>
                      <span>{t('getToKnow.authorRole')}</span>
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
              {t('aboutPage.workingProcessTop')}
            </span>
            <h2 className="main-title mx-auto mw-100" data-cue="slideInUp" data-duration="900">
              {t('aboutPage.workingProcessTitle')}
            </h2>
          </div>

          <div className="row g-4" data-cues="slideInUp" data-duration="900" data-disabled="true">
            {workingSteps.map((step, index) => (
              <div className="col-lg-3 col-md-6" data-cue="slideInUp" data-duration="900" key={`${step.title}-${index}`}>
                <div className="working-process-single-item">
                  <div className="icon">
                    <img src={WORKING_ICONS[index]} alt={step.title} />
                    <span className="count">{index + 1}</span>
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
                    <span className="top-title">{t('aboutPage.testimonialTop')}</span>
                    <h2 className="main-title mw-100">{t('aboutPage.testimonialTitle')}</h2>
                  </div>

                  <div className="swiper testimonial-slide position-relative">
                    <div className="swiper-wrapper">
                      {testimonials.map((item, index) => (
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
                                <img src={`/assets/images/user${index === 0 ? '5' : '6'}.jpg`} className="rounded-circle" alt="user" />
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

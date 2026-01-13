import Subscribe from '../components/Subscribe';

const INFO_CARDS = [
  {
    title: 'Phone Number',
    icon: '/assets/images/phone2.svg',
    image: '/assets/images/phone.png',
    details: [
      { label: '+(002) 0106-8710-594', href: 'tel:+(002)0106-8710-594' },
      { label: '+(002) 0106-8710-586', href: 'tel:+(002)0106-8710-586' },
    ],
  },
  {
    title: 'Our Email',
    icon: '/assets/images/email2.svg',
    image: '/assets/images/email.png',
    details: [
      { label: 'support@pentu.com', href: 'mailto:support@pentu.com' },
      { label: 'heloo@pentu.com', href: 'mailto:heloo@pentu.com' },
    ],
  },
  {
    title: 'Our Location',
    icon: '/assets/images/location-pin.svg',
    image: '/assets/images/location-pin2.png',
    text: 'West 2nd lane Inner circular road Phoenix Arizona, 59412',
  },
];

const IMAGE_WRAPPER_STYLE = {
  position: 'relative' as const,
  width: '770px',
  overflow: 'hidden',
  borderRadius: '16px',
  isolation: 'isolate' as const,
  height: '499px',
};

const IMAGE_STYLE = {
  display: 'block',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  objectFit: 'cover' as const,
  width: '770px',
  height: '748.5px',
};

export default function ContactUsPage() {
  return (
    <>
      <div className="map-area overflow-hidden">
        <div className="container-fluid p-0">
          <iframe
            src="/contact-us_page_files/embed.html"
            style={{ border: 0, width: '100%', height: '650px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
      </div>

      <div className="contact-us-info-area pt-120">
        <div className="container mw-1690">
          <div className="row g-4 justify-content-center">
            {INFO_CARDS.map((card) => (
              <div className="col-xl-4 col-md-6" key={card.title}>
                <div className="d-flex contact-us-info-single-item bg-gray2 gap-25 position-relative z-1">
                  <div className="flex-shrink-0">
                    <div className="icon bg-warning">
                      <img src={card.icon} alt={card.title} />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h3>{card.title}</h3>
                    {card.details ? (
                      card.details.map((detail) => (
                        <a href={detail.href} className="d-block" key={detail.label}>
                          {detail.label}
                        </a>
                      ))
                    ) : (
                      <p>{card.text}</p>
                    )}
                  </div>

                  <img
                    src={card.image}
                    className="position-absolute top-50 end-0 translate-middle-y mx-5"
                    alt={card.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-us-area-three ptb-120">
        <div className="container mw-1690">
          <div className="mb-50 text-center">
            <span className="top-title">get in touch</span>
            <h2 className="main-title mx-auto">Don’t Hesitate To Contact Us</h2>
          </div>

          <div className="row g-4 align-items-center" data-cues="slideInUp" data-duration="900" data-disabled="true">
            <div className="col-xl-6" data-cue="slideInUp" data-duration="900">
              <div className="position-relative z-1 h-100">
                <div style={IMAGE_WRAPPER_STYLE}>
                  <img
                    src="/assets/images/contact-us-img2.jpg"
                    className="rounded-4 h-100 object-fit-cover ukiyo"
                    alt="contact-us-img"
                    style={IMAGE_STYLE}
                  />
                </div>
                <a
                  href="https://youtu.be/78GehqOuq-A?si=WSjyu8eJ-TPiQ5QP"
                  className="position-absolute top-50 start-50 translate-middle text-decoration-none"
                  data-fslightbox="2"
                >
                  <img src="/assets/images/circle.svg" className="circle" alt="circle" />
                  <i className="ti ti-player-play-filled fs-24 position-absolute top-50 start-50 translate-middle"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-6" data-cue="slideInUp" data-duration="900">
              <div className="contact-us-from bg-gray2 mx-0">
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-20">
                        <input type="text" className="form-control border-0" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-20">
                        <input type="email" className="form-control border-0" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-20">
                        <input type="number" className="form-control border-0" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-20">
                        <input type="text" className="form-control border-0" placeholder="Subject" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-20">
                        <textarea
                          rows={7}
                          className="form-control border-0"
                          placeholder="Write Your Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="default-btn border-0 active">
                        <span className="gap-10 d-flex">
                          <span>Send Message</span>
                          <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

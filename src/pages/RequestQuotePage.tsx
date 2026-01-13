import PageBanner from '../components/PageBanner';
import Partners from '../components/Partners';
import Subscribe from '../components/Subscribe';

const IMAGE_WRAPPER_STYLE = {
  position: 'relative' as const,
  width: '770px',
  overflow: 'hidden',
  borderRadius: '16px',
  isolation: 'isolate' as const,
  height: '579px',
};

const IMAGE_STYLE = {
  display: 'block',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  objectFit: 'cover' as const,
  width: '770px',
  height: '868.5px',
};

export default function RequestQuotePage() {
  return (
    <>
      <PageBanner
        title="Request A Quote"
        backgroundImage="/assets/images/page-bg10.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Request A Quote' },
        ]}
      />
      <div className="contact-us-area ptb-120">
        <div className="container mw-1690">
          <div className="mb-50 text-center">
            <span className="top-title">quote</span>
            <h2 className="main-title mx-auto">Request A Quote Now For Your Next Project</h2>
          </div>

          <div className="row g-4 align-items-center" data-cues="slideInUp" data-duration="900" data-disabled="true">
            <div className="col-xl-6" data-cue="slideInUp" data-duration="900">
              <div className="position-relative z-1 h-100">
                <div style={IMAGE_WRAPPER_STYLE}>
                  <img
                    src="/assets/images/request-quote.jpg"
                    className="rounded-4 h-100 object-fit-cover ukiyo"
                    alt="request-quote"
                    style={IMAGE_STYLE}
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
                        <select
                          className="form-select form-control border-0"
                          aria-label="Default select example"
                          defaultValue=""
                        >
                          <option value="">Project Category</option>
                          <option value="home-renovation">Home Renovation</option>
                          <option value="kitchen-remodeling">Kitchen Remodeling</option>
                          <option value="bedroom-renovation">Bedroom Renovation</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-20">
                        <select
                          className="form-select form-control border-0"
                          aria-label="Default select example"
                          defaultValue=""
                        >
                          <option value="">Project Location</option>
                          <option value="seattle">Seattle</option>
                          <option value="san-francisco">San Francisco</option>
                          <option value="austin">Austin</option>
                        </select>
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
      <Partners />
      <Subscribe />
    </>
  );
}

import Partners from '../components/Partners';
import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

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
  const { t } = useI18n();
  const placeholders = t<{
    name: string;
    email: string;
    phone: string;
    category: string;
    location: string;
    message: string;
  }>('requestQuote.placeholders', {
    name: '',
    email: '',
    phone: '',
    category: '',
    location: '',
    message: '',
  });
  const categories = t<string[]>('requestQuote.categories', []);
  const locations = t<string[]>('requestQuote.locations', []);

  return (
    <>
      <div className="contact-us-area ptb-120">
        <div className="container mw-1690">
          <div className="mb-50 text-center">
            <span className="top-title">{t('requestQuote.topTitle')}</span>
            <h2 className="main-title mx-auto">{t('requestQuote.title')}</h2>
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
                        <input type="text" className="form-control border-0" placeholder={placeholders.name} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-20">
                        <input type="email" className="form-control border-0" placeholder={placeholders.email} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-20">
                        <input type="number" className="form-control border-0" placeholder={placeholders.phone} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-20">
                        <select
                          className="form-select form-control border-0"
                          aria-label="Default select example"
                          defaultValue=""
                        >
                          <option value="">{placeholders.category}</option>
                          {categories.map((category) => (
                            <option key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                              {category}
                            </option>
                          ))}
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
                          <option value="">{placeholders.location}</option>
                          {locations.map((location) => (
                            <option key={location} value={location.toLowerCase().replace(/\s+/g, '-')}>
                              {location}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-20">
                        <textarea
                          rows={7}
                          className="form-control border-0"
                          placeholder={placeholders.message}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="default-btn border-0 active">
                        <span className="gap-10 d-flex">
                          <span>{t('common.sendMessage')}</span>
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

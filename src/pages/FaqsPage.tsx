import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

const IMAGE_WRAPPER_STYLE = {
  position: 'relative' as const,
  width: '730px',
  overflow: 'hidden',
  borderRadius: '20px',
  isolation: 'isolate' as const,
  height: '430px',
};

const IMAGE_STYLE = {
  display: 'block',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  objectFit: 'cover' as const,
  width: '730px',
  height: '645px',
};

export default function FaqsPage() {
  const { t } = useI18n();
  const faqs = t<{ question: string; answer: string }[]>('faqsPage.faqs', []);
  const company = t<{ phone: string }>('company', { phone: '' });
  const phoneHref = company.phone.replace(/[^\d+]/g, '');
  const formPlaceholders = t<{
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }>('faqsPage.formPlaceholders', {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  return (
    <>
      <div className="faq-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="mb-50 mt-0" data-cues="slideInUp" data-duration="900" data-disabled="true">
                  <span className="top-title" data-cue="slideInUp" data-duration="900">
                    {t('faqsPage.topTitle')}
                  </span>
                  <h2 className="main-title" data-cue="slideInUp" data-duration="900">
                    {t('faqsPage.title')}
                  </h2>
                  <p data-cue="slideInUp" data-duration="900">
                    {t('faqsPage.description')}
                  </p>
                </div>

                <div className="faq-img">
                  <div style={IMAGE_WRAPPER_STYLE}>
                    <img
                      src="/assets/images/faq.jpg"
                      className="img ukiyo object-fit-contain"
                      alt="faq"
                      style={IMAGE_STYLE}
                    />
                  </div>

                  <div className="d-flex align-items-center call-us">
                    <div className="flex-shrink-0">
                      <div className="icon">
                        <img src="/assets/images/support.svg" alt="support" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3>{t('faqsPage.helpTitle')}</h3>
                      <p>
                        {t('faqsPage.helpLabel')}{' '}
                        <a href={`tel:${phoneHref}`}>{company.phone}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="accordion faq-wrapper"
                id="accordionExample"
                data-cues="slideInUp"
                data-duration="900"
                data-disabled="true"
              >
                {faqs.map((item, index) => (
                  <div
                    className="accordion-item bg-gray2"
                    data-cue="slideInUp"
                    data-duration="900"
                    key={item.question}
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button text-secondary bg-transparent${
                          index === 0 ? '' : ' collapsed'
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-${index}`}
                        aria-expanded={index === 0 ? 'true' : 'false'}
                        aria-controls={`faq-${index}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`faq-${index}`}
                      className={`accordion-collapse collapse${index === 0 ? ' show' : ''}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-area pb-120">
        <div className="container mw-1690">
          <div className="mb-50 text-center">
            <span className="top-title">{t('faqsPage.formTitle')}</span>
            <h2 className="main-title mx-auto">{t('faqsPage.formHeading')}</h2>
          </div>

          <div className="contact-us-from bg-gray2 mx-0">
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mb-20">
                    <input type="text" className="form-control border-0" placeholder={formPlaceholders.name} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-20">
                    <input type="email" className="form-control border-0" placeholder={formPlaceholders.email} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-20">
                    <input type="number" className="form-control border-0" placeholder={formPlaceholders.phone} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-20">
                    <input type="text" className="form-control border-0" placeholder={formPlaceholders.subject} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-20">
                    <textarea
                      rows={5}
                      className="form-control border-0"
                      placeholder={formPlaceholders.message}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <button type="submit" className="default-btn border-0 active">
                  <span className="gap-10 d-flex">
                    <span>{t('common.sendMessage')}</span>
                    <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

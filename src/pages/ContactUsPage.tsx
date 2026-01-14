import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

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
  const { t } = useI18n();
  const company = t<{
    phone: string;
    phoneAlt: string;
    email: string;
    emailAlt: string;
  }>('company', {
    phone: '',
    phoneAlt: '',
    email: '',
    emailAlt: '',
  });
  const normalizePhone = (value: string) => value.replace(/[^\d+]/g, '');
  const infoCards = [
    {
      title: t('contactPage.infoCards.phone'),
      icon: '/assets/images/phone2.svg',
      image: '/assets/images/phone.png',
      details: [
        { label: company.phone, href: `tel:${normalizePhone(company.phone)}` },
        { label: company.phoneAlt, href: `tel:${normalizePhone(company.phoneAlt)}` },
      ],
    },
    {
      title: t('contactPage.infoCards.email'),
      icon: '/assets/images/email2.svg',
      image: '/assets/images/email.png',
      details: [
        { label: company.email, href: `mailto:${company.email}` },
        { label: company.emailAlt, href: `mailto:${company.emailAlt}` },
      ],
    },
    {
      title: t('contactPage.infoCards.location'),
      icon: '/assets/images/location-pin.svg',
      image: '/assets/images/location-pin2.png',
      text: t('contactPage.locationText'),
    },
  ];

  return (
    <>
      <div className="map-area overflow-hidden">
        <div className="container-fluid p-0">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=37.6044%2C55.7472%2C37.63%2C55.7647&layer=mapnik&marker=55.7558%2C37.6173"
            style={{ border: 0, width: '100%', height: '520px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('contactPage.mapTitle')}
          ></iframe>
        </div>
      </div>

      <div className="contact-us-info-area pt-120">
        <div className="container mw-1690">
          <div className="row g-4 justify-content-center">
            {infoCards.map((card) => (
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
            <span className="top-title">{t('contactPage.getInTouchTop')}</span>
            <h2 className="main-title mx-auto">{t('contactPage.getInTouchTitle')}</h2>
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
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder={t('contactPage.formPlaceholders.name')}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-20">
                        <input
                          type="email"
                          className="form-control border-0"
                          placeholder={t('contactPage.formPlaceholders.email')}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-20">
                        <input
                          type="number"
                          className="form-control border-0"
                          placeholder={t('contactPage.formPlaceholders.phone')}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-20">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder={t('contactPage.formPlaceholders.subject')}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mb-20">
                        <textarea
                          rows={7}
                          className="form-control border-0"
                          placeholder={t('contactPage.formPlaceholders.message')}
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
      <Subscribe />
    </>
  );
}

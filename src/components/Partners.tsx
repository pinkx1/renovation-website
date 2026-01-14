import { useI18n } from '../i18n/I18nProvider';

const PARTNER_LOGOS = [
  '/assets/images/partner7.png',
  '/assets/images/partner8.png',
  '/assets/images/partner9.png',
  '/assets/images/partner10.png',
  '/assets/images/partner11.png',
  '/assets/images/partner12.png',
];

const PARTNER_SLIDES = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

export default function Partners() {
  const { t } = useI18n();

  return (
    <>
      <div className="partners-area pb-120">
        <div className="container mw-1690">
          <span className="partner-title mb-60 text-secondary">
            {t('partners.title')}
          </span>
          <div className="swiper partner-slide text-center">
            <div className="swiper-wrapper align-items-center">
              {PARTNER_SLIDES.map((logo, index) => (
                <div className="swiper-slide" key={`${logo}-${index}`}>
                  <img src={logo} alt="partner" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

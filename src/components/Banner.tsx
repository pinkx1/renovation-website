import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function Banner() {
  const { t } = useI18n();
  const stats = t<{ value: number; suffix: string; label: string }[]>('banner.stats', []);

  return (
    <>
      <div className="banner-area-two bg-img mx-0 overflow-hidden" style={{ backgroundImage: "url(/assets/images/banner-bg.jpg)" }}>
          <div className="container mw-1690">
              <div className="row align-items-center g-4">
                  <div className="col-lg-6">
                      <div className="banner-content-two" data-cues="slideInUp" data-group="images" data-duration="900" data-disabled="true">
                          <h1 data-cue="slideInUp" data-duration="900" data-group="images" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "270ms", animationDirection: "normal", animationFillMode: "both" }}>{t('banner.title')}</h1>
                          <p data-cue="slideInUp" data-duration="900" data-group="images" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "540ms", animationDirection: "normal", animationFillMode: "both" }}>{t('banner.description')}</p>
                          <div className="d-flex flex-wrap gap-30 banner-btn align-items-center" data-cue="slideInUp" data-duration="900" data-group="images" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "810ms", animationDirection: "normal", animationFillMode: "both" }}>
                              <Link to="/services" className="default-btn">
                                  <div className="d-flex align-items-center gap-10 text-white">
                                      {t('banner.buttons.explore')}
                                      <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                                  </div>
                              </Link>
                              <Link to="/about-us" className="default-btn active">
                                  <div className="d-flex align-items-center gap-10">
                                      {t('banner.buttons.learn')}
                                      <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                                  </div>
                              </Link>
                          </div>
                          <div className="d-flex flex-wrap justify-content-between align-items-center gap-15 fun-fact-wrapper" data-cue="slideInUp" data-duration="900" data-group="images" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "1080ms", animationDirection: "normal", animationFillMode: "both" }}>
                              {stats.map((stat) => (
                                <div className="fun-fact-single-item" key={stat.label}>
                                  <h1 className="mb-0 lh-1">
                                    <span>{stat.value}</span>
                                    {stat.suffix}
                                  </h1>
                                  <p>{stat.label}</p>
                                </div>
                              ))}
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="banner-img-two position-relative z-1">
                          <img src="/assets/images/banner-img2.jpg" className="img" alt="banner-img" />
                          <img src="/assets/images/award.png" className="banner-award" alt="award" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

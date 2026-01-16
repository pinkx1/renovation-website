import { useI18n } from '../i18n/I18nProvider';

export default function WhatWeDo() {
  const { t } = useI18n();
  const items = t<{ title: string; description: string }[]>('whatWeDo.items', []);

  return (
    <>
      <div className="what-we-do-area bg-secondary ptb-120">
          <div className="container mw-1690">
              <div className="mb-50 mt-0 text-center">
                  <h2 className="main-title text-white mx-auto mw-720">{t('whatWeDo.title')}</h2>
              </div>
              <div className="row g-4 justify-content-center mb-60">
                  {items.map((item, index) => (
                    <div className="col-lg-4 col-md-6" key={`${item.title}-${index}`}>
                      <div className="what-we-do-single-item-two">
                        <img src={`/assets/images/icon-what-we-do${index + 5}.svg`} alt="icon-what-we-do" />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="position-relative z-1 what-we-do-play-img">
                  <div style={{ position: "relative", width: "1564px", overflow: "hidden", borderRadius: "20px", isolation: "isolate", height: "576px" }}><img src="/assets/images/what-we-do-play.jpg" className="ukiyo" alt="what-we-do-play" style={{ display: "block", overflow: "hidden", backfaceVisibility: "hidden", objectFit: "cover", width: "1564px", height: "864px" }} /></div>
                  <a href="https://youtu.be/78GehqOuq-A?si=WSjyu8eJ-TPiQ5QP" className="video-btn mx-auto position-absolute top-50 start-50 translate-middle" data-fslightbox="2">
                      <i className="ti ti-player-play-filled"></i>
                  </a>
              </div>
          </div>
      </div>
    </>
  );
}

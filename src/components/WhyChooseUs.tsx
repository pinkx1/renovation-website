import { useI18n } from '../i18n/I18nProvider';

const IMAGE_WRAPPER_STYLE = {
  position: 'relative',
  width: '390px',
  overflow: 'hidden',
  borderRadius: '15px',
  isolation: 'isolate',
  height: '420px',
};

const IMAGE_STYLE = {
  display: 'block',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  objectFit: 'cover',
  width: '390px',
  height: '630px',
};

export default function WhyChooseUs() {
  const { t } = useI18n();
  const items = t<{ title: string; description: string }[]>('whyChoose.items', []);
  const progress = t<{ label: string; percent: number }[]>('whyChoose.progress', []);
  const blocks = [
    {
      image: '/assets/images/why-choose-us1.jpg',
      imageFirst: true,
      ...progress[0],
    },
    {
      image: '/assets/images/why-choose-us2.jpg',
      imageFirst: false,
      ...progress[1],
    },
  ].filter((block) => block.label);

  return (
    <>
      <div className="why-choose-us-area ptb-120">
        <div className="container mw-1690">
          <div className="mb-50 mt-0 text-start">
            <h2 className="main-title why-choose-title">
              {t('whyChoose.title')}
            </h2>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-xl-6">
              {items.map((item, index) => (
                <div className="why-choose-us-content-item" key={`${item.title}-${index}`}>
                  <div className="d-flex align-items-center mb-30 mt-0 gap-30">
                    <div className="flex-shrink-0">
                      <img src={`/assets/images/icon-why-choose-us${index + 1}.svg`} alt="icon-why-choose-us" />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="mb-0">{item.title}</h3>
                    </div>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="col-xl-6">
              <div className="why-choose-us-img-wrap">
                <div className="row g-30 g-4">
                  {blocks.map((block, index) => (
                    <div className="col-md-6" key={`${block.label}-${index}`}>
                      <div className="why-choose-us-img">
                        {block.imageFirst ? (
                          <div className="mb-30">
                            <div style={IMAGE_WRAPPER_STYLE}>
                              <img
                                src={block.image}
                                className="ukiyo"
                                alt="why-choose-us"
                                style={IMAGE_STYLE}
                              />
                            </div>
                          </div>
                        ) : null}
                        <div className={`progress-wrap${index === 1 ? ' mb-30' : ''}`}>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-secondary fs-18">{block.label}</span>
                            <span className="text-secondary fs-18">{block.percent}%</span>
                          </div>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Example with label"
                            aria-valuenow={block.percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: `${block.percent}%` }}
                            ></div>
                          </div>
                        </div>
                        {!block.imageFirst ? (
                          <div style={IMAGE_WRAPPER_STYLE}>
                            <img
                              src={block.image}
                              className="ukiyo"
                              alt="why-choose-us"
                              style={IMAGE_STYLE}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

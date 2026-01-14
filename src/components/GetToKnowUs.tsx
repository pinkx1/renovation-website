import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nProvider';

export default function GetToKnowUs() {
  const { t } = useI18n();
  const list = t<string[]>('getToKnow.list', []);
  const accordionItems = t<
    {
      title: string;
      body?: string;
      list?: { title: string; text: string }[];
    }[]
  >('getToKnow.accordion', []);
  const marqueeTexts = t<string[]>('getToKnow.marquee', []);

  const marqueeNodes = marqueeTexts.flatMap((text, index) => {
    const isLast = index === marqueeTexts.length - 1;
    const nodes = [
      <span className="monogram text-secondary" key={`text-${text}-${index}`}>
        {text}
      </span>,
    ];

    if (!isLast) {
      nodes.push(
        <span className="monogram" key={`img-${text}-${index}`}>
          <img src="/assets/images/monogram-img2.png" alt="monogram-img" />
        </span>
      );
    }

    return nodes;
  });

  return (
    <>
      <div className="get-to-know-us-area pt-120">
          <div className="container mw-1690">
              <div className="row g-4">
                  <div className="col-xl-4 col-lg-6">
                      <div className="mb-50 mt-0">
                          <span className="top-title">{t('getToKnow.topTitle')}</span>
                          <h2 className="main-title mw-720">{t('getToKnow.title')}</h2>
                          <p>{t('getToKnow.description')}</p>
                      </div>
                    <ul className="p-0 mb-40 list-unstyled get-to-know-us-list">
                        {list.map((item) => (
                          <li className="d-flex gap-14" key={item}>
                            <img src="/assets/images/check2.svg" alt="check" />
                            <span className="fs-18 text-secondary">{item}</span>
                          </li>
                        ))}
                    </ul>
                      <div className="d-flex flex-wrap align-items-center gap-30 1">
                          <Link to="/about-us" className="default-btn active">
                              <div className="d-flex gap-8 align-items-center">
                                  {t('getToKnow.button')}
                                  <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                              </div>
                          </Link>
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
                  <div className="col-xl-4 col-lg-6">
                      <div className="get-to-know-us-img">
                          <div style={{ position: "relative", width: "505px", overflow: "hidden", borderRadius: "20px", isolation: "isolate", height: "480px" }}><img src="/assets/images/get-to-know3.jpg" className="ukiyo" alt="get-to-know" style={{ display: "block", overflow: "hidden", backfaceVisibility: "hidden", objectFit: "cover", width: "505px", height: "720px" }} /></div>
                      </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="accordion faq-wrapper style-two" id="accordionExample">
                        {accordionItems.map((item, index) => {
                          const isActive = index === 0;
                          const itemId = `collapse${index + 1}`;
                          return (
                            <div className="accordion-item" key={item.title}>
                              <h2 className="accordion-header">
                                <button
                                  className={`accordion-button text-secondary${isActive ? '' : ' collapsed'}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#${itemId}`}
                                  aria-expanded={isActive}
                                  aria-controls={itemId}
                                >
                                  {item.title}
                                </button>
                              </h2>
                              <div
                                id={itemId}
                                className={`accordion-collapse collapse${isActive ? ' show' : ''}`}
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  {item.body ? <p>{item.body}</p> : null}
                                  {item.list && (
                                    <ol>
                                      {item.list.map((entry) => (
                                        <li
                                          key={entry.title}
                                          className={`text-secondary ${entry.title === 'Customer Satisfaction:' ? 'mb-0' : 'mb-2'}`}
                                        >
                                          <span className="fw-medium">{entry.title}</span> {entry.text}
                                        </li>
                                      ))}
                                    </ol>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
              </div>
          </div>
      </div>
    <div className="marquee-wrapper monogram-wrap ptb-120">
        <div className="marquee speed-300 style-two">
            {marqueeNodes}
        </div>
    </div>
    </>
  );
}

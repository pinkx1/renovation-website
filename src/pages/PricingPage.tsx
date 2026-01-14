import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import { useI18n } from '../i18n/I18nProvider';

export default function PricingPage() {
  const { t } = useI18n();
  const plans = t<
    {
      title: string;
      description: string;
      price: string;
      frequency: string;
      isActive: boolean;
      features: string[];
    }[]
  >('pricingPage.plans', []);
  const marqueeTexts = t<string[]>('pricingPage.marquee', []);
  const marqueeNodes = marqueeTexts.flatMap((text, index) => {
    const nodes = [
      <span className="monogram text-secondary" key={`text-${text}-${index}`}>
        {text}
      </span>,
    ];

    if (index < marqueeTexts.length - 1) {
      nodes.push(
        <span className="monogram" key={`image-${text}-${index}`}>
          <img src="/assets/images/monogram-img.jpg" alt="monogram-img" />
        </span>
      );
    }

    return nodes;
  });

  return (
    <>
      <div className="pricing-area ptb-120">
        <div className="container mw-1690">
          <div className="text-center mb-60 mt-0">
            <span className="top-title">{t('pricingPage.topTitle')}</span>
            <h2 className="main-title mx-auto mw-620">{t('pricingPage.title')}</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {plans.map((plan) => (
              <div className="col-xxl-4 col-md-6" key={plan.title}>
                <div className="pricing-single-item bg-gray2">
                  <div className="price-header">
                    <h2>{plan.title}</h2>
                    <p>{plan.description}</p>
                    <h1>
                      {plan.price}/ <sub>{plan.frequency}</sub>
                    </h1>
                  </div>

                  <Link
                    to="/contact-us"
                    className={`default-btn w-100${plan.isActive ? ' active' : ''}`}
                  >
                    <span className="gap-10 d-flex justify-content-center">
                      <span>{t('common.bookingNow')}</span>
                      <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                    </span>
                  </Link>

                  <ul className="px-0 m-0 list-unstyled">
                    {plan.features.map((feature) => (
                      <li className="d-flex align-items-center justify-content-between" key={feature}>
                        <span>{feature}</span>
                        <i className="ti ti-circle-check-filled"></i>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="marquee-wrapper monogram-wrap pb-120">
        <div className="marquee speed-300">{marqueeNodes}</div>
      </div>
      <Subscribe />
    </>
  );
}

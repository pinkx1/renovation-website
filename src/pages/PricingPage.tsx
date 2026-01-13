import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

const PRICING_PLANS = [
  {
    title: 'Home Painting',
    description:
      'Home painting is one of the most effective ways to refresh and personalize your living space',
    price: '$39.99',
    frequency: '(Hourly)',
    isActive: true,
    features: [
      'Dusting and wiping all surfaces',
      'Emptying trash bins',
      'Vacuuming and mopping floors',
      'Livingston cleaning',
      'painting bathrooms and kitchens',
    ],
  },
  {
    title: 'Office Painting',
    description:
      'Office painting plays key role in creating a professional productive visually appealing work environment',
    price: '$59.99',
    frequency: '(Hourly)',
    isActive: false,
    features: [
      'All Services In Basic Painting',
      'Painting Inside Appliances (Oven, Fridge)',
      'Painting Bathrooms And Kitchens',
      'Baseboard And Molding Painting Trash Bins',
      'Window And Blind Painting',
    ],
  },
  {
    title: 'Custom Wall Finish',
    description:
      'A custom wall finish is unique way to elevate the look and feel of any interior space adding texture depth',
    price: '$79.99',
    frequency: '(Hourly)',
    isActive: true,
    features: [
      'Tailored cleaning schedule',
      'Flexible hours to minimize disruption',
      'painting bathrooms and kitchens',
      'Specialized painting for different industries',
      'Ongoing maintenance and support',
    ],
  },
];

const marqueeTexts = Array.from({ length: 6 }, () => [
  'Quality Painting Excellence',
  'Certified Painters Guarantee',
]).flat();
marqueeTexts.push('Quality Painting Excellence', 'Comfort and familiarity');

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

export default function PricingPage() {
  return (
    <>
      <PageBanner
        title="Pricing"
        backgroundImage="/assets/images/page-bg7.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Pricing' },
        ]}
      />
      <div className="pricing-area ptb-120">
        <div className="container mw-1690">
          <div className="text-center mb-60 mt-0">
            <span className="top-title">Pricing Plan</span>
            <h2 className="main-title mx-auto mw-620">Select Your Suitable Packages</h2>
          </div>

          <div className="row g-4 justify-content-center">
            {PRICING_PLANS.map((plan) => (
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
                      <span>Booking Now</span>
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

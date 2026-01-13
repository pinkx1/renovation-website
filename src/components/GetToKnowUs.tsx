import { Link } from 'react-router-dom';

const KNOW_LIST = [
  'Easily Book Painting',
  'Get 24/7 on-demand care',
  'Reminders about painting',
];

const ACCORDION_ITEMS = [
  {
    id: 'collapseOne',
    title: 'Our Mission',
    body:
      'Our mission is to transform spaces with excellence creativity and care we are dedicated to delivering high quality painting and services that enhance the focus on customer',
  },
  {
    id: 'collapseTwo',
    title: 'Our Vision',
    body:
      'To be a trusted leader in the renovation and painting industry, delivering exceptional quality, innovative solutions, and lasting value to every client. We aim to transform spaces into beautiful, functional environments that inspire and enhance the lives of those who experience them.',
  },
  {
    id: 'collapseThree',
    title: 'Our Value',
    body: null,
    list: [
      {
        title: 'Quality:',
        text: 'We deliver top-notch workmanship in every project.',
      },
      {
        title: 'Integrity:',
        text: 'We are honest, transparent, and reliable in all our dealings.',
      },
      {
        title: 'Customer Satisfaction:',
        text: 'We prioritize our clients\' needs and ensure they are delighted with the results.',
      },
    ],
  },
];

const MARQUEE_TEXTS = [
  'Smart Work',
  'Unique Design',
  'Smart Work',
  'Best Pricing',
  'Skilled Team',
];

export default function GetToKnowUs() {
  const marqueeNodes = MARQUEE_TEXTS.flatMap((text, index) => {
    const isLast = index === MARQUEE_TEXTS.length - 1;
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
                          <span className="top-title">Get to Know Us</span>
                          <h2 className="main-title mw-720">Remodeling Solutions Tailored For You</h2>
                          <p>It enhances comfort improves layout and often increases the overall value of your home or commercial space</p>
                      </div>
                    <ul className="p-0 mb-40 list-unstyled get-to-know-us-list">
                        {KNOW_LIST.map((item) => (
                          <li className="d-flex gap-14" key={item}>
                            <img src="/assets/images/check2.svg" alt="check" />
                            <span className="fs-18 text-secondary">{item}</span>
                          </li>
                        ))}
                    </ul>
                      <div className="d-flex flex-wrap align-items-center gap-30 1">
                          <Link to="/about-us" className="default-btn active">
                              <div className="d-flex gap-8 align-items-center">
                                  More About Us
                                  <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                              </div>
                          </Link>
                          <div className="d-flex align-items-center get-author">
                              <div className="flex-shrink-0">
                                  <img src="/assets/images/user4.jpg" className="rounded-circle" alt="user" />
                              </div>
                              <div className="flex-grow-1">
                                  <h3 className="mb-1">Sarah Brown</h3>
                                  <span>CEO &amp; Founder</span>
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
                        {ACCORDION_ITEMS.map((item, index) => {
                          const isActive = index === 0;
                          return (
                            <div className="accordion-item" key={item.id}>
                              <h2 className="accordion-header">
                                <button
                                  className={`accordion-button text-secondary${isActive ? '' : ' collapsed'}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#${item.id}`}
                                  aria-expanded={isActive}
                                  aria-controls={item.id}
                                >
                                  {item.title}
                                </button>
                              </h2>
                              <div
                                id={item.id}
                                className={`accordion-collapse collapse${isActive ? ' show' : ''}`}
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  {item.body && <p>{item.body}</p>}
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

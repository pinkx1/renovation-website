const WHY_CHOOSE_ITEMS = [
  {
    icon: '/assets/images/icon-why-choose-us1.svg',
    title: 'Residential Renovation',
    description:
      'Residential renovation is transformative process that breathes new life into home enhancing both its functionality and aesthetic appeal single room',
  },
  {
    icon: '/assets/images/icon-why-choose-us2.svg',
    title: 'Design & Planning',
    description:
      'Design & Planning is the foundation of any successful renovation or construction project It involves turning ideas into practical well structured solutions',
  },
  {
    icon: '/assets/images/icon-why-choose-us3.svg',
    title: 'Turnkey Renovation',
    description:
      'Turnkey renovation offers a complete hassle free solution for transforming space from start to finish from initial design and planning to final execution',
  },
];

const PROGRESS_BLOCKS = [
  {
    label: 'Professional Workers',
    percent: 90,
    image: '/assets/images/why-choose-us1.jpg',
    imageFirst: true,
  },
  {
    label: 'Paint Spraying',
    percent: 80,
    image: '/assets/images/why-choose-us2.jpg',
    imageFirst: false,
  },
];

const IMAGE_WRAPPER_STYLE = {
  position: 'relative',
  width: '406px',
  overflow: 'hidden',
  borderRadius: '15px',
  isolation: 'isolate',
  height: '438px',
};

const IMAGE_STYLE = {
  display: 'block',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  objectFit: 'cover',
  width: '406px',
  height: '657px',
  transform: 'translate3d(0px, 54.75px, 0px)',
};

export default function WhyChooseUs() {
  return (
    <>
      <div className="why-choose-us-area ptb-120">
        <div className="container mw-1690">
          <div className="mb-50 mt-0 text-center">
            <span className="top-title">why choose us</span>
            <h2 className="main-title mx-auto mw-550">
              Why Choose Pentu For Your Remodeling Services
            </h2>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-xl-6">
              {WHY_CHOOSE_ITEMS.map((item) => (
                <div className="why-choose-us-content-item" key={item.title}>
                  <div className="d-flex align-items-center mb-30 mt-0 gap-30">
                    <div className="flex-shrink-0">
                      <img src={item.icon} alt="icon-why-choose-us" />
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
                  {PROGRESS_BLOCKS.map((block, index) => (
                    <div className="col-md-6" key={block.label}>
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

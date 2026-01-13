import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

const FAQ_ITEMS = [
  {
    id: 'collapseOne',
    question: 'How long does a money transfer take?',
    answer:
      'The right combination of colors textures and techniques walls can reflect wall taste and elevate the overall feel of your space from smooth finishes artistic accents professional wall painting ensures precision and a flawless look',
    isOpen: true,
  },
  {
    id: 'collapseTwo',
    question: 'How do you help customers choose the right colors?',
    answer:
      'We help customers choose the right colors by first understanding their preferences, the purpose of the space, and the mood they want to create. We consider factors like lighting, existing décor, and color psychology, and often provide samples or visual mock-ups so they can see how different colors will look in real life. Our goal is to guide them to a choice that is both visually appealing and practical.',
  },
  {
    id: 'collapseThree',
    question: 'How long will the painting project take?',
    answer:
      'The duration of a painting project depends on factors like the size of the area, the number of coats required, the condition of the surfaces, and the type of paint being used. For example, a small room may take 1–2 days, while larger areas or projects with detailed work could take several days to a week. We provide a realistic timeline after assessing the space to ensure quality work without unnecessary delays.',
  },
  {
    id: 'collapseThree4',
    question: 'Do you offer any warranty or guarantee on your work?',
    answer:
      'Yes, we stand by the quality of our work. We offer a [specific time period, e.g., 1-year] warranty or guarantee on our painting and renovation services, which covers issues like peeling, cracking, or poor workmanship. Our aim is to ensure that every customer is fully satisfied and confident in the durability and finish of our work.',
  },
  {
    id: 'collapseThree5',
    question: 'How do you prepare surfaces before painting?',
    answer:
      'Before painting, we carefully prepare all surfaces to ensure a smooth and long-lasting finish. This includes cleaning to remove dust and grease, sanding rough areas, filling cracks or holes with the right fillers, and applying primer if necessary. Proper preparation is essential because it helps the paint adhere better and prevents issues like peeling, bubbling, or uneven coverage.',
  },
  {
    id: 'collapseThree6',
    question: 'Is your company licensed and insured?',
    answer:
      'Yes, our company is fully licensed and insured. Being licensed ensures that we comply with all local regulations and industry standards, and our insurance protects both our team and our clients in case of accidents or damage. This gives our customers peace of mind that the work is done safely and professionally.',
  },
  {
    id: 'collapseThree7',
    question: 'What safety measures do you take on the job site?',
    answer:
      'Safety is a top priority on every job site. Our team wears appropriate protective gear, such as gloves, masks, and safety goggles. We follow proper procedures for ladders and equipment, ensure good ventilation, and keep the site organized to prevent accidents. By adhering to all industry safety standards, we create a safe environment for both our workers and clients.',
  },
];

const IMAGE_WRAPPER_STYLE = {
  position: 'relative' as const,
  width: '730px',
  overflow: 'hidden',
  borderRadius: '20px',
  isolation: 'isolate' as const,
  height: '430px',
};

const IMAGE_STYLE = {
  display: 'block',
  overflow: 'hidden',
  backfaceVisibility: 'hidden',
  objectFit: 'cover' as const,
  width: '730px',
  height: '645px',
};

export default function FaqsPage() {
  return (
    <>
      <PageBanner
        title="FAQs"
        backgroundImage="/assets/images/page-bg5.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'FAQs' },
        ]}
      />
      <div className="faq-area ptb-120">
        <div className="container mw-1690">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="faq-content">
                <div className="mb-50 mt-0" data-cues="slideInUp" data-duration="900" data-disabled="true">
                  <span className="top-title" data-cue="slideInUp" data-duration="900">
                    Ask a question
                  </span>
                  <h2 className="main-title" data-cue="slideInUp" data-duration="900">
                    Transforming Spaces With The Stroke Of A Brush
                  </h2>
                  <p data-cue="slideInUp" data-duration="900">
                    From walls and ceilings to trims and accents a well executed interior paint
                    job brings new life to any room and reflects your unique style with elegance
                    and precision
                  </p>
                </div>

                <div className="faq-img">
                  <div style={IMAGE_WRAPPER_STYLE}>
                    <img
                      src="/assets/images/faq.jpg"
                      className="img ukiyo object-fit-contain"
                      alt="faq"
                      style={IMAGE_STYLE}
                    />
                  </div>

                  <div className="d-flex align-items-center call-us">
                    <div className="flex-shrink-0">
                      <div className="icon">
                        <img src="/assets/images/support.svg" alt="support" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h3>Need Help?</h3>
                      <p>
                        Please Call Us: <a href="tel:+971(467)3722870">+971(467) 372 2870</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="accordion faq-wrapper"
                id="accordionExample"
                data-cues="slideInUp"
                data-duration="900"
                data-disabled="true"
              >
                {FAQ_ITEMS.map((item, index) => (
                  <div
                    className="accordion-item bg-gray2"
                    data-cue="slideInUp"
                    data-duration="900"
                    key={item.id}
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button text-secondary bg-transparent${
                          item.isOpen ? '' : ' collapsed'
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.id}`}
                        aria-expanded={item.isOpen ? 'true' : 'false'}
                        aria-controls={item.id}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse${item.isOpen ? ' show' : ''}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-area pb-120">
        <div className="container mw-1690">
          <div className="mb-50 text-center">
            <span className="top-title">Ask a question</span>
            <h2 className="main-title mx-auto">Find What You Want To Know About Renovia Services</h2>
          </div>

          <div className="contact-us-from bg-gray2 mx-0">
            <form>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mb-20">
                    <input type="text" className="form-control border-0" placeholder="Name" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-20">
                    <input type="email" className="form-control border-0" placeholder="Email" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-20">
                    <input type="number" className="form-control border-0" placeholder="Phone" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-20">
                    <input type="text" className="form-control border-0" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-20">
                    <textarea
                      rows={5}
                      className="form-control border-0"
                      placeholder="Write Your Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <button type="submit" className="default-btn border-0 active">
                  <span className="gap-10 d-flex">
                    <span>Send Message</span>
                    <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

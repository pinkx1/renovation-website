const WHAT_WE_DO_ITEMS = [
  {
    icon: '/assets/images/icon-what-we-do5.svg',
    title: 'Residential painting',
    description:
      'From interiors to weather resistant painting to involves careful surface for preparation materials skilled techniques',
  },
  {
    icon: '/assets/images/icon-what-we-do6.svg',
    title: 'Commercial Renovation',
    description:
      'From structural upgrades to aesthetic improvements every detail is tailored to meet the unique needs for operations',
  },
  {
    icon: '/assets/images/icon-what-we-do7.svg',
    title: 'Interior Design Consultation',
    description:
      'Interior design consultation is a service helps bring your vision to life is by combining style comfort redesigning room',
  },
];

export default function WhatWeDo() {
  return (
    <>
      <div className="what-we-do-area bg-secondary ptb-120">
          <div className="container mw-1690">
              <div className="mb-50 mt-0 text-center">
                  <span className="top-title text-white two">what we do</span>
                  <h2 className="main-title text-white mx-auto mw-720">Your Trusted Experts In Professional Remodeling Services</h2>
              </div>
              <div className="row g-4 justify-content-center mb-60">
                  {WHAT_WE_DO_ITEMS.map((item) => (
                    <div className="col-lg-4 col-md-6" key={item.title}>
                      <div className="what-we-do-single-item-two">
                        <img src={item.icon} alt="icon-what-we-do" />
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

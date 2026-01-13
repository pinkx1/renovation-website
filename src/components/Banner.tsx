import { Link } from 'react-router-dom';

const BANNER_STATS = [
  { value: 28, suffix: '+', label: 'Years Of Experience' },
  { value: 3, suffix: 'k+', label: 'Happy Clients' },
  { value: 10, suffix: '+', label: 'Award Winning' },
];

export default function Banner() {
  return (
    <>
      <div className="banner-area-two bg-img mx-0 overflow-hidden" style={{ backgroundImage: "url(/assets/images/banner-bg.jpg)" }}>
          <div className="container mw-1690">
              <div className="row align-items-center g-4">
                  <div className="col-lg-6">
                      <div className="banner-content-two" data-cues="slideInUp" data-group="images" data-duration="900" data-disabled="true">
                          <span className="top-title" data-cue="slideInUp" data-duration="900" data-group="images" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "0ms", animationDirection: "normal", animationFillMode: "both" }}>welcome to pentu</span>
                          <h1 data-cue="slideInUp" data-duration="900" data-group="images" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "270ms", animationDirection: "normal", animationFillMode: "both" }}>Renovation Services Based In Springfield</h1>
                          <p data-cue="slideInUp" data-duration="900" data-group="images" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "540ms", animationDirection: "normal", animationFillMode: "both" }}>Remodeling is the perfect way to breathe new life into your space whether a single room or an entire allows you to improve enhance aesthetics and tailor environment.</p>
                          <div className="d-flex flex-wrap gap-30 banner-btn align-items-center" data-cue="slideInUp" data-duration="900" data-group="images" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "810ms", animationDirection: "normal", animationFillMode: "both" }}>
                              <Link to="/services" className="default-btn">
                                  <div className="d-flex align-items-center gap-10 text-white">
                                      Explore Now
                                      <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                                  </div>
                              </Link>
                              <Link to="/about-us" className="default-btn active">
                                  <div className="d-flex align-items-center gap-10">
                                      learn more
                                      <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                                  </div>
                              </Link>
                          </div>
                          <div className="d-flex flex-wrap justify-content-between align-items-center gap-15 fun-fact-wrapper" data-cue="slideInUp" data-duration="900" data-group="images" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "1080ms", animationDirection: "normal", animationFillMode: "both" }}>
                              {BANNER_STATS.map((stat) => (
                                <div className="fun-fact-single-item" key={stat.label}>
                                  <h1 className="mb-0 lh-1">
                                    <span className="counter">{stat.value}</span>
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

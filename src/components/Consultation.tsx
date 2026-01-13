import { Link } from 'react-router-dom';

export default function Consultation() {
  return (
    <>
      <div className="consultation-area">
          <div className="container mw-1690">
              <div className="consultation-wrapper bg-img" style={{ backgroundImage: "url(/assets/images/consultation-bg.jpg)" }}>
                  <div className="row g-4 align-items-center" data-cues="slideInUp" data-duration="900" data-disabled="true">
                      <div className="col-lg-6" data-cue="slideInUp" data-duration="900" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "0ms", animationDirection: "normal", animationFillMode: "both" }}>
                          <div className="consultation-content">
                              <div className="d-flex flex-wrap flex-sm-nowrap align-items-center gap-30">
                                  <div className="flex-shrink-0">
                                      <div className="icon">
                                          <img src="/assets/images/phone.svg" alt="phone" />
                                      </div>
                                  </div>
                                  <div className="flex-grow-1">
                                      <h3>Contact Us Today for a Free remodeling Consultation</h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6" data-cue="slideInUp" data-duration="900" data-show="true" style={{ animationName: "slideInUp", animationDuration: "900ms", animationTimingFunction: "ease", animationDelay: "0ms", animationDirection: "normal", animationFillMode: "both" }}>
                          <Link to="/contact-us" className="default-btn border-0 ms-200">
                              <span className="gap-10 d-flex">
                                  <span>Contact Us Now</span>
                                  <img src="/assets/images/icon-right-arrow.svg" alt="icon-right-arrow" />
                              </span>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

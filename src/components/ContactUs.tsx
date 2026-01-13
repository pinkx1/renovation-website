import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <>
      <div className="contact-us-area bg-img ptb-120" style={{ backgroundImage: "url(/assets/images/banner-bg.jpg)" }}>
          <div className="container mw-1690">
              <div className="row g-4">
                  <div className="col-lg-6">
                      <div className="contact-us-content">
                          <div className="mb-50">
                              <span className="top-title">contact us</span>
                              <h2 className="main-title ms-0 mw-100">Collect Your Slot For Upcoming Remodeling House</h2>
                              <p>Home remodeling projects can include additions like extra bedrooms home offices or finished basements. These spaces provide more room for growing families hobbies</p>
                          </div>
                          <div className="contact-us-img">
                              <div style={{ zIndex: "-1", position: "relative", width: "803px", overflow: "hidden", borderRadius: "20px", isolation: "isolate", height: "468px" }}><img src="/assets/images/contact-us-img.jpg" className="ukiyo z-n1" alt="contact-us-img" style={{ display: "block", overflow: "hidden", backfaceVisibility: "hidden", objectFit: "cover", width: "803px", height: "702px", transform: "translate3d(0px, 58.5px, 0px)" }} /></div>
                              <div className="d-flex align-items-center contact-info">
                                  <div className="flex-shrink-0">
                                      <div className="icon">
                                          <img src="/assets/images/support2.svg" alt="support2" />
                                      </div>
                                  </div>
                                  <div className="flex-grow-1">
                                      <h3>Need Gelp&copy;</h3>
                                      <p>
                                          Please Call Us: 
                                          <a href="tel:+971(467)3722870">+971(467) 372 2870</a>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <div className="contact-us-from">
                          <h3>Please Fill In The Information Below</h3>
                          <p>We'd love to hear from you! Whether you're ready to start your next project or simply have a few questions, our team is here to help.</p>
                          <form>
                              <div className="form-group mb-20">
                                  <input type="text" className="form-control" placeholder="Enter Your Name" />
                              </div>
                              <div className="form-group mb-20">
                                  <input type="email" className="form-control" placeholder="Enter Your Email" />
                              </div>
                              <div className="form-group mb-20">
                                  <input type="number" className="form-control" placeholder="Enter Your Number" />
                              </div>
                              <div className="form-group mb-20">
                                  <textarea rows="5" className="form-control" placeholder="Write Your Message"></textarea>
                              </div>
                              <div className="form-group mb-20">
                                  <div className="form-check">
                                      <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                      <label className="form-check-label" htmlFor="checkDefault">
                                          I understand and agree to the <Link to="/terms-conditions" className="text-decoration-none fw-semibold">Terms &amp; Conditions</Link>
                                      </label>
                                  </div>
                              </div>
                              <div className="form-group mb-20">
                                  <button type="submit" className="default-btn border-0">
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
          </div>
      </div>
    </>
  );
}

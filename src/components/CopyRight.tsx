import { Link } from 'react-router-dom';

export default function CopyRight() {
  return (
    <>
      <div className="copy-right-area bg-secondary py-0">
          <div className="container mw-1690">
              <div className="copy-right-wrap">
                  <div className="d-flex flex-wrap gap-10 justify-content-center justify-content-lg-between align-items-center">
                      <p className="mb-0 text-white"><span className="text-white">&copy; Pentu.</span> All Rights Reserved by <a href="https://hibootstrap.com/" target="_blank" rel="noreferrer">HiBootstrap</a></p>
                      <div className="d-flex flex-wrap gap-5 policy">
                          <Link to="/privacy-policy" className="text-decoration-none">Privacy Policy</Link>
                          <Link to="/terms-conditions" className="text-decoration-none">Terms &amp; Conditions</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

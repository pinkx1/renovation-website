import { Link } from 'react-router-dom';

export default function CopyRight() {
  return (
    <>
      <div className="copy-right-area bg-secondary py-0">
          <div className="container mw-1690">
              <div className="copy-right-wrap">
                  <div className="d-flex flex-wrap gap-10 justify-content-center justify-content-lg-between align-items-center">
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

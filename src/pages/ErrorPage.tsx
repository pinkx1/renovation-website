import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Subscribe from '../components/Subscribe';

export default function ErrorPage() {
  return (
    <>
      <PageBanner
        title="Error 404"
        backgroundImage="/assets/images/page-bg14.jpg"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Error 404' },
        ]}
      />
      <div className="ptb-120 position-relative z-1">
        <div className="container">
          <div className="row">
            <div className="error-content text-center">
              <h1>
                4<span>0</span>4
              </h1>
              <h2 className="fs-24">Oops! page is not found</h2>
              <p className="mb-4">Sorry, but the page you are looking for does not exist.</p>
              <Link to="/" className="default-btn d-inline-block">
                Back To Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

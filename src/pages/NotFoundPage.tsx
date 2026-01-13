import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="error-area ptb-120">
      <div className="container mw-1690">
        <div className="text-center">
          <span className="top-title">404</span>
          <h1 className="main-title">Page not found</h1>
          <p className="mb-30">
            The page you are looking for does not exist yet. We will add it soon.
          </p>
          <Link to="/" className="default-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

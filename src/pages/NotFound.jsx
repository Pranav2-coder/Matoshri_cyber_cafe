import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found-inner">
        <p className="not-found-code" aria-hidden="true">404</p>
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary btn-lg">
            Go to Home
          </Link>
          <Link to="/services" className="btn btn-secondary btn-lg">
            Browse Services
          </Link>
        </div>
      </div>
    </div>
  );
}

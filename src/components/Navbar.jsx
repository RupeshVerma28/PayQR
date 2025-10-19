import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isGenerator = location.pathname === "/generator";

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#121212",
        borderBottom: "1px solid #282828",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-light"
        >
          <img
            src="/payfillqr.png"
            alt="PayfillQR"
            className="me-2"
            style={{ height: "30px", width: "auto" }}
          />
          <span className="fw-bold">PayfillQR</span>
        </Link>
        {isGenerator && (
          <Link to="/" className="btn btn-outline-light btn-sm">
            <i className="bi bi-arrow-left me-2 text-primary"></i>
            Back to Home
          </Link>
        )}
      </div>
    </nav>
  );
}

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isGenerator = location.pathname === "/generator";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-[#1a1a1a] border-b border-gray-800">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <i className="bi bi-qr-code text-purple-500 me-2"></i>
          <span className="font-bold">PayfillQR</span>
        </Link>
        {isGenerator && (
          <Link to="/" className="btn btn-outline-light btn-sm">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Home
          </Link>
        )}
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-4">Welcome to PayfillQR</h1>
        <p className="lead text-secondary mb-4">
          Generate UPI QR codes instantly for your business or personal use.
          Pre-fill amounts, add notes, and streamline your payment collection.
        </p>
        <Link to="/generator" className="btn btn-primary btn-lg">
          <i className="bi bi-qr-code me-2"></i>
          Start Generating QR
        </Link>
      </div>

      {/* Features Section */}
      <section className="mb-5">
        <h2 className="text-center h3 mb-4">Features</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="surface p-4 text-center h-100">
              <i className="bi bi-lightning-charge display-4 text-primary mb-3"></i>
              <h3 className="h5 mb-3">Quick Generation</h3>
              <p className="text-secondary">
                Generate UPI QR codes in seconds with custom amounts and notes.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="surface p-4 text-center h-100">
              <i className="bi bi-wifi-off display-4 text-primary mb-3"></i>
              <h3 className="h5 mb-3">Works Offline</h3>
              <p className="text-secondary">
                Generate QR codes even without an internet connection using PWA
                features.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="surface p-4 text-center h-100">
              <i className="bi bi-shop display-4 text-primary mb-3"></i>
              <h3 className="h5 mb-3">Business Ready</h3>
              <p className="text-secondary">
                Perfect for merchants, freelancers, and businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="mb-5">
        <h2 className="text-center h3 mb-4">How to Use</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="surface p-4 text-center h-100">
              <i className="bi bi-1-circle display-6 text-primary mb-3"></i>
              <h4 className="h6 mb-3">Enter UPI ID</h4>
              <p className="text-secondary small">
                Input your UPI ID that will receive the payment.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="surface p-4 text-center h-100">
              <i className="bi bi-2-circle display-6 text-primary mb-3"></i>
              <h4 className="h6 mb-3">Add Details</h4>
              <p className="text-secondary small">
                Set amount, name, and payment note (optional).
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="surface p-4 text-center h-100">
              <i className="bi bi-3-circle display-6 text-primary mb-3"></i>
              <h4 className="h6 mb-3">Generate QR</h4>
              <p className="text-secondary small">
                Click generate to create your custom QR code.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="surface p-4 text-center h-100">
              <i className="bi bi-4-circle display-6 text-primary mb-3"></i>
              <h4 className="h6 mb-3">Share or Download</h4>
              <p className="text-secondary small">
                Download the QR code or share the UPI link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Link to="/generator" className="btn btn-success btn-lg">
          <i className="bi bi-qr-code me-2"></i>
          Create Your First QR Code
        </Link>
      </div>
    </div>
  );
}

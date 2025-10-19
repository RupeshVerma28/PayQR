import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";

export default function QRGenerator() {
  const [upiId, setUpiId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [upiUrl, setUpiUrl] = useState("");
  const qrRef = useRef(null);

  const buildUpiUrl = () => {
    let url = `upi://pay?pa=${upiId}`;
    if (name) url += `&pn=${encodeURIComponent(name)}`;
    if (amount) url += `&mc=${amount}`;
    if (note) url += `&tid=${encodeURIComponent(note)}`;
    setUpiUrl(url);
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    buildUpiUrl();
  };

  const downloadQR = () => {
    const canvas = qrRef.current.querySelector("canvas");
    if (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "upi-qr-code.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const copyUpiUrl = () => {
    navigator.clipboard.writeText(upiUrl).then(
      () => {
        alert("UPI URL copied to clipboard!");
      },
      (err) => {
        console.error("Error copying UPI URL: ", err);
      }
    );
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <header className="mb-4">
            <h2 className="h3 mb-2">Generate UPI QR Code</h2>
            <p className="text-secondary">
              Fill in the details below to generate your QR code
            </p>
          </header>

          <div className="surface p-4 mb-4">
            <form onSubmit={handleGenerate} className="row g-3">
              <div className="col-md-6">
                <label className="form-label">
                  <i className="bi bi-at me-2"></i>UPI ID
                </label>
                <input
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="form-control"
                  placeholder="example@upi"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  <i className="bi bi-person me-2"></i>Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  <i className="bi bi-currency-rupee me-2"></i>Amount (optional)
                </label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-control"
                  placeholder="Amount"
                  type="number"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  <i className="bi bi-sticky me-2"></i>Note
                </label>
                <input
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="form-control"
                  placeholder="Transaction Note"
                />
              </div>

              <div className="col-12 d-flex flex-wrap gap-2">
                <button type="submit" className="btn btn-success me-2 mb-2">
                  <i className="bi bi-qr-code me-2"></i>Generate QR
                </button>
                <button
                  type="button"
                  onClick={downloadQR}
                  className="btn btn-warning text-dark me-2 mb-2"
                >
                  <i className="bi bi-download me-2"></i>Download QR
                </button>
                <button
                  type="button"
                  onClick={copyUpiUrl}
                  className="btn btn-info text-dark mb-2"
                >
                  <i className="bi bi-clipboard me-2"></i>Copy UPI URL
                </button>
              </div>
            </form>
          </div>

          <div className="surface p-4">
            <h3 className="h5 mb-3">Preview</h3>
            <div ref={qrRef} className="d-flex justify-content-center">
              {upiUrl && (
                <QRCode
                  value={upiUrl}
                  size={256}
                  style={{ height: "auto", maxWidth: "100%" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

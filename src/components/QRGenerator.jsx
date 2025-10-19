import React, { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import Loading from "./Loading";

export default function QRGenerator() {
  const [loading, setLoading] = useState(true);
  const [upiId, setUpiId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [upiUrl, setUpiUrl] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  function buildUpiUrl() {
    if (!upiId) {
      alert("Please enter UPI ID");
      return;
    }
    const pa = encodeURIComponent(upiId.trim());
    const pn = encodeURIComponent(name.trim());
    const am = amount ? encodeURIComponent(parseFloat(amount).toFixed(2)) : "";
    const cu = "INR";
    const tn = encodeURIComponent(note.trim());

    let url = `upi://pay?pa=${pa}&cu=${cu}`;
    if (pn) url += `&pn=${pn}`;
    if (am) url += `&am=${am}`;
    if (tn) url += `&tn=${tn}`;
    return url;
  }

  function handleGenerate(e) {
    e && e.preventDefault();
    const url = buildUpiUrl();
    if (url) setUpiUrl(url);
    setTimeout(() => {}, 100);
  }

  function downloadQR() {
    const canvas = document.getElementById("upi-canvas");
    if (!canvas) return alert("QR not ready yet");
    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "upi_qr.png";
    a.click();
  }

  function copyUpiUrl() {
    if (!upiUrl) return alert("Generate a QR first");
    navigator.clipboard
      .writeText(upiUrl)
      .then(() => alert("UPI URL copied to clipboard"));
  }

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-dark">
      <div className="container py-4 py-md-5">
        <header className="mb-5 text-center">
          <h1 className="display-5 fw-bold text-white mb-3">
            <i className="bi bi-qr-code me-2"></i>
            UPI QR Generator
          </h1>
          <p className="text-secondary fs-5">
            Create UPI QR codes instantly - Simple, Fast & Secure
          </p>
        </header>

        <div className="row g-4">
          <div className="col-12">
            <div className="surface p-4">
              <form onSubmit={handleGenerate} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">UPI ID</label>
                  <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary">
                      <i className="bi bi-at"></i>
                    </span>
                    <input
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="form-control bg-dark border-secondary text-white"
                      placeholder="example@upi"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary">
                      <i className="bi bi-person"></i>
                    </span>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control bg-dark border-secondary text-white"
                      placeholder="Merchant or Payee name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Amount (optional)</label>
                  <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary">
                      <i className="bi bi-cash"></i>
                    </span>
                    <input
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="form-control bg-dark border-secondary text-white"
                      placeholder="e.g. 199.00"
                      type="number"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Note</label>
                  <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary">
                      <i className="bi bi-file-earmark-text"></i>
                    </span>
                    <input
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="form-control bg-dark border-secondary text-white"
                      placeholder="Payment note (optional)"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex gap-2 flex-wrap">
                    <button type="submit" className="btn btn-phonepe">
                      <i className="bi bi-qr-code-scan me-2"></i>
                      Generate QR
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={() => {
                        setUpiId("");
                        setName("");
                        setAmount("");
                        setNote("");
                        setUpiUrl("");
                      }}
                    >
                      <i className="bi bi-x-lg me-2"></i>
                      Clear
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-light"
                      onClick={copyUpiUrl}
                    >
                      <i className="bi bi-clipboard me-2"></i>
                      Copy UPI URL
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-12">
            <div className="surface p-4">
              <h2 className="h4 mb-4">
                <i className="bi bi-eye me-2"></i>
                Preview
              </h2>
              <div className="row g-4">
                <div className="col-md-6">
                  {upiUrl ? (
                    <div className="text-center p-4 bg-dark rounded">
                      <QRCode
                        id="upi-canvas"
                        value={upiUrl}
                        size={220}
                        includeMargin={true}
                        renderAs="canvas"
                        bgColor="#121212"
                        fgColor="#e6eef8"
                      />
                      <div className="mt-3">
                        <button
                          className="btn btn-outline-light btn-sm me-2"
                          onClick={downloadQR}
                        >
                          <i className="bi bi-download me-2"></i>
                          Download
                        </button>
                        <button
                          className="btn btn-outline-light btn-sm"
                          onClick={() => window.print()}
                        >
                          <i className="bi bi-printer me-2"></i>
                          Print
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-4 text-secondary">
                      <i className="bi bi-qr-code display-1 mb-3"></i>
                      <p>No QR generated yet</p>
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <h3 className="text-white mb-2">Generated UPI URL</h3>
                  <pre className="p-3 bg-slate-700/50 rounded text-sm break-words text-slate-300">
                    {upiUrl || "—"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

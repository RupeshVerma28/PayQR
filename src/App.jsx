import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";

export default function App() {
  const [upiId, setUpiId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [upiUrl, setUpiUrl] = useState("");
  const canvasRef = useRef(null);

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
    // small timeout to ensure QR renders for canvas download
    setTimeout(() => {
      // nothing
    }, 100);
  }

  function downloadQR() {
    // qrcode.react renders an SVG by default if using <QRCode />; to get an image, we render to canvas using the same lib's "renderAs" prop
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

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-3xl">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">UPI QR Generator</h1>
          <p className="text-slate-400">
            Create UPI QR codes with pre-filled amounts and notes — PWA ready.
          </p>
        </header>

        <main className="app-card mb-6">
          <form onSubmit={handleGenerate} className="row g-3 align-items-end">
            <div className="col-md-6">
              <label className="form-label">UPI ID</label>
              <input
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="form-control bg-transparent text-light"
                placeholder="example@upi"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control bg-transparent text-light"
                placeholder="Merchant or Payee name"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Amount (optional)</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="form-control bg-transparent text-light"
                placeholder="e.g. 199.00"
              />
            </div>
            <div className="col-md-8">
              <label className="form-label">Note</label>
              <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="form-control bg-transparent text-light"
                placeholder="Payment note (optional)"
              />
            </div>

            <div className="col-12 d-flex gap-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleGenerate}
              >
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
                Clear
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={copyUpiUrl}
              >
                Copy UPI URL
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  // quick presets
                  setAmount("50");
                  setName("Quick Pay");
                  setNote("Preset 50");
                  setUpiUrl("");
                  setTimeout(handleGenerate, 50);
                }}
              >
                Preset ₹50
              </button>
            </div>
          </form>
        </main>

        <section className="app-card mb-6">
          <h2 className="h5">Preview</h2>
          <p className="text-slate-400">
            Scan with any UPI app (Google Pay, PhonePe, Paytm, BHIM) — amount
            will be pre-filled if provided.
          </p>

          <div className="d-flex align-items-center gap-4 flex-column flex-sm-row">
            <div>
              {upiUrl ? (
                <div className="text-center">
                  {/* renderAs="canvas" to enable download via canvas element */}
                  <QRCode
                    id="upi-canvas"
                    value={upiUrl}
                    size={220}
                    includeMargin={true}
                    renderAs="canvas"
                    bgColor="transparent"
                    fgColor="#e6eef8"
                  />
                  <div className="mt-2">
                    <button
                      className="btn btn-outline-light me-2"
                      onClick={downloadQR}
                    >
                      Download PNG
                    </button>
                    <button
                      className="btn btn-outline-light"
                      onClick={() => window.print()}
                    >
                      Print
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 text-slate-400">No QR generated yet</div>
              )}
            </div>

            <div className="flex-1">
              <h3 className="h6">Generated UPI URL</h3>
              <pre className="p-3 bg-slate-800 rounded text-sm break-words">
                {upiUrl || "—"}
              </pre>
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-400 py-4">
          <small>All rights reserved Rupesh Verma</small>
        </footer>
      </div>
    </div>
  );
}

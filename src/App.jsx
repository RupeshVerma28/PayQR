import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import QRCode from "react-qr-code";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function QRGenerator() {
  const [loading, setLoading] = useState(true);
  const [upiId, setUpiId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [upiUrl, setUpiUrl] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    // Simulate initial loading
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

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center p-4 md:p-6">
      <div className="w-full max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 animate-fade-in">
            UPI QR Generator
          </h1>
          <p className="text-slate-300 text-lg">
            Create UPI QR codes instantly - Simple, Fast & Secure
          </p>
        </header>

        <main className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-slate-700">
            <form
              onSubmit={handleGenerate}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="col-span-full md:col-span-1">
                <label className="form-label text-white">UPI ID</label>
                <input
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="form-control bg-transparent text-light"
                  placeholder="example@upi"
                  required
                />
              </div>
              <div className="col-span-full md:col-span-1">
                <label className="form-label text-white">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control bg-transparent text-light"
                  placeholder="Merchant or Payee name"
                />
              </div>
              <div className="col-span-full md:col-span-1">
                <label className="form-label text-white">
                  Amount (optional)
                </label>
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-control bg-transparent text-light"
                  placeholder="e.g. 199.00"
                />
              </div>
              <div className="col-span-full md:col-span-1">
                <label className="form-label text-white">Note</label>
                <input
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="form-control bg-transparent text-light"
                  placeholder="Payment note (optional)"
                />
              </div>

              <div className="col-span-full flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="btn btn-primary hover:scale-105 transition-transform"
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
          </div>

          <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-slate-700">
            <h2 className="text-2xl font-semibold text-white mb-4">Preview</h2>
            <p className="text-slate-400 mb-4">
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
                <h3 className="h6 text-white">Generated UPI URL</h3>
                <pre className="p-3 bg-slate-800 rounded text-sm break-words">
                  {upiUrl || "—"}
                </pre>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-8 text-center text-slate-400 py-4">
          <p className="text-sm">
            Created with ❤️ by Rupesh Verma |{" "}
            <span className="opacity-75">v1.0.0</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#121212]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<QRGenerator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

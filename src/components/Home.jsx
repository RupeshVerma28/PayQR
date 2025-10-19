import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            UPI QR Generator
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Generate custom UPI QR codes instantly for your business or personal
            use. Pre-fill amount, add notes, and streamline your payment
            collection.
          </p>
          <Link
            to="/generator"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Start Generating QR →
          </Link>
        </div>

        {/* Features Section */}
        <div className="row mb-5 g-4">
          <div className="col-md-4">
            <div className="surface p-4 h-100">
              <i className="bi bi-lightning-charge display-4 text-primary mb-3"></i>
              <h3 className="h4 mb-3">Quick Generation</h3>
              <p className="text-secondary mb-0">
                Generate UPI QR codes in seconds with custom amounts and notes.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="surface p-4 h-100">
              <i className="bi bi-wifi-off display-4 text-primary mb-3"></i>
              <h3 className="h4 mb-3">Works Offline</h3>
              <p className="text-secondary mb-0">
                Generate QR codes even without internet connection using PWA
                features.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="surface p-4 h-100">
              <i className="bi bi-shop display-4 text-primary mb-3"></i>
              <h3 className="h4 mb-3">Business Ready</h3>
              <p className="text-secondary mb-0">
                Perfect for merchants, freelancers, and businesses of all sizes.
              </p>
            </div>
          </div>
        </div>

        {/* How to Use Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How to Use
          </h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="surface p-4 text-center h-100">
                <i className="bi bi-1-circle display-6 text-primary mb-3"></i>
                <h4 className="h5 mb-3">Enter UPI ID</h4>
                <p className="text-secondary small mb-0">
                  Input your UPI ID that will receive the payment
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="surface p-4 text-center h-100">
                <i className="bi bi-2-circle display-6 text-primary mb-3"></i>
                <h4 className="h5 mb-3">Add Details</h4>
                <p className="text-secondary small mb-0">
                  Set amount, name, and payment note (optional)
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="surface p-4 text-center h-100">
                <i className="bi bi-3-circle display-6 text-primary mb-3"></i>
                <h4 className="h5 mb-3">Generate QR</h4>
                <p className="text-secondary small mb-0">
                  Click generate to create your custom QR code
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="surface p-4 text-center h-100">
                <i className="bi bi-4-circle display-6 text-primary mb-3"></i>
                <h4 className="h5 mb-3">Share or Download</h4>
                <p className="text-secondary small mb-0">
                  Download the QR code or share the UPI link
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to start?
          </h2>
          <Link
            to="/generator"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-block transition-all transform hover:scale-105"
          >
            Create Your First QR Code
          </Link>
        </div>
      </div>
    </div>
  );
}

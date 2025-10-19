import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import QRGenerator from "./components/QRGenerator";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen d-flex flex-column bg-dark">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<QRGenerator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

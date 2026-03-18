import React from "react";
import { FaHome, FaTools, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="navbar fixed-top bg-white shadow-sm py-2"
       style={{ 
    zIndex: 9998, // 🔥 increase
    position: "fixed",
    width: "100%"
  }}
    >
      <div className="container d-flex justify-content-between align-items-center">

        {/* 🔥 Logo */}
        <a
          href="#"
          className="navbar-brand fw-bold fs-4 mb-0"
          style={{
            background: "linear-gradient(90deg, red, black)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          OnnDmnd
        </a>

        {/* 🔥 Menu */}
        <div className="d-flex align-items-center gap-2 gap-md-4">

          <a
            href="#home"
            className="btn btn-light d-flex align-items-center gap-2 fw-semibold shadow-sm"
          >
            <FaHome className="text-danger" />
            <span className="d-none d-md-inline">Home</span>
          </a>

          <a
            href="#services"
            className="btn btn-light d-flex align-items-center gap-2 fw-semibold shadow-sm"
          >
            <FaTools className="text-danger" />
            <span className="d-none d-md-inline">Services</span>
          </a>

          <a
            href="#contact"
            className="btn btn-danger d-flex align-items-center gap-2 fw-semibold shadow"
          >
            <FaPhoneAlt />
            <span className="d-none d-md-inline">Contact</span>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
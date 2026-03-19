import React from "react";
import {

  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const whatsappNumber = "447312039102";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer
      style={{
        background: "#ffffff",
        paddingTop: "60px",
        borderTop: "1px solid #eee",
      }}
    >
      <div className="container">
        <div className="row">

          {/* BRAND */}
          <div className="col-lg-4 mb-4">
            <h3
              className="fw-bold"
              style={{
                background: "linear-gradient(90deg, red, black)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              OnnDmnd
            </h3>

            <p style={{ color: "#555" }}>
              Your one-stop solution for all home services like cleaning,
              plumbing, electrician and more — delivered at your doorstep.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold" style={{ color: "#111" }}>
              Quick Links
            </h5>
            <ul className="list-unstyled mt-3">
              {[
  { name: "Home", link: "#home" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
].map((item, i) => (
                <li key={i} className="mb-2">
                  <a
                    href={item.link}
                    style={{
                      color: "#555",
                      textDecoration: "none",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "red")}
                    onMouseLeave={(e) => (e.target.style.color = "#555")}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold" style={{ color: "#111" }}>
              Services
            </h5>
            <ul className="list-unstyled mt-3">
              {["Cleaning", "Plumbing", "Electrician", "Carpenters", "Builders", "Handyman", "Man & Van"].map(
                (service, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href="#"
                      style={{
                        color: "#555",
                        textDecoration: "none",
                        transition: "0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "red")}
                      onMouseLeave={(e) => (e.target.style.color = "#555")}
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="col-lg-3 mb-4">
            <h5 className="fw-bold" style={{ color: "#111" }}>
              Contact
            </h5>

            <div className="mt-3">
              <div className="d-flex align-items-center mb-3">
                <FaEnvelope className="me-2 text-danger" />
                <span style={{ color: "#555" }}>
                 onndmnd@gmail.com
                </span>
              </div>

              <div className="d-flex align-items-center">
                <FaWhatsapp className="me-2 text-danger" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#555",
                    textDecoration: "none",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "red")}
                  onMouseLeave={(e) => (e.target.style.color = "#555")}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr style={{ opacity: 0.1 }} />

        {/* Bottom */}
        <div className="text-center pb-3">
          <p style={{ color: "#777" }}>
            © {new Date().getFullYear()} OnDemand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
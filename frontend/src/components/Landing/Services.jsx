import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    title: "Plumbing",
    img: "/plumbing.svg",
  },
  {
    title: "Electrician",
    img: "/Electrician-amico.svg",
  },
  {
    title: "Carpenter",
    img: "/carpenter.svg",
  },
  {
    title: "Builder",
    img: "/builder.svg",
  },
  {
    title: "Handyman",
    img: "/handyman.svg",
  },
  {
    title: "Cleaning",
    img: "/cleaning.svg",
  },
  {
    title: "Man & Van",
    img: "/man&van.svg",
  },
];

const Services = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{ background: "#f8f9fa" }}
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Services</h2>
          <p style={{ color: "#666" }}>
            Choose from a wide range of professional home services
          </p>
        </div>

        {/* Cards */}
        <div className="row">
          {services.map((service, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={index}>
              
              <div
                className="card border-0 text-center"
                style={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  transition: "0.3s",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.08)";
                }}
              >

                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  style={{
                    height: "120px",
                    // objectFit: "cover",
                    position : "top"
                  }}
                />

                {/* Title */}
                <div className="py-3">
                  <h6 className="fw-semibold mb-0">
                    {service.title}
                  </h6>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
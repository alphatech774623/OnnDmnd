import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTools, FaBroom, FaBolt } from "react-icons/fa";
import { GiSurferVan } from "react-icons/gi";
import { MdCarpenter, MdHandyman } from "react-icons/md";
import { FaBuildingUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="hero-section">

      {/* 🔥 Background Image */}
      <div className="hero-bg"></div>

      {/* 🔥 Overlay */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="container hero-content">
        <div className="row align-items-center">

          <div className="col-lg-7 text-center text-lg-start">

            <h1 className="hero-title">
              Live, Trackable & Highly Vetted on Demand Services <br />
              <span className="gradient-text">
                At Your Doorstep
              </span>
            </h1>

            <p className="hero-subtitle">
              Serving only London and counties for now. <br />
              Will be launched in all major cities in the world.
            </p>

            <div className="tags">
              {[
                { icon: <FaBroom />, text: "Cleaning" },
                { icon: <FaTools />, text: "Plumbing" },
                { icon: <FaBolt />, text: "Electrician" },
                { icon: <GiSurferVan />, text: "Man & Van" },
                { icon: <MdHandyman />, text: "Handyman" },
                { icon: <FaBuildingUser />, text: "Builder" },
                { icon: <MdCarpenter />, text: "Carpenter" },
              ].map((item, i) => (
                <span key={i} className="tag">
                  <span className="icon">{item.icon}</span>
                  {item.text}
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import Toast from "../Toast";
import "intl-tel-input/build/css/intlTelInput.css";
  import intlTelInput from "intl-tel-input";
import { useEffect, useRef } from "react";

const Contact = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const [toast ,setToast] = useState({show : false, message : "", type : "success"})
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    

const phoneRef = useRef();

useEffect(() => {
  const iti = intlTelInput(phoneRef.current, {
    initialCountry: "gb", // UK default
    separateDialCode: true,
    preferredCountries: ["gb", "in"],
    autoPlaceholder: "polite",
      loadUtils: () =>
    import("intl-tel-input/build/js/utils.js"),
  });

  // save instance
  phoneRef.current.iti = iti;

  return ()=>{
    iti.destroy()
  }
}, []);

    const validate = (data) => {
  let newErrors = {};



  // Name validation
  if (!data.name.trim()) {
    newErrors.name = "Name is required";
  } else if (data.name.length < 3) {
    newErrors.name = "Name must be at least 3 characters";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!emailRegex.test(data.email)) {
    newErrors.email = "Invalid email format";
  }


  // Message validation
  if (!data.message.trim()) {
    newErrors.message = "Message cannot be empty";
  } else if (data.message.length < 10) {
    newErrors.message = "Message must be at least 10 characters";
  }

  return newErrors;
};
  // 🔥 Google Sheet Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const iti = phoneRef.current.iti;

const fullNumber = iti.getNumber();

if (!fullNumber) {
  setErrors({ mobileNumber: "Invalid phone number" });
  setToast({
    show: true,
    message: "Invalid phone number",
    type: "error",
  });
  return;
}


  const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      mobileNumber: fullNumber,
      message: e.target.message.value,
    };

      const validationErrors = validate(data);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setToast({
      show: true,
      message: "Please fix errors before submitting!",
      type: "error",
    });
    return;
  }

  setErrors({});

    try {
        setLoading(true)
      await fetch(import.meta.env.VITE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(data),
      });

     setToast({show : true, message : "Message Sent!, we will reach you soon. Thank you!", type : "success"})
      e.target.reset();
      setLoading(false)
    } catch (error) {
        setToast({
    show: true,
    message: "Failed to send message, Internal Server Error!",
    type: "error",
    
  });
  setLoading(false)
    }
  };

  return (
   <>
   <Toast
      show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
   />
     <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div
            className="row g-0"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              background: "#fff",
            }}
          >
            {/* LEFT SIDE */}
            <div
              className="col-lg-5 d-flex flex-column justify-content-center p-5 text-white"
              style={{
                background: "linear-gradient(135deg, red, black)",
              }}
            >
              <h2 className="fw-bold mb-3">OnDemand</h2>

              <p style={{ opacity: 0.9 }}>
                Need help with Cleaning, Plumbing, Electrician or any home
                service? Contact us anytime — we’re here to help you.
              </p>

              <div className="d-flex align-items-center mb-3 mt-4">
                <FaEnvelope className="me-3" />
                <span>{import.meta.env.VITE_EMAIL}</span>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaWhatsapp className="me-3" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  Chat on WhatsApp
                </a>
              </div>

    
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-7 p-5">
              <h3
                className="fw-bold mb-4 text-center text-lg-start"
                style={{ color: "#111" }}
              >
                Contact Us
              </h3>

              {/* ✅ FORM CONNECTED */}
              <form onSubmit={handleSubmit}>
                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      style={{
                        borderRadius: "10px",
                        padding: "12px",
                        border: "1px solid #eee",
                      }}
                      required
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      style={{
                        borderRadius: "10px",
                        padding: "12px",
                        border: "1px solid #eee",
                      }}
                      required
                    />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>

                  <div className="col-12 mb-3">
                   <input
                    type="tel"
                    ref={phoneRef}
                    className="form-control"
                    placeholder="Enter phone number"
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      border: "1px solid #eee",
                    }}
                    required
                  />
                    {errors.mobileNumber && (
  <small className="text-danger">{errors.mobileNumber}</small>
)}
                  </div>

                  <div className="col-12 mb-4">
                    <textarea
                      rows="5"
                      name="message"
                      className="form-control"
                      placeholder="Your Message"
                      style={{
                        borderRadius: "10px",
                        padding: "12px",
                        border: "1px solid #eee",
                      }}
                      required
                    ></textarea>
                    {errors.message && (
  <small className="text-danger">{errors.message}</small>
)}
                  </div>

                  <div className="col-12 text-center text-lg-start">
                    <button
                      type="submit"
                      className="btn px-5 py-2 fw-bold"
                      disabled={loading}
                      style={{
                        borderRadius: "30px",
                        background: "linear-gradient(90deg, red, black)",
                        color: "#fff",
                        border: "none",
                      }}
                    >
                     {loading ? "Loading..." : "Send Message"} 
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Contact;
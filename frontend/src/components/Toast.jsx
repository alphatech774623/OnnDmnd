import React, { useEffect, useRef } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Toast = ({ message, type = "success", show, onClose }) => {
  const toastRef = useRef();

  useEffect(() => {
    if (show) {
      toastRef.current.style.transform = "translateY(0)";
      toastRef.current.style.opacity = "1";

      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  }, [show]);

  const handleClose = () => {
    toastRef.current.style.transform = "translateY(-20px)";
    toastRef.current.style.opacity = "0";

    setTimeout(() => {
      onClose();
    }, 300);
  };

  const isSuccess = type === "success";

  return (
    <div
      ref={toastRef}
      style={{
        position: "fixed",
        top: "100px",
        right: "20px",
        minWidth: "280px",
        padding: "16px 20px",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        color: "#fff",
        background: isSuccess
          ? "linear-gradient(135deg, #00c853, #2e7d32)"
          : "linear-gradient(135deg, #ff1744, #b71c1c)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        backdropFilter: "blur(10px)",
        transform: "translateY(-20px)",
        opacity: "0",
        transition: "all 0.3s ease",
        zIndex: 9999,
      }}
    >
      {/* Icon */}
      <div style={{ fontSize: "20px" }}>
        {isSuccess ? <FaCheckCircle /> : <FaTimesCircle />}
      </div>

      {/* Message */}
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: "600" }}>{message}</div>
      </div>

      {/* Close Button */}
      <div
        onClick={handleClose}
        style={{
          cursor: "pointer",
          fontSize: "18px",
          opacity: 0.8,
        }}
      >
        ×
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
          width: "100%",
          background: "rgba(255,255,255,0.3)",
          overflow: "hidden",
          borderRadius: "0 0 12px 12px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "#fff",
            animation: "progress 3s linear",
          }}
        ></div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes progress {
            from { width: 100%; }
            to { width: 0%; }
          }
        `}
      </style>
    </div>
  );
};

export default Toast;
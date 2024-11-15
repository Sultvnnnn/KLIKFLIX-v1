import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility ketika pengguna scroll ke bawah
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll ke atas ketika tombol diklik
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} style={buttonStyle}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

const buttonStyle = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "10px 15px",
  fontSize: "16px",
  backgroundColor: "white",
  color: "black",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  zIndex: "1000",
};

export default BackToTop;

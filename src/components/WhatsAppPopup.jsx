import React from "react";
import "../styles/whatsappPopup.css";

const WhatsAppPopup = () => {

  const phoneNumber = "917480860225";

  const message = `Hi Teejasoft Team 👋
I visited your website and I’m interested in your services.
Please assist me with more details.`;

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="wa-float" onClick={handleClick}>
      <i className="fa-brands fa-whatsapp"></i>
      <span className="wa-text">Chat With Us</span>
    </div>
  );
};

export default WhatsAppPopup;
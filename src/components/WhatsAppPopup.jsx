import React from "react";
import "../styles/whatsappPopup.css";

const WhatsAppPopup = () => {

  const whatsappNumber = "919872469996"; // ← your WhatsApp number (with country code)

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-float" onClick={openWhatsApp}>
      <i className="fa-brands fa-whatsapp"></i>
    </div>
  );
};


export default WhatsAppPopup;
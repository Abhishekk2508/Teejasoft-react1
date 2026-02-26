import React, { useState } from "react";
import "../styles/whatsappPopup.css";   // correct path

const WhatsAppPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const whatsappNumber = "919999999999"; // replace with your number

  const sendMessage = () => {
    if (!name || !phone || !msg) {
      alert("Please fill all fields");
      return;
    }

    const text = `Name: ${name}\nPhone: ${phone}\nMessage: ${msg}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating Button */}
      <div className="whatsapp-float" onClick={() => setOpen(true)}>
        <i className="fa-brands fa-whatsapp"></i>
      </div>

      {/* Popup Overlay */}
      {open && (
        <div className="wa-popup-overlay">
          <div className="wa-popup">
            <div className="wa-popup-header">
              <h4>Chat with us</h4>
              <button className="wa-close" onClick={() => setOpen(false)}>
                ×
              </button>
            </div>

            <div className="wa-popup-body">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                placeholder="Type your message..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <button className="wa-send" onClick={sendMessage}>
                Send on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppPopup;

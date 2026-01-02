import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/601128246982"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-15 right-15 z-50"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative flex items-center justify-center">
        {/* Glowing Pulse Circle */}
        <span className="absolute inline-flex h-16 w-16 rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* Main Button */}
        <div className="relative bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.8)] hover:bg-green-600 hover:shadow-[0_0_25px_rgba(34,197,94,1)] hover:scale-110 transition-all duration-300">
          <FaWhatsapp size={20} />
        </div>
      </div>
    </a>
  );
};

export default WhatsApp;
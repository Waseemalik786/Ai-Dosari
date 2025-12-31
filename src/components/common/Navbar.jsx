import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaComments } from "react-icons/fa";

const Navbar = () => {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to toggle between English and Arabic
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    setLanguage(language === "English" ? "عربي " : "English");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-teal-500 shadow-md fixed top-0 w-full z-20">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-3xl font-extrabold cursor-pointer transition-all duration-300 hover:scale-105 transform">
          <span className="text-green-300">Al</span> Dosari Reserve
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Activities", "Gallery", "Contact"].map((item) => (
            <li key={item} className="group">
              <Link
                to={`/${item.toLowerCase()}`}
                className="relative text-white group-hover:text-yellow-400 transition-all duration-300 ease-in-out"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Button and CTA Buttons (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={toggleLanguage}
            className="text-white bg-teal-700 hover:bg-teal-800 py-2 px-5 rounded-full shadow-lg transition duration-300 hover:scale-105 transform"
          >
            {language === "English" ? "عربي" : "English"}
          </button>
          <a
            href="https://wa.me/yourwhatsappnumber"
            className="text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-5 rounded-full shadow-lg transition duration-300 hover:scale-105 transform"
          >
            Book a Visit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="text-white md:hidden flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links (Visible when the menu is open) */}
      {isMobileMenuOpen && (
        <div className="bg-gradient-to-r from-green-600 to-teal-500 p-4 md:hidden transition-all duration-300 ease-in-out">
          <ul className="space-y-4">
            {["Home", "About", "Activities", "Gallery", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-white hover:text-yellow-400 block text-lg py-2 transition duration-300"
                  onClick={toggleMobileMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile CTA */}
          <div className="flex space-x-4 mt-4">
            <button
              onClick={toggleLanguage}
              className="text-white bg-teal-700 hover:bg-teal-800 py-2 px-5 rounded-full shadow-lg transition duration-300"
            >
              {language === "English" ? "عربي " : "English"}
            </button>
            <a
              href="https://wa.me/yourwhatsappnumber"
              className="text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-5 rounded-full shadow-lg transition duration-300"
            >
              Book a Visit
            </a>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/yourwhatsappnumber"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-5 rounded-full shadow-lg text-3xl transition duration-300 hover:bg-green-600 hover:scale-110 transform"
      >
        <FaWhatsapp />
      </a>

      {/* AI Chatbot Floating Icon */}
      <div className="fixed bottom-20 right-8 bg-teal-700 text-white p-5 rounded-full shadow-lg text-3xl transition duration-300 hover:bg-teal-800 hover:scale-110 transform">
        <FaComments />
      </div>
    </nav>
  );
};

export default Navbar;

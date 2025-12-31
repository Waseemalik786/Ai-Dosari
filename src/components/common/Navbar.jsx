import React, { useState } from "react";
import { Link } from "react-router-dom";
import {  FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isLanguageHovered, setIsLanguageHovered] = useState(false);
  const [language, setLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "عربي" },
  ];

  const handleLanguageChange = (langCode) => {
    const selectedLanguage = languages.find((lang) => lang.code === langCode);
    setLanguage(selectedLanguage.name);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black z-50 shadow-lg fixed top-0 w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-4xl font-extrabold cursor-pointer transition-transform duration-300 hover:scale-110">
          <img src={logo} alt="Al Dosari Reserve Logo" className="h-10 w-18" />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "About", "Activities", "Gallery", "Contact"].map((item) => (
            <li key={item} className="group relative">
              <Link
                to={`/${item.toLowerCase()}`}
                className="relative px-4 py-2 rounded-md text-sm font-medium text-white group overflow-hidden"
              >
                <div className="absolute inset-0 bg-yellow-400 rounded-md transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 group-hover:text-green-900 transition-colors duration-300">{item}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Dropdown Button */}
        <div
          className="relative"
          onMouseEnter={() => {
            setIsLanguageHovered(true);
            setIsLanguageDropdownOpen(true);
          }}
          onMouseLeave={() => {
            setIsLanguageHovered(false);
            setIsLanguageDropdownOpen(false);
          }}
        >
          <button className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-white group relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-md transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
            <span className="relative text-[18px] z-10 group-hover:text-green-900 transition-colors duration-300 flex items-center">
              {language}
              {isLanguageHovered ? (
                <FaChevronUp className="ml-2 text-sm" />
              ) : (
                <FaChevronDown className="ml-2 text-sm" />
              )}
            </span>
          </button>

          {/* Language Dropdown */}
          {isLanguageDropdownOpen && (
            <div className="absolute left-0 mt-1.5 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-900 transition-colors duration-200"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop "Book a Visit" Button */}
        <a
          href="https://wa.me/320303"
          className="hidden md:block text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-5 rounded-full shadow-lg transition duration-300 hover:scale-105 transform"
          aria-label="Book a Visit on WhatsApp"
        >
          Book a Visit
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="text-white md:hidden flex items-center"
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
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
                  onClick={() => setIsMobileMenuOpen(false)} // Close the menu on click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile CTA */}
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => setLanguage(language === "English" ? "عربي" : "English")}
              className="text-white bg-teal-700 hover:bg-teal-800 py-2 px-5 rounded-full shadow-lg transition duration-300"
              aria-label="Toggle Language"
            >
              {language === "English" ? "عربي" : "English"}
            </button>
            <a
              href="https://wa.me/320303"
              className="text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-5 rounded-full shadow-lg transition duration-300 hover:scale-105 transform"
              aria-label="Book a Visit on WhatsApp"
            >
              Book a Visit
            </a>
          </div>
        </div>
      )}

      

      
    </nav>
  );
};

export default Navbar;

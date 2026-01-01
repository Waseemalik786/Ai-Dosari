import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../../assets/al-logo.png";

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Activities", path: "/activities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white z-50 shadow-lg fixed top-0 w-full border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
          <img
            src={logo}
            alt="Al Dosari Reserve Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex">
          {navLinks.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                to={item.path}
                className="relative px-3 py-2 text-lg font-semibold text-[#00627B] transition-all duration-300 group"
              >
                <span className="relative z-10 group-hover:text-white">
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-[#004a5d] rounded-md scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Dropdown & Desktop CTA */}
        <div className="flex items-center space-x-6">
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
            <button className="flex items-center cursor-pointer px-4 py-1 rounded-md text-lg font-medium text-[#00627B] group relative border border-[#00627B]/30">
              <div className="absolute inset-0 bg-[#A9D4E8]/20 rounded-md transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
              <span className="relative text-[16px] z-10 group-hover:text-[#004a5d] transition-colors duration-300 flex items-center">
                {language}
                {isLanguageHovered ? (
                  <FaChevronUp className="ml-2 text-xs" />
                ) : (
                  <FaChevronDown className="ml-2 text-xs" />
                )}
              </span>
            </button>

            {/* Language Dropdown */}
            {isLanguageDropdownOpen && (
              <div className="absolute left-0 mt-1.5 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="block cursor-pointer w-full text-left px-6 py-3 text-lg text-[#00627B] hover:bg-[#A9D4E8]/30 hover:text-[#004a5d] transition-colors duration-200"
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
            className="hidden md:block text-white bg-[#00627B] hover:bg-[#004a5d] py-1 px-5 rounded-full shadow-xl transition duration-300 hover:scale-110 transform font-medium"
            aria-label="Book a Visit on WhatsApp"
          >
            Book a Visit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="text-[#00627B] md:hidden flex items-center p-2 rounded-md hover:bg-[#A9D4E8]/20 transition-colors duration-300"
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMobileMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white p-6 md:hidden transition-all duration-300 ease-in-out border-t border-gray-200">
          <ul className="space-y-6">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-[#00627B] hover:text-[#004a5d] hover:bg-[#A9D4E8]/20 block text-lg py-3 px-4 rounded-md transition duration-300 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA & Language Buttons */}
          <div className="flex flex-col space-y-6 mt-8">
            <div className="flex space-x-4 justify-center">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`text-lg py-3 px-6 rounded-full transition duration-300 ${
                    language === lang.name
                      ? "bg-[#00627B] text-white"
                      : "bg-[#A9D4E8]/30 text-[#00627B] hover:bg-[#A9D4E8]/50"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
            <a
              href="https://wa.me/320303"
              className="text-white bg-[#00627B] hover:bg-[#004a5d] py-3 px-8 rounded-full shadow-xl transition duration-300 text-center font-medium"
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

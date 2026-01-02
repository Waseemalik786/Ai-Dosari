import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../../assets/al-logo.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/index";

const NavbarSection = () => {
  const { t } = useTranslation("navbar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [languageHovered, setLanguageHovered] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];

  const currentLanguageLabel =
    languages.find((lang) => lang.code === i18n.language)?.name || "English";

  // Force LTR layout
  useEffect(() => {
    document.dir = "ltr";
  }, []);

  // Dynamic text alignment for Arabic vs English
  const textAlign = i18n.language === "ar" ? "text-right" : "text-left";
  const itemsAlign = i18n.language === "ar" ? "items-end" : "items-start";

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.activities"), path: "/activities" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <nav className="bg-white z-50 shadow-lg fixed top-0 w-full border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
          <img src={logo} alt="Al Dosari Reserve Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`hidden md:flex space-x-4 ${itemsAlign}`}>
          {navLinks.map((item) => (
            <li key={item.name} className={`group relative ${textAlign}`}>
              <Link
                to={item.path}
                className="relative px-3 py-2 text-lg font-semibold text-[#00627B] transition-all duration-300 group"
              >
                <span className="relative z-10 group-hover:text-white">{item.name}</span>
                <div className="absolute inset-0 bg-[#004a5d] rounded-md scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out"></div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Dropdown & Desktop CTA */}
        <div className={`flex items-center space-x-4 ${itemsAlign}`}>
          {/* Language Selector */}
          <div
            className="relative"
            onMouseEnter={() => {
              setLanguageHovered(true);
              setIsLanguageDropdownOpen(true);
            }}
            onMouseLeave={() => {
              setLanguageHovered(false);
              setIsLanguageDropdownOpen(false);
            }}
          >
            <button className="flex items-center cursor-pointer px-4 py-1 rounded-md text-lg font-medium text-[#00627B] border border-[#00627B]/30">
              <span className="relative text-[16px] z-10 flex items-center">
                {currentLanguageLabel}
                {languageHovered ? (
                  <FaChevronUp className="ml-2 text-xs" />
                ) : (
                  <FaChevronDown className="ml-2 text-xs" />
                )}
              </span>
            </button>

            {isLanguageDropdownOpen && (
              <div className="absolute left-0 mt-1.5 w-40 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className="block w-full text-left px-6 py-3 text-lg text-[#00627B] hover:bg-[#A9D4E8]/30 hover:text-[#004a5d] transition-colors duration-200"
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
          >
            {t("nav.bookVisit")}
          </a>

          {/* Desktop "Login" Button */}
          <Link
            to="/login"
            className="hidden md:block text-[#00627B] border border-[#00627B] hover:bg-[#A9D4E8]/30 py-1 px-5 rounded-full shadow-md transition duration-300 hover:scale-105 font-medium"
          >
            {t("nav.login")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="text-[#00627B] md:hidden flex items-center p-2 rounded-md hover:bg-[#A9D4E8]/20 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white p-6 md:hidden transition-all duration-300 ease-in-out border-t border-gray-200">
          <ul className={`space-y-6 ${textAlign}`}>
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`text-[#00627B] hover:text-[#004a5d] hover:bg-[#A9D4E8]/20 block text-lg py-3 px-4 rounded-md transition duration-300 font-medium ${textAlign}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA & Language Buttons */}
          <div className={`flex flex-col space-y-6 mt-8 ${itemsAlign}`}>
            <div className="flex justify-center space-x-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`text-lg py-3 px-6 rounded-full transition duration-300 ${
                    currentLanguageLabel === lang.name
                      ? "bg-[#00627B] text-white"
                      : "bg-[#A9D4E8]/30 text-[#00627B] hover:bg-[#A9D4E8]/50"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            {/* Mobile "Book a Visit" Button */}
            <a
              href="https://wa.me/320303"
              className="text-white bg-[#00627B] hover:bg-[#004a5d] py-3 px-8 rounded-full shadow-xl transition duration-300 text-center font-medium"
            >
              {t("nav.bookVisit")}
            </a>

            {/* Mobile "Login" Button */}
            <Link
              to="/login"
              className="text-[#00627B] border border-[#00627B] hover:bg-[#A9D4E8]/30 py-3 px-8 rounded-full shadow-md transition duration-300 text-center font-medium"
            >
              {t("nav.login")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarSection;

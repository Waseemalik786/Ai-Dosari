import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../../assets/al-logo.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const NavbarSection = () => {
  const { t } = useTranslation("navbar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "العربية" },
  ];

  const currentLang =
    languages.find((l) => l.code === i18n.language)?.name || "English";

  useEffect(() => {
    document.dir = "ltr";
  }, []);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.activities"), path: "/activities" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 cursor-pointer hover:scale-105 transition" />

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className="text-[#00627B] font-semibold px-3 py-2 rounded-md hover:bg-[#004a5d] hover:text-white transition"
            >
              {l.name}
            </Link>
          ))}
        </ul>

        {/* Desktop Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">

        {/* Language Selector */}
<div
  className="relative"
  onMouseEnter={() => setIsLangOpen(true)}
  onMouseLeave={() => setIsLangOpen(false)}
>
  <button
    aria-haspopup="listbox"
    aria-expanded={isLangOpen}
    className="flex items-center gap-2 border px-4 py-1.5 rounded-md text-[#00627B] border-[#00627B]/20 hover:bg-[#A9D4E8]/20 transition-all duration-200 cursor-pointer"
  >
    <span className="font-medium text-sm">{currentLang}</span>
    <FaChevronDown 
      className={`text-[10px] transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} 
    />
  </button>

  {/* Dropdown Menu */}
  {isLangOpen && (
    <div className="absolute left-0 top-full pt-2 w-30 z-50">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              changeLang(lang.code);
              setIsLangOpen(false); // Close menu after selection
            }}
            className={`w-full px-4 py-2.5 text-left text-sm transition-colors cursor-pointer flex items-center justify-between
              ${i18n.language === lang.code 
                ? "bg-[#00627B] text-white" 
                : "text-[#00627B] hover:bg-[#A9D4E8]/30"
              }`}
          >
            {lang.name}
            {/* Visual indicator for active language */}
            {i18n.language === lang.code && (
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  )}
</div>

          {/* Book a Visit */}
          <a
            href="https://wa.me/320303"
            className="bg-[#00627B] text-white py-1 px-5 rounded-lg shadow-md hover:bg-[#004a5d] transition"
          >
            {t("nav.bookVisit")}
          </a>

          {/* Login */}
          <Link
            to="/login"
            className="flex items-center gap-2 border px-4 py-1.5 rounded-md text-[#00627B] border-[#00627B]/20 hover:bg-[#A9D4E8]/20 transition-all duration-200 cursor-pointer"
          >
            {t("nav.login")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#00627B]"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsLangOpen(false);
          }}
        >
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-6">

          {/* Links */}
          {navLinks.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-[#00627B] text-lg font-medium py-2"
            >
              {l.name}
            </Link>
          ))}

          {/* Language Selector */}
          <div>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="w-full flex justify-between items-center border px-4 py-3 rounded-md text-[#00627B]"
            >
              {currentLang}
              <FaChevronDown className={`transition ${isLangOpen ? "rotate-180" : ""}`} />
            </button>

            {isLangOpen && (
              <div className="mt-3 space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLang(lang.code)}
                    className={`w-full py-2 rounded-md text-center ${
                      i18n.language === lang.code
                        ? "bg-[#00627B] text-white"
                        : "bg-[#A9D4E8]/30 text-[#00627B]"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 mt-6">
            <a
              href="https://wa.me/320303"
              className="bg-[#00627B] text-white py-3 rounded-full text-center"
            >
              {t("nav.bookVisit")}
            </a>
            <Link
              to="/login"
              className="border border-[#00627B] text-[#00627B] py-3 rounded-full text-center"
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

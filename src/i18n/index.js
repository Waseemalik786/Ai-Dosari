import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_Navbar from "./locals/en/Navbar.json";
import ar_Navbar from "./locals/ar/Navbar.json";
import en_Footer from "./locals/en/footer.json";
import ar_Footer from "./locals/ar/footer.json";

const resources = {
  en: { navbar: en_Navbar,
        footer: en_Footer,
   },
  ar: { navbar: ar_Navbar,
         footer: ar_Footer
   },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    ns: ["navbar"],
    defaultNS: "navbar",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;

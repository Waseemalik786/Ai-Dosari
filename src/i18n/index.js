import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_Navbar from "./locals/en/Navbar.json";
import ar_Navbar from "./locals/ar/Navbar.json";
import en_Footer from "./locals/en/footer.json";
import ar_Footer from "./locals/ar/footer.json";
import en_contactslider from "./locals/en/contactSlides.json";
import ar_contactslider from "./locals/ar/contactSlides.json";
import en_homeheader from "./locals/en/homeslider.json";
import ar_homeheader from "./locals/ar/homeslider.json";
import en_homeactivities from "./locals/en/homeactivities.json";
import ar_homeactivities from "./locals/ar/homeactivities.json";
import en_hometrip from "./locals/en/trips.json";
import ar_hometrip from "./locals/ar/trips.json";
import en_visittripes from "./locals/en/visittripes.json";
import ar_visittripes from "./locals/ar/visittripes.json";
import en_services from "./locals/en/services.json";
import ar_services from "./locals/ar/services.json";  
const resources = {
  en: { navbar: en_Navbar,
        footer: en_Footer,
        contactslider: en_contactslider,
        homeslider: en_homeheader,
        homeactivities: en_homeactivities,
        trips: en_hometrip,
        visittripes: en_visittripes,
        services: en_services,
        
   },
  ar: { navbar: ar_Navbar,
         footer: ar_Footer,
         contactslider: ar_contactslider,
         homeslider: ar_homeheader,
          homeactivities: ar_homeactivities,
          trips: ar_hometrip,
          visittripes: ar_visittripes,
          services: ar_services,
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

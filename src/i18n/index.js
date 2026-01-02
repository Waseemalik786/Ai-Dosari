import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_Navbar from "./locals/en/Navbar.json";
import ar_Navbar from "./locals/ar/Navbar.json";
import en_Footer from "./locals/en/footer.json";
import ar_Footer from "./locals/ar/footer.json";
import en_contactslider from "./locals/en/contactSlides.json";
import ar_contactslider from "./locals/ar/contactSlides.json";
import en_galleryHero from "./locals/en/galleryHero.json";
import ar_galleryHero from "./locals/ar/galleryHero.json";
import en_contactHeader from "./locals/en/contactHeader.json";
import ar_contactHeader from "./locals/ar/contactHeader.json";
import en_contactInfoCards from "./locals/en/contactInfoCards.json";
import ar_contactInfoCards from "./locals/ar/contactInfoCards.json";
import en_contactWhyWhatsApp from "./locals/en/contactWhyWhatsApp.json";
import ar_contactWhyWhatsApp from "./locals/ar/contactWhyWhatsApp.json";
import en_contactTrust from "./locals/en/contactTrust.json";
import ar_contactTrust from "./locals/ar/contactTrust.json";
import en_contactForm from "./locals/en/contactForm.json";
import ar_contactForm from "./locals/ar/contactForm.json";
import en_gallery from "./locals/en/gallery.json";
import ar_gallery from "./locals/ar/gallery.json";
import en_galleryGrid from "./locals/en/galleryGrid.json";
import ar_galleryGrid from "./locals/ar/galleryGrid.json";
import en_galleryStats from "./locals/en/galleryStats.json";
import ar_galleryStats from "./locals/ar/galleryStats.json";
import en_activitiesHero from "./locals/en/activitiesHero.json";
import ar_activitiesHero from "./locals/ar/activitiesHero.json";
import en_activitiesList from "./locals/en/activitiesList.json";
import ar_activitiesList from "./locals/ar/activitiesList.json";
import en_testimonials from "./locals/en/testimonials.json";
import ar_testimonials from "./locals/ar/testimonials.json";
import en_authorityBrands from "./locals/en/authorityBrands.json";
import ar_authorityBrands from "./locals/ar/authorityBrands.json";
import en_aboutHero from "./locals/en/aboutHero.json";
import ar_aboutHero from "./locals/ar/aboutHero.json";
import en_aboutHistory from "./locals/en/aboutHistory.json";
import ar_aboutHistory from "./locals/ar/aboutHistory.json";
import en_missionVision from "./locals/en/missionVision.json";
import ar_missionVision from "./locals/ar/missionVision.json";
import en_valueSection from "./locals/en/valueSection.json";
import ar_valueSection from "./locals/ar/valueSection.json";
import en_mapLocation from "./locals/en/mapLocation.json";
import ar_mapLocation from "./locals/ar/mapLocation.json";
import en_sectionTeam from "./locals/en/sectionTeam.json";
import ar_sectionTeam from "./locals/ar/sectionTeam.json";
import en_sectionPartnership from "./locals/en/sectionPartnership.json";
import ar_sectionPartnership from "./locals/ar/sectionPartnership.json";
const resources = {
  en: { navbar: en_Navbar,
        footer: en_Footer,
        contactslider: en_contactslider,
        galleryHero: en_galleryHero,
        contactHeader: en_contactHeader,
        contactInfoCards: en_contactInfoCards,
        contactWhyWhatsApp: en_contactWhyWhatsApp,
        contactTrust: en_contactTrust,
        contactForm: en_contactForm,
        gallery: en_gallery,
        galleryGrid: en_galleryGrid,
        galleryStats: en_galleryStats,
        activitiesHero: en_activitiesHero,
        activitiesList: en_activitiesList,
        testimonials: en_testimonials,
        authorityBrands: en_authorityBrands,
        aboutHero: en_aboutHero,
        aboutHistory: en_aboutHistory,
        missionVision: en_missionVision,
        valueSection: en_valueSection,
        mapLocation: en_mapLocation,
        sectionTeam: en_sectionTeam,
        sectionPartnership: en_sectionPartnership
   },
  ar: { navbar: ar_Navbar,
         footer: ar_Footer,
         contactslider: ar_contactslider,
         galleryHero: ar_galleryHero,
         contactHeader: ar_contactHeader,
         contactInfoCards: ar_contactInfoCards,
         contactWhyWhatsApp: ar_contactWhyWhatsApp,
         contactTrust: ar_contactTrust,
         contactForm: ar_contactForm,
         gallery: ar_gallery,
         galleryGrid: ar_galleryGrid,
         galleryStats: ar_galleryStats,
         activitiesHero: ar_activitiesHero,
         activitiesList: ar_activitiesList,
         testimonials: ar_testimonials,
         authorityBrands: ar_authorityBrands,
         aboutHero: ar_aboutHero,
         aboutHistory: ar_aboutHistory,
         missionVision: ar_missionVision,
         valueSection: ar_valueSection,
         mapLocation: ar_mapLocation,
         sectionTeam: ar_sectionTeam,
         sectionPartnership: ar_sectionPartnership
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

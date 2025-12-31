import React from "react";
import ContactHeroSwiper from "../components/contact/ContactHeroSwiper";
import {
  ContactInfoCards,
  ContactVisitInfo,
  ContactWhyWhatsApp,
  
  
  MapEmbed,
  ContactTrust,
  ContactForm,
  ContactHeader,
} from "../components/contact";

const Contact = () => {
  return (
    /* overflow-x-hidden prevents horizontal glitches during animations */
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">

      {/* Hero Swiper - This component should have h-screen inside it */}
      <ContactHeroSwiper />

      {/* Page Content */}
      <main className="flex-grow flex flex-col ">
        {/* Fixed syntax error: added closing slash to ContactHeader */}
        <ContactHeader /> 
        <ContactInfoCards />
        <ContactVisitInfo />
        <ContactWhyWhatsApp />
       
       
        <MapEmbed />
        <ContactTrust />
        <ContactForm />
      </main>

    </div>
  );
};

export default Contact;
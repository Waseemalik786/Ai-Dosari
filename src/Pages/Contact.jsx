import React from "react";
import ContactHeroSwiper from "../components/contact/ContactHeroSwiper";
import {
  ContactInfoCards,
  ContactVisitInfo,
  ContactWhyWhatsApp,
  
  
  MapEmbed,
  // ContactTrust,
  ContactForm,
  ContactHeader,
} from "../components/contact";

const Contact = () => {
  return (
    
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">

     
      <ContactHeroSwiper />

    
      <main className="flex-grow flex flex-col ">
       
        <ContactHeader /> 
        <ContactInfoCards />
        <ContactVisitInfo />
        <ContactWhyWhatsApp />
       
       
        <MapEmbed />
        {/* <ContactTrust /> */}
        <ContactForm />
      </main>

    </div>
  );
};

export default Contact;
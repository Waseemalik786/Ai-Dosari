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

const ContactPage = () => {
  return (

    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">


      <ContactHeroSwiper />


      <main className="flex-grow flex flex-col ">
        <ContactHeader />

        <div className="max-w-7xl mx-auto px-4 py-2 w-full">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="w-full lg:w-[35%] flex flex-col gap-8">
              <ContactInfoCards />
              {/* <ContactVisitInfo /> */}
            </div>
            <div className="w-full lg:w-[65%]">
              <MapEmbed />
            </div>
          </div>
        </div>

        <ContactWhyWhatsApp />
        <ContactTrust />
        <ContactForm />
      </main>

    </div>
  );
};

export default ContactPage;
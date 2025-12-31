import React from "react";
import {
  ContactHeader,
  ContactInfoCards,
  ContactVisitInfo,
  ContactWhyWhatsApp,
  WhatsAppCTA,
  ContactFAQ,
  MapEmbed,
  ContactTrust,
  ContactForm,
} from "../components/contact";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ContactHeader />

      <main className="flex-grow flex flex-col gap-12 md:gap-16 pb-16">
        <ContactInfoCards />
        <ContactVisitInfo />
        <ContactWhyWhatsApp />
        <WhatsAppCTA />
        <ContactFAQ />
        <MapEmbed />
        <ContactTrust />
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;

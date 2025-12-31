import React from 'react';
import {
  ContactHeader,
  ContactInfoCards,
  WhatsAppCTA,
  MapEmbed,
  ContactForm
} from '../components/contact/index.js';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ContactHeader />
      
      <main className="flex-grow flex flex-col gap-8 md:gap-12 pb-16 bg-white">
        <ContactInfoCards />
        <WhatsAppCTA />
        <MapEmbed />
        <ContactForm />
      </main>
    </div>
  );
};

export default Contact;

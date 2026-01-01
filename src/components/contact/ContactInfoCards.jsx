import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, HelpCircle } from 'lucide-react';

const ContactInfoCards = () => {
  const contactMethods = [
    {
      id: 'whatsapp-general',
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'General Inquiry',
      info: 'Chat with us',
      link: 'https://wa.me/966501234567',
      bgImage: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56',
    },
    {
      id: 'whatsapp-booking',
      icon: <Users className="w-8 h-8" />,
      title: 'School & Groups',
      info: 'Book your visit',
      link: 'https://wa.me/966501234567',
      bgImage: 'https://plus.unsplash.com/premium_photo-1729791088769-6157499dbe9d',
    },
    {
      id: 'whatsapp-support',
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'Support & Help',
      info: 'Get assistance',
      link: 'https://wa.me/966501234567',
      bgImage: 'https://images.unsplash.com/photo-1504618223053-559bdef9dd5a',
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.id}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="relative flex flex-col items-center justify-center p-4 rounded-[1.25rem] overflow-hidden shadow-xl group min-h-[120px] bg-black"
          >
            {/* Background Image with Zoom Effect */}
            <img 
              src={method.bgImage} 
              alt={method.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
            />

            {/* Minimal Black Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-2 p-2 rounded-2xl bg-white/10 backdrop-blur-md text-[#00627B] border border-white/20 transition-colors duration-300 group-hover:bg-[#00627B] group-hover:text-white">
                {React.cloneElement(method.icon, { className: "w-6 h-6" })}
              </div>
              
              <h3 className="text-lg font-bold mb-0.5 text-white tracking-tight">
                {method.title}
              </h3>
              
              <p className="text-base font-medium text-white/80 group-hover:text-white transition-colors">
                {method.info}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCards;
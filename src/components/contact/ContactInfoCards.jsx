import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail } from 'lucide-react';

const ContactInfoCards = () => {
  const contactMethods = [
    {
      id: 'phone',
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Us',
      info: '+966 50 123 4567',
      link: 'tel:+966501234567',
      bgImage: 'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f',
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      info: 'Chat with us',
      link: 'https://wa.me/966501234567',
      bgImage: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'email',
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Us',
      info: 'info@ai-dosari.com',
      link: 'mailto:info@ai-dosari.com',
      bgImage: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.id}
            href={method.link}
            target={method.id === 'whatsapp' ? '_blank' : '_self'}
            rel={method.id === 'whatsapp' ? 'noopener noreferrer' : ''}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="relative flex flex-col items-center justify-center p-4 rounded-[1.25rem] overflow-hidden shadow-xl group min-h-[140px] bg-black"
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
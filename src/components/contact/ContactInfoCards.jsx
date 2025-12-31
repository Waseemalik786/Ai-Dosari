import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, Star } from 'lucide-react';

const ContactInfoCards = () => {
  const contactMethods = [
    {
      id: 'phone',
      icon: <Phone className="w-8 h-8" />,
      title: 'Call Us',
      info: '+966 50 123 4567', // Placeholder number, replace as needed
      link: 'tel:+966501234567',
      color: 'text-[#00627B]',
      bg: 'bg-white',
      border: 'border-[#00627B]/10'
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'WhatsApp',
      info: 'Chat with us',
      link: 'https://wa.me/966501234567', // Placeholder
      color: 'text-white',
      bg: 'bg-[#00627B]',
      border: 'border-[#00627B]',
      isHighlight: true
    },
    {
      id: 'email',
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Us',
      info: 'info@ai-dosari.com', // Placeholder
      link: 'mailto:info@ai-dosari.com',
      color: 'text-[#00627B]',
      bg: 'bg-white',
      border: 'border-[#00627B]/10'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            whileHover={{ y: -5, scale: 1.02 }}
            className={`flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg border transition-colors duration-300 ${method.bg} ${method.border} cursor-pointer group`}
          >
            <div className={`mb-4 p-4 rounded-full ${method.isHighlight ? 'bg-white/20' : 'bg-[#00627B]/5'} ${method.isHighlight ? 'text-white' : 'text-[#00627B]'}`}>
              {method.icon}
            </div>
            <h3 className={`text-xl font-bold mb-2 ${method.isHighlight ? 'text-white' : 'text-gray-800'}`}>
              {method.title}
            </h3>
            <p className={`text-center font-medium ${method.isHighlight ? 'text-white/80' : 'text-gray-600'}`}>
              {method.info}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCards;

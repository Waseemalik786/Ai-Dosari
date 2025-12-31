import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppCTA = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-center">
        <motion.a
          href="https://wa.me/966501234567" // Placeholder
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#00627B] hover:bg-[#00526B] text-white font-bold py-4 px-8 rounded-full shadow-xl transition-colors duration-300 text-lg"
        >
          <MessageCircle className="w-6 h-6" />
          <span>Book or Ask via WhatsApp</span>
        </motion.a>
      </div>
    </div>
  );
};

export default WhatsAppCTA;

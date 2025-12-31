import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';

const ContactForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto px-4 py-12 mb-12"
    >
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#00627B]/10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#00627B] mb-6 text-center">
          Send us a Message
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00627B] focus:ring-2 focus:ring-[#00627B]/20 outline-none transition-all"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00627B] focus:ring-2 focus:ring-[#00627B]/20 outline-none transition-all"
                placeholder="Your Phone"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00627B] focus:ring-2 focus:ring-[#00627B]/20 outline-none transition-all resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <div className="pt-4">
            <a 
              href="https://wa.me/966501234567" // Placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-[#00627B]/5 text-gray-600 hover:text-[#00627B] font-semibold py-4 px-6 rounded-xl transition-all duration-300 border border-gray-200 hover:border-[#00627B]/20"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1.5 mt-2">
              <MessageCircle className="w-4 h-4 text-[#00627B]" />
              For faster response, please contact us via <span className="font-semibold text-[#00627B]">WhatsApp</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;

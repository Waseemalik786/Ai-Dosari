import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation("contactForm");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto px-4 py-8 mb-8"
    >
      <motion.div 
        className="text-center mb-6" 
        initial={{ opacity: 0, y: -10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5, delay: 0.2 }} 
      > 
        <p className="inline-flex items-center gap-1 bg-[#00627B]/10 text-[#00627B] uppercase tracking-wider text-xs font-medium px-3 py-1 rounded-full mb-2"> 
          <Star className="w-3 h-3" /> 
          {t("badge")}
        </p> 
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-2"> 
          {t("title.main")} <span className="text-[#00627B]">{t("title.highlight")}</span> 
        </h2> 
        <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed"> 
          {t("description")}
        </p> 
      </motion.div>

      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#00627B]/10">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t("labels.name")}</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00627B] focus:ring-2 focus:ring-[#00627B]/20 outline-none transition-all"
                placeholder={t("placeholders.name")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t("labels.phone")}</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00627B] focus:ring-2 focus:ring-[#00627B]/20 outline-none transition-all"
                placeholder={t("placeholders.phone")}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t("labels.message")}</label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00627B] focus:ring-2 focus:ring-[#00627B]/20 outline-none transition-all resize-none"
              placeholder={t("placeholders.message")}
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
              <span>{t("button")}</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1.5 mt-2">
              <MessageCircle className="w-4 h-4 text-[#00627B]" />
              {t("footer.text")} <span className="font-semibold text-[#00627B]">{t("footer.highlight")}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}



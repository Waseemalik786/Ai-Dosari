import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const MapEmbed = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-7xl mx-auto px-4 py-12"
    >
      <motion.div 
        className="text-center mb-10" 
        initial={{ opacity: 0, y: -10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.5, delay: 0.2 }} 
      > 
        <p className="inline-flex items-center gap-1 bg-[#00627B]/10 text-[#00627B] uppercase tracking-wider text-xs font-medium px-3 py-1 rounded-full mb-3"> 
          <Star className="w-3 h-3" /> 
          Location
        </p> 
        <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-3"> 
          Our <span className="text-[#00627B]">Presence</span> 
        </h2> 
        <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed"> 
          Visit us at our office. We are located in the heart of Riyadh, easily accessible for all our clients and partners.
        </p> 
      </motion.div>
      
      <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
        <iframe 
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.629337586548!2d46.675295315004!3d24.71355178412351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1647856724458!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          className="absolute inset-0"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default MapEmbed;

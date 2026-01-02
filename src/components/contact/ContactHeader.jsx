import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ContactHeader = () => {
  return (
    <section
      className="
        relative w-full
        min-h-[30vh]
        pt-8 pb-4
        flex items-center justify-center
        overflow-hidden
        bg-white
      "
    >
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#00627B]/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#00627B]/5 blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
      >
        <motion.div 
          className="text-center mb-6" 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
        > 
          <p className="inline-flex items-center gap-1 bg-[#00627B]/10 text-[#00627B] uppercase tracking-wider text-xs font-medium px-3 py-1 rounded-full mb-3"> 
            <Star className="w-3 h-3" /> 
            Support
          </p> 
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-[#1e1e1e] mb-5 tracking-tight"> 
            Contact <span className="text-[#00627B]">Us</span> 
          </h1> 
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"> 
            We’re here to help you plan your visit and answer any questions. 
            <br className="hidden sm:block" />
            Reach out to us anytime.
          </p> 
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="
            mx-auto
            mt-8
            h-[2px]
            w-20
            origin-left
            rounded-full
            bg-[#00627B]/70
          "
        />
      </motion.div>
    </section>
  );
};

export default ContactHeader;

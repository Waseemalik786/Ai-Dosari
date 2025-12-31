import React from "react";
import { motion } from "framer-motion";

const ContactHeader = () => {
  return (
    <section
      className="
        relative w-full
        min-h-[45vh]
        pt-20
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
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="
            text-4xl
            font-semibold
            tracking-tight
            text-[#00627B]
            sm:text-5xl
            lg:text-6xl
          "
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="
            mt-5
            text-base
            text-[#00627B]/80
            sm:text-lg
            lg:text-xl
          "
        >
          We’re here to help you plan your visit and answer any questions.
          <br className="hidden sm:block" />
          Reach out to us anytime.
        </motion.p>

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

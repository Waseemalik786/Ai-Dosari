import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Do I need to book in advance?",
    a: "Yes, advance booking is recommended to ensure availability.",
  },
  {
    q: "Are school trips available?",
    a: "Yes, we offer tailored programs for schools and institutions.",
  },
  {
    q: "Is the reserve suitable for children?",
    a: "Absolutely. Many activities are family-friendly and educational.",
  },
  {
    q: "Where is the reserve located?",
    a: "Our exact location is available on Google Maps below.",
  },
];

const ContactFAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="px-4 md:px-8 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-10" 
          initial={{ opacity: 0, y: -10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
        > 
          <p className="inline-flex items-center gap-1 bg-[#00627B]/10 text-[#00627B] uppercase tracking-wider text-xs font-medium px-3 py-1 rounded-full mb-3"> 
            <Star className="w-3 h-3" /> 
            Help Center
          </p> 
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-3"> 
            Frequently Asked <span className="text-[#00627B]">Questions</span> 
          </h2> 
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed"> 
            Find quick answers to common questions about our services, bookings, and visit policies.
          </p> 
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border bg-white shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-4 text-left font-medium text-green-900"
              >
                {item.q}
                <ChevronDown
                  className={`h-5 w-5 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {open === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden px-4 pb-4 text-green-700/80"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <section className="px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-semibold text-green-900"
        >
          Frequently Asked Questions
        </motion.h2>

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

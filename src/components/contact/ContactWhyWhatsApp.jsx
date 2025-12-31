import React from "react";
import { MessageCircle, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Fast Response",
    text: "Get quick answers directly from our team",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    text: "Discuss your visit details without delays",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Coordination",
    text: "Trusted by schools, families, and institutions",
  },
];

const ContactWhyWhatsApp = () => {
  return (
    <section className="bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-semibold text-[#00627B]"
        >
          Why Contact Us via WhatsApp?
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <Icon className="mx-auto mb-4 h-10 w-10 text-[#00627B]" />
                <h3 className="mb-2 font-semibold text-[#00627B]">
                  {item.title}
                </h3>
                <p className="text-[#00627B]/80">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactWhyWhatsApp;

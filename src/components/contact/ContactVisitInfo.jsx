import React from "react";
import { Clock, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Clock,
    title: "Opening Hours",
    text: "Open daily from 8:00 AM to 6:00 PM",
  },
  {
    icon: Calendar,
    title: "Advance Booking",
    text: "Booking in advance is recommended for all visits",
  },
  {
    icon: Users,
    title: "Guided Visits",
    text: "Guided tours available for schools and groups",
  },
];

const ContactVisitInfo = () => {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="rounded-xl border bg-white p-6 shadow-sm transition-all duration-300"
                whileHover={{
                  y: -8,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Icon className="mb-4 h-8 w-8 text-[#00627B] hover:scale-110 hover:text-[#004d5a] transition-all duration-300" />
                <h3 className="mb-2 text-lg font-semibold text-[#00627B]">
                  {item.title}
                </h3>
                <p className="text-[#00627B]/80">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactVisitInfo;

import React from "react";
import { School, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: School,
    value: "100+",
    label: "School Visits",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Visitors Hosted",
  },
  {
    icon: Leaf,
    value: "Eco-Friendly",
    label: "Nature Programs",
  },
];

const ContactTrust = () => {
  return (
    <section className="bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-xl border p-6 text-center shadow-sm"
              >
                <Icon className="mx-auto mb-4 h-10 w-10 text-green-600" />
                <p className="text-3xl font-bold text-green-900">
                  {item.value}
                </p>
                <p className="mt-1 text-green-700/80">{item.label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactTrust;

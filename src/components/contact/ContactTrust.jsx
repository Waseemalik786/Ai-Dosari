import React from "react";
import { School, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactTrust() {
  const { t } = useTranslation("contactTrust");
  const translatedStats = t("stats", { returnObjects: true });

  const icons = {
    school: <School className="w-6 h-6" />,
    visitors: <Users className="w-6 h-6" />,
    programs: <Leaf className="w-6 h-6" />,
  };

  const stats = translatedStats.map((stat) => ({
    ...stat,
    icon: icons[stat.id],
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <div
      className="w-full py-10 px-4 relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1472214103451-9374bd1c798e")',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("heading")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group bg-white/95 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center shadow-lg transition-all duration-300 border border-transparent hover:border-[#00627B]/30"
            >
              {/* Icon Wrapper - Compact Size */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00627B]/5 text-[#00627B] mb-3 transition-all duration-300 group-hover:bg-[#00627B] group-hover:text-white group-hover:scale-105">
                {item.icon}
              </div>

              {/* Stat Value */}
              <h3 className="text-xl font-black text-gray-900 mb-1 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-600 leading-snug font-medium mb-3">
                {item.description}
              </p>
              
              {/* Decorative Line */}
              <div className="w-8 h-1 bg-[#00627B]/20 rounded-full group-hover:w-16 group-hover:bg-[#00627B] transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}


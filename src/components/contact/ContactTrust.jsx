import React from "react";
import { School, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactTrust() {
  const stats = [
    {
      id: "school",
      icon: <School className="w-8 h-8" />,
      title: "100+",
      description: "Educational school visits hosted annually to spread environmental awareness.",
    },
    {
      id: "visitors",
      icon: <Users className="w-8 h-8" />,
      title: "5,000+",
      description: "Visitors welcomed to the reserve for tours and family experiences.",
    },
    {
      id: "programs",
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly",
      description: "Dedicated nature programs focused on conservation and wildlife protection.",
    },
  ];

  // Container variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual card entrance variants
  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      className="w-full py-10 px-4 relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1472214103451-9374bd1c798e")',
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Animated Title */}
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-center text-white mb-8 tracking-tight"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          Our Impact & Reach
        </motion.h2>

        {/* Stats Grid */}
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
              className="bg-white/95 backdrop-blur-sm rounded-xl p-6 flex flex-col border-2 border-gray-200 transition-all duration-300 cursor-default shadow-lg"
              variants={cardVariants}
              whileHover={{
                y: -5,
                borderColor: "#00627B",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* Icon Wrapper */}
              <div className="flex justify-center mb-4">
                <motion.div
                  className="rounded-full p-3 bg-gray-100 text-[#00627B] shadow-inner"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#00627B",
                    color: "white",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Smaller Icon size */}
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </motion.div>
              </div>

              {/* Stat Value (Title) */}
              <h3 className="text-2xl font-black text-center text-[#1e1e1e] mb-2">
                {item.title}
              </h3>

              {/* Label (Description) */}
              <p className="text-xs text-gray-600 text-center leading-relaxed font-medium">
                {item.description}
              </p>
              
              {/* Optional Decorative Line */}
              <div className="mt-4 w-10 h-1 bg-[#00627B]/20 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


import React from "react";
import { MessageCircle, Zap, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactWhyWhatsApp() {
  const { t } = useTranslation("contactWhyWhatsApp");
  const translatedFeatures = t("features", { returnObjects: true });

  const icons = [Zap, MessageCircle, ShieldCheck];

  const features = translatedFeatures.map((feature, index) => ({
    ...feature,
    icon: icons[index],
  }));

  return (
    <section className="bg-white px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          className="text-center mb-6" 
          initial={{ opacity: 0, y: -10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
        > 
          <p className="inline-flex items-center gap-1 bg-[#00627B]/10 text-[#00627B] uppercase tracking-wider text-xs font-medium px-3 py-1 rounded-full mb-2"> 
            <Star className="w-3 h-3" /> 
            {t("badge")}
          </p> 
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1e1e] mb-2"> 
            {t("title.main")} <span className="text-[#00627B]">{t("title.highlight")}</span> 
          </h2> 
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed"> 
            {t("description")}
          </p> 
        </motion.div>

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
                className="rounded-xl bg-white p-6 text-center shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300"
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
}



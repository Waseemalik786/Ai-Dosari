import React from "react";
import {
  FaHeart,
  FaLeaf,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ValueSection = () => {
  const { t } = useTranslation("valueSection");
  const translatedValues = t("values", { returnObjects: true });
  const translatedStats = t("impact.stats", { returnObjects: true });

  const valueIcons = {
    passion: <FaHeart />,
    stewardship: <FaLeaf />,
    community: <FaUsers />,
    integrity: <FaShieldAlt />,
    innovation: <FaLightbulb />,
    partnership: <FaHandshake />,
  };

  const values = translatedValues.map((value) => ({
    ...value,
    icon: valueIcons[value.id],
  }));

  return (
    <section className="pt-24 bg-white relative overflow-hidden">
      {/* Background Subtle Text ✅ */}
      <div className="absolute -right-5 top-10 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[150px] font-bold  tracking-normal ">
          {t("bgText")}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header ✅ */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#00627b]/10 rounded-full mb-6">
            <span className="text-[#00627b] font-bold text-xs tracking-[0.3em] ">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-5xl md:text-4xl font-bold text-slate-900 leading-tight   tracking-normal">
            {t("heading.main")}{" "}
            <span className="text-[#00627b]">{t("heading.highlight")}</span>
          </h2>
        </div>

        {/* Values Grid - Clean Minimalist Style ✅ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100">
          {values.map((value, index) => (
            <div
              key={index}
              className=" group transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="p-12 w-full h-full border transition duration-400  border-slate-50 hover:bg-[#00627b]">
                <div className="text-3xl text-[#00627b] group-hover:text-white mb-8 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white  tracking-normal  mb-4 transition-colors">
                  {value.title}
                </h3>
                <p className="text-slate-500 group-hover:text-white/80 font-light leading-relaxed transition-colors">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Impact - Side-by-Side Professional Layout ✅ */}
        <div className="relative  pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8  tracking-normal  leading-none">
                {t("impact.heading.main")} <br />
                <span className="text-[#00627b]">
                  {t("impact.heading.highlight")}
                </span>
              </h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
                {t("impact.description")}
              </p>

              {/* Stats Grid - Square Clean ✅ */}
              <div className="grid grid-cols-2 gap-1 border-l-4 border-[#00627b]">
                {translatedStats.map((stat, i) => (
                  <div key={i} className="p-6 bg-slate-50">
                    <div className="text-3xl font-bold text-slate-900  tracking-normal">
                      {stat.val}
                    </div>
                    <div className="text-[10px] font-bold text-[#00627b]  tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-slate-100 translate-x-8 translate-y-8 -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1676729274610-706333071cb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxlbnZpcm9ubWVudGFsJTIwZ2xvYmFsJTIwaW1wYWN0c3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Conservation"
                className="w-[90%] h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <div className="absolute bottom-8 right-8 bg-[#00627b] text-white p-8 shadow-2xl">
                <div className="text-3xl font-bold  tracking-normal">
                  {t("impact.iso.title")}
                </div>
                <div className="text-xs font-bold  tracking-[0.3em] opacity-80">
                  {t("impact.iso.badge")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ValueSection;

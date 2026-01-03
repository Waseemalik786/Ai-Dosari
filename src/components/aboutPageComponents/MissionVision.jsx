import React from "react";
import { FaEye, FaBullseye } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MissionVision = () => {
  const { t } = useTranslation("missionVision");

  return (
    <section className=" bg-white relative overflow-hidden">
      {/* Background Subtle Text */}
      <div className="absolute -left-12.5 top-40 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[200px] font-bold  tracking-tighter">
          {t("bgText")}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 bg-white">
        {/* Section Header */}
        <div className="text-center mb-10 bg-white" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#00627b]/10 rounded-full mb-6">
            <span className="text-[#00627b] font-bold text-xs tracking-[0.3em] ">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-5xl md:text-4xl font-bold text-slate-900 leading-tight   tracking-tighter">
            {t("heading.main")}{" "}
            <span className="text-white bg-[#00627b] px-4">
              {t("heading.highlight")}
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-light">
            {t("subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10">
          {/* Mission Card */}
          <div
            className="bg-white p-12 shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-200 border-l-8 border-l-[#00627b] relative group"
            data-aos="fade-right"
          >
            <div className="w-16 h-16 bg-[#00627b] text-white flex items-center justify-center text-3xl mb-8 shadow-lg shadow-[#00627b]/20">
              <FaBullseye />
            </div>
            <h3 className="text-3xl font-bold text-slate-900  tracking-tighter  mb-6">
              {t("mission.title")}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              {t("mission.description")}
            </p>
            <ul className="space-y-4 text-slate-700 font-medium  text-sm tracking-widest">
              {t("mission.points", { returnObjects: true }).map(
                (point, index) => (
                  <li key={index} className="flex items-center gap-3 ">
                    <span className="w-2 h-2 bg-[#00627b]"></span> {point}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Vision Card - Same Style as Mission Card ✅ */}
          <div
            className="bg-white p-12 shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-200 border-l-8 border-l-[#00627b] relative group"
            data-aos="fade-left"
          >
            <div className="w-16 h-16 bg-[#00627b] text-white flex items-center justify-center text-3xl mb-8 shadow-lg shadow-[#00627b]/20">
              <FaEye />
            </div>
            <h3 className="text-3xl font-bold text-slate-900  tracking-tighter  mb-6">
              {t("vision.title")}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              {t("vision.description")}
            </p>
            <ul className="space-y-4 text-slate-700 font-medium  text-sm tracking-widest">
              {t("vision.points", { returnObjects: true }).map(
                (point, index) => (
                  <li key={index} className="flex items-center gap-3 ">
                    <span className="w-2 h-2 bg-[#00627b]"></span> {point}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

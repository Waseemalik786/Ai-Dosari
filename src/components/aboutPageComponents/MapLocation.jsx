import React from "react";
import { FaMapMarkerAlt, FaCar, FaBus, FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const MapLocation = () => {
  const { t } = useTranslation("mapLocation");
  const transportData = t("gettingHere.transport", { returnObjects: true });
  const attractionsData = t("attractions.items", { returnObjects: true });

  const transportIcons = {
    car: <FaCar />,
    bus: <FaBus />,
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Text - Consistency check ✅ */}
      <div className="absolute right-[-50px] top-20 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[200px] font-bold  tracking-tighter">
          {t("bgText")}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Hero Style Typography ✅ */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#00627b]/10 rounded-full mb-6">
            <span className="text-[#00627b] font-bold text-xs tracking-[0.3em] ">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-5xl md:text-3xl font-bold text-slate-900 leading-tight   tracking-tighter">
            {t("heading.main")}{" "}
            <span className="text-[#00627b]">
              {t("heading.highlight")}
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-light">
            {t("subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Map Container - Clean and Modern ✅ */}
          <div
            className="rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white group"
            data-aos="fade-right"
          >
            <div className="relative h-125 bg-slate-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.000000000000!2d51.1895!3d25.4856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI5JzA4LjIiTiA1McKwMTEnMjIuMiJF!5e0!3m2!1sen!2sqa!4v1620000000000!5m2!1sen!2sqa"
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
                title="Al Dosari Reserve Location"
              ></iframe>

              <div className="absolute bottom-6 left-6 bg-white p-4 shadow-xl rounded-sm border-l-4 border-[#00627b]">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-[#00627b] text-xl" />
                  <span className="font-bold text-slate-900  tracking-tight">
                    {t("mapBadge")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details - History Card Style Consistency ✅ */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-l-4 border-[#00627b]">
              <h3 className="text-3xl font-bold text-slate-900  tracking-tighter  mb-8">
                {t("gettingHere.title")}
              </h3>

              {/* Transport Options */}
              <div className="space-y-6 mb-10">
                {transportData.map((transport, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-12 h-12 bg-[#00627b]/5 rounded-sm flex items-center justify-center text-[#00627b] text-xl group-hover:bg-[#00627b] group-hover:text-white transition-all">
                      {transportIcons[transport.id]}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900  tracking-tight">
                        {transport.title}
                      </h4>
                      <p className="text-slate-500 font-light">
                        {transport.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visiting Hours - Modern Grid ✅ */}
              <div className="bg-slate-50 p-8 border border-slate-100 rounded-sm mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <FaClock className="text-[#00627b] text-xl" />
                  <h4 className="text-xl font-bold  tracking-tight">
                    {t("hours.title")}
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-[#00627b] font-bold text-xs  tracking-widest mb-1">
                      {t("hours.weekdays.days")}
                    </div>
                    <div className="text-2xl font-bold text-slate-900 tracking-tighter ">
                      {t("hours.weekdays.time")}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#00627b] font-bold text-xs  tracking-widest mb-1">
                      {t("hours.friday.days")}
                    </div>
                    <div className="text-2xl font-bold text-slate-900 tracking-tighter ">
                      {t("hours.friday.time")}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button - Hero Style Consistency ✅ */}
              <a
                href="https://wa.me/320303"
                className="inline-flex items-center justify-center w-full py-5 px-8 bg-[#00627b] text-white font-bold text-lg  tracking-widest hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-[#00627b]/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("button")}
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};
export default MapLocation;

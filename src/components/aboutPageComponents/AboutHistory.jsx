import React from "react";
import { FaCalendarAlt, FaSeedling, FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AboutHistory = () => {
  const { t } = useTranslation("aboutHistory");
  const translatedTimeline = t("timeline", { returnObjects: true });

  const eventIcons = {
    foundation: <FaSeedling />,
    conservation: <FaUsers />,
    education: <FaCalendarAlt />,
    recognition: <FaSeedling />,
    expansion: <FaUsers />,
  };

  const timelineEvents = translatedTimeline.map((event) => ({
    ...event,
    icon: eventIcons[event.id],
  }));

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Text - Hero se match karne ke liye */}
      <div className="absolute -left-12.5 top-20 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[200px] font-black  tracking-tighter">
          {t("bgText")}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Hero Style Typography */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#00627b]/10 rounded-full mb-6">
            <span className="text-[#00627b] font-bold text-xs tracking-[0.3em] ">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-5xl md:text-4xl font-black text-slate-900 leading-tight tracking-normal">
            {t("heading.prefix")}{" "}
            <span className="text-[#00627b]">
              {t("heading.highlight")}
            </span>{" "}
            {t("heading.suffix")}
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-light">
            {t("subheading")}
          </p>
        </div>

        {/* Timeline - Cleaner and More Consistent */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200 hidden lg:block"></div>

          <div className="space-y-10 lg:space-y-15">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                {/* Content Card */}
                <div
                  className={`lg:w-1/2 w-full ${
                    index % 2 === 0 ? "lg:pl-16" : "lg:pr-16"
                  }`}
                >
                  <div className="bg-white p-10 rounded-sm border-l-4 border-[#00627b] shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-black text-[#00627b]/20 group-hover:text-[#00627b]/40 transition-colors">
                        {event.year}
                      </span>
                      <div className="h-0.5 w-12 bg-[#00627b]"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4  tracking-tight ">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white border-2 border-[#00627b] rounded-full flex items-center justify-center text-[#00627b] text-xl z-20 shadow-lg  lg:flex">
                  {event.icon}
                </div>

                {/* Empty Side for balance */}
                <div className="lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHistory;


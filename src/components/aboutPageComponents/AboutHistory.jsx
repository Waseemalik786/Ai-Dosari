import React from "react";
import { FaCalendarAlt, FaSeedling, FaUsers } from "react-icons/fa";

const AboutHistory = () => {
  const timelineEvents = [
    {
      year: "2010",
      title: "Foundation Established",
      description:
        "Al Dosari Reserve was founded with a vision to protect Arabian wildlife and create an eco-tourism destination.",
      icon: <FaSeedling />,
    },
    {
      year: "2013",
      title: "Conservation Programs",
      description:
        "Launched comprehensive breeding programs for endangered Arabian Oryx and Gazelles.",
      icon: <FaUsers />,
    },
    {
      year: "2016",
      title: "Educational Center",
      description:
        "Opened the Educational Center to host school trips and environmental workshops.",
      icon: <FaCalendarAlt />,
    },
    {
      year: "2020",
      title: "International Recognition",
      description:
        "Received UNESCO recognition for conservation efforts and sustainable tourism practices.",
      icon: <FaSeedling />,
    },
    {
      year: "2023",
      title: "Expansion Phase",
      description:
        "Expanded reserve boundaries and introduced new safari experiences and activities.",
      icon: <FaUsers />,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Text - Hero se match karne ke liye */}
      <div className="absolute left-[-50px] top-20 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[200px] font-black uppercase tracking-tighter">
          History
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Hero Style Typography */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#00627b]/10 rounded-full mb-6">
            <span className="text-[#00627b] font-bold text-xs tracking-[0.3em] uppercase">
              Our Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight italic uppercase tracking-tighter">
            The <span className="text-white bg-[#00627b] px-4">Legacy</span>{" "}
            Behind Us
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-light">
            From humble beginnings to a premier conservation sanctuary, driven
            by passion and a commitment to nature.
          </p>
        </div>

        {/* Timeline - Cleaner and More Consistent */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-slate-200 hidden lg:block"></div>

          <div className="space-y-20 lg:space-y-32">
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
                      <div className="h-[2px] w-12 bg-[#00627b]"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tight italic">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white border-2 border-[#00627b] rounded-full flex items-center justify-center text-[#00627b] text-xl z-20 shadow-lg hidden lg:flex">
                  {event.icon}
                </div>

                {/* Empty Side for balance */}
                <div className="lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats - Hero Bottom Style Consistency */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 border-y border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {[
            { value: "13+", label: "Years of Excellence" },
            { value: "100+", label: "Conservation Projects" },
            { value: "50K+", label: "Happy Visitors" },
          ].map((stat, index) => (
            <div
              key={index}
              className="py-12 px-6 text-center group hover:bg-[#00627b]/5 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-5xl font-black text-[#00627b] mb-2 tracking-tighter italic">
                {stat.value}
              </div>
              <div className="text-slate-400 font-bold text-sm uppercase tracking-[4px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;

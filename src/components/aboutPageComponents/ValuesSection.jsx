import React from "react";
import {
  FaHeart,
  FaLeaf,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

const ValuesSection = () => {
  const values = [
    {
      icon: <FaHeart />,
      title: "Passion",
      description:
        "Our team's dedication to animal welfare drives everything we do.",
    },
    {
      icon: <FaLeaf />,
      title: "Stewardship",
      description:
        "Commitment to sustainable practices and habitat protection.",
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description:
        "Working with local communities for mutual educational benefit.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      description: "Honest communication and ethical conservation operations.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "Implementing cutting-edge technology in wildlife protection.",
    },
    {
      icon: <FaHandshake />,
      title: "Partnership",
      description:
        "Collaborating with global bodies for a greater environmental impact.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Text ✅ */}
      <div className="absolute right-[-20px] top-10 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[150px] font-black uppercase tracking-tighter italic">
          Principles
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header ✅ */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#00627b]/10 rounded-full mb-6">
            <span className="text-[#00627b] font-bold text-xs tracking-[0.3em] uppercase">
              What Drives Us
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight italic uppercase tracking-tighter">
            Our Core{" "}
            <span className="text-white bg-[#00627b] px-4">Values</span>
          </h2>
        </div>

        {/* Values Grid - Clean Minimalist Style ✅ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-100 mb-32">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-12 border border-slate-50 hover:bg-[#00627b] group transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="text-3xl text-[#00627b] group-hover:text-white mb-8 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 group-hover:text-white uppercase tracking-tighter italic mb-4 transition-colors">
                {value.title}
              </h3>
              <p className="text-slate-500 group-hover:text-white/80 font-light leading-relaxed transition-colors">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Environmental Impact - Side-by-Side Professional Layout ✅ */}
        <div className="relative border-t border-slate-100 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-none">
                Environmental <br />
                <span className="text-[#00627b]">Global Impact</span>
              </h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
                Our conservation efforts extend beyond the reserve boundaries,
                contributing to regional biodiversity and setting international
                standards for habitat restoration.
              </p>

              {/* Stats Grid - Square Clean ✅ */}
              <div className="grid grid-cols-2 gap-1 border-l-4 border-[#00627b]">
                {[
                  { label: "Habitat Restoration", val: "95%" },
                  { label: "Population Growth", val: "120%" },
                  { label: "Trees Planted", val: "50K+" },
                  { label: "Renewable Usage", val: "100%" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-slate-50">
                    <div className="text-3xl font-black text-slate-900 italic tracking-tighter">
                      {stat.val}
                    </div>
                    <div className="text-[10px] font-bold text-[#00627b] uppercase tracking-widest">
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
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                alt="Conservation"
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <div className="absolute bottom-8 right-8 bg-[#00627b] text-white p-8 shadow-2xl">
                <div className="text-3xl font-black italic tracking-tighter">
                  ISO 14001
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">
                  Certified Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;

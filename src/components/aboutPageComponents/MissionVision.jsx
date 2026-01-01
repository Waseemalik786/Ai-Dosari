import React from "react";
import {
  FaEye,
  FaBullseye,
  FaHandsHelping,
  FaLeaf,
  FaGraduationCap,
} from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Text - Consistency ✅ */}
      <div className="absolute left-[-50px] top-40 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[200px] font-black uppercase tracking-tighter">
          Purpose
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Hero Style ✅ */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#00627b]/10 rounded-full mb-6">
            <span className="text-[#00627b] font-bold text-xs tracking-[0.3em] uppercase">
              Our Purpose
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight italic uppercase tracking-tighter">
            Mission &{" "}
            <span className="text-white bg-[#00627b] px-4">Vision</span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Driving conservation through education and creating sustainable
            wildlife experiences for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Mission Card - History Card Style Consistency ✅ */}
          <div
            className="bg-white p-12 shadow-[0_15px_50px_rgba(0,0,0,0.05)] border-l-8 border-[#00627b] relative group"
            data-aos="fade-right"
          >
            <div className="w-16 h-16 bg-[#00627b] text-white flex items-center justify-center text-3xl mb-8 shadow-lg shadow-[#00627b]/20">
              <FaBullseye />
            </div>
            <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              To protect and conserve Arabian wildlife through innovative
              conservation programs, while providing immersive educational
              experiences that foster environmental stewardship.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium uppercase text-sm tracking-widest">
              <li className="flex items-center gap-3 italic">
                <span className="w-2 h-2 bg-[#00627b]"></span> Wildlife
                Protection
              </li>
              <li className="flex items-center gap-3 italic">
                <span className="w-2 h-2 bg-[#00627b]"></span> Environmental
                Education
              </li>
              <li className="flex items-center gap-3 italic">
                <span className="w-2 h-2 bg-[#00627b]"></span> Sustainable
                Tourism
              </li>
            </ul>
          </div>

          {/* Vision Card - Consistency ✅ */}
          <div
            className="bg-slate-900 p-12 shadow-2xl relative group overflow-hidden"
            data-aos="fade-left"
          >
            {/* Decorative Background Icon */}
            <FaEye className="absolute right-[-20px] bottom-[-20px] text-white/5 text-[200px]" />

            <div className="w-16 h-16 bg-white text-slate-900 flex items-center justify-center text-3xl mb-8 relative z-10">
              <FaEye />
            </div>
            <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic mb-6 relative z-10">
              Our Vision
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed font-light mb-8 relative z-10">
              To become the leading conservation destination in the Middle East,
              setting global standards in wildlife protection while inspiring
              the world to value our natural heritage.
            </p>
            <div className="pt-4 border-t border-white/10 relative z-10">
              <span className="text-[#00627b] font-black text-6xl opacity-40 italic uppercase tracking-tighter">
                Global Excellence
              </span>
            </div>
          </div>
        </div>

        {/* Core Values - Bottom Stats Style Consistency ✅ */}
        <div className="pt-20 border-t border-slate-100">
          <h3 className="text-2xl font-black text-center mb-16 uppercase tracking-widest italic text-slate-400">
            Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-100 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              {
                icon: <FaLeaf />,
                title: "Conservation First",
                desc: "Prioritizing wildlife protection in every single decision.",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                desc: "Implementing eco-friendly practices in all our operations.",
              },
              {
                icon: <FaGraduationCap />,
                title: "Education",
                desc: "Empowering communities through hands-on learning.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-12 text-center hover:bg-[#00627b]/5 transition-all group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="text-[#00627b] text-4xl mb-6 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">
                  {value.title}
                </h4>
                <p className="text-slate-500 font-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

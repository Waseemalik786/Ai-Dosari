import React from "react";
import { FaEye, FaBullseye, FaLeaf, FaGraduationCap } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className=" bg-white relative overflow-hidden">
      {/* Background Subtle Text */}
      <div className="absolute -left-12.5 top-40 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[200px] font-black uppercase tracking-tighter">
          Purpose
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 bg-white">
        {/* Section Header */}
        <div className="text-center mb-10 bg-white" data-aos="fade-up">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10">
          {/* Mission Card */}
          <div
            className="bg-white p-12 shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-200 border-l-8 border-l-[#00627b] relative group"
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

          {/* Vision Card - Same Style as Mission Card ✅ */}
          <div
            className="bg-white p-12 shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-200 border-l-8 border-l-[#00627b] relative group"
            data-aos="fade-left"
          >
            <div className="w-16 h-16 bg-[#00627b] text-white flex items-center justify-center text-3xl mb-8 shadow-lg shadow-[#00627b]/20">
              <FaEye />
            </div>
            <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic mb-6">
              Our Vision
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              To become the leading conservation destination in the Middle East,
              setting global standards in wildlife protection while inspiring
              the world to value our natural heritage.
            </p>
            <ul className="space-y-4 text-slate-700 font-medium uppercase text-sm tracking-widest">
              <li className="flex items-center gap-3 italic">
                <span className="w-2 h-2 bg-[#00627b]"></span> Global Excellence
              </li>
              <li className="flex items-center gap-3 italic">
                <span className="w-2 h-2 bg-[#00627b]"></span> Conservation
                Standards
              </li>
              <li className="flex items-center gap-3 italic">
                <span className="w-2 h-2 bg-[#00627b]"></span> Cultural Heritage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;

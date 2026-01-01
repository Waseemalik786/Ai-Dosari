import React from "react";
import { FaLeaf, FaMountain, FaWater } from "react-icons/fa";

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden lg:pt-16">
      {/* REAL Background Image - No more boring white look */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark subtle gradient taake image bhi dikhe aur text bhi parha jaye */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Main Content */}
          <div className="space-y-4" data-aos="fade-up">
            <h1 className="text-5xl md:text-5xl font-black text-white leading-tight italic uppercase tracking-tighter">
              Discover <br />
              <span className="text-[#00627b] bg-white px-4 inline-block mt-2">
                Nature's Legacy
              </span>
            </h1>

            <p className="text-xl md:text-xl text-gray-200 leading-relaxed max-w-2xl font-light drop-shadow-lg">
              Al Dosari Reserve stands as a sanctuary where wildlife thrives and
              conservation meets education. We protect endangered species for a
              better tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="pt-6 pb-8">
              <button className="px-6 py-3 bg-[#00627b] text-white font-bold text-lg rounded-sm hover:bg-white hover:text-[#00627b] transition-all duration-300">
                BOOK A TOUR
              </button>
            </div>
          </div>

          {/* Stats Bar - Bottom Overlay Style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/20">
            {[
              { icon: <FaLeaf />, value: "500+", label: "Species" },
              { icon: <FaMountain />, value: "1200+", label: "Hectares" },
              { icon: <FaWater />, value: "50K+", label: "Visitors" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 py-10 group hover:bg-[#00627b]/20 transition-colors px-4"
              >
                <div className="text-[#00627b] text-4xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-[3px] mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute -right-45 -top-0.3 -rotate-90 hidden lg:block">
        <span className="text-white/10 text-9xl font-black tracking-widest uppercase pointer-events-none">
          WILDLIFE
        </span>
      </div>
    </section>
  );
};

export default AboutHero;

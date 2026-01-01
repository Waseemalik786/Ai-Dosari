import React from "react";
import {
  FaUniversity,
  FaHandshake,
  FaAward,
  FaGlobe,
  FaChevronRight,
} from "react-icons/fa";

export default PartnershipSection = () => {
  const partners = [
    { name: "UNESCO", logo: "🌍", description: "Cultural Heritage Partner" },
    { name: "WWF", logo: "🐼", description: "Conservation Alliance" },
    { name: "Qatar University", logo: "🎓", description: "Research Partner" },
    {
      name: "Ministry of Environment",
      logo: "🏛️",
      description: "Government Partner",
    },
    { name: "Eco Tourism", logo: "🌿", description: "Tourism Partner" },
    { name: "Wildlife Trust", logo: "🦁", description: "Conservation Partner" },
  ];

  const certifications = [
    {
      icon: <FaAward />,
      title: "ISO 14001",
      description: "Environmental Management",
    },
    {
      icon: <FaGlobe />,
      title: "Green Key",
      description: "Eco Tourism Certification",
    },
    {
      icon: <FaHandshake />,
      title: "EarthCheck",
      description: "Sustainable Tourism",
    },
    {
      icon: <FaUniversity />,
      title: "UNESCO",
      description: "Heritage Site Partner",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Text - Consistency ✅ */}
      <div className="absolute right-[-50px] top-1/4 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[180px] font-black uppercase tracking-tighter">
          Alliance
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Hero Style ✅ */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#00627b]/10 rounded-full mb-6">
            <span className="text-[#00627b] font-bold text-xs tracking-[0.3em] uppercase">
              Collaborations
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight italic uppercase tracking-tighter">
            Partners &{" "}
            <span className="text-white bg-[#00627b] px-4">Accredits</span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-light">
            Working with global organizations to enhance our conservation impact
            and set new standards.
          </p>
        </div>

        {/* Partners Grid - Minimalist Style ✅ */}
        <div className="mb-32">
          <h3 className="text-2xl font-black text-slate-400 text-center mb-16 uppercase tracking-[0.2em] italic">
            Our Global Network
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-slate-100 divide-x divide-y md:divide-y-0 divide-slate-100">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group p-10 flex flex-col items-center justify-center text-center hover:bg-[#00627b]/5 transition-all duration-500"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                  {partner.logo}
                </div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-1">
                  {partner.name}
                </h4>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-tight">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications - Professional Card Style ✅ */}
        <div className="mb-32 bg-slate-50 p-12 md:p-20 rounded-sm border border-slate-100">
          <h3 className="text-3xl font-black text-slate-900 text-center mb-16 uppercase tracking-tighter italic">
            Official Accreditations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white border border-slate-200 text-[#00627b] text-3xl mb-6 shadow-sm group-hover:bg-[#00627b] group-hover:text-white transition-all duration-500 rounded-sm">
                  {cert.icon}
                </div>
                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2 italic">
                  {cert.title}
                </h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Collaborations - Split Content ✅ */}
        <div
          className="bg-white border-8 border-slate-50 p-10 md:p-16 relative overflow-hidden"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h3 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-none">
                Future <br />{" "}
                <span className="text-[#00627b]">Collaborations</span>
              </h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                We're actively seeking partnerships with research institutions
                and conservation bodies to develop innovative solutions for
                wildlife.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Wildlife Research Partnerships",
                  "Educational Program Development",
                  "Conservation Technology",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#00627b]"></div>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="px-10 py-4 bg-[#00627b] text-white font-black uppercase tracking-widest hover:bg-slate-900 transition-all text-sm">
                Partner With Us
              </button>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-[#00627b]/10 -rotate-3 group-hover:rotate-0 transition-transform"></div>
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
                alt="Future Collaborations"
                className="relative z-10 rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* Final CTA - The "Big Finish" ✅ */}
        <div
          className="mt-40 text-center py-20 border-t border-slate-100"
          data-aos="fade-up"
        >
          <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">
            Ready to Explore?
          </h3>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join us in our mission to protect wildlife while enjoying
            unforgettable eco-tourism experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/320303"
              className="px-12 py-5 bg-[#00627b] text-white font-black text-lg uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-[#00627b]/20"
            >
              Book Your Visit
            </a>
            <a
              href="#contact"
              className="px-12 py-5 border-2 border-slate-900 text-slate-900 font-black text-lg uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all"
            >
              Contact Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


import React from "react";
import { FaUniversity, FaHandshake, FaAward, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SectionPartnership = () => {
  const { t } = useTranslation("sectionPartnership");
  const partnerData = t("partners.items", { returnObjects: true });
  const accreditationData = t("accreditations.items", { returnObjects: true });
  const futureList = t("future.list", { returnObjects: true });

  const partners = [
    { id: "unesco", logo: "🌍" },
    { id: "wwf", logo: "🐼" },
    { id: "qu", logo: "🎓" },
    { id: "env", logo: "🏛️" },
    { id: "eco", logo: "🌿" },
    { id: "wildlife", logo: "🦁" },
  ];

  const certificationIcons = {
    iso: <FaAward />,
    greenkey: <FaGlobe />,
    earthcheck: <FaHandshake />,
    unesco_site: <FaUniversity />,
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Text - Consistency ✅ */}
      <div className="absolute right-[-50px] top-1/4 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[180px] font-bold  tracking-normal">
          {t("bgText")}
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Hero Style ✅ */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#00627b]/10 rounded-full mb-6">
            <span className="text-[#00627b] font-bold text-xs tracking-[0.3em] ">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-5xl md:text-4xl font-bold text-slate-900 leading-tight   tracking-normal">
            {t("heading.main")}{" "}
            <span className="text-white bg-[#00627b] px-4">
              {t("heading.highlight")}
            </span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto font-light">
            {t("subheading")}
          </p>
        </div>

        {/* Partners Grid - Minimalist Style ✅ */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-slate-400 text-center mb-16  tracking-[0.2em] ">
            {t("partners.title")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-slate-100 divide-x divide-y md:divide-y-0 divide-slate-100">
            {partnerData.map((partner, index) => {
              const partnerInfo = partners.find((p) => p.id === partner.id);
              return (
                <div
                  key={index}
                  className="group p-10 flex flex-col items-center justify-center text-center hover:bg-[#00627b]/5 transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                    {partnerInfo?.logo}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900  tracking-tight mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-[10px] text-slate-400  font-bold tracking-widest leading-tight">
                    {partner.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications - Professional Card Style ✅ */}
        <div className="mb-32 bg-slate-50 p-12 md:p-20 rounded-sm border border-slate-100">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-16  tracking-normal ">
            {t("accreditations.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {accreditationData.map((cert, index) => (
              <div
                key={index}
                className="text-center group"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white border border-slate-200 text-[#00627b] text-3xl mb-6 shadow-sm group-hover:bg-[#00627b] group-hover:text-white transition-all duration-500 rounded-sm">
                  {certificationIcons[cert.id]}
                </div>
                <h4 className="text-xl font-bold text-slate-900  tracking-normal mb-2 ">
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
              <h3 className="text-4xl font-bold text-slate-900 mb-8  tracking-normal  leading-none">
                {t("future.heading.main")} <br />{" "}
                <span className="text-[#00627b]">
                  {t("future.heading.highlight")}
                </span>
              </h3>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-8">
                {t("future.description")}
              </p>

              <div className="space-y-4 mb-10">
                {futureList.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#00627b]"></div>
                    <span className="text-sm font-bold text-slate-700  tracking-widest">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="px-5 py-3 rounded-lg bg-[#00627b] text-white font-bold  tracking-widest hover:bg-slate-900 transition-all text-sm">
                {t("future.button")}
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
          <h3 className="text-5xl md:text-4xl font-bold text-slate-900 mb-8  tracking-normal ">
            {t("cta.heading")}
          </h3>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/320303"
              className="px-5 py-3 rounded-lg bg-[#00627b] text-white font-bold text-lg  tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-[#00627b]/20"
            >
              {t("cta.buttons.book")}
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg border-2 border-slate-900 text-slate-900 font-bold text-lg  tracking-widest hover:bg-slate-900 hover:text-white transition-all"
            >
              {t("cta.buttons.contact")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPartnership;

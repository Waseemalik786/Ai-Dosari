import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Ahmed Al Dosari",
      role: "Founder & Director",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      description:
        "Wildlife biologist with 25+ years of conservation experience.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sarah Johnson",
      role: "Conservation Manager",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      description: "Specialist in Arabian wildlife and habitat restoration.",
      social: { instagram: "#", twitter: "#" },
    },
    {
      name: "Mohammed Hassan",
      role: "Education Director",
      image:
        "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Develops educational programs for schools and universities.",
      social: { linkedin: "#", facebook: "#" },
    },
    {
      name: "Fatima Al-Mansoori",
      role: "Visitor Experience",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      description: "Creates memorable and educational visitor experiences.",
      social: { instagram: "#", linkedin: "#" },
    },
  ];

  const socialIcons = {
    facebook: <FaFacebookF />,
    twitter: <FaTwitter />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedinIn />,
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Subtle Text ✅ */}
      <div className="absolute left-[-30px] top-20 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[180px] font-black uppercase tracking-tighter italic">
          Experts
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - Bold Style ✅ */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="inline-block px-4 py-1.5 bg-[#00627b]/10 rounded-full mb-6">
            <span className="text-[#00627b] font-bold text-xs tracking-[0.3em] uppercase">
              Meet Our Team
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight italic uppercase tracking-tighter">
            Passionate{" "}
            <span className="text-white bg-[#00627b] px-4">Experts</span>
          </h2>
          <p className="mt-6 text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            Our dedicated team of conservationists and specialists work
            tirelessly to protect Arabian wildlife.
          </p>
        </div>

        {/* Team Grid - Clean Square Cards ✅ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-100 mb-32">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-100 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Member Image - Grayscale Effect */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay Info on Hover */}
                <div className="absolute inset-x-0 bottom-0 bg-[#00627b] p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex space-x-4">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        className="text-white hover:text-slate-900 transition-colors"
                      >
                        {socialIcons[platform]}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-8 text-center">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter italic mb-1">
                  {member.name}
                </h3>
                <div className="text-[#00627b] font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                  {member.role}
                </div>
                <p className="text-slate-500 text-sm font-light leading-relaxed italic">
                  "{member.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Section - Modern Split Layout ✅ */}
        <div
          className="bg-slate-900 p-10 md:p-20 relative overflow-hidden"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter italic">
                Volunteer{" "}
                <span className="text-[#00627b] bg-white px-3 tracking-tighter">
                  Program
                </span>
              </h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-8">
                Join our passionate team of volunteers who contribute their time
                to support our conservation efforts. Make a real impact today.
              </p>

              {/* Stats in Volunteer Card */}
              <div className="grid grid-cols-2 gap-8 mb-10 border-l border-white/10 pl-8">
                <div>
                  <div className="text-4xl font-black text-white italic tracking-tighter mb-1">
                    200+
                  </div>
                  <div className="text-[#00627b] font-bold text-xs uppercase tracking-widest">
                    Active Members
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white italic tracking-tighter mb-1">
                    10K+
                  </div>
                  <div className="text-[#00627b] font-bold text-xs uppercase tracking-widest">
                    Hours Contributed
                  </div>
                </div>
              </div>

              <button className="px-10 py-5 bg-white text-slate-900 font-black uppercase tracking-widest hover:bg-[#00627b] hover:text-white transition-all duration-300">
                Become a Volunteer
              </button>
            </div>

            {/* Decorative Image Grid */}
            <div className="grid grid-cols-2 gap-4 opacity-70 group hover:opacity-100 transition-opacity">
              <img
                src="https://images.unsplash.com/photo-1563122870-6b0b48a0af09?auto=format&fit=crop&w=400&q=80"
                className="w-full h-48 object-cover grayscale"
                alt="V1"
              />
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80"
                className="w-full h-48 object-cover grayscale mt-8"
                alt="V2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

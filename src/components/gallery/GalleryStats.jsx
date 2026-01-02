import React from "react";
import { Users, Trees, Dog, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <Dog className="w-6 h-6" />,
    value: "50+",
    label: "Animal Species",
    description: "Rare and local wildlife cared for in our sanctuary.",
  },
  {
    id: 2,
    icon: <Trees className="w-6 h-6" />,
    value: "10k+",
    label: "Trees & Plants",
    description: "A lush green oasis in the heart of the desert.",
  },
  {
    id: 3,
    icon: <Users className="w-6 h-6" />,
    value: "15k+",
    label: "Annual Visitors",
    description: "Families and students joining our eco-mission.",
  },
  {
    id: 4,
    icon: <Award className="w-6 h-6" />,
    value: "40+",
    label: "Years of Heritage",
    description: "Decades of conservation and cultural pride.",
  },
];

export default function GalleryStats() {
  return (
    <section className="py-8 bg-gray-50"> {/* Reduced section padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Reduced gap */}
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-[#00627B]/30 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-between min-h-[220px]" 
            >
              <div className="flex flex-col items-center text-center">
                {/* Compact Icon Circle */}
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00627B]/5 text-[#00627B] mb-3 group-hover:bg-[#00627B] group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
                
                {/* Stat Value */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </h3>
                
                {/* Stat Label */}
                <p className="text-[#00627B] font-semibold uppercase tracking-wider text-[10px] mb-2">
                  {stat.label}
                </p>
                
                {/* Description - Tightened leading */}
                <p className="text-gray-500 text-xs leading-snug px-2">
                  {stat.description}
                </p>
              </div>

              {/* Decorative Line - Same as ContactTrust */}
              <div className="mt-4 w-8 h-1 bg-[#00627B]/20 mx-auto rounded-full group-hover:w-16 group-hover:bg-[#00627B] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
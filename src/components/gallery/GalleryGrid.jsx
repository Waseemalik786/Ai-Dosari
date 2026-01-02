import React, { useState } from 'react';
import { Camera, School, Stars, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion

const galleryData = [

  // SCHOOLS
  { id: 5, category: "Schools", image: "https://media.istockphoto.com/id/91860281/photo/two-observers-looking-at-a-giraffe-at-zoo.webp?a=1&b=1&s=612x612&w=0&k=20&c=_x-NYePtMxa7X4DxRq-K0iUsTCvnvut4RalzsuJ6p80=", title: "Scouts Group" },
  { id: 6, category: "Schools", image: "https://plus.unsplash.com/premium_photo-1686899171869-4d80f6f9d315?w=600&auto=format&fit=crop&q=60", title: "Tree Planting" },
  { id: 7, category: "Schools", image: "https://plus.unsplash.com/premium_photo-1737373915093-2c4128162243?w=600&auto=format&fit=crop&q=60", title: "Outdoor Classroom" },

  // EVENTS
  { id: 8, category: "Events", image: "https://plus.unsplash.com/premium_photo-1664355811228-3baa53f4b179?w=600&auto=format&fit=crop&q=60", title: "Camel Ride Sunset" },
  { id: 9, category: "Events", image: "https://images.unsplash.com/photo-1584581893475-7e64f711bdcf?w=600&auto=format&fit=crop&q=60", title: "Corporate Hike" },
  { id: 10, category: "Events", image: "https://images.unsplash.com/photo-1653760538531-753f76fbad56?w=600&auto=format&fit=crop&q=60", title: "Family Gathering" },

  // WILDLIFE
  { id: 1, category: "Wildlife", image: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d", title: "Oryx Grazing" },
  { id: 2, category: "Wildlife", image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7", title: "Giraffe Close-up" },
  { id: 3, category: "Wildlife", image: "https://images.pexels.com/photos/1109900/pexels-photo-1109900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Gazelle at Sunset" },

];

const categories = ["All", "Wildlife", "Schools", "Events"];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData = activeFilter === "All"
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Events": return <Stars className="text-white w-8 h-8" strokeWidth={1.5} />;
      case "Schools": return <School className="text-white w-8 h-8" strokeWidth={1.5} />;
      case "Wildlife": return <Camera className="text-white w-8 h-8" strokeWidth={1.5} />;
      default: return <ImageIcon className="text-white w-8 h-8" strokeWidth={1.5} />;
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === cat
                ? "bg-[#00627B] text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid with Framer Motion Layout */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <AnimatePresence mode='popLayout'>
          {filteredData.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative h-64 overflow-hidden rounded-xl shadow-md bg-gray-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay with Pop-in Dynamic Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-300 ease-out">
                  {getCategoryIcon(item.category)}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
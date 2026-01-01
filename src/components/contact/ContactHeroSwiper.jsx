import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  
  {
    title: "Discover Wildlife & Nature",
    subtitle: "Guided tours, family visits, and educational programs.",
    cta: "Get in Touch",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
  },
  {
    title: "Plan Your Visit Today",
    subtitle: "We’re here to help you plan a meaningful experience.",
    cta: "Chat with Us",
    image: "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f",
  },
  {
    title: "Explore Al Dosari Reserve",
    subtitle: "An unforgettable eco-tourism experience surrounded by nature.",
    cta: "Contact Us",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
  },
];

export default function ContactHeroSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full h-[100vh] lg:h-[100vh] overflow-hidden bg-zinc-900">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Minimalist legibility gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="container mx-auto px-6">
                  <AnimatePresence mode="wait">
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="flex flex-col items-center"
                      >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-4">
                          {slide.subtitle}
                        </p>
                        <motion.a
                          href="#contact-form"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group relative px-6 py-3 font-semibold text-white rounded-lg bg-[#00627B] cursor-pointer shadow-lg transition-all duration-500 ease-in-out hover:shadow-2xl hover:bg-[#004f67] inline-flex items-center gap-2 overflow-hidden"
                        >
                          <span className="absolute inset-0 bg-[#00627B]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
                          <span className="relative z-10 flex items-center gap-2">
                            {slide.cta}
                            <ArrowRight className="h-5 w-5" />
                          </span>
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Brand Color Arrows (No Background) */}
      <div className="absolute inset-y-0 left-4 z-30 flex items-center">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="text-[#00627B] transition-all hover:text-white hover:scale-110 active:scale-90"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-10 w-10 sm:h-12 sm:w-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 z-30 flex items-center">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="text-[#00627B] transition-all hover:text-white hover:scale-110 active:scale-90"
          aria-label="Next slide"
        >
          <ChevronRight className="h-10 w-10 sm:h-12 sm:w-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
        </button>
      </div>

      {/* Bottom Center Pagination with Brand Color */}
      <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2">
        <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index)}
              className={`h-2 transition-all duration-300 rounded-full ${
                activeIndex === index 
                ? "w-8 bg-[#00627B]" 
                : "w-2 bg-white/60 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


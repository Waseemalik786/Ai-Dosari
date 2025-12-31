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

const ContactHeroSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-zinc-900">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
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
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center"
                      >
                        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-2xl">
                          {slide.title}
                        </h1>
                        <p className="mb-8 max-w-2xl text-lg font-medium text-white/90 sm:text-2xl drop-shadow-lg">
                          {slide.subtitle}
                        </p>
                        <motion.a
                          href="#contact-form"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center gap-2 rounded-full bg-[#00627B] px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-[#00627B] shadow-xl"
                        >
                          {slide.cta}
                          <ArrowRight className="h-5 w-5" />
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

export default ContactHeroSwiper;
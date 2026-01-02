import React from 'react';
import { useTranslation } from 'react-i18next';

const testimonialImages = {
  1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBK8qVdyjaDW3a0zJeeWIYwnObm7HI2mYUZw&s",
  2: "https://media.istockphoto.com/id/1179823780/photo/three-business-men-walking-in-dubai-wearing-traditional-emirati-clothes.jpg?s=612x612&w=0&k=20&c=IkzF9R3atWHVG9BySI2Kl-1a1dpQt936tDo5xLvnGus=",
  3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQgr-MFu8h0_Hz_eG-xBZQX7d4_EOyx1xwKTYGPXamg&s",
};

function Testimonials() {
  const { t } = useTranslation("testimonials");
  const translatedTestimonials = t("testimonials", { returnObjects: true });

  const testimonials = translatedTestimonials.map((testimonial) => ({
    ...testimonial,
    imageUrl: testimonialImages[testimonial.id],
  }));

  return (
    <div className="bg-gray-50 pb-8">
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#00627B] mb-8">
          <span className='text-black'>{t("heading.highlight")}</span> {t("heading.main")}
        </h2>
        <p className="text-lg text-gray-600 mb-12">{t("subheading")}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform "
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <p className="text-xl font-semibold text-[#00627B] mb-4">{testimonial.name}</p>
              <p className="text-sm text-gray-500 mb-4">{testimonial.location}</p>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Testimonials;

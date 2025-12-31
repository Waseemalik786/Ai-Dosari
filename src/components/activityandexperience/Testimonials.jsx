import React from 'react';

// Example Testimonial Data
const testimonials = [
  {
    name: "Ali Hassan   ",
    location: "USA",
    text: "Al Dosari Reserve offers a once-in-a-lifetime experience! The wildlife is stunning, and the staff is knowledgeable and friendly. A must-visit for nature lovers!",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBK8qVdyjaDW3a0zJeeWIYwnObm7HI2mYUZw&s", // Replace with actual image URL
  },
  {
    name: "Sarah Ahmed",
    location: "Qatar",
    text: "The Safari Tour was incredible! We saw a variety of animals in their natural habitat. The guides were so passionate about conservation. I will definitely return!",
    imageUrl: "https://media.istockphoto.com/id/1179823780/photo/three-business-men-walking-in-dubai-wearing-traditional-emirati-clothes.jpg?s=612x612&w=0&k=20&c=IkzF9R3atWHVG9BySI2Kl-1a1dpQt936tDo5xLvnGus=", // Replace with actual image URL
  },
  {
    name: "Ali Al-Farsi",
    location: "UAE",
    text: "Amazing experience with the Horse & Camel Riding! A peaceful and unique way to explore the Reserve. Highly recommend it to anyone looking to connect with nature!",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUQgr-MFu8h0_Hz_eG-xBZQX7d4_EOyx1xwKTYGPXamg&s", // Replace with actual image URL
  },
  
];


function Testimonials() {
  return (
    <div className="bg-gray-50 pb-8">
      <section className="container mx-auto px-6 text-center">
        {/* Title and Subtitle */}
        <h2 className="text-4xl font-extrabold text-[#00627B] mb-8">What Our Visitors Say</h2>
        <p className="text-lg text-gray-600 mb-12">Real experiences shared by our happy guests. Read what they have to say about their time at Al Dosari Reserve!</p>

        {/* Testimonial Grid */}
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

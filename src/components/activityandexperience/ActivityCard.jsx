import React from 'react';

const ActivityCard = ({ title, description, ageGroup, imageUrl, whatsappMessage }) => {
  const handleWhatsAppClick = (message) => {
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-xs mx-auto">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
        <img src={imageUrl} alt={title} className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110" />
      </div>
      <h3 className="text-xl font-semibold text-[#00627B] mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <p className="text-xs text-gray-500 mb-4"><strong>Suitable for:</strong> {ageGroup}</p>
      <button
        onClick={() => handleWhatsAppClick(whatsappMessage)}
        className="bg-[#00627B] text-white py-2 px-5 rounded-full w-full hover:bg-[#004D63] cursor-pointer transition-all duration-300 text-sm"
      >
        Book This Activity
      </button>
    </div>
  );
};

export default ActivityCard;

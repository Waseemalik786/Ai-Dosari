// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Al Dosari Reserve</h3>
            <p className="text-gray-400">Your premier eco-tourism destination.</p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#home" className="text-gray-400 hover:text-gray-300">Home</a></li>
              <li><a href="#activities" className="text-gray-400 hover:text-gray-300">Activities</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gray-300">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">Phone: +123 456 789</p>
            <p className="text-gray-400">Email: info@aldosarireserve.com</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">&copy; 2025 Al Dosari Reserve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

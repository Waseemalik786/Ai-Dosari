import React, { useEffect } from "react";
import { FaPaw, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/al-logo.png';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <footer className="bg-[#A9D4E8]/30 h-auto text-[#00627B] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-transparent via-[white] to-transparent opacity-30"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-17 relative">
        {/* Animated paw prints decoration */}
        <div className="absolute -top-4 -left-4 opacity-10" data-aos="fade-right">
          <FaPaw className="h-16 w-16 text-[#00627B] transform rotate-45" />
        </div>
        <div className="absolute -bottom-4 -right-4 opacity-10" data-aos="fade-left">
          <FaPaw className="h-16 w-16 text-[white] transform -rotate-45" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          
          {/* Brand Column */}
          <div className="lg:col-span-1" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-6 transform transition-transform duration-300">
             <img src={logo} alt="Al Dosari Reserve Logo" className="h-18 w-30 mr-3" />
            </div>
            <p className="text-[#00627B] mb-6 leading-relaxed">
              Explore wildlife like never before. Join us in our mission to protect endangered species and provide education about the animal kingdom.
            </p>
            <div className="flex space-x-4">
              {[ 
                { icon: <FaFacebookF size={16} />, color: "hover:bg-blue-600" },
                { icon: <FaTwitter size={16} />, color: "hover:bg-blue-400" },
                { icon: <FaInstagram size={16} />, color: "hover:bg-pink-600" },
                { icon: <FaLinkedin size={16} />, color: "hover:bg-blue-700" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-[#00627B] p-3 rounded-full transition-all duration-300 text-white transform hover:scale-110 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center group overflow-hidden relative"
                  data-aos="zoom-in" 
                  data-aos-delay={200 + (index * 100)}
                >
                  <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold mb-6 text-[#00627B] relative inline-block after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-[#00627B] after:rounded-full">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Activities', 'Events'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-[#00627B] hover:text-[#00627B] transition-all duration-300 flex items-center group relative"
                  >
                    <span className="w-2 h-2 bg-[#00627B] rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-semibold mb-6 text-[#00627B] relative inline-block after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-[#00627B] after:rounded-full">
              Resources
            </h4>
            <ul className="space-y-3">
              {['FAQ', 'Blog & News', 'Volunteer', 'Support Center'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-[#00627B] hover:text-[#00627B] transition-all duration-300 flex items-center group relative"
                  >
                    <span className="w-2 h-2 bg-[#00627B] rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-lg font-semibold mb-6 text-[#00627B] relative inline-block after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-[#00627B] after:rounded-full">
              Contact Us
            </h4>
            <ul className="space-y-4 text-[#00627B]">
              <li className="flex items-center group">
                <div className="bg-[#00627B] p-2 rounded-lg mr-3 group-hover:bg-gray-400 group-hover:text-[#00627B] transition-all duration-300">
                  <FaMapMarkerAlt className="text-[white] group-hover:text-gray-900 transition-colors duration-300" />
                </div>
                <span className="group-hover:text-[black] transition-colors duration-300">123 Safari Lane, Animal City</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-[#00627B] p-2 rounded-lg mr-3 group-hover:bg-gray-400 group-hover:text-gray-900 transition-all duration-300">
                  <FaPhoneAlt className="text-[white] group-hover:text-gray-900 transition-colors duration-300" />
                </div>
                <span className="group-hover:text-black transition-colors duration-300">+123 456 7890</span>
              </li>
              <li className="flex items-center group">
                <div className="bg-[#00627B]  p-2 rounded-lg mr-3 group-hover:bg-gray-400 group-hover:text-gray-900 transition-all duration-300">
                  <FaEnvelope className="text-[white] group-hover:text-gray-900 transition-colors duration-300" />
                </div>
                <span className="group-hover:text-[#00627B]  duration-300">info@zooworld.org</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 py-3 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#00627B] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Al Dosari Reserve. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {[ 
              { label: "Privacy Policy", link: "#" },
              { label: "Terms of Service", link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-[#00627B] hover:text-[#00627B] transition-all duration-300 flex items-center group relative"
              >
                <span className="w-2 h-2 bg-[#00627B] rounded-full mr-3 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

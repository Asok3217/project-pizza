import React from 'react'
import { Link } from 'react-router-dom'
import { IoPizzaOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoMailOutline, IoCallOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5'

const Footer = ({ darkMode }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    { icon: <IoLocationOutline size={20} />, text: '123 Pizza Street, NY 10001' },
    { icon: <IoCallOutline size={20} />, text: '+1 (555) 123-4567' },
    { icon: <IoMailOutline size={20} />, text: 'contact@pizzapalace.com' },
    { icon: <IoTimeOutline size={20} />, text: 'Open daily: 10:00 AM - 10:00 PM' }
  ];

  const socialLinks = [
    { icon: <IoLogoInstagram size={20} />, label: 'Instagram', href: '#' },
    { icon: <IoLogoFacebook size={20} />, label: 'Facebook', href: '#' },
    { icon: <IoLogoTwitter size={20} />, label: 'Twitter', href: '#' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className={`${darkMode ? 'bg-black' : 'bg-white'} py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <IoPizzaOutline size={32} className={darkMode ? 'text-yellow-400' : 'text-blue-600'} />
              <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Pizza Palace
              </h2>
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Crafting delicious pizzas with passion since 2010. Every slice tells our story of quality and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`hover:translate-x-1 transition-transform duration-200 inline-block ${
                      darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
                    {item.icon}
                  </span>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Newsletter */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Follow Us
            </h3>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-zinc-800 text-blue-400 hover:bg-zinc-700' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Opening Hours
              </h4>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Monday - Sunday
                <br />
                10:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-zinc-800' : 'border-gray-200'}`}>
          <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {new Date().getFullYear()} Pizza Palace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
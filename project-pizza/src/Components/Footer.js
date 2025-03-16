import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoMailOutline, IoCallOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const contactInfo = [
    { icon: <IoLocationOutline size={20} />, text: '123 Pizza Street, NY 10001' },
    { icon: <IoCallOutline size={20} />, text: '+1 (555) 123-4567' },
    { icon: <IoMailOutline size={20} />, text: 'contact@pizzapalace.com' },
    { icon: <IoTimeOutline size={20} />, text: 'Open daily: 10:00 AM - 10:00 PM' }
  ];

  const socialLinks = [
    { icon: <IoLogoInstagram size={24} />, name: 'Instagram', url: '#' },
    { icon: <IoLogoFacebook size={24} />, name: 'Facebook', url: '#' },
    { icon: <IoLogoTwitter size={24} />, name: 'Twitter', url: '#' }
  ];

  return (
    <footer className="bg-[#121619] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Pizza Palace</h3>
            <p className="text-gray-400 leading-relaxed">
              Crafting perfect pizzas with passion since 2008. Every slice tells our story of quality and tradition.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-400">
                  <span className="text-white">{info.icon}</span>
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white/40 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-[#121619] rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pizza Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
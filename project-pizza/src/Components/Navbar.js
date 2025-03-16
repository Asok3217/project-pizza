import React, { useState, useEffect } from 'react'
import { IoMoonOutline, IoSunnyOutline, IoMenuOutline, IoCloseOutline, IoPizzaOutline } from 'react-icons/io5'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'menu', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? `${darkMode ? 'bg-black/95' : 'bg-white'} shadow-lg backdrop-blur-sm` 
        : `${darkMode ? 'bg-black' : 'bg-white'}`
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <IoPizzaOutline size={32} className={darkMode ? 'text-yellow-400' : 'text-blue-600'} />
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} hover:scale-105 transition-transform duration-300`}>
              Pizza Palace
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? darkMode
                      ? 'bg-zinc-900 text-white'
                      : 'bg-blue-600 text-white'
                    : darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-zinc-900'
                      : 'text-gray-700 hover:text-white hover:bg-blue-600'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 gap-2 rounded-lg ml-4 transition-all duration-300 ${
                darkMode 
                  ? 'bg-zinc-900 text-yellow-400 hover:bg-zinc-800' 
                  : 'bg-white text-black hover:bg-black hover:text-white'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode 
                  ? 'bg-zinc-900 text-yellow-400 hover:bg-zinc-800' 
                  : 'bg-white text-black hover:bg-black  hover:text-white'
              } transition-all duration-300`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <IoSunnyOutline size={20} /> : <IoMoonOutline size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                darkMode 
                  ? 'text-white hover:bg-zinc-900' 
                  : 'text-gray-700 hover:text-white hover:bg-black'
              } transition-colors duration-300`}
              aria-label="Toggle menu"
            >
              {isOpen ? <IoCloseOutline size={24} /> : <IoMenuOutline size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 flex flex-col items-center space-y-2 ${darkMode ? 'bg-black' : 'bg-white'}`}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-auto text-center px-4 py-2 rounded-lg ${
                  activeSection === link.id
                    ? darkMode
                      ? 'bg-zinc-900 text-white'
                      : 'bg-blue-600 text-white'
                    : darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-zinc-900'
                      : 'text-gray-700 hover:text-white hover:bg-blue-600'
                } transition-all duration-300`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
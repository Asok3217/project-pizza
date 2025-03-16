import React, { useState, useEffect } from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import logo from '../Assets/pizzaLogo.png'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#121619]/95 backdrop-blur-md shadow-lg' : 'bg-[#121619]/80 backdrop-blur-md'
    }`}>
      <div className='container mx-auto px-4 h-[80px] flex justify-between items-center'>
        {/* Logo section */}
        <Link to='/' className='flex items-center space-x-2'>
          <img 
            src={logo} 
            alt="Pizza Logo" 
            className='w-12 h-12 object-contain hover:scale-110 transition-transform duration-300' 
          />
          <span className='font-bold text-xl text-white'>
            Pizza Palace
          </span>
        </Link>

        {/* menu button */}
        <button 
          className='md:hidden text-2xl focus:outline-none text-white'
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <IoClose size={28} /> : <BiMenuAltRight size={32} />}
        </button>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          {[
            { path: '/', label: 'Home' },
            { path: '/menu', label: 'Menu' },
            { path: '/about', label: 'About' },
            { path: '/contact', label: 'Contact' }
          ].map(({ path, label }) => (
            <Link 
              key={path}
              to={path} 
              className={`relative px-2 py-1 text-sm font-medium tracking-wide transition-colors duration-200
                text-gray-100 hover:text-white
                ${isActive(path) ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white' : ''}
              `}
            >
              {label}
            </Link>
          ))}
          <Link 
            to="/menu" 
            className='px-6 py-2 rounded-full text-sm font-medium bg-white text-[#121619] 
              transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105'
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          menu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className={`absolute right-0 top-0 h-screen w-64 bg-[#121619] shadow-2xl transition-transform duration-300 transform ${
            menu ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className='flex flex-col p-6'>
              {[
                { path: '/', label: 'Home' },
                { path: '/menu', label: 'Menu' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' }
              ].map(({ path, label }) => (
                <Link 
                  key={path}
                  to={path} 
                  className={`py-3 px-4 text-gray-300 font-medium rounded-lg transition-colors duration-200
                    ${isActive(path) ? 'bg-white/10 text-white' : 'hover:bg-white/5 hover:text-white'}
                  `}
                  onClick={() => setMenu(false)}
                >
                  {label}
                </Link>
              ))}
              <Link 
                to="/menu" 
                className='mt-4 px-6 py-3 bg-white text-[#121619] rounded-lg font-medium text-center
                  hover:bg-gray-100 transition-colors duration-300'
                onClick={() => setMenu(false)}
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
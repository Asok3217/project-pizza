import React, {useState} from 'react'
import { BiChevronRightSquare } from "react-icons/bi";
import logo from '../Assets/pizzaLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  
  return (
    <nav className='w-full h-[80px] bg-[#121619] relative'>
      <div className='container mx-auto px-4 h-full flex justify-between items-center'>
        {/* Logo section */}
        <div className='flex items-center'>
          <Link to='/'>
            <img src={logo} alt="Pizza Logo" className='w-[70px] h-auto object-cover hover:cursor-pointer' />
          </Link>
        </div>

        {/* menu button */}
        <button 
          className='lg:hidden text-white focus:outline-none text-2xl'
          onClick={() => setMenu(!menu)}
        >
          <BiChevronRightSquare className={`transition-transform duration-200 ${menu ? 'rotate-90' : ''}`} />
        </button>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-8'>
          <Link 
            to='/' 
            className='text-white hover:text-gray-300 transition-colors duration-200'
          >
            Home
          </Link>
          <Link 
            to='/menu' 
            className='text-white hover:text-gray-300 transition-colors duration-200'
          >
            Menu
          </Link>
          <Link 
            to='/about' 
            className='text-white hover:text-gray-300 transition-colors duration-200'
          >
            About
          </Link>
          <Link 
            to='/contact' 
            className='text-white hover:text-gray-300 transition-colors duration-200'
          >
            Contact
          </Link>
        </div>

        {/* Mobile Navigation */}
        {menu && (
          <div className='lg:hidden absolute top-[80px] left-0 w-full bg-[#121619] border-t border-gray-700'>
            <div className='flex flex-col w-auto'>
              <Link 
                to='/' 
                className='text-white hover:underline  py-4 px-8 transition-colors duration-200'
                onClick={() => setMenu(false)}
              >
                Home
              </Link>
              <Link 
                to='/menu' 
                className='text-white hover:underline py-4 px-8  transition-colors duration-200'
                onClick={() => setMenu(false)}
              >
                Menu
              </Link>
              <Link 
                to='/about' 
                className='text-white hover:underline py-4 px-8  transition-colors duration-200'
                onClick={() => setMenu(false)}
              >
                About
              </Link>
              <Link 
                to='/contact' 
                className='text-white hover:underline py-4 px-8 transition-colors duration-200'
                onClick={() => setMenu(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react';
import { motion } from 'framer-motion';
import { menuList } from '../helpers/MenuList';

const Menu = ({ darkMode }) => {
  return (
    <div id="menu" className={`min-h-screen pt-20 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Menu
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuList.map((menuItem, key) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: key * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg ${
                darkMode ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-white hover:bg-gray-50'
              } transition-all duration-300`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={menuItem.image} 
                  alt={menuItem.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{menuItem.name}</h2>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {menuItem.description || 'A delicious pizza made with fresh ingredients'}
                </p>
                <div className="flex justify-between items-center">
                  <span className={`text-lg font-bold ${darkMode ? 'text-yellow-400' : 'text-black'}`}>
                    ${menuItem.price}
                  </span>
                  <button 
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      darkMode 
                        ? 'bg-zinc-800 text-white hover:bg-zinc-700' 
                        : 'bg-gray-800 text-white hover:bg-gray-900'
                    }`}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
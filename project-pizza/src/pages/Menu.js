import React from 'react'
import { menuList } from '../helpers/MenuList'
import MenuItem from '../Components/MenuItem'

const Menu = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#121619] mb-4'>
            Our Menu
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Discover our delicious selection of handcrafted pizzas, made with fresh ingredients and baked to perfection.
          </p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn'>
          {menuList.map((menuItem, key) => (
            <MenuItem 
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
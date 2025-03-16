import React from 'react'

const MenuItem = ({ image, name, price }) => {
  return (
    <div className='  group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
      <div className='h-56 overflow-hidden'>
        <img 
          src={image} 
          alt={name}
          className='w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110'
        />
      </div>
      <div className='p-6'>
        <h3 className='text-2xl font-bold text-[#121619] mb-3'>{name}</h3>
        <div className='flex justify-between items-center'>
          <p className='text-xl font-semibold text-[#121619]'>
            ${price.toFixed(2)}
          </p>
          <button className='px-4 py-2 bg-[#121619] text-white rounded-lg text-sm font-medium 
            transform transition-all duration-300 hover:bg-[#07090a] hover:shadow-lg 
            active:scale-95'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem 
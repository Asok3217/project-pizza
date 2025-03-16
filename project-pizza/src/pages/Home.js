import React from 'react'
import pizzaBackground from '../Assets/pizza.jpeg'

const Home = () => {
  const scrollToMenu = () => {
    try {
      const menuSection = document.getElementById('menu');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: scroll by height of viewport
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      // If smooth scroll is not supported or fails
      window.scrollTo(0, window.innerHeight);
    }
  };

  return (
    <div 
      className='home w-full min-h-[100vh] flex items-center justify-center md:justify-start bg-no-repeat bg-cover font-sans bg-center px-4 md:px-0'
      style={{ backgroundImage: `url(${pizzaBackground})` }}
    >
       <div className='headercontainer font-serif w-full md:w-auto max-w-2xl mx-4 md:ml-[50px] p-6 md:p-8 bg-gradient-to-br from-white/90 via-white/80 to-white/70 rounded-lg backdrop-blur-md shadow-xl text-center md:text-left'>
         <h1 className='text-4xl sm:text-6xl md:text-[90px] font-bold text-[#121619] leading-tight mb-2 md:mb-4'>
           Newar Pizzeria
         </h1>
         <p className='text-xl sm:text-2xl md:text-4xl font-black text-[#121619] mb-6 md:mb-8'>
          PIZZA FOR ALL TASTES
         </p>
         <button 
           onClick={scrollToMenu}
           className='w-full md:w-auto bg-[#121619] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-lg md:text-xl font-medium hover:bg-[#07090a] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
         >
           ORDER NOW
         </button>
       </div>
    </div>
  )
}

export default Home
import React from 'react'
import { motion } from 'framer-motion'
import { IoRestaurantOutline, IoTimeOutline, IoStarOutline, IoPizzaOutline, IoLeafOutline, IoHeartOutline, IoTrophyOutline, IoEarthOutline } from 'react-icons/io5'

const About = ({ darkMode }) => {
  const features = [
    {
      icon: <IoRestaurantOutline size={32} />,
      title: "Fresh Ingredients",
      description: "We use only the freshest vegetables, premium meats, and high-quality cheeses for our signature pizzas."
    },
    {
      icon: <IoTimeOutline size={32} />,
      title: "Hand-Tossed Dough",
      description: "Our dough is made fresh daily and hand-tossed by expert pizza makers for the perfect crust."
    },
    {
      icon: <IoStarOutline size={32} />,
      title: "Quality Service",
      description: "Our dedicated team ensures every pizza is crafted with care and delivered with a smile."
    },
    {
      icon: <IoPizzaOutline size={32} />,
      title: "Authentic Recipes",
      description: "Traditional recipes passed down through generations, perfected for modern tastes."
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Experience", icon: <IoTrophyOutline size={24} /> },
    { number: "50K+", label: "Happy Customers", icon: <IoHeartOutline size={24} /> },
    { number: "100+", label: "Pizza Varieties", icon: <IoPizzaOutline size={24} /> },
    { number: "30+", label: "Store Locations", icon: <IoEarthOutline size={24} /> }
  ];

  const values = [
    {
      icon: <IoLeafOutline size={24} />,
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and sustainable sourcing."
    },
    {
      icon: <IoHeartOutline size={24} />,
      title: "Community",
      description: "Supporting local initiatives and being an active part of our neighborhood."
    },
    {
      icon: <IoStarOutline size={24} />,
      title: "Excellence",
      description: "Striving for perfection in every pizza we make."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div id="about" className={`min-h-screen pt-20 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl font-bold mb-6">About Us</h1>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Welcome to Pizza Palace, where passion meets perfection in every slice. Since our establishment, 
                we've been dedicated to crafting the finest pizzas using traditional recipes and premium ingredients.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Our expert pizzaiolos combine years of experience with innovative techniques to create 
                unique flavors that keep our customers coming back for more.
              </p>
              <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <h2 className="text-2xl font-semibold">What Sets Us Apart:</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fresh, locally-sourced ingredients</li>
                  <li>Traditional wood-fired ovens</li>
                  <li>Handcrafted dough made daily</li>
                  <li>Signature sauce recipes</li>
                  <li>Commitment to quality service</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Pizza preparation"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className={`absolute inset-0 ${darkMode ? 'bg-black/40' : 'bg-black/20'}`}></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`mt-16 p-8 rounded-lg ${
              darkMode ? 'bg-zinc-900' : 'bg-gray-50'
            }`}
          >
            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Founded in 2010, Pizza Palace began as a small family-owned pizzeria with a big dream. 
              Today, we've grown into a beloved local institution, serving our community with the same 
              dedication to quality and service that we started with.
            </p>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We believe that great food brings people together, and we're proud to be a part of 
              countless family gatherings, celebrations, and everyday moments in our customers' lives.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import { motion } from 'framer-motion'
import { IoRestaurantOutline, IoTimeOutline, IoStarOutline, IoPizzaOutline, IoLeafOutline, IoHeartOutline, IoTrophyOutline, IoEarthOutline } from 'react-icons/io5'

const About = () => {
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
    <div className='min-h-screen pt-20 bg-gray-50'>
      {/* Header Section */}
      <div className='container mx-auto px-4'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className='text-center max-w-3xl mx-auto py-12'
        >
          <motion.h1 
            variants={itemVariants}
            className='text-4xl md:text-5xl font-bold text-[#121619] mb-6'
          >
            Our Story
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className='text-lg text-gray-600 leading-relaxed'
          >
            Welcome to Pizza Palace, where passion meets perfection. Since 2008, we've been crafting delicious pizzas that bring people together. Our commitment to quality ingredients and authentic recipes has made us a beloved part of the community.
          </motion.p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className='bg-[#121619] py-16'>
        <div className='container mx-auto px-4'>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className='text-center group'
              >
                <div className='mb-4 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex justify-center'>
                  {stat.icon}
                </div>
                <div className='text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300'>
                  {stat.number}
                </div>
                <div className='text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className='container mx-auto px-4 py-16'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className='text-center mb-12'
        >
          <motion.h2 
            variants={itemVariants}
            className='text-3xl md:text-4xl font-bold text-[#121619] mb-4'
          >
            Why Choose Us?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className='text-lg text-gray-600 max-w-2xl mx-auto'
          >
            At Pizza Palace, we believe in creating more than just great pizzas. We're building a community of food lovers who appreciate quality and tradition.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300'
            >
              <div className='w-16 h-16 bg-[#121619] rounded-lg flex items-center justify-center text-white mb-4 transform transition-transform duration-300 group-hover:rotate-12'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-bold text-[#121619] mb-3'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Values Section */}
      <div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className='max-w-4xl mx-auto'
          >
            <motion.div variants={itemVariants} className='text-center mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#121619] mb-4'>
                Our Values
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                These core values guide everything we do at Pizza Palace.
              </p>
            </motion.div>

            <div className='grid md:grid-cols-3 gap-8'>
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className='text-center'
                >
                  <div className='w-12 h-12 mx-auto bg-[#121619] rounded-full flex items-center justify-center text-white mb-4'>
                    {value.icon}
                  </div>
                  <h3 className='text-xl font-bold text-[#121619] mb-2'>{value.title}</h3>
                  <p className='text-gray-600'>{value.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className='text-center mt-12'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-block'
              >
                <a 
                  href="/menu" 
                  className='px-8 py-3 bg-[#121619] text-white rounded-full font-medium hover:bg-[#07090a] transition-colors duration-300 shadow-lg hover:shadow-xl'
                >
                  View Our Menu
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
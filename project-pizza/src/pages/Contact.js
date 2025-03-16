import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoTimeOutline, IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io5'

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactInfo = [
    {
      icon: <IoLocationOutline size={24} />,
      title: 'Visit Us',
      content: 'Pokhra-1,Bagar',
      description: 'Come taste the difference'
    },
    {
      icon: <IoMailOutline size={24} />,
      title: 'Email Us',
      content: 'contact@newarpizzapalace.com',
      description: 'We reply within 24 hours'
    },
    {
      icon: <IoCallOutline size={24} />,
      title: 'Call Us',
      content: '+61 984256',
      description: 'Sun-Fri 10am - 10pm'
    },
    {
      icon: <IoTimeOutline size={24} />,
      title: 'Opening Hours',
      content: 'Every day',
      description: '10:00 AM - 10:00 PM'
    }
  ];

  const socialLinks = [
    { icon: <IoLogoInstagram size={24} />, label: 'Instagram', link:'https://x.com/dominos'},
    { icon: <IoLogoFacebook size={24} />, label: 'Facebook' , link :'https://www.facebook.com/Dominos'},
    { icon: <IoLogoTwitter size={24} />, label: 'Twitter', link:'https://x.com/dominos'}
  ];

  return (
    <div className={`min-h-screen pt-20 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
      <div className='container mx-auto px-4 py-12'>
        <div className='max-w-6xl mx-auto'>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Get in Touch
            </h1>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${
                  darkMode ? 'bg-zinc-900' : 'bg-white'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  darkMode ? 'bg-zinc-800 text-blue-400' : 'bg-gray-800 text-white'
                }`}>
                  {info.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {info.title}
                </h3>
                <p className={`font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {info.content}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map Section */}
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`rounded-xl shadow-lg p-6 md:p-8 ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}
            >
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                  <label 
                    htmlFor='name' 
                    className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Full Name
                  </label>
                  <input 
                    id='name'
                    name='name' 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Asok Manandhar' 
                    type='text' 
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all
                      ${errors.name 
                        ? 'border-2 border-red-500 focus:ring-red-200' 
                        : `border ${darkMode ? 'border-gray-600 focus:border-blue-500 bg-zinc-800 text-white' : 'border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white'}`
                      }`}
                  />
                  {errors.name && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-sm text-red-500'
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor='email' 
                    className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Email Address
                  </label>
                  <input 
                    id='email'
                    name='email' 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='newar@example.com' 
                    type='email'
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all
                      ${errors.email 
                        ? 'border-2 border-red-500 focus:ring-red-200' 
                        : `border ${darkMode ? 'border-gray-600 focus:border-blue-500 bg-zinc-800 text-white' : 'border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white'}`
                      }`}
                  />
                  {errors.email && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-sm text-red-500'
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor='message' 
                    className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows='5'
                    placeholder='How can we help you?'
                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all resize-none
                      ${errors.message 
                        ? 'border-2 border-red-500 focus:ring-red-200' 
                        : `border ${darkMode ? 'border-gray-600 focus:border-blue-500 bg-zinc-800 text-white' : 'border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white'}`
                      }`}
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className='mt-1 text-sm text-red-500'
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>
                
                <motion.button 
                  type='submit'
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                  className={`w-full px-8 py-3 rounded-lg font-medium relative overflow-hidden
                    transition-all duration-300 shadow-lg 
                    ${isSubmitting 
                      ? 'bg-gray-400' 
                      : darkMode 
                        ? 'bg-gray-700 hover:bg-gray-800'
                        : 'bg-gray-700 hover:bg-gray-800'
                    }
                    text-white disabled:opacity-50 disabled:cursor-not-allowed
                    disabled:hover:transform-none group`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className='relative z-10 flex items-center justify-center'>
                    {isSubmitting ? (
                      <>
                        <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                          <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </span>
                </motion.button>
                
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`text-center mt-4 p-3 rounded-lg ${
                      darkMode 
                        ? 'bg-green-900/50 text-green-400' 
                        : 'bg-green-50 text-green-600'
                    }`}
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Map and Social Links Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='space-y-6'
            >
              {/* Map Embed */}
              <div className={`rounded-xl shadow-lg overflow-hidden h-[300px] ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
                <iframe
                  title="Pizza Palace Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224996.52501454257!2d83.69796752929688!3d28.220352752914028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595d14c1017e5%3A0x4af5456f50871527!2sPepe%20Pizza!5e0!3m2!1sne!2snp!4v1742129945625!5m2!1sne!2snp" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className={`rounded-xl shadow-lg p-6 ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
                <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Follow Us
                </h3>
                <div className='flex space-x-4'>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target='_blank'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center
                        transition-colors duration-300 ${
                          darkMode 
                            ? 'bg-zinc-800 text-blue-400 hover:bg-zinc-700' 
                            : 'bg-gray-800 text-white hover:bg-gray-700'
                        }`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className={`rounded-xl shadow-lg p-6 ${darkMode ? 'bg-zinc-900' : 'bg-white'}`}>
                <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Business Hours
                </h3>
                <div className='space-y-2'>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Sunday-Friday</p>
                  <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
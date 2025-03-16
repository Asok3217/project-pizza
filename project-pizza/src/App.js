import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
  }, []);

  // Update localStorage and document class when dark mode changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? 'dark bg-black text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className='flex-grow'>
          <section 
            id="home" 
            className={`min-h-screen pt-20 transition-colors duration-300 ${
              darkMode ? 'bg-black' : 'bg-white'
            }`}
          >
            <Home darkMode={darkMode} />
          </section>
          
          <section 
            id="menu" 
            className={`min-h-screen py-20 transition-colors duration-300 ${
              darkMode ? 'bg-black/90' : 'bg-gray-50'
            }`}
          >
            <div className={`container mx-auto px-4 ${
              darkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              <Menu darkMode={darkMode} />
            </div>
          </section>
          
          <section 
            id="about" 
            className={`min-h-screen py-20 transition-colors duration-300 ${
              darkMode ? 'bg-black' : 'bg-white'
            }`}
          >
            <div className={`container mx-auto px-4 ${
              darkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              <About darkMode={darkMode} />
            </div>
          </section>
          
          <section 
            id="contact" 
            className={`min-h-screen py-20 transition-colors duration-300 ${
              darkMode ? 'bg-black/90' : 'bg-gray-50'
            }`}
          >
            <div className={`container mx-auto px-4 ${
              darkMode ? 'text-gray-100' : 'text-gray-900'
            }`}>
              <Contact darkMode={darkMode} />
            </div>
          </section>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  )
}

export default App
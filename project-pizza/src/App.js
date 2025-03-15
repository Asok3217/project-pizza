import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Route,Switch, Routes} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <switch>
      <Routes>
        
      <Route path='/' exact component={Home} />
      
      </Routes>
     
      </switch>
    </Router>
    </>
  )
}

export default App
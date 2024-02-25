import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Applies from  './pages/Applies'
import Merkez from './pages/Merkez'

function SideRoutes() {
  return (
  
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/applies' element={<Applies />}/>
          <Route path='/merkezler' element={<Merkez />}/>

        </Routes>
      
  )
}

export default SideRoutes
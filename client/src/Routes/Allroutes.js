import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import About from '../Components/About'
const Allroutes = () => {
  return (
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<About />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

  )
}

export default Allroutes
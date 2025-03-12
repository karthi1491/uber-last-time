import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from '../src/pages/Home'
import UserLogin from '../src/pages/UserLogin'
import UserRegister from '../src/pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/captain-login' element={<Captainlogin/>} />
        <Route path='/captain-register' element={<Captainsignup/>} />

      </Routes>
      
    </div>
  )
}

export default App

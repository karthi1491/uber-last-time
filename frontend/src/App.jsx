import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Start'
import UserLogin from '../src/pages/UserLogin'
import UserRegister from '../src/pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import UserSignup from '../src/pages/UserSignup'
import Start from './pages/Start'

const App = () => {
  return (
    <div>
    
      <Routes>
      <Route path='/' element={<Start/>} />
      
       
        <Route path='/login' element={<UserLogin />} />
        <Route path='/register' element={<UserRegister />} />
        <Route path='/captain-login' element={<Captainlogin/>} />
        <Route path='/captain-signup' element={<Captainsignup/>} />
        <Route path='/signup' element={<UserSignup/>} />
        <Route path='/home' element={<Home />} />
       
        
       
      </Routes>
   
    </div>
  )
}

export default App

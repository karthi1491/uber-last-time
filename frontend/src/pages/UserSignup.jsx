import React, { useState, useContext } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

import { UserDataContext } from '../context/UserContext'; 


function UserSignup() {

 const [firstname, setFirstName] = useState('')
 const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()
const {user, setUser} = useContext(UserDataContext)
  const submitHandler = async (e) => {
    e.preventDefault()

 
    const userData = {
      fullname:{
        firstname:firstname,
        lastname:lastname
      },

      email:email,
      password:password
    }

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    console.log("VITE_BASE_URL:", BASE_URL);

    const response = await axios.post(`${BASE_URL}/users/register`, userData);


    if(response.status === 201){
      const data = response.data
      setUser(data.user)
      console.log("navigating to home")
      navigate('/home')

    }



    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')

  }
  return (


    
    <div>

<div className='p-7 flex flex-col justify-between h-screen'>
		<div>
		<img className='w-16 mb-10' src="https://static.vecteezy.com/system/resources/previews/027/127/451/large_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" />
		<form onSubmit={(e) => {
			submitHandler(e)}}>
           <h3 className='text-lg w-1/2  font-medium mb-2'>What's your name</h3>

        <div className='flex gap-4 mb-7'>
          <input type="text" placeholder='firstname' 
             className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base' value={firstname} onChange={(e)=> setFirstName(e.target.value)} />
          <input type="text" placeholder='lastname'  
            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base' value={lastname} onChange={(e)=> setLastName(e.target.value)} />

        </div>
			<h3 className='text-xl font-medium mb-2'>What's your email 	</h3>
				<input 
				value={email}
				onChange={(e)=> setEmail(e.target.value)}
				className='bg-gray-100 mb-7 rounded px-4 py-2 border w-full  placeholder: text-base'
				required type='email'
				 placeholder='email@example.com' 
				 />
             <h3 className='text-xl font-medium mb-2'>What's your password</h3>
			 <input
			 required 		className='bg-gray-100 mb-7 rounded px-4 py-2 border w-full text-lg placeholder: text-base' type='password' placeholder='password'
			 
			 value={password}
			 onChange={(e) => setPassword(e.target.value)}
			 />
			 <button  		className='bg-black text-white rounded px-4 py-2  w-full text-lg'>Create Account</button>
		
		</form>

	  <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
		</div>

    <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
		
	  </div>


    </div>
  )
}

export default UserSignup
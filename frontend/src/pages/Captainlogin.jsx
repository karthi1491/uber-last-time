import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Captainlogin() {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [captainData, SetCaptainData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    SetCaptainData({
      email:email,
      password: password
    })



    setEmail('')
    setPassword('')

  }


  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      
		<div>
		<img className='w-16 mb-10' src="https://static.vecteezy.com/system/resources/previews/027/127/451/large_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" />
		<form onSubmit={(e) => {
			submitHandler(e)}}>
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
			 <button  		className='bg-black text-white rounded px-4 py-2  w-full text-lg'>Login</button>
		
		</form>

		<p className='text-center'>New here? <Link to='/captain-signup' className='text-blue-600'>Create new Account</Link></p>
		</div>

		<div>
		<Link
          to='/login'
          className='bg-[#a32e67] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as user</Link>

		</div>
		
	  </div>
  )
}

export default Captainlogin
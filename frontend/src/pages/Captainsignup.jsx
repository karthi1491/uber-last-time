import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Captainsignup() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,

    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
  }

  return (
  
      <div>

<div className='p-7 flex flex-col justify-between h-screen'>
		<div>
		<img className='w-16 mb-10' src="https://static.vecteezy.com/system/resources/previews/027/127/451/large_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" />
		<form onSubmit={(e) => {
			submitHandler(e)}}>
           <h3 className='text-lg w-full  font-medium mb-2'>What's our captain name</h3>

        <div className='flex gap-4 mb-7'>
          <input type="text" placeholder='firstname' 
             className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base' value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
          <input type="text" placeholder='lastname'  
            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base' value={lastName} onChange={(e)=> setLastName(e.target.value)} />

        </div>
			<h3 className='text-xl font-medium mb-2'>What's our captain email 	</h3>
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

	  <p className='text-center'>Already have a account? <Link to='/captain0login' className='text-blue-600'>Login here</Link></p>
		</div>

    <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
		
	  </div>


    </div>
   
  )
}


export default Captainsignup
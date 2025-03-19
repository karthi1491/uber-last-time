import React from 'react';
import { Link } from 'react-router-dom';
  
  const UserLogin = () =>  {
	return (
	  <div className='p-7'>
		<div>
		<img className='w-16 mb-10' src="https://static.vecteezy.com/system/resources/previews/027/127/451/large_2x/uber-logo-uber-icon-transparent-free-png.png" alt="" />
		<form>
			<h3 className='text-xl font-medium mb-2'>What's your email 	</h3>
				<input 
				className='bg-gray-100 mb-7 rounded px-4 py-2 border w-full  placeholder: text-base'
				required type='email'
				 placeholder='email@example.com' 
				 />
             <h3 className='text-xl font-medium mb-2'>What's your password</h3>
			 <input
			 required 		className='bg-gray-100 mb-7 rounded px-4 py-2 border w-full text-lg placeholder: text-base' type='password' placeholder='password' />
			 <button  		className='bg-black text-white rounded px-4 py-2  w-full text-lg'>Login</button>
		
		</form>

		<p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
		</div>

		<div>
		<Link
          to='/captain-login'
          className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain</Link>

		</div>
		
	  </div>
	);
  }
  
  export default UserLogin;
  
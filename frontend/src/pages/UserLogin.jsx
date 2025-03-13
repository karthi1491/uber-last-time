import React from 'react';
  
  const UserLogin = () =>  {
	return (
	  <div className='p-7'>
		<form>
			<h3 className='text-xl mb-2'>What's your email 	</h3>
				<input 
				className='bg-gray-100 mb-7 rounded px-4 py-2 border w-full  placeholder: text-base'
				required type='email'
				 placeholder='email@example.com' 
				 />
             <h3>What's your password</h3>
			 <input
			 required 		className='bg-gray-100 mb-7 rounded px-4 py-2 border w-full text-lg placeholder: text-base' type='password' placeholder='password' />
			 <button  		className='bg-black text-white rounded px-4 py-2  w-full text-lg'>Login</button>
		
		</form>
		
	  </div>
	);
  }
  
  export default UserLogin;
  
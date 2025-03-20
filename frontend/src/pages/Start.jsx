import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className='h-screen pt-8 flex justify-between flex-col bg-cover bg-center bg-no-repeat bg-[url("https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      <img className='w-16 ml-9' src='https://tse2.mm.bing.net/th?id=OIP.5fy74desF0x3vRhdvgtjZwHaDF&pid=Api&P=0&h=180' alt='Uber' />
      <div className='bg-white pb-7 py-4 px-4 rounded-lg shadow-md'> 
        <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
        <Link to='/login' className=' flex justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
      </div>
    </div>
  );
}

export default Start;

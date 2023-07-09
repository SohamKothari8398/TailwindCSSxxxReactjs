import React from 'react';
import laptop from '../assets/laptop.jpg';

export default function Laptop() {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className=' mx-auto grid md:grid-cols-2'>
      <img className='w-[500px] mx-auto my-4' src={laptop} alt='/' />
      <div className='flex flex-col justify-center'>
        <p className='text-[#ef4444] font-bold'>LEARN FROM EXPERTS</p>
        <p>
        Tailwind UI is a collection of beautiful, fully responsive UI components, designed and developed by us, the creators of Tailwind CSS. It's got hundreds of ready-to-use examples to choose from, and is guaranteed to help you find the perfect starting point for what you want to build.
        </p>
        <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
      </div>
    </div>
  </div>
  )
}

import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-[#ef4444] flex-row py-6 m-0 px-0'>

      <div className='flex justify-between items-center'>

        <div className='text-2xl ml-20 place-items-start font-bold'>
          myWebsite
        </div>

        {
          toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-3xl lg:hidden block' />
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-3xl md:hidden block' />
        }

        <ul className='hidden md:flex ml-20 mr-2 text-white gap-10'>
          <li  className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Services</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
        <ul className='hidden lg:flex ml-20 mr-2 text-white gap-10'>
          <li><button className='bg-[black] w-20 rounded-md font-small my-6 mx-auto py-3 text-white'>SignIn</button></li>
          <li><button className='bg-[black] w-20 rounded-md font-small my-6 mx-auto py-3 text-white'>SignUp</button></li>
        </ul>

        {/* Responsive Menu*/}
        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-stone-900 top-20  ${ toggle ? 'left-[0]' : 'left-[-100%]' } `}>
          <li className='p-4 ml-10'>Home</li>
          <li className='p-4 ml-10'>Company</li>
          <li className='p-4 ml-10'>Services</li>
          <li className='p-4 ml-10'>About</li>
          <li className='p-4 ml-10'>Contact</li>
          <li className='p-4 ml-10'><button className='bg-[#ef4444] w-20 rounded-md font-small my-6 mx-auto py-3 text-white'>SignIn</button></li>
          <li className='p-4 ml-10'><button className='bg-[#ef4444] w-20 rounded-md font-small my-6 mx-auto py-3 text-white'>SignUp</button></li>
        </ul>

      </div>

    </div>
  )
};

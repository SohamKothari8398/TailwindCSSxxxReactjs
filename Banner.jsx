import React from 'react';
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#ef4444] w-full py-36'>
        <div className='mx-auto text-center font-bold'>
            <div className='text-xl md:2xl lg:4xl'>
                Learning TailwindCSS with reactjs.
            </div>
            <h2 className='text-white text-5xl  md:text-7xl  lg:text-8xl py-10'>Grow With Us.</h2>
            <div className='text-3xl md:5xl lg:7xl text-white'>
                Learn 
                <Typed
                    className='pl-3'
                    strings={['to build Websites without leaving HTML.',
                    'to build any design, directly in your markup.',
                    'an API for your design system.',
                    'to extend it, tweak it, change it.',
                    'to move even faster with Tailwind UI.']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                />
            </div>
            <button className='bg-[black] w-40 mt-20 rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
        </div>

    </div>
  )
}

import React from 'react'
import selfie from '../assets/selfie.jpg'

const Hero = () => {
  return (
    <div className='bg-gradient-to-r from-orange-300 to-red-400 text-white text-center py-16'>
        <img src={selfie} 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105' />
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 '>Jorge Lazaro</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-white'>
            i specialize in creating full stack web aps, apis, and organizing data
        </p>
        <div className='mt-8 space-x-4'>
            <button className='bg-black text-white hidden md:inline 
            transform transition-transform duration duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</button>
            <button className='bg-black text-white hidden md:inline 
            transform transition-transform duration duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>
    </div>
  )
}

export default Hero
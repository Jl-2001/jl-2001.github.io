import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                    <h3 className='text-2xl font-bold mb-2'>Full-stack Developer / IT / Data Analyst</h3>
                    <p className='text-gray-400'>Based in the MN, United States</p>
                </div>
                <div className='flex-1 w-full'>
                    <form className='flex items-center justify-center'>
                        <input type="email" placeholder='Enter Email Here' className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                            focus:outline-none focus:border-orange-300"/>
                        <button type='submit' 
                        className="bg-gradient-to-r from-orange-300 to-red-400 text-white px-4 
                        py-2 rounded-r-lg"
                        >Subsribe</button>
                    </form>
                </div>
            </div>
            <div 
            className='border-t border-gray-600 pt-4 flex flex-col md:flex-row
            justify-between items-center'>
                <p className='text-gray-400'> 
                    &copy; {new Date().getFullYear()}
                </p>
                <div className='flex space-x-4 my-4 md:my-0'>
                    <a href="" className='text-gray-400 hover:text-white'>
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/jorge-lazaro-13607b1ba/" className='text-gray-400 hover:text-white'>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Jl-2001?tab=repositories" className='text-gray-400 hover:text-white'>
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
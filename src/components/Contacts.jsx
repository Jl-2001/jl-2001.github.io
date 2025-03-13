import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <div className='flex-1'>
                    <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-400 mb-4'>Lets Connect!</h3>
                    <p>Feel free to contact me during the weekday from 8am to 5pm Central Time</p>
                    <div className='mb-4 '>
                        <FaEnvelope className='inline-block text-orange-300 mr-2'></FaEnvelope>
                        <a href="mailto:j.lazaro0101@gmail.com" className='hover:underline'>j.lazaro0101@gmail.com</a> 
                    </div>
                    <div className='mb-4 '>
                        <FaPhone className='inline-block text-orange-300 mr-2'></FaPhone>
                        <span>+ 1 507-330-3551</span>
                    </div>
                    <div className='mb-4 '>
                        <FaMapMarkedAlt className='inline-block text-orange-300 mr-2'></FaMapMarkedAlt>
                        <span>Minnesota / Remote</span>
                    </div>
                </div>
                <div className='flex-1 w-full'>
                    <form className='space-y-4'>
                        <div>
                            <label htmlFor="name" className='block mb-2'>Your name</label>
                            <input type="text" className='w-full pt-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-300' placeholder='Enter Your Name'/>
                        </div>
                        <div>
                            <label htmlFor="email" className='block mb-2'>Email</label>
                            <input type="text" className='w-full pt-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-300' placeholder='Enter Your Email'/>
                        </div>
                        <div>
                            <label htmlFor="message" className='block mb-2'>Message</label>
                            <textarea type="text" className='w-full pt-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-300' rows="5" placeholder='Write your message here.'/>
                        </div>
                        <button className='bg-gradient-to-r from-orange-300 to-red-400 text-white hidden md:inline 
                        transform transition-transform duration duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts
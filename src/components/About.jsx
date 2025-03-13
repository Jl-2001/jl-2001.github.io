import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About me</h2>
                <div className='flex flex-col md:flex-row itmes-center md:space-x-12'>
                    <img src={about} alt="" className="w-72 h-80 rounded-2xl object-cover mb-8 md:mb-0 transform 
                    transition-transform duration-300 hover:scale-105"/>
                    <div className='flex-1'>
                        <p className='text-lg mb-8'>  I am a passionate full-stack developer with a focus on building
                        modern and responsive web applications. With a strong foundation
                        in both frontend and backend technologies, I strive to create
                        seamless and efficient user experiences.</p>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-gradient-to-r from-orange-300 to-red-400 h-2.5 rounded-full 
                                        transform transition-transform duration-300 hover:scale-105 w-10/12"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">
                                React JS
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-orange-300 to-red-400 h-2.5 rounded-full
                                    transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                            <label htmlFor="htmlandcss" className="w-2/12">
                                Node JS
                                </label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div className='bg-gradient-to-r from-orange-300 to-red-400 h-2.5 rounded-full
                                    transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
        </div>
    </div>
  )
}

export default About
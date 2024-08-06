import React from 'react';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Portfolio = () => {
  return (
    <div name="Portfolio" className='font-Raleway bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0 duration-200 hover:scale-105' >
                <div className='shadow-lg shadow-gray-600 rounded-lg'>
                    <img className='rounded-md ' src='https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/17/full/1689574606-2001.png' alt="project" />
                    <h2 className='py-4 font-bold text-2xl text-center'>Swiggy Clone</h2>
                    <p className='text-center'>Developed a Food Ordering Application with Real-time Swiggy live API intergration</p>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <FaReact size={30} className='text-cyan-700' />
                            <RiTailwindCssFill size={30} className='text-blue-300' />

                        </div>
                        <div className='flex '>
                            <button className=' px-6 py-3 m-4 duration-200 hover:scale-105'>Live</button>
                            <button className=' px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
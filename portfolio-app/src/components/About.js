import React from 'react';
import renuabout from "../assets/renuabout.jpeg";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div name="about" className='font-Raleway w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About </p>
            </div>
            <div className='flex flex-wrap mt-10'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:-100}}
                        transition={{duration: 0.5}}
                        className='flex items-center justify-center'>
                        <img className='rounded-2xl w-4/5 duration-200 hover:scale-105' src={renuabout} alt="About profile" />
                    </motion.div>
                </div>
                <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration: 0.5}} 
                    className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </motion.div>
                
            </div>
           
            
        </div>

    </div>
  )
}

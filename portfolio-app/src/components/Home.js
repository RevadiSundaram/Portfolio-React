import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import heroImage from "../assets/renu.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})


const Home = () => {
  return (
    <div name="home" className='font-Raleway h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <motion.h2
                    variants={container(0)}
                    initial="hidden"
                    animate="visible" 
                    className='text-4xl sm:text-7xl font-bold text-white'>I am a Front End Developer.</motion.h2>
                <motion.p 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible" 
                    className='text-gray-500 py-4 max-w-md'>I have around 3.5+ years of experience building software and design.
                    Currently, I love to work on web application using technologies like React, Tailwind, etc </motion.p>
           
                <motion.button
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Portfolio &nbsp; 
                    <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardDoubleArrowRight size={25} /></span>
                </motion.button>
            </div>
            <div>
                <motion.img
                    initial={{x:100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration:1, delay: 1.2}}
                    src={heroImage} alt="my profile" className='cursor-pointer duration-200 hover:scale-105 rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
            
        </div>
        
    </div>
  )
}

export default Home;
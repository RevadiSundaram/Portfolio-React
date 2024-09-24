import React from 'react';
import renuabout from "../assets/renuabout.jpeg";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div name="about" className='font-Raleway w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white py-10'>
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
                        <img className='rounded-2xl w-1/2 duration-200 hover:scale-105 md:w-1/2 lg:w-4/5' src={renuabout} alt="About profile" />
                    </motion.div>
                </div>
                <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration: 0.5}} 
                    className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6 text-md'>
                        I am a passionate Frontend Developer with 2+ years of experience in creating responsive and engaging web applications. Skilled in React, Redux, and TypeScript, I transform complex designs into intuitive user interfaces. My expertise in HTML, CSS, and JavaScript allows me to build adaptive layouts that perform seamlessly across devices and browsers.
                        <br></br>
                        <br></br>

I thrive on collaboration, working closely with designers and cross-functional teams to bring Figma mockups to life while ensuring exceptional user experiences. My focus on performance optimization, including techniques like code-splitting and lazy loading, has led to significant improvements in load times and responsiveness.
<br></br>
<br></br>
With a strong commitment to quality, I pay meticulous attention to detail and prioritize maintainable, scalable code. I enjoy tackling challenges in agile environments and continually seek to expand my knowledge of emerging technologies and best practices.
<br></br>
<br></br>
I value effective communication and believe that great results stem from teamwork and shared vision. I am excited to connect with fellow professionals and explore opportunities to contribute my skills to innovative projects.
                            </p>
                    </div>
                </motion.div>
                
            </div>
           
            
        </div>

    </div>
  )
}

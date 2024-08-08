import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJest } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className='font-Raleway w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Technologies </p>
            </div>
            <div className='grid sm:grid-cols-3 md:grid-cols-4 self-center items-center justify-center gap-10 mt-20'>
                <div className='rounded-2xl border-4 border-gray-500 p-4'>
                    <RiReactjsLine className='text-7xl text-[#61DBFB]' />
                </div>
                <div className='rounded-2xl border-4 border-gray-500 p-4'>
                    <SiRedux className='text-7xl text-[#764abc]' />
                </div>
                <div className='rounded-2xl border-4 border-gray-500 p-4'>
                    <IoLogoJavascript className='text-7xl text-[#f7df1e]' />
                </div>
                <div className='rounded-2xl border-4 border-gray-500 p-4'>
                    <SiJest className='text-7xl text-[#C63D14]' />
                </div>
                <div className='rounded-2xl border-4 border-gray-500 p-4'>
                    <FaGithub className='text-7xl text-[#fafbfc]' />
                </div>
                <div className='rounded-2xl border-4 border-gray-500 p-4'>
                    <RiTailwindCssFill className='text-7xl text-[#06b6d4]' />
                </div>
                <div className='rounded-2xl border-4 border-gray-500 p-4'>
                    <FaCss3Alt className='text-7xl text-[#264de4]' />
                </div>
                <div className='rounded-2xl border-4 border-gray-500 p-4'>
                    <FaHtml5 className='text-7xl text-[#e34c26]' />
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default Technologies
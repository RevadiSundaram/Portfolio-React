import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLaptopCode } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const SocialLinks = () => {

    const links = [
    {
        id: 1,
        child: (
            <>
                LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href: "https://www.linkedin.com/in/revadisundaram07/",
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <>
                GitHub <FaGithub size={30} />
            </>
        ),
        href: "https://github.com/RevadiSundaram",
    },
    {
        id: 3,
        child: (
            <>
                iCodeThis <FaLaptopCode size={30} />
            </>
        ),
        href: "https://icodethis.com/Renu",
        
    },
    {
        id: 4,
        child: (
            <>
                Twitter <FaTwitter size={30} />
            </>
        ),
        href: "https://x.com/SundaramRevadi",
        
    },
    {
        id: 4,
        child: (
            <>
                Mail <HiOutlineMail size={30} />
            </>
        ),
        href: "mailto:revadisundaram1@gmail.com",
       
    },
    
    {
        id: 5,
        child: (
            <>
                Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: "https://drive.google.com/file/d/1kJXQlxV8Mu_QD_uqeOfNXGJ8QOPUaEXC/view?usp=sharing",
        style: 'rounded-br-md',
    },
    
    ]

  return (
    <div className='font-Raleway hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(link => {
               return <li key={link.id} className={'cursor-pointer flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 '+link.style}>
                    <a href={link.href} className='flex justify-between items-center w-full text-white'
                    
                        target='_blank'
                        rel="noreferrer">
                        {link.child} 
                    </a>
                </li>
            })}
            {/*  */}
        </ul>
    </div>
  )
}

export default SocialLinks
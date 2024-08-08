import React from 'react';
// import reactIcon from "../assets/react.png";
// import tailwindIcon from "../assets/tailwind.png";
import { FaLocationArrow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {

    const data = [
        {
            id: 1,
            heading: "Swiggy Clone App",
            description: "Developed a Food Ordering Application with Real-time Swiggy live API intergration",
            icons: ["reactIcon", "tailwindIcon"],
            gitHubLink: "https://github.com/RevadiSundaram/Namaste-React/tree/main/Swiggy-App",
            liveLink: ""
        },
        {
            id: 2,
            heading: "Swiggy Clone App",
            description: "Developed a Food Ordering Application with Real-time Swiggy live API intergration",
            icons: ["reactIcon", "tailwindIcon"],
            gitHubLink: "https://github.com/RevadiSundaram/Namaste-React/tree/main/Swiggy-App",
            liveLink: ""
        },
        {
            id: 3,
            heading: "Swiggy Clone App",
            description: "Developed a Food Ordering Application with Real-time Swiggy live API intergration",
            icons: ["reactIcon", "tailwindIcon"],
            gitHubLink: "https://github.com/RevadiSundaram/Namaste-React/tree/main/Swiggy-App",
            liveLink: ""
        },
        {
            id: 4,
            heading: "Swiggy Clone App",
            description: "Developed a Food Ordering Application with Real-time Swiggy live API intergration",
            icons: ["reactIcon", "tailwindIcon"],
            gitHubLink: "https://github.com/RevadiSundaram/Namaste-React/tree/main/Swiggy-App",
            liveLink: ""
        },
        {
            id: 5,
            heading: "Swiggy Clone App",
            description: "Developed a Food Ordering Application with Real-time Swiggy live API intergration",
            icons: ["reactIcon", "tailwindIcon"],
            gitHubLink: "https://github.com/RevadiSundaram/Namaste-React/tree/main/Swiggy-App",
            liveLink: ""
        },
    ]

  return (
    <div name="Portfolio" className=' cursor-pointer font-Raleway bg-gradient-to-b from-black via-black to-gray-800 w-full text-white py-10'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-16 sm:px-0 ' >
                    {data.map(item => {
                        return  <div key={item.id} className='shadow-lg shadow-gray-600 rounded-lg duration-200 hover:scale-105'>
                        <img className='rounded-md ' src='https://bsmedia.business-standard.com/_media/bs/img/article/2023-07/17/full/1689574606-2001.png' alt="project" />
                        <h2 className='py-4 font-bold text-2xl text-center'>{item.heading}</h2>
                        <p className='text-center '>{item.description}</p>
                        <div className='flex items-center justify-between border-t-2 border-gray-700 mt-5 pt-3 pb-3'>
                            <div className='flex gap-2 ml-4'>
                                {/* <img className='p-1 w-[35px] h-[35px]' src={item.icons[0]} alt="React Icon" />
                                <img className='p-1 w-[35px] h-[35px]' src={item.icons[1]} alt="React Icon" /> */}
                            </div>
                            <div className='flex gap-2 mr-4'>
                                <button className='p-1 duration-200 hover:scale-105'>
                                  <a className='flex' target='_blank' rel="noreferrer" href={item.gitHubLink}> Live &nbsp; <FaLocationArrow size={20} /></a>  
                                </button>
                                <button className='p-1 flex duration-200 hover:scale-105'>
                                <a className='flex' target='_blank' rel="noreferrer" href={item.gitHubLink}>Code &nbsp; <FaGithub size={20} /> </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    })}
            </div>
        </div>
    </div>
  )
}

export default Portfolio;
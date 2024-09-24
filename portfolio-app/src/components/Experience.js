import React from 'react'

const Experience = () => {
    const expData = [
        {
            year: "Sep 2023 - Present",
            role: "Front End Developer",
            company: "Societe Generale",
            description: "Engineered intuitive trade deal management features and file uploads, supporting 1,200+ users. Developed a responsive SPA with stock details and corporate events, optimizing navigation and user experience by 15%. Used React, HTML, and Tailwind to create adaptive, cross-browser pages from Figma designs, improving performance with code-splitting and reducing load times by 20%. Engineered seamless integrations between front-end interfaces and back-end databases, leading to a 30% reduction in user-reported bugs and enhancing overall functionality.",
            technologies: ["JavaScript", "React", "HTML", "CSS"]
        },
        {
            year: "Aug 2022 - Sep 2023",
            role: "Application Develoment Analyst",
            company: "Accenture",
            description: "Converted 50+ Figma designs into responsive HTML, CSS, and React code, delivering 100% pixel-perfect precision, leading to a 20% boost in usability and optimized UI/UX for intuitive, user-friendly interfaces. Streamlined navigation and enhanced accessibility, reducing user-reported issues by 50% and actively contributing to the full Product Development Lifecycle.",
            technologies: ["JavaScript", "React", "HTML", "CSS"]
        },
        {
            year: "Oct 2020 - Aug 2022",
            role: "Application Development Associate",
            company: "Accenture",
            description: "Migrated applications, including upgrading Oracle Forms from 10G to 12C, applying best practices such as pair programming and test-driven development to ensure high-quality outcomes, and debugging/ troubleshooting technical issues efficiently",
            technologies: ["PL/SQL", "SQL", "Oracle Forms"]
        },

    ]
  return (
    <div name="experience" className='font-Raleway w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white py-10'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience </p>
            </div>
            <div className='mt-10'>
                {expData.map((exp, index) =>(
                     
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center duration-200 hover:scale-105 cursor-pointer gap-5'>
                            <div className='w-full lg:w-1/4'>
                                <p className='mb-2 text-gray-500'>{exp.year}</p>
                            </div>
                            <div className='w-full max-w-xl lg:w-3/4'>
                                <h6 className='mb-2 text-xl font-semibold'>
                                    {exp.role} -  {exp.company}
                                </h6>
                                <p className='mb-3 text-gray-500 gap-2'>{exp.description}</p>
                                {exp.technologies.map((tech,index) => (
                                    <span key={index} className='mr-2 mt-4 rounded bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 ' >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Experience
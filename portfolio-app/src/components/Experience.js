import React from 'react'

const Experience = () => {
    const expData = [
        {
            year: "Sep 2023 - Present",
            role: "Front End Developer",
            company: "Societe Generale",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            technologies: ["JavaScript", "React", "HTML", "CSS"]
        },
        {
            year: "Apr 2023 - Sep 2023",
            role: "Front End Developer",
            company: "Accenture",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            technologies: ["JavaScript", "React", "HTML", "CSS"]
        },
        {
            year: "Oct 2020 - Mar 2023",
            role: "Application Development Associate",
            company: "Accenture",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
            technologies: ["PL/SQL", "SQL", "Oracle Forms"]
        },

    ]
  return (
    <div className='font-Raleway w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white py-10'>
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
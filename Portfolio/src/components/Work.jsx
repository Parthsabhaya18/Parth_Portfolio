import React from 'react'
import work1 from '../assets/work1.png'
import work2 from '../assets/work2.png'
import work3 from '../assets/work3.png'
export default function Work() {

    const caseStudies=[
        {
            id:1,
            title:"Collage Managment System",
            description:"Designed and developed an online platform to manage academi operations, including admissions, enrollment, student attendance, and exam scheduling.I-MCQ refers to service as conduct online examination or test. Online examination system will use in schools, colleges, universities, institutes for student's examination .",
            workImage: work1,
        },
        {
            id:2,
            title:"Tomato Food delivery",
            description:"I developed a food ordering web application , using ReactJS for the frontend and Bootstrap for responsive design. The app integrates fetch the data such as restaurant names, menus, images, and prices",
            workImage: work2,
        },
        {
            id:3,
            title:"Amazon Clone",
            description:"Created a static front-end clone of Amazon’s homepage, featuring a responsive layout with product categories such as electronics, furniture, and fashion items. Creating an Amazon clone using HTML and CSS can be a educational project to enhance My web development skills",
            workImage: work3,
        }
    ]

  return (
    <div id='work' className='container mx-auto px-4 py-12'>
        <h3 className='text-lg text-yellow-500 font-semibold text-center uppercase mt-8 mb-2'>Project</h3>
        <h2 className='text-4xl font-bold text-center mb-12'>My Case Studies</h2>
        {caseStudies.map((study,index)=>(
            <div key={study.id} className={`flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 ${
            index % 2 ===0 ? "lg:flex-row-reverse" : "" }`}>
                <div className='w-full lg:w-1/3 p-4'>
                    <img src={study.workImage} alt="" className='w-full h-56 object-right-bottom rounded-lg shadow-lg' />
                </div>
                <div className='w-full lg:w-1/2 p-4'>
                    <div className='flex items-center mb-4'>
                        <span className='text-3xl font-bold text-yellow-500 mr-2'>{`0${index + 1}`}</span>
                        <h3 className='text-2xl font-semibold'>{study.title}</h3>
                    </div>
                    <p className='text-gray-600 mb-4'>{study.description}</p>
                    <button className='border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded full hover:bg-yellow-500 hover:text-white'>Details</button>
                </div>
            </div>
        ))}
    </div>
  )
}

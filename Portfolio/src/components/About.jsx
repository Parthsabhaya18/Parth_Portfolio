import React from 'react'
import aboutImg from '../assets/aboutImg.jpg'
import CV from '../assets/CV.pdf'
import {FaRegHandshake,FaRegFolderOpen} from 'react-icons/fa'
import { MdSupportAgent } from "react-icons/md";
import {BsDownload} from 'react-icons/bs'

export default function About() {
  return (
    <div id='about' className='block py-16 bg-gray-50 '>
    <div className='container mx-auto px-6 lg:px-14 flex flex-col md:flex-row items-center justify-between'>
        <div className='w-52 md:w-72 mb-8 md:mb-0 ml-0 md:ml-30'>
            <img className='w-full h-72 object-cover rounded-e-xl' src={aboutImg} alt="About Me" />
        </div>
{/* right section  */}
        <div className='w-full md:w-1/2 md:pl-12'>
            <h2 className='text-4xl md:text-6xl font-bold text-gray-8000 mb-6'>About me</h2>
            <p className='text-gray-600 mb-6'>As a junior web developer, I am enthusiastic about utilizing my technical skills and passion for creating dynamic, user-friendly web applications. With a strong foundation in ReactJS, JavaScript and CSS. I am committed to developing responsive and efficient solutions. My skill set extends to backend technologies like NodeJS and database management with MongoDB and SQL, allowing me to contribute effectively to full-stack development. I am eager to continuously learn and adapt to the latest web development frameworks and technologies, ensuring I stay aligned with industry standards and innovations.</p>

            <div className='flex flex-wrap mb-6'>
                <div className='flex items-center w-1/2 mb-4'>
                    <FaRegHandshake className='text-yellow-500 text-5xl mr-4'/>
                    <div>
                        <h4 className='text-gray-700 font-semibold'>Fresher</h4>
                        <p className='text-gray-700'>Experience</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap mb-6'>
                <div className='flex items-center w-1/2 mb-4'>
                    <MdSupportAgent className='text-yellow-500 text-5xl mr-4'/>
                    <div>
                        <h4 className='text-gray-700 font-semibold'>24/7</h4>
                        <p className='text-gray-700'>Customer Support</p>
                    </div>
                </div>
            </div>
                <div className='flex items-center'>
                    <button className='bg-yellow-500 px-8 py-3 rounded-lg mr-4 hover:bg-yellow-400'>Hire Me</button>
                    <a className='flex items-center text-yellow-500 font-semibold' href={CV} download="CV.pdf">Download CV <BsDownload className='ml-2 text-lg'/></a>
                </div>
        </div>
    </div>
    </div>
  )
}

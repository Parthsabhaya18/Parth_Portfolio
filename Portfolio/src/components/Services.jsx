import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";



  

export default function Services() {

    const frontend = [
        {
          id: 1,
          title: "HTML",
          borderColor: "1px solid rgb(255, 165, 0)",
        },
        {
          id: 2,
          title: "CSS",
          borderColor: "1px solid rgb(21 , 114, 82)",
        },
        {
          id: 3,
          title: "JavaScript",
          borderColor: "1px solid rgb(255, 255, 0)",
        },
        {
          id: 4,
          title: "React JS",
          borderColor: "1px solid rgb(135, 206, 235)",
        },
        {
          id: 5,
          title: "Tailwind CSS",
          borderColor: "1px solid rgb(56, 178, 172)",
        },
        
      ];
    
      const backend = [
        // {
        //   id: 1,
        //   title: "Node JS",
        //   borderColor: "1px solid rgb(51, 153, 51)",
        // },
        // {
        //   id: 2,
        //   title: "Express",
        //   borderColor: "1px solid rgb(51, 51, 51)",
        // },
        {
          id: 3,
          title: "SQL",
          borderColor: "1px solid rgb(77, 179, 61)",
        },
        {
          id: 4,
          title: "MongoDB",
          borderColor: "1px solid rgb(255, 255, 0)",
        },
      ];
    
      const other = [
        {
          id: 1,
          title: "Github",
          borderColor: "1px solid rgb(255, 255, 255)",
        },
        {
          id: 2,
          title: "Visual Studio Code",
          borderColor: "1px solid rgb(21, 114, 182)",
        },
      ];
    
  return (
    <div id='services' className='block bg-white py-16 px-8'>
        <div className='container mx-auto mt-5 px-6 lg:px-24 text-center'>
            <div className='mb-12'>
            <h3 className='text-yellow-500 font-semibold text-lg uppercase mb-2'>Expertises</h3>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>These are the technologies I've worked with</h2>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className="bg-[#58566d] rounded mt-10  py-5 px-5">
            <div className="text-xl text-center text-gray-300  py-3 mb-5 font-bold">
              Front-end Development
            </div>
              <div className="flex flex-wrap gap-4">
                {frontend.map(({ id, title, borderColor }) => (
                  <div  key={id} 
                    className="bg-[#14131a] gap-2 cursor-pointer  rounded-[10px] p-2 flex items-center flex-wrap"
                    style={{border:`${borderColor}`,}}
                  >
                    <div className="px-2 text-gray-300">{title}</div>
                  </div>
                ))}
              </div>
          </div>

          <div className="bg-[#58566d] rounded mt-10 py-5 px-5">
            <div className="text-center text-xl text-gray-300  py-3 mb-5 font-bold">
              Back-end Development
            </div>
              <div className="flex flex-wrap gap-4">
                {backend.map(({ id, title, borderColor }) => (
                  <div  key={id} 
                    className="bg-[#14131a] gap-2 cursor-pointer  rounded-[10px] p-2 flex items-center flex-wrap"
                    style={{border:`${borderColor}`,}}
                  >
                    <div className="px-2 text-gray-300">{title}</div>
                  </div>
                ))}
              </div>
          </div>
          <div className="bg-[#58566d] rounded mt-10 py-5 px-5">
            <div className="text-xl text-center text-gray-300  py-3 mb-5 font-bold">
              Other
            </div>
              <div className="flex flex-wrap gap-4">
                {other.map(({ id, title, borderColor }) => (
                  <div  key={id} 
                    className="bg-[#14131a] gap-2 cursor-pointer  rounded-[10px] p-2 flex items-center flex-wrap"
                    style={{border:`${borderColor}`,}}
                  >
                    <div className="px-4  text-gray-300">{title}</div>
                  </div>
                ))}
              </div>
          </div>
        </div>
        <div className='mt-8 text-right'>
            <a href="" className='flex items-center justify-end text-yellow-500 font-semibold hover:text-yellow-400'>
                explore all services <FaArrowRight className='ml-2'/>
            </a>
        </div>
    </div>
  )
}


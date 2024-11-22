import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import CV from '../assets/CV.pdf'
import {Link} from 'react-scroll';
import logo from '../assets/logo.png'

export default function Navbar() {

    const [menu,setmenu]=useState(false);

    const items=[
        {id:1,text:"Home",to:"home"},
        {id:2,text:"About",to:"about"},
        {id:3,text:"Skill",to:"services"},
        {id:4,text:"Project",to:"work"},
        {id:5,text:"Contact",to:"contact"}
    ];

  return (
    <div className='bg-yellow-50 text-black w-svw fixed top-0 z-10'>
        <div className='container mx-auto p-4 hidden md:flex justify-between items-center'>
            <div>
                <img src={logo} alt="" className='w-20 h-12' />
            </div>
            <div className='hidden md:flex space-x-6 items-center list-none text-lg'>
                {items.map(({id,text,to})=>(
                    <li key={id} className='hover:text-yellow-500 duration-200 cursor-pointer'>
                    <Link to={to} smooth={true} duration={500}>
                    {text}</Link>
                    </li>
                ))}
            </div>
            <a href={CV} download="CV.pdf" className='text-lg bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400'>Download CV</a>
        </div>


        <div className='flex justify-around items-center md:hidden p-2 shadow-sm'>
            <div>
                <img src={logo} alt="" className='w-20 h-12' />
            </div>
        <div className='flex justify-center items-center '>
            <div onClick={()=>setmenu(!menu)}>
                {menu?(<IoClose size={30} className="text-black"/>):(<MdMenu size={30} className="text-black"/>)}
            </div>
        </div>
        </div>
        
            {menu &&(
                <div className='md:hidden bg-yellow-50 py-6 justify-center items-center gap-2 text-lg text-black flex flex-col list-none shadow-sm'>
                    {items.map(({id,text,to})=>(
                    <li key={id} className='hover:text-yellow-500 duration-200 cursor-pointer border-b w-11/12'>
                        <Link to={to} smooth={true} duration={500}>
                        {text}</Link>
                        </li>
                ))}
                   <a href={CV} download="CV.pdf" className='text-lg bg-yellow-500 text-black px-4 py-2 mt-3 rounded hover:bg-yellow-400'>Download CV</a>
        </div>
            )}
    
    </div>
  );
};  

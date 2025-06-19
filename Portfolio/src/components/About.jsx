import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/aboutImg.jpg';
import CV from '../assets/CV.pdf';
import { FaRegHandshake, FaRegFolderOpen } from 'react-icons/fa';
import { MdSupportAgent } from "react-icons/md";
import { BsDownload } from 'react-icons/bs';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const image = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.3
      }
    }
  };

  const stats = [
    {
      icon: <FaRegHandshake className='text-yellow-400 text-4xl' />,
      title: "Fresher",
      subtitle: "Experience"
    },
    {
      icon: <MdSupportAgent className='text-yellow-400 text-4xl' />,
      title: "24/7",
      subtitle: "Support"
    },
    {
      icon: <FaRegFolderOpen className='text-yellow-400 text-4xl' />,
      title: "6+",
      subtitle: "Projects"
    }
  ];

  return (
    <section id='about' className='py-20 bg-gray-900 overflow-hidden'>
      <div className='container mx-auto px-6 lg:px-14'>
        <motion.div 
          className='flex flex-col lg:flex-row items-center justify-between gap-12'
          initial="hidden"
          animate="visible"
          variants={container}
        >
          {/* Image Section */}
          <motion.div 
            className='relative lg:w-2/5'
            variants={image}
          >
            <div className='relative z-10'>
              <div className='absolute -inset-4 bg-gradient-to-tr from-yellow-500 to-transparent rounded-xl opacity-20 blur-xl'></div>
              <img 
                className='w-full h-auto max-w-md rounded-xl border-2 border-gray-700 shadow-2xl'
                src={aboutImg} 
                alt="About Me" 
              />
            </div>
            <div className='absolute -bottom-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-yellow-400 rounded-tl-xl opacity-60'></div>
            <div className='absolute -top-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-yellow-400 rounded-br-xl opacity-60'></div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className='lg:w-3/5'
            variants={container}
          >
            <motion.h2 
              className='text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent'
              variants={item}
            >
              About Me
            </motion.h2>
            
        <motion.p 
  className='text-gray-400 mb-10 text-lg leading-relaxed'
  variants={item}
>
  I'm a passionate web developer focused on crafting modern, responsive, and user-friendly web applications. My core skills include <span className='text-yellow-400'>HTML</span>, <span className='text-yellow-400'>CSS</span>, <span className='text-yellow-400'>JavaScript</span>, <span className='text-yellow-400'>ReactJS</span>, <span className='text-yellow-400'>Tailwind CSS</span>, and <span className='text-yellow-400'>Material UI</span>. I also work confidently with <span className='text-yellow-400'>Firebase</span> for real-time features and backend integration. Additionally, I have a basic understanding of backend technologies like <span className='text-yellow-400'>Node.js</span>, <span className='text-yellow-400'>Express</span>, and <span className='text-yellow-400'>MongoDB</span>. I'm committed to continuous learning and writing clean, efficient code.
</motion.p>


            {/* Stats */}
            <motion.div 
              className='grid grid-cols-2 md:grid-cols-3 gap-6 mb-12'
              variants={item}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className='bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300'
                  whileHover={{ y: -5 }}
                  variants={item}
                >
                  <div className='flex items-center gap-4'>
                    {stat.icon}
                    <div>
                      <h4 className='text-white font-bold text-xl'>{stat.title}</h4>
                      <p className='text-gray-400'>{stat.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className='flex flex-wrap gap-4'
              variants={item}
            >
              <motion.a
                href="#contact"
                whileHover={{ 
                  y: -3,
                  boxShadow: "0 10px 20px rgba(234, 179, 8, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-lg transition-all duration-300'
              >
                Hire Me
              </motion.a>
              
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className='px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2'
                href={CV} 
                download="Parth_Sabhaya_CV.pdf"
              >
                Download CV <BsDownload />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
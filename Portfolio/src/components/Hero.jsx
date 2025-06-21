import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { motion } from 'framer-motion';
import avatarImg from '../assets/hero.png';
import CV from '../assets/CV.pdf';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const image = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4
      }
    }
  };

  return (
    <section 
      id='home'
      className=" relative overflow-hidden bg-gray-900 text-white flex items-center px-6  py-16 sm:px-12 lg:px-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-500 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500 opacity-5 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col-reverse  lg:flex-row items-center justify-between gap-20 py-10 md:py-16">
        {/* Content */}
        <motion.div 
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={container}
        >
        
          
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500"
            variants={item}
          >
            Parth Sabhaya
          </motion.h1>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-300"
            variants={item}
          >
            I build digital experiences.
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
            variants={item}
          >
            I'm a frontend developer specializing in creating exceptional web applications with React.js. Currently focused on building accessible, human-centered products with modern technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 mb-12"
            variants={item}
          >
            <motion.a
              whileHover={{ 
                y: -3,
                boxShadow: "0 10px 20px rgba(234, 179, 8, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-semibold rounded-md transition-all duration-300 flex items-center gap-2"
              href="#contact"
            >
              Get In Touch
            </motion.a>
            
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-md hover:bg-yellow-400 hover:bg-opacity-10 transition-all duration-300 flex items-center gap-2"
              href={CV} 
              download="Parth_Sabhaya_Resume.pdf"
            >
              Download CV <BsDownload />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4"
            variants={item}
          >
            <motion.a 
              whileHover={{ y: -3, color: '#f59e0b' }}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-xl"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </motion.a>
            <motion.a 
              whileHover={{ y: -3, color: '#f59e0b' }}
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-xl"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </motion.a>
            
          </motion.div>
        </motion.div>

        {/* Avatar Image */}
      <motion.div 
  className="flex justify-center lg:justify-end relative"
  initial="hidden"
  animate="visible"
  variants={image}
>
  <div className="relative">
    {/* Glow Background */}
    <div className="absolute -inset-3 bg-gradient-to-tr from-yellow-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>

    {/* Image Container */}
    <div className="relative overflow-hidden rounded-2xl border-2 border-gray-700 p-1">
      <motion.img 
        className="w-64 md:w-72 lg:w-80 h-96 object-cover" // reduced width
        src={avatarImg} 
        alt="Parth Sabhaya"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </div>

    {/* Decorative Corners */}
    <div className="absolute -bottom-5 -left-5 w-20 h-20 border-t-4 border-l-4 border-yellow-400 rounded-tl-2xl opacity-60"></div>
    <div className="absolute -top-5 -right-5 w-20 h-20 border-b-4 border-r-4 border-yellow-400 rounded-br-2xl opacity-60"></div>
  </div>
</motion.div>

      </div>

      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-yellow-400 rounded-full mt-2"
            animate={{
              y: [0, 4, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
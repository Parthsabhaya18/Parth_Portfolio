import React, { useRef, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu } from 'react-icons/fi';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiMysql,
  SiGithub, SiVisualstudiocode, SiPostman, SiFigma
} from 'react-icons/si';


const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const frontend = [
    { id: 1, title: "HTML", color: "#E44D26", icon: "html" },
    { id: 2, title: "CSS", color: "#264DE4", icon: "css" },
    { id: 3, title: "JavaScript", color: "#F0DB4F", icon: "javascript" },
    { id: 4, title: "React JS", color: "#61DBFB", icon: "react" },
    { id: 5, title: "Tailwind CSS", color: "#38B2AC", icon: "tailwind" },
  ];

  const backend = [
    { id: 1, title: "Node JS", color: "#68A063", icon: "node" },
    { id: 2, title: "Express", color: "#FFFFFF", icon: "express" },
    { id: 3, title: "MongoDB", color: "#4DB33D", icon: "mongodb" },
    { id: 4, title: "Firebase", color: "#FFCB2B", icon: "firebase" },
    { id: 5, title: "SQL", color: "#00758F", icon: "sql" },
  ];

  const tools = [
    { id: 1, title: "GitHub", color: "#FFFFFF", icon: "github" },
    { id: 2, title: "VS Code", color: "#007ACC", icon: "vscode" },
    { id: 4, title: "Figma", color: "#F24E1E", icon: "figma" },
  ];

const iconComponents = {
  html: <SiHtml5 size={24} color="#E44D26" />,
  css: <SiCss3 size={24} color="#264DE4" />,
  javascript: <SiJavascript size={24} color="#F0DB4F" />,
  react: <SiReact size={24} color="#61DBFB" />,
  tailwind: <SiTailwindcss size={24} color="#38B2AC" />,
  node: <SiNodedotjs size={24} color="#68A063" />,
  express: <SiExpress size={24} color="#FFFFFF" />,
  mongodb: <SiMongodb size={24} color="#4DB33D" />,
  firebase: <SiFirebase size={24} color="#FFCB2B" />,
  sql: <SiMysql size={24} color="#00758F" />,
  github: <SiGithub size={24} color="#FFFFFF" />,
  vscode: <SiVisualstudiocode size={24} color="#007ACC" />,
  postman: <SiPostman size={24} color="#FF6C37" />,
  figma: <SiFigma size={24} color="#F24E1E" />
};


const SkillCard = ({ category, skills, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 shadow-xl overflow-hidden w-full"
    >
      {/* Decorative Background Circle */}
      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#ffffff10] rounded-full transform translate-x-10 -translate-y-10 md:translate-x-16 md:-translate-y-16"></div>

      <div className="relative z-10">
        {/* Header with Icon & Category */}
        <div className="flex items-center mb-6">
          <div className="p-2 md:p-3 rounded-full bg-[#ffffff10] mr-4">
            {icon}
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white">{category}</h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 min-[375px]:grid-cols-2 gap-3">

  {skills.map((skill) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      key={skill.id}
      className="flex items-center p-3 rounded-lg bg-[#ffffff05] border border-[#ffffff10] backdrop-blur-sm transition-all"
      style={{ borderLeft: `3px solid ${skill.color}` }}
    >
      <div className="mr-3">
        {iconComponents[skill.icon]}
      </div>
      <span className="text-sm md:text-base text-gray-300 font-medium">
        {skill.title}
      </span>
    </motion.div>
  ))}
</div>

      </div>
    </motion.div>
  );
};

  return (
    <section id="services" className="relative py-10 md:py-20 bg-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-14 relative z-10">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-yellow-400 bg-yellow-400/10 rounded-full">
            MY SKILLS
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            Technologies I Work With
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I specialize in building modern web applications using these technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8">
          <SkillCard 
            category="Frontend" 
            skills={frontend} 
            icon={<FiCode className="text-2xl text-yellow-400" />} 
          />
          <SkillCard 
            category="Backend" 
            skills={backend} 
            icon={<FiDatabase className="text-2xl text-blue-400" />} 
          />
          <SkillCard 
            category="Tools" 
            skills={tools} 
            icon={<FiCpu className="text-2xl text-purple-400" />} 
          />
        </div>

       
      </div>
    </section>
  );
};

export default Services;
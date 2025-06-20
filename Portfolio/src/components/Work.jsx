import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiChevronDown, FiChevronUp } from "react-icons/fi";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";
import youtube from "../assets/youtube.png";
import digiwhiz from "../assets/digiwhiz.png";
import ict from "../assets/ict.png";

export default function Work() {
  const caseStudies = [
    {
      id: 1,
      title: "College Management System",
      description: "Designed and developed an online platform to manage academic operations, including admissions, enrollment, student attendance, and exam scheduling.",
      workImage: work1,
      details: [
        "Provides comprehensive college management facilities",
        "Student and faculty records management",
        "Attendance tracking for students and faculty",
        "Question bank downloads and exam system",
        "Fee receipt generation and download"
      ],
      learnings: "By making this project we learned that teamwork and unity make all things possible and also learned how to share work in a team.",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Tomato Food Delivery",
      description: "Food ordering web application using ReactJS and Tailwind CSS with restaurant data integration.",
      workImage: work2,
      details: [
        "React-based restaurant platform",
        "Menu exploration and cart functionality",
        "Order placement and checkout system",
        "Responsive design with React Router"
      ],
      live: "https://testy-food-delivery.netlify.app/"
    },
    {
      id: 3,
      title: "YouTube Clone",
      description: "Fully responsive YouTube clone with real-time video fetching using YouTube Data API.",
      workImage: youtube,
      details: [
        "Video browsing and playback",
        "Like, share, and comment functionality",
        "Responsive design across devices",
        "YouTube Data API integration"
      ],
      live: "https://zp-youtube.vercel.app/"
    },
    {
      id: 4,
      title: "Amazon Clone",
      description: "Static front-end clone of Amazon's homepage with responsive product categories.",
      workImage: work3,
      details: [
        "HTML/CSS implementation",
        "Product category sections",
        "Responsive layout design",
        "Static front-end only"
      ],
      live: "https://learnamazon.netlify.app/"
    },
    {
      id: 5,
      title: "Bhuid X",
      description: "React and Tailwind CSS web application with slide banner and filter functionality.",
      workImage: digiwhiz,
      details: [
        "Interactive slide banner",
        "Record filtering system",
        "Responsive design",
        "React component architecture"
      ],
      live: "https://digiwhiz-task.vercel.app/"
    },
    {
      id: 6,
      title: "ICT Infracon Task",
      description: "React and Tailwind CSS application with animations and full responsiveness.",
      workImage: ict,
      details: [
        "Custom animations",
        "Fully responsive layout",
        "Modern UI components",
        "Performance optimized"
      ],
      live: "https://ict-infracon-task.vercel.app/"
    }
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="work" className="relative py-20 bg-gray-900 text-gray-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-yellow-400 bg-yellow-400/10 rounded-full">
            PORTFOLIO
          </span>
          <h2 className="text-4xl font-bold mb-4">My Case Studies</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my recent projects and development work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:gap-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden "
            >
              <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="order-1 lg:order-2 lg:w-1/2 p-6 md:p-8">
                  <div className="flex items-start mb-4">
                    <span className="text-3xl font-bold text-yellow-400 mr-4">{`0${index + 1}`}</span>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <p className="text-gray-400">{study.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedId === study.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-3">
                          <h4 className="font-semibold text-yellow-400">Key Features:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-300">
                            {study.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>

                        {study.learnings && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-yellow-400">Learnings:</h4>
                            <p className="text-gray-300">{study.learnings}</p>
                          </div>
                        )}

                        {study.live && (
                          <div className="mt-4">
                            <a
                              href={study.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                            >
                              <FiExternalLink className="mr-2" />
                              View Live Project
                            </a>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => toggleDetails(study.id)}
                    className="mt-6 flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    {expandedId === study.id ? (
                      <>
                        <span>Hide Details</span>
                        <FiChevronUp className="ml-2" />
                      </>
                    ) : (
                      <>
                        <span>View Details</span>
                        <FiChevronDown className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
                <div className="order-2 lg:order-1 lg:w-1/2">
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img
                      src={study.workImage}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex space-x-4">
                        {study.github && (
                          <a
                            href={study.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                          >
                            <FiGithub className="text-xl" />
                          </a>
                        )}
                        {study.live && (
                          <a
                            href={study.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full transition-colors"
                          >
                            <FiExternalLink className="text-xl" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
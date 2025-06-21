import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiExternalLink, FiPhoneCall, FiHome, FiUser, FiCode, FiFolder } from 'react-icons/fi';
import { FaProjectDiagram } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Import Link from react-scroll

export default function Footer() {
  const footerItems = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", to: "home", icon: <FiHome className="inline ml-1" /> },
        { name: "About", to: "about", icon: <FiUser className="inline ml-1" /> },
        { name: "Skills", to: "services", icon: <FiCode className="inline ml-1" /> },
        { name: "Projects", to: "work", icon: <FiFolder className="inline ml-1" /> }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", href: "https://github.com/Parthsabhaya18", icon: <FiGithub className="inline ml-1" /> },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/parth-sabhaya-a37836223/", icon: <FiLinkedin className="inline ml-1" /> },
        { name: "Instagram", href: "https://www.instagram.com/the_parthsabhaya/", icon: <FiInstagram className="inline ml-1" /> }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "parthsabhaya7@gmail.com", href: "mailto:parthsabhaya7@gmail.com", icon: <FiMail className="inline ml-1" /> },
        { name: "+91 80009 93067", href: "tel:+918000993067", icon: <FiPhoneCall className="inline ml-1" /> }
      ]
    }
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Glowing top border animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
      />
      
      {/* Floating tech particles */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: [0, 0.3, 0], y: [0, -150] }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "linear"
            }}
            className="absolute rounded-full bg-yellow-400"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand section with 3D effect */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
          <Link to="home" smooth={true} duration={500} offset={-60}>
  <motion.h2 
    whileHover={{ y: -3 }}
    className="text-4xl mb-4 font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent cursor-pointer"
  >
    Parth Sabhaya
  </motion.h2>
</Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer crafting immersive digital experiences with modern web technologies.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <a
                href="mailto:parthsabhaya7@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all border border-gray-700 shadow-lg hover:shadow-yellow-500/10"
              >
                <FiMail className="text-yellow-500 text-lg" />
                <span>Get In Touch</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Navigation links with wave animation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3  gap-8 lg:w-2/3"
          >
            {footerItems.map((section, index) => (
              <div key={index} className="space-y-5">
                <h3 className="text-lg font-semibold text-white tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li 
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {section.title === "Quick Links" ? (
                        <Link
                          to={link.to}
                          smooth={true}
                          offset={-60}
                          duration={500}
                          spy={true}
                          className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group cursor-pointer"
                        >
                          <span className="ml-1 transition-opacity">
                            {link.icon}
                          </span>
                          <span className="group-hover:underline underline-offset-4 decoration-yellow-500">
                            {link.name}
                          </span>
                        </Link>
                      ) : (
                        <a 
                          href={link.href} 
                          target={link.href.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors group"
                        >
                          <span className="ml-1 transition-opacity">
                            {link.icon}
                          </span>
                          <span className="group-hover:underline underline-offset-4 decoration-yellow-500">
                            {link.name}
                          </span>
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Copyright section with floating animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Parth Sabhaya. Crafted with ❤️ and React
          </div>
          <div className="flex items-center space-x-6">
            {footerItems[1].links.map((social, index) => (
              <motion.a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-yellow-500 transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                {React.cloneElement(social.icon, { className: "w-5 h-5" })}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
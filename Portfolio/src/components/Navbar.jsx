import React, { useState, useEffect } from 'react';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import CV from '../assets/CV.pdf';
import { Link } from 'react-scroll';
import { HiDownload } from 'react-icons/hi';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    // Lock body scroll when drawer is open
    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [menu]);

    // Close drawer when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const drawer = document.querySelector('.mobile-drawer');
            const menuButton = document.querySelector('.menu-button');
            
            if (menu && drawer && !drawer.contains(event.target) && 
                menuButton && !menuButton.contains(event.target)) {
                setMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menu]);

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const items = [
        { id: 1, text: "Home", to: "home" },
        { id: 2, text: "About", to: "about" },
        { id: 3, text: "Skills", to: "services" },
        { id: 4, text: "Projects", to: "work" },
        { id: 5, text: "Contact", to: "contact" }
    ];

    const handleSetActive = (to) => {
        setActiveLink(to);
    };

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.7 }
    };

    const drawerVariants = {
        hidden: { x: '100%' },
        visible: { 
            x: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300
            }
        },
        exit: {
            x: '100%',
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        })
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`bg-gray-900 text-white w-full fixed top-0 z-50 ${scrolled ? 'shadow-lg' : ''} transition-shadow duration-300`}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Desktop Navbar - shown on md (768px) and larger screens */}
                <div className='flex justify-between items-center h-16 md:h-20'>
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className='flex-shrink-0'
                    >
                        <a href="#home" className='flex items-center gap-3'>
                            <motion.img 
                                src={logo} 
                                alt="Logo" 
                                className='h-10 w-auto'
                                whileHover={{ rotate: 5 }}
                            />
                            <span className='ml-2 text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent'>
                                Parth Sabhaya
                            </span>
                        </a>
                    </motion.div>
                    
                    {/* Desktop Navigation - shown on md (768px) and larger screens */}
                    <div className='hidden lg:flex items-center space-x-8'>
                        <div className='flex space-x-8'>
                            {items.map(({ id, text, to }) => (
                                <motion.div
                                    key={id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to={to}
                                        smooth={true}
                                        duration={500}
                                        offset={-60}
                                        spy={true}
                                        onSetActive={() => handleSetActive(to)}
                                        className={`relative px-1 py-2 text-sm font-medium cursor-pointer transition-all duration-300 ${
                                            activeLink === to 
                                                ? 'text-yellow-400' 
                                                : 'text-gray-300 hover:text-yellow-300'
                                        }`}
                                    >
                                        {text}
                                        {activeLink === to && (
                                            <motion.span 
                                                className="absolute left-0 bottom-0 h-0.5 w-full bg-yellow-400"
                                                layoutId="underline"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <motion.a 
                            href={CV} 
                            download="CV.pdf" 
                            whileHover={{ 
                                scale: 1.05,
                                boxShadow: "0 5px 15px rgba(234, 179, 8, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className='ml-4 px-6 py-2 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg flex items-center gap-2'
                        >
                            <HiDownload size={18} />
                            Download CV
                        </motion.a>
                    </div>
                    
                    {/* Mobile menu button - shown on screens smaller than md (768px) */}
                    <motion.div 
                        className='lg:hidden flex items-center'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <button
                            onClick={() => setMenu(!menu)}
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none menu-button'
                            aria-expanded='false'
                        >
                            {menu ? (
                                <IoClose size={28} className="text-yellow-400" />
                            ) : (
                                <MdMenu size={28} className="text-yellow-400" />
                            )}
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Drawer with Overlay */}
            <AnimatePresence>
                {menu && (
                    <>
                        <motion.div
                            key="overlay"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={overlayVariants}
                            className="fixed inset-0 bg-black z-40 lg:hidden"
                            onClick={() => setMenu(false)}
                        />
                        
                        <motion.div
                            key="drawer"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={drawerVariants}
                            className="mobile-drawer fixed top-0 right-0 h-full w-80 bg-gray-900 z-50 shadow-2xl lg:hidden"
                        >
                            <div className="h-full flex flex-col">
                                {/* Top section with logo and close button */}
                                <div className="flex items-center justify-end px-6 pt-6">
                                  
                                    <button
                                        onClick={() => setMenu(false)}
                                        className="text-yellow-400 hover:text-yellow-300 transition duration-300"
                                    >
                                        <IoClose size={28} />
                                    </button>
                                </div>

                                {/* Navigation items */}
                                <div className="flex-1 px-6 mt-10 space-y-8">
                                    {items.map(({ id, text, to }, i) => (
                                        <motion.div
                                            key={id}
                                            custom={i}
                                            initial="hidden"
                                            animate="visible"
                                            variants={itemVariants}
                                        >
                                            <Link
                                                to={to}
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={-60}
                                                onSetActive={() => handleSetActive(to)}
                                                onClick={() => setMenu(false)}
                                                className={`block text-lg font-medium cursor-pointer py-2 transition duration-300 ${
                                                    activeLink === to
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-300 hover:text-yellow-300'
                                                }`}
                                            >
                                                {text}
                                                {activeLink === to && (
                                                    <motion.span
                                                        className="block h-0.5 w-10 bg-yellow-400 mt-1"
                                                        layoutId="mobile-underline"
                                                    />
                                                )}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: items.length * 0.1 + 0.1 }}
                                    className="px-6 mt-auto pb-10"
                                >
                                    <a
                                        href={CV}
                                        download="CV.pdf"
                                        onClick={() => setMenu(false)}
                                        className='w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 flex items-center justify-center gap-2 transition-all duration-300 shadow-md'
                                    >
                                        <HiDownload size={20} />
                                        Download CV
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
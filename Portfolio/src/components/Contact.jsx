import React, { useRef, useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_ypsj9om';
    const templateId = 'template_c1n8z4d';
    const publicKey = 'Xyb5fQ0RcuUbA4aix';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Parth Sabhaya',
      message: message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        toast.success('Message sent successfully!', {
          position: 'top-center',
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #333'
          }
        });
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        toast.error('Failed to send message. Please try again.', {
          position: 'top-center',
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #ff3333'
          }
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  const contactItems = [
    {
      icon: <FiMail className="text-yellow-400 w-5 h-5" />,
      content: (
        <a href="mailto:parthsabhaya7@gmail.com" className="hover:text-yellow-400 transition-colors">
          parthsabhaya7@gmail.com
        </a>
      )
    },
    {
      icon: <FiMapPin className="text-yellow-400 w-5 h-5" />,
      content: "Bangalore, India"
    },
    {
      icon: <FiPhone className="text-yellow-400 w-5 h-5" />,
      content: (
        <a href="tel:+918000993067" className="hover:text-yellow-400 transition-colors">
          +91 80009 93067
        </a>
      )
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-20 px-4 md:px-12 lg:px-24 bg-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: [0, 0.5, 0], y: [0, -100] }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute rounded-full bg-yellow-400"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss your project and how I can help bring your ideas to life
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
              <p className="text-gray-400">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects.
              </p>
            </div>

            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 text-gray-300"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>{item.content}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name <span className="text-yellow-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email <span className="text-yellow-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message <span className="text-yellow-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-white placeholder-gray-400 transition-all"
                      placeholder="Your message here..."
                    ></textarea>
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 flex items-center justify-center gap-2 rounded-lg font-medium transition-all ${isSubmitting ? 'bg-yellow-600 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-400'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast notifications */}
      <Toaster />
    </section>
  );
}
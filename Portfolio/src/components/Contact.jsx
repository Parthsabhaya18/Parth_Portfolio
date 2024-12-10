import React, { useRef, useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import emailjs from '@emailjs/browser';
export default function Contact() {


  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const form = useRef();

  const handleSubmit=(e)=>{
     e.preventDefault();

    const serviceId='service_ypsj9om';
    const templateId='template_c1n8z4d';
    const publicKey='Xyb5fQ0RcuUbA4aix';

    const templateParams={
      from_name:name,   
      from_email:email,
      to_name:'Parth Sabhaya',
      message:message
    }

    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((res)=>{
      alert('Succesfully Sent!!')
      console.log('Email sent Sucesfully!!',res);
      setName('');
      setEmail('')
      setMessage('')
    })
    .catch((err)=>{
      console.error('Error sending Mail!!',err)
    })

  }

  return (
    <div
      id="contact"
      className="block flex flex-col pt-20 md:flex-row items-center justify-center py-12 px-4 md:px-12 lg:px-24 bg-gray-50 bg-gradient-to-t from-white to-yellow-50 "
    >
      <div className="flex flex-1 flex-col px-6 mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
          Contact Us
        </h2>
        <p className="mb-6 text-gray-600">
          We Are Commited to Processing The Inforation to Contact you and
          discuss your project
        </p>
        <div>
          <div className="space-y-4 flex  text-gray-600 mb-2">
            <FiMail className="text-yellow-500  w-6 h-6" />
            <span className="relative bottom-4 left-2">
              <a
                className=" hover:text-blue-600 border-gray-400"
                href="mailto:parthsabhaya7@gmail.com"
              >
                parthsabhaya7@gmail.com
              </a>
            </span>
          </div>
          <div className="space-y-4 flex text-gray-600 mb-2">
            <FiMapPin className="text-yellow-500 w-6 h-6" />
            <span className="relative bottom-4 left-2">Banglore,India</span>
          </div>
          <div className="space-y-4 flex text-gray-600">
            <FiPhone className="text-yellow-500 w-6 h-6" />
            <span className="relative bottom-4 left-2">
              <a
                className=" hover:text-blue-600 border-gray-400"
                href="tel:+91 8000993067"
              >
                +91 80009 93067
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-11/12 max-w-screen-sm bg-white shadow-lg rounded-lg p-6">
        <form action="#" ref={form} onSubmit={handleSubmit}  method="POST" className="w-11/12 space-y-4">
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium text-gray-700"
            >
              Name
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your Name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="E-mail"
              className="block text-sm font-medium text-gray-700"
            >
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your E-Mail Id"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows="4"
              value={message}
              onChange={(e)=>{setMessage(e.target.value)}}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

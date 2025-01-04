import React, { useState } from "react";
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
      title: "Collage Managment System",
      description:
        "Designed and developed an online platform to manage academi operations, including admissions, enrollment, student attendance, and exam scheduling.I-MCQ refers to service as conduct online examination or test. Online examination system will use in schools, colleges, universities, institutes for student's examination .",
      workImage: work1,
      details:
        "Our project provides every facility for college management like student records,faculty records,student attendance,faculty attendance,student can download question bank,student can take exam,student can download fee receipt.",
        defi: "By making this project we learned that teamwork and unity make all things possible and also learned how to share work in a team."
    },
    {
      id: 2,
      title: "Tomato Food delivery",
      description:
        "I developed a food ordering web application , using ReactJS for the frontend and tailwind css for responsive design. The app integrates fetch the data such as restaurant names, menus, images, and prices",
      workImage: work2,
      details:
        "React Restaurant Application This React application is a restaurant platform where users can explore menu items, add items to their cart, place orders, and proceed to checkout. It features a responsive design and utilizes React Router for navigation.",
      deployee: "Deployment:",
      defi: "The application is deployed and accessible at",
      navi: "https://testy-food-delivery.netlify.app/",
    },
    {
      id: 3,
      title: "Youtube Clone",
      description:
        "Welcome to My-YouTube Clone, a fully responsive and feature-rich web application built to simulate the functionality of YouTube.This project leverages the YouTube Data API for real-time video fetching, offering users a seamless browsing experience",
      workImage: youtube,
      details:
        "YouTube is a video sharing service where users can watch, like, share, comment and upload their own videos.",
      deployee: "Deployment:",
      defi: "The application is deployed and accessible at",
      navi: "https://zp-youtube.vercel.app/",
    },
    {
      id: 4,
      title: "Amazon Clone",
      description:
        "Created a static front-end clone of Amazon’s homepage, featuring a responsive layout with product categories such as electronics, furniture, and fashion items. Creating an Amazon clone using HTML and CSS can be a educational project to enhance My web development skills",
      workImage: work3,
      details:
        "Create a static web-page with the help of Html,Css",
      deployee: "Deployment:",
      defi: "The application is deployed and accessible at",
      navi: "https://learnamazon.netlify.app/",

    },
    {
      id: 5,
      title: "Bhuid X",
      description:
        "I developed a Bhuild-x web application , using ReactJS for the frontend and tailwind css for responsive design. The app integrates all functionality slide banner, filter record",
      workImage: digiwhiz,
      details:
      "Create a  web-page with the help of React js and tailwind css",
    deployee: "Deployment:",
    defi: "The application is deployed and accessible at",
    navi: "https://digiwhiz-task.vercel.app/",
    },
    {
      id: 6,
      title: "ict-infracon-task",
      description:
        "I developed a ict-infracon-task web application , using ReactJS for the frontend and tailwind css for responsive design. The app integrates all functionality animation and fully responsive",
      workImage: ict,
      details:
      "Create a  web-page with the help of React js and tailwind css",
    deployee: "Deployment:",
    defi: "The application is deployed and accessible at",
    navi: "https://ict-infracon-task.vercel.app/",
    },
  ];

  const [details, setDetails] = useState(null);

  const toggleDetails = (id) => {
    if (details === id) {
      setDetails(null);
    } else {
      setDetails(id);
    }
  };

  return (
    <div id="work" className="container mx-auto px-4 py-12">
      <h3 className="text-lg text-yellow-500 font-semibold text-center uppercase mt-8 mb-2">
        Project
      </h3>
      <h2 className="text-4xl font-bold text-center mb-12">My Case Studies</h2>
      {caseStudies.map((study, index) => (
        <div
          key={study.id}
          className={`block flex flex-col lg:flex-row items-center justify-between mb-16 lg:mb-24 ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full lg:w-1/3 p-4">
            <img
              src={study.workImage}
              alt=""
              className="w-full h-56 object-right-bottom rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-yellow-500 mr-2">{`0${
                index + 1
              }`}</span>
              <h3 className="text-2xl font-semibold">{study.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{study.description}</p>
            {details === study.id && (
              <p className="text-gray-600 mb-4 whitespace-pre-line">
                {study.details}
                <br />
                <br />
                <b>{study.deployee}</b> {study.defi}
                <br />
                <br />
                <a
                  className=" text-blue-500 cursor-pointer font-[500]"
                  href={study.navi}
                >
                  {study.navi}
                </a>
              </p>
            )}

            <button
              className="border-2 border-yellow-500 text-yellow-500 px-4 py-2 rounded full hover:bg-yellow-500 hover:text-white"
              onClick={() => toggleDetails(study.id)}
            >
              {details === study.id ? "Hide Details" : "Details"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

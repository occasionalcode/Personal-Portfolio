"use client";
import { useEffect } from "react";
import AchievementsCards from "./components/AchievementCards";
import ProjectCards from "./components/ProjectCards";
import { title } from "process";
import StackIcon from "tech-stack-icons";

import { globalTechstackSVG } from "./stores/globalVariables";

// Importing all project images
import hemalensPic from "@/public/projects/Hemalens.png";
import hemalensSplashscreen from "@/public/projects/hemalens/Splashscreen.png";
import hemalensLogin1 from "@/public/projects/hemalens/Login1.png";
import hemalensLogin from "@/public/projects/hemalens/Login.png";
import hemalensCamera from "@/public/projects/hemalens/Camera.png";
import hemalensSwipeResult from "@/public/projects/hemalens/Swipe Result.png";
import hemalensSwipeResult2 from "@/public/projects/hemalens/Swipe Result2.png";

import blocknFocusPic from "@/public/projects/BlocknFocus.png";
import blocknFocus1 from "@/public/projects/block'nfocus/1.png";
import blocknFocus1_5 from "@/public/projects/block'nfocus/1.5.png";
import blocknFocus2 from "@/public/projects/block'nfocus/2.png";
import blocknFocus3 from "@/public/projects/block'nfocus/3.png";
import blocknFocus4 from "@/public/projects/block'nfocus/4.png";
import blocknFocus5 from "@/public/projects/block'nfocus/5.png";
import blocknFocus6 from "@/public/projects/block'nfocus/6.png";
import blocknFocus7 from "@/public/projects/block'nfocus/7.png";
import blocknFocus8 from "@/public/projects/block'nfocus/8.png";
import blocknFocus9 from "@/public/projects/block'nfocus/9.png";
import blocknFocus10 from "@/public/projects/block'nfocus/10.png";
import blocknFocus11 from "@/public/projects/block'nfocus/11.png";
import blocknFocus12 from "@/public/projects/block'nfocus/12.png";
import blocknFocus13 from "@/public/projects/block'nfocus/13.png";

import animaflixPic from "@/public/projects/animaflix.png";
import animaflix1 from "@/public/projects/animaflix/1.png";
import animaflix2 from "@/public/projects/animaflix/2.png";
import animaflix3 from "@/public/projects/animaflix/3.png";
import animaflix4 from "@/public/projects/animaflix/4.png";
import animaflix5 from "@/public/projects/animaflix/5.png";
import animaflix6 from "@/public/projects/animaflix/6.png";

import kbqsPic from "@/public/projects/Kbqs.png";
import kbqs1 from "@/public/projects/kbqs/1.png";
import kbqs2 from "@/public/projects/kbqs/2.png";
import kbqs3 from "@/public/projects/kbqs/3.png";
import kbqs4 from "@/public/projects/kbqs/4.png";
import kbqs5 from "@/public/projects/kbqs/5.png";
import kbqs6 from "@/public/projects/kbqs/6.png";
import kbqs7 from "@/public/projects/kbqs/7.png";
import kbqs8 from "@/public/projects/kbqs/8.png";

export default function Projects() {
  const projects = [
    {
      title: "HEMALENS",
      year: 2023,
      description: "A novel app that detects and counts blood cells",
      pic: hemalensPic,
      link: "https://www.facebook.com/share/yNGf6ybWQmMj7KwG/",
      infoPics: [
        hemalensSplashscreen,
        hemalensLogin1,
        hemalensLogin,
        hemalensCamera,
        hemalensSwipeResult,
        hemalensSwipeResult2,
      ],
      aboutProject:
        "HemaLens is a machine learning application that analyzes, detects, and counts blood components, including platelets, RBCs, and the five WBC differentials, making hematology more accessible and affordable. The project addresses the challenges of manual blood cell counting and the high cost of hematology analyzers, especially in rural healthcare settings. I contributed to front-end development, UI/UX design, and training the machine learning model, ensuring both accuracy and a user-friendly experience. HemaLens has received recognition in various competitions, including the Philippine Startup Challenge by DICT, the Mindanao Conference for Information Technology Students (MCITS), and the Outstanding Student Research Awards 2024.",
      classname: "md:grid md:grid-cols-4 justify-end items-end",
      techstack: ["Flutter", "Dart", "Tensorflow", "Figma"],
    },
    {
      title: "BLOCK'NFOCUS",
      year: 2024,
      description: "A Web Blocking Software For Productivity",
      pic: blocknFocusPic,
      link: "https://www.facebook.com/share/eXN5RFN1xbwjh457/",
      infoPics: [
        blocknFocus1,
        blocknFocus1_5,
        blocknFocus2,
        blocknFocus3,
        blocknFocus4,
        blocknFocus5,
        blocknFocus6,
        blocknFocus7,
        blocknFocus8,
        blocknFocus9,
        blocknFocus10,
        blocknFocus11,
        blocknFocus12,
        blocknFocus13,
      ],
      aboutProject:
        "Block'NFocus is a productivity tool designed to help users enhance focus and minimize distractions by blocking access to selected websites and apps during designated work periods. The application allows users to create customizable focus sessions, and if a user tries to unblock a site before the defined time, they must solve a randomized riddle and score above 70 percent to regain access. As a member of the development team, I contributed to the front-end development and UI/UX design.",
      classname: "md:grid md:grid-cols-4 justify-end items-end",
      techstack: ["Python", "Canva"],
    },
    {
      title: "ANIMAFLIX",
      year: 2024,
      description: "A site for anime, manga, and movies.",
      pic: animaflixPic,
      link: "https://www.facebook.com/share/p/2UqeZyHzdC3rvi4Q/",
      infoPics: [
        animaflix1,
        animaflix2,
        animaflix3,
        animaflix4,
        animaflix5,
        animaflix6,
      ],
      aboutProject:
        "Animaflix is my personal project, created as a comprehensive platform where users can watch anime, read manga, and enjoy a wide selection of movies. The movie collection is not limited to anime; it also includes U.S. movies, offering a diverse range of content to cater to different tastes. Whether you're streaming the latest anime episodes, reading popular manga titles, or watching films from various genres, Animaflix provides a seamless and enjoyable experience for all entertainment enthusiasts.",
      classname: "md:grid md:grid-cols-2 justify-end items-end",
      techstack: [
        "ReactJS",
        "Shadcn",
        "HTML5",
        "CSS3",
        "Tailwind",
        "Zustand",
        "Framer",
        "Postman",
        "Tanstack Query",
      ],
    },
    {
      title: "KBQS QUEUING SYSTEM",
      year: 2024,
      description:
        "A Queuing System For Managing Customer Queues And Appointments.",
      pic: kbqsPic,
      link: "https://www.facebook.com/share/yNGf6ybWQmMj7KwG/",
      infoPics: [kbqs1, kbqs2, kbqs3, kbqs4, kbqs5, kbqs6, kbqs7, kbqs8],
      aboutProject:
        "The KBQS (Kiosk-Based Queuing System) was a project developed for Telemondo Unicenters Company, aimed at optimizing customer service by providing an efficient queuing system that also accommodates appointments. The system was designed to reduce wait times and improve customer flow through user-friendly kiosks. I was responsible for implementing several screens provided by the UI/UX team",
      classname: "md:grid md:grid-cols-2 justify-end items-end",
      techstack: [
        "ReactJS",
        "Shadcn",
        "HTML5",
        "CSS3",
        "Tailwind",
        "Zustand",
        "Framer",
        "Postman",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-10" id="projects">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center   mobilesS:flex-row  mobilesS:text-4xl mobileL:text-5xl sm:text-7xl  lg:text-8xl xl:text-9xl">
          <p
            className={`font-black items-center font-Montserrat flex bg-clip-text bg-gradient-to-r from-white via-[#545454] to-white text-transparent`}
          >
            PRO
          </p>
          <p
            className={`flex items-center font-Poppins  font-black text-black font-outline-2`}
          >
            JECTS
          </p>
        </div>
        <p className="text-white text-center sm:text-2xl md:text-xl lg:text-[25px]  ">
          These are projects where I contributed to front-end development and
          design.
        </p>
      </div>
      <div className="grid items-start mobilesS:px-5 sm:px-6 mobilesS:columns-1 sm:grid-cols-2 lg:grid-cols-3 mobilesS:gap-5">
        {projects.map((project, i) => {
          return (
            <div key={i}>
              <ProjectCards
                key={i}
                title={`${project.title}`}
                description={project.description}
                pic={project.pic}
                year={project.year}
                infoPics={project.infoPics}
                aboutProject={`${project.aboutProject}`}
                classname={`${project.classname}`}
                techStacks={project.techstack}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

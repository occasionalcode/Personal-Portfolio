"use client";
import { useEffect } from "react";
import { useDarkmode } from "./stores/globalStates";
import AchievementsCards from "./components/AchievementCards";
import ProjectCards from "./components/ProjectCards";
import { title } from "process";

export default function Projects() {
  const darkMode = useDarkmode((state) => state.darkMode);
  const isFading = useDarkmode((state) => state.isFading);
  const UpdateIsFading = useDarkmode((state) => state.updateIsFading);

  useEffect(() => {
    UpdateIsFading();
    const timer = setTimeout(() => UpdateIsFading(), 2000); // Duration of the fade animation
    return () => clearTimeout(timer);
  }, [darkMode]);

  const projects = [
    {
      title: "HEMALENS",
      year: 2024,
      description: "A Novel Mobile App that detects and count Blood Cells",
      pic: "/projects/Hemalens.png",
      link: "https://www.facebook.com/share/yNGf6ybWQmMj7KwG/",
      infoPics: [
        "/projects/hemalens/Splashscreen.png",

        "/projects/hemalens/Log In1.png",
        "/projects/hemalens/Log In.png",
        "/projects/hemalens/Camera.png",
        "/projects/hemalens/Swipe Result.png",
        "/projects/hemalens/Swipe Result2.png",
      ],
      aboutProject:
        "HemaLens is a machine learning application that analyzes, detects, and counts blood components, including platelets, RBCs, and the five WBC differentials, making hematology more accessible and affordable. The project addresses the challenges of manual blood cell counting and the high cost of hematology analyzers, especially in rural healthcare settings. I contributed to front-end development, UI/UX design, and training the machine learning model, ensuring both accuracy and a user-friendly experience. HemaLens has received recognition in various competitions, including the Philippine Startup Challenge by DICT, the Mindanao Conference for Information Technology Students (MCITS), and the Outstanding Student Research Awards 2024.",
      classname: "md:grid md:grid-cols-4 justify-end items-end",
    },
    {
      title: "BLOCK'NFOCUS",
      year: 2024,
      description: "A Web Blocking Software For Productivity",
      pic: "/projects/BlocknFocus.png",
      link: "https://www.facebook.com/share/eXN5RFN1xbwjh457/",
      infoPics: [
        "/projects/block'nfocus/1.png",
        "/projects/block'nfocus/1.5.png",
        "/projects/block'nfocus/2.png",
        "/projects/block'nfocus/3.png",
        "/projects/block'nfocus/4.png",
        "/projects/block'nfocus/5.png",
        "/projects/block'nfocus/6.png",
        "/projects/block'nfocus/7.png",
        "/projects/block'nfocus/8.png",
        "/projects/block'nfocus/9.png",
        "/projects/block'nfocus/10.png",
        "/projects/block'nfocus/11.png",
        "/projects/block'nfocus/12.png",
        "/projects/block'nfocus/13.png",
      ],
      aboutProject:
        "BlockNFocus is a productivity tool designed to help users enhance focus and minimize distractions by blocking access to selected websites and apps during designated work periods. The application allows users to create customizable focus sessions, and if a user tries to unblock a site before the defined time, they must solve a randomized riddle and score above 70 percent to regain access. As a member of the development team, I contributed to the front-end development and UI/UX design.",
      classname: "md:grid md:grid-cols-4 justify-end items-end",
    },
    {
      title: "ANIMAFLIX",
      year: 2023,
      description: "1st Place In The Philippine Startup Challenge",
      pic: "/projects/animaflix.png",
      link: "https://www.facebook.com/share/p/2UqeZyHzdC3rvi4Q/",
      infoPics: [
        "/projects/animaflix/1.png",
        "/projects/animaflix/2.png",
        "/projects/animaflix/3.png",
        "/projects/animaflix/4.png",
        "/projects/animaflix/5.png",
        "/projects/animaflix/6.png",
      ],
      aboutProject:
        "Animaflix is my personal project, created as a comprehensive platform where users can watch anime, read manga, and enjoy a wide selection of movies. The movie collection is not limited to anime; it also includes U.S. movies, offering a diverse range of content to cater to different tastes. Whether you're streaming the latest anime episodes, reading popular manga titles, or watching films from various genres, Animaflix provides a seamless and enjoyable experience for all entertainment enthusiasts.",
      classname: "md:grid md:grid-cols-2 justify-end items-end",
    },
    {
      title: "KBQS QUEUING SYSTEM",
      year: 2024,
      description:
        "A Queuing System For Managing Customer Queues And Appointments.",
      pic: "/projects/Kbqs.png",
      link: "https://www.facebook.com/share/yNGf6ybWQmMj7KwG/",
      infoPics: [
        "/projects/kbqs/1.png",
        "/projects/kbqs/2.png",
        "/projects/kbqs/3.png",
        "/projects/kbqs/4.png",
        "/projects/kbqs/5.png",
        "/projects/kbqs/6.png",
        "/projects/kbqs/7.png",
        "/projects/kbqs/8.png",
      ],
      aboutProject:
        "The KBQS (Kiosk-Based Queuing System) was a project developed for Telemondo Unicenters Company, aimed at optimizing customer service by providing an efficient queuing system that also accommodates appointments. The system was designed to reduce wait times and improve customer flow through user-friendly kiosks. I was responsible for implementing several screens provided by the UI/UX team",
      classname: "md:grid md:grid-cols-2 justify-end items-end",
    },
  ];

  return (
    <div className="flex flex-col gap-10" id="projects">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center   mobilesS:flex-row  mobilesS:text-4xl mobileL:text-5xl sm:text-7xl  lg:text-8xl xl:text-9xl">
          <p
            className={`font-black items-center font-Montserrat flex bg-clip-text bg-gradient-to-r ${
              darkMode
                ? "from-white via-[#545454] to-white"
                : "from-[#bcbcbc] via-[#282828] to-[#bcbcbc]"
            } text-transparent`}
          >
            PRO
          </p>
          <p
            className={`flex items-center font-Poppins  font-black ${
              darkMode
                ? "text-black font-outline-2"
                : "text-white font-outline-3"
            }`}
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
                pic={`${project.pic}`}
                year={project.year}
                infoPics={project.infoPics}
                aboutProject={`${project.aboutProject}`}
                classname={`${project.classname}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

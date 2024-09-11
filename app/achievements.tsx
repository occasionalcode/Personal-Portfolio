"use client";
import { useEffect } from "react";
import { useDarkmode } from "./stores/globalStates";
import { CarouselVertical } from "./components/CarouselVertical";
import AchievementsCards from "./components/AchievementCards";
import mcits4 from "@/public/achievments/mcits pics/mcits4.jpg";
import mcits1 from "@/public/achievments/mcits pics/mcits1.jpg";
import mcits2 from "@/public/achievments/mcits pics/mcits2.jpg";
import mcits3 from "@/public/achievments/mcits pics/mcits3.jpg";
import mcitsLogo from "@/public/achievments/MCITS.png";

import osra1 from "@/public/achievments/OSRA/osra1.jpg";
import osra2 from "@/public/achievments/OSRA/osra2.jpg";
import osra3 from "@/public/achievments/OSRA/osra3.jpg";
import osra4 from "@/public/achievments/OSRA/osra4.jpg";
import osraLogo from "@/public/achievments/OSRA.jpg";

import dict1 from "@/public/achievments/dict/dict1.jpg";
import dict3 from "@/public/achievments/dict/dict3.jpg";
import dict4 from "@/public/achievments/dict/dict4.jpg";
import dict5 from "@/public/achievments/dict/dict5.jpg";
import dictLogo from "@/public/achievments/DICT.png";

export default function Achievments() {
  const darkMode = useDarkmode((state) => state.darkMode);
  const isFading = useDarkmode((state) => state.isFading);
  const UpdateIsFading = useDarkmode((state) => state.updateIsFading);

  useEffect(() => {
    UpdateIsFading();
    const timer = setTimeout(() => UpdateIsFading(), 2000); // Duration of the fade animation
    return () => clearTimeout(timer);
  }, [darkMode]);

  const achievements = [
    {
      title: "MINDANAO CONFERENCE FOR INFORMATION TECHNOLOGY STUDENTS",
      year: 2024,
      description: "PAPER PRESENTATION CHAMPION",
      pic: mcitsLogo,
      link: "https://www.facebook.com/share/yNGf6ybWQmMj7KwG/",
      infoPics: [mcits4, mcits1, mcits2, mcits3, mcitsLogo],
      aboutEvent:
        "The Philippine Startup Challenge, organized by the Department of Information and Communications Technology (DICT)...",
    },
    {
      title: "MAPUA MALAYAN OUTSTANDING STUDENT RESEARCH AWARD",
      year: 2024,
      description: "CCIS RESEARCH POSTER PRESENTATION CHAMPION",
      pic: osraLogo,
      link: "https://www.facebook.com/share/eXN5RFN1xbwjh457/",
      infoPics: [osra1, osra2, osra3, osra4, osraLogo],
      aboutEvent:
        "The Outstanding Student Research Award (OSRA) at Mapúa Malayan Colleges Mindanao...",
    },
    {
      title: "DEPARTMENT OF INFORMATION AND COMMUNICATIONS TECHNOLOGY",
      year: 2023,
      description: "1ST PLACE IN THE PHILIPPINE STARTUP CHALLENGE",
      pic: dictLogo,
      link: "https://www.facebook.com/share/p/2UqeZyHzdC3rvi4Q/",
      infoPics: [dict1, dict3, dict4, dict5, dictLogo],
      aboutEvent:
        "The Philippine Startup Challenge, organized by the Department of Information and Communications Technology (DICT)...",
    },
  ];

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex justify-around mobilesS:flex-col-reverse md:flex-row px-2 md:px-5 gap-5 xl:gap-10 py-5">
        <div className="flex mobilesS:justify-center md:basis-1 xl: items-center md:items-start flex-col text-center gap-1">
          <div className="flex justify-center  mobilesS:flex-row md:flex-col mobilesS:text-4xl mobileL:text-5xl sm:text-7xl  lg:text-8xl xl:text-9xl">
            <p
              style={{
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
              className={`font-black items-center font-Montserrat flex  bg-gradient-to-r ${
                darkMode
                  ? "from-white via-[#545454] to-white"
                  : "from-[#bcbcbc] via-[#282828] to-[#bcbcbc]"
              } text-transparent`}
            >
              ACHIEVE
            </p>
            <p
              className={`flex items-center font-Poppins  font-black ${
                darkMode
                  ? "text-black font-outline-2"
                  : "text-white font-outline-3"
              }`}
            >
              MENTS
            </p>
          </div>
          <p className="text-white sm:text-2xl md:text-xl lg:text-[25px] md:text-start ">
            A front-end developer and designer with a proven track record in
            winning prestigious competitions.
          </p>
        </div>
        <CarouselVertical items={achievements} />
      </div>
    </div>
  );
}

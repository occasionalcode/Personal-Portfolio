"use client";
import { useEffect } from "react";
import { useDarkmode } from "./stores/globalStates";
import { CarouselVertical } from "./components/CarouselVertical";

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
      title: "MAPUA MALAYAN OUTSTANDING STUDENT RESEARCH AWARD",
      year: 2024,
      description: "CCIS RESEARCH POSTER PRESENTATION CHAMPION",
      pic: "/achievments/OSRA.jpg",
      link: "https://www.facebook.com/share/eXN5RFN1xbwjh457/",
    },
    {
      title: "DEPARTMENT OF INFORMATION AND COMMUNICATIONS TECHNOLOGY",
      year: 2023,
      description: "1ST PLACE IN THE PHILIPPINE STARTUP CHALLENGE",
      pic: "/achievments/DICT.png",
      link: "https://www.facebook.com/share/p/2UqeZyHzdC3rvi4Q/",
    },
    {
      title: "MINDANAO CONFERENCE FOR INFORMATION TECHNOLOGY STUDENTS",
      year: 2024,
      description: "RESEARCH PRESENTATION CHAMPION",
      pic: "/achievments/MCITS.png",
      link: "https://www.facebook.com/share/yNGf6ybWQmMj7KwG/",
    },
  ];

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex justify-around mobilesS:flex-col-reverse md:flex-row px-2 md:px-5 gap-5 xl:gap-10 py-5">
        <div className="flex mobilesS:justify-center md:basis-1 xl: items-center md:items-start flex-col text-center gap-1">
          <div className="flex justify-center  mobilesS:flex-row md:flex-col mobilesS:text-4xl mobileL:text-5xl sm:text-7xl  lg:text-8xl xl:text-9xl">
            <p
              className={`font-black items-center font-Montserrat flex bg-clip-text bg-gradient-to-r ${
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
        <CarouselVertical items={achievements} /> {/* Pass the array here */}
      </div>
    </div>
  );
}

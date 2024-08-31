"use client";
import { useEffect } from "react";
import { useDarkmode } from "./stores/globalStates";

export default function Projects() {
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
      infoPics: [""],
    },
    {
      title: "DEPARTMENT OF INFORMATION AND COMMUNICATIONS TECHNOLOGY",
      year: 2023,
      description: "1ST PLACE IN THE PHILIPPINE STARTUP CHALLENGE",
      pic: "/achievments/DICT.png",
      link: "https://www.facebook.com/share/p/2UqeZyHzdC3rvi4Q/",
      infoPics: [""],
    },
    {
      title: "MINDANAO CONFERENCE FOR INFORMATION TECHNOLOGY STUDENTS",
      year: 2024,
      description: "RESEARCH PRESENTATION CHAMPION",
      pic: "/achievments/MCITS.png",
      link: "https://www.facebook.com/share/yNGf6ybWQmMj7KwG/",
      infoPics: [
        "https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/441072276_10228670395643434_4044342581230825833_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HxrNLl8_nP0Q7kNvgGoReOH&_nc_ht=scontent.fcgy1-1.fna&oh=00_AYB152MEYEdOAac_1ZkqkHnzlNq0oe_RRIpplIXOFSuaVg&oe=66D52FFF",
        "https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/441072276_10228670395643434_4044342581230825833_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HxrNLl8_nP0Q7kNvgGoReOH&_nc_ht=scontent.fcgy1-1.fna&oh=00_AYB152MEYEdOAac_1ZkqkHnzlNq0oe_RRIpplIXOFSuaVg&oe=66D52FFF",
        "https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/441072276_10228670395643434_4044342581230825833_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HxrNLl8_nP0Q7kNvgGoReOH&_nc_ht=scontent.fcgy1-1.fna&oh=00_AYB152MEYEdOAac_1ZkqkHnzlNq0oe_RRIpplIXOFSuaVg&oe=66D52FFF",
        "/achievments/MCITS.png",
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-center  mobilesS:flex-row  mobilesS:text-4xl mobileL:text-5xl sm:text-7xl  lg:text-8xl xl:text-9xl">
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
            darkMode ? "text-black font-outline-2" : "text-white font-outline-3"
          }`}
        >
          JECTS
        </p>
      </div>
      <div></div>
    </div>
  );
}

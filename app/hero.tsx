"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Balls from "./components/Balls";
import { useDarkmode } from "./stores/globalStates";

export default function Hero() {
  const darkMode = useDarkmode((state) => state.darkMode);
  const isFading = useDarkmode((state) => state.isFading);
  const UpdateIsFading = useDarkmode((state) => state.updateIsFading);
  // const [isFading, setIsFading] = useState(false);
  // const updateDarkMode = useDarkmode((state) => state.updateDarkMode);

  useEffect(() => {
    UpdateIsFading();
    const timer = setTimeout(() => UpdateIsFading(), 2000); // Duration of the fade animation
    return () => clearTimeout(timer);
  }, [darkMode]);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div
        className={`w-full h-screen flex justify-center items-center dark:bg-black relative transition-colors duration-500 ${
          isFading ? (darkMode ? "animate-fadeIn" : "animate-fadeOut") : ""
        }`}
      >
        <Balls />
        <div className="absolute mobilesS:left-5 mobilesS:bottom-5 xl:left-16 xl:bottom-14">
          <Avatar className="mobilesS:size-8 sm:size-10 xl:size-16">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <div>
            <p className="font-Poppins mb-2 flex justify-center mobilesS:text-base mobilesS:mb-0 sm:text-xl lg:text-2xl  xl:text-xl bg-gradient-to-r from-white via-[#545454] to-white text-transparent bg-clip-text">
              Looking for a
            </p>
          </div>
          <div className="flex flex-col">
            <div className=" flex flex-col items-center overflow-hidden mobilesS:h-12 mobileL:h-16 sm:h-24 md:h-28 lg:h-36 xl:h-64">
              <div className="flex items-center flex-col">
                <div className="animation-container">
                  <p
                    className={`z-30 font-Roboto font-bold mobilesS:text-5xl mobilesS:mb-2 mobileL:text-7xl mobileL:mb-0 sm:text-8xl md:text-9xl lg:text-[10rem] xl:mb-0 xl:text-[16rem] bg-gradient-to-r  ${
                      darkMode
                        ? "from-white via-[#545454] to-white"
                        : "from-[#bcbcbc] via-[#282828] to-[#bcbcbc]"
                    } from-10%  via-50% to-75% text-transparent bg-clip-text animate-carousel`}
                  >
                    DEVELOP
                    <span
                      className={`${
                        darkMode
                          ? "text-black font-outline-2"
                          : "text-white font-outline-3"
                      } `}
                    >
                      ER?
                    </span>
                  </p>
                </div>
                <div className="animation-container">
                  <p
                    className={`z-30 font-Roboto font-bold mobilesS:text-5xl mobilesS:mb-2 mobileL:text-7xl mobileL:mb-0 sm:text-8xl md:text-9xl lg:text-[10rem] xl:mb-0 xl:text-[16rem] bg-gradient-to-r  ${
                      darkMode
                        ? "from-white via-[#545454] to-white"
                        : "from-[#bcbcbc] via-[#282828] to-[#bcbcbc]"
                    } from-10%  via-50%  to-75% text-transparent bg-clip-text animate-carousel`}
                  >
                    DESIGN
                    <span
                      className={`${
                        darkMode
                          ? "text-black font-outline-2"
                          : "text-white font-outline-3"
                      } `}
                    >
                      ER?
                    </span>
                  </p>
                </div>
              </div>
              )
            </div>
          </div>
          {/* <button onClick={toggleDarkmode}>
            {darkMode ? "light" : "dark"}
          </button> */}
        </div>
      </div>
    </div>
  );
}

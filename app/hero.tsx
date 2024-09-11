"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Wave from "react-wavify";

import Balls from "./components/reusable components/Balls";
import Link from "next/link";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <div
      id="home"
      className={`w-full h-screen relative flex justify-center items-center  transition-colors duration-500 overflow-hidden`}
    >
      <div className=" absolute size-32 bottom-0 h-1/3 z-20 right-0  bg-gradient-to-l bl from-black/100 from-[percentage:0%_10%]  via-black/5    to-transparent" />
      <div className=" absolute size-32 bottom-0 h-1/3 z-20 left-0  bg-gradient-to-r bl from-black/100 from-[percentage:0%_10%]  via-black/5    to-transparent" />
      <Wave
        className="absolute bottom-0 h-1/3"
        mask="url(#mask)"
        fill="#1277b0"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 30,
          amplitude: 60,
          speed: 0.15,
          points: 5,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.3" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="500" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <Wave
        className="absolute bottom-0 h-1/3 stroke-1 stroke-white"
        mask="url(#mask)"
        fill="transparent"
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 30,
          amplitude: 75,
          speed: 0.1,
          points: 5,
        }}
      ></Wave>

      <div className="absolute mobilesS:left-5 mobilesS:bottom-5 xl:left-16 xl:bottom-14 z-50">
        <Link href={"https://github.com/occasionalcode"} target="_blank">
          {/* <Avatar className="mobilesS:size-8 sm:size-10 xl:size-16">
            <AvatarImage src="https://avatars.githubusercontent.com/u/89623797?s=400&u=9dc586432f9957f1d44f5d78f611c067aab3b360&v=4" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
          <a
            href="/resume/Ibanez_Gabriel_Resume.pdf"
            download={"Ibanez_Gabriel_Resume.pdf"}
            className="mobilesS:hidden md:flex justify-center items-center  gap-3 px-5 py-2 rounded-md hover:bg-white hover:transition-all hover:ease-in-out hover:duration-500  hover:text-black  bg-transparent outline outline-white outline-2 text-white mobilesS:text-sm lg:text-base "
          >
            <Download />
            <p>Download Resume</p>
          </a>
          <a
            href="/resume/Ibanez_Gabriel_Resume.pdf"
            download={"Ibanez_Gabriel_Resume.pdf"}
            className="mobilesS:flex md:hidden  gap-3 px-2 py-1 rounded-md hover:bg-white hover:transition-all hover:ease-in-out hover:duration-500  hover:text-black  bg-transparent outline outline-white outline-2 text-white"
          >
            <Download />
          </a>
        </Link>
      </div>
      <div className="flex flex-col">
        <div>
          <p className="font-Poppins mb-2 flex justify-center mobilesS:text-base mobilesS:mb-0 sm:text-xl lg:text-2xl  xl:text-xl bg-gradient-to-r from-white via-[#545454] to-white text-transparent bg-clip-text">
            Looking for a
          </p>
        </div>
        <div className="flex flex-col">
          <div className=" flex flex-col items-center overflow-hidden mobilesS:h-12 mobileL:h-16 sm:h-24 md:h-28 lg:h-36 xl:h-52">
            <div className="flex items-center flex-col">
              <div className="animation-container">
                <p
                  className={`z-30 font-Roboto font-bold mobilesS:text-5xl mobilesS:mb-2 mobileL:text-7xl mobileL:mb-0 sm:text-8xl md:text-9xl lg:text-[10rem] xl:mb-0 xl:text-[13rem] bg-gradient-to-r from-white via-[#545454] to-white from-10%  via-50% to-75% text-transparent bg-clip-text animate-carousel`}
                >
                  DEVELOP
                  <span className={"text-black font-outline-2"}>ER?</span>
                </p>
              </div>
              <div className="animation-container">
                <p
                  className={`z-30 font-Roboto font-bold mobilesS:text-5xl mobilesS:mb-2 mobileL:text-7xl mobileL:mb-0 sm:text-8xl md:text-9xl lg:text-[10rem] xl:mb-0 xl:text-[13rem] bg-gradient-to-r from-white via-[#545454] to-white from-10%  via-50%  to-75% text-transparent bg-clip-text animate-carousel`}
                >
                  DESIGN
                  <span className={"text-black font-outline-2"}>ER?</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

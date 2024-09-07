"use client";
import React, { useEffect } from "react";

import css from "./assets/css.png";
import dart from "./assets/dart.png";
import flutter from "./assets/flutter.png";
import github from "./assets/github.png";
import Image from "next/image";
import { tools } from "./stores/tools";
import StackIcon from "tech-stack-icons";
import {
  RemixSVG,
  TanstackQuery,
  Tensorflow,
  VercelSVG,
  WebflowSVG,
  ZustandSVG,
} from "./assets/IconFunctions";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { globalTechstackSVG } from "./stores/globalVariables";

export default function About() {
  return (
    <div className="w-full py-20 flex justify-center" id="about">
      <div className="justify-center items-center w-full  mobilesS:flex mobilesS:flex-col-reverse md:grid md:grid-cols-2  mobilesS:gap-5 mobilesS:px-5 mobileL:px-12 sm:px-16 md:px-12 lg:space-x-7 ">
        <div className="flex flex-col font-Montserrat sm:gap-3 mobilesS:justify-center mobilesS:items-center mobilesS:text-5xl mobileL:text-6xl sm:text-8xl md:text-7xl md:gap-0 md:items-start lg:text-9xl xl:text-[10rem] font-black md:mt-20">
          <div className="mobilesS:flex mobilesS:gap-5 sm:gap-7 md:gap-2 md:flex-col lg:gap-0">
            <p
              className={`font-black items-center font-Montserrat  mobilesS:justify-center md:justify-start flex md:pl-3 mobileS:items-center bg-clip-text bg-gradient-to-r from-white via-[#545454] to-white from-5% via-50% to-75% text-transparent`}
            >
              AB
              <span
                className={` mobilesS:size-10 mobileL:size-12 sm:size-20 md:size-16 lg:size-24 xl:size-32 border-2 bg-transparent rounded-full border-white `}
              />
              UT
            </p>
            <p
              className={`mobilesS:justify-center  flex items-center font-Poppins md:text-7xl md:justify-start lg:text-9xl xl:text-[10rem] font-black text-black font-outline-2`}
            >
              ME
            </p>
          </div>
          <div>
            <p className="mobilesS:text-center mobilesS:text-sm  mobileL:text-base sm:text-2xl md:text-xl lg:text-[25px] xl:text-3xl w-full md:text-start font-normal text-white">
              I DESIGN and DEVELOP UNIQUE web - mobile - software graphic
              EXPERIENCE
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center sm:px-20 md:px-5 lg:px-14">
          <div className="border-gradient-rounded aspect-[18/18] w-full md:rounded-[2.5rem] mobilesS:rounded-3xl  ">
            <div className="flex flex-row justify-center items-center">
              <div className="grid grid-cols-5  px-5 py-9 gap-y-5 gap-x-3 xl:gap-10 xl:px-11 sm:gap-5 items-start">
                <TooltipProvider>
                  {globalTechstackSVG.map((techstackIcon) => (
                    <Tooltip>
                      <TooltipTrigger>{techstackIcon.techIcon}</TooltipTrigger>
                      <TooltipContent>
                        <p>{techstackIcon.iconName}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

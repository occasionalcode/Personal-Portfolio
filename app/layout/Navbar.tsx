"use client";
import {
  Award,
  BookUser,
  FolderKanbanIcon,
  HomeIcon,
  Info,
  Moon,
  MoonStarIcon,
  Phone,
  Sun,
  SunDim,
} from "lucide-react";
import React from "react";
// import { Switch } from "@/components/ui/switch";
import { useDarkmode } from "../stores/globalStates";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { goToSection } from "@/lib/utils";

const Navbar = () => {
  const darkmode = useDarkmode((state) => state.darkMode);
  const updateDarkMode = useDarkmode((state) => state.updateDarkMode);
  // const test = true;
  const toggleDarkmode = () => {
    updateDarkMode();
  };

  return (
    <div className="w-full sticky top-5 flex justify-center z-30 ">
      <ul className="border-[0.5px] border-white text-white bg-black backdrop-blur-sm bg-opacity-55 w-72 h-10 absolute flex flex-row justify-evenly rounded-2xl mobilesS:hidden sm:flex ">
        <li className=" w-full flex justify-center items-center rounded-2xl rounded-tr-none rounded-br-none">
          <button onClick={() => goToSection("home")}>
            <HomeIcon size={25} />
          </button>
        </li>
        <li className=" w-full flex justify-center items-center rounded-2xl rounded-tr-none rounded-br-none">
          <button onClick={() => goToSection("about")}>
            <BookUser size={25} />
          </button>
        </li>
        <li className=" w-full flex justify-center items-center rounded-2xl rounded-tr-none rounded-br-none">
          <button onClick={() => goToSection("awards")}>
            <Award size={25} />
          </button>
        </li>
        <li className=" w-full flex justify-center items-center">
          <button onClick={() => goToSection("projects")}>
            <FolderKanbanIcon size={25} />
          </button>
        </li>

        <li className=" w-full flex justify-center items-center rounded-2xl rounded-tr-none rounded-tl-none ">
          <button onClick={() => goToSection("contact")}>
            <Phone size={25} />
          </button>
        </li>
      </ul>
      <ul className="sm:hidden text-navbarGrey1 w-72 h-10 absolute flex flex-row justify-evenly rounded-2xl">
        <Popover>
          <PopoverTrigger>
            <Info />
          </PopoverTrigger>
          <PopoverContent className="flex flex-row bg-transparent h-10 w-72 items-center border-none mt-3 shadow-none">
            <div className="border-[0.5px] border-white text-white bg-black backdrop-blur-sm bg-opacity-55 flex  w-full rounded-2xl">
              <li className=" w-full h-10 flex justify-center items-center rounded-2xl rounded-tr-none ">
                <button onClick={() => goToSection("home")}>
                  <HomeIcon size={25} />
                </button>
              </li>
              <li className=" w-full h-10 flex justify-center items-center rounded-2xl rounded-tr-none ">
                <button onClick={() => goToSection("about")}>
                  <BookUser size={25} />
                </button>
              </li>
              <li className=" w-full h-10 flex justify-center items-center rounded-2xl rounded-tr-none ">
                <button onClick={() => goToSection("awards")}>
                  <Award size={25} />
                </button>
              </li>
              <li className="w-full h-10 flex justify-center items-center">
                <button onClick={() => goToSection("projects")}>
                  <FolderKanbanIcon size={25} />
                </button>
              </li>
              <li className="w-full h-10 flex justify-center items-center  ">
                <button onClick={() => goToSection("contact")}>
                  <Phone size={25} />
                </button>
              </li>
            </div>
          </PopoverContent>
        </Popover>
      </ul>
      {/* <div className="group absolute items-center xl:right-36 mobilesS:right-5   flex justify-center">
        <div className="z-50 flex items-center space-x-2 ">
          <Switch checked={darkmode} onCheckedChange={toggleDarkmode} />
          <Label
            className={`transition-all group-hover:animate-spin-slow ${
              darkmode ? "text-white" : "text-black"
            }`}
            htmlFor="airplane-mode"
          >
            {darkmode ? <MoonStarIcon className="text-white " /> : <Sun />}
          </Label>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;

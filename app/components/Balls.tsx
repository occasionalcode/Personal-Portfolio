import React from "react";
import { useDarkmode } from "../stores/globalStates";

const Balls = () => {
  const darkMode = useDarkmode((state) => state.darkMode);
  return (
    <div>
      {darkMode ? (
        <div>
          <div className="z-20 border-white border-2  rounded-full bg-transparent absolute bounce-mobile  mobilesS:size-[25rem] mobilesS:left-[-10rem] mobilesS:bottom-[-15rem] sm:size-[35rem] sm:bottom-[-20rem] xl:size-[60rem] xl:left-[-20rem] xl:bottom-[-33rem]"></div>
          <div className="z-20 border-white border-2  rounded-full bg-transparent absolute bounce-2-mobile mobilesS:size-[5rem] mobilesS:bottom-0 mobilesS:left-20 sm:size-[8rem]  xl:size-[10rem] xl:left-[35rem] xl:bottom-[4rem]"></div>
          <div className="z-20 border-white border-2  rounded-full bg-transparent absolute bounce-3-mobile mobilesS:size-[25rem] mobilesS:top-[-8rem] mobilesS:right-[-15rem] sm:size-[35rem] sm:top-[-15rem] xl:size-[60rem] xl:right-[-25rem] xl:top-[-34rem]"></div>
          <div className="z-20 border-white border-2  rounded-full bg-transparent absolute bounce-4-mobile mobilesS:size-[10rem] mobilesS:right-[-5rem] mobilesS:top-44  sm:size-[15rem] sm:top-top-36 xl:size-[20rem] xl:right-[0rem] xl:bottom-[0rem]"></div>
        </div>
      ) : (
        <div>
          <div className="z-20 border-black border-2  rounded-full bg-transparent absolute bounce-mobile  mobilesS:size-[25rem] mobilesS:left-[-10rem] mobilesS:bottom-[-15rem] sm:size-[35rem] sm:bottom-[-20rem] xl:size-[60rem] xl:left-[-20rem] xl:bottom-[-33rem]"></div>
          <div className="z-20 border-black border-2  rounded-full bg-transparent absolute bounce-2-mobile mobilesS:size-[5rem] mobilesS:bottom-0 mobilesS:left-20 sm:size-[8rem]  xl:size-[10rem] xl:left-[35rem] xl:bottom-[4rem]"></div>
          <div className="z-20 border-black border-2  rounded-full bg-transparent absolute bounce-3-mobile mobilesS:size-[25rem] mobilesS:top-[-8rem] mobilesS:right-[-15rem] sm:size-[35rem] sm:top-[-15rem] xl:size-[60rem] xl:right-[-25rem] xl:top-[-34rem]"></div>
          <div className="z-20 border-black border-2  rounded-full bg-transparent absolute bounce-4-mobile mobilesS:size-[10rem] mobilesS:right-[-5rem] mobilesS:top-44  sm:size-[15rem] sm:top-top-36 xl:size-[20rem] xl:right-[0rem] xl:bottom-[0rem]"></div>
        </div>
      )}
    </div>
  );
};

export default Balls;

"use client";

import Image from "next/image";
import { CarouselHorizontal } from "./components/Carousel";
import Balls from "./components/Balls";
import { useDarkmode } from "./stores/globalStates";
import { useEffect } from "react";
// import Slider from "./components/Slider";
import SliderCards from "./components/SliderCards";

export default function SampleCertificates() {
  const certs = [
    "/certificates/cert1.png",
    "/certificates/cert2.png",
    "/certificates/cert3.png",
    "/certificates/cert4.png",
    "/certificates/cert5.png",
  ];
  const darkMode = useDarkmode((state) => state.darkMode);
  const isFading = useDarkmode((state) => state.isFading);
  const UpdateIsFading = useDarkmode((state) => state.updateIsFading);

  useEffect(() => {
    UpdateIsFading();
    const timer = setTimeout(() => UpdateIsFading(), 2000); // Duration of the fade animation
    return () => clearTimeout(timer);
  }, [darkMode]);

  return (
    <div className="relative w-full py-20 flex justify-center items-center ">
      <Balls ball={2} />
      <div className="flex h-full justify-center items-center flex-col gap-5 px-5">
        {/* <Slider items={certs} /> */}
        {/* <BoxSlider items={certs} /> */}
        {/* <SliderCards items={certs} /> */}
        <div className="flex justify-center items  mobilesS:text-4xl mobileL:text-5xl sm:text-7xl lg:text-9xl">
          <p
            className={`flex items-center font-Poppins  font-black ${
              darkMode
                ? "text-black font-outline-2"
                : "text-white font-outline-3"
            }`}
          >
            CERT
          </p>
          <p
            className={`font-black items-center font-Montserrat flex bg-clip-text bg-gradient-to-r ${
              darkMode
                ? "from-white via-[#545454] to-white"
                : "from-[#bcbcbc] via-[#282828] to-[#bcbcbc]"
            } text-transparent`}
          >
            IFICATES
          </p>
        </div>
        <div className="text-white text-center  mobilesS:w-64 sm:w-80 md:w-96 lg:w-full">
          <p className="  mobilesS:text-wrap mobilesS:text-xs  md:text-sm lg:text-base">
            These are my collection of certificates reflecting my commitment to
            ongoing learning across a range of fields.
          </p>
        </div>
      </div>
    </div>
  );
}

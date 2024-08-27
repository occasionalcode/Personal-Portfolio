"use client";
import { Carousel } from "@/components/ui/carousel";
import { CarouselHorizontal } from "./components/Carousel";
import Balls from "./components/Balls";

export default function Certificates() {
  const certs = [
    "/certificates/cert1.png",
    "/certificates/cert2.png",
    "/certificates/cert3.png",
    "/certificates/cert4.png",
    "/certificates/cert5.png",
  ];
  return (
    <div className=" flex justify-start flex-col mobilesS:items-center  lg:items-center w-full py-10 gap-8 px-5">
      <div className="flex lg:justify-start mobilesS:justify-center mobilesS:items-center">
        <p className="text-white text-center w-4/5 lg:text-start mobilesS:text-sm mobileL:text-base sm:text-2xl md:text-xl lg:text-[25px] xl:text-3xl">
          These are my collection of certificates reflecting my commitment to
          ongoing learning across a range of fields.
        </p>
      </div>
      <CarouselHorizontal items={certs} />
    </div>
  );
}

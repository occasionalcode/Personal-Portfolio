"use client";
import { Carousel } from "@/components/ui/carousel";
import { CarouselHorizontal } from "./components/Carousel";

import telemondoCert from "@/public/certificates/Telemondo.jpg";
import cert1 from "@/public/certificates/cert1.png";
import cert2 from "@/public/certificates/cert2.png";
import cert3 from "@/public/certificates/cert3.png";
import cert4 from "@/public/certificates/cert4.png";
import cert5 from "@/public/certificates/cert5.png";

export default function Certificates() {
  const certs = [telemondoCert, cert1, cert2, cert3, cert4, cert5];
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

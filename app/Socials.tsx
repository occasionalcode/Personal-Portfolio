import { ArrowLeftCircle, ArrowRightCircle, Dot } from "lucide-react";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="w-full mobilesS:px-5 md:pr-10 lg:pr-32 xl:pr-40 flex flex-col gap-5 lg:text-xl ">
      <div className="text-white w-full flex  justify-end mobilesS:flex-col-reverse md:flex-row-reverse   mobilesS:items-start md:items-center mobilesS:gap-2 md:gap-10">
        <p>+63 923 700 3403</p>
        <ArrowRightCircle className="mobilesS:hidden md:flex" />
        <div className="flex justify-center mobilesS:items-center  md:gap-1   md:items-start mobilesS:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
          <p
            className={`font-black items-center font-Montserrat flex bg-clip-text bg-gradient-to-r from-[#bcbcbc] via-[#282828] to-[#bcbcbc] text-transparent`}
          >
            PHO
          </p>
          <p
            className={`flex items-center font-Poppins  font-black text-black font-outline-2`}
          >
            NE
          </p>
        </div>
      </div>
      <div className="w-full h-[0.2px] bg-white" />
      <div className="text-white w-full flex  justify-start mobilesS:flex-col-reverse md:flex-row   mobilesS:items-start md:items-center mobilesS:gap-2 md:gap-10">
        <p>gabrielibanez50@gmail.com</p>
        <ArrowLeftCircle className="mobilesS:hidden md:flex" />
        <div className="flex justify-center mobilesS:items-center  md:gap-1   md:items-start mobilesS:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
          <p
            className={`flex items-center font-Poppins  font-black text-black font-outline-2`}
          >
            E
          </p>

          <p
            className={`font-black items-center font-Montserrat flex bg-clip-text bg-gradient-to-r from-[#bcbcbc] via-[#282828] to-[#bcbcbc] text-transparent`}
          >
            MAIL
          </p>
        </div>
      </div>
      <div className="w-full h-[0.2px] bg-white" />
      <div className="text-white w-full flex  justify-end mobilesS:flex-col-reverse md:flex-row-reverse   mobilesS:items-start md:items-center mobilesS:gap-2 md:gap-10">
        <div className="underline flex">
          <Link
            target="_blank"
            className="hover:text-red-200"
            href={
              "https://www.linkedin.com/in/gabriel-christian-ibanez-30271b298/"
            }
          >
            LinkedIn
          </Link>
          <Dot />
          <Link
            target="_blank"
            className="hover:text-red-200"
            href={"https://github.com/occasionalcode"}
          >
            Github
          </Link>
          <Dot />
          <Link
            target="_blank"
            className="hover:text-red-200"
            href={"https://www.facebook.com/gabriel.ibanez.391"}
          >
            Facebook
          </Link>
        </div>
        <ArrowRightCircle className="mobilesS:hidden md:flex" />
        <div className="flex justify-center mobilesS:items-center  md:gap-1   md:items-start mobilesS:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
          <p
            className={`font-black items-center font-Montserrat flex bg-clip-text bg-gradient-to-r from-[#bcbcbc] via-[#282828] to-[#bcbcbc] text-transparent`}
          >
            SO
          </p>
          <p
            className={`flex items-center font-Poppins  font-black text-black font-outline-2`}
          >
            CIALS
          </p>
        </div>
      </div>
    </div>
  );
}

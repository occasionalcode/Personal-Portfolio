import { ArrowUpRight, CalendarDays, Info, Trophy } from "lucide-react";
import { CustomAlertDialog } from "./reusable components/AlertDialog";
import { CustomDialog } from "./reusable components/Dialog";
import Image, { StaticImageData } from "next/image";
import { JSXElementConstructor, ReactElement } from "react";

type ProjectCardsProps = {
  title: string;
  year: number;
  description: string;
  pic: StaticImageData;
  link?: string;
  infoPics: StaticImageData[];
  aboutProject: string;
  classname: string;
  techStacks: string[];
};

export default function ProjectCards({
  title,
  year,
  description,
  pic,
  link,
  infoPics,
  aboutProject,
  classname,
  techStacks,
}: ProjectCardsProps) {
  return (
    <div className="w-full h-full text-white flex items-center ">
      <div className="p-1  flex flex-col items-center justify-between gap-2 sm:items-start">
        <div className="h-1/2">
          <Image
            placeholder="blur"
            width={1000}
            height={1000}
            className="object-cover object-center mobilesS:h-52 mobileL:h-56 sm:h-96 mobilesS:aspect-[5/2] rounded-2xl"
            src={pic}
            alt={`${title}`}
          />
        </div>

        <div className="w-full h-full">
          <div className="mobilesS:text-xs mobileL:text-sm sm:text-xs lg:text-sm xl:text-base text-gray-300">
            <p className="mobilesS:text-sm mobileL:text-base sm:text-lg md:text-base lg:text-lg xl:text-2xl text-white ">
              {title}
            </p>
            <div className="flex h-full gap-2 pt-2">
              <div className=" w-1 rounded-lg bg-white" />
              <div>
                <div className="flex items-center gap-1">
                  <CalendarDays className="mobilesS:size-3 lg:size-4" />
                  <p>{year}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Info className="mobilesS:size-3 lg:size-4" />
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="font-semibold  text-sm sm:text-base flex justify-between items-center w-full gap-3 pt-5 ">
            {/* <button className="border-2  border-white mobilesS:h-full mobilesS:w-full mobilesS:px-2 mobilesS:py-1 sm:py-3 md:py-2 rounded-sm  ">
              More
            </button> */}
            <CustomDialog
              title={`${title}`}
              trigger="More"
              description={`${description}`}
              images={infoPics}
              aboutInfo={`${aboutProject}`}
              year={year}
              classname={`${classname}`}
              techStacks={techStacks}
            />
          </div>
          {/* <a
            href={`${link}`}
            className="bg-red-600 mobilesS:h-full mobilesS:px-2 mobilesS:w-full mobilesS:py-1.5 sm:py-3 md:py-2.5 rounded flex  justify-center items-center gap-2"
          >
            View Post
            <ArrowUpRight className="mobilesS:size-5 lg:size-6" />
          </a> */}
        </div>
      </div>
    </div>
  );
}

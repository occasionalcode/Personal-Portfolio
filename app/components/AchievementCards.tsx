import { ArrowUpRight, CalendarDays, Trophy } from "lucide-react";
import { CustomAlertDialog } from "./reusable components/AlertDialog";
import { CustomDialog } from "./reusable components/Dialog";
import Image, { StaticImageData } from "next/image";

type AchievmentCardsProps = {
  title: string;
  year: number;
  description: string;
  pic: StaticImageData;
  link: string;
  infoPics: StaticImageData[];
  aboutEvent: string;
};

export default function AchievementsCards({
  title,
  year,
  description,
  pic,
  link,
  infoPics,
  aboutEvent,
}: AchievmentCardsProps) {
  return (
    <div className="w-full h-full text-white flex items-center justify-center">
      <div className="p-1  flex flex-col items-center justify-center gap-2 sm:items-start">
        <div className="h-1/2">
          <Image
            placeholder="blur"
            width={1000}
            height={1000}
            className="size-full w-full object-cover object-top mobilesS:h-52 mobileL:h-56 sm:h-96 mobilesS:aspect-[5/2] rounded-2xl"
            src={pic}
            alt={`${title}`}
          />
        </div>

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
                <Trophy className="mobilesS:size-3 lg:size-4" />
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="font-semibold  text-sm sm:text-base flex justify-between items-center w-full gap-3 ">
          {/* <button className="border-2  border-white mobilesS:h-full mobilesS:w-full mobilesS:px-2 mobilesS:py-1 sm:py-3 md:py-2 rounded-sm  ">
            More
          </button> */}
          <CustomDialog
            title={`${title}`}
            trigger="More"
            description={`${description}`}
            images={infoPics}
            aboutInfo={`${aboutEvent}`}
            year={year}
          />
          {/* <a
            href={`${link}`}
            className="bg-red-600 mobilesS:h-full mobilesS:px-2 mobilesS:w-full mobilesS:py-1.5 sm:py-3 md:py-2.5 rounded flex  justify-center items-center gap-2"
          >
            View Post
            <ArrowUpRight className="mobilesS:size-5 lg:size-6" />
          </a> */}
          <CustomAlertDialog
            link={`${link}`}
            redirectSite="Facebook"
            icon={<ArrowUpRight className="mobilesS:size-5 lg:size-6" />}
            trigger="View Post"
            title="Confirm Redirection"
          />
        </div>
      </div>
    </div>
  );
}

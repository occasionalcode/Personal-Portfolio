type CarouselVerticalProps = {
  title: string;
  year: number;
  description: string;
  pic: string;
};

export default function AchievementsCards({
  title,
  year,
  description,
  pic,
}: CarouselVerticalProps) {
  return (
    <div className="w-full h-full text-white flex items-center justify-center">
      <div className="p-1  flex flex-col items-center justify-center gap-2 sm:items-start">
        <div className="h-1/2">
          <img
            className="object-cover object-top mobilesS:h-52 mobileL:h-56 sm:h-96 mobilesS:aspect-[5/2] rounded-2xl"
            src={`${pic}`}
            alt={`${title}`}
          />
        </div>

        <div className="mobilesS:text-xs mobileL:text-sm sm:text-xs lg:text-sm xl:text-base text-gray-200">
          <p className="mobilesS:text-sm mobileL:text-base sm:text-lg md:text-base lg:text-lg xl:text-2xl text-white ">
            {title}
          </p>
          <div className="flex h-full gap-2 pt-2">
            <div className=" w-1 rounded-lg bg-white" />
            <div className="">
              <p>{year}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="font-semibold  text-sm sm:text-base flex justify-between items-center w-full gap-3 ">
          <button className="border-2  border-white mobilesS:h-full mobilesS:w-full mobilesS:px-2 mobilesS:py-1 sm:py-3 md:py-2 rounded-sm  ">
            More
          </button>
          <button className="bg-red-600 mobilesS:h-full mobilesS:px-2 mobilesS:w-full mobilesS:py-1.5 sm:py-3 md:py-2.5 rounded">
            View Post
          </button>
        </div>
      </div>
    </div>
  );
}
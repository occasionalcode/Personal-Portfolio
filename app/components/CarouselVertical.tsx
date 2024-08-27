import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselVertical";
import Achievments from "../achievements";
import AchievementsCards from "./AchievementCards";

type CarouselVerticalProps = {
  title: string;
  year: number;
  description: string;
  pic: string;
};

type ItemsProps = {
  items: CarouselVerticalProps[]; // Update this to expect an array of items
};

export function CarouselVertical({ items }: ItemsProps) {
  return (
    <Carousel
      orientation="vertical"
      opts={{ align: "start", loop: true }}
      className="w-full"
    >
      <div className="mobilesS:flex mobilesS:flex-col mobilesS:gap-5 sm:gap-0 sm:static">
        <CarouselContent className="-mt-1 mobilesS:h-[365px] mobileL:h-[415px] sm:h-[670px]">
          {items.map((item, i) => (
            <CarouselItem key={i} className="pt-1 ">
              <AchievementsCards
                title={item.title}
                year={item.year}
                description={`${item.description}`}
                pic={`${item.pic}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center flex-row-reverse mobilesS:gap-5 ">
          <CarouselNext className="static sm:absolute text-white border-none bg-transparent hover:bg-transparent hover:text-gray-400" />
          <CarouselPrevious className="static sm:absolute text-white border-none bg-transparent hover:bg-transparent hover:text-gray-400" />
        </div>
      </div>
    </Carousel>
  );
}

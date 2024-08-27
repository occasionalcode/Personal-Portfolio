// import * as React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// // Accepting an array of strings as the `items` prop
// export default function CarouselDemo({ items }: { items: string[] }) {
//   return (
//     <Carousel className="w-full h-full">
//       <CarouselContent>
//         {items.map((item, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1 flex relative size-96">
//               {/* Correctly using `item` as the source of the image */}
//               {/* <img
//                 src={item}
//                 alt={`Certificate ${index + 1}`}
//                 className=" px-36"
//               /> */}
//               <Image
//                 src={item}
//                 alt={`Certificate ${index + 1}`}
//                 layout="fill"
//                 className="object-cover"
//                 // width={0}
//                 // height={0}
//                 // sizes="100vw"
//                 // style={{ width: "50%", height: "auto" }}
//               />
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselHorizontal({ items }: { items: string[] }) {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      className=" mobilesS:w-4/5 lg:w-11/12"
    >
      <div className="mobilesS:flex mobilesS:flex-col mobilesS:gap-5 sm:static">
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="h-1/2">
                  <img className="object-contain h-full" src={item} alt="" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div className="relative md:static "> */}
        <div className="flex justify-center flex-row-reverse mobilesS:gap-5">
          <CarouselNext className="static sm:absolute" />
          <CarouselPrevious className="static sm:absolute" />
        </div>
      </div>
    </Carousel>
  );
}

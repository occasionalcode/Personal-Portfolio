import { ArrowDown, CalendarDays, Copy, Info, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialogAchievements";

import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CustomDialog = {
  trigger: string;
  images?: string[];
  title: string;
  description: string;
  aboutInfo: string;
  year: number;
  classname?: string;
};

export function CustomDialog({
  trigger,
  images,
  title,
  description,
  aboutInfo,
  year,
  classname,
}: CustomDialog) {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    setExpand(false);
  }, []);
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          // Reset expand state when the dialog is closed
          setExpand(false);
        }
      }}
    >
      <DialogTrigger asChild>
        <button className="hover:bg-gray-900 border-2 border-white mobilesS:h-full mobilesS:w-full mobilesS:px-2 mobilesS:py-1 sm:py-3 md:py-2 rounded-sm">
          {trigger}
        </button>
      </DialogTrigger>
      <DialogContent className=" bg-black bg-opacity-45 backdrop-blur-xl border-[1px] border-gray-700 text-white ">
        <div className="max-h-[80vh] overflow-scroll py-5">
          <div
            className={` relative flex flex-col mx-auto space-y-2 ${
              expand
                ? `max-h-max overflow-y-hidden`
                : `max-h-[500px] overflow-y-hidden`
            }`}
          >
            <div
              className={`absolute w-full h-full  bg-gradient-to-t ${
                !expand &&
                `from-black/95 from-[percentage:0%_10%]  via-black/5    to-transparent`
              } z-20`}
            />
            <div
              className={cn(
                "md:columns-2 gap-2 w-full space-y-2 h-full",
                classname
              )}
            >
              {images?.map((image, i) => {
                return (
                  <div key={i} className="break-inside-avoid">
                    <Image
                      width={1000}
                      height={1000}
                      className="object-cover w-full"
                      key={i}
                      src={`${image}`}
                      alt={title}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className={`w-full flex justify-center items-center py-10`}>
            <ArrowDown
              onClick={() => {
                setExpand(!expand);
              }}
              className={`text-white border-white border-2 rounded-full hover:cursor-pointer ${
                expand && "rotate-180"
              }`}
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-white font-bold ">
              <DialogTitle className="mobilesS:text-xl md:text-2xl lg:text-3xl">
                {title}
              </DialogTitle>
            </div>
            <p className="text-gray-300 mobilesS:text-sm md:text-base mobilesS:text-justify ">
              {aboutInfo}
            </p>
            <div className="flex h-full gap-2 pt-2 mobilesS:text-xs md:text-sm pb-20">
              <div className=" w-1 rounded-lg bg-white" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <CalendarDays className="mobilesS:size-4 lg:size-6" />
                  <p>{year}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Info className="mobilesS:size-4 lg:size-6" />
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

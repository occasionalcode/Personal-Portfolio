import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ReactElement } from "react";

type AlertDialogProp = {
  link: string;
  trigger: string;
  title?: string;
  description?: string;
  redirectSite?: string;
  icon?: ReactElement;
};

export function CustomAlertDialog({
  link,
  trigger,
  title,
  description,
  redirectSite,
  icon,
}: AlertDialogProp) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {icon ? (
          <button className="bg-red-600 hover:bg-red-700 mobilesS:h-full mobilesS:px-2 mobilesS:w-full mobilesS:py-1.5 sm:py-3 md:py-2.5 rounded flex  justify-center items-center gap-2">
            {trigger}
            {icon}
          </button>
        ) : (
          <button className="bg-red-600 mobilesS:h-full mobilesS:px-2 mobilesS:w-full mobilesS:py-1.5 sm:py-3 md:py-2.5 rounded flex  justify-center items-center gap-2">
            {trigger}
          </button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-black border-[1px] border-gray-700">
        <AlertDialogHeader className="text-white">
          {title ? (
            <AlertDialogTitle>{title}</AlertDialogTitle>
          ) : (
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          )}
        </AlertDialogHeader>
        {description ? (
          <AlertDialogDescription>{description}</AlertDialogDescription>
        ) : (
          <AlertDialogDescription className="text-gray-300">
            This action will redirect you to {redirectSite}. Are you certain you
            want to proceed?
          </AlertDialogDescription>
        )}
        <div className="w-full flex justify-end items-center gap-5">
          <div className=" w-full ">
            <AlertDialogCancel className="bg-transparent border-white border-[1px] w-full  text-white hover:bg-gray-900 hover:text-white">
              Cancel
            </AlertDialogCancel>
          </div>
          <a target="_blank" href={`${link}`} className="w-full ">
            <AlertDialogAction className="bg-white text-black w-full hover:bg-gray-300 mt-0">
              Continue
            </AlertDialogAction>
          </a>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

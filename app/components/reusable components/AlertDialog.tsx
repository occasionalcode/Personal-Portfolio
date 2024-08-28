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
          <button className="bg-red-600 mobilesS:h-full mobilesS:px-2 mobilesS:w-full mobilesS:py-1.5 sm:py-3 md:py-2.5 rounded flex  justify-center items-center gap-2">
            {trigger}
            {icon}
          </button>
        ) : (
          <button className="bg-red-600 mobilesS:h-full mobilesS:px-2 mobilesS:w-full mobilesS:py-1.5 sm:py-3 md:py-2.5 rounded flex  justify-center items-center gap-2">
            {trigger}
          </button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          {title ? (
            <AlertDialogTitle>{title}</AlertDialogTitle>
          ) : (
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          )}
          {description ? (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          ) : (
            <AlertDialogDescription>
              This action will redirect you to {redirectSite}. Are you sure you
              want to continue?
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <a target="_blank" href={`${link}`}>
            <AlertDialogAction>Continue</AlertDialogAction>
          </a>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

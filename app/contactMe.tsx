import StackIcon from "tech-stack-icons";
import { ContactForm } from "./components/ContactForm";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactMe() {
  return (
    <div
      id="contact"
      className=" mobilesS:flex mobilesS:flex-col md:grid md:grid-cols-2 mobilesS:px-5 md:space-x-4 justify-center items-center"
    >
      <div className="flex mobilesS:pb-5 mobilesS:text-center  h-min mobilesS:justify-center md:basis-1 xl:items-start md:items-start flex-col gap-1">
        <div className="flex justify-center mobilesS:items-center mobilesS:gap-2 md:gap-1  md:flex-col md:items-start mobilesS:text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">
          <p
            className={`font-black items-center font-Montserrat flex bg-clip-text bg-gradient-to-r from-[#bcbcbc] via-[#282828] to-[#bcbcbc] text-transparent`}
          >
            CONTACT
          </p>
          <p
            className={`flex items-center font-Poppins  font-black text-black font-outline-2`}
          >
            ME
          </p>
        </div>
        <p className="text-white mobilesS:text-sm sm:text-xl xl:text-2xl md:text-start ">
          Got a project in mind, need a collaborator, or just want to chat?
          Let's create something awesome together!
        </p>
        {/* <div className="text-white text-xs lg:text-base gap-4 lg:gap-2 mobilesS:hidden flex-col md:pt-5 justify-center items-start w-full md:flex">
          <p className="">Or Contact me through:</p>
          <div className="flex flex-col gap-5 lg:gap-2 justify-center items-start text">
            <div className="flex mobilesS:gap-3 items-center text-start">
              <Linkedin className="md:size-7 text-white" />
              <Link
                className="hover:text-red-200 underline"
                target="_blank"
                href="https://www.linkedin.com/in/gabriel-christian-ibanez-30271b298/"
              >
                https://www.linkedin.com/in/gabriel-christian-ibanez-30271b298/
              </Link>
            </div>
            <div className="flex mobilesS:gap-3 items-center">
              <Mail className="md:size-7 text-white" />
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/gabriel-christian-ibanez-30271b298/"
              >
                gabrielibanez50@gmail.com
              </Link>
            </div>
            <div className="flex mobilesS:gap-3 items-center">
              <Phone className="md:size-7 text-white" />
              +63 923 700 3403
            </div>
          </div>
        </div> */}
      </div>
      <ContactForm />
      {/* <div className="text-white text-xs gap-4 flex flex-col justify-center items-start w-full md:hidden">
        <p className=" mobilesS:pt-14">Or Contact me through:</p>
        <div className="flex flex-col gap-5 justify-center items-start ">
          <div className="flex mobilesS:gap-3 items-center">
            <Linkedin className="md:size-10 text-white" />
            <Link
              target="_blank"
              className="underline"
              href="https://www.linkedin.com/in/gabriel-christian-ibanez-30271b298/"
            >
              https://www.linkedin.com/in/gabriel-christian-ibanez-30271b298/
            </Link>
          </div>
          <div className="flex mobilesS:gap-3 items-center">
            <Mail className="md:size-10 text-white" />
            <p>gabrielibanez50@gmail.com</p>
          </div>
          <div className="flex mobilesS:gap-3 items-center">
            <Phone className="md:size-10 text-white" />
            +63 923 700 3403
          </div>
        </div>
      </div> */}
    </div>
  );
}

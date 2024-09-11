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
            style={{
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className={`font-black items-center font-Montserrat flex  bg-gradient-to-r from-[#bcbcbc] via-[#282828] to-[#bcbcbc] text-transparent`}
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
      </div>
      <ContactForm />
    </div>
  );
}

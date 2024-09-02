import Image from "next/image";
import Hero from "./hero";
import About from "./about";
import SampleCertificates from "./SAMPLEcertificates";
import SampleAchievments from "./SAMPLEachievements";
import Certificates from "./certificates";
import Achievments from "./achievements";
import Achievments2 from "./achievements2";
import StickyTest from "./demo";
import Projects from "./projects";
import ContactMe from "./contactMe";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 w-full lg:gap-32">
      <Hero />
      <About />

      <Certificates />
      <Achievments2 />
      <Projects />
      <ContactMe />
    </main>
  );
}

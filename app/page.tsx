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

export default function Home() {
  return (
    <main className="flex flex-col gap-16 ">
      <div className="flex flex-col gap-16  ">
        <Hero />
        <About />
      </div>
      <Certificates />
      <Achievments2 />
      <Projects />
      {/* <StickyTest /> */}
    </main>
  );
}

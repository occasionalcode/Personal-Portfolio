import Image from "next/image";
import Hero from "./hero";
import About from "./about";
import SampleCertificates from "./SAMPLEcertificates";
import SampleAchievments from "./SAMPLEachievements";
import Certificates from "./certificates";
import Achievments from "./achievements";

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <Hero />
      <About />
      <Certificates />
      <Achievments />
    </main>
  );
}

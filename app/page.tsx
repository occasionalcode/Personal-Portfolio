import Hero from "./hero";
import About from "./about";

import Certificates from "./certificates";

import Achievments2 from "./achievements2";
import StickyTest from "./demo";
import Projects from "./projects";
import ContactMe from "./contactMe";
import Socials from "./Socials";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 w-full lg:gap-32 mb-32">
      <Hero />
      <About />
      <Certificates />
      <Achievments2 />
      <Projects />
      <ContactMe />
      <Socials />
    </main>
  );
}
